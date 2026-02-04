'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { FormulaComparison } from '@/components/results/FormulaComparison'
import { useUserParams } from '@/hooks/useUserParams'
import { calculateIdealWeight } from '@/lib/calculations/ideal-weight'
import {
  Weight,
  Ruler,
  Target,
  SlidersHorizontal,
  Lightbulb,
  Info,
  AlertTriangle,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function IdealWeightCalculator() {
  const { gender, weight, height, setParam, loaded } = useUserParams()

  const result = useMemo(
    () => calculateIdealWeight({ gender, weight, height }),
    [gender, weight, height]
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
            <SlidersHorizontal className="size-5" />
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
            icon={<Ruler className="size-5" />}
          />

          <ValueSlider
            label="Текущий вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="size-5" />}
          />
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-4">
        {/* Диапазон идеального веса */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="size-5" />
              Ваш идеальный вес
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Диапазон по 5 формулам
              </p>
              <p className="text-4xl font-bold whitespace-nowrap">
                {result.min}–{result.max}
                <span className="text-lg font-normal text-muted-foreground ml-1">кг</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Среднее: <span className="font-medium text-foreground">{result.average} кг</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-sm text-blue-700 mb-0.5">Текущий вес</p>
                <p className="text-2xl font-bold text-blue-700">{weight} <span className="text-sm font-normal">кг</span></p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <p className="text-sm text-green-700 mb-0.5">Идеальный (среднее)</p>
                <p className="text-2xl font-bold text-green-700">{result.average} <span className="text-sm font-normal">кг</span></p>
              </div>
            </div>

            {result.inRange ? (
              <div className="rounded-lg bg-green-50 p-2.5 text-center text-sm font-medium text-green-700">
                Ваш вес в пределах идеального диапазона
              </div>
            ) : result.currentDiff > 0 ? (
              <div className="rounded-lg bg-amber-50 p-2.5 text-center text-sm font-medium text-amber-700">
                Ваш вес выше идеального на <span className="whitespace-nowrap">{result.currentDiff} кг</span>
              </div>
            ) : (
              <div className="rounded-lg bg-blue-50 p-2.5 text-center text-sm font-medium text-blue-700">
                Ваш вес ниже идеального на <span className="whitespace-nowrap">{Math.abs(result.currentDiff)} кг</span>
              </div>
            )}
          </CardContent>
        </Card>

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
              <Info className="size-5 text-sky-400" />
              <AlertTitle>Формулы — ориентир</AlertTitle>
              <AlertDescription>
                Формулы идеального веса разработаны десятилетия назад и не учитывают
                телосложение, мышечную массу и процент жира. Используйте среднее
                значение как ориентир, а не жёсткую цель.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="size-5 text-amber-400" />
              <AlertTitle>Не только вес</AlertTitle>
              <AlertDescription>
                Здоровье определяется не только весом. Обхват талии, процент жира
                и уровень физической активности — более информативные показатели,
                чем цифра на весах.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison
          results={result.formulas}
          unit="кг"
        />

      </div>
    </div>
  )
}
