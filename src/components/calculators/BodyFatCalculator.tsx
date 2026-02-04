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
  Scan,
  CalendarDays,
  SlidersHorizontal,
  Shield,
  Dumbbell,
  CircleCheck,
  TrendingUp,
  AlertTriangle,
  type LucideIcon,
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
      <div className="space-y-4">
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="size-5" />
              Ваши параметры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="size-5" />
            Ваши параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <GenderToggle value={gender} onChange={(v) => setParam('gender', v)} />

          <ValueSlider
            label="Возраст"
            value={age}
            onChange={(v) => setParam('age', v)}
            min={15}
            max={80}
            unit="лет"
            icon={<CalendarDays className="size-5" />}
          />

          <ValueSlider
            label="Рост"
            value={height}
            onChange={(v) => setParam('height', v)}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="size-5" />}
          />

          <ValueSlider
            label="Вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="size-5" />}
          />

          <ValueSlider
            label="Обхват талии"
            value={waist}
            onChange={setWaist}
            min={50}
            max={150}
            unit="см"
            icon={<Scan className="size-5" />}
          />

          <ValueSlider
            label="Обхват шеи"
            value={neck}
            onChange={setNeck}
            min={25}
            max={55}
            unit="см"
            icon={<Ruler className="size-5" />}
          />

          {gender === 'female' && (
            <ValueSlider
              label="Обхват бёдер"
              value={hip}
              onChange={setHip}
              min={60}
              max={150}
              unit="см"
              icon={<Scan className="size-5" />}
            />
          )}
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-4">
        {/* Процент жира + Состав тела */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="size-5" />
              Процент жира в организме
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <BodyFatScaleBars
              categories={result.categories}
              value={result.bodyFat}
            />

            <div className="border-t pt-3 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="text-xs sm:text-sm text-amber-700 mb-0.5 whitespace-nowrap">Жировая масса</p>
                  <p className="text-2xl font-bold text-amber-700">
                    {result.fatMass} <span className="text-sm font-normal">кг</span>
                  </p>
                  <p className="text-xs text-amber-600 mt-1">{result.bodyFat}%</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-xs sm:text-sm text-blue-700 mb-0.5 whitespace-nowrap">Сухая масса</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {result.leanMass} <span className="text-sm font-normal">кг</span>
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    {Math.round((100 - result.bodyFat) * 10) / 10}%
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison results={result.formulas} unit="%" />

        {/* Важно знать */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="size-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Ruler className="size-5 text-amber-400" />
              <AlertTitle>Как измерять обхваты</AlertTitle>
              <AlertDescription>
                Используйте мягкую сантиметровую ленту. Измеряйте утром натощак.
                Талию — на уровне пупка (не втягивая живот). Шею — под кадыком.
                Бёдра — в самом широком месте ягодиц.
              </AlertDescription>
            </Alert>
            <Alert>
              <Target className="size-5 text-blue-400" />
              <AlertTitle>Точность метода</AlertTitle>
              <AlertDescription>
                Метод ВМС США имеет погрешность 3–4%. Для более точного
                определения процента жира используют калиперометрию,
                биоимпедансный анализ (BIA) или DEXA-сканирование.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="size-5 text-violet-400" />
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

// --- Компонент шкалы % жира (стиль как BMIScaleBars) ---

const CATEGORY_ICONS: Record<string, { icon: LucideIcon; color: string }> = {
  'Незаменимый жир': { icon: Shield, color: 'text-blue-400' },
  'Атлеты': { icon: Dumbbell, color: 'text-green-400' },
  'Фитнес': { icon: CircleCheck, color: 'text-green-400' },
  'Средний': { icon: TrendingUp, color: 'text-yellow-400' },
  'Выше нормы': { icon: AlertTriangle, color: 'text-red-400' },
}

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
    <div className="-space-y-px">
      {categories.map((cat) => {
        const rangeLabel =
          cat.min === 0
            ? `< ${cat.max}%`
            : cat.max === 50
              ? `${cat.min}%+`
              : `${cat.min}–${cat.max}%`

        const iconMeta = CATEGORY_ICONS[cat.label] ?? { icon: Info, color: 'text-muted-foreground' }
        const Icon = iconMeta.icon

        return (
          <div
            key={cat.label}
            className={cn(
              'grid grid-cols-[1rem_1fr_auto] items-center gap-1.5 rounded-md border-2 px-2 py-1.5 transition-colors duration-200',
              cat.active
                ? activeBgMap[cat.color]
                : 'border-transparent bg-transparent'
            )}
          >
            <Icon className={cn('size-4', iconMeta.color)} />

            <span
              className={cn(
                'text-xs sm:text-sm whitespace-nowrap transition-colors duration-200',
                cat.active ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {cat.label}
            </span>

            <span className="flex items-center gap-1.5">
              <span
                className={cn(
                  'text-xs sm:text-sm tabular-nums whitespace-nowrap transition-colors duration-200',
                  cat.active ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}
              >
                {rangeLabel}
              </span>
              {cat.active && (
                <span
                  className={cn(
                    'text-xs font-bold px-1.5 py-0.5 rounded tabular-nums whitespace-nowrap',
                    cat.color === 'blue' && 'bg-blue-100 text-blue-700',
                    cat.color === 'green' && 'bg-green-100 text-green-700',
                    cat.color === 'yellow' && 'bg-yellow-100 text-yellow-700',
                    cat.color === 'red' && 'bg-red-100 text-red-700'
                  )}
                >
                  {value}%
                </span>
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}
