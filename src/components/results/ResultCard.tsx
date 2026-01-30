'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Status = 'success' | 'warning' | 'danger' | 'info'

interface ResultCardProps {
  title: string
  value: number
  unit: string
  description?: string
  status?: Status
  icon?: React.ReactNode
}

const statusStyles: Record<Status, string> = {
  success: 'bg-green-50 border-green-200 text-green-700',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  danger: 'bg-red-50 border-red-200 text-red-700',
  info: 'bg-blue-50 border-blue-200 text-blue-700',
}

export function ResultCard({
  title,
  value,
  unit,
  description,
  status = 'info',
  icon,
}: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn('rounded-xl border-2 p-6 text-center', statusStyles[status])}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-sm font-medium opacity-80">{title}</p>
      <motion.p
        className="text-4xl font-bold my-2"
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {value.toLocaleString('ru-RU')}
        <span className="text-lg ml-1">{unit}</span>
      </motion.p>
      {description && <p className="text-sm opacity-70">{description}</p>}
    </motion.div>
  )
}
