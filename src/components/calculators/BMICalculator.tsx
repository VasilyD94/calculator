'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { useUserParams } from '@/hooks/useUserParams'
import { calculateBMI, type BMICategoryInfo } from '@/lib/calculations/bmi'
import { cn } from '@/lib/utils'
import {
  Weight,
  Ruler,
  Target,
  AlertTriangle,
  Lightbulb,
  Dumbbell,
  Info,
  SlidersHorizontal,
  Snowflake,
  TrendingDown,
  CircleCheck,
  TrendingUp,
  OctagonAlert,
  type LucideIcon,
} from 'lucide-react'

// Иконки для каждой категории ИМТ
const CATEGORY_ICONS: Record<string, { icon: LucideIcon; color: string }> = {
  'Выраженный дефицит': { icon: Snowflake, color: 'text-blue-400' },
  'Дефицит массы': { icon: TrendingDown, color: 'text-blue-400' },
  'Норма': { icon: CircleCheck, color: 'text-green-400' },
  'Избыточный вес': { icon: TrendingUp, color: 'text-yellow-400' },
  'Ожирение I': { icon: AlertTriangle, color: 'text-red-400' },
  'Ожирение II': { icon: OctagonAlert, color: 'text-red-400' },
  'Ожирение III': { icon: OctagonAlert, color: 'text-red-400' },
}

export function BMICalculator() {
  const { gender, weight, height, setParam, loaded } = useUserParams()

  const result = useMemo(
    () => calculateBMI({ gender, weight, height }),
    [gender, weight, height]
  )

  if (!loaded) {
    return (
      <div className="space-y-4">
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5" />
              Ваши параметры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                <div className="h-8 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="h-16 rounded-xl border bg-muted/50 animate-pulse" />
      </div>
    )
  }

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Ваши параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <GenderToggle value={gender} onChange={(v) => setParam('gender', v)} />

          <ValueSlider
            label="Рост"
            value={height}
            onChange={(v) => setParam('height', v)}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="h-5 w-5" />}
          />

          <ValueSlider
            label="Вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-5 w-5" />}
          />
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-4">
        {/* Классификация ИМТ + Идеальный вес */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-5 w-5" />
              Ваш результат
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <BMIScaleBars categories={result.categories} bmi={result.bmi} />

            <div className="border-t pt-3 space-y-2">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-0.5">
                  При росте {height} см здоровый вес:
                </p>
                <p className="text-2xl font-bold whitespace-nowrap">
                  {result.idealWeight.min}–{result.idealWeight.max}
                  <span className="text-base font-normal text-muted-foreground ml-1">кг</span>
                </p>
              </div>

              {result.weightDiff !== 0 && (
                <div
                  className={cn(
                    'rounded-lg p-2.5 text-center text-sm font-medium',
                    result.weightDiff > 0
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-amber-50 text-amber-700'
                  )}
                >
                  {result.weightDiff > 0 ? (
                    <>Для достижения нормы рекомендуется набрать <span className="whitespace-nowrap">{result.weightDiff} кг</span></>
                  ) : (
                    <>Для достижения нормы рекомендуется сбросить <span className="whitespace-nowrap">{Math.abs(result.weightDiff)} кг</span></>
                  )}
                </div>
              )}

              {result.weightDiff === 0 && (
                <div className="rounded-lg bg-green-50 p-2.5 text-center text-sm font-medium text-green-700">
                  Ваш вес в пределах нормы
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Советы и ограничения */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Dumbbell className="h-5 w-5 text-blue-400" />
              <AlertTitle>ИМТ и мышечная масса</AlertTitle>
              <AlertDescription>
                ИМТ не различает жировую и мышечную массу. У спортсменов и людей
                с развитой мускулатурой ИМТ может быть завышен, хотя процент жира
                в норме.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-5 w-5 text-sky-400" />
              <AlertTitle>Обхват талии</AlertTitle>
              <AlertDescription>
                Дополнительно измерьте обхват талии.{' '}
                {gender === 'male'
                  ? 'Для мужчин здоровый показатель — до 94 см. Выше 102 см — повышенный риск.'
                  : 'Для женщин здоровый показатель — до 80 см. Выше 88 см — повышенный риск.'}
              </AlertDescription>
            </Alert>
            {result.bmi >= 30 && (
              <Alert>
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <AlertTitle>Рекомендация</AlertTitle>
                <AlertDescription>
                  При ИМТ выше 30 рекомендуется проконсультироваться с врачом
                  перед началом диеты. Безопасный темп снижения веса — не более
                  0,5–1 кг в неделю.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// --- Компонент шкалы ИМТ ---

const activeBgMap = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  yellow: 'bg-yellow-50 border-yellow-200',
  red: 'bg-red-50 border-red-200',
} as const

function BMIScaleBars({
  categories,
  bmi,
}: {
  categories: BMICategoryInfo[]
  bmi: number
}) {
  return (
    <div className="-space-y-px">
      {categories.map((cat) => {
        const rangeLabel =
          cat.min === 0
            ? `< ${cat.max}`
            : cat.max === 50
              ? `${cat.min}+`
              : `${cat.min}–${cat.max}`

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
            <Icon className={cn('h-4 w-4', iconMeta.color)} />

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
                  {bmi}
                </span>
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}
