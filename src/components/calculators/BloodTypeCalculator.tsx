'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { motion } from 'framer-motion'
import {
  Droplets,
  Baby,
  Heart,
  AlertTriangle,
  Info,
  SlidersHorizontal,
  Venus,
  Mars,
} from 'lucide-react'
import {
  calculateBloodType,
  getGroupName,
  getRhConflictWarning,
  type BloodGroup,
  type RhFactor,
} from '@/lib/calculations/blood-type'

const BLOOD_GROUPS: BloodGroup[] = ['I', 'II', 'III', 'IV']
const RH_FACTORS: RhFactor[] = ['+', '-']

export function BloodTypeCalculator() {
  const [motherGroup, setMotherGroup] = useState<BloodGroup>('II')
  const [motherRh, setMotherRh] = useState<RhFactor>('+')
  const [fatherGroup, setFatherGroup] = useState<BloodGroup>('III')
  const [fatherRh, setFatherRh] = useState<RhFactor>('+')

  const result = useMemo(
    () =>
      calculateBloodType({
        motherGroup,
        motherRh,
        fatherGroup,
        fatherRh,
      }),
    [motherGroup, motherRh, fatherGroup, fatherRh]
  )

  const rhConflictWarning = getRhConflictWarning(motherRh, fatherRh)

  // Цвета для групп крови
  const groupColors: Record<BloodGroup, string> = {
    I: 'bg-red-500',
    II: 'bg-blue-500',
    III: 'bg-green-500',
    IV: 'bg-purple-500',
  }

  const groupBgColors: Record<BloodGroup, string> = {
    I: 'bg-red-50 border-red-200',
    II: 'bg-blue-50 border-blue-200',
    III: 'bg-green-50 border-green-200',
    IV: 'bg-purple-50 border-purple-200',
  }

  const groupTextColors: Record<BloodGroup, string> = {
    I: 'text-red-700',
    II: 'text-blue-700',
    III: 'text-green-700',
    IV: 'text-purple-700',
  }

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="size-5" />
            Группы крови родителей
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {/* Мать */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-pink-50 text-pink-600 rounded-md text-sm font-medium">
                <Venus className="size-4" />
                Мать
              </div>
              <Select value={motherGroup} onValueChange={(v) => setMotherGroup(v as BloodGroup)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BLOOD_GROUPS.map((group) => (
                    <SelectItem key={group} value={group}>
                      {getGroupName(group)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={motherRh} onValueChange={(v) => setMotherRh(v as RhFactor)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RH_FACTORS.map((rh) => (
                    <SelectItem key={rh} value={rh}>
                      Rh{rh}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Отец */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">
                <Mars className="size-4" />
                Отец
              </div>
              <Select value={fatherGroup} onValueChange={(v) => setFatherGroup(v as BloodGroup)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BLOOD_GROUPS.map((group) => (
                    <SelectItem key={group} value={group}>
                      {getGroupName(group)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={fatherRh} onValueChange={(v) => setFatherRh(v as RhFactor)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RH_FACTORS.map((rh) => (
                    <SelectItem key={rh} value={rh}>
                      Rh{rh}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Предупреждение о резус-конфликте */}
      {rhConflictWarning && (
        <Alert variant="destructive" className="border-amber-200 bg-amber-50 text-amber-900">
          <AlertTriangle className="size-4 !text-amber-600" />
          <AlertTitle className="text-amber-800">Внимание: возможен резус-конфликт</AlertTitle>
          <AlertDescription className="text-amber-700">
            {rhConflictWarning}
          </AlertDescription>
        </Alert>
      )}

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4">
        {/* Группы крови */}
        <p className="text-sm text-muted-foreground mb-3 text-center">Возможные группы крови ребёнка</p>
        <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
          {result.possibleGroups.map((pg, index) => (
            <motion.div
              key={pg.group}
              className={`rounded-lg border p-3 text-center ${groupBgColors[pg.group]}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className={`text-lg sm:text-xl font-bold ${groupTextColors[pg.group]}`}>
                {getGroupName(pg.group)}
              </p>
              <p className="text-sm font-bold text-muted-foreground">{pg.probability}%</p>
            </motion.div>
          ))}
        </div>

        {/* Резус-фактор */}
        <p className="text-sm text-muted-foreground mt-5 mb-3 text-center">Резус-фактор ребёнка</p>
        <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
          <motion.div
            className="rounded-lg border bg-green-50 border-green-200 p-3 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl font-bold text-green-600">Rh+</p>
            <p className="text-sm font-bold text-muted-foreground">{result.possibleRh.positive}%</p>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-blue-50 border-blue-200 p-3 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
          >
            <p className="text-xl font-bold text-blue-600">Rh-</p>
            <p className="text-sm font-bold text-muted-foreground">{result.possibleRh.negative}%</p>
          </motion.div>
        </div>
      </div>

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
            <Heart className="size-4 mt-0.5 text-red-400 shrink-0" />
            <p>
              Группа крови наследуется по законам Менделя. Ребёнок получает по одному гену
              от каждого родителя.
            </p>
          </div>
          <div className="flex gap-2">
            <Heart className="size-4 mt-0.5 text-red-400 shrink-0" />
            <p>
              Резус-фактор определяется доминантным геном D. Если хотя бы один родитель Rh+,
              ребёнок с высокой вероятностью тоже будет Rh+.
            </p>
          </div>
          <div className="flex gap-2">
            <Heart className="size-4 mt-0.5 text-red-400 shrink-0" />
            <p>
              Калькулятор показывает вероятности. Точно определить группу крови можно
              только анализом после рождения.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
