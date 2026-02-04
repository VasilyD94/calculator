'use client'

import { motion } from 'framer-motion'
import { Beef, Droplets, Wheat } from 'lucide-react'

interface MacroBreakdownProps {
  protein: number
  fat: number
  carbs: number
  proteinPerKg?: number
  fatPerKg?: number
  carbsPerKg?: number
}

export function MacroBreakdown({ protein, fat, carbs, proteinPerKg, fatPerKg, carbsPerKg }: MacroBreakdownProps) {
  const proteinCal = protein * 4
  const fatCal = fat * 9
  const carbsCal = carbs * 4
  const total = proteinCal + fatCal + carbsCal

  const data = [
    {
      name: 'Белки',
      value: protein,
      percent: total > 0 ? (proteinCal / total) * 100 : 0,
      perKg: proteinPerKg,
      icon: Beef,
      iconColor: 'text-rose-300',
    },
    {
      name: 'Жиры',
      value: fat,
      percent: total > 0 ? (fatCal / total) * 100 : 0,
      perKg: fatPerKg,
      icon: Droplets,
      iconColor: 'text-amber-300',
    },
    {
      name: 'Углеводы',
      value: carbs,
      percent: total > 0 ? (carbsCal / total) * 100 : 0,
      perKg: carbsPerKg,
      icon: Wheat,
      iconColor: 'text-orange-300',
    },
  ]

  return (
    <div className="space-y-3">
      {data.map((macro, index) => {
        const Icon = macro.icon
        return (
          <motion.div
            key={macro.name}
            className="space-y-1.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className={`size-5 ${macro.iconColor}`} />
                {macro.name}
              </span>
              <span className="tabular-nums">
                <span className="font-semibold">{macro.value}</span><span className="font-normal text-muted-foreground ml-0.5">г</span>
                <span className="text-muted-foreground ml-1">
                  ({macro.percent.toFixed(0)}%)
                </span>
                {macro.perKg != null && (
                  <span className="text-muted-foreground ml-1.5 text-xs">
                    <span className="font-semibold text-foreground">{macro.perKg}</span> г/кг
                  </span>
                )}
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${macro.percent}%` }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
