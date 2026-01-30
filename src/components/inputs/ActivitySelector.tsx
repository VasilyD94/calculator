'use client'

import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export const ACTIVITY_LEVELS = [
  {
    id: 'sedentary',
    label: 'Минимальная',
    emoji: '🪑',
    description: 'Сидячая работа, без тренировок',
    factor: 1.2,
  },
  {
    id: 'light',
    label: 'Лёгкая',
    emoji: '🚶',
    description: '1-2 тренировки в неделю',
    factor: 1.375,
  },
  {
    id: 'moderate',
    label: 'Средняя',
    emoji: '🏃',
    description: '3-5 тренировок в неделю',
    factor: 1.55,
  },
  {
    id: 'active',
    label: 'Высокая',
    emoji: '💪',
    description: '6-7 тренировок в неделю',
    factor: 1.725,
  },
  {
    id: 'extreme',
    label: 'Экстра',
    emoji: '🏋️',
    description: 'Профессиональный спорт / физ. работа',
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
      <TooltipProvider>
        <div className="grid grid-cols-5 gap-2">
          {ACTIVITY_LEVELS.map((level) => (
            <Tooltip key={level.id}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => onChange(level.id)}
                  className={cn(
                    'flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200',
                    value === level.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
                  )}
                >
                  <span className="text-2xl mb-1">{level.emoji}</span>
                  <span
                    className={cn(
                      'text-xs text-center leading-tight',
                      value === level.id
                        ? 'font-medium text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {level.label}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="font-medium">{level.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Коэффициент: &times;{level.factor}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}
