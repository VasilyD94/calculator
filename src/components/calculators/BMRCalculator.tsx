'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { FormulaComparison } from '@/components/results/FormulaComparison'
import { useUserParams } from '@/hooks/useUserParams'
import { calculateBMR } from '@/lib/calculations/bmr'
import {
  Weight,
  Ruler,
  Flame,
  Info,
  Lightbulb,
  CalendarDays,
  SlidersHorizontal,
  Dumbbell,
} from 'lucide-react'

export function BMRCalculator() {
  const { gender, age, weight, height, setParam, loaded } = useUserParams()

  const result = useMemo(
    () => calculateBMR({ gender, age, weight, height }),
    [gender, age, weight, height]
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
            {Array.from({ length: 4 }).map((_, i) => (
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
    <div id="calculator" className="space-y-4">
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
            label="Возраст"
            value={age}
            onChange={(v) => setParam('age', v)}
            min={15}
            max={80}
            unit="лет"
            icon={<CalendarDays className="h-5 w-5" />}
          />

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
        {/* Основной результат */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Flame className="h-5 w-5" />
              Ваш базовый метаболизм
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">
                По формуле Миффлина-Сан Жеора
              </p>
              <p className="text-4xl font-bold whitespace-nowrap">
                {result.recommended}
                <span className="text-lg font-normal text-muted-foreground ml-1">
                  ккал/день
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Диапазон: <span className="font-medium text-foreground">{result.min}–{result.max} ккал</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-orange-50 p-3">
                <p className="text-sm text-orange-700 mb-0.5">В час</p>
                <p className="text-2xl font-bold text-orange-700">
                  {result.hourly} <span className="text-sm font-normal">ккал</span>
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-sm text-blue-700 mb-0.5">В сутки</p>
                <p className="text-2xl font-bold text-blue-700">
                  {Math.round(result.recommended * 1.55)} <span className="text-sm font-normal">ккал</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Что это значит */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что это значит
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">{result.recommended} ккал</span> — это
              минимум энергии, который ваш организм тратит в сутки на поддержание
              жизненных функций в полном покое: дыхание, кровообращение, работу мозга,
              обновление клеток.
            </p>
            <p>
              Реальный суточный расход (TDEE) выше — он зависит от вашей физической
              активности и может составлять от{' '}
              <span className="font-medium text-foreground">
                {Math.round(result.recommended * 1.2)}
              </span>{' '}
              до{' '}
              <span className="font-medium text-foreground">
                {Math.round(result.recommended * 1.9)}
              </span>{' '}
              ккал/день.
            </p>
            <p>
              При похудении не рекомендуется опускать калорийность рациона ниже вашего
              BMR ({result.recommended} ккал) — это может замедлить метаболизм и навредить
              здоровью.
            </p>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison results={result.formulas} unit="ккал" />

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
              <Flame className="h-5 w-5 text-amber-400" />
              <AlertTitle>BMR и TDEE — в чём разница</AlertTitle>
              <AlertDescription>
                BMR (базовый метаболизм) — расход в полном покое. TDEE (суточный
                расход) = BMR × коэффициент активности. Для расчёта TDEE используйте
                наш калькулятор калорий.
              </AlertDescription>
            </Alert>
            <Alert>
              <Dumbbell className="h-5 w-5 text-blue-400" />
              <AlertTitle>Формула Кетча-МакАрдла</AlertTitle>
              <AlertDescription>
                Эта формула использует сухую массу тела и точнее для спортсменов.
                Здесь она рассчитана по среднему проценту жира (20% для мужчин, 28%
                для женщин). Для точного результата используйте калькулятор процента
                жира.
              </AlertDescription>
            </Alert>
            <Alert>
              <CalendarDays className="h-5 w-5 text-violet-400" />
              <AlertTitle>С возрастом BMR снижается</AlertTitle>
              <AlertDescription>
                После 30 лет базовый метаболизм замедляется на 3–5% каждое
                десятилетие из-за потери мышечной массы. Силовые тренировки помогают
                поддерживать высокий BMR.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
