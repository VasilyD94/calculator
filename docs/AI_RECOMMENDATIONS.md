# 🤖 Стратегия внедрения рекомендаций и ИИ

> **Принцип:** Поэтапное внедрение с валидацией через A/B тесты

---

## 📊 Обзор стратегии

```
┌─────────────────────────────────────────────────────────────────┐
│  ФАЗА        │  ЧТО ДЕЛАЕМ                     │  КОГДА        │
├──────────────┼─────────────────────────────────┼───────────────┤
│  MVP         │  Без рекомендаций               │  Месяц 1-2    │
│  Фаза 2      │  Простые рекомендации (if/else) │  Месяц 3-6    │
│              │  + A/B тест + опрос             │               │
│  Фаза 3      │  ИИ авто-рекомендации           │  Месяц 7+     │
│              │  (только если A/B успешен)      │               │
└──────────────┴─────────────────────────────────┴───────────────┘
```

---

## 🎯 Фаза 1 (MVP): Без рекомендаций

**Цель:** Запустить продукт, набрать трафик, проверить базовые гипотезы.

**Что делаем:**
- Фокус на базовых киллер-фичах (сравнение формул, шкалы, PDF)
- Набираем аудиторию
- Изучаем поведение пользователей в Метрике
- Нулевые расходы на рекомендации

**Рекомендации НЕ делаем** — сначала нужно понять, нужны ли они вообще.

---

## 🧪 Фаза 2: Простые рекомендации + A/B тест

**Цель:** Проверить гипотезу — улучшают ли рекомендации метрики?

### Принцип работы

Заранее написанные тексты, которые показываются по условиям (if/else).
Без API, без расходов, полный контроль над контентом.

```
[Пользователь заполняет калькулятор]
              ↓
[Получает результат]
              ↓
[Система проверяет условия]
              ↓
[Показывает релевантные рекомендации из заготовок]
```

### Пример логики для калькулятора калорий

