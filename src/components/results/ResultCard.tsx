'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Status = 'success' | 'warning' | 'danger' | 'info'

interface ResultCardProps {
  title: string
  value: number
  unit: string
  description?: React.ReactNode
  status?: Status
  icon?: React.ReactNode
  compact?: boolean
}

const statusStyles: Record<Status, string> = {
  success: 'bg-emerald-50/60 border-emerald-200/60 text-emerald-700/80',
  warning: 'bg-amber-50/60 border-amber-200/60 text-amber-700/80',
  danger: 'bg-red-50/60 border-red-200/60 text-red-700/80',
  info: 'bg-sky-50/60 border-sky-200/60 text-sky-700/80',
}

export function ResultCard({
  title,
  value,
  unit,
  description,
  status = 'info',
  icon,
  compact,
}: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-xl border-2 p-2.5 sm:p-4 text-center flex flex-col justify-center',
        compact && 'sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:py-2.5',
        statusStyles[status]
      )}
    >
      {icon && <div className={cn('mb-1', compact && 'sm:mb-0')}>{icon}</div>}
      <p className={cn('text-xs font-semibold opacity-80', compact && 'sm:shrink-0')}>{title}</p>
      <motion.div
        className={cn('my-0.5', compact && 'sm:my-0 sm:shrink-0')}
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className={cn('text-lg font-bold block leading-none', compact && 'sm:inline')}>
          {value.toLocaleString('ru-RU')}
        </span>
        <span className={cn('text-xs font-normal opacity-80 leading-none', compact && 'sm:ml-1')}>{unit}</span>
      </motion.div>
      {description && (
        <p className={cn('text-[10px] sm:text-xs opacity-70 min-h-[2lh]', compact && 'sm:min-h-0')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
