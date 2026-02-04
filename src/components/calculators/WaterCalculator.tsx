'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { ActivitySelector } from '@/components/inputs/ActivitySelector'
import { useUserParams } from '@/hooks/useUserParams'
import { calculateWater } from '@/lib/calculations/water'
import {
  Weight,
  Droplets,
  Sun,
  Baby,
  Heart,
  Milk,
  Clock,
  Lightbulb,
  AlertTriangle,
  ThermometerSun,
  CloudSun,
  Flame,
  SlidersHorizontal,
  Sunrise,
  Moon,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SCHEDULE_ICONS: Record<string, { icon: LucideIcon; color: string }> = {
  'Утро': { icon: Sunrise, color: 'text-amber-400' },
  'До обеда': { icon: Sun, color: 'text-yellow-400' },
  'После обеда': { icon: CloudSun, color: 'text-sky-400' },
  'Вечер': { icon: Moon, color: 'text-indigo-400' },
}

export function WaterCalculator() {
  const { gender, weight, activity, setParam, loaded } = useUserParams()
  const [hotClimate, setHotClimate] = useState(false)
  const [special, setSpecial] = useState<'none' | 'pregnant' | 'breastfeeding'>('none')

  const result = useMemo(
    () =>
      calculateWater({
        gender,
        weight,
        activity,
        hotClimate,
        pregnant: special === 'pregnant',
        breastfeeding: special === 'breastfeeding',
      }),
    [gender, weight, activity, hotClimate, special]
  )

  if (!loaded) {
    return (
      <div className="space-y-4">
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="size-5" />
              Ваши параметры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
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
            <SlidersHorizontal className="size-5" />
            Ваши параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <GenderToggle value={gender} onChange={(v) => setParam('gender', v)} />

          <ValueSlider
            label="Вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="size-5" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />

          {/* Климат */}
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <ThermometerSun className="size-5" />
              Климат
            </span>
            <div className="flex gap-1 p-1 bg-muted rounded-xl">
              <button
                type="button"
                onClick={() => setHotClimate(false)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-3 px-1 sm:px-3 rounded-lg transition-all duration-200 text-xs sm:text-sm',
                  !hotClimate
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <CloudSun className="size-4 text-sky-400" />
                Обычный
              </button>
              <button
                type="button"
                onClick={() => setHotClimate(true)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-3 px-1 sm:px-3 rounded-lg transition-all duration-200 text-xs sm:text-sm',
                  hotClimate
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Flame className="size-4 text-orange-400" />
                <span className="sm:hidden">Жаркий</span>
                <span className="hidden sm:inline">Жаркий (&gt;30°C)</span>
              </button>
            </div>
          </div>

          {/* Особенности — только для женщин */}
          {gender === 'female' && (
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Baby className="size-5" />
                Особенности
              </span>
              <div className="flex gap-1 p-1 bg-muted rounded-xl">
                {([
                  { id: 'none' as const, label: 'Нет', shortLabel: 'Нет', icon: null, color: '' },
                  { id: 'pregnant' as const, label: 'Беременность', shortLabel: 'Берем.', icon: Heart, color: 'text-pink-400' },
                  { id: 'breastfeeding' as const, label: 'Кормление', shortLabel: 'Корм.', icon: Milk, color: 'text-blue-400' },
                ] as const).map((opt) => {
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSpecial(opt.id)}
                      className={cn(
                        'flex-1 flex items-center justify-center gap-1.5 py-3 px-1 sm:px-3 rounded-lg transition-all duration-200 text-xs sm:text-sm',
                        special === opt.id
                          ? 'bg-background shadow-md font-medium text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {Icon && <Icon className={cn('size-4', opt.color)} />}
                      <span className="sm:hidden">{opt.shortLabel}</span>
                      <span className="hidden sm:inline">{opt.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-4">
        {/* Основной результат + разбивка */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Droplets className="size-5" />
              Ваша норма воды
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
              <p className="text-4xl font-bold whitespace-nowrap">
                {result.totalMl.toLocaleString('ru-RU')}
                <span className="text-lg font-normal text-muted-foreground ml-1">мл/день</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {result.totalLiters} л — <span className="font-medium text-foreground">{result.glasses} стаканов</span> по 250 мл
              </p>
            </div>

            <div className="border-t pt-3 space-y-3">
              <BreakdownRow
                label="Базовая потребность"
                sublabel={`${gender === 'male' ? '35' : '31'} мл × ${weight} кг`}
                value={result.breakdown.base}
                total={result.totalMl}
              />
              {result.breakdown.activity > 0 && (
                <BreakdownRow
                  label="Физическая активность"
                  sublabel="дополнительная нагрузка"
                  value={result.breakdown.activity}
                  total={result.totalMl}
                />
              )}
              {result.breakdown.climate > 0 && (
                <BreakdownRow
                  label="Жаркий климат"
                  sublabel="компенсация потоотделения"
                  value={result.breakdown.climate}
                  total={result.totalMl}
                />
              )}
              {result.breakdown.special > 0 && (
                <BreakdownRow
                  label={special === 'pregnant' ? 'Беременность' : 'Кормление грудью'}
                  sublabel="повышенная потребность"
                  value={result.breakdown.special}
                  total={result.totalMl}
                />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Расписание на день */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="size-5" />
              Расписание на день
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {result.schedule.map((item) => {
                const meta = SCHEDULE_ICONS[item.period] ?? { icon: Clock, color: 'text-primary' }
                const Icon = meta.icon
                return (
                  <div key={item.period} className="rounded-lg border p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className={cn('size-5', meta.color)} />
                      <div className="min-w-0">
                        <span className="text-sm font-medium">{item.period}</span>
                        <span className="block text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-lg font-bold">{item.amount}</span>
                      <span className="text-muted-foreground ml-1">мл</span>
                      <span className="text-xs text-muted-foreground ml-1">({item.glasses} ст.)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.tip}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Советы */}
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="size-5" />
              Важно знать
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <AlertTriangle className="size-5 text-amber-400" />
              <AlertTitle>Признаки обезвоживания</AlertTitle>
              <AlertDescription>
                Тёмная моча, сухость во рту, головная боль, усталость, головокружение. Если заметили
                эти симптомы — увеличьте потребление воды.
              </AlertDescription>
            </Alert>
            <Alert>
              <Sun className="size-5 text-yellow-400" />
              <AlertTitle>Когда нужно пить больше</AlertTitle>
              <AlertDescription>
                В жаркую погоду, при интенсивных тренировках, при болезни с температурой, после
                употребления алкоголя или кофе.
              </AlertDescription>
            </Alert>
            <Alert>
              <Droplets className="size-5 text-sky-400" />
              <AlertTitle>Что считается</AlertTitle>
              <AlertDescription>
                В норму входит не только чистая вода, но и чай, морс, суп, сочные фрукты и овощи.
                Кофе и алкоголь обладают мочегонным эффектом и не учитываются.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// --- Вспомогательные компоненты ---

function BreakdownRow({
  label,
  sublabel,
  value,
  total,
}: {
  label: string
  sublabel: string
  value: number
  total: number
}) {
  const percent = Math.round((value / total) * 100)
  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 text-sm">
        <div className="min-w-0">
          <span className="font-medium">{label}</span>
          <span className="block sm:inline sm:ml-1 text-muted-foreground text-xs">{sublabel}</span>
        </div>
        <span className="font-medium whitespace-nowrap">{value} мл</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary/70 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
