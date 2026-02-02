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
  Lightbulb,
  Heart,
  Droplets,
  SlidersHorizontal,
  AlertTriangle,
  Stethoscope,
  ShieldAlert,
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

const PHASE_CONFIG: Record<CyclePhase, { label: string }> = {
  menstruation: { label: 'Менструация' },
  follicular: { label: 'Фолликулярная фаза' },
  fertile: { label: 'Фертильное окно' },
  ovulation: { label: 'День овуляции' },
  luteal: { label: 'Лютеиновая фаза' },
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
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Данные о цикле
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <DateInput
            label="Первый день последних месячных"
            value={lastPeriod}
            onChange={setLastPeriod}
            icon={<Calendar className="h-5 w-5" />}
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
            icon={<Clock className="h-5 w-5" />}
          />

          <ValueSlider
            label="Длительность менструации"
            value={periodDuration}
            onChange={setPeriodDuration}
            min={3}
            max={7}
            unit="дн."
            icon={<Droplets className="h-5 w-5" />}
          />
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Текущая фаза цикла</p>
        <p className="text-4xl font-bold text-primary">
          {phaseConfig.label}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          День <strong className="text-foreground">{result.currentDayInCycle}</strong> из {result.cycleLength} · Овуляция: <strong className="text-foreground">{result.ovulationFormatted}</strong>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-emerald-50 px-2 py-2.5 text-center text-emerald-700">
          <p className="text-[10px] leading-tight">Овуляция</p>
          {result.daysUntilOvulation > 0
            ? <><p className="text-lg font-bold leading-tight">{result.daysUntilOvulation}</p><p className="text-[10px] leading-tight">дн.</p></>
            : result.daysUntilOvulation === 0
              ? <p className="text-xs font-bold mt-1">Сегодня!</p>
              : <p className="text-xs font-bold mt-1">Прошла</p>}
        </div>
        <div className="rounded-lg bg-pink-50 px-2 py-2.5 text-center text-pink-700">
          <p className="text-[10px] leading-tight">Фертильное</p>
          <p className="text-xs font-bold leading-snug mt-0.5">{result.fertileWindowFormatted}</p>
        </div>
        <div className="rounded-lg bg-red-50 px-2 py-2.5 text-center text-red-700">
          <p className="text-[10px] leading-tight">До мес.</p>
          {result.daysUntilPeriod > 0
            ? <><p className="text-lg font-bold leading-tight">{result.daysUntilPeriod}</p><p className="text-[10px] leading-tight">дн.</p></>
            : <p className="text-xs font-bold mt-1">Ожидаются</p>}
        </div>
      </div>

      <div className="space-y-6">
        {/* Фертильное окно + Фазы цикла — рядом на десктопе */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Фертильное окно */}
          <Card className="gap-3 py-4 flex flex-col">
            <CardHeader className="pb-0">
              <CardTitle className="text-base flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Фертильное окно
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
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
                <div className="flex items-center justify-between rounded-md bg-red-50 px-3 py-2 text-xs">
                  <span className="text-red-700">Месячные</span>
                  <span className="font-medium text-red-700">
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
          <Card className="gap-3 py-4">
            <CardHeader className="pb-0">
              <CardTitle className="text-base flex items-center gap-2">
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

        {/* Важно знать */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <ShieldAlert className="h-5 w-5 text-red-500" />
              <AlertTitle>Не метод контрацепции</AlertTitle>
              <AlertDescription>
                Календарный метод не является надёжным средством контрацепции.
                Овуляция может сдвигаться на несколько дней из-за стресса,
                болезни или смены режима.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <AlertTitle>Точность при нерегулярном цикле</AlertTitle>
              <AlertDescription>
                Калькулятор наиболее точен при регулярном цикле. Если длина
                цикла варьируется более чем на 7 дней, используйте тесты
                на овуляцию или фолликулометрию (УЗИ).
              </AlertDescription>
            </Alert>
            <Alert>
              <Stethoscope className="h-5 w-5 text-blue-500" />
              <AlertTitle>Признаки овуляции</AlertTitle>
              <AlertDescription>
                Повышение базальной температуры на 0.2–0.5°C, прозрачные
                тягучие выделения (как яичный белок), лёгкие тянущие боли
                внизу живота, повышение либидо.
              </AlertDescription>
            </Alert>
            <Alert>
              <Heart className="h-5 w-5 text-pink-500" />
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
