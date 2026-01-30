'use client'

import { cn } from '@/lib/utils'

interface GenderToggleProps {
  value: 'male' | 'female'
  onChange: (value: 'male' | 'female') => void
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-muted rounded-xl">
      <button
        type="button"
        onClick={() => onChange('male')}
        className={cn(
          'flex-1 flex items-center justify-center gap-1.5 py-3 px-2 sm:px-4 rounded-lg transition-all duration-200 text-sm',
          value === 'male'
            ? 'bg-background shadow-md text-blue-600 font-medium'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <span className="text-xl">👨</span>
        Мужчина
      </button>
      <button
        type="button"
        onClick={() => onChange('female')}
        className={cn(
          'flex-1 flex items-center justify-center gap-1.5 py-3 px-2 sm:px-4 rounded-lg transition-all duration-200 text-sm',
          value === 'female'
            ? 'bg-background shadow-md text-pink-600 font-medium'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <span className="text-xl">👩</span>
        Женщина
      </button>
    </div>
  )
}
