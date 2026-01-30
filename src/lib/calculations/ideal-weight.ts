// === Типы ===

export interface IdealWeightInput {
  gender: 'male' | 'female'
  height: number // см
  weight: number // кг — текущий вес для сравнения
}

export interface FormulaResult {
  name: string
  value: number // кг, округлено до целого
  recommended: boolean
}

export interface IdealWeightResult {
  formulas: FormulaResult[]
  min: number
  max: number
  average: number
  /** weight − average: >0 лишний вес, <0 недобор, 0 норма */
  currentDiff: number
  /** true если текущий вес в пределах min–max */
  inRange: boolean
}

// === Утилита ===

/** Перевод сантиметров в дюймы */
function cmToInches(cm: number): number {
  return cm / 2.54
}

// === Формулы ===

function devine(gender: 'male' | 'female', heightCm: number): number {
  const inches = cmToInches(heightCm)
  return gender === 'male'
    ? 50 + 2.3 * (inches - 60)
    : 45.5 + 2.3 * (inches - 60)
}

function robinson(gender: 'male' | 'female', heightCm: number): number {
  const inches = cmToInches(heightCm)
  return gender === 'male'
    ? 52 + 1.9 * (inches - 60)
    : 49 + 1.7 * (inches - 60)
}

function miller(gender: 'male' | 'female', heightCm: number): number {
  const inches = cmToInches(heightCm)
  return gender === 'male'
    ? 56.2 + 1.41 * (inches - 60)
    : 53.1 + 1.36 * (inches - 60)
}

function hamwi(gender: 'male' | 'female', heightCm: number): number {
  const inches = cmToInches(heightCm)
  return gender === 'male'
    ? 48 + 2.7 * (inches - 60)
    : 45.5 + 2.2 * (inches - 60)
}

function broca(gender: 'male' | 'female', heightCm: number): number {
  return gender === 'male'
    ? (heightCm - 100) * 1.15
    : (heightCm - 110) * 1.15
}

// === Основной расчёт ===

export function calculateIdealWeight(input: IdealWeightInput): IdealWeightResult {
  const { gender, height, weight } = input

  const formulas: FormulaResult[] = [
    { name: 'Devine (1974)', value: Math.round(devine(gender, height)), recommended: true },
    { name: 'Robinson (1983)', value: Math.round(robinson(gender, height)), recommended: false },
    { name: 'Miller (1983)', value: Math.round(miller(gender, height)), recommended: false },
    { name: 'Hamwi (1964)', value: Math.round(hamwi(gender, height)), recommended: false },
    { name: 'Брока (мод.)', value: Math.round(broca(gender, height)), recommended: false },
  ]

  const values = formulas.map((f) => f.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length)

  const currentDiff = weight - average
  const inRange = weight >= min && weight <= max

  return { formulas, min, max, average, currentDiff, inRange }
}
