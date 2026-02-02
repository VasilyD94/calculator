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
import { MacroBreakdown } from '@/components/results/MacroBreakdown'
import {
  calculateMacrosFull,
  DIET_PROFILES,
  type DietType,
} from '@/lib/calculations/macros'
import {
  Ruler,
  Weight,
  Calendar,
  Target,
  Utensils,
  TrendingDown,
  Equal,
  TrendingUp,
  Scale,
  Beef,
  LeafyGreen,
  Flame,
  Dumbbell,
  SlidersHorizontal,
  ChartPie,
  Lightbulb,
  Info,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

type Goal = 'lose' | 'maintain' | 'gain'

const GOALS: { id: Goal; label: string; icon: LucideIcon; color: string }[] = [
  { id: 'lose', label: 'Похудение', icon: TrendingDown, color: 'text-red-400' },
  { id: 'maintain', label: 'Поддержание', icon: Equal, color: 'text-green-400' },
  { id: 'gain', label: 'Набор массы', icon: TrendingUp, color: 'text-blue-400' },
]

const DIET_META: Record<string, { icon: LucideIcon; color: string }> = {
  balanced: { icon: Scale, color: 'text-green-400' },
  highProtein: { icon: Beef, color: 'text-rose-400' },
  lowCarb: { icon: LeafyGreen, color: 'text-emerald-400' },
  keto: { icon: Flame, color: 'text-orange-400' },
  athlete: { icon: Dumbbell, color: 'text-blue-400' },
}

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

  const currentDiet = DIET_PROFILES.find((d) => d.id === dietType) ?? DIET_PROFILES[0]

  const goalLabel =
    goal === 'lose' ? 'Для похудения' : goal === 'gain' ? 'Для набора массы' : 'Ваша норма'

  if (!loaded) {
    return (
      <div className="space-y-6">
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
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
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-5 w-5" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />

          {/* Цель */}
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Target className="h-5 w-5" />
              Цель
            </span>
            <div className="flex gap-1 p-1 bg-muted rounded-xl">
              {GOALS.map((g) => {
                const Icon = g.icon
                return (
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
                    <Icon className={cn('h-4 w-4 hidden sm:block', goal === g.id ? g.color : '')} />
                    {g.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Тип питания */}
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Utensils className="h-5 w-5" />
              Тип питания
            </span>
            <div className="grid gap-2 sm:grid-cols-2">
              {DIET_PROFILES.map((diet) => {
                const meta = DIET_META[diet.id] ?? { icon: Utensils, color: 'text-muted-foreground' }
                const Icon = meta.icon
                return (
                  <button
                    key={diet.id}
                    type="button"
                    onClick={() => setDietType(diet.id)}
                    className={cn(
                      'flex items-center gap-2.5 p-3 rounded-lg border transition-all duration-200 text-left',
                      diet.id === dietType
                        ? 'bg-primary/5 border-primary shadow-sm'
                        : 'bg-muted/50 border-transparent hover:border-border'
                    )}
                  >
                    <Icon className={cn('h-5 w-5 shrink-0', meta.color)} />
                    <div>
                      <span className={cn(
                        'text-sm font-medium block',
                        diet.id === dietType ? 'text-primary' : 'text-foreground'
                      )}>
                        {diet.label}
                      </span>
                      <p className="text-xs text-muted-foreground">{diet.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-4">
        {/* Калорийность */}
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">{goalLabel}</p>
          <p className="text-4xl font-bold text-primary">
            {result.calories.toLocaleString('ru-RU')}
            <span className="text-lg font-normal text-muted-foreground ml-1">ккал/день</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {currentDiet.label} диета
          </p>
        </div>

        {/* БЖУ */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <ChartPie className="h-5 w-5" />
              Ваше БЖУ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              При {result.calories.toLocaleString('ru-RU')} ккал/день (
              {currentDiet.label.toLowerCase()})
            </p>
            <MacroBreakdown
              protein={result.protein}
              fat={result.fat}
              carbs={result.carbs}
              proteinPerKg={result.proteinPerKg}
              fatPerKg={result.fatPerKg}
              carbsPerKg={result.carbsPerKg}
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
              <AlertTitle>Индивидуальные потребности</AlertTitle>
              <AlertDescription>
                Оптимальное соотношение БЖУ зависит от типа тренировок, состояния
                здоровья и целей. Расчёт даёт отправную точку — корректируйте
                рацион по самочувствию и результатам.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <AlertTitle>Ограничения диет</AlertTitle>
              <AlertDescription>
                Кето-диета и низкоуглеводное питание подходят не всем. При диабете,
                заболеваниях почек или печени проконсультируйтесь с врачом перед
                изменением рациона.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
