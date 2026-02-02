'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { Slider } from '@/components/ui/slider'
import {
  ActivitySelector,
  ACTIVITY_LEVELS,
} from '@/components/inputs/ActivitySelector'
import { useUserParams } from '@/hooks/useUserParams'
import { MacroBreakdown } from '@/components/results/MacroBreakdown'
import { FormulaComparison } from '@/components/results/FormulaComparison'
import {
  mifflinStJeor,
  calculateAllFormulas,
  calculateMacros,
} from '@/lib/calculations/calories'
import {
  Ruler,
  Weight,
  Calendar,
  AlertTriangle,
  SlidersHorizontal,
  ChartPie,
  Lightbulb,
  Info,
} from 'lucide-react'
import { AlertTitle } from '@/components/ui/alert'

type Goal = 'lose' | 'maintain' | 'gain'

export function CalorieCalculator() {
  const { gender, age, weight, height, activity, setParam, loaded } = useUserParams()
  const [targetWeight, setTargetWeight] = useState(weight)
  const initialSynced = useRef(false)

  // Синхронизируем targetWeight при первой загрузке из localStorage
  useEffect(() => {
    if (loaded && !initialSynced.current) {
      setTargetWeight(weight)
      initialSynced.current = true
    }
  }, [loaded, weight])

  const activityFactor =
    ACTIVITY_LEVELS.find((l) => l.id === activity)?.factor ?? 1.55

  const result = useMemo(
    () => mifflinStJeor({ gender, age, weight, height, activityFactor }),
    [gender, age, weight, height, activityFactor]
  )

  const allFormulas = useMemo(
    () => calculateAllFormulas({ gender, age, weight, height, activityFactor }),
    [gender, age, weight, height, activityFactor]
  )

  // Автоопределение цели
  const goal: Goal =
    targetWeight < weight ? 'lose' : targetWeight > weight ? 'gain' : 'maintain'

  // Расчёт дефицита/профицита на основе целевого веса
  const weightDiff = Math.abs(weight - targetWeight)
  const caloriesPerKg = 7700 // ккал в 1 кг
  // Безопасный темп: 0.5 кг/нед для похудения, 0.4 кг/нед для набора
  const safeWeeklyRate = goal === 'lose' ? 0.5 : 0.4
  const dailyDelta = Math.round((safeWeeklyRate * caloriesPerKg) / 7)

  const minSafe = gender === 'female' ? 1200 : 1500

  const deficitCalories = Math.max(minSafe, result.tdee - dailyDelta)
  const surplusCalories = result.tdee + dailyDelta

  const targetCalories =
    goal === 'lose'
      ? deficitCalories
      : goal === 'gain'
        ? surplusCalories
        : result.tdee

  // Прогноз срока
  const weeksNeeded =
    weightDiff > 0 ? Math.ceil(weightDiff / safeWeeklyRate) : 0

  const macros = useMemo(
    () => calculateMacros(targetCalories, goal),
    [targetCalories, goal]
  )

  const showDeficitWarning =
    goal === 'lose' && result.tdee - dailyDelta < minSafe

  // Идеальный вес (ИМТ 18.5–24.9)
  const heightM = height / 100
  const idealMin = Math.round(18.5 * heightM * heightM)
  const idealMax = Math.round(24.9 * heightM * heightM)

  // Диапазон слайдера желаемого веса
  const sliderMin = Math.max(30, weight - 40)
  const sliderMax = Math.min(200, weight + 30)

  // Результат — текст и статус
  const resultTitle =
    goal === 'lose'
      ? 'Похудение'
      : goal === 'gain'
        ? 'Набор веса'
        : 'Поддержание'

  if (!loaded) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5" />
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
            label="Возраст"
            value={age}
            onChange={(v) => setParam('age', v)}
            min={15}
            max={80}
            unit="лет"
            icon={<Calendar className="h-5 w-5" />}
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
            onChange={(v) => {
              const diff = v - weight
              setParam('weight', v)
              setTargetWeight((prev) => {
                const next = prev + diff
                return Math.max(sliderMin, Math.min(sliderMax, next))
              })
            }}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-5 w-5" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />

            {/* Желаемый вес */}
            <div className="space-y-1.5 border-t pt-3">
              <div className="flex justify-between items-center text-center text-sm">
                <div>
                  <p className="text-muted-foreground">Текущий вес</p>
                  <p className="font-semibold">
                    {weight}
                    <span className="font-normal text-muted-foreground ml-0.5">кг</span>
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Желаемый вес</p>
                  <p className="font-semibold text-primary">
                    {targetWeight}
                    <span className="font-normal text-muted-foreground ml-0.5">кг</span>
                  </p>
                </div>
              </div>

              <Slider
                value={[targetWeight]}
                onValueChange={([v]) => setTargetWeight(v)}
                min={sliderMin}
                max={sliderMax}
                step={1}
                className="py-2"
              />

              <p className={`text-center text-sm ${goal === 'maintain' ? 'invisible' : ''}`}>
                <span className="text-primary font-medium">{resultTitle}</span>
                <span className="text-muted-foreground"> · <span className="font-semibold text-foreground">{goal === 'lose' ? '−' : '+'}{weightDiff}</span> кг за <span className="font-semibold text-foreground">~{weeksNeeded}</span> нед.</span>
              </p>

              <p className="text-center text-xs text-muted-foreground">
                Идеальный вес для вашего роста: <span className="font-semibold text-foreground">{idealMin}–{idealMax}</span> кг
              </p>
            </div>

            {showDeficitWarning && (
              <Alert variant="destructive">
                <AlertTriangle className="h-5 w-5" />
                <AlertDescription>
                  Калорийность ограничена до {minSafe} ккал — минимум для
                  безопасного похудения.
                </AlertDescription>
              </Alert>
            )}
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">
          {goal === 'lose' ? 'Для похудения' : goal === 'gain' ? 'Для набора массы' : 'Ваша норма'}
        </p>
        <p className="text-4xl font-bold text-primary">
          {targetCalories.toLocaleString('ru-RU')}
          <span className="text-lg font-normal text-muted-foreground ml-1">ккал/день</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Базовый метаболизм: {result.bmr.toLocaleString('ru-RU')} ккал · TDEE: {result.tdee.toLocaleString('ru-RU')} ккал
        </p>
      </div>

      <div className="space-y-4">

        {/* БЖУ */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <ChartPie className="h-5 w-5" />
              Рекомендуемое БЖУ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              При <span className="font-semibold text-foreground">{targetCalories.toLocaleString('ru-RU')}</span> ккал/день{goal !== 'maintain' && ` (${goal === 'lose' ? 'похудение' : 'набор веса'})`}
            </p>
            <MacroBreakdown
              protein={macros.protein}
              fat={macros.fat}
              carbs={macros.carbs}
            />
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
              <Info className="h-5 w-5 text-sky-400" />
              <AlertTitle>Формулы дают оценку</AlertTitle>
              <AlertDescription>
                Все формулы рассчитывают приблизительную норму. Реальная потребность
                зависит от состава тела, генетики и образа жизни. Используйте
                результат как отправную точку.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <AlertTitle>Минимальная калорийность</AlertTitle>
              <AlertDescription>
                Не опускайтесь ниже {gender === 'male' ? '1 500' : '1 200'} ккал/день
                без наблюдения врача. Слишком низкая калорийность замедляет метаболизм
                и приводит к потере мышечной массы.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Сравнение формул */}
        <FormulaComparison
          results={allFormulas.map((f) => {
            const base =
              goal === 'lose'
                ? Math.max(minSafe, f.tdee - dailyDelta)
                : goal === 'gain'
                  ? f.tdee + dailyDelta
                  : f.tdee
            return {
              name: f.name,
              value: base,
              recommended: f.recommended,
            }
          })}
          unit="ккал"
        />
      </div>
    </div>
  )
}