```typescript
// lib/recommendations/calories.ts

interface CalorieData {
  gender: 'male' | 'female'
  age: number
  weight: number
  height: number
  bmi: number
  activity: string
  goal: 'lose' | 'maintain' | 'gain'
  tdee: number
  targetCalories: number
}

interface Recommendation {
  emoji: string
  title: string
  text: string
  priority: 'high' | 'medium' | 'low'
}

export function getCalorieRecommendations(data: CalorieData): Recommendation[] {
  const recommendations: Recommendation[] = []
  
  // === ПО ИМТ ===
  
  if (data.bmi < 18.5) {
    recommendations.push({
      emoji: '⚠️',
      title: 'Недостаточный вес',
      text: `При ИМТ ${data.bmi.toFixed(1)} рекомендуем увеличить калорийность на 300-500 ккал и добавить силовые тренировки для набора мышечной массы.`,
      priority: 'high'
    })
  }
  
  if (data.bmi >= 25 && data.bmi < 30) {
    recommendations.push({
      emoji: '📊',
      title: 'Ваша ситуация',
      text: `ИМТ ${data.bmi.toFixed(1)} — избыточный вес, но не ожирение. В этой зоне изменения образа жизни дают быстрый результат без жёстких диет.`,
      priority: 'medium'
    })
  }
  
  if (data.bmi >= 30) {
    recommendations.push({
      emoji: '⚠️',
      title: 'Рекомендация',
      text: 'При ИМТ выше 30 рекомендуем проконсультироваться с врачом перед началом диеты. Безопасный темп — не более 0.5-1 кг в неделю.',
      priority: 'high'
    })
  }
  
  // === ПО ВОЗРАСТУ ===
  
  if (data.age >= 30 && data.age < 40) {
    recommendations.push({
      emoji: '⚡',
      title: 'Особенность возраста',
      text: 'После 30 лет метаболизм замедляется на 3-5% каждые 10 лет. Важно сохранять мышечную массу — она "сжигает" калории в покое.',
      priority: 'low'
    })
  }
  
  if (data.age >= 40 && data.age < 50) {
    recommendations.push({
      emoji: '⚡',
      title: 'Особенность возраста',
      text: 'После 40 метаболизм замедлился на 5-10%. Добавьте силовые упражнения 2-3 раза в неделю для поддержания мышц.',
      priority: 'medium'
    })
  }
  
  if (data.age >= 50) {
    recommendations.push({
      emoji: '⚡',
      title: 'Особенность возраста',
      text: 'После 50 особенно важен белок (1.2-1.5 г на кг веса) для сохранения мышечной массы. Также следите за витамином D.',
      priority: 'medium'
    })
  }
  
  // === ПО АКТИВНОСТИ ===
  
  if (data.activity === 'sedentary' && data.goal === 'lose') {
    recommendations.push({
      emoji: '🚶',
      title: 'Простой способ',
      text: 'При сидячем образе жизни добавьте 30 минут ходьбы в день — это +150-200 ккал расхода без изменения питания.',
      priority: 'high'
    })
  }
  
  // === ПО ЦЕЛИ ===
  
  if (data.goal === 'lose') {
    const deficit = data.tdee - data.targetCalories
    
    if (deficit > 700) {
      recommendations.push({
        emoji: '⚠️',
        title: 'Большой дефицит',
        text: `Дефицит ${deficit} ккал агрессивен и может привести к потере мышц и срывам. Рекомендуем 300-500 ккал для устойчивого результата.`,
        priority: 'high'
      })
    }
    
    const minCalories = data.gender === 'male' ? 1500 : 1200
    if (data.targetCalories < minCalories) {
      recommendations.push({
        emoji: '🚨',
        title: 'Слишком низко',
        text: `Калорийность ниже ${minCalories} ккал может замедлить метаболизм. Лучше добавить активности, чем сильнее урезать еду.`,
        priority: 'high'
      })
    }
  }
  
  if (data.goal === 'gain') {
    recommendations.push({
      emoji: '💪',
      title: 'Для набора массы',
      text: `Чтобы набирать мышцы, а не жир: 1.6-2 г белка на кг веса, силовые 3-4 раза в неделю, профицит 300-500 ккал.`,
      priority: 'high'
    })
  }
  
  // === БЕЛОК ===
  
  const minProtein = Math.round(data.weight * 1.2)
  const optProtein = Math.round(data.weight * 1.6)
  
  recommendations.push({
    emoji: '🥩',
    title: 'Норма белка',
    text: `При весе ${data.weight} кг минимум белка: ${minProtein} г/день. Для сохранения мышц: ${optProtein} г/день.`,
    priority: 'medium'
  })
  
  // Сортируем и возвращаем топ-4
  const priorityOrder = { high: 0, medium: 1, low: 2 }
  return recommendations
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, 4)
}
```

### Рекомендации для ИМТ

```typescript
// lib/recommendations/bmi.ts

export function getBMIRecommendations(data: BMIData): Recommendation[] {
  const recommendations: Recommendation[] = []
  
  const idealMin = Math.round(18.5 * (data.height / 100) ** 2)
  const idealMax = Math.round(24.9 * (data.height / 100) ** 2)
  
  recommendations.push({
    emoji: '🎯',
    title: 'Идеальный диапазон',
    text: `Для роста ${data.height} см здоровый вес: ${idealMin}-${idealMax} кг. ${
      data.weight > idealMax 
        ? `Цель — ${idealMax} кг, минус ${data.weight - idealMax} кг.`
        : data.weight < idealMin
        ? `Рекомендуется набрать ${idealMin - data.weight} кг.`
        : 'Вы в здоровом диапазоне!'
    }`,
    priority: 'high'
  })
  
  const waistLimit = data.gender === 'male' ? 94 : 80
  recommendations.push({
    emoji: '📏',
    title: 'Обхват талии',
    text: `ИМТ не учитывает распределение жира. Измерьте талию — ${data.gender === 'male' ? 'для мужчин' : 'для женщин'} норма до ${waistLimit} см.`,
    priority: 'medium'
  })
  
  return recommendations
}
```

