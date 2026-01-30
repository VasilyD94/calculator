'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { Slider } from '@/components/ui/slider'
import { ActivitySelector, ACTIVITY_LEVELS } from '@/components/inputs/ActivitySelector'
import { useUserParams } from '@/hooks/useUserParams'
import { ResultCard } from '@/components/results/ResultCard'
import { MacroBreakdown } from '@/components/results/MacroBreakdown'
import {
  calculateDeficit,
  calculateTimeline,
  calculateScenarios,
  assessRisk,
} from '@/lib/calculations/deficit'
import {
  Ruler,
  Weight,
  Calendar,
  Target,
  TrendingDown,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Percent,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const WeightChart = dynamic(() => import('./WeightChart').then((m) => m.WeightChart), {
  ssr: false,
  loading: () => <div className="h-64 rounded-lg bg-muted animate-pulse" />,
})

export function DeficitCalculator() {
  const { gender, age, weight, height, activity, setParam, loaded } = useUserParams()
  const [targetWeight, setTargetWeight] = useState(weight - 5)
  const [dailyDeficit, setDailyDeficit] = useState(500)

  const activityFactor = ACTIVITY_LEVELS.find((l) => l.id === activity)?.factor ?? 1.55

  // Синхронизируем targetWeight при загрузке из localStorage
  const [synced, setSynced] = useState(false)
  if (loaded && !synced) {
    setTargetWeight(Math.max(30, weight - 5))
    setSynced(true)
  }

  const weightToLose = Math.max(0, weight - targetWeight)

  const result = useMemo(
    () =>
      calculateDeficit({
        gender,
        age,
        weight,
        height,
        activityFactor,
        targetWeight,
        dailyDeficit,
      }),
    [gender, age, weight, height, activityFactor, targetWeight, dailyDeficit]
  )

  const timeline = useMemo(
    () => calculateTimeline(weight, targetWeight, result.weeklyLoss),
    [weight, targetWeight, result.weeklyLoss]
  )

  const scenarios = useMemo(
    () => calculateScenarios(result.tdee, weightToLose, gender),
    [result.tdee, weightToLose, gender]
  )

  const risk = useMemo(
    () => assessRisk(result.dailyDeficit, result.tdee, result.dailyCalories, gender),
    [result.dailyDeficit, result.tdee, result.dailyCalories, gender]
  )

  const targetDateStr = result.targetDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Слайдер дефицита — цветные зоны
  const sliderMin = Math.max(30, weight - 40)
  const sliderMax = weight - 1

  // Скелетон
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
            label="Текущий вес"
            value={weight}
            onChange={(v) => {
              setParam('weight', v)
              setTargetWeight((prev) => Math.min(prev, v - 1))
            }}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-4 w-4" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />
        </CardContent>
      </Card>

      {/* Цель и дефицит */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Параметры похудения
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Целевой вес */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs text-muted-foreground">Текущий</span>
                <div>
                  <span className="text-xl font-bold">{weight}</span>
                  <span className="text-muted-foreground ml-1 text-sm">кг</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-muted-foreground">Сбросить</span>
                <div className="text-lg font-bold text-primary">
                  −{weightToLose.toFixed(1)} кг
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground">Цель</span>
                <div>
                  <span className="text-xl font-bold text-primary">{targetWeight}</span>
                  <span className="text-muted-foreground ml-1 text-sm">кг</span>
                </div>
              </div>
            </div>
            <Slider
              value={[targetWeight]}
              onValueChange={([v]) => setTargetWeight(v)}
              min={sliderMin}
              max={sliderMax}
              step={0.5}
            />
          </div>

          {/* Размер дефицита */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Дефицит калорий</span>
              <div>
                <span className="text-2xl font-bold text-primary">{dailyDeficit}</span>
                <span className="text-muted-foreground ml-1 text-sm">ккал/день</span>
              </div>
            </div>

            {/* Слайдер с цветными зонами */}
            <div className="relative">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full pointer-events-none z-0 overflow-hidden flex">
                <div className="h-full bg-emerald-400/40" style={{ width: '25%' }} />
                <div className="h-full bg-amber-400/40" style={{ width: '37.5%' }} />
                <div className="h-full bg-red-400/40" style={{ width: '37.5%' }} />
              </div>
              <Slider
                value={[dailyDeficit]}
                onValueChange={([v]) => setDailyDeficit(v)}
                min={200}
                max={1000}
                step={50}
                className="py-2 [&_[data-slot=slider-track]]:bg-transparent"
              />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-emerald-600">Безопасный</span>
              <span className="text-amber-600">Умеренный</span>
              <span className="text-red-600">Агрессивный</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Основные метрики */}
        <div className="grid gap-4 grid-cols-2">
          <ResultCard
            title="Калорий в день"
            value={result.dailyCalories}
            unit="ккал"
            description={`TDEE: ${result.tdee.toLocaleString('ru-RU')} ккал`}
            status="warning"
          />
          <ResultCard
            title="Дефицит"
            value={result.dailyDeficit}
            unit="ккал"
            description={`${result.deficitPercent}% от нормы`}
            status={result.deficitPercent > 25 ? 'warning' : 'info'}
          />
          <ResultCard
            title="Потеря в неделю"
            value={result.weeklyLoss}
            unit="кг"
            description={result.weeklyLoss > 1 ? 'Быстрый темп' : 'Безопасный темп'}
            status={result.weeklyLoss > 1 ? 'warning' : 'success'}
          />
          <ResultCard
            title="Срок"
            value={result.weeksNeeded}
            unit="нед."
            description={weightToLose > 0 ? `к ${targetDateStr}` : '—'}
            status="info"
          />
        </div>

        {/* Предупреждения */}
        {risk.warnings.length > 0 && (
          <div className="space-y-2">
            {risk.warnings.map((w, i) => (
              <Alert key={i} variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{w}</AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* График прогресса */}
        {timeline.length > 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                Прогноз снижения веса
              </CardTitle>
            </CardHeader>
            <CardContent>
              <WeightChart data={timeline} targetWeight={targetWeight} />
            </CardContent>
          </Card>
        )}

        {/* Сравнение сценариев */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Сравнение сценариев
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scenarios.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setDailyDeficit(s.deficit)}
                  className={cn(
                    'w-full p-4 rounded-lg border transition-all text-left',
                    s.deficit === result.dailyDeficit
                      ? 'bg-primary/5 border-primary'
                      : 'bg-muted/50 border-transparent hover:border-border'
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{s.emoji}</span>
                      <div>
                        <span className="font-medium text-sm">{s.label}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          −{s.deficit} ккал
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground pl-8 sm:pl-0">
                      <span>
                        <strong className="text-foreground">{s.dailyCalories}</strong> ккал
                      </span>
                      <span>
                        <strong className="text-foreground">{s.weeklyLoss}</strong> кг/нед
                      </span>
                      <span>
                        <strong className="text-foreground">{s.weeksNeeded}</strong> нед
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Оценка рисков */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Оценка безопасности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <div className="text-sm text-muted-foreground">Устойчивость</div>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'h-3 w-3 rounded-full',
                      risk.sustainability === 'easy'
                        ? 'bg-emerald-500'
                        : risk.sustainability === 'moderate'
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                    )}
                  />
                  <span className="font-medium">
                    {risk.sustainability === 'easy'
                      ? 'Легко придерживаться'
                      : risk.sustainability === 'moderate'
                        ? 'Умеренная сложность'
                        : 'Сложно выдержать'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {risk.sustainability === 'easy'
                    ? 'Дефицит до 15% — комфортный и устойчивый'
                    : risk.sustainability === 'moderate'
                      ? 'Дефицит 15–25% — требует дисциплины'
                      : 'Дефицит более 25% — высокий риск срывов'}
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <div className="text-sm text-muted-foreground">Риск потери мышц</div>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'h-3 w-3 rounded-full',
                      risk.muscleLossRisk === 'low'
                        ? 'bg-emerald-500'
                        : risk.muscleLossRisk === 'moderate'
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                    )}
                  />
                  <span className="font-medium">
                    {risk.muscleLossRisk === 'low'
                      ? 'Низкий'
                      : risk.muscleLossRisk === 'moderate'
                        ? 'Средний'
                        : 'Высокий'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {risk.muscleLossRisk === 'low'
                    ? 'При достаточном белке мышцы сохранятся'
                    : risk.muscleLossRisk === 'moderate'
                      ? 'Увеличьте белок до 1.6–2 г/кг для защиты мышц'
                      : 'Добавьте силовые тренировки и 2+ г белка на кг'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* БЖУ при дефиците */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-5 w-5" />
              БЖУ при дефиците
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              При {result.dailyCalories.toLocaleString('ru-RU')} ккал/день (дефицит{' '}
              {result.dailyDeficit} ккал)
            </p>
            <MacroBreakdown
              protein={result.macros.protein}
              fat={result.macros.fat}
              carbs={result.macros.carbs}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
