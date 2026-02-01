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
import { getFetalDevelopment } from '@/lib/calculations/fetal-development'
import { cn } from '@/lib/utils'
import {
  Calendar,
  Baby,
  Clock,
  Info,
  Lightbulb,
  Stethoscope,
  Ruler,
  Heart,
} from 'lucide-react'

const METHODS: { id: ConceptionMethod; label: string; short: string }[] = [
  { id: 'lmp', label: 'По дате месячных', short: 'Месячные' },
  { id: 'conception', label: 'По дате зачатия', short: 'Зачатие' },
  { id: 'ultrasound', label: 'По данным УЗИ', short: 'УЗИ' },
]

function getDefaultDate(): Date {
  const d = new Date()
  d.setDate(d.getDate() - 60)
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


export function GestationalAgeCalculator() {
  const [method, setMethod] = useState<ConceptionMethod>('lmp')
  const [date, setDate] = useState<Date>(getDefaultDate)
  const [usWeeks, setUsWeeks] = useState(8)
  const [usDays, setUsDays] = useState(0)

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

  const development = useMemo(
    () => getFetalDevelopment(result.currentWeek),
    [result.currentWeek]
  )

  return (
    <div className="space-y-8">
      {/* Ввод данных */}
      <Card>
        <CardHeader>
          <CardTitle>Выберите метод расчёта</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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

      {/* Результаты */}
      <div className="space-y-6">
        {/* Текущий срок — компактная */}
        <Card>
          <CardContent className="pt-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <Baby className="h-6 w-6 text-pink-500 shrink-0" />
                <div>
                  <p className="text-xl font-bold leading-tight">
                    {result.currentTermFormatted}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ПДР: {result.dueDateFormatted}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-1.5 sm:ml-auto">
                <span className="flex items-center gap-1.5 rounded-md bg-pink-50 px-2.5 py-1.5 text-xs text-pink-700">
                  <Baby className="h-3.5 w-3.5 shrink-0" />
                  {trimesterLabels[result.trimester]}
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1.5 text-xs text-green-700">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  Прошло {result.daysPassed} дн.
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1.5 text-xs text-blue-700">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  {result.daysLeft > 0
                    ? `Осталось ${result.daysLeft} дн.`
                    : 'Срок наступил'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Развитие малыша — компактное */}
        <Card>
          <CardContent className="pt-5 pb-5 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl shrink-0">{development.emoji}</span>
              <div>
                <p className="font-semibold">
                  Размер: {development.size}
                </p>
                <div className="flex items-center gap-3 mt-0.5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Ruler className="h-3.5 w-3.5" />
                    {development.length}
                  </span>
                  <span>&#183;</span>
                  <span>{development.weight}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-3 space-y-1.5">
              <h4 className="font-medium text-sm">
                Что происходит на {development.week}-й неделе
              </h4>
              <p className="text-sm text-muted-foreground">
                {development.development}
              </p>
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 space-y-1.5">
              <h4 className="font-medium text-sm flex items-center gap-1.5">
                <Lightbulb className="h-3.5 w-3.5 text-primary" />
                Совет
              </h4>
              <p className="text-sm text-muted-foreground">
                {development.momTip}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Прогресс */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Прогресс беременности
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
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
          </CardContent>
        </Card>

        {/* Путь по триместрам */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Путь по триместрам
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {([
              { label: '1 триместр', range: '1–12 нед.', start: 1, end: 12, color: 'pink' as const },
              { label: '2 триместр', range: '13–26 нед.', start: 13, end: 26, color: 'purple' as const },
              { label: '3 триместр', range: '27–40 нед.', start: 27, end: 40, color: 'blue' as const },
            ] as const).map((tri) => {
              const totalWeeks = tri.end - tri.start + 1
              const weekInTri = Math.min(
                Math.max(result.currentWeek - tri.start + 1, 0),
                totalWeeks
              )
              const percent = Math.round((weekInTri / totalWeeks) * 100)
              const isActive =
                result.currentWeek >= tri.start && result.currentWeek <= tri.end
              const isDone = result.currentWeek > tri.end

              const barColor = {
                pink: 'bg-pink-500',
                purple: 'bg-purple-500',
                blue: 'bg-blue-500',
              }[tri.color]

              const textColor = {
                pink: 'text-pink-600',
                purple: 'text-purple-600',
                blue: 'text-blue-600',
              }[tri.color]

              const trackColor = {
                pink: 'bg-pink-100',
                purple: 'bg-purple-100',
                blue: 'bg-blue-100',
              }[tri.color]

              return (
                <div key={tri.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className={cn('font-medium', isActive ? textColor : 'text-muted-foreground')}>
                      {tri.label}
                      <span className="font-normal text-muted-foreground ml-1.5">
                        ({tri.range})
                      </span>
                    </span>
                    <span className={cn(
                      'text-xs font-medium',
                      isDone ? 'text-green-600' : isActive ? textColor : 'text-muted-foreground'
                    )}>
                      {isDone ? 'Пройден' : isActive ? `${result.currentWeek} нед.` : 'Впереди'}
                    </span>
                  </div>
                  <div className={cn('h-3 rounded-full overflow-hidden', trackColor)}>
                    <div
                      className={cn('h-full rounded-full transition-all duration-500', barColor)}
                      style={{ width: `${isDone ? 100 : percent}%` }}
                    />
                  </div>
                </div>
              )
            })}
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
              <AlertTitle>Акушерский и эмбриональный срок</AlertTitle>
              <AlertDescription>
                Акушерский срок считается от первого дня последних месячных
                и на 2 недели больше эмбрионального (от зачатия). Врачи
                используют именно акушерский срок.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Точность определения срока</AlertTitle>
              <AlertDescription>
                Наиболее точно срок определяется на УЗИ в 11–13 недель
                (первый скрининг) — погрешность всего 3–5 дней.
                По дате месячных точность ±2 недели.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Наблюдение у врача</AlertTitle>
              <AlertDescription>
                Рекомендуется встать на учёт до 12 недель. Регулярные
                визиты к врачу помогут отслеживать развитие малыша
                и здоровье мамы.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
