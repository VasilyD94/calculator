'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ValueSlider } from '@/components/inputs/ValueSlider'
import {
  FormulaComparison,
  type FormulaResult,
} from '@/components/results/FormulaComparison'
import {
  calculateProteinIntake,
  type TrainingType,
  type ProteinGoal,
} from '@/lib/calculations/protein-intake'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  SlidersHorizontal,
  Weight,
  Dumbbell,
  Footprints,
  Bike,
  Zap,
  Target,
  AlertTriangle,
  Lightbulb,
  Utensils,
  TrendingDown,
  TrendingUp,
  Equal,
  Sunrise,
  Sun,
  Cookie,
  Moon,
  type LucideIcon,
} from 'lucide-react'

const TRAINING_TYPES = [
  {
    id: 'recreational' as TrainingType,
    label: 'Любит.',
    labelFull: 'Любительский',
    icon: Footprints,
    description: '1–2 тренировки в неделю',
  },
  {
    id: 'endurance' as TrainingType,
    label: 'Кардио',
    labelFull: 'Кардио',
    icon: Bike,
    description: 'Бег, плавание, велосипед',
  },
  {
    id: 'mixed' as TrainingType,
    label: 'Микс',
    labelFull: 'Смешанный',
    icon: Zap,
    description: 'Кроссфит, единоборства',
  },
  {
    id: 'strength' as TrainingType,
    label: 'Сила',
    labelFull: 'Силовой',
    icon: Dumbbell,
    description: 'Тренажёрный зал, пауэрлифтинг',
  },
]

const GOALS = [
  {
    id: 'maintain' as ProteinGoal,
    label: 'Поддерж.',
    labelFull: 'Поддержание',
    icon: Equal,
  },
  {
    id: 'gain' as ProteinGoal,
    label: 'Набор',
    labelFull: 'Набор массы',
    icon: TrendingUp,
  },
  {
    id: 'lose' as ProteinGoal,
    label: 'Сушка',
    labelFull: 'Снижение жира',
    icon: TrendingDown,
  },
]

