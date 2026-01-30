'use client'

import { useCallback, useMemo } from 'react'
import { Label } from '@/components/ui/label'

interface DateInputProps {
  label: string
  value: Date
  onChange: (date: Date) => void
  icon?: React.ReactNode
  min?: string // 'YYYY-MM-DD'
  max?: string // 'YYYY-MM-DD'
}

export function DateInput({ label, value, onChange, icon, min, max }: DateInputProps) {
  const isoValue = useMemo(() => {
    const y = value.getFullYear()
    const m = String(value.getMonth() + 1).padStart(2, '0')
    const d = String(value.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }, [value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      if (!raw) return
      const [y, m, d] = raw.split('-').map(Number)
      const next = new Date(y, m - 1, d)
      if (!isNaN(next.getTime())) {
        onChange(next)
      }
    },
    [onChange]
  )

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <input
        type="date"
        value={isoValue}
        onChange={handleChange}
        min={min}
        max={max}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  )
}
