'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
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
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Goal = 'lose' | 'maintain' | 'gain'
type Intensity = 'light' | 'moderate' | 'aggressive'

const DEFICIT_PRESETS: Record<Intensity, { label: string; emoji: string; percent: number; description: string; weekly: string }> = {
  light:      { label: 'Лёгкий',      emoji: '🌱', percent: 10, description: 'Комфортно, без голода',          weekly: '~0.25 кг/нед' },
  moderate:   { label: 'Умеренный',    emoji: '⚡', percent: 20, description: 'Оптимальный баланс',             weekly: '~0.5 кг/нед' },
  aggressive: { label: 'Агрессивный',  emoji: '🔥', percent: 30, description: 'Быстрый результат, но сложнее', weekly: '~0.75 кг/нед' },
}

const SURPLUS_PRESETS: Record<Intensity, { label: string; emoji: string; percent: number; description: string; weekly: string }> = {
  light:      { label: 'Лёгкий',      emoji: '🌱', percent: 10, description: 'Чистый набор, минимум жира',   weekly: '~0.25 кг/нед' },
  moderate:   { label: 'Умеренный',    emoji: '⚡', percent: 15, description: 'Оптимальный баланс',            weekly: '~0.4 кг/нед' },
  aggressive: { label: 'Агрессивный',  emoji: '🔥', percent: 25, description: 'Быстрый набор, больше жира',   weekly: '~0.6 кг/нед' },
}

export function CalorieCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState(30)
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(175)
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [goal, setGoal] = useState<Goal>('maintain')
  const [loseIntensity, setLoseIntensity] = useState<Intensity>('moderate')
  const [gainIntensity, setGainIntensity] = useState<Intensity>('moderate')

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

  // Калории с учётом интенсивности
  const deficitPercent = DEFICIT_PRESETS[loseIntensity].percent
  const surplusPercent = SURPLUS_PRESETS[gainIntensity].percent
  const deficitCalories = Math.round(result.tdee * (1 - deficitPercent / 100))
  const surplusCalories = Math.round(result.tdee * (1 + surplusPercent / 100))

  const targetCalories =
    goal === 'lose'
      ? deficitCalories
      : goal === 'gain'
        ? surplusCalories
        : result.tdee

  const macros = useMemo(
    () => calculateMacros(targetCalories, goal),
    [targetCalories, goal]
  )

  // Предупреждения
  const minSafe = gender === 'female' ? 1200 : 1500
  const showDeficitWarning = goal === 'lose' && deficitCalories < minSafe

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

              {/* Похудение */}
              <TabsContent value="lose" className="mt-4 space-y-4">
                <IntensityPicker
                  presets={DEFICIT_PRESETS}
                  value={loseIntensity}
                  onChange={setLoseIntensity}
                />
                <ResultCard
                  title="Для похудения"
                  value={deficitCalories}
                  unit="ккал/день"
                  description={`Дефицит ${deficitPercent}% — ${DEFICIT_PRESETS[loseIntensity].weekly}`}
                  status={loseIntensity === 'aggressive' ? 'danger' : 'warning'}
                />
                {showDeficitWarning && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Калорийность ниже {minSafe} ккал не рекомендуется без наблюдения врача.
                      Попробуйте менее интенсивный режим.
                    </AlertDescription>
                  </Alert>
                )}
              </TabsContent>

              {/* Поддержание */}
              <TabsContent value="maintain" className="mt-4">
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
                <IntensityPicker
                  presets={SURPLUS_PRESETS}
                  value={gainIntensity}
                  onChange={setGainIntensity}
                />
                <ResultCard
                  title="Для набора массы"
                  value={surplusCalories}
                  unit="ккал/день"
                  description={`Профицит ${surplusPercent}% — ${SURPLUS_PRESETS[gainIntensity].weekly}`}
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

// --- Подкомпонент: выбор интенсивности ---

interface IntensityPickerProps {
  presets: Record<Intensity, { label: string; emoji: string; percent: number; description: string; weekly: string }>
  value: Intensity
  onChange: (v: Intensity) => void
}

function IntensityPicker({ presets, value, onChange }: IntensityPickerProps) {
  const keys: Intensity[] = ['light', 'moderate', 'aggressive']

  return (
    <div className="grid grid-cols-3 gap-2">
      {keys.map((key) => {
        const preset = presets[key]
        const active = value === key

        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={cn(
              'flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all duration-200 text-center',
              active
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
            )}
          >
            <span className="text-xl">{preset.emoji}</span>
            <span
              className={cn(
                'text-sm font-medium',
                active ? 'text-primary' : 'text-foreground'
              )}
            >
              {preset.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {preset.weekly}
            </span>
            {key === 'moderate' && (
              <Badge variant="secondary" className="text-[10px] mt-1">
                Рекомендуем
              </Badge>
            )}
          </button>
        )
      })}
    </div>
  )
}