### Рекомендации для беременности

```typescript
// lib/recommendations/pregnancy.ts

export function getPregnancyRecommendations(data: PregnancyData): Recommendation[] {
  const recommendations: Recommendation[] = []
  
  // По триместрам
  if (data.trimester === 1) {
    recommendations.push({
      emoji: '💊',
      title: 'Первый триместр',
      text: 'Фолиевая кислота критически важна сейчас (400-800 мкг/день). Она снижает риск дефектов нервной трубки.',
      priority: 'high'
    })
  }
  
  if (data.trimester === 2) {
    recommendations.push({
      emoji: '🎉',
      title: 'Золотой период',
      text: 'Второй триместр — самый комфортный! Добавьте в рацион железо и кальций. Норма набора веса: +1-1.5 кг в месяц.',
      priority: 'medium'
    })
  }
  
  if (data.trimester === 3) {
    recommendations.push({
      emoji: '🛏️',
      title: 'Финишная прямая',
      text: 'Больше отдыхайте, спите на левом боку. Соберите сумку в роддом к 36 неделе. Следите за шевелениями — норма 10+ в день.',
      priority: 'high'
    })
  }
  
  // Ближайшие события
  if (data.currentWeek >= 10 && data.currentWeek < 14) {
    recommendations.push({
      emoji: '🏥',
      title: 'Скоро первый скрининг',
      text: `На 11-14 неделе — первый скрининг (УЗИ + анализ крови). ${data.currentWeek < 11 ? `Осталось ${11 - data.currentWeek} нед.` : 'Самое время!'}`,
      priority: 'high'
    })
  }
  
  if (data.currentWeek >= 18 && data.currentWeek < 22) {
    recommendations.push({
      emoji: '🏥',
      title: 'Второй скрининг',
      text: 'На 18-21 неделе — второй скрининг. Можно узнать пол малыша!',
      priority: 'high'
    })
  }
  
  if (data.currentWeek >= 28 && data.currentWeek < 32) {
    recommendations.push({
      emoji: '📋',
      title: 'Декретный отпуск',
      text: `С 30 недели можно оформить декрет. ${data.currentWeek < 30 ? `Осталось ${30 - data.currentWeek} нед.` : 'Уже можно оформлять!'}`,
      priority: 'medium'
    })
  }
  
  return recommendations.slice(0, 3)
}
```

### UI компонент

```tsx
// components/features/SimpleRecommendations.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface Recommendation {
  emoji: string
  title: string
  text: string
  priority: 'high' | 'medium' | 'low'
}

interface Props {
  recommendations: Recommendation[]
}

export function SimpleRecommendations({ recommendations }: Props) {
  if (recommendations.length === 0) return null
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Рекомендации
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, i) => (
          <div 
            key={i}
            className={`p-3 rounded-lg border ${
              rec.priority === 'high' 
                ? 'bg-primary/5 border-primary/20' 
                : 'bg-muted/50'
            }`}
          >
            <div className="flex gap-2 mb-1">
              <span>{rec.emoji}</span>
              <span className="font-medium text-sm">{rec.title}</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {rec.text}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
```

---

### A/B тестирование

