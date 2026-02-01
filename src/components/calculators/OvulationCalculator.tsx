'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { DateInput } from '@/components/inputs/DateInput'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import {
  calculateOvulation,
  type CyclePhase,
} from '@/lib/calculations/ovulation'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Info,
  Lightbulb,
  Heart,
  Droplets,
  Sun,
} from 'lucide-react'

function getDefaultDate(): Date {
  const d = new Date()
  d.setDate(d.getDate() - 14)
  d.setHours(0, 0, 0, 0)
  return d
}

function toIso(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const PHASE_CONFIG: Record<
  CyclePhase,
  { label: string; color: string; bgColor: string; emoji: string }
> = {
  menstruation: {
    label: 'Менструация',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    emoji: '🔴',
  },
  follicular: {
    label: 'Фолликулярная фаза',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    emoji: '🌱',
  },
  fertile: {
    label: 'Фертильное окно',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    emoji: '🌸',
  },
  ovulation: {
    label: 'День овуляции',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    emoji: '🥚',
  },
  luteal: {
    label: 'Лютеиновая фаза',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    emoji: '🌙',
  },
}

export function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState<Date>(getDefaultDate)
  const [cycleLength, setCycleLength] = useState(28)
  const [periodDuration, setPeriodDuration] = useState(5)

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const minDate = new Date(today)
  minDate.setDate(minDate.getDate() - 90)

  const result = useMemo(
    () =>
      calculateOvulation({
        lastPeriodDate: lastPeriod,
        cycleLength,
        periodDuration,
        cyclesToShow: 6,
      }),
    [lastPeriod, cycleLength, periodDuration]
  )

  const phaseConfig = PHASE_CONFIG[result.currentPhase]

  return (
    <div className="space-y-8">
      {/* Ввод данных */}
      <Card>
        <CardHeader>
          <CardTitle>Данные о цикле</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <DateInput
            label="Первый день последних месячных"
            value={lastPeriod}
            onChange={setLastPeriod}
            icon={<Calendar className="h-4 w-4" />}
            min={toIso(minDate)}
            max={toIso(today)}
          />

          <ValueSlider
            label="Длина цикла"
            value={cycleLength}
            onChange={setCycleLength}
            min={21}
            max={45}
            unit="дн."
            icon={<Clock className="h-4 w-4" />}
          />

          <ValueSlider
            label="Длительность менструации"
            value={periodDuration}
            onChange={setPeriodDuration}
            min={3}
            max={7}
            unit="дн."
            icon={<Droplets className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Текущая фаза — компактная */}
        <Card>
          <CardContent className="pt-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-2xl">{phaseConfig.emoji}</span>
                <div>
                  <p className={cn('text-lg font-bold leading-tight', phaseConfig.color)}>
                    {phaseConfig.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    День {result.currentDayInCycle} из {result.cycleLength}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-1.5 sm:ml-auto">
                <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1.5 text-xs text-emerald-700">
                  <Heart className="h-3.5 w-3.5 shrink-0" />
                  {result.daysUntilOvulation > 0
                    ? `До овуляции ${result.daysUntilOvulation} дн.`
                    : result.daysUntilOvulation === 0
                      ? 'Овуляция сегодня!'
                      : 'Овуляция прошла'}
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-pink-50 px-2.5 py-1.5 text-xs text-pink-700">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  Овуляция: {format(result.ovulationDate, 'd MMM', { locale: ru })}
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-red-50 px-2.5 py-1.5 text-xs text-red-700">
                  <Droplets className="h-3.5 w-3.5 shrink-0" />
                  {result.daysUntilPeriod > 0
                    ? `До месячных ${result.daysUntilPeriod} дн.`
                    : 'Месячные ожидаются'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Фертильное окно + Фазы цикла — рядом на десктопе */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Фертильное окно */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Фертильное окно
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">
                  {result.fertileWindowFormatted}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Дата овуляции:{' '}
                  <span className="font-medium text-foreground">
                    {result.ovulationFormatted}
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-green-50 px-3 py-2 text-xs">
                  <span className="text-green-700">Месячные</span>
                  <span className="font-medium text-green-700">
                    {format(result.nextPeriodDate, 'd MMM yyyy', { locale: ru })}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-emerald-50 px-3 py-2 text-xs">
                  <span className="text-emerald-700">Овуляция в цикле</span>
                  <span className="font-medium text-emerald-700">
                    {result.ovulationDay}-й день
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Лучшие дни для зачатия — 1–2 дня до овуляции и день овуляции
              </p>
            </CardContent>
          </Card>

          {/* Фазы цикла — вертикальный таймлайн */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Фазы цикла
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const phases = [
                  {
                    label: 'Менструация',
                    range: `дни 1–${result.periodDuration}`,
                    start: 1,
                    end: result.periodDuration,
                    desc: 'Отторжение эндометрия',
                  },
                  {
                    label: 'Фолликулярная фаза',
                    range: `дни ${result.periodDuration + 1}–${result.ovulationDay - 6}`,
                    start: result.periodDuration + 1,
                    end: result.ovulationDay - 6,
                    desc: 'Рост фолликула с яйцеклеткой',
                  },
                  {
                    label: 'Фертильное окно',
                    range: `дни ${result.ovulationDay - 5}–${result.ovulationDay - 1}`,
                    start: result.ovulationDay - 5,
                    end: result.ovulationDay - 1,
                    desc: 'Высокий шанс зачатия',
                  },
                  {
                    label: 'Овуляция',
                    range: `день ${result.ovulationDay}`,
                    start: result.ovulationDay,
                    end: result.ovulationDay,
                    desc: 'Выход яйцеклетки — пик фертильности',
                  },
                  {
                    label: 'Лютеиновая фаза',
                    range: `дни ${result.ovulationDay + 1}–${result.cycleLength}`,
                    start: result.ovulationDay + 1,
                    end: result.cycleLength,
                    desc: 'Выработка прогестерона',
                  },
                ]

                return (
                  <div className="space-y-0">
                    {phases.map((phase, i) => {
                      const isDone = result.currentDayInCycle > phase.end
                      const isActive =
                        result.currentDayInCycle >= phase.start &&
                        result.currentDayInCycle <= phase.end

                      return (
                        <div key={phase.label} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            {isDone ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                            ) : (
                              <Circle
                                className={cn(
                                  'h-5 w-5 shrink-0',
                                  isActive
                                    ? 'text-pink-500 fill-pink-100'
                                    : 'text-muted-foreground'
                                )}
                              />
                            )}
                            {i < phases.length - 1 && (
                              <div
                                className={cn(
                                  'w-0.5 flex-1 min-h-[1.5rem]',
                                  isDone ? 'bg-green-300' : 'bg-muted'
                                )}
                              />
                            )}
                          </div>

                          <div
                            className={cn(
                              'pb-4 text-sm',
                              isActive && 'font-medium'
                            )}
                          >
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <span
                                className={cn(
                                  isDone
                                    ? 'text-muted-foreground'
                                    : isActive
                                      ? 'text-foreground'
                                      : 'text-muted-foreground'
                                )}
                              >
                                {phase.label}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {phase.range}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {phase.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        </div>

        {/* Прогноз на 6 циклов */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Прогноз на {result.forecast.length} циклов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.forecast.map((cycle) => (
                <div
                  key={cycle.cycleNumber}
                  className={cn(
                    'rounded-lg border p-3 space-y-3',
                    cycle.cycleNumber === 1 && 'border-primary bg-primary/5'
                  )}
                >
                  {/* Заголовок цикла */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Цикл {cycle.cycleNumber}
                      {cycle.cycleNumber === 1 && (
                        <span className="text-xs text-primary ml-1.5">
                          (текущий)
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {format(cycle.periodStart, 'd MMM', { locale: ru })} –{' '}
                      {format(cycle.nextPeriodDate, 'd MMM', { locale: ru })}
                    </span>
                  </div>

                  {/* Три цветных блока */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 rounded-md bg-red-50 px-2.5 py-1.5">
                      <Droplets className="h-3.5 w-3.5 text-red-500 shrink-0" />
                      <span className="text-xs text-red-700 shrink-0">Менструация</span>
                      <span className="ml-auto text-xs font-medium text-red-600 shrink-0">
                        {format(cycle.periodStart, 'd.MM')} – {format(cycle.periodEnd, 'd.MM')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-green-50 px-2.5 py-1.5">
                      <Heart className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      <span className="text-xs text-green-700 shrink-0">Фертильное</span>
                      <span className="ml-auto text-xs font-medium text-green-600 shrink-0">
                        {format(cycle.fertileStart, 'd.MM')} – {format(cycle.fertileEnd, 'd.MM')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-2.5 py-1.5">
                      <Sun className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs text-emerald-700 shrink-0">Овуляция</span>
                      <span className="ml-auto text-xs font-semibold text-emerald-700 shrink-0">
                        {format(cycle.ovulationDate, 'd.MM')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Важно знать */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Не метод контрацепции</AlertTitle>
              <AlertDescription>
                Календарный метод не является надёжным средством контрацепции.
                Овуляция может сдвигаться на несколько дней из-за стресса,
                болезни или смены режима.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Точность при нерегулярном цикле</AlertTitle>
              <AlertDescription>
                Калькулятор наиболее точен при регулярном цикле. Если длина
                цикла варьируется более чем на 7 дней, используйте тесты
                на овуляцию или фолликулометрию (УЗИ).
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Признаки овуляции</AlertTitle>
              <AlertDescription>
                Повышение базальной температуры на 0.2–0.5°C, прозрачные
                тягучие выделения (как яичный белок), лёгкие тянущие боли
                внизу живота, повышение либидо.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Когда обратиться к врачу</AlertTitle>
              <AlertDescription>
                Если беременность не наступает в течение 12 месяцев
                регулярных попыток (или 6 месяцев после 35 лет),
                обратитесь к репродуктологу.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
