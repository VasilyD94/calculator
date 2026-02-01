'use client'

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
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          {icon}
          {label}
        </span>
        <div className="text-right text-sm">
          <span className="font-semibold">{value}</span>
          <span className="font-normal text-muted-foreground ml-0.5">{unit}</span>
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
