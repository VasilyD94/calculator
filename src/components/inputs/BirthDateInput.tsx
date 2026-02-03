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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface BirthDateInputProps {
  label: string
  value: Date
  onChange: (date: Date) => void
  icon?: React.ReactNode
}

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

export function BirthDateInput({ label, value, onChange, icon }: BirthDateInputProps) {
  const currentYear = new Date().getFullYear()

  // Годы от текущего до 120 лет назад
  const years = useMemo(() => {
    const result: number[] = []
    for (let y = currentYear; y >= currentYear - 120; y--) {
      result.push(y)
    }
    return result
  }, [currentYear])

  const selectedYear = value.getFullYear()
  const selectedMonth = value.getMonth()

  const handleYearChange = (year: string) => {
    const newDate = new Date(value)
    newDate.setFullYear(parseInt(year))
    // Проверка на будущую дату
    if (newDate > new Date()) {
      newDate.setFullYear(currentYear)
      newDate.setMonth(new Date().getMonth())
      newDate.setDate(new Date().getDate())
    }
    onChange(newDate)
  }

  const handleMonthChange = (month: string) => {
    const newDate = new Date(value)
    newDate.setMonth(parseInt(month))
    // Проверка на будущую дату
    if (newDate > new Date()) {
      newDate.setDate(new Date().getDate())
    }
    onChange(newDate)
  }

  const handleDaySelect = (date: Date | undefined) => {
    if (date) {
      onChange(date)
    }
  }

  // Ограничение: нельзя выбрать дату в будущем
  const disabledDays = { after: new Date() }

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
          {/* Селекторы года и месяца */}
          <div className="flex gap-2 p-3 border-b">
            <Select value={selectedMonth.toString()} onValueChange={handleMonthChange}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Месяц" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear.toString()} onValueChange={handleYearChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Год" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Календарь */}
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleDaySelect}
            month={new Date(selectedYear, selectedMonth)}
            onMonthChange={(date) => {
              const newDate = new Date(value)
              newDate.setFullYear(date.getFullYear())
              newDate.setMonth(date.getMonth())
              if (newDate <= new Date()) {
                onChange(newDate)
              }
            }}
            disabled={disabledDays}
            locale={ru}
            weekStartsOn={1}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
