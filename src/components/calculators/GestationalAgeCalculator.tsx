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
  Lightbulb,
  Stethoscope,
  SlidersHorizontal,
  CalendarClock,
  Hospital,
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
            icon={<Calendar className="h-5 w-5" />}
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
                icon={<Stethoscope className="h-5 w-5" />}
              />
              <ValueSlider
                label="Срок на УЗИ — дни"
                value={usDays}
                onChange={setUsDays}
                min={0}
                max={6}
                unit="дн."
                icon={<Stethoscope className="h-5 w-5" />}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Текущий срок беременности</p>
        <p className="text-4xl font-bold text-primary">
          {result.currentTermFormatted}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          <strong className="text-foreground">{trimesterLabels[result.trimester]}</strong> · ПДР: <strong className="text-foreground">{result.dueDateFormatted}</strong>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="rounded-lg bg-pink-50 px-2 py-2 text-center">
          <span className="text-pink-700"><span className="font-semibold">{result.trimester}-й</span> <span className="text-xs">триместр</span></span>
        </div>
        <div className="rounded-lg bg-blue-50 px-2 py-2 text-center">
          <span className="text-blue-700"><span className="text-xs">Осталось</span> <span className="font-semibold">{result.daysLeft > 0 ? `${result.daysLeft}` : '—'}</span> <span className="text-xs">дн.</span></span>
        </div>
        <div className="rounded-lg bg-green-50 px-2 py-2 text-center">
          <span className="text-green-700"><span className="text-xs">Прошло</span> <span className="font-semibold">{result.daysPassed}</span> <span className="text-xs">дн.</span></span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Развитие малыша и прогресс */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Baby className="h-5 w-5" />
              Развитие малыша
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{development.emoji}</span>
              <div>
                <p className="font-semibold">
                  Размер: {development.size}
                </p>
                <div className="flex items-center gap-3 mt-0.5 text-sm text-muted-foreground">
                  <span>{development.length}</span>
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
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Совет
              </h4>
              <p className="text-sm text-muted-foreground">
                {development.momTip}
              </p>
            </div>

            {/* Прогресс */}
            <div className="space-y-2 pt-2 border-t">
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
              <CalendarClock className="h-5 w-5 text-blue-500" />
              <AlertTitle>Акушерский и эмбриональный срок</AlertTitle>
              <AlertDescription>
                Акушерский срок считается от первого дня последних месячных
                и на 2 недели больше эмбрионального (от зачатия). Врачи
                используют именно акушерский срок.
              </AlertDescription>
            </Alert>
            <Alert>
              <Stethoscope className="h-5 w-5 text-pink-500" />
              <AlertTitle>Точность определения срока</AlertTitle>
              <AlertDescription>
                Наиболее точно срок определяется на УЗИ в 11–13 недель
                (первый скрининг) — погрешность всего 3–5 дней.
                По дате месячных точность ±2 недели.
              </AlertDescription>
            </Alert>
            <Alert>
              <Hospital className="h-5 w-5 text-green-500" />
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
