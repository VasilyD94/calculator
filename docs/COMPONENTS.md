# Компоненты UI — справочник кода

> Этот файл содержит эталонные примеры компонентов проекта.
> Основная инструкция: [CLAUDE.md](../CLAUDE.md)

---

## Компоненты результатов

### ResultCard — Карточка результата

```tsx
// components/results/ResultCard.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ResultCardProps {
  title: string;
  value: number;
  unit: string;
  description?: string;
  status?: 'success' | 'warning' | 'danger' | 'info';
  icon?: React.ReactNode;
}

const statusColors = {
  success: 'bg-green-50 border-green-200 text-green-700',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  danger: 'bg-red-50 border-red-200 text-red-700',
  info: 'bg-blue-50 border-blue-200 text-blue-700',
};

export function ResultCard({ title, value, unit, description, status = 'info', icon }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('rounded-xl border-2 p-6 text-center', statusColors[status])}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-sm font-medium opacity-80">{title}</p>
      <motion.p className="text-4xl font-bold my-2" key={value} initial={{ scale: 1.1 }} animate={{ scale: 1 }}>
        {value.toLocaleString('ru-RU')}
        <span className="text-lg ml-1">{unit}</span>
      </motion.p>
      {description && <p className="text-sm opacity-70">{description}</p>}
    </motion.div>
  );
}
```

### ResultScale — Визуальная шкала