export function ProteinCalculator() {
  const [weight, setWeight] = useState(75)
  const [trainingType, setTrainingType] = useState<TrainingType>('strength')
  const [goal, setGoal] = useState<ProteinGoal>('maintain')

  const result = useMemo(
    () => calculateProteinIntake({ weight, trainingType, goal }),
    [weight, trainingType, goal]
  )

  const formulaResults: FormulaResult[] = result.formulas.map((f) => ({
    name: f.name,
    value: f.value,
    recommended: f.recommended,
  }))

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод данных */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Ваши параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ValueSlider
            label="Вес"
            value={weight}
            onChange={setWeight}
            min={30}
            max={200}
            unit="кг"
            icon={<Weight className="h-5 w-5" />}
          />

          {/* Тип тренировок */}
          <div className="space-y-3">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Dumbbell className="h-5 w-5" />
              Тип тренировок
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {TRAINING_TYPES.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setTrainingType(type.id)}
                    className={cn(
                      'flex flex-col items-center py-1.5 px-1 rounded-lg border transition-all duration-200',
                      trainingType === type.id
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5 mb-0.5',
                        trainingType === type.id
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                    />
                    <span
                      className={cn(
                        'text-[9px] sm:text-xs text-center leading-tight',
                        trainingType === type.id
                          ? 'text-primary'
                          : 'text-foreground'
                      )}
                    >
                      <span className="sm:hidden">{type.label}</span>
                      <span className="hidden sm:inline">{type.labelFull}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Цель */}
          <div className="space-y-3">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Target className="h-5 w-5" />
              Цель
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {GOALS.map((g) => {
                const Icon = g.icon
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className={cn(
                      'flex flex-col items-center py-1.5 px-1 rounded-lg border transition-all duration-200',
                      goal === g.id
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border hover:border-muted-foreground/30 hover:bg-accent'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5 mb-0.5',
                        goal === g.id
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                    />
                    <span
                      className={cn(
                        'text-[9px] sm:text-xs text-center leading-tight',
                        goal === g.id ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      <span className="sm:hidden">{g.label}</span>
                      <span className="hidden sm:inline">{g.labelFull}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Рекомендуемый белок</p>
        <p className="text-4xl font-bold text-primary">
          {result.dailyMin}–{result.dailyMax}
          <span className="text-lg font-normal text-muted-foreground ml-1">г/день</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          по ISSN · {result.perKgMin}–{result.perKgMax} г на кг массы тела
        </p>
      </div>

      {/* Мини-карточки */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-green-50 px-2 py-2.5 text-center text-green-700">
          <p className="text-[10px] leading-tight">На кг тела</p>
          <p className="text-base font-bold leading-tight whitespace-nowrap">
            {result.perKgMin}–{result.perKgMax}
          </p>
          <p className="text-[10px] leading-tight">г/кг</p>
        </div>
        <div className="rounded-lg bg-orange-50 px-2 py-2.5 text-center text-orange-700">
          <p className="text-[10px] leading-tight">На приём</p>
          <p className="text-base font-bold leading-tight whitespace-nowrap">
            {result.perMealMin}–{result.perMealMax}
          </p>
          <p className="text-[10px] leading-tight">г × 4</p>
        </div>
        <div className="rounded-lg bg-blue-50 px-2 py-2.5 text-center text-blue-700">
          <p className="text-[10px] leading-tight">В день</p>
          <p className="text-base font-bold leading-tight whitespace-nowrap">
            {result.dailyMin}–{result.dailyMax}
          </p>
          <p className="text-[10px] leading-tight">грамм</p>
        </div>
      </div>

      {/* Распределение по приёмам пищи */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            Распределение белка
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 divide-y divide-border">
          {([
            { name: 'Завтрак', percent: 25, icon: Sunrise, color: 'bg-amber-400' },
            { name: 'Обед', percent: 30, icon: Sun, color: 'bg-orange-400' },
            { name: 'Перекус', percent: 15, icon: Cookie, color: 'bg-green-400' },
            { name: 'Ужин', percent: 30, icon: Moon, color: 'bg-indigo-400' },
          ] as { name: string; percent: number; icon: LucideIcon; color: string }[]).map((meal, i) => {
            const MealIcon = meal.icon
            const minGrams = Math.round((result.dailyMin * meal.percent) / 100)
            const maxGrams = Math.round((result.dailyMax * meal.percent) / 100)

            return (
              <motion.div
                key={meal.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2.5 py-2.5"
              >
                <span
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white',
                    meal.color
                  )}
                >
                  <MealIcon className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {meal.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {meal.percent}% суточной нормы
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground whitespace-nowrap">
                    {minGrams}–{maxGrams} г
                  </p>
                </div>
              </motion.div>
            )
          })}
        </CardContent>
      </Card>

      {/* Важно знать */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Важно знать
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert>
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle>Индивидуальные потребности</AlertTitle>
            <AlertDescription>
              Рекомендации основаны на средних показателях. При заболеваниях почек,
              печени или других хронических состояниях проконсультируйтесь с врачом
              перед увеличением белка в рационе.
            </AlertDescription>
          </Alert>
          <Alert>
            <Utensils className="h-5 w-5 text-blue-500" />
            <AlertTitle>Распределяйте белок равномерно</AlertTitle>
            <AlertDescription>
              Организм усваивает 25–40 г белка за один приём пищи. Распределите
              суточную норму на 4 приёма для лучшего усвоения и синтеза мышечного белка.
            </AlertDescription>
          </Alert>
          <Alert>
            <Lightbulb className="h-5 w-5 text-green-500" />
            <AlertTitle>Качество белка</AlertTitle>
            <AlertDescription>
              Отдавайте предпочтение полноценным источникам белка: мясо, рыба, яйца,
              молочные продукты. Растительный белок комбинируйте для полного
              аминокислотного профиля.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Сравнение формул */}
      <FormulaComparison results={formulaResults} unit="г/день" />
    </div>
  )
}
