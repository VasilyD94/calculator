'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import { Flame, TrendingDown, TrendingUp, Minus, Ruler, Weight, Calendar } from 'lucide-react'

type Goal = 'lose' | 'maintain' | 'gain'

export function CalorieCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState(30)
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(175)
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [goal, setGoal] = useState<Goal>('maintain')

  const activityFactor =
    ACTIVITY_LEVELS.find((l) => l.id === activity)?.factor ?? 1.55

  // Реалтайм расчёт
  const result = useMemo(
    () =>
      mifflinStJeor({ gender, age, weight, height, activityFactor }),
    [gender, age, weight, height, activityFactor]
  )

  const allFormulas = useMemo(
    () =>
      calculateAllFormulas({ gender, age, weight, height, activityFactor }),
    [gender, age, weight, height, activityFactor]
  )

  const targetCalories =
    goal === 'lose'
      ? result.deficit
      : goal === 'gain'
        ? result.surplus
        : result.tdee

  const macros = useMemo(
    () => calculateMacros(targetCalories, goal),
    [targetCalories, goal]
  )

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
            onChange={setWeight}
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
        {/* Основные числа */}
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
              onValueChange={(v) => setGoal(v as Goal)}
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

              <TabsContent value="lose" className="mt-4">
                <ResultCard
                  title="Для похудения"
                  value={result.deficit}
                  unit="ккал/день"
                  description="Безопасный дефицит для потери 0.5 кг в неделю"
                  status="warning"
                />
              </TabsContent>
              <TabsContent value="maintain" className="mt-4">
                <ResultCard
                  title="Для поддержания веса"
                  value={result.tdee}
                  unit="ккал/день"
                  description="Ваш текущий баланс энергии"
                  status="success"
                />
              </TabsContent>
              <TabsContent value="gain" className="mt-4">
                <ResultCard
                  title="Для набора массы"
                  value={result.surplus}
                  unit="ккал/день"
                  description="Оптимальный профицит для набора ~0.5 кг в неделю"
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
