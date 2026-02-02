// === Типы ===

export interface HeartRateInput {
  age: number // 15–80
  restingHR: number // 40–100 уд/мин
}

export interface HeartRateZone {
  number: number
  name: string
  percentRange: string
  minHR: number
  maxHR: number
  benefit: string
}

export interface HeartRateFormulaResult {
  name: string
  value: number
  recommended?: boolean
}

export interface HeartRateResult {
  /** Максимальный пульс по рекомендуемой формуле (Танака) */
  maxHR: number
  /** ЧСС резерва = maxHR - restingHR */
  hrReserve: number
  /** Пульс покоя (входное значение, для удобства) */
  restingHR: number
  /** 5 пульсовых зон по Карвонену */
  zones: HeartRateZone[]
  /** 3 формулы для сравнения */
  formulas: HeartRateFormulaResult[]
}

// === Формулы максимального пульса ===

/** Хаскелл–Фокс (классическая, 1970) */
function haskellFox(age: number): number {
  return Math.round(220 - age)
}

/** Танака и др. (2001) — рекомендуемая */
function tanaka(age: number): number {
  return Math.round(208 - 0.7 * age)
}

/** Гелиш и др. (2007) */
function gellish(age: number): number {
  return Math.round(207 - 0.7 * age)
}

// === Зоны пульса ===

const ZONE_DEFINITIONS = [
  {
    number: 1,
    name: 'Восстановление',
    minPercent: 0.5,
    maxPercent: 0.6,
    percentRange: '50–60%',
    benefit: 'Разминка, заминка, активное восстановление',
  },
  {
    number: 2,
    name: 'Жиросжигание',
    minPercent: 0.6,
    maxPercent: 0.7,
    percentRange: '60–70%',
    benefit: 'Базовая выносливость, сжигание жира',
  },
  {
    number: 3,
    name: 'Аэробная',
    minPercent: 0.7,
    maxPercent: 0.8,
    percentRange: '70–80%',
    benefit: 'Кардиовыносливость, укрепление сердца',
  },
  {
    number: 4,
    name: 'Анаэробная',
    minPercent: 0.8,
    maxPercent: 0.9,
    percentRange: '80–90%',
    benefit: 'Скоростная выносливость, повышение порога',
  },
  {
    number: 5,
    name: 'Максимальная',
    minPercent: 0.9,
    maxPercent: 1.0,
    percentRange: '90–100%',
    benefit: 'Спринты, пиковая мощность, короткие интервалы',
  },
] as const

// === Расчёт ===

/**
 * Формула Карвонена:
 * ЧСС_зоны = ЧСС_покоя + (ЧСС_макс − ЧСС_покоя) × %
 */
function karvonen(restingHR: number, maxHR: number, percent: number): number {
  return Math.round(restingHR + (maxHR - restingHR) * percent)
}

export function calculateHeartRateZones(input: HeartRateInput): HeartRateResult {
  const { age, restingHR } = input

  // Максимальный пульс по формуле Танака (рекомендуемая)
  const maxHR = tanaka(age)
  const hrReserve = maxHR - restingHR

  // 5 зон по Карвонену
  const zones: HeartRateZone[] = ZONE_DEFINITIONS.map((def) => ({
    number: def.number,
    name: def.name,
    percentRange: def.percentRange,
    minHR: karvonen(restingHR, maxHR, def.minPercent),
    maxHR: karvonen(restingHR, maxHR, def.maxPercent),
    benefit: def.benefit,
  }))

  // 3 формулы для сравнения
  const formulas: HeartRateFormulaResult[] = [
    { name: 'Танака (2001)', value: tanaka(age), recommended: true },
    { name: 'Хаскелла–Фокса', value: haskellFox(age) },
    { name: 'Гелиш (2007)', value: gellish(age) },
  ]

  return {
    maxHR,
    hrReserve,
    restingHR,
    zones,
    formulas,
  }
}
