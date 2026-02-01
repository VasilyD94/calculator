'use client'

import { useState, useRef, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'

interface ValueSliderProps {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit: string
  icon?: React.ReactNode
}

export function ValueSlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  icon,
}: ValueSliderProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(String(value))
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isEditing) {
      setInputValue(String(value))
    }
  }, [value, isEditing])

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const commitValue = () => {
    setIsEditing(false)
    const parsed = parseFloat(inputValue)
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed))
      const stepped = Math.round(clamped / step) * step
      onChange(stepped)
    }
  }

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          {icon}
          {label}
        </span>
        <div className="text-right text-sm">
          {isEditing ? (
            <span className="inline-flex items-center gap-0.5">
              <input
                ref={inputRef}
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={commitValue}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') commitValue()
                  if (e.key === 'Escape') setIsEditing(false)
                }}
                className="w-14 text-right font-semibold bg-transparent border-b-2 border-primary outline-none text-sm"
              />
              <span className="font-normal text-muted-foreground">{unit}</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="cursor-text rounded px-1 -mx-1 hover:bg-accent transition-colors"
            >
              <span className="font-semibold">{value}</span>
              <span className="font-normal text-muted-foreground ml-0.5">{unit}</span>
            </button>
          )}
        </div>
      </div>

      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="py-1.5"
      />

    </div>
  )
}
