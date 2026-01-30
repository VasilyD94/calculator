'use client'

import { motion } from 'framer-motion'
import { Calculator, CheckCircle, Info } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

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
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="w-5 h-5 text-primary" />
          Сравнение формул
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>
                  Разные формулы дают разные результаты. Рекомендуемая формула
                  отмечена галочкой.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-44 text-sm flex items-center gap-1 flex-shrink-0">
                  {result.recommended && (
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  )}
                  <span
                    className={cn(
                      'truncate',
                      result.recommended && 'font-medium'
                    )}
                  >
                    {result.name}
                  </span>
                  {result.recommended && (
                    <Badge variant="default" className="text-[10px] ml-1 flex-shrink-0">
                      Рек.
                    </Badge>
                  )}
                </div>
                <div className="flex-1 h-7 bg-muted rounded-lg relative overflow-hidden">
                  <motion.div
                    className={cn(
                      'h-full rounded-lg',
                      result.recommended ? 'bg-primary' : 'bg-muted-foreground/30'
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${barWidth}%` }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium">
                    {result.value.toLocaleString('ru-RU')} {unit}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-muted-foreground">Минимум</p>
            <p className="font-semibold">
              {min.toLocaleString('ru-RU')} {unit}
            </p>
          </div>
          <div className="border-x">
            <p className="text-muted-foreground">Среднее</p>
            <p className="font-semibold text-primary">
              {Math.round(avg).toLocaleString('ru-RU')} {unit}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Максимум</p>
            <p className="font-semibold">
              {max.toLocaleString('ru-RU')} {unit}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