```tsx
// components/results/ResultScale.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Range {
  min: number;
  max: number;
  label: string;
  color: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
}

interface ResultScaleProps {
  value: number;
  ranges: Range[];
  showLabels?: boolean;
}

const colorMap = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  gray: 'bg-gray-300',
};

export function ResultScale({ value, ranges, showLabels = true }: ResultScaleProps) {
  const totalRange = ranges[ranges.length - 1].max - ranges[0].min;
  const position = ((value - ranges[0].min) / totalRange) * 100;
  const clampedPosition = Math.min(Math.max(position, 2), 98);
  const currentRange = ranges.find(r => value >= r.min && value < r.max) || ranges[ranges.length - 1];

  return (
    <div className="space-y-3">
      <div className="text-center">
        <span className="text-3xl font-bold">{value.toFixed(1)}</span>
        <span className={cn('ml-2 px-2 py-1 rounded text-sm font-medium',
          `bg-${currentRange.color}-100 text-${currentRange.color}-700`
        )}>{currentRange.label}</span>
      </div>
      <div className="relative h-4 rounded-full overflow-hidden flex">
        {ranges.map((range, i) => (
          <div key={i} className={cn(colorMap[range.color], 'h-full')}
            style={{ width: `${((range.max - range.min) / totalRange) * 100}%` }} />
        ))}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-gray-800 rounded-full shadow-lg z-10"
          initial={{ left: '0%' }}
          animate={{ left: `${clampedPosition}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ marginLeft: '-10px' }}
        />
      </div>
      {showLabels && (
        <div className="flex text-xs">
          {ranges.map((range, i) => (
            <div key={i} className="text-center text-muted-foreground"
              style={{ width: `${((range.max - range.min) / totalRange) * 100}%` }}>
              {range.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### MacroBreakdown — Разбивка БЖУ

```tsx
// components/results/MacroBreakdown.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MacroBreakdownProps {
  protein: number;
  fat: number;
  carbs: number;
}

export function MacroBreakdown({ protein, fat, carbs }: MacroBreakdownProps) {
  const proteinCal = protein * 4;
  const fatCal = fat * 9;
  const carbsCal = carbs * 4;
  const total = proteinCal + fatCal + carbsCal;

  const data = [
    { name: 'Белки', value: protein, percent: (proteinCal / total) * 100, color: 'bg-red-500', bgColor: 'bg-red-100', emoji: '🥩' },
    { name: 'Жиры', value: fat, percent: (fatCal / total) * 100, color: 'bg-yellow-500', bgColor: 'bg-yellow-100', emoji: '🥑' },
    { name: 'Углеводы', value: carbs, percent: (carbsCal / total) * 100, color: 'bg-blue-500', bgColor: 'bg-blue-100', emoji: '🍞' },
  ];

  return (
    <div className="space-y-4">
      {data.map((macro, index) => (
        <motion.div key={macro.name} className="space-y-2"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}>
          <div className="flex justify-between items-center">
            <span className="font-medium flex items-center gap-2">
              <span>{macro.emoji}</span>{macro.name}
            </span>
            <span>
              <strong className="text-lg">{macro.value} г</strong>
              <span className="text-muted-foreground ml-2">({macro.percent.toFixed(0)}%)</span>
            </span>
          </div>
          <div className={cn('h-4 rounded-full overflow-hidden', macro.bgColor)}>
            <motion.div className={cn('h-full rounded-full', macro.color)}
              initial={{ width: 0 }} animate={{ width: `${macro.percent}%` }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
```

### FormulaComparison — Сравнение формул

```tsx
// components/results/FormulaComparison.tsx
'use client';

import { motion } from 'framer-motion';
import { Calculator, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FormulaResult {
  name: string;
  value: number;
  recommended?: boolean;
}

interface FormulaComparisonProps {
  results: FormulaResult[];
  unit: string;
}

export function FormulaComparison({ results, unit }: FormulaComparisonProps) {
  const min = Math.min(...results.map(r => r.value));
  const max = Math.max(...results.map(r => r.value));
  const avg = results.reduce((a, b) => a + b.value, 0) / results.length;
  const range = max - min;

  return (
    <Card className="p-5">
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-primary" />
        Сравнение формул расчёта
      </h4>
      <div className="space-y-3">
        {results.map((result, index) => {
          const barWidth = range === 0 ? 50 : ((result.value - min) / range) * 60 + 20;
          return (
            <motion.div key={result.name} className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}>
              <div className="w-40 text-sm flex items-center gap-1">
                {result.recommended && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                <span className={cn('truncate', result.recommended && 'font-medium')}>{result.name}</span>
              </div>
              <div className="flex-1 h-7 bg-gray-100 rounded-lg relative overflow-hidden">
                <motion.div className={cn('h-full rounded-lg', result.recommended ? 'bg-primary' : 'bg-gray-400')}
                  initial={{ width: 0 }} animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 0.4, delay: index * 0.05 }} />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium">
                  {result.value.toLocaleString('ru-RU')} {unit}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4 text-center text-sm">
        <div><p className="text-muted-foreground">Минимум</p><p className="font-semibold">{min.toLocaleString('ru-RU')} {unit}</p></div>
        <div className="border-x"><p className="text-muted-foreground">Среднее</p><p className="font-semibold text-primary">{Math.round(avg).toLocaleString('ru-RU')} {unit}</p></div>
        <div><p className="text-muted-foreground">Максимум</p><p className="font-semibold">{max.toLocaleString('ru-RU')} {unit}</p></div>
      </div>
    </Card>
  );
}
```

---

## Компоненты ввода

### GenderToggle

```tsx
// components/inputs/GenderToggle.tsx
'use client';
import { cn } from '@/lib/utils';

interface GenderToggleProps {
  value: 'male' | 'female';
  onChange: (value: 'male' | 'female') => void;
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
      <button type="button" onClick={() => onChange('male')}
        className={cn('flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200',
          value === 'male' ? 'bg-white shadow-md text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700')}>
        <span className="text-xl">👨</span> Мужчина
      </button>
      <button type="button" onClick={() => onChange('female')}
        className={cn('flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200',
          value === 'female' ? 'bg-white shadow-md text-pink-600 font-medium' : 'text-gray-500 hover:text-gray-700')}>
        <span className="text-xl">👩</span> Женщина
      </button>
    </div>
  );
}
```

### ValueSlider

```tsx
// components/inputs/ValueSlider.tsx
'use client';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface ValueSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit: string;
  icon?: React.ReactNode;
}

export function ValueSlider({ label, value, onChange, min, max, step = 1, unit, icon }: ValueSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <Label className="flex items-center gap-2">{icon}{label}</Label>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{value}</span>
          <span className="text-muted-foreground ml-1">{unit}</span>
        </div>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} className="py-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}
```

### ActivitySelector

```tsx
// components/inputs/ActivitySelector.tsx
'use client';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const ACTIVITY_LEVELS = [
  { id: 'sedentary', label: 'Минимальная', emoji: '🪑', description: 'Сидячая работа, без тренировок', factor: 1.2 },
  { id: 'light', label: 'Лёгкая', emoji: '🚶', description: '1-2 тренировки в неделю', factor: 1.375 },
  { id: 'moderate', label: 'Средняя', emoji: '🏃', description: '3-5 тренировок в неделю', factor: 1.55 },
  { id: 'active', label: 'Высокая', emoji: '💪', description: '6-7 тренировок в неделю', factor: 1.725 },
  { id: 'extreme', label: 'Очень высокая', emoji: '🏋️', description: 'Профессиональный спорт / физ. работа', factor: 1.9 },
];

interface ActivitySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ActivitySelector({ value, onChange }: ActivitySelectorProps) {
  return (
    <div className="space-y-3">
      <Label>Уровень физической активности</Label>
      <TooltipProvider>
        <div className="grid grid-cols-5 gap-2">
          {ACTIVITY_LEVELS.map((level) => (
            <Tooltip key={level.id}>
              <TooltipTrigger asChild>
                <button type="button" onClick={() => onChange(level.id)}
                  className={cn('flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200',
                    value === level.id ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50')}>
                  <span className="text-2xl mb-1">{level.emoji}</span>
                  <span className={cn('text-xs text-center', value === level.id ? 'font-medium text-primary' : 'text-gray-600')}>
                    {level.label}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="font-medium">{level.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Коэффициент: x{level.factor}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
```

---

## Киллер-фичи

### Экспорт в PDF

```tsx
// components/features/ExportPDF.tsx
'use client';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

interface ExportPDFProps {
  targetId: string;
  filename: string;
  title: string;
}

export function ExportPDF({ targetId, filename, title }: ExportPDFProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    setIsLoading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) return;
      const canvas = await html2canvas(element, { scale: 2, useCORS: true, logging: false });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
      const imgX = (pdfWidth - canvas.width * ratio) / 2;
      pdf.setFontSize(18);
      pdf.text(title, pdfWidth / 2, 15, { align: 'center' });
      pdf.addImage(imgData, 'PNG', imgX, 20, canvas.width * ratio * 0.9, canvas.height * ratio * 0.9);
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text(`Создано на calc-box.ru — ${new Date().toLocaleDateString('ru-RU')}`, pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('Ошибка экспорта PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant="outline" onClick={handleExport} disabled={isLoading} className="gap-2">
      <Download className="w-4 h-4" />
      {isLoading ? 'Создаём PDF...' : 'Скачать PDF'}
    </Button>
  );
}
```

### WhatIfMode — Режим «Что если»

```tsx
// components/features/WhatIfMode.tsx
'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calendar, Target, AlertTriangle } from "lucide-react";

interface WhatIfModeProps {
  currentWeight: number;
  tdee: number;
}

export function WhatIfMode({ currentWeight, tdee }: WhatIfModeProps) {
  const [targetWeight, setTargetWeight] = useState(currentWeight - 5);
  const [deficit, setDeficit] = useState(500);

  const weightToLose = currentWeight - targetWeight;
  const caloriesPerKg = 7700;
  const totalCaloriesToBurn = weightToLose * caloriesPerKg;
  const daysNeeded = Math.ceil(totalCaloriesToBurn / deficit);
  const weeksNeeded = Math.ceil(daysNeeded / 7);
  const monthsNeeded = (daysNeeded / 30).toFixed(1);
  const dailyCalories = tdee - deficit;
  const weeklyLoss = (deficit * 7) / caloriesPerKg;
  const isTooFast = deficit > 1000;
  const isTooLow = dailyCalories < 1200;
  const isHealthy = !isTooFast && !isTooLow && weeklyLoss <= 1;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + daysNeeded);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5" />Режим "Что если"</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Целевой вес */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Целевой вес</label>
            <span className="text-2xl font-bold">{targetWeight} кг</span>
          </div>
          <Slider value={[targetWeight]} onValueChange={(v) => setTargetWeight(v[0])}
            min={currentWeight - 30} max={currentWeight - 1} step={0.5} />
        </div>

        {/* Дефицит */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Дефицит калорий в день</label>
            <span className="text-2xl font-bold">{deficit} ккал</span>
          </div>
          <Slider value={[deficit]} onValueChange={(v) => setDeficit(v[0])}
            min={200} max={1200} step={50} />
        </div>

        {/* Результаты */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <TrendingDown className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weightToLose.toFixed(1)} кг</div>
            <div className="text-xs text-muted-foreground">нужно сбросить</div>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weeksNeeded} нед</div>
            <div className="text-xs text-muted-foreground">(~{monthsNeeded} мес)</div>
          </div>
        </div>

        {!isHealthy && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <div className="flex gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <div className="text-sm">
                {isTooFast && <p>Дефицит больше 1000 ккал может привести к потере мышц.</p>}
                {isTooLow && <p>Калорийность ниже 1200 ккал опасна без наблюдения врача.</p>}
              </div>
            </div>
          </div>
        )}
        {isHealthy && (
          <Badge variant="secondary" className="w-full justify-center py-2">Здоровый темп похудения</Badge>
        )}
      </CardContent>
    </Card>
  );
}
```
