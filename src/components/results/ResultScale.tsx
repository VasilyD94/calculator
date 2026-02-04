'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ScaleRange {
  min: number
  max: number
  label: string
  color: 'green' | 'yellow' | 'red' | 'blue' | 'gray'
}

interface ResultScaleProps {
  value: number
  ranges: ScaleRange[]
  showLabels?: boolean
}

const bgMap: Record<ScaleRange['color'], string> = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  gray: 'bg-gray-300',
}

const badgeBg: Record<ScaleRange['color'], string> = {
  green: 'bg-green-100 text-green-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
  blue: 'bg-blue-100 text-blue-700',
  gray: 'bg-gray-100 text-gray-700',
}

export function ResultScale({
  value,
  ranges,
  showLabels = true,
}: ResultScaleProps) {
  const totalMin = ranges[0].min
  const totalMax = ranges[ranges.length - 1].max
  const totalRange = totalMax - totalMin
  const position = ((value - totalMin) / totalRange) * 100
  const clampedPosition = Math.min(Math.max(position, 2), 98)

  const currentRange =
    ranges.find((r) => value >= r.min && value < r.max) ||
    ranges[ranges.length - 1]

  return (
    <div className="space-y-3">
      {/* Current value */}
      <div className="text-center">
        <span className="text-3xl font-bold tabular-nums">{value.toFixed(1)}</span>
        <span
          className={cn(
            'ml-2 px-2 py-1 rounded text-sm font-medium',
            badgeBg[currentRange.color]
          )}
        >
          {currentRange.label}
        </span>
      </div>

      {/* Scale bar */}
      <div className="relative h-4 rounded-full overflow-hidden flex">
        {ranges.map((range, i) => (
          <div
            key={i}
            className={cn(bgMap[range.color], 'h-full')}
            style={{
              width: `${((range.max - range.min) / totalRange) * 100}%`,
            }}
          />
        ))}

        {/* Marker */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 size-5 bg-background border-[3px] border-foreground rounded-full shadow-lg z-10"
          initial={{ left: '0%' }}
          animate={{ left: `${clampedPosition}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ marginLeft: '-10px' }}
        />
      </div>

      {/* Category labels */}
      {showLabels && (
        <div className="flex text-xs">
          {ranges.map((range, i) => (
            <div
              key={i}
              className={cn(
                'text-center text-muted-foreground',
                currentRange === range && 'font-semibold text-foreground'
              )}
              style={{
                width: `${((range.max - range.min) / totalRange) * 100}%`,
              }}
            >
              {range.label}
            </div>
          ))}
        </div>
      )}

      {/* Boundary values */}
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
        {ranges.map((range, i) => (
          <span key={i}>{range.min}</span>
        ))}
        <span>{totalMax}</span>
      </div>
    </div>
  )
}
