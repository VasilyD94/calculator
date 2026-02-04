'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Slider } from '@/components/ui/slider'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { motion } from 'framer-motion'
import {
  Wine,
  Clock,
  Car,
  AlertTriangle,
  Weight,
  SlidersHorizontal,
  Info,
  TrendingDown,
} from 'lucide-react'
import {
  calculateAlcohol,
  formatTime,
  getBacStatus,
  getDrinkById,
  DRINK_TYPES,
  LEGAL_LIMIT,
  type Gender,
} from '@/lib/calculations/alcohol'

export function AlcoholCalculator() {
  const [gender, setGender] = useState<Gender>('male')
  const [weight, setWeight] = useState(70)
  const [drinkId, setDrinkId] = useState('beer_light')
  const [volume, setVolume] = useState(500)

  const selectedDrink = getDrinkById(drinkId)

  // Обновляем объём при смене напитка
  const handleDrinkChange = (newDrinkId: string) => {
    setDrinkId(newDrinkId)
    const drink = getDrinkById(newDrinkId)
    setVolume(drink.defaultVolume)
  }

  const result = useMemo(
    () =>
      calculateAlcohol({
        gender,
        weight,
        drinkId,
        volume,
      }),
    [gender, weight, drinkId, volume]
  )

  const bacStatus = getBacStatus(result.bac)

  // Цвета статуса
  const statusColors: Record<string, string> = {
    green: 'bg-green-50 border-green-200 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
  }

  const statusBgColors: Record<string, string> = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  }

  return (
    <div id="calculator" className="space-y-6">
      {/* Предупреждение */}
      <Alert variant="destructive" className="border-amber-200 bg-amber-50 text-amber-900">
        <AlertTriangle className="size-4 !text-amber-600" />
        <AlertTitle className="text-amber-800">Важно</AlertTitle>
        <AlertDescription className="text-amber-700">
          Калькулятор даёт приблизительную оценку. Реальный уровень алкоголя зависит от многих
          факторов: еда, состояние здоровья, индивидуальные особенности. Садиться за руль в
          состоянии опьянения запрещено законом.
        </AlertDescription>
      </Alert>

      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="size-5" />
            Параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Пол */}
          <GenderToggle value={gender} onChange={setGender} />

          {/* Вес */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <Weight className="size-4" />
                Вес
              </Label>
              <span className="text-xl font-bold tabular-nums">{weight} кг</span>
            </div>
            <Slider
              value={[weight]}
              onValueChange={([v]) => setWeight(v)}
              min={40}
              max={150}
              step={1}
            />
          </div>

          {/* Напиток */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Wine className="size-4" />
              Напиток
            </Label>
            <Select value={drinkId} onValueChange={handleDrinkChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DRINK_TYPES.map((drink) => (
                  <SelectItem key={drink.id} value={drink.id}>
                    {drink.emoji} {drink.name} ({drink.alcoholPercent}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Объём */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Объём выпитого</Label>
              <span className="text-xl font-bold tabular-nums">{volume} мл</span>
            </div>
            <Slider
              value={[volume]}
              onValueChange={([v]) => setVolume(v)}
              min={50}
              max={2000}
              step={50}
            />
          </div>
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className={`rounded-xl border-2 p-4 transition-colors ${statusColors[bacStatus.color]}`}>
        <p className="text-sm opacity-80 text-center mb-1">Уровень алкоголя в крови</p>
        <p className="text-4xl font-bold text-center">{result.bac.toFixed(2)} ‰</p>
        <p className="text-center font-medium mt-1">{bacStatus.label}</p>
        <p className="text-sm text-center opacity-80">{bacStatus.description}</p>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border bg-muted/50 p-2 sm:p-3 text-center">
          <Wine className="size-4 sm:h-5 sm:w-5 mx-auto mb-1 text-muted-foreground" />
          <p className="text-sm sm:text-lg font-bold whitespace-nowrap">{result.pureAlcohol} г</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">чистый спирт</p>
        </div>

        <div className="rounded-lg border bg-muted/50 p-2 sm:p-3 text-center">
          <Clock className="size-4 sm:h-5 sm:w-5 mx-auto mb-1 text-muted-foreground" />
          <p className="text-sm sm:text-lg font-bold whitespace-nowrap">{formatTime(result.timeToSober)}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">до трезвости</p>
        </div>

        <div className="rounded-lg border bg-muted/50 p-2 sm:p-3 text-center">
          <Car className="size-4 sm:h-5 sm:w-5 mx-auto mb-1 text-muted-foreground" />
          <p className="text-sm sm:text-lg font-bold whitespace-nowrap">{formatTime(result.timeToLegal)}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">до {LEGAL_LIMIT}‰</p>
        </div>
      </div>

      {/* Время */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="size-5" />
            Когда можно за руль
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.bac <= LEGAL_LIMIT ? (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
              <Car className="size-6 text-green-600" />
              <div>
                <p className="font-medium text-green-700">Можно садиться за руль</p>
                <p className="text-sm text-green-600">Уровень алкоголя в пределах нормы</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
              <Car className="size-6 text-red-600" />
              <div>
                <p className="font-medium text-red-700">
                  Можно за руль с{' '}
                  {result.legalTime.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p className="text-sm text-red-600">
                  Через {formatTime(result.timeToLegal)} уровень снизится до {LEGAL_LIMIT}‰
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* График снижения */}
      {result.hourlyLevels.length > 1 && (
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingDown className="size-5" />
              Снижение уровня алкоголя
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {result.hourlyLevels.slice(0, 12).map((level, index) => (
                <motion.div
                  key={level.hour}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <span className="w-12 text-sm text-muted-foreground">{level.time}</span>
                  <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        level.bac > 1.5
                          ? 'bg-red-500'
                          : level.bac > 0.5
                            ? 'bg-orange-500'
                            : level.bac > LEGAL_LIMIT
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                      }`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min((level.bac / result.peakBac) * 100, 100)}%`,
                      }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                    />
                  </div>
                  <span className="w-16 text-sm font-medium text-right">{level.bac.toFixed(2)}‰</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Информация */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="size-5" />
            Как это работает
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <span className="text-primary">•</span>
            <p>
              Расчёт по формуле Видмарка — учитывает пол, вес и количество алкоголя.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-primary">•</span>
            <p>
              Организм выводит ~0.12‰ алкоголя в час. Это средняя скорость, у каждого
              она индивидуальна.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-primary">•</span>
            <p>
              Допустимый уровень для вождения в России — {LEGAL_LIMIT}‰. Превышение карается штрафом
              и лишением прав.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
