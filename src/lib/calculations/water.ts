// === Типы ===

export interface WaterInput {
  gender: 'male' | 'female'
  weight: number
  activity: string
  hotClimate: boolean
  pregnant: boolean
  breastfeeding: boolean
}

export interface WaterBreakdown {
  base: number
  activity: number
  climate: number
  special: number
}

export interface WaterScheduleItem {
  period: string
  emoji: string
  time: string
  amount: number
  glasses: number
  tip: string
}

export interface WaterResult {
  totalMl: number
  totalLiters: number
  glasses: number
  breakdown: WaterBreakdown
  schedule: WaterScheduleItem[]
}

// === Константы ===

const ML_PER_KG_MALE = 35
const ML_PER_KG_FEMALE = 31
const GLASS_ML = 250

const ACTIVITY_WATER: Record<string, number> = {
  sedentary: 0,
  light: 200,
  moderate: 400,
  active: 600,
  extreme: 800,
}

const CLIMATE_BONUS = 500
const PREGNANCY_BONUS = 300
const BREASTFEEDING_BONUS = 700

// === Расчёты ===

export function calculateWater(input: WaterInput): WaterResult {
  const { gender, weight, activity, hotClimate, pregnant, breastfeeding } = input

  // Базовая потребность
  const mlPerKg = gender === 'male' ? ML_PER_KG_MALE : ML_PER_KG_FEMALE
  const base = Math.round(weight * mlPerKg)

  // Добавка за активность
  const activityBonus = ACTIVITY_WATER[activity] ?? 0

  // Добавка за климат
  const climateBonus = hotClimate ? CLIMATE_BONUS : 0

  // Добавка за особенности (только женщины)
  let specialBonus = 0
  if (gender === 'female') {
    if (breastfeeding) {
      specialBonus = BREASTFEEDING_BONUS
    } else if (pregnant) {
      specialBonus = PREGNANCY_BONUS
    }
  }

  const totalMl = base + activityBonus + climateBonus + specialBonus
  const glasses = Math.round(totalMl / GLASS_ML)
  const totalLiters = Math.round(totalMl / 100) / 10 // до 1 знака

  // Распределение по времени дня
  const schedule = buildSchedule(totalMl)

  return {
    totalMl,
    totalLiters,
    glasses,
    breakdown: {
      base,
      activity: activityBonus,
      climate: climateBonus,
      special: specialBonus,
    },
    schedule,
  }
}

function buildSchedule(totalMl: number): WaterScheduleItem[] {
  // Распределяем: утро 25%, до обеда 30%, после обеда 30%, вечер 15%
  const morning = Math.round(totalMl * 0.25)
  const beforeLunch = Math.round(totalMl * 0.3)
  const afternoon = Math.round(totalMl * 0.3)
  const evening = totalMl - morning - beforeLunch - afternoon

  return [
    {
      period: 'Утро',
      emoji: '🌅',
      time: '7:00–9:00',
      amount: morning,
      glasses: Math.round(morning / GLASS_ML),
      tip: '1–2 стакана натощак запускают метаболизм',
    },
    {
      period: 'До обеда',
      emoji: '☀️',
      time: '9:00–13:00',
      amount: beforeLunch,
      glasses: Math.round(beforeLunch / GLASS_ML),
      tip: 'Пейте за 30 мин до еды для лучшего пищеварения',
    },
    {
      period: 'После обеда',
      emoji: '🌤️',
      time: '13:00–18:00',
      amount: afternoon,
      glasses: Math.round(afternoon / GLASS_ML),
      tip: 'Равномерно распределяйте между приёмами пищи',
    },
    {
      period: 'Вечер',
      emoji: '🌙',
      time: '18:00–21:00',
      amount: evening,
      glasses: Math.round(evening / GLASS_ML),
      tip: 'Ограничьте воду за 1 час до сна',
    },
  ]
}
