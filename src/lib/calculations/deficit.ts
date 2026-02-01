import { mifflinStJeor, calculateMacros } from './calories'

// === Типы ===

export interface DeficitInput {
  gender: 'male' | 'female'
  age: number
  weight: number
  height: number
  activityFactor: number
  targetWeight: number
  dailyDeficit: number
}

export interface DeficitResult {
  tdee: number
  bmr: number
  dailyCalories: number
  dailyDeficit: number
  deficitPercent: number
  weeklyLoss: number
  weeksNeeded: number
  targetDate: Date
  totalDeficit: number
  weightToLose: number
  macros: { protein: number; fat: number; carbs: number }
}

export interface DeficitScenario {
  label: string
  deficit: number
  dailyCalories: number
  weeklyLoss: number
  weeksNeeded: number
  targetDateStr: string
  risk: 'low' | 'moderate' | 'high'
}

export interface WeightPoint {
  week: number
  weight: number
  date: string
  milestone?: string
}

export interface RiskAssessment {
  sustainability: 'easy' | 'moderate' | 'hard'
  muscleLossRisk: 'low' | 'moderate' | 'high'
  warnings: string[]
}

// === Константы ===

const KCAL_PER_KG = 7700 // ккал в 1 кг жира

// === Расчёты ===

export function calculateDeficit(input: DeficitInput): DeficitResult {
  const { gender, age, weight, height, activityFactor, targetWeight, dailyDeficit } = input

  const { bmr, tdee } = mifflinStJeor({ gender, age, weight, height, activityFactor })

  const minSafe = gender === 'female' ? 1200 : 1500
  const dailyCalories = Math.max(minSafe, tdee - dailyDeficit)
  const actualDeficit = tdee - dailyCalories
  const deficitPercent = Math.round((actualDeficit / tdee) * 100)

  const weeklyLoss = (actualDeficit * 7) / KCAL_PER_KG
  const weightToLose = weight - targetWeight
  const weeksNeeded = weeklyLoss > 0 ? Math.ceil(weightToLose / weeklyLoss) : 0

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + weeksNeeded * 7)

  const totalDeficit = weightToLose * KCAL_PER_KG

  const macros = calculateMacros(dailyCalories, 'lose')

  return {
    tdee,
    bmr,
    dailyCalories,
    dailyDeficit: actualDeficit,
    deficitPercent,
    weeklyLoss: Math.round(weeklyLoss * 100) / 100,
    weeksNeeded,
    targetDate,
    totalDeficit,
    weightToLose,
    macros,
  }
}

export function calculateTimeline(
  currentWeight: number,
  targetWeight: number,
  weeklyLoss: number
): WeightPoint[] {
  if (weeklyLoss <= 0) return []

  const weightToLose = currentWeight - targetWeight
  const totalWeeks = Math.ceil(weightToLose / weeklyLoss)
  const points: WeightPoint[] = []

  const milestonePercents = [0.25, 0.5, 0.75, 1]
  const milestoneLabels = ['25%', '50%', '75%', 'Цель']

  for (let week = 0; week <= totalWeeks; week++) {
    const w = Math.max(targetWeight, currentWeight - weeklyLoss * week)
    const date = new Date()
    date.setDate(date.getDate() + week * 7)

    const progressPercent = (currentWeight - w) / weightToLose

    let milestone: string | undefined
    for (let i = 0; i < milestonePercents.length; i++) {
      const mp = milestonePercents[i]
      const prevW = week > 0 ? currentWeight - weeklyLoss * (week - 1) : currentWeight
      const prevProgress = (currentWeight - prevW) / weightToLose
      if (prevProgress < mp && progressPercent >= mp) {
        milestone = milestoneLabels[i]
        break
      }
    }

    points.push({
      week,
      weight: Math.round(w * 10) / 10,
      date: date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
      milestone,
    })
  }

  return points
}

export function calculateScenarios(
  tdee: number,
  weightToLose: number,
  gender: 'male' | 'female'
): DeficitScenario[] {
  const minSafe = gender === 'female' ? 1200 : 1500

  const scenarios: { label: string; deficit: number }[] = [
    { label: 'Лёгкий', deficit: 300 },
    { label: 'Умеренный', deficit: 500 },
    { label: 'Агрессивный', deficit: 750 },
  ]

  return scenarios.map((s) => {
    const dailyCalories = Math.max(minSafe, tdee - s.deficit)
    const actualDeficit = tdee - dailyCalories
    const weeklyLoss = (actualDeficit * 7) / KCAL_PER_KG
    const weeksNeeded = weeklyLoss > 0 ? Math.ceil(weightToLose / weeklyLoss) : 0

    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + weeksNeeded * 7)

    const risk: DeficitScenario['risk'] =
      actualDeficit <= 400 ? 'low' : actualDeficit <= 700 ? 'moderate' : 'high'

    return {
      ...s,
      deficit: actualDeficit,
      dailyCalories,
      weeklyLoss: Math.round(weeklyLoss * 100) / 100,
      weeksNeeded,
      targetDateStr: targetDate.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      risk,
    }
  })
}

export function assessRisk(
  deficit: number,
  tdee: number,
  dailyCalories: number,
  gender: 'male' | 'female'
): RiskAssessment {
  const deficitPercent = (deficit / tdee) * 100
  const minSafe = gender === 'female' ? 1200 : 1500
  const warnings: string[] = []

  // Устойчивость
  const sustainability: RiskAssessment['sustainability'] =
    deficitPercent <= 15 ? 'easy' : deficitPercent <= 25 ? 'moderate' : 'hard'

  // Риск потери мышц
  const muscleLossRisk: RiskAssessment['muscleLossRisk'] =
    deficitPercent <= 15 ? 'low' : deficitPercent <= 30 ? 'moderate' : 'high'

  // Предупреждения
  if (dailyCalories <= minSafe) {
    warnings.push(
      `Калорийность ограничена до ${minSafe} ккал — минимум для ${gender === 'female' ? 'женщин' : 'мужчин'} без наблюдения врача.`
    )
  }

  if (deficitPercent > 30) {
    warnings.push(
      'Дефицит более 30% от TDEE может привести к замедлению метаболизма и потере мышечной массы.'
    )
  }

  if (deficit > 750) {
    warnings.push(
      'При таком дефиците повышается риск срывов. Рассмотрите более мягкий вариант для устойчивого результата.'
    )
  }

  return { sustainability, muscleLossRisk, warnings }
}
