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
  CircleAlert,
  CircleCheck,
  Clock,
  Percent,
  SlidersHorizontal,
  Lightbulb,
  Info,
} from 'lucide-react'
import { AlertTitle } from '@/components/ui/alert'
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
    month: 'short',
    year: 'numeric',
  })

  const sliderMin = Math.max(30, weight - 40)
  const sliderMax = weight - 1

  // Скелетон
  if (!loaded) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="size-5" />
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
        <div className="h-32 rounded-xl border bg-muted/50 animate-pulse" />
      </div>
    )
  }

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="size-5" />
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
            icon={<Calendar className="size-5" />}
          />

          <ValueSlider
            label="Рост"
            value={height}
            onChange={(v) => setParam('height', v)}
            min={140}
            max={220}
            unit="см"
            icon={<Ruler className="size-5" />}
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
            icon={<Weight className="size-5" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />

          {/* Целевой вес */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Target className="size-5" />
                Целевой вес
              </span>
              <div className="text-right text-sm">
                <span className="font-semibold">{targetWeight}</span>
                <span className="font-normal text-muted-foreground ml-0.5">кг</span>
              </div>
            </div>
            <Slider
              value={[targetWeight]}
              onValueChange={([v]) => setTargetWeight(v)}
              min={sliderMin}
              max={sliderMax}
              step={0.5}
              className="py-1.5"
            />
            <p className="text-xs text-muted-foreground">
              Сбросить: <span className="font-medium text-foreground tabular-nums">{weightToLose.toFixed(1)}</span> кг (текущий {weight} кг)
            </p>
          </div>

          {/* Дефицит калорий */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <TrendingDown className="size-5" />
                Дефицит калорий
              </span>
              <div className="text-right text-sm">
                <span className="font-semibold">{dailyDeficit}</span>
                <span className="font-normal text-muted-foreground ml-0.5">ккал/день</span>
              </div>
            </div>
            <Slider
              value={[dailyDeficit]}
              onValueChange={([v]) => setDailyDeficit(v)}
              min={200}
              max={1000}
              step={50}
              className="py-1.5"
            />
          </div>
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Главный результат */}
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Калорий в день</p>
          <p className="text-4xl font-bold text-primary tabular-nums">
            {result.dailyCalories.toLocaleString('ru-RU')}
            <span className="text-lg font-normal text-muted-foreground ml-1">ккал</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            TDEE: {result.tdee.toLocaleString('ru-RU')} ккал · Дефицит: {result.dailyDeficit} ккал ({result.deficitPercent}%)
          </p>
        </div>

        {/* Метрики */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-orange-50 p-3 text-center">
            <p className="text-xs text-orange-700 mb-1">Дефицит</p>
            <p className="text-xl font-bold text-orange-700">
              {result.dailyDeficit}
              <span className="text-xs font-normal text-orange-600 ml-1">ккал</span>
            </p>
            <p className="text-[10px] text-orange-600 mt-0.5">{result.deficitPercent}% от нормы</p>
          </div>
          <div className="rounded-lg bg-green-50 p-3 text-center">
            <p className="text-xs text-green-700 mb-1">В неделю</p>
            <p className="text-xl font-bold text-green-700">
              {result.weeklyLoss}
              <span className="text-xs font-normal text-green-600 ml-1">кг</span>
            </p>
            <p className="text-[10px] text-green-600 mt-0.5">
              {result.weeklyLoss > 1 ? 'Быстрый темп' : 'Безопасный темп'}
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 text-center">
            <p className="text-xs text-blue-700 mb-1">Срок</p>
            <p className="text-xl font-bold text-blue-700">
              {result.weeksNeeded}
              <span className="text-xs font-normal text-blue-600 ml-1">нед.</span>
            </p>
            <p className="text-[10px] text-blue-600 mt-0.5">
              {weightToLose > 0 ? `к ${targetDateStr}` : '—'}
            </p>
          </div>
        </div>

        {/* Предупреждения */}
        {risk.warnings.length > 0 && (
          <div className="space-y-2">
            {risk.warnings.map((w, i) => (
              <Alert key={i} variant="destructive">
                <AlertTriangle className="size-4" />
                <AlertDescription>{w}</AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* График прогресса */}
        {timeline.length > 1 && (
          <Card className="gap-3 py-4">
            <CardHeader className="pb-0">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingDown className="size-5" />
                Прогноз снижения веса
              </CardTitle>
            </CardHeader>
            <CardContent>
              <WeightChart data={timeline} targetWeight={targetWeight} />
            </CardContent>
          </Card>
        )}

        {/* Сравнение сценариев */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="size-5" />
              Сравнение сценариев
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {scenarios.map((s) => {
                const active = s.deficit === result.dailyDeficit
                const ScenarioIcon =
                  s.risk === 'low' ? CircleCheck : s.risk === 'moderate' ? AlertTriangle : CircleAlert
                const iconColor =
                  s.risk === 'low'
                    ? 'text-emerald-600'
                    : s.risk === 'moderate'
                      ? 'text-amber-500'
                      : 'text-red-500'

                return (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setDailyDeficit(s.deficit)}
                    className={cn(
                      'rounded-lg border-2 px-3 py-2.5 text-center transition-colors duration-200',
                      active
                        ? 'bg-primary/5 border-primary/30'
                        : 'border-transparent hover:border-border'
                    )}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <ScenarioIcon className={cn('size-4 shrink-0', iconColor)} />
                      <span className={cn(
                        'text-sm',
                        active ? 'font-medium text-foreground' : 'text-muted-foreground'
                      )}>
                        {s.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground tabular-nums">
                      <strong className="text-foreground">{s.dailyCalories}</strong> ккал · <strong className="text-foreground">{s.weeklyLoss}</strong> кг/н · <strong className="text-foreground">{s.weeksNeeded}</strong> нед
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">−{s.deficit} ккал/день</p>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Оценка безопасности */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <ShieldCheck className="size-5" />
              Оценка безопасности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                <p className="text-xs text-muted-foreground">Устойчивость</p>
                <div className="flex items-center gap-2">
                  {risk.sustainability === 'easy' ? (
                    <CircleCheck className="size-4 shrink-0 text-emerald-600" />
                  ) : risk.sustainability === 'moderate' ? (
                    <AlertTriangle className="size-4 shrink-0 text-amber-500" />
                  ) : (
                    <CircleAlert className="size-4 shrink-0 text-red-500" />
                  )}
                  <span className="text-sm font-medium">
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
              <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                <p className="text-xs text-muted-foreground">Риск потери мышц</p>
                <div className="flex items-center gap-2">
                  {risk.muscleLossRisk === 'low' ? (
                    <CircleCheck className="size-4 shrink-0 text-emerald-600" />
                  ) : risk.muscleLossRisk === 'moderate' ? (
                    <AlertTriangle className="size-4 shrink-0 text-amber-500" />
                  ) : (
                    <CircleAlert className="size-4 shrink-0 text-red-500" />
                  )}
                  <span className="text-sm font-medium">
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
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Percent className="size-5" />
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

        {/* Важно знать */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="size-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Info className="size-5 text-sky-400" />
              <AlertTitle>Плато при похудении</AlertTitle>
              <AlertDescription>
                Через 2–3 недели дефицита вес может перестать снижаться — это
                нормальное плато. Метаболизм адаптируется. Не снижайте калории ещё
                больше — лучше добавьте физическую активность.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="size-5 text-amber-400" />
              <AlertTitle>Безопасный темп</AlertTitle>
              <AlertDescription>
                Потеря более 1 кг в неделю повышает риск потери мышечной массы,
                замедления метаболизма и дефицита питательных веществ. При большом
                дефиците проконсультируйтесь с врачом.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
