export interface CalorieInput {
  gender: 'male' | 'female'
  age: number
  weight: number // kg
  height: number // cm
  activityFactor: number
  bodyFat?: number // percent
}

export interface CalorieResult {
  bmr: number
  tdee: number
  deficit: number // -15%
  surplus: number // +15%
}

// 1. Миффлина-Сан Жеора (рекомендуемая)
export function mifflinStJeor(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  const tdee = bmr * activityFactor

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  }
}

// 2. Харриса-Бенедикта (оригинальная 1919)
export function harrisBenedict(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input

  const bmr =
    gender === 'male'
      ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
      : 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age

  const tdee = bmr * activityFactor

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  }
}

// 3. Харриса-Бенедикта (пересмотренная 1984)
export function harrisBenedictRevised(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input

  const bmr =
    gender === 'male'
      ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age

  const tdee = bmr * activityFactor

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  }
}

// 4. Кетча-МакАрдла (учитывает % жира)
export function katchMcArdle(input: CalorieInput): CalorieResult {
  const { weight, activityFactor, bodyFat = 20 } = input

  const leanMass = weight * (1 - bodyFat / 100)
  const bmr = 370 + 21.6 * leanMass
  const tdee = bmr * activityFactor

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  }
}

// 5. Формула ВОЗ
export function whoFormula(input: CalorieInput): CalorieResult {
  const { gender, age, weight, activityFactor } = input

  let bmr: number

  if (gender === 'male') {
    if (age < 30) bmr = 15.3 * weight + 679
    else if (age < 60) bmr = 11.6 * weight + 879
    else bmr = 13.5 * weight + 487
  } else {
    if (age < 30) bmr = 14.7 * weight + 496
    else if (age < 60) bmr = 8.7 * weight + 829
    else bmr = 10.5 * weight + 596
  }

  const tdee = bmr * activityFactor

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  }
}

// Все формулы для сравнения
export function calculateAllFormulas(input: CalorieInput) {
  return [
    { name: 'Миффлина-Сан Жеора', ...mifflinStJeor(input), recommended: true },
    { name: 'Харриса-Бенедикта', ...harrisBenedict(input), recommended: false },
    { name: 'Харриса-Бенедикта (1984)', ...harrisBenedictRevised(input), recommended: false },
    { name: 'Кетча-МакАрдла', ...katchMcArdle(input), recommended: false },
    { name: 'ВОЗ', ...whoFormula(input), recommended: false },
  ]
}

// Расчёт БЖУ
export function calculateMacros(calories: number, goal: 'lose' | 'maintain' | 'gain') {
  const ratios = {
    lose: { protein: 0.35, fat: 0.3, carbs: 0.35 },
    maintain: { protein: 0.3, fat: 0.3, carbs: 0.4 },
    gain: { protein: 0.3, fat: 0.25, carbs: 0.45 },
  }

  const r = ratios[goal]

  return {
    protein: Math.round((calories * r.protein) / 4),
    fat: Math.round((calories * r.fat) / 9),
    carbs: Math.round((calories * r.carbs) / 4),
  }
}
