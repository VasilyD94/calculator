// === Типы ===

export type SleepMode = 'wakeUp' | 'goToSleep'

export interface SleepInput {
  mode: SleepMode
  time: string // формат HH:mm
  fallAsleepMinutes: number // время на засыпание (по умолчанию 15)
}

export interface SleepTime {
  time: string // формат HH:mm
  cycles: number
  duration: string // "7 ч 30 мин"
  quality: 'excellent' | 'good' | 'okay' | 'poor'
}

export interface SleepResult {
  times: SleepTime[]
  recommendation: string
}

// === Константы ===

// Длительность одного цикла сна в минутах
const SLEEP_CYCLE_MINUTES = 90

// Рекомендуемое количество циклов
const RECOMMENDED_CYCLES = {
  min: 4, // 6 часов
  optimal: 5, // 7.5 часов
  max: 6, // 9 часов
}

// === Вспомогательные функции ===

/**
 * Парсит время из строки HH:mm в объект с часами и минутами
 */
function parseTime(timeString: string): { hours: number; minutes: number } {
  const [hours, minutes] = timeString.split(':').map(Number)
  return { hours, minutes }
}

/**
 * Форматирует время в строку HH:mm
 */
function formatTime(hours: number, minutes: number): string {
  const h = ((hours % 24) + 24) % 24 // нормализуем часы (0-23)
  return `${h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

/**
 * Форматирует длительность в читаемый формат
 */
function formatDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (minutes === 0) {
    return `${hours} ч`
  }
  return `${hours} ч ${minutes} мин`
}

/**
 * Определяет качество сна по количеству циклов
 */
function getQuality(cycles: number): SleepTime['quality'] {
  if (cycles >= 5 && cycles <= 6) return 'excellent'
  if (cycles === 4) return 'good'
  if (cycles === 3) return 'okay'
  return 'poor'
}

/**
 * Добавляет минуты к времени
 */
function addMinutes(hours: number, minutes: number, addMinutes: number): { hours: number; minutes: number } {
  const totalMinutes = hours * 60 + minutes + addMinutes
  return {
    hours: Math.floor(totalMinutes / 60) % 24,
    minutes: totalMinutes % 60,
  }
}

/**
 * Вычитает минуты из времени
 */
function subtractMinutes(hours: number, minutes: number, subtractMinutes: number): { hours: number; minutes: number } {
  let totalMinutes = hours * 60 + minutes - subtractMinutes
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60 // добавляем сутки
  }
  return {
    hours: Math.floor(totalMinutes / 60) % 24,
    minutes: totalMinutes % 60,
  }
}

// === Основные функции расчёта ===

/**
 * Расчёт времени для режима "Хочу проснуться в..."
 * Возвращает оптимальное время отхода ко сну
 */
function calculateBedtimes(wakeUpTime: string, fallAsleepMinutes: number): SleepTime[] {
  const { hours, minutes } = parseTime(wakeUpTime)
  const times: SleepTime[] = []

  // Рассчитываем для 6, 5, 4 и 3 циклов
  for (let cycles = 6; cycles >= 3; cycles--) {
    const sleepDuration = cycles * SLEEP_CYCLE_MINUTES
    const totalMinutesToSubtract = sleepDuration + fallAsleepMinutes

    const bedtime = subtractMinutes(hours, minutes, totalMinutesToSubtract)

    times.push({
      time: formatTime(bedtime.hours, bedtime.minutes),
      cycles,
      duration: formatDuration(sleepDuration),
      quality: getQuality(cycles),
    })
  }

  return times
}

/**
 * Расчёт времени для режима "Ложусь спать в..."
 * Возвращает оптимальное время пробуждения
 */
function calculateWakeUpTimes(bedtime: string, fallAsleepMinutes: number): SleepTime[] {
  const { hours, minutes } = parseTime(bedtime)
  const times: SleepTime[] = []

  // Сначала добавляем время засыпания
  const fallAsleepTime = addMinutes(hours, minutes, fallAsleepMinutes)

  // Рассчитываем для 3, 4, 5 и 6 циклов
  for (let cycles = 3; cycles <= 6; cycles++) {
    const sleepDuration = cycles * SLEEP_CYCLE_MINUTES

    const wakeUp = addMinutes(fallAsleepTime.hours, fallAsleepTime.minutes, sleepDuration)

    times.push({
      time: formatTime(wakeUp.hours, wakeUp.minutes),
      cycles,
      duration: formatDuration(sleepDuration),
      quality: getQuality(cycles),
    })
  }

  return times
}

/**
 * Генерирует рекомендацию на основе режима
 */
function getRecommendation(mode: SleepMode): string {
  if (mode === 'wakeUp') {
    return 'Ложитесь спать в одно из указанных времён, чтобы проснуться в конце цикла сна и чувствовать себя бодрым.'
  }
  return 'Поставьте будильник на одно из указанных времён, чтобы проснуться в конце цикла сна.'
}

// === Экспортируемая функция ===

export function calculateSleep(input: SleepInput): SleepResult {
  const { mode, time, fallAsleepMinutes } = input

  const times = mode === 'wakeUp'
    ? calculateBedtimes(time, fallAsleepMinutes)
    : calculateWakeUpTimes(time, fallAsleepMinutes)

  return {
    times,
    recommendation: getRecommendation(mode),
  }
}

// === Дополнительные утилиты ===

/**
 * Получить текущее время в формате HH:mm
 */
export function getCurrentTime(): string {
  const now = new Date()
  return formatTime(now.getHours(), now.getMinutes())
}

/**
 * Получить время через N часов
 */
export function getTimeAfterHours(hoursToAdd: number): string {
  const now = new Date()
  const result = addMinutes(now.getHours(), now.getMinutes(), hoursToAdd * 60)
  return formatTime(result.hours, result.minutes)
}

/**
 * Описание качества сна
 */
export function getQualityDescription(quality: SleepTime['quality']): string {
  switch (quality) {
    case 'excellent':
      return 'Отличный сон'
    case 'good':
      return 'Хороший сон'
    case 'okay':
      return 'Минимальный сон'
    case 'poor':
      return 'Недостаточно'
  }
}

/**
 * Цвет для качества сна
 */
export function getQualityColor(quality: SleepTime['quality']): string {
  switch (quality) {
    case 'excellent':
      return 'text-green-600 bg-green-50 border-green-200'
    case 'good':
      return 'text-blue-600 bg-blue-50 border-blue-200'
    case 'okay':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200'
    case 'poor':
      return 'text-red-600 bg-red-50 border-red-200'
  }
}
