'use client'

import { cn } from '@/lib/utils'
import {
  Armchair,
  Footprints,
  Bike,
  Flame,
  Dumbbell,
  Activity,
} from 'lucide-react'

export const ACTIVITY_LEVELS = [
  {
    id: 'sedentary',
    label: 'Мин.',
    labelFull: 'Минимальная',
    icon: Armchair,
    description: 'Сидячая работа',
    factor: 1.2,
  },
  {
    id: 'light',
    label: 'Лёгк.',
    labelFull: 'Лёгкая',
    icon: Footprints,
    description: '1–2 тренировки в неделю',
    factor: 1.375,
  },
  {
    id: 'moderate',
    label: 'Сред.',
    labelFull: 'Средняя',
    icon: Bike,
    description: '3–5 тренировок в неделю',
    factor: 1.55,
  },
  {
    id: 'active',
    label: 'Выс.',
    labelFull: 'Высокая',
    icon: Flame,
    description: '6–7 тренировок в неделю',
    factor: 1.725,
  },
  {
    id: 'extreme',
    label: 'Экст.',
    labelFull: 'Экстра',
    icon: Dumbbell,
    description: 'Проф. спорт / физ. работа',
    factor: 1.9,
  },
] as const

export type ActivityLevel = (typeof ACTIVITY_LEVELS)[number]['id']

interface ActivitySelectorProps {
  value: ActivityLevel
  onChange: (value: ActivityLevel) => void
}

export function ActivitySelector({ value, onChange }: ActivitySelectorProps) {
  return (
    <div className="space-y-3">
      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Activity className="h-5 w-5" />
        Активность
      </span>
      <div className="grid grid-cols-5 gap-1.5">
        {ACTIVITY_LEVELS.map((level) => {
          const Icon = level.icon
          return (
            <button
              key={level.id}
              type="button"
              onClick={() => onChange(level.id)}
              className={cn(
                'flex flex-col items-center py-1.5 px-1 rounded-lg border transition-all duration-200',
                value === level.id
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
              )}
            >
              <Icon className={cn(
                'h-5 w-5 mb-0.5',
                value === level.id ? 'text-primary' : 'text-muted-foreground'
              )} />
              <span
                className={cn(
                  'text-[9px] sm:text-xs text-center leading-tight',
                  value === level.id
                    ? 'text-primary'
                    : 'text-foreground'
                )}
              >
                <span className="sm:hidden">{level.label}</span>
                <span className="hidden sm:inline">{level.labelFull}</span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
