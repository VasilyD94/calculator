'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { useUserParams } from '@/hooks/useUserParams'
import { ResultCard } from '@/components/results/ResultCard'
import { ResultScale } from '@/components/results/ResultScale'
import { calculateBMI } from '@/lib/calculations/bmi'
import {
  Weight,
  Ruler,
  Target,
  AlertTriangle,
  Lightbulb,
  Dumbbell,
  Info,
} from 'lucide-react'

export function BMICalculator() {
  const { gender, weight, height, setParam, loaded } = useUserParams()

  const result = useMemo(
    () => calculateBMI({ gender, weight, height }),
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

      {/* Результаты */}
      <div className="space-y-6">
        {/* Основной результат */}
        <ResultCard
          title="Ваш ИМТ"
          value={result.bmi}
          unit=""
          description={result.category}
          status={result.status}
        />

        {/* Шкала ИМТ */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Шкала ИМТ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResultScale value={result.bmi} ranges={result.ranges} />
          </CardContent>
        </Card>

        {/* Идеальный вес */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Weight className="h-5 w-5" />
              Идеальный вес
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                При росте {height} см здоровый вес:
              </p>
              <p className="text-3xl font-bold">
                {result.idealWeight.min}–{result.idealWeight.max}{' '}
                <span className="text-lg font-normal text-muted-foreground">кг</span>
              </p>
            </div>

            {result.weightDiff !== 0 && (
              <div
                className={`rounded-lg p-4 text-center text-sm font-medium ${
                  result.weightDiff > 0
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-amber-50 text-amber-700'
                }`}
              >
                {result.weightDiff > 0
                  ? `Для достижения нормы рекомендуется набрать ${result.weightDiff} кг`
                  : `Для достижения нормы рекомендуется сбросить ${Math.abs(result.weightDiff)} кг`}
              </div>
            )}

            {result.weightDiff === 0 && (
              <div className="rounded-lg bg-green-50 p-4 text-center text-sm font-medium text-green-700">
                Ваш вес в пределах нормы
              </div>
            )}
          </CardContent>
        </Card>

        {/* Советы и ограничения */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Dumbbell className="h-4 w-4" />
              <AlertTitle>ИМТ и мышечная масса</AlertTitle>
              <AlertDescription>
                ИМТ не различает жировую и мышечную массу. У спортсменов и людей
                с развитой мускулатурой ИМТ может быть завышен, хотя процент жира
                в норме.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
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
                <AlertTriangle className="h-4 w-4" />
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
