'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3 } from 'lucide-react'

export interface FormulaResult {
  name: string
  value: number
  description?: string
  recommended?: boolean
}

interface FormulaComparisonProps {
  results: FormulaResult[]
  unit: string
}

export function FormulaComparison({ results, unit }: FormulaComparisonProps) {
  const values = results.map((r) => r.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const avg = values.reduce((a, b) => a + b, 0) / values.length
  const range = max - min

  return (
    <Card className="gap-3 py-4">
      <CardHeader className="pb-0">
        <CardTitle className="text-base flex items-center gap-2">
          <BarChart3 className="size-5" />
          Сравнение формул
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {results.map((result, index) => {
            const barWidth =
              range === 0
                ? 50
                : ((result.value - min) / range) * 60 + 20

            return (
              <motion.div
                key={result.name}
                className="space-y-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Название формулы + значение */}
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className={`truncate ${result.recommended ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {result.name}
                  </span>
                  <span className="flex-shrink-0 tabular-nums">
                    <span className={`font-semibold ${result.recommended ? '' : 'text-muted-foreground'}`}>{result.value.toLocaleString('ru-RU')}</span>
                    <span className="font-normal text-muted-foreground ml-0.5">{unit}</span>
                  </span>
                </div>
                {/* Полоска */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${result.recommended ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${barWidth}%` }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-4 pt-3 border-t grid grid-cols-3 gap-2 text-center text-sm tabular-nums">
          <div>
            <p className="text-xs text-muted-foreground">Минимум</p>
            <p className="font-semibold">{min.toLocaleString('ru-RU')}</p>
          </div>
          <div className="border-x">
            <p className="text-xs text-muted-foreground">Среднее</p>
            <p className="font-semibold">{Math.round(avg).toLocaleString('ru-RU')}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Максимум</p>
            <p className="font-semibold">{max.toLocaleString('ru-RU')}</p>
          </div>
          <p className="col-span-3 text-xs text-muted-foreground -mt-1">{unit}</p>
        </div>
      </CardContent>
    </Card>
  )
}
