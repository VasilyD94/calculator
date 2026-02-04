'use client'

import { cn } from '@/lib/utils'
import { Mars, Venus } from 'lucide-react'

interface GenderToggleProps {
  value: 'male' | 'female'
  onChange: (value: 'male' | 'female') => void
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="flex gap-1.5 p-1 bg-muted rounded-lg">
      <button
        type="button"
        onClick={() => onChange('male')}
        className={cn(
          'flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-md transition-all duration-200 text-sm',
          value === 'male'
            ? 'bg-background shadow-sm text-blue-600'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <Mars className="size-5" />
        Мужчина
      </button>
      <button
        type="button"
        onClick={() => onChange('female')}
        className={cn(
          'flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-md transition-all duration-200 text-sm',
          value === 'female'
            ? 'bg-background shadow-sm text-pink-600'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <Venus className="size-5" />
        Женщина
      </button>
    </div>
  )
}
