// === Типы ===

export interface BodyFatInput {
  gender: 'male' | 'female'
  age: number
  weight: number  // кг
  height: number  // см
  waist: number   // обхват талии, см
  neck: number    // обхват шеи, см
  hip: number     // обхват бёдер, см (только для женщин)
}

export type BodyFatCategoryColor = 'green' | 'yellow' | 'red' | 'blue'

export interface BodyFatCategoryInfo {
  min: number
  max: number
  label: string
  color: BodyFatCategoryColor
  active: boolean
}

export interface FormulaResult {
  name: string
  value: number
  recommended: boolean
}

export interface BodyFatResult {
  formulas: FormulaResult[]
  /** Среднее по всем формулам — основной показатель */
  bodyFat: number
  category: string
  color: BodyFatCategoryColor
  status: 'success' | 'warning' | 'danger'
  categories: BodyFatCategoryInfo[]
  fatMass: number   // кг
  leanMass: number  // кг
}

// === Категории ACE (American Council on Exercise) ===

interface BodyFatCategory {
  min: number
  max: number
  label: string
  color: BodyFatCategoryColor
  status: 'success' | 'warning' | 'danger'
}

const MALE_CATEGORIES: BodyFatCategory[] = [
  { min: 0, max: 6, label: 'Незаменимый жир', color: 'blue', status: 'warning' },
  { min: 6, max: 14, label: 'Атлеты', color: 'green', status: 'success' },
  { min: 14, max: 18, label: 'Фитнес', color: 'green', status: 'success' },
  { min: 18, max: 25, label: 'Средний', color: 'yellow', status: 'warning' },
  { min: 25, max: 50, label: 'Выше нормы', color: 'red', status: 'danger' },
]

const FEMALE_CATEGORIES: BodyFatCategory[] = [
  { min: 0, max: 14, label: 'Незаменимый жир', color: 'blue', status: 'warning' },
  { min: 14, max: 21, label: 'Атлеты', color: 'green', status: 'success' },
  { min: 21, max: 25, label: 'Фитнес', color: 'green', status: 'success' },
  { min: 25, max: 32, label: 'Средний', color: 'yellow', status: 'warning' },
  { min: 32, max: 50, label: 'Выше нормы', color: 'red', status: 'danger' },
]

// === Формулы ===

/** Метод ВМС США (US Navy) */
function usNavy(input: BodyFatInput): number {
  const { gender, height, waist, neck, hip } = input

  if (gender === 'male') {
    const diff = waist - neck
    if (diff <= 0) return 0
    return 86.010 * Math.log10(diff) - 70.041 * Math.log10(height) + 36.76
  }

  // female
  const sum = waist + hip - neck
  if (sum <= 0) return 0
  return 163.205 * Math.log10(sum) - 97.684 * Math.log10(height) - 78.387
}

/** Формула Deurenberg (1991) — на основе ИМТ */
function deurenberg(input: BodyFatInput): number {
  const { gender, age, weight, height } = input
  const heightM = height / 100
  const bmi = weight / (heightM * heightM)
  const sex = gender === 'male' ? 1 : 0
  return 1.20 * bmi + 0.23 * age - 10.8 * sex - 5.4
}

/** Формула Gallagher (2000) — на основе ИМТ */
function gallagher(input: BodyFatInput): number {
  const { gender, age, weight, height } = input
  const heightM = height / 100
  const bmi = weight / (heightM * heightM)
  const sex = gender === 'male' ? 1 : 0
  return 63.7 - 864 * (1 / bmi) - 12.1 * sex + 0.12 * age
}

// === Основной расчёт ===

function clampBF(value: number): number {
  return Math.max(0, Math.min(50, Math.round(value * 10) / 10))
}

export function calculateBodyFat(input: BodyFatInput): BodyFatResult {
  const navyRaw = clampBF(usNavy(input))
  const deurenbergRaw = clampBF(deurenberg(input))
  const gallagherRaw = clampBF(gallagher(input))

  const formulas: FormulaResult[] = [
    { name: 'ВМС США (US Navy)', value: navyRaw, recommended: true },
    { name: 'Deurenberg (1991)', value: deurenbergRaw, recommended: false },
    { name: 'Gallagher (2000)', value: gallagherRaw, recommended: false },
  ]

  // Среднее по всем формулам — основной показатель
  const avg = Math.round(((navyRaw + deurenbergRaw + gallagherRaw) / 3) * 10) / 10

  const cats = input.gender === 'male' ? MALE_CATEGORIES : FEMALE_CATEGORIES

  const activeCat =
    cats.find((c) => avg >= c.min && avg < c.max) ||
    cats[cats.length - 1]

  const categories: BodyFatCategoryInfo[] = cats.map((c) => ({
    min: c.min,
    max: c.max,
    label: c.label,
    color: c.color,
    active: c === activeCat,
  }))

  const fatMass = Math.round((input.weight * avg) / 100 * 10) / 10
  const leanMass = Math.round((input.weight - fatMass) * 10) / 10

  return {
    formulas,
    bodyFat: avg,
    category: activeCat.label,
    color: activeCat.color,
    status: activeCat.status,
    categories,
    fatMass,
    leanMass,
  }
}
