// === Типы ===

export type Gender = 'male' | 'female'

export type BodyType = 'ectomorph' | 'mesomorph' | 'endomorph'

export interface BodyTypeInput {
  gender: Gender
  wristCircumference: number // Обхват запястья в см
  height?: number // Рост в см (опционально, для индекса Соловьёва)
}

export interface BodyTypeResult {
  type: BodyType
  typeLabel: string
  typeDescription: string
  characteristics: string[]
  nutritionTips: string[]
  trainingTips: string[]
  statusColor: 'blue' | 'green' | 'orange'
  solovyovIndex?: number // Индекс Соловьёва (рост / обхват запястья)
}

// === Константы ===

// Границы обхвата запястья по полу (в см)
const WRIST_BOUNDARIES: Record<Gender, { ecto: number; meso: number }> = {
  male: {
    ecto: 17, // < 17 см — эктоморф
    meso: 20, // 17-20 см — мезоморф, > 20 см — эндоморф
  },
  female: {
    ecto: 15, // < 15 см — эктоморф
    meso: 17, // 15-17 см — мезоморф, > 17 см — эндоморф
  },
}

// Информация о типах телосложения
const BODY_TYPE_INFO: Record<
  BodyType,
  {
    label: string
    description: string
    color: 'blue' | 'green' | 'orange'
    characteristics: string[]
    nutritionTips: string[]
    trainingTips: string[]
  }
> = {
  ectomorph: {
    label: 'Эктоморф',
    description:
      'Астенический (тонкокостный) тип телосложения. Характеризуется узкими плечами, длинными конечностями и быстрым метаболизмом.',
    color: 'blue',
    characteristics: [
      'Узкие плечи и грудная клетка',
      'Длинные руки и ноги',
      'Низкий процент жира в теле',
      'Быстрый обмен веществ',
      'Трудно набирать вес и мышцы',
      'Тонкие кости и суставы',
    ],
    nutritionTips: [
      'Увеличьте калорийность рациона на 300-500 ккал',
      'Ешьте 5-6 раз в день небольшими порциями',
      'Белок: 1.6-2 г на кг массы тела',
      'Не пропускайте приёмы пищи',
      'Употребляйте сложные углеводы (крупы, макароны)',
      'Добавьте полезные жиры (орехи, авокадо, масла)',
    ],
    trainingTips: [
      'Делайте акцент на базовых упражнениях',
      'Тренируйтесь 3-4 раза в неделю',
      'Отдыхайте между подходами 2-3 минуты',
      'Ограничьте кардио до 2-3 раз в неделю по 20 мин',
      'Работайте с тяжёлыми весами, 6-10 повторений',
      'Уделяйте внимание восстановлению и сну',
    ],
  },
  mesomorph: {
    label: 'Мезоморф',
    description:
      'Нормостенический (среднекостный) тип телосложения. Характеризуется атлетическим телосложением, широкими плечами и хорошим балансом мышц и жира.',
    color: 'green',
    characteristics: [
      'Широкие плечи и узкая талия',
      'Атлетическое телосложение',
      'Средний обмен веществ',
      'Легко набирает мышечную массу',
      'Пропорциональное тело',
      'Хорошо реагирует на тренировки',
    ],
    nutritionTips: [
      'Сбалансированное питание с умеренной калорийностью',
      'Белок: 1.4-1.8 г на кг массы тела',
      '40% углеводов, 30% белка, 30% жиров',
      'Ешьте разнообразно, следите за качеством продуктов',
      'Контролируйте размер порций',
      'Достаточное количество овощей и клетчатки',
    ],
    trainingTips: [
      'Комбинируйте силовые и кардио-тренировки',
      'Тренируйтесь 4-5 раз в неделю',
      'Используйте разнообразные упражнения',
      'Можете работать как с тяжёлыми, так и со средними весами',
      'Меняйте программу каждые 6-8 недель',
      'Кардио 2-3 раза в неделю по 30-40 мин',
    ],
  },
  endomorph: {
    label: 'Эндоморф',
    description:
      'Гиперстенический (ширококостный) тип телосложения. Характеризуется широкой костью, склонностью к накоплению жира и медленным метаболизмом.',
    color: 'orange',
    characteristics: [
      'Широкая кость и суставы',
      'Округлые формы тела',
      'Медленный обмен веществ',
      'Легко набирает вес (и жир, и мышцы)',
      'Широкая талия и бёдра',
      'Трудно терять жировую массу',
    ],
    nutritionTips: [
      'Создайте умеренный дефицит калорий (300-500 ккал)',
      'Белок: 1.8-2.2 г на кг массы тела',
      'Ограничьте простые углеводы и сладкое',
      'Ешьте больше овощей и клетчатки',
      'Следите за размером порций',
      'Пейте достаточно воды (30-35 мл на кг веса)',
    ],
    trainingTips: [
      'Акцент на кардио: 4-5 раз в неделю по 40-60 мин',
      'Силовые тренировки 3-4 раза в неделю',
      'Используйте круговые тренировки',
      'Короткие перерывы между подходами (30-60 сек)',
      'HIIT-тренировки эффективны для жиросжигания',
      'Поддерживайте высокую активность в течение дня',
    ],
  },
}

// === Основная функция расчёта ===

export function calculateBodyType(input: BodyTypeInput): BodyTypeResult {
  const { gender, wristCircumference, height } = input
  const boundaries = WRIST_BOUNDARIES[gender]

  // Определяем тип телосложения по обхвату запястья
  let type: BodyType
  if (wristCircumference < boundaries.ecto) {
    type = 'ectomorph'
  } else if (wristCircumference <= boundaries.meso) {
    type = 'mesomorph'
  } else {
    type = 'endomorph'
  }

  const info = BODY_TYPE_INFO[type]

  // Рассчитываем индекс Соловьёва, если указан рост
  let solovyovIndex: number | undefined
  if (height) {
    solovyovIndex = Math.round((height / wristCircumference) * 10) / 10
  }

  return {
    type,
    typeLabel: info.label,
    typeDescription: info.description,
    characteristics: info.characteristics,
    nutritionTips: info.nutritionTips,
    trainingTips: info.trainingTips,
    statusColor: info.color,
    solovyovIndex,
  }
}

// === Вспомогательные функции ===

/**
 * Получить границы для пола (для отображения в UI)
 */
export function getWristBoundaries(gender: Gender) {
  return WRIST_BOUNDARIES[gender]
}

/**
 * Получить информацию о всех типах телосложения (для таблицы сравнения)
 */
export function getAllBodyTypes() {
  return Object.entries(BODY_TYPE_INFO).map(([type, info]) => ({
    type: type as BodyType,
    ...info,
  }))
}

/**
 * Получить нормальный диапазон обхвата запястья для пола
 */
export function getWristRange(gender: Gender): { min: number; max: number } {
  return gender === 'male' ? { min: 14, max: 24 } : { min: 12, max: 20 }
}
