'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import { ActivitySelector } from '@/components/inputs/ActivitySelector'
import { useUserParams } from '@/hooks/useUserParams'
import { ResultCard } from '@/components/results/ResultCard'
import { calculateWater } from '@/lib/calculations/water'
import {
  Weight,
  Droplets,
  Sun,
  Baby,
  Clock,
  Lightbulb,
  GlassWater,
  AlertTriangle,
  ThermometerSun,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function WaterCalculator() {
  const { gender, weight, activity, setParam, loaded } = useUserParams()
  const [hotClimate, setHotClimate] = useState(false)
  const [pregnant, setPregnant] = useState(false)
  const [breastfeeding, setBreastfeeding] = useState(false)

  const result = useMemo(
    () =>
      calculateWater({
        gender,
        weight,
        activity,
        hotClimate,
        pregnant,
        breastfeeding,
      }),
    [gender, weight, activity, hotClimate, pregnant, breastfeeding]
  )

  if (!loaded) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ваши параметры</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
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
            label="Вес"
            value={weight}
            onChange={(v) => setParam('weight', v)}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-4 w-4" />}
          />

          <ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />

          {/* Климат */}
          <div className="space-y-3">
            <span className="text-sm font-medium flex items-center gap-2">
              <ThermometerSun className="h-4 w-4" />
              Климат
            </span>
            <div className="flex gap-1 p-1 bg-muted rounded-xl">
              <button
                type="button"
                onClick={() => setHotClimate(false)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg transition-all duration-200 text-sm',
                  !hotClimate
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span>🌤️</span> Обычный
              </button>
              <button
                type="button"
                onClick={() => setHotClimate(true)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg transition-all duration-200 text-sm',
                  hotClimate
                    ? 'bg-background shadow-md font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span>🔥</span> Жаркий (&gt;30°C)
              </button>
            </div>
          </div>

          {/* Особенности — только для женщин */}
          {gender === 'female' && (
            <div className="space-y-3">
              <span className="text-sm font-medium flex items-center gap-2">
                <Baby className="h-4 w-4" />
                Особенности
              </span>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors hover:bg-muted/50">
                  <input
                    type="checkbox"
                    checked={pregnant}
                    onChange={(e) => {
                      setPregnant(e.target.checked)
                      if (e.target.checked) setBreastfeeding(false)
                    }}
                    className="h-4 w-4 rounded border-input accent-primary"
                  />
                  <div>
                    <div className="text-sm font-medium">Беременность</div>
                    <div className="text-xs text-muted-foreground">+300 мл к норме</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors hover:bg-muted/50">
                  <input
                    type="checkbox"
                    checked={breastfeeding}
                    onChange={(e) => {
                      setBreastfeeding(e.target.checked)
                      if (e.target.checked) setPregnant(false)
                    }}
                    className="h-4 w-4 rounded border-input accent-primary"
                  />
                  <div>
                    <div className="text-sm font-medium">Кормление грудью</div>
                    <div className="text-xs text-muted-foreground">+700 мл к норме</div>
                  </div>
                </label>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Результаты */}
      <div className="space-y-6">
        {/* Основной результат */}
        <ResultCard
          title="Ваша норма воды"
          value={result.totalMl}
          unit="мл/день"
          description={`${result.totalLiters} л — ${result.glasses} стаканов по 250 мл`}
          status="info"
        />

        {/* Визуализация стаканами */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GlassWater className="h-5 w-5" />
              Ваша норма в стаканах
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from({ length: result.glasses }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative h-10 w-7 rounded-b-md border-2 border-primary/60 bg-primary/10 overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 bg-primary/30 h-full" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              {result.glasses} стаканов по 250 мл = {result.totalLiters} л
            </p>
          </CardContent>
        </Card>

        {/* Разбивка по факторам */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5" />
              Из чего складывается норма
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
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
                  label={pregnant ? 'Беременность' : 'Кормление грудью'}
                  sublabel="повышенная потребность"
                  value={result.breakdown.special}
                  total={result.totalMl}
                />
              )}
              {/* Итого */}
              <div className="flex items-center justify-between pt-3 border-t">
                <span className="font-medium">Итого</span>
                <span className="text-lg font-bold text-primary">{result.totalMl} мл</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Расписание на день */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Как распределить воду в течение дня
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.schedule.map((item, i) => (
                <div key={item.period} className="flex gap-4">
                  {/* Таймлайн */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm">
                      {item.emoji}
                    </div>
                    {i < result.schedule.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-1" />
                    )}
                  </div>
                  {/* Контент */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-sm">{item.period}</span>
                        <span className="text-xs text-muted-foreground ml-2">{item.time}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-sm">{item.amount} мл</span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({item.glasses} ст.)
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Советы */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Полезные советы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Признаки обезвоживания</AlertTitle>
              <AlertDescription>
                Тёмная моча, сухость во рту, головная боль, усталость, головокружение. Если заметили
                эти симптомы — увеличьте потребление воды.
              </AlertDescription>
            </Alert>
            <Alert>
              <Sun className="h-4 w-4" />
              <AlertTitle>Когда нужно пить больше</AlertTitle>
              <AlertDescription>
                В жаркую погоду, при интенсивных тренировках, при болезни с температурой, после
                употребления алкоголя или кофе.
              </AlertDescription>
            </Alert>
            <Alert>
              <Droplets className="h-4 w-4" />
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
      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="font-medium">{label}</span>
          <span className="text-muted-foreground ml-2 text-xs">{sublabel}</span>
        </div>
        <span className="font-medium">{value} мл</span>
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
