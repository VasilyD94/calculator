// === Типы ===

export type TrainingType = 'recreational' | 'endurance' | 'mixed' | 'strength'
export type ProteinGoal = 'maintain' | 'gain' | 'lose'

export interface ProteinInput {
  weight: number // 30–200 кг
  trainingType: TrainingType
  goal: ProteinGoal
}

export interface ProteinRange {
  min: number // г/кг
  max: number // г/кг
}

export interface ProteinFormulaResult {
  name: string
  value: number // г/день (среднее значение рекомендации)
  recommended?: boolean
}

export interface ProteinResult {
  /** Рекомендуемый диапазон г/день */
  dailyMin: number
  dailyMax: number
  /** г/кг тела */
  perKgMin: number
  perKgMax: number
  /** На 1 приём пищи (4 приёма) */
  perMealMin: number
  perMealMax: number
  /** Вес (входное значение) */
  weight: number
  /** Формулы для сравнения */
  formulas: ProteinFormulaResult[]
}

// === Матрица рекомендаций по типу тренировок и цели ===

const PROTEIN_MATRIX: Record<TrainingType, Record<ProteinGoal, ProteinRange>> = {
  recreational: {
    maintain: { min: 1.0, max: 1.2 },
    gain: { min: 1.2, max: 1.6 },
    lose: { min: 1.2, max: 1.6 },
  },
  endurance: {
    maintain: { min: 1.2, max: 1.4 },
    gain: { min: 1.4, max: 1.6 },
    lose: { min: 1.4, max: 1.8 },
  },
  mixed: {
    maintain: { min: 1.4, max: 1.7 },
    gain: { min: 1.6, max: 2.0 },
    lose: { min: 1.6, max: 2.2 },
  },
  strength: {
    maintain: { min: 1.6, max: 2.0 },
    gain: { min: 1.8, max: 2.2 },
    lose: { min: 2.0, max: 2.4 },
  },
}

// === Формулы организаций ===

/** ISSN (2017) — International Society of Sports Nutrition */
function issn(weight: number, trainingType: TrainingType, goal: ProteinGoal): number {
  const range = PROTEIN_MATRIX[trainingType][goal]
  const midpoint = (range.min + range.max) / 2
  return Math.round(weight * midpoint)
}

/** ACSM/AND/DC (2016) — American College of Sports Medicine */
function acsm(weight: number, trainingType: TrainingType): number {
  const ranges: Record<TrainingType, ProteinRange> = {
    recreational: { min: 1.0, max: 1.2 },
    endurance: { min: 1.2, max: 1.4 },
    mixed: { min: 1.2, max: 1.7 },
    strength: { min: 1.6, max: 2.0 },
  }
  const range = ranges[trainingType]
  const midpoint = (range.min + range.max) / 2
  return Math.round(weight * midpoint)
}

/** RDA — Recommended Dietary Allowance (минимум) */
function rda(weight: number): number {
  return Math.round(weight * 0.8)
}

// === Расчёт ===

export function calculateProteinIntake(input: ProteinInput): ProteinResult {
  const { weight, trainingType, goal } = input

  const range = PROTEIN_MATRIX[trainingType][goal]
  const dailyMin = Math.round(weight * range.min)
  const dailyMax = Math.round(weight * range.max)

  const formulas: ProteinFormulaResult[] = [
    { name: 'ISSN (2017)', value: issn(weight, trainingType, goal), recommended: true },
    { name: 'ACSM (2016)', value: acsm(weight, trainingType) },
    { name: 'RDA (минимум)', value: rda(weight) },
  ]

  return {
    dailyMin,
    dailyMax,
    perKgMin: range.min,
    perKgMax: range.max,
    perMealMin: Math.round(dailyMin / 4),
    perMealMax: Math.round(dailyMax / 4),
    weight,
    formulas,
  }
}
