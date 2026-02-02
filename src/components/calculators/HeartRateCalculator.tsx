'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import {
  FormulaComparison,
  type FormulaResult,
} from '@/components/results/FormulaComparison'
import { calculateHeartRateZones } from '@/lib/calculations/heart-rate'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  SlidersHorizontal,
  Activity,
  Calendar,
  Heart,
  Lightbulb,
  AlertTriangle,
  Stethoscope,
  Timer,
} from 'lucide-react'

const ZONE_COLORS = [
  { bg: 'bg-blue-400', bgLight: 'bg-blue-50', text: 'text-blue-700' },
  { bg: 'bg-green-400', bgLight: 'bg-green-50', text: 'text-green-700' },
  { bg: 'bg-yellow-400', bgLight: 'bg-yellow-50', text: 'text-yellow-700' },
  { bg: 'bg-orange-400', bgLight: 'bg-orange-50', text: 'text-orange-700' },
  { bg: 'bg-red-400', bgLight: 'bg-red-50', text: 'text-red-700' },
]

export function HeartRateCalculator() {
  const [age, setAge] = useState(30)
  const [restingHR, setRestingHR] = useState(65)

  const result = useMemo(
    () => calculateHeartRateZones({ age, restingHR }),
    [age, restingHR]
  )

  const formulaResults: FormulaResult[] = result.formulas.map((f) => ({
    name: f.name,
    value: f.value,
    recommended: f.recommended,
  }))

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
          <ValueSlider
            label="Возраст"
            value={age}
            onChange={setAge}
            min={15}
            max={80}
            unit="лет"
            icon={<Calendar className="h-5 w-5" />}
          />
          <ValueSlider
            label="Пульс покоя"
            value={restingHR}
            onChange={setRestingHR}
            min={40}
            max={100}
            unit="уд/мин"
            icon={<Heart className="h-5 w-5" />}
          />
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Максимальный пульс</p>
        <p className="text-4xl font-bold text-primary">
          {result.maxHR}
          <span className="text-lg font-normal text-muted-foreground ml-1">уд/мин</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          по формуле Танака · ЧСС резерва: <strong className="text-foreground">{result.hrReserve}</strong>
        </p>
      </div>

      {/* Мини-карточки */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-red-50 px-2 py-2.5 text-center text-red-700">
          <p className="text-[10px] leading-tight">ЧСС макс</p>
          <p className="text-lg font-bold leading-tight">{result.maxHR}</p>
          <p className="text-[10px] leading-tight">уд/мин</p>
        </div>
        <div className="rounded-lg bg-orange-50 px-2 py-2.5 text-center text-orange-700">
          <p className="text-[10px] leading-tight">ЧСС резерва</p>
          <p className="text-lg font-bold leading-tight">{result.hrReserve}</p>
          <p className="text-[10px] leading-tight">уд/мин</p>
        </div>
        <div className="rounded-lg bg-blue-50 px-2 py-2.5 text-center text-blue-700">
          <p className="text-[10px] leading-tight">ЧСС покоя</p>
          <p className="text-lg font-bold leading-tight">{result.restingHR}</p>
          <p className="text-[10px] leading-tight">уд/мин</p>
        </div>
      </div>

      {/* Зоны пульса */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Зоны пульса
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 divide-y divide-border">
          {result.zones.map((zone, i) => {
            const colors = ZONE_COLORS[i]

            return (
              <motion.div
                key={zone.number}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2.5 py-2.5"
              >
                <span
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white',
                    colors.bg
                  )}
                >
                  {zone.number}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-tight">{zone.name}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{zone.benefit}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground whitespace-nowrap">
                    {zone.minHR}–{zone.maxHR}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{zone.percentRange}</p>
                </div>
              </motion.div>
            )
          })}
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
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle>Отклонения ±10–15 уд.</AlertTitle>
            <AlertDescription>
              Формулы дают приблизительную оценку. Реальный максимальный пульс
              может отличаться на 10–15 ударов. Для точного определения
              пройдите нагрузочный тест у врача.
            </AlertDescription>
          </Alert>
          <Alert>
            <Timer className="h-5 w-5 text-blue-500" />
            <AlertTitle>Измерение пульса покоя</AlertTitle>
            <AlertDescription>
              Измеряйте утром, не вставая с кровати, 3 дня подряд.
              Среднее значение — ваш пульс покоя. У тренированных людей
              он может быть 45–55 уд/мин.
            </AlertDescription>
          </Alert>
          <Alert>
            <Stethoscope className="h-5 w-5 text-red-500" />
            <AlertTitle>Когда к врачу</AlertTitle>
            <AlertDescription>
              Если пульс покоя выше 100 уд/мин, вы ощущаете перебои
              в сердцебиении или боль в груди при нагрузке —
              проконсультируйтесь с кардиологом.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Сравнение формул */}
      <FormulaComparison results={formulaResults} unit="уд/мин" />
    </div>
  )
}
