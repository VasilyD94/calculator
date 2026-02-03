'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { motion } from 'framer-motion'
import {
  Moon,
  Sun,
  Clock,
  SlidersHorizontal,
  Info,
  BedDouble,
  Sparkles,
} from 'lucide-react'
import {
  calculateSleep,
  getCurrentTime,
  getTimeAfterHours,
  getQualityDescription,
  getQualityColor,
  type SleepMode,
} from '@/lib/calculations/sleep'

export function SleepCalculator() {
  const [mode, setMode] = useState<SleepMode>('wakeUp')
  const [time, setTime] = useState(() => mode === 'wakeUp' ? '07:00' : getCurrentTime())
  const [fallAsleepMinutes, setFallAsleepMinutes] = useState(15)

  // Обновляем время при смене режима
  const handleModeChange = (newMode: SleepMode) => {
    setMode(newMode)
    if (newMode === 'wakeUp') {
      setTime('07:00')
    } else {
      setTime(getCurrentTime())
    }
  }

  const result = useMemo(
    () =>
      calculateSleep({
        mode,
        time,
        fallAsleepMinutes,
      }),
    [mode, time, fallAsleepMinutes]
  )

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Выбор режима */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <button
              type="button"
              onClick={() => handleModeChange('wakeUp')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md transition-all duration-200 text-sm ${
                mode === 'wakeUp'
                  ? 'bg-background shadow-sm font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sun className={`h-4 w-4 ${mode === 'wakeUp' ? 'text-amber-500' : ''}`} />
              Хочу проснуться в...
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('goToSleep')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md transition-all duration-200 text-sm ${
                mode === 'goToSleep'
                  ? 'bg-background shadow-sm font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Moon className={`h-4 w-4 ${mode === 'goToSleep' ? 'text-indigo-500' : ''}`} />
              Ложусь спать в...
            </button>
          </div>

          {/* Время */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {mode === 'wakeUp' ? 'Время пробуждения' : 'Время отхода ко сну'}
            </Label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full h-12 px-4 text-xl font-bold text-center border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Время засыпания */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <BedDouble className="h-4 w-4" />
                Время на засыпание
              </Label>
              <span className="text-xl font-bold">{fallAsleepMinutes} мин</span>
            </div>
            <Slider
              value={[fallAsleepMinutes]}
              onValueChange={([v]) => setFallAsleepMinutes(v)}
              min={5}
              max={60}
              step={5}
            />
          </div>
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-3">
        <p className="text-sm text-muted-foreground mb-2 text-center">
          {mode === 'wakeUp'
            ? 'Оптимальное время отхода ко сну'
            : 'Оптимальное время пробуждения'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {result.times.map((sleepTime, index) => (
            <motion.div
              key={sleepTime.time}
              className={`rounded-lg border p-2 text-center ${getQualityColor(sleepTime.quality)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="text-lg sm:text-xl font-bold">{sleepTime.time}</p>
              <p className="text-xs font-medium">{sleepTime.cycles} цикл{sleepTime.cycles === 1 ? '' : sleepTime.cycles < 5 ? 'а' : 'ов'}</p>
              <p className="text-[10px] opacity-80">{sleepTime.duration}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-center mt-2 text-muted-foreground">
          {result.recommendation}
        </p>
      </div>

      {/* Легенда качества */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="rounded-lg border bg-green-50 border-green-200 p-2 text-center">
          <Sparkles className="h-4 w-4 mx-auto mb-1 text-green-600" />
          <p className="text-xs font-medium text-green-600">Отличный</p>
          <p className="text-[10px] text-green-600/70">5-6 циклов</p>
        </div>
        <div className="rounded-lg border bg-blue-50 border-blue-200 p-2 text-center">
          <Sparkles className="h-4 w-4 mx-auto mb-1 text-blue-600" />
          <p className="text-xs font-medium text-blue-600">Хороший</p>
          <p className="text-[10px] text-blue-600/70">4 цикла</p>
        </div>
        <div className="rounded-lg border bg-yellow-50 border-yellow-200 p-2 text-center">
          <Sparkles className="h-4 w-4 mx-auto mb-1 text-yellow-600" />
          <p className="text-xs font-medium text-yellow-600">Минимум</p>
          <p className="text-[10px] text-yellow-600/70">3 цикла</p>
        </div>
        <div className="rounded-lg border bg-red-50 border-red-200 p-2 text-center">
          <Sparkles className="h-4 w-4 mx-auto mb-1 text-red-600" />
          <p className="text-xs font-medium text-red-600">Мало</p>
          <p className="text-[10px] text-red-600/70">&lt;3 цикла</p>
        </div>
      </div>

      {/* Информация о циклах */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="h-5 w-5" />
            О циклах сна
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <Moon className="h-4 w-4 mt-0.5 text-indigo-400 shrink-0" />
            <p>
              Один цикл сна длится примерно 90 минут и включает все фазы: лёгкий сон,
              глубокий сон и фазу быстрого движения глаз (REM).
            </p>
          </div>
          <div className="flex gap-2">
            <Sun className="h-4 w-4 mt-0.5 text-amber-400 shrink-0" />
            <p>
              Просыпаться лучше в конце цикла, а не в середине. Тогда вы будете чувствовать
              себя отдохнувшим, даже если спали меньше обычного.
            </p>
          </div>
          <div className="flex gap-2">
            <Clock className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
            <p>
              Взрослому человеку рекомендуется спать 5-6 полных циклов (7.5-9 часов).
              Минимум для восстановления — 4 цикла (6 часов).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
