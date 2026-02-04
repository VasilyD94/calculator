'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { GenderToggle } from '@/components/inputs/GenderToggle'
import { motion } from 'framer-motion'
import {
  SlidersHorizontal,
  User,
  Ruler,
  Info,
  Utensils,
  Dumbbell,
  CheckCircle2,
} from 'lucide-react'
import {
  calculateBodyType,
  getWristRange,
  getWristBoundaries,
  type Gender,
} from '@/lib/calculations/body-type'

const statusColors = {
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  green: 'border-green-200 bg-green-50 text-green-700',
  orange: 'border-orange-200 bg-orange-50 text-orange-700',
}

export function BodyTypeCalculator() {
  const [gender, setGender] = useState<Gender>('male')
  const [wristCircumference, setWristCircumference] = useState(18)
  const [height, setHeight] = useState(175)
  const [showHeight, setShowHeight] = useState(false)

  const wristRange = useMemo(() => getWristRange(gender), [gender])
  const boundaries = useMemo(() => getWristBoundaries(gender), [gender])

  const result = useMemo(
    () =>
      calculateBodyType({
        gender,
        wristCircumference,
        height: showHeight ? height : undefined,
      }),
    [gender, wristCircumference, height, showHeight]
  )

  // При смене пола корректируем обхват запястья если он выходит за границы
  const handleGenderChange = (newGender: Gender) => {
    setGender(newGender)
    const newRange = getWristRange(newGender)
    if (wristCircumference < newRange.min) {
      setWristCircumference(newRange.min)
    } else if (wristCircumference > newRange.max) {
      setWristCircumference(newRange.max)
    }
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
        <CardContent className="space-y-5">
          {/* Пол */}
          <GenderToggle value={gender} onChange={handleGenderChange} />

          {/* Обхват запястья */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2">
                <User className="size-4" />
                Обхват запястья
              </Label>
              <span className="text-xl font-bold tabular-nums">{wristCircumference} см</span>
            </div>
            <Slider
              value={[wristCircumference]}
              onValueChange={([v]) => setWristCircumference(v)}
              min={wristRange.min}
              max={wristRange.max}
              step={0.5}
            />
            <p className="text-xs text-muted-foreground">
              Измерьте обхват запястья в самом узком месте (чуть ниже косточки)
            </p>
          </div>

          {/* Опциональный рост */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showHeight"
                checked={showHeight}
                onChange={(e) => setShowHeight(e.target.checked)}
                className="size-4 rounded border-gray-300"
              />
              <Label htmlFor="showHeight" className="text-sm cursor-pointer">
                Добавить рост для индекса Соловьёва
              </Label>
            </div>

            {showHeight && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <Label className="flex items-center gap-2">
                    <Ruler className="size-4" />
                    Рост
                  </Label>
                  <span className="text-xl font-bold tabular-nums">{height} см</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={([v]) => setHeight(v)}
                  min={140}
                  max={210}
                  step={1}
                />
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Главный результат */}
      <motion.div
        className={`rounded-xl border-2 p-4 transition-colors ${statusColors[result.statusColor]}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p className="text-sm opacity-80 text-center mb-1">Ваш тип телосложения</p>
        <p className="text-3xl font-bold text-center">{result.typeLabel}</p>
        <p className="text-sm text-center opacity-80 mt-2">{result.typeDescription}</p>
        {result.solovyovIndex && (
          <p className="text-xs text-center mt-2 opacity-70">
            Индекс Соловьёва: {result.solovyovIndex}
          </p>
        )}
      </motion.div>

      {/* Шкала типов */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div
          className={`rounded-lg border p-2 transition-colors ${
            result.type === 'ectomorph'
              ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-300'
              : 'bg-blue-50/50 border-blue-200'
          }`}
        >
          <p className="font-medium text-blue-700">Эктоморф</p>
          <p className="text-blue-600/70">
            &lt;{boundaries.ecto} см
          </p>
        </div>
        <div
          className={`rounded-lg border p-2 transition-colors ${
            result.type === 'mesomorph'
              ? 'bg-green-50 border-green-300 ring-2 ring-green-300'
              : 'bg-green-50/50 border-green-200'
          }`}
        >
          <p className="font-medium text-green-700">Мезоморф</p>
          <p className="text-green-600/70">
            {boundaries.ecto}–{boundaries.meso} см
          </p>
        </div>
        <div
          className={`rounded-lg border p-2 transition-colors ${
            result.type === 'endomorph'
              ? 'bg-orange-50 border-orange-300 ring-2 ring-orange-300'
              : 'bg-orange-50/50 border-orange-200'
          }`}
        >
          <p className="font-medium text-orange-700">Эндоморф</p>
          <p className="text-orange-600/70">
            &gt;{boundaries.meso} см
          </p>
        </div>
      </div>

      {/* Характеристики */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="size-5" />
            Характеристики {result.typeLabel.toLowerCase()}а
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.characteristics.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Рекомендации по питанию */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Utensils className="size-5" />
            Рекомендации по питанию
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.nutritionTips.map((tip, index) => (
              <motion.li
                key={tip}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-amber-500 shrink-0">•</span>
                <span>{tip}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Рекомендации по тренировкам */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Dumbbell className="size-5" />
            Рекомендации по тренировкам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.trainingTips.map((tip, index) => (
              <motion.li
                key={tip}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-green-500 shrink-0">•</span>
                <span>{tip}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Информация */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="size-5" />
            Важно знать
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <User className="size-4 mt-0.5 text-blue-400 shrink-0" />
            <p>
              <strong className="text-foreground">Тип телосложения</strong> — это генетическая
              предрасположенность, которая определяет особенности вашего метаболизма и строения
              тела.
            </p>
          </div>
          <div className="flex gap-2">
            <Info className="size-4 mt-0.5 text-amber-400 shrink-0" />
            <p>
              Большинство людей имеют <strong className="text-foreground">смешанный тип</strong>{' '}
              телосложения с преобладанием одного из типов. Чистые типы встречаются редко.
            </p>
          </div>
          <div className="flex gap-2">
            <Dumbbell className="size-4 mt-0.5 text-green-400 shrink-0" />
            <p>
              Независимо от типа телосложения, правильное питание и регулярные тренировки помогут
              достичь хороших результатов.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
