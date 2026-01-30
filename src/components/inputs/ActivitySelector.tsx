'use client'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export const ACTIVITY_LEVELS = [
  {
    id: 'sedentary',
    label: 'Мин.',
    labelFull: 'Минимальная',
    emoji: '🪑',
    description: 'Сидячая работа',
    factor: 1.2,
  },
  {
    id: 'light',
    label: 'Лёгкая',
    labelFull: 'Лёгкая',
    emoji: '🚶',
    description: '1–2 тренировки в неделю',
    factor: 1.375,
  },
  {
    id: 'moderate',
    label: 'Средняя',
    labelFull: 'Средняя',
    emoji: '🏃',
    description: '3–5 тренировок в неделю',
    factor: 1.55,
  },
  {
    id: 'active',
    label: 'Высокая',
    labelFull: 'Высокая',
    emoji: '💪',
    description: '6–7 тренировок в неделю',
    factor: 1.725,
  },
  {
    id: 'extreme',
    label: 'Экстра',
    labelFull: 'Экстра',
    emoji: '🏋️',
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
      <Label>Уровень физической активности</Label>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {ACTIVITY_LEVELS.map((level) => (
          <button
            key={level.id}
            type="button"
            onClick={() => onChange(level.id)}
            className={cn(
              'flex flex-col items-center p-2 sm:p-3 rounded-xl border-2 transition-all duration-200',
              value === level.id
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
            )}
          >
            <span className="text-xl sm:text-2xl mb-1">{level.emoji}</span>
            <span
              className={cn(
                'text-[10px] sm:text-xs text-center leading-tight font-medium',
                value === level.id
                  ? 'text-primary'
                  : 'text-foreground'
              )}
            >
              <span className="sm:hidden">{level.label}</span>
              <span className="hidden sm:inline">{level.labelFull}</span>
            </span>
            <span
              className={cn(
                'text-[10px] text-center leading-tight mt-1 hidden sm:block',
                value === level.id
                  ? 'text-primary/70'
                  : 'text-muted-foreground'
              )}
            >
              {level.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
