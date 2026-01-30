'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
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
  TrendingDown,
  TrendingUp,
  Minus,
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
  const [goal, setGoal] = useState<Goal>('maintain')
  const [targetWeight, setTargetWeight] = useState(70)

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

  // Расчёт дефицита/профицита на основе целевого веса
  const weightDiff = Math.abs(weight - targetWeight)
  const caloriesPerKg = 7700 // ккал в 1 кг
  // Безопасный темп: 0.5 кг/нед для похудения, 0.4 кг/нед для набора
  const safeWeeklyRate = goal === 'lose' ? 0.5 : 0.4
  const dailyDelta = Math.round((safeWeeklyRate * caloriesPerKg) / 7)

  const deficitCalories = Math.max(
    gender === 'female' ? 1200 : 1500,
    result.tdee - dailyDelta
  )
  const surplusCalories = result.tdee + dailyDelta

  const targetCalories =
    goal === 'lose'
      ? deficitCalories
      : goal === 'gain'
        ? surplusCalories
        : result.tdee

  // Прогноз срока
  const weeksNeeded = weightDiff > 0 ? Math.ceil(weightDiff / safeWeeklyRate) : 0
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

  const minSafe = gender === 'female' ? 1200 : 1500
  const showDeficitWarning = goal === 'lose' && (result.tdee - dailyDelta) < minSafe

  // Диапазон слайдера целевого веса
  const loseMin = Math.max(30, weight - 40)
  const loseMax = weight - 1
  const gainMin = weight + 1
  const gainMax = Math.min(200, weight + 30)

  // Идеальный вес (ИМТ 18.5–24.9)
  const heightM = height / 100
  const idealMin = Math.round(18.5 * heightM * heightM)
  const idealMax = Math.round(24.9 * heightM * heightM)

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
              setWeight(v)
              // Автоматически корректируем целевой вес при изменении текущего
              if (goal === 'lose' && targetWeight >= v) {
                setTargetWeight(Math.max(loseMin, v - 5))
              }
              if (goal === 'gain' && targetWeight <= v) {
                setTargetWeight(Math.min(gainMax, v + 5))
              }
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

        {/* Выбор цели */}
        <Card>
          <CardHeader>
            <CardTitle>Ваша цель</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              value={goal}
              onValueChange={(v) => {
                const g = v as Goal
                setGoal(g)
                if (g === 'lose') setTargetWeight(Math.max(loseMin, weight - 5))
                if (g === 'gain') setTargetWeight(Math.min(gainMax, weight + 5))
              }}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lose" className="gap-1.5">
                  <TrendingDown className="h-4 w-4" />
                  Похудение
                </TabsTrigger>
                <TabsTrigger value="maintain" className="gap-1.5">
                  <Minus className="h-4 w-4" />
                  Поддержание
                </TabsTrigger>
                <TabsTrigger value="gain" className="gap-1.5">
                  <TrendingUp className="h-4 w-4" />
                  Набор массы
                </TabsTrigger>
              </TabsList>

              {/* Похудение */}
              <TabsContent value="lose" className="mt-4 space-y-4">
                <ValueSlider
                  label="Целевой вес"
                  value={targetWeight}
                  onChange={setTargetWeight}
                  min={loseMin}
                  max={loseMax}
                  unit="кг"
                  icon={<Target className="h-4 w-4" />}
                />
                {/* Подсказка с идеальным весом */}
                <p className="text-xs text-muted-foreground text-center">
                  Идеальный вес для вашего роста: {idealMin}–{idealMax} кг (ИМТ 18.5–24.9)
                </p>

                <ResultCard
                  title="Для похудения"
                  value={deficitCalories}
                  unit="ккал/день"
                  description={`−${weightDiff} кг за ~${weeksNeeded} нед. (к ${targetDateStr})`}
                  status="warning"
                />

                {showDeficitWarning && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Калорийность ограничена до {minSafe} ккал — минимум для безопасного похудения.
                    </AlertDescription>
                  </Alert>
                )}
              </TabsContent>

              {/* Поддержание */}
              <TabsContent value="maintain" className="mt-4 space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
                  <p className="text-sm font-medium">Ваш текущий вес: {weight} кг</p>
                  <p className="text-xs text-muted-foreground">
                    Идеальный вес для вашего роста: {idealMin}–{idealMax} кг (ИМТ 18.5–24.9)
                  </p>
                </div>

                <ResultCard
                  title="Для поддержания веса"
                  value={result.tdee}
                  unit="ккал/день"
                  description="Ваш текущий баланс энергии"
                  status="success"
                />
              </TabsContent>

              {/* Набор массы */}
              <TabsContent value="gain" className="mt-4 space-y-4">
                <ValueSlider
                  label="Целевой вес"
                  value={targetWeight}
                  onChange={setTargetWeight}
                  min={gainMin}
                  max={gainMax}
                  unit="кг"
                  icon={<Target className="h-4 w-4" />}
                />
                <p className="text-xs text-muted-foreground text-center">
                  Идеальный вес для вашего роста: {idealMin}–{idealMax} кг (ИМТ 18.5–24.9)
                </p>

                <ResultCard
                  title="Для набора массы"
                  value={surplusCalories}
                  unit="ккал/день"
                  description={`+${weightDiff} кг за ~${weeksNeeded} нед. (к ${targetDateStr})`}
                  status="info"
                />
              </TabsContent>
            </Tabs>
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
          results={allFormulas.map((f) => ({
            name: f.name,
            value: f.tdee,
            recommended: f.recommended,
          }))}
          unit="ккал"
        />
      </div>
    </div>
  )
}
