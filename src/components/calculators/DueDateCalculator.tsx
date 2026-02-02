'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { DateInput } from '@/components/inputs/DateInput'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import {
  calculateDueDate,
  type ConceptionMethod,
} from '@/lib/calculations/pregnancy'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import {
  Calendar,
  Baby,
  Clock,
  Info,
  Lightbulb,
  CheckCircle2,
  Circle,
  Stethoscope,
  SlidersHorizontal,
} from 'lucide-react'

const METHODS: { id: ConceptionMethod; label: string; short: string }[] = [
  { id: 'lmp', label: 'По дате месячных', short: 'Месячные' },
  { id: 'conception', label: 'По дате зачатия', short: 'Зачатие' },
  { id: 'ultrasound', label: 'По данным УЗИ', short: 'УЗИ' },
]

function getDefaultDate(): Date {
  const d = new Date()
  d.setDate(d.getDate() - 60) // ~8 недель назад
  d.setHours(0, 0, 0, 0)
  return d
}

function toIso(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const trimesterLabels: Record<1 | 2 | 3, string> = {
  1: '1-й триместр',
  2: '2-й триместр',
  3: '3-й триместр',
}

export function DueDateCalculator() {
  const [method, setMethod] = useState<ConceptionMethod>('lmp')
  const [date, setDate] = useState<Date>(getDefaultDate)
  const [usWeeks, setUsWeeks] = useState(8)
  const [usDays, setUsDays] = useState(0)

  // Ограничения: дата не в будущем, не более 42 нед. назад
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const minDate = new Date(today)
  minDate.setDate(minDate.getDate() - 42 * 7)

  const result = useMemo(
    () =>
      calculateDueDate({
        method,
        date,
        ultrasoundWeeks: usWeeks,
        ultrasoundDays: usDays,
      }),
    [method, date, usWeeks, usDays]
  )

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Выберите метод расчёта
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Метод */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl">
            {METHODS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMethod(m.id)}
                className={cn(
                  'flex-1 py-2.5 px-2 rounded-lg text-sm transition-all duration-200 text-center',
                  method === m.id
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span className="hidden sm:inline">{m.label}</span>
                <span className="sm:hidden">{m.short}</span>
              </button>
            ))}
          </div>

          {/* Дата */}
          <DateInput
            label={
              method === 'lmp'
                ? 'Первый день последних месячных'
                : method === 'conception'
                  ? 'Дата зачатия'
                  : 'Дата проведения УЗИ'
            }
            value={date}
            onChange={setDate}
            icon={<Calendar className="h-4 w-4" />}
            min={toIso(minDate)}
            max={toIso(today)}
          />

          {/* Срок на УЗИ */}
          {method === 'ultrasound' && (
            <div className="space-y-4">
              <ValueSlider
                label="Срок на УЗИ — недели"
                value={usWeeks}
                onChange={setUsWeeks}
                min={4}
                max={40}
                unit="нед."
                icon={<Stethoscope className="h-4 w-4" />}
              />
              <ValueSlider
                label="Срок на УЗИ — дни"
                value={usDays}
                onChange={setUsDays}
                min={0}
                max={6}
                unit="дн."
                icon={<Stethoscope className="h-4 w-4" />}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Предполагаемая дата родов</p>
        <p className="text-4xl font-bold text-primary">
          {result.dueDateFormatted}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Текущий срок: {result.currentTermFormatted} · {trimesterLabels[result.trimester]}
        </p>
      </div>

      <div className="space-y-6">
        {/* Прогресс и статистика */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Baby className="h-5 w-5" />
              Прогресс беременности
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {result.currentTermFormatted}
                </span>
                <span className="font-medium">
                  {Math.round(result.progress)}%
                </span>
              </div>
              <Progress value={result.progress} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 триместр</span>
                <span>2 триместр</span>
                <span>3 триместр</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="rounded-lg bg-pink-50 px-3 py-2 text-center">
                <p className="text-xs text-pink-600 mb-0.5">Триместр</p>
                <p className="font-semibold text-pink-700">{result.trimester}-й</p>
              </div>
              <div className="rounded-lg bg-blue-50 px-3 py-2 text-center">
                <p className="text-xs text-blue-600 mb-0.5">Осталось</p>
                <p className="font-semibold text-blue-700">
                  {result.daysLeft > 0 ? `${result.daysLeft} дн.` : '—'}
                </p>
              </div>
              <div className="rounded-lg bg-green-50 px-3 py-2 text-center">
                <p className="text-xs text-green-600 mb-0.5">Прошло</p>
                <p className="font-semibold text-green-700">{result.daysPassed} дн.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ключевые даты */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Ключевые даты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Расчётные даты */}
              <div className="grid gap-2 text-sm mb-4">
                <div className="flex justify-between items-center rounded-lg border px-3 py-2">
                  <span className="text-muted-foreground">Последние месячные</span>
                  <span className="font-medium">{result.lmpDateFormatted}</span>
                </div>
                <div className="flex justify-between items-center rounded-lg border px-3 py-2">
                  <span className="text-muted-foreground">Предполагаемое зачатие</span>
                  <span className="font-medium">{result.conceptionDateFormatted}</span>
                </div>
              </div>

              {/* Таймлайн milestones */}
              <div className="space-y-0">
                {result.milestones.map((m, i) => {
                  const isNext =
                    !m.passed &&
                    (i === 0 || result.milestones[i - 1].passed)

                  return (
                    <div key={m.week} className="flex gap-3">
                      {/* Вертикальная линия + точка */}
                      <div className="flex flex-col items-center">
                        {m.passed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        ) : (
                          <Circle
                            className={cn(
                              'h-5 w-5 shrink-0',
                              isNext
                                ? 'text-pink-500 fill-pink-100'
                                : 'text-muted-foreground'
                            )}
                          />
                        )}
                        {i < result.milestones.length - 1 && (
                          <div
                            className={cn(
                              'w-0.5 flex-1 min-h-[1.5rem]',
                              m.passed ? 'bg-green-300' : 'bg-muted'
                            )}
                          />
                        )}
                      </div>

                      {/* Контент */}
                      <div
                        className={cn(
                          'pb-4 text-sm',
                          isNext && 'font-medium'
                        )}
                      >
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span
                            className={cn(
                              m.passed
                                ? 'text-muted-foreground'
                                : isNext
                                  ? 'text-foreground'
                                  : 'text-muted-foreground'
                            )}
                          >
                            {m.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {m.week} нед.
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {format(m.date, 'd MMM yyyy', {
                            locale: undefined,
                          }).replace(
                            /(\d+)\s(\w+)\s(\d+)/,
                            (_match, d, _mon, y) => {
                              const monthRu = [
                                'янв', 'фев', 'мар', 'апр', 'май', 'июн',
                                'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
                              ][m.date.getMonth()]
                              return `${d} ${monthRu} ${y}`
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

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
              <Info className="h-4 w-4" />
              <AlertTitle>ПДР — приблизительная дата</AlertTitle>
              <AlertDescription>
                Только 4–5% детей рождаются точно в ПДР. Нормальные роды
                происходят на сроке 37–42 недели. Ваш малыш родится тогда,
                когда будет готов.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Метод расчёта</AlertTitle>
              <AlertDescription>
                Расчёт по дате месячных (правило Негеле) предполагает цикл
                28 дней и овуляцию на 14-й день. При нерегулярном цикле
                более точную дату определит УЗИ в первом триместре.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Уточнение у врача</AlertTitle>
              <AlertDescription>
                Наиболее точно срок беременности определяется на УЗИ в 11–13
                недель (первый скрининг). Обязательно посетите врача для
                подтверждения срока и наблюдения за беременностью.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