```tsx
// components/features/ABTest.tsx
"use client"

import { useEffect, useState } from "react"

interface ABTestProps {
  testName: string
  variantA: React.ReactNode  // Контроль (без рекомендаций)
  variantB: React.ReactNode  // Тест (с рекомендациями)
}

export function ABTest({ testName, variantA, variantB }: ABTestProps) {
  const [variant, setVariant] = useState<'A' | 'B' | null>(null)
  
  useEffect(() => {
    const key = `ab_${testName}`
    let v = localStorage.getItem(key) as 'A' | 'B' | null
    
    if (!v) {
      v = Math.random() < 0.5 ? 'A' : 'B'
      localStorage.setItem(key, v)
      
      // Отправляем в Яндекс.Метрику
      if ((window as any).ym) {
        (window as any).ym(METRIKA_ID, 'reachGoal', `ab_assigned_${testName}`, { variant: v })
      }
    }
    
    setVariant(v)
  }, [testName])
  
  if (!variant) return null
  return variant === 'A' ? variantA : variantB
}

// Использование в калькуляторе:
<ABTest
  testName="recommendations_v1"
  variantA={null}  // Без рекомендаций
  variantB={<SimpleRecommendations recommendations={getCalorieRecommendations(data)} />}
/>
```

### Опрос пользователей

```tsx
// components/features/FeedbackSurvey.tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeedbackSurvey({ calculatorName }: { calculatorName: string }) {
  const [visible, setVisible] = useState(false)
  const [answered, setAnswered] = useState(false)
  
  useEffect(() => {
    const key = `survey_${calculatorName}`
    if (!localStorage.getItem(key)) {
      // Показываем с задержкой 5 сек
      setTimeout(() => setVisible(true), 5000)
    }
  }, [calculatorName])
  
  const handleAnswer = (answer: string) => {
    localStorage.setItem(`survey_${calculatorName}`, answer)
    setAnswered(true)
    
    // Отправляем в аналитику
    if ((window as any).ym) {
      (window as any).ym(METRIKA_ID, 'reachGoal', 'survey_answer', {
        calculator: calculatorName,
        answer,
      })
    }
    
    setTimeout(() => setVisible(false), 2000)
  }
  
  if (!visible) return null
  
  return (
    <Card className="border-dashed">
      <CardContent className="pt-4">
        {answered ? (
          <p className="text-sm text-center text-muted-foreground">Спасибо! 🙏</p>
        ) : (
          <>
            <p className="text-sm mb-3">
              Хотели бы получать персональные рекомендации от ИИ?
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => handleAnswer('yes')}>
                👍 Да
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleAnswer('maybe')}>
                Возможно
              </Button>
              <Button size="sm" variant="ghost" onClick={() => handleAnswer('no')}>
                Нет
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
```

### Критерии успеха для перехода к Фазе 3

```typescript
// Переходим к ИИ только если:

const SUCCESS_CRITERIA = {
  // Время на странице выросло на 20%+
  timeOnPageIncrease: 1.2,
  
  // Отказы снизились на 10%+
  bounceRateDecrease: 0.9,
  
  // 60%+ ответили "да" или "возможно" в опросе
  surveyPositiveRate: 0.6,
  
  // Минимум 1000 пользователей на каждый вариант
  minSampleSize: 1000,
}
```

---

## 🤖 Фаза 3: ИИ авто-рекомендации

**Запускаем только если A/B тест успешен!**

### Принцип работы

```
ВАЖНО: Это НЕ чат!

Пользователь ничего не вводит.
ИИ автоматически генерирует анализ на основе результатов калькулятора.

[Заполняет калькулятор] → [Результат] → [🤖 Показать ИИ-анализ]
                                                    ↓
                                        [Персональный текст]
```

### Промты для ИИ

```typescript
// lib/ai/prompts.ts

export const AI_PROMPTS = {
  
  calories: (data: CalorieData) => `Ты — эксперт по питанию. Проанализируй результаты.

ДАННЫЕ:
- Пол: ${data.gender === 'male' ? 'мужчина' : 'женщина'}
- Возраст: ${data.age} лет
- Рост: ${data.height} см, Вес: ${data.weight} кг
- ИМТ: ${data.bmi.toFixed(1)}
- Активность: ${data.activity}
- Цель: ${data.goal === 'lose' ? 'похудение' : data.goal === 'gain' ? 'набор' : 'поддержание'}
- BMR: ${data.bmr} ккал, TDEE: ${data.tdee} ккал
- Для цели: ${data.targetCalories} ккал

