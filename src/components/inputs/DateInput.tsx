'use client'

import { useMemo } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DateInputProps {
  label: string
  value: Date
  onChange: (date: Date) => void
  icon?: React.ReactNode
  min?: string // 'YYYY-MM-DD'
  max?: string // 'YYYY-MM-DD'
}

function parseIsoDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function DateInput({ label, value, onChange, icon, min, max }: DateInputProps) {
  const minDate = useMemo(() => (min ? parseIsoDate(min) : undefined), [min])
  const maxDate = useMemo(() => (max ? parseIsoDate(max) : undefined), [max])

  const disabledMatcher = useMemo(() => {
    const matchers: Array<{ before: Date } | { after: Date }> = []
    if (minDate) matchers.push({ before: minDate })
    if (maxDate) matchers.push({ after: maxDate })
    return matchers.length > 0 ? matchers : undefined
  }, [minDate, maxDate])

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal h-10',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? (
              format(value, 'd MMMM yyyy', { locale: ru })
            ) : (
              <span>Выберите дату</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              if (date) onChange(date)
            }}
            defaultMonth={value}
            disabled={disabledMatcher}
            locale={ru}
            weekStartsOn={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
