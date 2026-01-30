'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import {
  ActivitySelector,
  ACTIVITY_LEVELS,
} from '@/components/inputs/ActivitySelector'
import { useUserParams } from '@/hooks/useUserParams'
import { ResultCard } from '@/components/results/ResultCard'
import { MacroBreakdown } from '@/components/results/MacroBreakdown'
import {
  calculateMacrosFull,
  calculateAllDiets,
  DIET_PROFILES,
  type DietType,
} from '@/lib/calculations/macros'
import { Ruler, Weight, Calendar, Target, Utensils } from 'lucide-react'
import { cn } from '@/lib/utils'

type Goal = 'lose' | 'maintain' | 'gain'

const GOALS: { id: Goal; label: string; emoji: string }[] = [
  { id: 'lose', label: 'Похудение', emoji: '📉' },
  { id: 'maintain', label: 'Поддержание', emoji: '⚖️' },
  { id: 'gain', label: 'Набор массы', emoji: '📈' },
]

export function MacroCalculator() {
  const { gender, age, weight, height, activity, setParam, loaded } = useUserParams()
  const [goal, setGoal] = useState<Goal>('maintain')
  const [dietType, setDietType] = useState<DietType>('balanced')

  const activityFactor =
    ACTIVITY_LEVELS.find((l) => l.id === activity)?.factor ?? 1.55

  const result = useMemo(
    () =>
      calculateMacrosFull({
        gender,
        age,
        weight,
        height,
        activityFactor,
        goal,
        dietType,
      }),
    [gender, age, weight, height, activityFactor, goal, dietType]
  )

  const allDiets = useMemo(
    () =>
      calculateAllDiets({
        gender,
        age,
        weight,
        height,
        activityFactor,
        goal,
      }),
    [gender, age, weight, height, activityFactor, goal]
  )

  const currentDiet = DIET_PROFILES.find((d) => d.id === dietType) ?? DIET_PROFILES[0]

  const goalLabel =
    goal === 'lose' ? 'похудение' : goal === 'gain' ? 'набор массы' : 'поддержание'

  if (!loaded) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ваши параметры</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                <div className="h-8 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="h-24 rounded-xl border bg-muted/50 animate-pulse" />
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
            label="Возраст"
            value={age}
            onChange={(v) => setParam('age', v)}
            min={15}
            max={80}
            unit="лет"
            icon={<Calendar className="h-4 w-4" />}
          />

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

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />
        </CardContent>
      </Card>

      {/* Цель */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Ваша цель
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 p-1 bg-muted rounded-xl">
            {GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGoal(g.id)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-3 px-1 sm:px-3 rounded-lg transition-all duration-200 text-xs sm:text-sm',
                  goal === g.id
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span className="hidden sm:inline">{g.emoji}</span>
                {g.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Тип диеты */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            Тип питания
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {DIET_PROFILES.map((diet) => (
              <button
                key={diet.id}
                type="button"
                onClick={() => setDietType(diet.id)}
                className={cn(
                  'flex flex-col items-start p-3 rounded-xl border-2 transition-all duration-200 text-left',
                  dietType === diet.id
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-muted-foreground/30 hover:bg-muted/50'
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{diet.emoji}</span>
                  <span
                    className={cn(
                      'text-sm font-medium',
                      dietType === diet.id ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {diet.label}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {diet.description}
                </span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Калорийность */}
        <ResultCard
          title={`Калорийность (${goalLabel})`}
          value={result.calories}
          unit="ккал/день"
          description={`${currentDiet.label} диета`}
          status={
            goal === 'lose' ? 'warning' : goal === 'gain' ? 'info' : 'success'
          }
        />

        {/* БЖУ */}
        <Card>
          <CardHeader>
            <CardTitle>Ваше БЖУ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              При {result.calories.toLocaleString('ru-RU')} ккал/день (
              {currentDiet.label.toLowerCase()})
            </p>
            <MacroBreakdown
              protein={result.protein}
              fat={result.fat}
              carbs={result.carbs}
            />

            {/* Граммы на кг */}
            <div className="grid gap-3 grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <div className="text-lg font-bold text-foreground">
                  {result.proteinPerKg}
                </div>
                <div className="text-xs text-muted-foreground">г белка / кг</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <div className="text-lg font-bold text-foreground">
                  {result.fatPerKg}
                </div>
                <div className="text-xs text-muted-foreground">г жиров / кг</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <div className="text-lg font-bold text-foreground">
                  {result.carbsPerKg}
                </div>
                <div className="text-xs text-muted-foreground">г углев. / кг</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Сравнение диет */}
        <Card>
          <CardHeader>
            <CardTitle>Сравнение типов питания</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {allDiets.map((d) => (
                <button
                  key={d.diet.id}
                  type="button"
                  onClick={() => setDietType(d.diet.id)}
                  className={cn(
                    'w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 p-3 rounded-lg border transition-all text-left',
                    d.diet.id === dietType
                      ? 'bg-primary/5 border-primary'
                      : 'bg-muted/50 border-transparent hover:border-border'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span>{d.diet.emoji}</span>
                    <span className="font-medium text-sm">{d.diet.label}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground pl-7 sm:pl-0">
                    <span>
                      Б:{' '}
                      <strong className="text-foreground">{d.protein}г</strong>
                    </span>
                    <span>
                      Ж:{' '}
                      <strong className="text-foreground">{d.fat}г</strong>
                    </span>
                    <span>
                      У:{' '}
                      <strong className="text-foreground">{d.carbs}г</strong>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
