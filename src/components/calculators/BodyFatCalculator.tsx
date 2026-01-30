'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { FormulaComparison } from '@/components/results/FormulaComparison'
import { useUserParams } from '@/hooks/useUserParams'
import {
  calculateBodyFat,
  type BodyFatCategoryInfo,
} from '@/lib/calculations/body-fat'
import { cn } from '@/lib/utils'
import {
  Weight,
  Ruler,
  Target,
  Info,
  Lightbulb,
  CircleGauge,
  Scan,
  CalendarDays,
} from 'lucide-react'

export function BodyFatCalculator() {
  const { gender, age, weight, height, setParam, loaded } = useUserParams()

  // Обхваты — локальный state (специфичны для этого калькулятора)
  const [waist, setWaist] = useState(gender === 'male' ? 85 : 75)
  const [neck, setNeck] = useState(gender === 'male' ? 38 : 33)
  const [hip, setHip] = useState(95)

  const result = useMemo(
    () => calculateBodyFat({ gender, age, weight, height, waist, neck, hip }),
    [gender, age, weight, height, waist, neck, hip]
  )

  if (!loaded) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ваши параметры</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                <div className="h-8 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="h-32 rounded-xl border bg-muted/50 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Ввод данных */}
      <Card>
        <CardHeader>
          <CardTitle>Ваши параметры</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <GenderToggle value={gender} onChange={(v) => setParam('gender', v)} />

          <ValueSlider
            label="Возраст"
            value={age}
            onChange={(v) => setParam('age', v)}
            min={15}
            max={80}
            unit="лет"
            icon={<CalendarDays className="h-4 w-4" />}
          />

          <ValueSlider
            label="Рост"
            value={height}
            onChange={(v) => setParam('height', v)}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="h-4 w-4" />}
          />

          <ValueSlider
            label="Вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Обхваты */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scan className="h-5 w-5" />
            Обхваты тела
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ValueSlider
            label="Обхват талии"
            value={waist}
            onChange={setWaist}
            min={50}
            max={150}
            unit="см"
          />

          <ValueSlider
            label="Обхват шеи"
            value={neck}
            onChange={setNeck}
            min={25}
            max={55}
            unit="см"
          />

          {gender === 'female' && (
            <ValueSlider
              label="Обхват бёдер"
              value={hip}
              onChange={setHip}
              min={60}
              max={150}
              unit="см"
            />
          )}
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Классификация */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Процент жира в организме
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BodyFatScaleBars
              categories={result.categories}
              value={result.bodyFat}
            />
          </CardContent>
        </Card>

        {/* Состав тела */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleGauge className="h-5 w-5" />
              Состав тела
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-amber-50 p-4">
                <p className="text-sm text-amber-700 mb-1">Жировая масса</p>
                <p className="text-2xl font-bold text-amber-700">
                  {result.fatMass} <span className="text-sm font-normal">кг</span>
                </p>
                <p className="text-xs text-amber-600 mt-1">{result.bodyFat}%</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-700 mb-1">Сухая масса</p>
                <p className="text-2xl font-bold text-blue-700">
                  {result.leanMass} <span className="text-sm font-normal">кг</span>
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  {Math.round((100 - result.bodyFat) * 10) / 10}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison results={result.formulas} unit="%" />

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
              <AlertTitle>Как измерять обхваты</AlertTitle>
              <AlertDescription>
                Используйте мягкую сантиметровую ленту. Измеряйте утром натощак.
                Талию — на уровне пупка (не втягивая живот). Шею — под кадыком.
                Бёдра — в самом широком месте ягодиц.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Точность метода</AlertTitle>
              <AlertDescription>
                Метод ВМС США имеет погрешность 3–4%. Для более точного
                определения процента жира используют калиперометрию,
                биоимпедансный анализ (BIA) или DEXA-сканирование.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Формулы на основе ИМТ</AlertTitle>
              <AlertDescription>
                Формулы Deurenberg и Gallagher оценивают процент жира по ИМТ,
                возрасту и полу. Они менее точны для спортсменов и людей
                с развитой мускулатурой, но полезны для сравнения.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// --- Компонент шкалы % жира (аналог BMIScaleBars) ---

const barColorMap = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
} as const

const activeBgMap = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  yellow: 'bg-yellow-50 border-yellow-200',
  red: 'bg-red-50 border-red-200',
} as const

function BodyFatScaleBars({
  categories,
  value,
}: {
  categories: BodyFatCategoryInfo[]
  value: number
}) {
  return (
    <div className="space-y-1">
      {categories.map((cat) => {
        const rangeLabel =
          cat.min === 0
            ? `< ${cat.max}%`
            : cat.max === 50
              ? `${cat.min}%+`
              : `${cat.min}–${cat.max}%`

        return (
          <div
            key={cat.label}
            className={cn(
              'grid grid-cols-[0.75rem_1fr_auto_3rem] items-center gap-2 rounded-lg border-2 px-3 py-2.5 transition-colors duration-200',
              cat.active
                ? activeBgMap[cat.color]
                : 'border-transparent bg-transparent'
            )}
          >
            <div className={cn('h-3 w-3 rounded-full', barColorMap[cat.color])} />

            <span
              className={cn(
                'text-sm truncate transition-colors duration-200',
                cat.active ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {cat.label}
            </span>

            <span
              className={cn(
                'text-sm tabular-nums whitespace-nowrap transition-colors duration-200',
                cat.active ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {rangeLabel}
            </span>

            <span
              className={cn(
                'text-sm font-bold py-0.5 rounded-md text-center transition-opacity duration-200',
                cat.active ? 'opacity-100' : 'opacity-0',
                cat.color === 'blue' && 'bg-blue-100 text-blue-700',
                cat.color === 'green' && 'bg-green-100 text-green-700',
                cat.color === 'yellow' && 'bg-yellow-100 text-yellow-700',
                cat.color === 'red' && 'bg-red-100 text-red-700'
              )}
            >
              {value}%
            </span>
          </div>
        )
      })}
    </div>
  )
}
