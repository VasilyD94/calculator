// === Типы ===

export type Gender = 'male' | 'female'

export interface DrinkType {
  id: string
  name: string
  alcoholPercent: number
  emoji: string
  defaultVolume: number
}

export interface AlcoholInput {
  gender: Gender
  weight: number
  drinkId: string
  volume: number // мл
}

export interface AlcoholResult {
  bac: number // Blood Alcohol Content в промилле
  peakBac: number // Пиковый уровень
  timeToSober: number // Минуты до полного выведения
  timeToLegal: number // Минуты до 0.3‰ (норма для вождения)
  soberTime: Date // Время когда будет трезв
  legalTime: Date // Время когда можно за руль
  hourlyLevels: HourlyLevel[] // Почасовой график
  pureAlcohol: number // Чистый алкоголь в граммах
}

export interface HourlyLevel {
  hour: number
  bac: number
  time: string
}

// === Напитки ===

export const DRINK_TYPES: DrinkType[] = [
  { id: 'beer_light', name: 'Пиво светлое', alcoholPercent: 4.5, emoji: '🍺', defaultVolume: 500 },
  { id: 'beer_strong', name: 'Пиво крепкое', alcoholPercent: 7, emoji: '🍺', defaultVolume: 500 },
  { id: 'wine_dry', name: 'Вино сухое', alcoholPercent: 12, emoji: '🍷', defaultVolume: 200 },
  { id: 'wine_semi', name: 'Вино полусладкое', alcoholPercent: 14, emoji: '🍷', defaultVolume: 200 },
  { id: 'champagne', name: 'Шампанское', alcoholPercent: 12, emoji: '🥂', defaultVolume: 150 },
  { id: 'vodka', name: 'Водка', alcoholPercent: 40, emoji: '🥃', defaultVolume: 100 },
  { id: 'whiskey', name: 'Виски', alcoholPercent: 40, emoji: '🥃', defaultVolume: 50 },
  { id: 'cognac', name: 'Коньяк', alcoholPercent: 40, emoji: '🥃', defaultVolume: 50 },
  { id: 'rum', name: 'Ром', alcoholPercent: 40, emoji: '🥃', defaultVolume: 50 },
  { id: 'liqueur', name: 'Ликёр', alcoholPercent: 25, emoji: '🍸', defaultVolume: 50 },
  { id: 'martini', name: 'Мартини', alcoholPercent: 15, emoji: '🍸', defaultVolume: 100 },
]

// === Константы ===

// Коэффициент Видмарка (распределение алкоголя в организме)
const WIDMARK_FACTOR = {
  male: 0.7,
  female: 0.6,
}

// Скорость выведения алкоголя (промилле в час)
// Средняя скорость: 0.1-0.15 промилле/час
const ELIMINATION_RATE = 0.12 // промилле/час

// Плотность алкоголя (г/мл)
const ALCOHOL_DENSITY = 0.789

// Допустимый уровень для вождения в России (промилле)
export const LEGAL_LIMIT = 0.3

// === Расчёты ===

/**
 * Расчёт количества чистого алкоголя в граммах
 */
function calculatePureAlcohol(volumeMl: number, alcoholPercent: number): number {
  return volumeMl * (alcoholPercent / 100) * ALCOHOL_DENSITY
}

/**
 * Расчёт уровня алкоголя в крови по формуле Видмарка
 * BAC = A / (r × W)
 * где A - масса алкоголя (г), r - коэффициент Видмарка, W - масса тела (кг)
 * Результат в промилле (г/л)
 */
function calculateBAC(pureAlcoholGrams: number, weight: number, gender: Gender): number {
  const r = WIDMARK_FACTOR[gender]
  const bac = pureAlcoholGrams / (r * weight)
  return Math.max(0, bac)
}

/**
 * Расчёт времени выведения алкоголя
 */
