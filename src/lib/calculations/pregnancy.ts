import { addDays, differenceInDays, format } from 'date-fns'
import { ru } from 'date-fns/locale'

// === Типы ===

export type ConceptionMethod = 'lmp' | 'conception' | 'ultrasound'

export interface DueDateInput {
  method: ConceptionMethod
  date: Date
  /** Срок на УЗИ — недели (если method === 'ultrasound') */
  ultrasoundWeeks?: number
  /** Срок на УЗИ — дни (если method === 'ultrasound') */
  ultrasoundDays?: number
}

export interface Milestone {
  week: number
  title: string
  date: Date
  passed: boolean
}

export interface DueDateResult {
  /** Предполагаемая дата родов */
  dueDate: Date
  /** Дата последних месячных (расчётная) */
  lmpDate: Date
  /** Предполагаемая дата зачатия */
  conceptionDate: Date
  /** Текущая неделя (0–42) */
  currentWeek: number
  /** День в текущей неделе (0–6) */
  currentDay: number
  /** Триместр */
  trimester: 1 | 2 | 3
  /** Дней до ПДР */
  daysLeft: number
  /** Дней прошло от ЛМ */
  daysPassed: number
  /** Прогресс 0–100 */
  progress: number
  /** Ключевые даты */
  milestones: Milestone[]
  /** Форматированные даты */
  dueDateFormatted: string
  lmpDateFormatted: string
  conceptionDateFormatted: string
  currentTermFormatted: string
}

// === Константы ===

const PREGNANCY_DAYS = 280 // 40 недель
const CONCEPTION_OFFSET = 14 // дней от ЛМ до зачатия

const MILESTONE_DEFINITIONS: { week: number; title: string }[] = [
  { week: 8, title: 'Сердцебиение на УЗИ' },
  { week: 12, title: 'Первый скрининг' },
  { week: 16, title: 'Определение пола' },
  { week: 20, title: 'Второй скрининг' },
  { week: 28, title: 'Начало 3 триместра' },
  { week: 30, title: 'Декретный отпуск' },
  { week: 37, title: 'Доношенная беременность' },
  { week: 40, title: 'Предполагаемая дата родов' },
]

// === Расчёт ===

/**
 * Получить дату ЛМ из входных данных (приводим все методы к одному).
 */
function getLmpDate(input: DueDateInput): Date {
  switch (input.method) {
    case 'lmp':
      return input.date

    case 'conception':
      // ЛМ = дата зачатия − 14 дней
      return addDays(input.date, -CONCEPTION_OFFSET)

    case 'ultrasound': {
      // ЛМ = дата УЗИ − (срок в днях)
      const termDays =
        (input.ultrasoundWeeks ?? 0) * 7 + (input.ultrasoundDays ?? 0)
      return addDays(input.date, -termDays)
    }
  }
}

function formatDateRu(date: Date): string {
  return format(date, 'd MMMM yyyy', { locale: ru })
}

export function calculateDueDate(input: DueDateInput): DueDateResult {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const lmpDate = getLmpDate(input)
  const dueDate = addDays(lmpDate, PREGNANCY_DAYS)
  const conceptionDate = addDays(lmpDate, CONCEPTION_OFFSET)

  const daysPassed = Math.max(0, differenceInDays(today, lmpDate))
  const daysLeft = Math.max(0, differenceInDays(dueDate, today))
  const progress = Math.min(100, Math.max(0, (daysPassed / PREGNANCY_DAYS) * 100))

  const currentWeek = Math.floor(daysPassed / 7)
  const currentDay = daysPassed % 7

  const trimester: 1 | 2 | 3 =
    currentWeek < 13 ? 1 : currentWeek < 27 ? 2 : 3

  // Milestones
  const milestones: Milestone[] = MILESTONE_DEFINITIONS.map((m) => ({
    week: m.week,
    title: m.title,
    date: addDays(lmpDate, m.week * 7),
    passed: currentWeek >= m.week,
  }))

  // Форматирование срока
  const weekWord = getWeekWord(currentWeek)
  const dayWord = getDayWord(currentDay)
  const currentTermFormatted =
    currentDay > 0
      ? `${currentWeek} ${weekWord} и ${currentDay} ${dayWord}`
      : `${currentWeek} ${weekWord}`

  return {
    dueDate,
    lmpDate,
    conceptionDate,
    currentWeek,
    currentDay,
    trimester,
    daysLeft,
    daysPassed,
    progress: Math.round(progress * 10) / 10,
    milestones,
    dueDateFormatted: formatDateRu(dueDate),
    lmpDateFormatted: formatDateRu(lmpDate),
    conceptionDateFormatted: formatDateRu(conceptionDate),
    currentTermFormatted,
  }
}

// === Утилиты для склонений ===

function getWeekWord(n: number): string {
  const abs = Math.abs(n) % 100
  const last = abs % 10
  if (abs >= 11 && abs <= 19) return 'недель'
  if (last === 1) return 'неделя'
  if (last >= 2 && last <= 4) return 'недели'
  return 'недель'
}

function getDayWord(n: number): string {
  const abs = Math.abs(n) % 100
  const last = abs % 10
  if (abs >= 11 && abs <= 19) return 'дней'
  if (last === 1) return 'день'
  if (last >= 2 && last <= 4) return 'дня'
  return 'дней'
}