ФОРМАТ (строго):
📊 Ваша ситуация
[2-3 предложения с цифрами]

⚡ Особенность
[1 факт про возраст/пол/активность]

🎯 План
• [рекомендация с цифрой]
• [рекомендация с цифрой]
• [рекомендация с цифрой]

⚠️ Важно
[1 предупреждение]

Обращайся на "вы". Длина: 150-200 слов. Без markdown.`,

  bmi: (data: BMIData) => `Ты — эксперт по здоровью. Проанализируй ИМТ.

ДАННЫЕ:
- Пол: ${data.gender === 'male' ? 'мужчина' : 'женщина'}
- Возраст: ${data.age}, Рост: ${data.height} см, Вес: ${data.weight} кг
- ИМТ: ${data.bmi.toFixed(1)}, Категория: ${data.category}
- Идеальный вес: ${data.idealRange.min}-${data.idealRange.max} кг

ФОРМАТ:
📊 Результат — [что означает ИМТ]
👥 Сравнение — [относительно среднего]
🎯 Цель — [оптимальный вес]
💡 Нюанс — [ограничения ИМТ]

Длина: 120-150 слов.`,

  pregnancy: (data: PregnancyData) => `Ты — дружелюбный помощник для беременных.

ДАННЫЕ:
- Неделя: ${data.currentWeek}, Триместр: ${data.trimester}
- ПДР: ${data.dueDate}, Дней до родов: ${data.daysLeft}

ФОРМАТ:
🎉 [Поздравление с неделей]
📅 Что происходит — [2-3 факта о малыше]
✅ Позади — [пройденные этапы]
📋 Впереди — [ближайшие события]
💡 Совет — [1 рекомендация]

Тон: тёплый, поддерживающий. НЕ медицинские советы. 150-180 слов.`,

  whatif: (data: WhatIfData) => `Ты — мотивирующий тренер.

ДАННЫЕ:
- Сейчас: ${data.currentWeight} кг → Цель: ${data.targetWeight} кг
- Сбросить: ${data.weightToLose} кг
- Дефицит: ${data.deficit} ккал/день
- Срок: ${data.weeksNeeded} недель
- Дата цели: ${data.targetDate}
- Темп: ${data.weeklyLoss} кг/нед

ФОРМАТ:
🎯 Цель — [реалистичность]
📈 Путь — [через месяц X кг, через два Y]
💪 Поможет — [2-3 совета]
⚠️ Сложности — [когда будет тяжело]

Мотивирующий тон. 130-160 слов.`,

}
```

### API Route

```typescript
// app/api/ai/analyze/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { AI_PROMPTS } from '@/lib/ai/prompts'

// Ключ кэша с "бакетами" для группировки похожих запросов
function getCacheKey(type: string, data: any): string {
  const age = Math.floor((data.age || 0) / 5) * 5
  const bmi = Math.floor((data.bmi || 0) / 2) * 2
  const week = data.currentWeek || 0
  
  return `ai:${type}:${data.gender}:${age}:${bmi}:${data.activity}:${data.goal}:${week}`
}

export async function POST(req: NextRequest) {
  const { type, data } = await req.json()
  
  if (!type || !data || !AI_PROMPTS[type as keyof typeof AI_PROMPTS]) {
    return NextResponse.json({ error: 'Invalid' }, { status: 400 })
  }
  
  // Проверяем кэш
  const cacheKey = getCacheKey(type, data)
  const cached = await kv.get(cacheKey)
  
  if (cached) {
    return NextResponse.json({ analysis: cached, cached: true })
  }
  
  // Запрос к OpenAI
  const prompt = AI_PROMPTS[type as keyof typeof AI_PROMPTS](data)
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',  // Дешёвая модель
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 400,
      temperature: 0.7,
    }),
  })
  
  const result = await response.json()
  const analysis = result.choices[0]?.message?.content || ''
  
  // Кэшируем на 24 часа
  await kv.set(cacheKey, analysis, { ex: 86400 })
  
  return NextResponse.json({ analysis, cached: false })
}
```

