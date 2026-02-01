import { addDays, differenceInDays, format } from 'date-fns'
import { ru } from 'date-fns/locale'

// === Типы ===

export interface OvulationInput {
  lastPeriodDate: Date
  cycleLength: number // 21–45 дней
  periodDuration: number // 3–7 дней
  cyclesToShow: number // сколько циклов прогнозировать
}

export type CyclePhase =
  | 'menstruation'
  | 'follicular'
  | 'fertile'
  | 'ovulation'
  | 'luteal'

export interface CycleForecast {
  cycleNumber: number
  periodStart: Date
  periodEnd: Date
  fertileStart: Date
  fertileEnd: Date
  ovulationDate: Date
  nextPeriodDate: Date
}

export interface OvulationResult {
  /** Ближайшая (текущий цикл) дата овуляции */
  ovulationDate: Date
  fertileWindowStart: Date
  fertileWindowEnd: Date
  nextPeriodDate: Date

  /** Статус */
  daysUntilOvulation: number
  daysUntilPeriod: number
  currentDayInCycle: number
  currentPhase: CyclePhase
  currentPhaseLabel: string

  /** Прогноз */
  forecast: CycleForecast[]

  /** Данные текущего цикла для визуализации */
  cycleLength: number
  periodDuration: number
  ovulationDay: number // день цикла, когда овуляция

  /** Форматированные строки */
  ovulationFormatted: string
  fertileWindowFormatted: string
  nextPeriodFormatted: string
}

// === Константы ===

const LUTEAL_PHASE_DAYS = 14
const FERTILE_BEFORE_OVULATION = 5
const FERTILE_AFTER_OVULATION = 1

const PHASE_LABELS: Record<CyclePhase, string> = {
  menstruation: 'Менструация',
  follicular: 'Фолликулярная фаза',
  fertile: 'Фертильное окно',
  ovulation: 'День овуляции',
  luteal: 'Лютеиновая фаза',
}

// === Расчёт ===

function formatDateRu(date: Date): string {
  return format(date, 'd MMMM yyyy', { locale: ru })
}

function formatDateShort(date: Date): string {
  return format(date, 'd MMM', { locale: ru })
}

/**
 * Определить текущий день цикла и ближайший цикл.
 * Если «сегодня» ушло за пределы текущего цикла — переходим к ближайшему.
 */
function findCurrentCycleStart(
  lastPeriod: Date,
  cycleLength: number
): Date {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  let cycleStart = new Date(lastPeriod)
  cycleStart.setHours(0, 0, 0, 0)

  // Если lastPeriod в будущем — просто вернуть
  if (cycleStart > today) return cycleStart

  // Идём вперёд по циклам, пока не найдём цикл, содержащий today
  while (addDays(cycleStart, cycleLength).getTime() <= today.getTime()) {
    cycleStart = addDays(cycleStart, cycleLength)
  }

  return cycleStart
}

function getPhase(
  dayInCycle: number,
  periodDuration: number,
  ovulationDay: number
): CyclePhase {
  const fertileStart = ovulationDay - FERTILE_BEFORE_OVULATION

  if (dayInCycle <= periodDuration) return 'menstruation'
  if (dayInCycle === ovulationDay) return 'ovulation'
  if (dayInCycle >= fertileStart && dayInCycle <= ovulationDay + FERTILE_AFTER_OVULATION)
    return 'fertile'
  if (dayInCycle < fertileStart) return 'follicular'
  return 'luteal'
}

function buildCycleForecast(
  cycleStart: Date,
  cycleNumber: number,
  cycleLength: number,
  periodDuration: number
): CycleForecast {
  const ovulationDay = cycleLength - LUTEAL_PHASE_DAYS
  const ovulationDate = addDays(cycleStart, ovulationDay - 1) // -1 т.к. день 1 = cycleStart
  const fertileStart = addDays(ovulationDate, -FERTILE_BEFORE_OVULATION)
  const fertileEnd = addDays(ovulationDate, FERTILE_AFTER_OVULATION)
  const periodEnd = addDays(cycleStart, periodDuration - 1)
  const nextPeriodDate = addDays(cycleStart, cycleLength)

  return {
    cycleNumber,
    periodStart: cycleStart,
    periodEnd,
    fertileStart,
    fertileEnd,
    ovulationDate,
    nextPeriodDate,
  }
}

export function calculateOvulation(input: OvulationInput): OvulationResult {
  const { lastPeriodDate, cycleLength, periodDuration, cyclesToShow } = input

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const currentCycleStart = findCurrentCycleStart(lastPeriodDate, cycleLength)
  const ovulationDay = cycleLength - LUTEAL_PHASE_DAYS // день цикла
  const currentDayInCycle = differenceInDays(today, currentCycleStart) + 1 // 1-based

  // Текущий цикл
  const currentCycle = buildCycleForecast(
    currentCycleStart,
    1,
    cycleLength,
    periodDuration
  )

  // Фаза
  const currentPhase = getPhase(currentDayInCycle, periodDuration, ovulationDay)

  // Дней до овуляции (может быть отрицательным если уже прошла)
  const daysUntilOvulation = differenceInDays(
    currentCycle.ovulationDate,
    today
  )
  const daysUntilPeriod = differenceInDays(
    currentCycle.nextPeriodDate,
    today
  )

  // Прогноз
  const forecast: CycleForecast[] = []
  for (let i = 0; i < cyclesToShow; i++) {
    const cycleStart = addDays(currentCycleStart, i * cycleLength)
    forecast.push(
      buildCycleForecast(cycleStart, i + 1, cycleLength, periodDuration)
    )
  }

  // Форматирование
  const ovulationFormatted = formatDateRu(currentCycle.ovulationDate)
  const fertileWindowFormatted = `${formatDateShort(currentCycle.fertileStart)} – ${formatDateShort(currentCycle.fertileEnd)}`
  const nextPeriodFormatted = formatDateRu(currentCycle.nextPeriodDate)

  return {
    ovulationDate: currentCycle.ovulationDate,
    fertileWindowStart: currentCycle.fertileStart,
    fertileWindowEnd: currentCycle.fertileEnd,
    nextPeriodDate: currentCycle.nextPeriodDate,
    daysUntilOvulation,
    daysUntilPeriod,
    currentDayInCycle,
    currentPhase,
    currentPhaseLabel: PHASE_LABELS[currentPhase],
    forecast,
    cycleLength,
    periodDuration,
    ovulationDay,
    ovulationFormatted,
    fertileWindowFormatted,
    nextPeriodFormatted,
  }
}
