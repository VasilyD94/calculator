import type { ScaleRange } from '@/components/results/ResultScale'

// === Типы ===

export interface BMIInput {
  gender: 'male' | 'female'
  weight: number // кг
  height: number // см
}

export interface BMIResult {
  bmi: number
  category: string
  status: 'success' | 'warning' | 'danger'
  color: ScaleRange['color']
  idealWeight: { min: number; max: number }
  weightDiff: number // >0 = набрать, <0 = сбросить, 0 = норма
  ranges: ScaleRange[]
}

// === Категории ВОЗ ===

interface BMICategory {
  min: number
  max: number
  label: string
  color: ScaleRange['color']
  status: 'success' | 'warning' | 'danger'
}

const BMI_CATEGORIES: BMICategory[] = [
  { min: 0, max: 16, label: 'Выраженный дефицит', color: 'blue', status: 'danger' },
  { min: 16, max: 18.5, label: 'Дефицит массы', color: 'blue', status: 'warning' },
  { min: 18.5, max: 25, label: 'Норма', color: 'green', status: 'success' },
  { min: 25, max: 30, label: 'Избыточный вес', color: 'yellow', status: 'warning' },
  { min: 30, max: 35, label: 'Ожирение I', color: 'red', status: 'danger' },
  { min: 35, max: 40, label: 'Ожирение II', color: 'red', status: 'danger' },
  { min: 40, max: 50, label: 'Ожирение III', color: 'red', status: 'danger' },
]

// === Расчёт ===

export function calculateBMI(input: BMIInput): BMIResult {
  const { weight, height } = input
  const heightM = height / 100
  const bmi = Math.round((weight / (heightM * heightM)) * 10) / 10

  const category =
    BMI_CATEGORIES.find((c) => bmi >= c.min && bmi < c.max) ||
    BMI_CATEGORIES[BMI_CATEGORIES.length - 1]

  const idealWeight = {
    min: Math.round(18.5 * heightM * heightM),
    max: Math.round(24.9 * heightM * heightM),
  }

  let weightDiff = 0
  if (bmi < 18.5) {
    weightDiff = idealWeight.min - weight // положительное = набрать
  } else if (bmi >= 25) {
    weightDiff = idealWeight.max - weight // отрицательное = сбросить
  }

  const ranges: ScaleRange[] = BMI_CATEGORIES.map((c) => ({
    min: c.min,
    max: c.max,
    label: c.label,
    color: c.color,
  }))

  return {
    bmi,
    category: category.label,
    status: category.status,
    color: category.color,
    idealWeight,
    weightDiff: Math.round(weightDiff),
    ranges,
  }
}
