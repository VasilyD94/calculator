'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { FormulaComparison } from '@/components/results/FormulaComparison'
import { useUserParams } from '@/hooks/useUserParams'
import { calculateIdealWeight } from '@/lib/calculations/ideal-weight'
import {
  Weight,
  Ruler,
  Target,
  Scale,
  Info,
  BookOpen,
} from 'lucide-react'

export function IdealWeightCalculator() {
  const { gender, weight, height, setParam, loaded } = useUserParams()

  const result = useMemo(
    () => calculateIdealWeight({ gender, weight, height }),
    [gender, weight, height]
  )

  if (!loaded) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ваши параметры</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
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
            label="Рост"
            value={height}
            onChange={(v) => setParam('height', v)}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="h-4 w-4" />}
          />

          <ValueSlider
            label="Текущий вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Диапазон идеального веса */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Ваш идеальный вес
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Диапазон по 5 формулам
              </p>
              <p className="text-3xl font-bold whitespace-nowrap">
                {result.min}–{result.max}
                <span className="text-lg font-normal text-muted-foreground ml-1">кг</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Среднее: <span className="font-medium text-foreground">{result.average} кг</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison
          results={result.formulas}
          unit="кг"
        />

        {/* Сравнение с текущим весом */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Сравнение с текущим весом
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground mb-1">Текущий вес</p>
                <p className="text-2xl font-bold">{weight} <span className="text-sm font-normal text-muted-foreground">кг</span></p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground mb-1">Идеальный (среднее)</p>
                <p className="text-2xl font-bold">{result.average} <span className="text-sm font-normal text-muted-foreground">кг</span></p>
              </div>
            </div>

            {result.inRange ? (
              <div className="rounded-lg bg-green-50 p-4 text-center text-sm font-medium text-green-700">
                Ваш вес в пределах идеального диапазона!
              </div>
            ) : result.currentDiff > 0 ? (
              <div className="rounded-lg bg-amber-50 p-4 text-center text-sm font-medium text-amber-700">
                Ваш вес выше идеального на <span className="whitespace-nowrap">{result.currentDiff} кг</span>
              </div>
            ) : (
              <div className="rounded-lg bg-blue-50 p-4 text-center text-sm font-medium text-blue-700">
                Ваш вес ниже идеального на <span className="whitespace-nowrap">{Math.abs(result.currentDiff)} кг</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Описание формул */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              О формулах
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Devine (1974) — рекомендуемая</AlertTitle>
              <AlertDescription>
                Самая распространённая формула, используется в клинической практике
                для дозирования лекарств. Создана доктором Б. Дж. Девайном.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Robinson (1983)</AlertTitle>
              <AlertDescription>
                Модификация формулы Девайна, разработанная для более точного
                определения идеального веса в клинических условиях.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Miller (1983)</AlertTitle>
              <AlertDescription>
                Ещё одна модификация, которая даёт несколько более высокие
                значения идеального веса по сравнению с другими формулами.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Hamwi (1964)</AlertTitle>
              <AlertDescription>
                Одна из первых формул идеального веса, предложенная
                эндокринологом Г. Дж. Хамви. Широко применялась в больницах.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Брока (модифицированная)</AlertTitle>
              <AlertDescription>
                Модификация классической формулы Поля Брока (1871).
                Оригинал: рост − 100. Модификация добавляет поправку на пол.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
