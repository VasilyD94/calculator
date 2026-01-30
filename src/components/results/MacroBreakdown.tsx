'use client'

import { motion } from 'framer-motion'

interface MacroBreakdownProps {
  protein: number
  fat: number
  carbs: number
}

export function MacroBreakdown({ protein, fat, carbs }: MacroBreakdownProps) {
  const proteinCal = protein * 4
  const fatCal = fat * 9
  const carbsCal = carbs * 4
  const total = proteinCal + fatCal + carbsCal

  const data = [
    {
      name: 'Белки',
      value: protein,
      percent: total > 0 ? (proteinCal / total) * 100 : 0,
      bar: 'bg-red-500',
      track: 'bg-red-100',
      emoji: '🥩',
    },
    {
      name: 'Жиры',
      value: fat,
      percent: total > 0 ? (fatCal / total) * 100 : 0,
      bar: 'bg-yellow-500',
      track: 'bg-yellow-100',
      emoji: '🥑',
    },
    {
      name: 'Углеводы',
      value: carbs,
      percent: total > 0 ? (carbsCal / total) * 100 : 0,
      bar: 'bg-blue-500',
      track: 'bg-blue-100',
      emoji: '🍞',
    },
  ]

  return (
    <div className="space-y-4">
      {data.map((macro, index) => (
        <motion.div
          key={macro.name}
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium flex items-center gap-2 text-sm">
              <span>{macro.emoji}</span>
              {macro.name}
            </span>
            <span className="text-sm">
              <strong className="text-lg">{macro.value} г</strong>
              <span className="text-muted-foreground ml-2">
                ({macro.percent.toFixed(0)}%)
              </span>
            </span>
          </div>
          <div className={`h-3 rounded-full overflow-hidden ${macro.track}`}>
            <motion.div
              className={`h-full rounded-full ${macro.bar}`}
              initial={{ width: 0 }}
              animate={{ width: `${macro.percent}%` }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
