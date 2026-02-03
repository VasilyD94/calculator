// === Типы ===

export type Gender = 'male' | 'female'

export interface BloodPressureInput {
  age: number
  gender: Gender
  systolic?: number // Введённое систолическое давление
  diastolic?: number // Введённое диастолическое давление
}

export interface PressureNorm {
  systolic: { min: number; max: number }
  diastolic: { min: number; max: number }
}

export type PressureCategory =
  | 'hypotension'
  | 'optimal'
  | 'normal'
  | 'highNormal'
  | 'hypertension1'
  | 'hypertension2'
  | 'hypertension3'

export interface BloodPressureResult {
  norm: PressureNorm
  category?: PressureCategory
  categoryLabel?: string
  categoryDescription?: string
  statusColor?: 'green' | 'blue' | 'yellow' | 'orange' | 'red'
}

// === Константы ===

// Нормы давления по возрастным группам
// Источник: ESC/ESH Guidelines 2018, адаптировано
const PRESSURE_NORMS: Record<string, { male: PressureNorm; female: PressureNorm }> = {
  '18-29': {
    male: { systolic: { min: 115, max: 125 }, diastolic: { min: 75, max: 82 } },
    female: { systolic: { min: 110, max: 120 }, diastolic: { min: 70, max: 78 } },
  },
  '30-39': {
    male: { systolic: { min: 118, max: 128 }, diastolic: { min: 78, max: 85 } },
    female: { systolic: { min: 115, max: 125 }, diastolic: { min: 75, max: 82 } },
  },
  '40-49': {
    male: { systolic: { min: 120, max: 135 }, diastolic: { min: 80, max: 88 } },
    female: { systolic: { min: 118, max: 130 }, diastolic: { min: 78, max: 85 } },
  },
  '50-59': {
    male: { systolic: { min: 125, max: 140 }, diastolic: { min: 82, max: 90 } },
    female: { systolic: { min: 125, max: 138 }, diastolic: { min: 80, max: 88 } },
  },
  '60-69': {
    male: { systolic: { min: 130, max: 145 }, diastolic: { min: 82, max: 88 } },
    female: { systolic: { min: 130, max: 145 }, diastolic: { min: 82, max: 88 } },
  },
  '70+': {
    male: { systolic: { min: 135, max: 150 }, diastolic: { min: 80, max: 85 } },
    female: { systolic: { min: 135, max: 150 }, diastolic: { min: 80, max: 85 } },
  },
}

// Категории давления по ВОЗ/ESC
const PRESSURE_CATEGORIES: Record<
  PressureCategory,
  {
    label: string
    description: string
    color: 'green' | 'blue' | 'yellow' | 'orange' | 'red'
  }
> = {
  hypotension: {
    label: 'Гипотония',
    description: 'Пониженное давление. Может вызывать слабость и головокружение.',
    color: 'blue',
  },
  optimal: {
    label: 'Оптимальное',
    description: 'Идеальное давление для здоровья сердца и сосудов.',
    color: 'green',
  },
  normal: {
    label: 'Нормальное',
    description: 'Давление в пределах нормы. Поддерживайте здоровый образ жизни.',
    color: 'green',
  },
  highNormal: {
    label: 'Высокое нормальное',
    description: 'Верхняя граница нормы. Рекомендуется контроль и профилактика.',
    color: 'yellow',
  },
  hypertension1: {
    label: 'Гипертония 1 степени',
    description: 'Мягкая гипертензия. Рекомендуется консультация врача.',
    color: 'orange',
  },
  hypertension2: {
    label: 'Гипертония 2 степени',
    description: 'Умеренная гипертензия. Необходимо лечение под наблюдением врача.',
    color: 'red',
  },
  hypertension3: {
    label: 'Гипертония 3 степени',
    description: 'Тяжёлая гипертензия. Требуется срочная медицинская помощь.',
    color: 'red',
  },
}

// === Вспомогательные функции ===

/**
 * Определяет возрастную группу
 */
function getAgeGroup(age: number): string {
  if (age < 30) return '18-29'
  if (age < 40) return '30-39'
  if (age < 50) return '40-49'
  if (age < 60) return '50-59'
  if (age < 70) return '60-69'
  return '70+'
}

/**
 * Определяет категорию давления по значениям
 */
function getPressureCategory(systolic: number, diastolic: number): PressureCategory {
  // Гипотония
  if (systolic < 90 || diastolic < 60) {
    return 'hypotension'
  }

  // Гипертония 3 степени
  if (systolic >= 180 || diastolic >= 110) {
    return 'hypertension3'
  }

  // Гипертония 2 степени
  if (systolic >= 160 || diastolic >= 100) {
    return 'hypertension2'
  }

  // Гипертония 1 степени
  if (systolic >= 140 || diastolic >= 90) {
    return 'hypertension1'
  }

  // Высокое нормальное
  if (systolic >= 130 || diastolic >= 85) {
    return 'highNormal'
  }

  // Нормальное
  if (systolic >= 120 || diastolic >= 80) {
    return 'normal'
  }

  // Оптимальное
  return 'optimal'
}

// === Основная функция расчёта ===

export function calculateBloodPressure(input: BloodPressureInput): BloodPressureResult {
  const { age, gender, systolic, diastolic } = input

  // Получаем норму для возраста и пола
  const ageGroup = getAgeGroup(age)
  const norms = PRESSURE_NORMS[ageGroup]
  const norm = norms[gender]

  const result: BloodPressureResult = {
    norm,
  }

  // Если введено давление — определяем категорию
  if (systolic !== undefined && diastolic !== undefined) {
    const category = getPressureCategory(systolic, diastolic)
    const categoryInfo = PRESSURE_CATEGORIES[category]

    result.category = category
    result.categoryLabel = categoryInfo.label
    result.categoryDescription = categoryInfo.description
    result.statusColor = categoryInfo.color
  }

  return result
}

// === Дополнительные утилиты ===

/**
 * Таблица норм давления по возрасту для отображения
 */
export interface PressureTableRow {
  ageGroup: string
  male: { systolic: string; diastolic: string }
  female: { systolic: string; diastolic: string }
}

export function getPressureTable(): PressureTableRow[] {
  return Object.entries(PRESSURE_NORMS).map(([ageGroup, norms]) => ({
    ageGroup: ageGroup === '70+' ? '70 и старше' : ageGroup.replace('-', '–'),
    male: {
      systolic: `${norms.male.systolic.min}–${norms.male.systolic.max}`,
      diastolic: `${norms.male.diastolic.min}–${norms.male.diastolic.max}`,
    },
    female: {
      systolic: `${norms.female.systolic.min}–${norms.female.systolic.max}`,
      diastolic: `${norms.female.diastolic.min}–${norms.female.diastolic.max}`,
    },
  }))
}

/**
 * Получить все категории давления для легенды
 */
export function getPressureCategories() {
  return PRESSURE_CATEGORIES
}

/**
 * Проверка на критические значения
 */
export function isCritical(systolic: number, diastolic: number): boolean {
  return systolic >= 180 || diastolic >= 110 || systolic < 80 || diastolic < 50
}
