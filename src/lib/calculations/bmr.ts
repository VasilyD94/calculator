// === Типы ===

export interface BMRInput {
  gender: 'male' | 'female'
  age: number
  weight: number  // кг
  height: number  // см
}

export interface FormulaResult {
  name: string
  value: number
  recommended: boolean
}

export interface BMRResult {
  formulas: FormulaResult[]
  /** Рекомендуемое значение (Миффлина-Сан Жеора) */
  recommended: number
  min: number
  max: number
  average: number
  /** Расход в покое за час */
  hourly: number
}

// === Формулы ===

/** 1. Миффлина-Сан Жеора (1990) — рекомендуемая */
function mifflinStJeor({ gender, age, weight, height }: BMRInput): number {
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161
}

/** 2. Харриса-Бенедикта (оригинальная, 1919) */
function harrisBenedict({ gender, age, weight, height }: BMRInput): number {
  return gender === 'male'
    ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
    : 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age
}

/** 3. Харриса-Бенедикта (пересмотренная, 1984) */
function harrisBenedictRevised({ gender, age, weight, height }: BMRInput): number {
  return gender === 'male'
    ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age
}

/** 4. Кетча-МакАрдла (оценка сухой массы по среднему % жира) */
function katchMcArdle({ gender, weight }: BMRInput): number {
  // Средний % жира: мужчины ~20%, женщины ~28%
  const avgBodyFat = gender === 'male' ? 20 : 28
  const leanMass = weight * (1 - avgBodyFat / 100)
  return 370 + 21.6 * leanMass
}

/** 5. Формула ВОЗ */
function who({ gender, age, weight }: BMRInput): number {
  if (gender === 'male') {
    if (age < 30) return 15.3 * weight + 679
    if (age < 60) return 11.6 * weight + 879
    return 13.5 * weight + 487
  }
  // female
  if (age < 30) return 14.7 * weight + 496
  if (age < 60) return 8.7 * weight + 829
  return 10.5 * weight + 596
}

// === Основной расчёт ===

export function calculateBMR(input: BMRInput): BMRResult {
  const values = [
    mifflinStJeor(input),
    harrisBenedict(input),
    harrisBenedictRevised(input),
    katchMcArdle(input),
    who(input),
  ].map((v) => Math.round(v))

  const formulas: FormulaResult[] = [
    { name: 'Миффлина-Сан Жеора (1990)', value: values[0], recommended: true },
    { name: 'Харриса-Бенедикта (1919)', value: values[1], recommended: false },
    { name: 'Харриса-Бенедикта (1984)', value: values[2], recommended: false },
    { name: 'Кетча-МакАрдла', value: values[3], recommended: false },
    { name: 'ВОЗ', value: values[4], recommended: false },
  ]

  const recommended = values[0]
  const min = Math.min(...values)
  const max = Math.max(...values)
  const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length)
  const hourly = Math.round(recommended / 24)

  return {
    formulas,
    recommended,
    min,
    max,
    average,
    hourly,
  }
}
