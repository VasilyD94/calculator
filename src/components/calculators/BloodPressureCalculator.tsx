'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { motion } from 'framer-motion'
import {
  Heart,
  Calendar,
  SlidersHorizontal,
  Activity,
  Info,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import {
  calculateBloodPressure,
  getPressureTable,
  isCritical,
  type Gender,
} from '@/lib/calculations/blood-pressure'

const statusColors = {
  green: 'border-green-200 bg-green-50 text-green-700',
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  yellow: 'border-yellow-200 bg-yellow-50 text-yellow-700',
  orange: 'border-orange-200 bg-orange-50 text-orange-700',
  red: 'border-red-200 bg-red-50 text-red-700',
}

export function BloodPressureCalculator() {
  const [gender, setGender] = useState<Gender>('male')
  const [age, setAge] = useState(35)
  const [systolic, setSystolic] = useState(120)
  const [diastolic, setDiastolic] = useState(80)

  const result = useMemo(
    () =>
      calculateBloodPressure({
        gender,
        age,
        systolic,
        diastolic,
      }),
    [gender, age, systolic, diastolic]
  )

  const pressureTable = useMemo(() => getPressureTable(), [])
  const showCriticalWarning = isCritical(systolic, diastolic)

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
        <CardContent className="space-y-5">
          {/* Пол */}
          <GenderToggle value={gender} onChange={setGender} />

          {/* Возраст */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Возраст
              </Label>
              <span className="text-xl font-bold">{age} лет</span>
            </div>
            <Slider
              value={[age]}
              onValueChange={([v]) => setAge(v)}
              min={18}
              max={90}
              step={1}
            />
          </div>
        </CardContent>
      </Card>

      {/* Ввод давления */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Ваше давление
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Систолическое */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-red-400" />
                Систолическое (верхнее)
              </Label>
              <span className="text-xl font-bold">{systolic} мм рт.ст.</span>
            </div>
            <Slider
              value={[systolic]}
              onValueChange={([v]) => setSystolic(v)}
              min={70}
              max={220}
              step={1}
            />
          </div>

          {/* Диастолическое */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-blue-400" />
                Диастолическое (нижнее)
              </Label>
              <span className="text-xl font-bold">{diastolic} мм рт.ст.</span>
            </div>
            <Slider
              value={[diastolic]}
              onValueChange={([v]) => setDiastolic(v)}
              min={40}
              max={140}
              step={1}
            />
          </div>
        </CardContent>
      </Card>

      {/* Главный результат */}
      <motion.div
        className={`rounded-xl border-2 p-4 transition-colors ${
          result.statusColor ? statusColors[result.statusColor] : 'border-primary/20 bg-primary/5'
        }`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p className="text-sm opacity-80 text-center mb-1">Ваше давление</p>
        <p className="text-4xl font-bold text-center">
          {systolic}/{diastolic}
          <span className="text-lg font-normal opacity-70 ml-2">мм рт.ст.</span>
        </p>
        {result.categoryLabel && (
          <>
            <p className="text-center font-medium mt-2">{result.categoryLabel}</p>
            <p className="text-sm text-center opacity-80 mt-1">{result.categoryDescription}</p>
          </>
        )}
      </motion.div>

      {/* Критическое предупреждение */}
      {showCriticalWarning && (
        <Alert variant="destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription>
            <strong>Внимание!</strong> Ваши показатели давления критические.
            Немедленно обратитесь к врачу или вызовите скорую помощь.
          </AlertDescription>
        </Alert>
      )}

      {/* Норма для возраста */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border bg-muted/50 p-3 text-center">
          <TrendingUp className="h-5 w-5 mx-auto mb-1 text-red-400" />
          <p className="text-xs text-muted-foreground mb-1">Норма систолического</p>
          <p className="text-lg font-bold">
            {result.norm.systolic.min}–{result.norm.systolic.max}
          </p>
          <p className="text-xs text-muted-foreground">мм рт.ст.</p>
        </div>
        <div className="rounded-lg border bg-muted/50 p-3 text-center">
          <TrendingDown className="h-5 w-5 mx-auto mb-1 text-blue-400" />
          <p className="text-xs text-muted-foreground mb-1">Норма диастолического</p>
          <p className="text-lg font-bold">
            {result.norm.diastolic.min}–{result.norm.diastolic.max}
          </p>
          <p className="text-xs text-muted-foreground">мм рт.ст.</p>
        </div>
      </div>

      {/* Шкала категорий */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Классификация давления
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="rounded-lg border bg-blue-50 border-blue-200 p-2">
              <p className="font-medium text-blue-700">Гипотония</p>
              <p className="text-blue-600/70">&lt;90/60</p>
            </div>
            <div className="rounded-lg border bg-green-50 border-green-200 p-2">
              <p className="font-medium text-green-700">Оптимальное</p>
              <p className="text-green-600/70">&lt;120/80</p>
            </div>
            <div className="rounded-lg border bg-yellow-50 border-yellow-200 p-2">
              <p className="font-medium text-yellow-700">Высокое норм.</p>
              <p className="text-yellow-600/70">130–139/85–89</p>
            </div>
            <div className="rounded-lg border bg-red-50 border-red-200 p-2">
              <p className="font-medium text-red-700">Гипертония</p>
              <p className="text-red-600/70">&ge;140/90</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Информация */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="h-5 w-5" />
            Важно знать
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <Heart className="h-4 w-4 mt-0.5 text-red-400 shrink-0" />
            <p>
              <strong className="text-foreground">Систолическое давление</strong> (верхнее) —
              давление крови в момент сокращения сердца.
            </p>
          </div>
          <div className="flex gap-2">
            <Heart className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
            <p>
              <strong className="text-foreground">Диастолическое давление</strong> (нижнее) —
              давление крови в момент расслабления сердца.
            </p>
          </div>
          <div className="flex gap-2">
            <Activity className="h-4 w-4 mt-0.5 text-amber-400 shrink-0" />
            <p>
              Измеряйте давление в спокойном состоянии, сидя, после 5 минут отдыха.
              Для точности сделайте 2-3 измерения с интервалом в 1-2 минуты.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
