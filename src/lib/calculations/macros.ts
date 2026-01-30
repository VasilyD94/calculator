export interface MacroInput {
  gender: 'male' | 'female'
  age: number
  weight: number // kg
  height: number // cm
  activityFactor: number
  goal: 'lose' | 'maintain' | 'gain'
  dietType: DietType
}

export type DietType =
  | 'balanced'
  | 'highProtein'
  | 'lowCarb'
  | 'keto'
  | 'athlete'

export interface DietProfile {
  id: DietType
  label: string
  description: string
  emoji: string
  proteinRatio: number // доля от калорий
  fatRatio: number
  carbsRatio: number
}

export const DIET_PROFILES: DietProfile[] = [
  {
    id: 'balanced',
    label: 'Сбалансированная',
    description: 'Классическое соотношение для большинства людей',
    emoji: '⚖️',
    proteinRatio: 0.3,
    fatRatio: 0.3,
    carbsRatio: 0.4,
  },
  {
    id: 'highProtein',
    label: 'Высокобелковая',
    description: 'Для сохранения мышц при похудении',
    emoji: '🥩',
    proteinRatio: 0.4,
    fatRatio: 0.3,
    carbsRatio: 0.3,
  },
  {
    id: 'lowCarb',
    label: 'Низкоуглеводная',
    description: 'Ограничение углеводов для контроля веса',
    emoji: '🥑',
    proteinRatio: 0.35,
    fatRatio: 0.4,
    carbsRatio: 0.25,
  },
  {
    id: 'keto',
    label: 'Кето',
    description: 'Минимум углеводов, максимум жиров',
    emoji: '🧈',
    proteinRatio: 0.25,
    fatRatio: 0.7,
    carbsRatio: 0.05,
  },
  {
    id: 'athlete',
    label: 'Для спортсменов',
    description: 'Больше углеводов для энергии на тренировках',
    emoji: '💪',
    proteinRatio: 0.3,
    fatRatio: 0.2,
    carbsRatio: 0.5,
  },
]

export interface MacroResult {
  calories: number
  protein: number // граммы
  fat: number
  carbs: number
  proteinCalories: number
  fatCalories: number
  carbsCalories: number
  proteinPerKg: number
  fatPerKg: number
  carbsPerKg: number
}

// Расчёт TDEE по Миффлину-Сан Жеора
function calculateTDEE(input: MacroInput): number {
  const { gender, age, weight, height, activityFactor } = input

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  return bmr * activityFactor
}

// Целевые калории с учётом цели
function getTargetCalories(
  tdee: number,
  goal: 'lose' | 'maintain' | 'gain'
): number {
  switch (goal) {
    case 'lose':
      return Math.round(tdee * 0.85) // -15%
    case 'gain':
      return Math.round(tdee * 1.15) // +15%
    default:
      return Math.round(tdee)
  }
}

// Основной расчёт БЖУ
export function calculateMacrosFull(input: MacroInput): MacroResult {
  const tdee = calculateTDEE(input)
  const calories = getTargetCalories(tdee, input.goal)
  const profile = DIET_PROFILES.find((d) => d.id === input.dietType) ?? DIET_PROFILES[0]

  const proteinCalories = calories * profile.proteinRatio
  const fatCalories = calories * profile.fatRatio
  const carbsCalories = calories * profile.carbsRatio

  const protein = Math.round(proteinCalories / 4)
  const fat = Math.round(fatCalories / 9)
  const carbs = Math.round(carbsCalories / 4)

  return {
    calories,
    protein,
    fat,
    carbs,
    proteinCalories: Math.round(proteinCalories),
    fatCalories: Math.round(fatCalories),
    carbsCalories: Math.round(carbsCalories),
    proteinPerKg: Math.round((protein / input.weight) * 10) / 10,
    fatPerKg: Math.round((fat / input.weight) * 10) / 10,
    carbsPerKg: Math.round((carbs / input.weight) * 10) / 10,
  }
}

// Расчёт БЖУ для всех типов диет (для сравнения)
export function calculateAllDiets(
  input: Omit<MacroInput, 'dietType'>
): (MacroResult & { diet: DietProfile })[] {
  return DIET_PROFILES.map((diet) => ({
    ...calculateMacrosFull({ ...input, dietType: diet.id }),
    diet,
  }))
}