function calculateEliminationTime(bac: number, targetBac: number = 0): number {
  if (bac <= targetBac) return 0
  const hoursNeeded = (bac - targetBac) / ELIMINATION_RATE
  return Math.ceil(hoursNeeded * 60) // в минутах
}

/**
 * Генерация почасового графика снижения уровня алкоголя
 */
function generateHourlyLevels(peakBac: number): HourlyLevel[] {
  const levels: HourlyLevel[] = []
  const now = new Date()
  let currentBac = peakBac

  for (let hour = 0; currentBac > 0 && hour <= 24; hour++) {
    const time = new Date(now.getTime() + hour * 60 * 60 * 1000)
    levels.push({
      hour,
      bac: Math.max(0, Math.round(currentBac * 100) / 100),
      time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    })
    currentBac -= ELIMINATION_RATE
  }

  return levels
}

// === Основная функция ===

export function calculateAlcohol(input: AlcoholInput): AlcoholResult {
  const { gender, weight, drinkId, volume } = input

  // Находим напиток
  const drink = DRINK_TYPES.find((d) => d.id === drinkId) || DRINK_TYPES[0]

  // Рассчитываем чистый алкоголь
  const pureAlcohol = calculatePureAlcohol(volume, drink.alcoholPercent)

  // Рассчитываем пиковый BAC
  const peakBac = calculateBAC(pureAlcohol, weight, gender)

  // Текущий BAC (считаем что всё уже усвоилось)
  const bac = peakBac

  // Время до полного выведения
  const timeToSober = calculateEliminationTime(bac, 0)

  // Время до допустимого уровня для вождения
  const timeToLegal = calculateEliminationTime(bac, LEGAL_LIMIT)

  // Время когда будет трезв
  const now = new Date()
  const soberTime = new Date(now.getTime() + timeToSober * 60 * 1000)
  const legalTime = new Date(now.getTime() + timeToLegal * 60 * 1000)

  // Почасовой график
  const hourlyLevels = generateHourlyLevels(peakBac)

  return {
    bac: Math.round(bac * 100) / 100,
    peakBac: Math.round(peakBac * 100) / 100,
    timeToSober,
    timeToLegal,
    soberTime,
    legalTime,
    hourlyLevels,
    pureAlcohol: Math.round(pureAlcohol * 10) / 10,
  }
}

// === Вспомогательные функции ===

export function formatTime(minutes: number): string {
  if (minutes <= 0) return 'уже можно'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) {
    return `${mins} мин`
  }

  if (mins === 0) {
    return `${hours} ч`
  }

  return `${hours} ч ${mins} мин`
}

export function getBacStatus(bac: number): {
  level: 'sober' | 'light' | 'moderate' | 'strong' | 'severe' | 'danger'
  label: string
  description: string
  color: string
} {
  if (bac < 0.3) {
    return {
      level: 'sober',
      label: 'Трезв',
      description: 'Допустимый уровень для вождения',
      color: 'green',
    }
  }
  if (bac < 0.5) {
    return {
      level: 'light',
      label: 'Лёгкое опьянение',
      description: 'Незначительное влияние на реакцию',
      color: 'yellow',
    }
  }
  if (bac < 1.5) {
    return {
      level: 'moderate',
      label: 'Среднее опьянение',
      description: 'Нарушена координация и внимание',
      color: 'orange',
    }
  }
  if (bac < 2.5) {
    return {
      level: 'strong',
      label: 'Сильное опьянение',
      description: 'Выраженные нарушения координации',
      color: 'red',
    }
  }
  if (bac < 4) {
    return {
      level: 'severe',
      label: 'Тяжёлое опьянение',
      description: 'Опасное состояние, возможна потеря сознания',
      color: 'red',
    }
  }
  return {
    level: 'danger',
    label: 'Критическое',
    description: 'Угроза жизни! Необходима медицинская помощь',
    color: 'red',
  }
}

export function getDrinkById(id: string): DrinkType {
  return DRINK_TYPES.find((d) => d.id === id) || DRINK_TYPES[0]
}
