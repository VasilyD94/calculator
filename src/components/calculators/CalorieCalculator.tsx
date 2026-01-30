'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { Slider } from '@/components/ui/slider'
import {
  ActivitySelector,
  ACTIVITY_LEVELS,
  type ActivityLevel,
} from '@/components/inputs/ActivitySelector'
import { ResultCard } from '@/components/results/ResultCard'
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
  Target,
} from 'lucide-react'

type Goal = 'lose' | 'maintain' | 'gain'

export function CalorieCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState(30)
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(175)
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [targetWeight, setTargetWeight] = useState(75)

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
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + weeksNeeded * 7)
  const targetDateStr = targetDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

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

  // Зона нормы на слайдере
  const sliderRange = sliderMax - sliderMin
  const normStart = Math.max(0, ((idealMin - sliderMin) / sliderRange) * 100)
  const normEnd = Math.min(100, ((idealMax - sliderMin) / sliderRange) * 100)
  const normWidth = normEnd - normStart

  // Результат — текст и статус
  const resultTitle =
    goal === 'lose'
      ? 'Для похудения'
      : goal === 'gain'
        ? 'Для набора массы'
        : 'Для поддержания веса'

  const resultDescription =
    goal === 'maintain'
      ? 'Ваш текущий баланс энергии'
      : goal === 'lose'
        ? `−${weightDiff} кг за ~${weeksNeeded} нед. (к ${targetDateStr})`
        : `+${weightDiff} кг за ~${weeksNeeded} нед. (к ${targetDateStr})`

  const resultStatus =
    goal === 'lose' ? 'warning' : goal === 'gain' ? 'info' : 'success'

  return (
    <div className="space-y-8">
      {/* Ввод данных */}
      <Card>
        <CardHeader>
          <CardTitle>Ваши параметры</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <GenderToggle value={gender} onChange={setGender} />

          <ValueSlider
            label="Возраст"
            value={age}
            onChange={setAge}
            min={15}
            max={80}
            unit="лет"
            icon={<Calendar className="h-4 w-4" />}
          />

          <ValueSlider
            label="Рост"
            value={height}
            onChange={setHeight}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="h-4 w-4" />}
          />

          <ValueSlider
            label="Вес"
            value={weight}
            onChange={(v) => {
              const diff = v - weight
              setWeight(v)
              // Сдвигаем целевой вес вместе с текущим
              setTargetWeight((prev) => {
                const next = prev + diff
                return Math.max(sliderMin, Math.min(sliderMax, next))
              })
            }}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-4 w-4" />}
          />

          <ActivitySelector value={activity} onChange={setActivity} />
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* BMR + TDEE */}
        <div className="grid gap-4 md:grid-cols-2">
          <ResultCard
            title="Базовый метаболизм (BMR)"
            value={result.bmr}
            unit="ккал"
            description="Расход энергии в покое"
            status="info"
          />
          <ResultCard
            title="Суточная норма (TDEE)"
            value={result.tdee}
            unit="ккал"
            description="С учётом активности"
            status="success"
          />
        </div>

        {/* Желаемый вес — единый слайдер */}
        <Card>
          <CardHeader>
            <CardTitle>Ваша цель</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {/* Текущий вес слева — Желаемый вес справа */}
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs text-muted-foreground">Текущий вес</span>
                  <div>
                    <span className="text-lg font-semibold">{weight}</span>
                    <span className="text-muted-foreground ml-1 text-sm">кг</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">Желаемый вес</span>
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {targetWeight}
                    </span>
                    <span className="text-muted-foreground ml-1 text-sm">кг</span>
                  </div>
                </div>
              </div>

              {/* Слайдер с метками нормы */}
              <div className="relative">
                {/* Зона нормы — подсветка на треке */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 pointer-events-none z-0">
                  <div
                    className="absolute inset-y-0 bg-green-500/25 rounded-full"
                    style={{
                      left: `${normStart}%`,
                      width: `${normWidth}%`,
                    }}
                  />
                </div>
                <Slider
                  value={[targetWeight]}
                  onValueChange={([v]) => setTargetWeight(v)}
                  min={sliderMin}
                  max={sliderMax}
                  step={1}
                  className="py-2"
                />
                {/* Метки границ нормы */}
                {normStart > 5 && normEnd < 95 && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div
                      className="absolute w-px h-3 bg-green-500/50"
                      style={{ left: `${normStart}%` }}
                    />
                    <div
                      className="absolute w-px h-3 bg-green-500/50"
                      style={{ left: `${normEnd}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Мин/макс + подпись нормы */}
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{sliderMin} кг</span>
                <span>Норма: {idealMin}–{idealMax} кг</span>
                <span>{sliderMax} кг</span>
              </div>
            </div>

            {/* Результат */}
            <ResultCard
              title={resultTitle}
              value={targetCalories}
              unit="ккал/день"
              description={resultDescription}
              status={resultStatus as 'success' | 'warning' | 'info'}
            />

            {showDeficitWarning && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Калорийность ограничена до {minSafe} ккал — минимум для
                  безопасного похудения.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* БЖУ */}
        <Card>
          <CardHeader>
            <CardTitle>Рекомендуемое БЖУ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              При {targetCalories.toLocaleString('ru-RU')} ккал/день (
              {goal === 'lose'
                ? 'похудение'
                : goal === 'gain'
                  ? 'набор массы'
                  : 'поддержание'}
              )
            </p>
            <MacroBreakdown
              protein={macros.protein}
              fat={macros.fat}
              carbs={macros.carbs}
            />
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
