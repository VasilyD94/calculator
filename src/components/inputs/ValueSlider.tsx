'use client'

import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

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
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <Label className="flex items-center gap-2">
          {icon}
          {label}
        </Label>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{value}</span>
          <span className="text-muted-foreground ml-1">{unit}</span>
        </div>
      </div>

      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="py-2"
      />

    </div>
  )
}