### UI компонент ИИ-анализа

```tsx
// components/features/AIAnalysis.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2, RefreshCw } from "lucide-react"

interface AIAnalysisProps {
  type: 'calories' | 'bmi' | 'pregnancy' | 'whatif'
  data: Record<string, any>
}

export function AIAnalysis({ type, data }: AIAnalysisProps) {
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const fetch Analysis = async () => {
    setLoading(true)
    setVisible(true)
    
    try {
      const res = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data }),
      })
      const result = await res.json()
      setAnalysis(result.analysis)
    } catch {
      setAnalysis('Не удалось загрузить анализ.')
    } finally {
      setLoading(false)
    }
  }

  if (!visible) {
    return (
      <Button 
        onClick={fetchAnalysis}
        variant="outline"
        className="w-full gap-2 h-12 border-dashed"
      >
        <Sparkles className="w-5 h-5 text-primary" />
        Показать ИИ-анализ
      </Button>
    )
  }

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Персональный анализ
          </span>
          {analysis && (
            <Button variant="ghost" size="sm" onClick={fetchAnalysis}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8 gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
            <span className="text-muted-foreground">Анализируем...</span>
          </div>
        ) : (
          <div className="space-y-3">
            {analysis?.split('\n\n').map((p, i) => (
              <p key={i} className="text-sm leading-relaxed">{p}</p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## 💰 Экономика ИИ

### Стоимость с GPT-4o-mini

```
Промт: ~400 токенов × $0.15/1M = $0.00006
Ответ: ~300 токенов × $0.60/1M = $0.00018
────────────────────────────────────────
Итого за 1 запрос: $0.00024 ≈ 0.024 ₽
```

### Расчёт по трафику

| Трафик/день | Используют ИИ (30%) | Кэш (90%) | Реальных запросов | Стоимость/мес |
|-------------|---------------------|-----------|-------------------|---------------|
| 500 | 150 | 135 | 15 | ~15 ₽ |
| 2,000 | 600 | 540 | 60 | ~45 ₽ |
| 5,000 | 1,500 | 1,350 | 150 | ~110 ₽ |
| 10,000 | 3,000 | 2,700 | 300 | ~220 ₽ |

**Вывод:** Благодаря кэшированию стоимость минимальна!

---

## 📊 Сравнение подходов

| Аспект | Без рекомендаций | Простые (Фаза 2) | ИИ (Фаза 3) |
|--------|------------------|------------------|-------------|
| Стоимость/мес | 0 ₽ | 0 ₽ | 50-200 ₽ |
| Персонализация | ❌ | Средняя | ✅ Высокая |
| Контроль | — | ✅ Полный | Частичный |
| Уникальность | Низкая | Высокая | ✅ Очень высокая |
| Сложность | — | Низкая | Средняя |

---

## ✅ Чек-лист внедрения

### Фаза 2 (Месяц 3-6)
```
□ Написать рекомендации для калькулятора калорий
□ Написать рекомендации для ИМТ
□ Написать рекомендации для беременности
□ Создать компонент SimpleRecommendations
□ Настроить A/B тест
□ Добавить опрос
□ Настроить цели в Метрике
□ Запустить тест на 2-4 недели
□ Собрать минимум 1000 пользователей на вариант
□ Проанализировать результаты
```

### Фаза 3 (Месяц 7+, если A/B успешен)
```
□ Получить API ключ OpenAI
□ Настроить Vercel KV или Redis для кэша
□ Создать промты для всех калькуляторов
□ Создать API route /api/ai/analyze
□ Создать компонент AIAnalysis
□ Протестировать на 5% трафика
□ Масштабировать если всё ОК
```

---

*Версия 1.0 | Январь 2025*
