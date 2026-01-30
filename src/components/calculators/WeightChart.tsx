'use client'

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import type { WeightPoint } from '@/lib/calculations/deficit'

interface WeightChartProps {
  data: WeightPoint[]
  targetWeight: number
}

const chartConfig = {
  weight: {
    label: 'Вес',
    color: 'var(--primary)',
  },
} satisfies ChartConfig

export function WeightChart({ data, targetWeight }: WeightChartProps) {
  if (data.length < 2) return null

  const milestones = data.filter((d) => d.milestone)

  // Показываем каждую N-ю метку на оси X чтобы не перегружать
  const totalWeeks = data.length - 1
  const tickInterval =
    totalWeeks <= 12 ? 1 : totalWeeks <= 24 ? 2 : Math.ceil(totalWeeks / 10)
  const ticks = data
    .filter((_, i) => i % tickInterval === 0 || i === totalWeeks)
    .map((d) => d.date)

  const minWeight = targetWeight - 2
  const maxWeight = data[0]?.weight + 2

  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-weight)" stopOpacity={0.2} />
            <stop offset="100%" stopColor="var(--color-weight)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          ticks={ticks}
          interval="preserveStartEnd"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          domain={[minWeight, maxWeight]}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(v: number) => `${v}`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name, item) => {
                const point = item.payload as WeightPoint
                return (
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">{value} кг</span>
                    {point.milestone && (
                      <span className="text-muted-foreground">
                        {point.milestone} пройдено
                      </span>
                    )}
                  </div>
                )
              }}
              labelFormatter={(label) => `${label}`}
            />
          }
        />
        <ReferenceLine
          y={targetWeight}
          stroke="var(--color-weight)"
          strokeDasharray="5 5"
          strokeOpacity={0.5}
        />
        <Area
          type="monotone"
          dataKey="weight"
          stroke="var(--color-weight)"
          strokeWidth={2}
          fill="url(#weightGradient)"
          activeDot={{ r: 5, fill: 'var(--color-weight)' }}
        />
        {milestones.map((m) => (
          <ReferenceDot
            key={m.week}
            x={m.date}
            y={m.weight}
            r={4}
            fill="var(--color-weight)"
            stroke="var(--background)"
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  )
}
