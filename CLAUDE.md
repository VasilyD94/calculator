# 🧮 CLAUDE.md — Инструкции для Claude Code

## Проект: Калькуляторы онлайн (мультитематический сайт)

> **Текущий фокус:** Здоровье (25 калькуляторов)  
> **Расширение:** Строительство, финансы, авто (позже)  
> **Цель:** Создать современный сайт калькуляторов, который обойдёт beregifiguru.ru и calcus.ru за счёт дизайна, скорости и UX.

---

## 🔄 Git-воркфлоу (ОБЯЗАТЕЛЬНО!)

```
ПРАВИЛО: После внедрения каждой фичи или компонента:
1. Протестировать (npm run build / npm run dev — убедиться что работает)
2. Закоммитить с осмысленным сообщением
3. Запушить в GitHub

НЕ НАКАПЛИВАТЬ изменения! Каждая рабочая фича = отдельный коммит + пуш.

Репозиторий: GitHub (инициализирован при старте проекта)
```

---

## 🌐 Домен и структура

```
ДОМЕН: Нейтральный (mycalc.ru, calcbox.ru, vsecalc.ru)

СТРУКТУРА URL:
/
├── /zdorovye/                   ← Текущий фокус
│   ├── /pitanie/
│   │   ├── /kalkulyator-kalorij/
│   │   └── ...
│   ├── /telo/
│   ├── /beremennost/
│   └── ...
├── /stroitelstvo/               ← Позже (месяц 12+)
├── /finansy/                    ← Ещё позже
└── /avto/
```

---

## 🎯 Конкурентное позиционирование

```
НАША ПОЗИЦИЯ:
"Самые красивые и быстрые калькуляторы здоровья 
 с понятными результатами — без регистрации"

ОТСТРОЙКА ОТ КОНКУРЕНТОВ:
┌─────────────────┬────────────────────┬────────────────────┐
│ Конкурент       │ Их слабость        │ Наше преимущество  │
├─────────────────┼────────────────────┼────────────────────┤
│ beregifiguru.ru │ Дизайн 2010 года   │ Современный UI     │
│ calcus.ru       │ Мало контента      │ SEO-тексты 1500+   │
│ fatsecret.ru    │ Сложный, приложение│ Простой веб        │
│ 7ya.ru          │ Калькуляторы сбоку │ Фокус на них       │
└─────────────────┴────────────────────┴────────────────────┘
```

---

## 🛠 Технологический стек

```bash
# Установка проекта
npx create-next-app@latest health-calculators --typescript --tailwind --eslint --app --src-dir

cd health-calculators

# UI компоненты (shadcn/ui) — ВАЖНО: сначала init!
npx shadcn@latest init
npx shadcn@latest add button card input label select slider tabs badge alert form progress tooltip

# Дополнительные зависимости
npm install react-hook-form @hookform/resolvers zod date-fns lucide-react framer-motion recharts

# Оптимизация
npm install @vercel/analytics
```

### Почему этот стек

| Технология | Зачем | Преимущество над конкурентами |
|------------|-------|------------------------------|
| Next.js 14+ (App Router) | SSG, быстрая загрузка | beregifiguru грузится 5+ сек, мы < 2 сек |
| TypeScript | Надёжность кода | Меньше багов |
| Tailwind CSS | Быстрая стилизация | Консистентный дизайн |
| shadcn/ui | Красивые компоненты | Современный вид vs устаревший UI конкурентов |
| Framer Motion | Анимации | Живой интерфейс vs статичные страницы |
| React Hook Form + Zod | Формы и валидация | Мгновенная валидация |
| Recharts | Графики | Визуализация результатов |

---

## 🎨 Настройка shadcn/ui (КРИТИЧЕСКИ ВАЖНО)

### Что такое shadcn/ui

```
ВАЖНО ПОНИМАТЬ:

shadcn/ui — это НЕ npm-библиотека, а ГЕНЕРАТОР компонентов.

Когда ты делаешь: npx shadcn@latest add button
Он создаёт ФАЙЛ: /components/ui/button.tsx
Со ВСЕМИ стилями и анимациями внутри.

Компоненты приходят ПОЛНОСТЬЮ стилизованные — 
как на демо-сайте ui.shadcn.com
```

### Пошаговая установка

```bash
# ШАГ 1: Создать проект Next.js
npx create-next-app@latest my-calc --typescript --tailwind --eslint --app --src-dir
cd my-calc

# ШАГ 2: Инициализировать shadcn (ОБЯЗАТЕЛЬНО перед добавлением компонентов!)
npx shadcn@latest init
```

### Ответы на вопросы при `init`

```
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate (или Zinc/Neutral)
✔ Would you like to use CSS variables for theming? › yes  ← ОБЯЗАТЕЛЬНО yes
```

### Что создаётся при `init`

**1. CSS переменные в `app/globals.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... тёмная тема */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**2. Конфиг Tailwind (`tailwind.config.ts`):**
```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

**3. Утилиты (`lib/utils.ts`):**
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**4. Конфиг компонентов (`components.json`):**
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Добавление компонентов

```bash
# После init добавляем нужные компоненты
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add slider
npx shadcn@latest add tabs
npx shadcn@latest add badge
npx shadcn@latest add progress
npx shadcn@latest add tooltip
npx shadcn@latest add alert

# Или все сразу
npx shadcn@latest add button card slider tabs badge progress tooltip alert input label select form
```

### Проверка — компоненты должны выглядеть стильно

```tsx
// app/page.tsx — тест что всё работает
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <Card className="w-[400px] mx-auto">
        <CardHeader>
          <CardTitle>Тест shadcn/ui</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Кнопки с разными вариантами */}
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          
          {/* Слайдер */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Слайдер</label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
```

**Если всё правильно:**
- Кнопки имеют hover-эффекты и transitions
- Карточка с тенью и скруглением
- Слайдер интерактивный и стильный
- Фон страницы берётся из CSS-переменной

### Частые проблемы и решения

**Проблема 1: Компоненты без стилей (голые)**
```
ПРИЧИНА: Не запустили `npx shadcn@latest init` перед добавлением компонентов

РЕШЕНИЕ: 
1. Удалить папку components/ui
2. Запустить npx shadcn@latest init
3. Заново добавить компоненты
```

**Проблема 2: Стили не применяются**
```
ПРИЧИНА: Не импортирован globals.css

РЕШЕНИЕ: Проверить app/layout.tsx
import "./globals.css"  // ← Должно быть!
```

**Проблема 3: Tailwind не видит классы компонентов**
```
ПРИЧИНА: Неправильный content в tailwind.config

РЕШЕНИЕ: Проверить что есть:
content: [
  "./components/**/*.{ts,tsx}",  // ← Обязательно
  "./app/**/*.{ts,tsx}",
]
```

**Проблема 4: Ошибка с cn() или clsx**
```
ПРИЧИНА: Не установлены зависимости

РЕШЕНИЕ:
npm install clsx tailwind-merge
```

### Кастомизация цветов (опционально)

Для проекта калькуляторов можно настроить свою палитру:

```css
/* app/globals.css — кастомные цвета */
@layer base {
  :root {
    /* Основной цвет — зелёный для здоровья */
    --primary: 142 76% 36%;           /* зелёный */
    --primary-foreground: 0 0% 100%;  /* белый текст */
    
    /* Акцентные цвета для результатов */
    --success: 142 76% 36%;           /* зелёный — норма */
    --warning: 38 92% 50%;            /* жёлтый — внимание */
    --danger: 0 84% 60%;              /* красный — опасность */
  }
}
```

### Анимации с Framer Motion

shadcn использует базовые Tailwind-анимации. Для более сложных — Framer Motion:

```tsx
// Анимированная карточка результата
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function AnimatedResultCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <Card className="overflow-hidden">
        {children}
      </Card>
    </motion.div>
  )
}

// Анимированный счётчик числа
import { useEffect, useState } from "react"

export function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  
  useEffect(() => {
    const duration = 500
    const steps = 20
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.round(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <span>{display.toLocaleString('ru-RU')}</span>
}
```

---

## 🚀 Киллер-фичи проекта

### Уникальные фичи (чего НЕТ у конкурентов)

```
┌─────────────────────────────────────────────────────────────────┐
│  ФИЧА                        │  ФАЗА       │  ПРИОРИТЕТ        │
├──────────────────────────────┼─────────────┼───────────────────┤
│  Сравнение формул            │  MVP        │  🔴 Критично      │
│  Расчёт в реальном времени   │  MVP        │  🔴 Критично      │
│  Визуальная шкала результата │  MVP        │  🔴 Критично      │
│  Экспорт в PDF               │  MVP        │  🟡 Важно         │
│  Режим "Что если"            │  Фаза 2     │  🟡 Важно         │
│  Календарь беременности      │  Фаза 2     │  🟡 Важно         │
│  Сравнение "Ты vs Норма"     │  Фаза 2     │  🟢 Желательно    │
│  Простые рекомендации        │  Фаза 2     │  🟡 Важно (A/B)   │
│  ИИ-анализ результатов       │  Фаза 3     │  🟡 Важно         │
└──────────────────────────────┴─────────────┴───────────────────┘
```

### 🤖 Стратегия рекомендаций и ИИ

**Подробная документация:** [AI_RECOMMENDATIONS.md](./docs/AI_RECOMMENDATIONS.md)

```
ПОЭТАПНЫЙ ПЛАН:

Фаза 1 (MVP):     Без рекомендаций — фокус на базовых фичах
                           ↓
Фаза 2 (Мес 3-6): Простые рекомендации (if/else) + A/B тест + опрос
                           ↓
Фаза 3 (Мес 7+):  ИИ авто-рекомендации (только если A/B успешен!)
```

**Критерии перехода к ИИ:**
- Время на странице выросло на 20%+
- Отказы снизились на 10%+
- В опросе 60%+ ответили "да, хочу рекомендации"
- Минимум 1000 пользователей на каждый вариант A/B теста

**Стоимость ИИ (GPT-4o-mini + кэширование):**
- При 5,000 пользователей/день: ~100 ₽/мес
- Благодаря кэшированию 90%+ запросов — почти бесплатно

---

## 🧠 Система рекомендаций (поэтапное внедрение)

### Обзор стратегии

```
ПОЭТАПНЫЙ ПЛАН:

┌─────────────────────────────────────────────────────────────────┐
│  ФАЗА 1 (MVP): Без рекомендаций                                │
│  ─────────────────────────────────────────────────────────────  │
│  • Только калькуляторы с базовыми киллер-фичами               │
│  • Сравнение формул, визуальные шкалы, PDF                    │
│  • Набираем трафик и аудиторию                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  ФАЗА 2: Простые рекомендации + A/B тесты                      │
│  ─────────────────────────────────────────────────────────────  │
│  • Заранее написанные тексты по условиям (if/else)            │
│  • A/B тест: с рекомендациями vs без                          │
│  • Опрос пользователей: "Хотели бы ИИ-помощника?"             │
│  • Анализ метрик (время на странице, возвраты)                │
│  • Стоимость: 0 ₽                                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  ФАЗА 3: ИИ-анализ (если A/B успешен)                          │
│  ─────────────────────────────────────────────────────────────  │
│  • Персональный анализ на основе результатов калькулятора     │
│  • БЕЗ чата — только авто-генерация по данным                 │
│  • Кэширование 90%+ запросов                                   │
│  • Стоимость: 100-500 ₽/мес при большом трафике               │
└─────────────────────────────────────────────────────────────────┘
```

---

### Фаза 2: Простые рекомендации по условиям

**Принцип:** Заранее написанные тексты, которые показываются по условиям на основе результатов калькулятора. Без API, без расходов.

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
  deficit?: number
}

interface Recommendation {
  icon: string
  title: string
  text: string
  type: 'info' | 'warning' | 'success' | 'tip'
}

export function getCalorieRecommendations(data: CalorieData): Recommendation[] {
  const recommendations: Recommendation[] = []
  
  // --- РЕКОМЕНДАЦИИ ПО ИМТ ---
  
  if (data.bmi < 18.5) {
    recommendations.push({
      icon: '⚠️',
      title: 'Недостаточный вес',
      text: `Ваш ИМТ ${data.bmi.toFixed(1)} указывает на дефицит массы тела. Рекомендуем увеличить калорийность на 300-500 ккал выше нормы и добавить силовые тренировки для набора мышечной массы.`,
      type: 'warning'
    })
  }
  
  if (data.bmi >= 25 && data.bmi < 30) {
    recommendations.push({
      icon: '📊',
      title: 'Избыточный вес',
      text: `Ваш ИМТ ${data.bmi.toFixed(1)} — это начало избыточного веса. Хорошая новость: для возврата в норму достаточно сбросить ${(data.weight - (data.height/100)**2 * 24.9).toFixed(0)} кг. При дефиците 300-500 ккал это займёт ${Math.ceil((data.weight - (data.height/100)**2 * 24.9) / 0.5)} недель.`,
      type: 'info'
    })
  }
  
  if (data.bmi >= 30) {
    recommendations.push({
      icon: '⚠️',
      title: 'Ожирение',
      text: 'При ИМТ выше 30 рекомендуем проконсультироваться с врачом перед началом диеты. Безопасный темп снижения веса — не более 0.5-1 кг в неделю.',
      type: 'warning'
    })
  }
  
  // --- РЕКОМЕНДАЦИИ ПО ВОЗРАСТУ ---
  
  if (data.age >= 30 && data.age < 40) {
    recommendations.push({
      icon: '⚡',
      title: 'Особенность возраста',
      text: 'После 30 лет метаболизм замедляется на 3-5% каждые 10 лет. Чтобы компенсировать это, важно сохранять мышечную массу — добавьте силовые упражнения 2-3 раза в неделю.',
      type: 'info'
    })
  }
  
  if (data.age >= 40 && data.age < 50) {
    recommendations.push({
      icon: '⚡',
      title: 'Особенность возраста',
      text: 'После 40 лет организм теряет ~1% мышечной массы в год без тренировок. Белок становится критически важен — старайтесь получать минимум 1.2г на кг веса.',
      type: 'info'
    })
  }
  
  if (data.age >= 50) {
    recommendations.push({
      icon: '⚡',
      title: 'Особенность возраста',
      text: 'После 50 лет не рекомендуется резкое снижение калорий — это может привести к потере мышц и костной массы. Оптимальный дефицит — не более 300 ккал.',
      type: 'warning'
    })
  }
  
  // --- РЕКОМЕНДАЦИИ ПО АКТИВНОСТИ ---
  
  if (data.activity === 'sedentary' && data.goal === 'lose') {
    recommendations.push({
      icon: '🚶',
      title: 'Добавьте движение',
      text: 'При сидячем образе жизни простое добавление 30 минут ходьбы в день увеличит расход на 150-200 ккал. Это позволит есть больше или худеть быстрее.',
      type: 'tip'
    })
  }
  
  if (data.activity === 'very_active' || data.activity === 'extra_active') {
    recommendations.push({
      icon: '💪',
      title: 'Высокая активность',
      text: 'При вашем уровне активности критически важно получать достаточно белка (1.6-2г на кг веса) и не уходить в сильный дефицит — это снизит производительность и восстановление.',
      type: 'tip'
    })
  }
  
  // --- РЕКОМЕНДАЦИИ ПО ЦЕЛИ ---
  
  if (data.goal === 'lose' && data.deficit && data.deficit > 700) {
    recommendations.push({
      icon: '⚠️',
      title: 'Слишком большой дефицит',
      text: `Дефицит ${data.deficit} ккал агрессивен и может привести к потере мышц, замедлению метаболизма и срывам. Рекомендуем дефицит 300-500 ккал для устойчивого результата.`,
      type: 'warning'
    })
  }
  
  if (data.goal === 'lose' && data.targetCalories < 1200 && data.gender === 'female') {
    recommendations.push({
      icon: '🚨',
      title: 'Слишком низкая калорийность',
      text: 'Калорийность ниже 1200 ккал для женщин опасна без наблюдения врача. Это может привести к дефициту питательных веществ и гормональным нарушениям.',
      type: 'warning'
    })
  }
  
  if (data.goal === 'lose' && data.targetCalories < 1500 && data.gender === 'male') {
    recommendations.push({
      icon: '🚨',
      title: 'Слишком низкая калорийность',
      text: 'Калорийность ниже 1500 ккал для мужчин не рекомендуется без наблюдения врача. Это может привести к потере мышц и замедлению метаболизма.',
      type: 'warning'
    })
  }
  
  if (data.goal === 'gain') {
    recommendations.push({
      icon: '🍽️',
      title: 'Для набора массы',
      text: `Профицит 300-500 ккал оптимален для набора мышечной массы без лишнего жира. При ${data.targetCalories} ккал старайтесь получать ${Math.round(data.weight * 1.6)}-${Math.round(data.weight * 2)}г белка в день.`,
      type: 'tip'
    })
  }
  
  // --- РЕКОМЕНДАЦИИ ПО БЕЛКУ ---
  
  const minProtein = data.goal === 'lose' 
    ? Math.round(data.weight * 1.6) 
    : Math.round(data.weight * 1.2)
  
  recommendations.push({
    icon: '🥩',
    title: 'Норма белка',
    text: `При вашей цели (${data.goal === 'lose' ? 'похудение' : data.goal === 'gain' ? 'набор массы' : 'поддержание'}) рекомендуем минимум ${minProtein}г белка в день. Это примерно ${Math.round(minProtein / 25)} порций мяса/рыбы/творога.`,
    type: 'info'
  })
  
  return recommendations
}
```

**Рекомендации для других калькуляторов:**

```typescript
// lib/recommendations/bmi.ts

export function getBMIRecommendations(data: BMIData): Recommendation[] {
  const recommendations: Recommendation[] = []
  
  // Идеальный вес
  const idealMin = Math.round((data.height / 100) ** 2 * 18.5)
  const idealMax = Math.round((data.height / 100) ** 2 * 24.9)
  
  recommendations.push({
    icon: '🎯',
    title: 'Ваш идеальный диапазон',
    text: `Для роста ${data.height} см здоровый вес: ${idealMin}-${idealMax} кг. ${
      data.weight > idealMax 
        ? `Для достижения верхней границы нужно сбросить ${data.weight - idealMax} кг.`
        : data.weight < idealMin
        ? `Для достижения нижней границы нужно набрать ${idealMin - data.weight} кг.`
        : 'Вы в идеальном диапазоне!'
    }`,
    type: data.weight >= idealMin && data.weight <= idealMax ? 'success' : 'info'
  })
  
  // Ограничения ИМТ
  recommendations.push({
    icon: '💡',
    title: 'Важно понимать',
    text: 'ИМТ не учитывает мышечную массу, возраст и распределение жира. Если вы тренируетесь, ориентируйтесь также на обхват талии и процент жира.',
    type: 'info'
  })
  
  // Обхват талии
  if (data.gender === 'male') {
    recommendations.push({
      icon: '📏',
      title: 'Обхват талии',
      text: 'Для мужчин здоровый обхват талии — до 94 см. Выше 102 см — повышенный риск сердечно-сосудистых заболеваний.',
      type: 'tip'
    })
  } else {
    recommendations.push({
      icon: '📏',
      title: 'Обхват талии',
      text: 'Для женщин здоровый обхват талии — до 80 см. Выше 88 см — повышенный риск сердечно-сосудистых заболеваний.',
      type: 'tip'
    })
  }
  
  return recommendations
}

// lib/recommendations/pregnancy.ts

export function getPregnancyRecommendations(data: PregnancyData): Recommendation[] {
  const recommendations: Recommendation[] = []
  const week = data.currentWeek
  
  // По триместрам
  if (week <= 12) {
    recommendations.push({
      icon: '🌱',
      title: 'Первый триместр',
      text: 'Сейчас формируются все органы малыша. Важно: фолиевая кислота 400 мкг/день, отказ от алкоголя, ограничение кофеина до 200 мг/день.',
      type: 'info'
    })
  } else if (week <= 27) {
    recommendations.push({
      icon: '🌸',
      title: 'Второй триместр',
      text: 'Самый комфортный период! Малыш активно растёт. Добавьте в рацион продукты с железом и кальцием. Норма набора веса: 0.5 кг в неделю.',
      type: 'info'
    })
  } else {
    recommendations.push({
      icon: '🍼',
      title: 'Третий триместр',
      text: 'Финишная прямая! Малыш набирает вес. Избегайте переедания — это усложнит роды. Подготовьте сумку в роддом к 36 неделе.',
      type: 'info'
    })
  }
  
  // Конкретные недели
  if (week === 12 || week === 11 || week === 13) {
    recommendations.push({
      icon: '🏥',
      title: 'Время первого скрининга',
      text: 'На 11-13 неделе проводится первый скрининг: УЗИ + анализ крови. Это важно для оценки рисков хромосомных аномалий.',
      type: 'warning'
    })
  }
  
  if (week === 20 || week === 19 || week === 21) {
    recommendations.push({
      icon: '🏥',
      title: 'Время второго скрининга',
      text: 'На 18-21 неделе проводится второй скрининг. На УЗИ можно узнать пол малыша и проверить развитие всех органов.',
      type: 'warning'
    })
  }
  
  if (week >= 30 && week <= 32) {
    recommendations.push({
      icon: '📋',
      title: 'Декретный отпуск',
      text: 'С 30 недели вы можете оформить декретный отпуск. Подготовьте документы заранее.',
      type: 'tip'
    })
  }
  
  return recommendations
}
```

**UI компонент для простых рекомендаций:**

```tsx
// components/features/SimpleRecommendations.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface Recommendation {
  icon: string
  title: string
  text: string
  type: 'info' | 'warning' | 'success' | 'tip'
}

interface SimpleRecommendationsProps {
  recommendations: Recommendation[]
}

export function SimpleRecommendations({ recommendations }: SimpleRecommendationsProps) {
  if (recommendations.length === 0) return null
  
  const getBgColor = (type: Recommendation['type']) => {
    switch (type) {
      case 'warning': return 'bg-orange-50 border-orange-200'
      case 'success': return 'bg-green-50 border-green-200'
      case 'tip': return 'bg-blue-50 border-blue-200'
      default: return 'bg-muted/50 border-border'
    }
  }
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="w-5 h-5 text-primary" />
          Рекомендации
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, index) => (
          <div 
            key={index}
            className={`p-3 rounded-lg border ${getBgColor(rec.type)}`}
          >
            <div className="flex gap-2">
              <span className="text-lg flex-shrink-0">{rec.icon}</span>
              <div>
                <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground">{rec.text}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Использование:
import { getCalorieRecommendations } from '@/lib/recommendations/calories'

const recommendations = getCalorieRecommendations({
  gender: 'male',
  age: 35,
  weight: 82,
  height: 178,
  bmi: 25.9,
  activity: 'sedentary',
  goal: 'lose',
  tdee: 2136,
  targetCalories: 1815,
  deficit: 321,
})

<SimpleRecommendations recommendations={recommendations} />
```

---

### A/B тестирование рекомендаций

```typescript
// lib/ab-testing/recommendations.ts

// Определяем группу пользователя
export function getABGroup(userId: string): 'control' | 'test' {
  // Простой детерминированный хеш для консистентности
  const hash = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return hash % 2 === 0 ? 'control' : 'test'
}

// Хук для A/B теста
export function useABTest(testName: string) {
  const [group, setGroup] = useState<'control' | 'test'>('control')
  
  useEffect(() => {
    // Получаем или создаём userId
    let userId = localStorage.getItem('ab_user_id')
    if (!userId) {
      userId = crypto.randomUUID()
      localStorage.setItem('ab_user_id', userId)
    }
    
    setGroup(getABGroup(userId))
    
    // Отправляем в аналитику
    trackEvent('ab_test_assigned', { testName, group })
  }, [testName])
  
  return group
}

// Использование в компоненте калькулятора:
function CalorieCalculator() {
  const abGroup = useABTest('recommendations_v1')
  const [result, setResult] = useState(null)
  
  // ... логика калькулятора ...
  
  return (
    <div>
      <ResultCard result={result} />
      
      {/* Показываем рекомендации только группе test */}
      {abGroup === 'test' && result && (
        <SimpleRecommendations 
          recommendations={getCalorieRecommendations(result)} 
        />
      )}
    </div>
  )
}
```

**Опрос пользователей:**

```tsx
// components/features/FeatureSurvey.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"

export function FeatureSurvey() {
  const [isVisible, setIsVisible] = useState(true)
  const [answered, setAnswered] = useState(false)
  
  // Показываем только если не отвечали ранее
  useEffect(() => {
    if (localStorage.getItem('survey_ai_answered')) {
      setIsVisible(false)
    }
  }, [])
  
  const handleAnswer = (answer: 'yes' | 'no' | 'maybe') => {
    // Отправляем в аналитику
    trackEvent('survey_ai_assistant', { answer })
    localStorage.setItem('survey_ai_answered', 'true')
    setAnswered(true)
    
    setTimeout(() => setIsVisible(false), 2000)
  }
  
  if (!isVisible) return null
  
  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-base">
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Помогите нам стать лучше
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {answered ? (
          <p className="text-sm text-muted-foreground">Спасибо за ответ! 🙏</p>
        ) : (
          <>
            <p className="text-sm mb-3">
              Хотели бы вы получать персональные рекомендации от ИИ-помощника 
              на основе ваших результатов?
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => handleAnswer('yes')}>
                Да, интересно
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

---

### Фаза 3: ИИ-анализ результатов

**Условие запуска:** A/B тест показал улучшение метрик + >50% положительных ответов в опросе.

**Принцип:** Автоматическая генерация персонального анализа на основе результатов калькулятора. БЕЗ чата — пользователь ничего не вводит.

```
СХЕМА РАБОТЫ:

[Пользователь заполняет калькулятор]
              ↓
[Результат: цифры + шкала]
              ↓
[Кнопка "🤖 Показать ИИ-анализ"]
              ↓
[Генерируем промт из данных калькулятора]
              ↓
[Проверяем кэш → если нет, запрос к API]
              ↓
[Показываем персональный текст]
```

**Промты для ИИ:**

```typescript
// lib/ai/prompts.ts

export const AI_PROMPTS = {
  
  calories: (data: CalorieData) => `Ты — эксперт по питанию. Дай персональный анализ результатов калькулятора калорий.

ДАННЫЕ ПОЛЬЗОВАТЕЛЯ:
- Пол: ${data.gender === 'male' ? 'мужчина' : 'женщина'}
- Возраст: ${data.age} лет
- Рост: ${data.height} см
- Вес: ${data.weight} кг
- Уровень активности: ${data.activity}
- Цель: ${data.goal === 'lose' ? 'похудение' : data.goal === 'gain' ? 'набор массы' : 'поддержание'}

РАССЧИТАННЫЕ ПОКАЗАТЕЛИ:
- Базовый метаболизм (BMR): ${data.bmr} ккал
- Суточная норма (TDEE): ${data.tdee} ккал
- Рекомендуемая калорийность: ${data.targetCalories} ккал
- ИМТ: ${data.bmi.toFixed(1)}
- Идеальный вес: ${data.idealWeightRange.min}-${data.idealWeightRange.max} кг

ФОРМАТ ОТВЕТА (строго соблюдай):
📊 Ваша ситуация
[2-3 предложения о текущем состоянии с конкретными цифрами]

⚡ Особенность вашего случая  
[1-2 предложения про возраст/пол/активность]

🎯 Конкретный план
• [Рекомендация 1 с цифрами]
• [Рекомендация 2 с цифрами]
• [Рекомендация 3 с цифрами]

⚠️ Важно
[1 предложение — что НЕ делать или о чём помнить]

ПРАВИЛА:
- Обращайся на "вы"
- Используй конкретные цифры из данных
- Длина: 150-200 слов
- НЕ используй markdown (жирный, курсив) — только эмодзи
- Пиши простым языком без медицинских терминов`,

  bmi: (data: BMIData) => `Ты — эксперт по здоровью. Проанализируй результат расчёта ИМТ.

ДАННЫЕ:
- Пол: ${data.gender === 'male' ? 'мужчина' : 'женщина'}
- Возраст: ${data.age} лет
- Рост: ${data.height} см
- Вес: ${data.weight} кг
- ИМТ: ${data.bmi.toFixed(1)}
- Категория: ${data.category}
- Идеальный вес: ${data.idealRange.min}-${data.idealRange.max} кг

ФОРМАТ ОТВЕТА:
📊 Ваш результат в контексте
[Что означает этот ИМТ, 2-3 предложения]

👥 Сравнение
[Как ваш показатель относительно среднего для возраста/пола]

🎯 Цель
[Какой вес был бы оптимален, конкретные цифры]

💡 Нюанс
[Ограничения ИМТ как метрики, что ещё учитывать]

Длина: 120-150 слов. Простой язык, конкретные цифры.`,

  pregnancy: (data: PregnancyData) => `Ты — дружелюбный помощник для беременных. Дай тёплый, поддерживающий анализ.

ДАННЫЕ:
- Текущая неделя: ${data.currentWeek}
- День: ${data.currentDay}
- Триместр: ${data.trimester}
- ПДР: ${data.dueDate}
- Дней до родов: ${data.daysLeft}

ФОРМАТ ОТВЕТА:
🎉 [Тёплое приветствие с текущей неделей]

📅 Что происходит сейчас
[2-3 интересных факта о развитии малыша на этой неделе]

✅ Что уже позади
[Какие важные этапы пройдены]

📋 Что впереди
[Ближайшие 2-4 недели — события, обследования]

💡 Совет на этот период
[1 конкретная рекомендация]

ПРАВИЛА:
- Тон: тёплый, поддерживающий, радостный
- НЕ давай медицинских советов, только общую информацию
- Длина: 150-180 слов`,

  whatif: (data: WhatIfData) => `Ты — мотивирующий тренер по питанию. Проанализируй план похудения.

ДАННЫЕ:
- Текущий вес: ${data.currentWeight} кг
- Целевой вес: ${data.targetWeight} кг
- Нужно сбросить: ${data.weightToLose} кг
- Дефицит калорий: ${data.deficit} ккал/день
- Срок: ${data.weeksNeeded} недель
- Дата цели: ${data.targetDate}
- Потеря в неделю: ${data.weeklyLoss.toFixed(2)} кг

ФОРМАТ ОТВЕТА:
🎯 Ваша цель
[Оценка реалистичности, 2 предложения]

📈 Ваш путь
[Визуализация: через месяц X кг, через два Y кг]

💪 Что поможет
• [Совет 1]
• [Совет 2]  
• [Совет 3]

⚠️ Возможные сложности
[На какой неделе обычно сложнее, как справиться]

Тон: мотивирующий, но реалистичный. Длина: 130-160 слов.`,

}
```

**API Route:**

```typescript
// app/api/ai/analyze/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'  // или другой кэш
import OpenAI from 'openai'
import { AI_PROMPTS } from '@/lib/ai/prompts'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Генерируем ключ кэша с "бакетами" для группировки похожих запросов
function getCacheKey(type: string, data: Record<string, any>): string {
  switch (type) {
    case 'calories':
      const ageBucket = Math.floor(data.age / 5) * 5
      const bmiBucket = Math.floor(data.bmi / 2) * 2
      return `ai:calories:${data.gender}:${ageBucket}:${bmiBucket}:${data.activity}:${data.goal}`
    
    case 'bmi':
      const bmiCat = data.bmi < 18.5 ? 'under' : data.bmi < 25 ? 'normal' : data.bmi < 30 ? 'over' : 'obese'
      return `ai:bmi:${data.gender}:${Math.floor(data.age / 10) * 10}:${bmiCat}`
    
    case 'pregnancy':
      return `ai:pregnancy:${data.currentWeek}`
    
    default:
      return `ai:${type}:${JSON.stringify(data)}`
  }
}

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()
    
    // Валидация
    if (!type || !data || !AI_PROMPTS[type as keyof typeof AI_PROMPTS]) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    
    // Проверяем кэш
    const cacheKey = getCacheKey(type, data)
    const cached = await redis.get(cacheKey)
    
    if (cached) {
      return NextResponse.json({ analysis: cached, cached: true })
    }
    
    // Генерируем промт
    const promptFn = AI_PROMPTS[type as keyof typeof AI_PROMPTS]
    const prompt = promptFn(data)
    
    // Запрос к OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',  // Дешёвая модель, достаточная для рекомендаций
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 400,
      temperature: 0.7,
    })
    
    const analysis = completion.choices[0]?.message?.content || ''
    
    // Сохраняем в кэш на 24 часа
    await redis.set(cacheKey, analysis, { ex: 86400 })
    
    return NextResponse.json({ analysis, cached: false })
    
  } catch (error) {
    console.error('AI Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to generate analysis' }, 
      { status: 500 }
    )
  }
}
```

**UI компонент для ИИ-анализа:**

```tsx
// components/features/AIAnalysis.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2, RefreshCw } from "lucide-react"

interface AIAnalysisProps {
  calculatorType: 'calories' | 'bmi' | 'pregnancy' | 'whatif'
  data: Record<string, any>
  /** Показывать сразу или по клику */
  autoLoad?: boolean
}

export function AIAnalysis({ calculatorType, data, autoLoad = false }: AIAnalysisProps) {
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(autoLoad)
  const [error, setError] = useState<string | null>(null)

  const fetchAnalysis = async () => {
    setIsLoading(true)
    setIsVisible(true)
    setError(null)
    
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: calculatorType, data }),
      })
      
      if (!response.ok) throw new Error('Failed to fetch')
      
      const result = await response.json()
      setAnalysis(result.analysis)
      
    } catch (err) {
      setError('Не удалось загрузить анализ. Попробуйте позже.')
    } finally {
      setIsLoading(false)
    }
  }

  // Автозагрузка при изменении данных
  useEffect(() => {
    if (autoLoad && data) {
      fetchAnalysis()
    }
  }, [autoLoad, JSON.stringify(data)])

  if (!isVisible) {
    return (
      <Button 
        onClick={fetchAnalysis}
        variant="outline"
        className="w-full gap-2 h-12 text-base border-primary/30 hover:bg-primary/5"
      >
        <Sparkles className="w-5 h-5 text-primary" />
        Показать ИИ-анализ
      </Button>
    )
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Персональный анализ
          </span>
          {!isLoading && analysis && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={fetchAnalysis}
              className="h-8 w-8 p-0"
              title="Обновить анализ"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="text-muted-foreground">Анализируем ваши данные...</span>
          </div>
        ) : error ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-3">{error}</p>
            <Button variant="outline" size="sm" onClick={fetchAnalysis}>
              Попробовать снова
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {analysis?.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

**Расчёт стоимости ИИ:**

```
СТОИМОСТЬ С GPT-4o-mini:

Промт: ~400 токенов × $0.15/1M = $0.00006
Ответ: ~300 токенов × $0.60/1M = $0.00018
Итого за 1 запрос: $0.00024 ≈ 0.024 ₽

РАСЧЁТ (5,000 посетителей/день):
- 30% используют ИИ = 1,500 запросов
- Кэширование 90% = 150 реальных запросов
- Стоимость: 150 × 0.024 ₽ = 3.6 ₽/день
- В месяц: ~110 ₽

РАСЧЁТ (10,000 посетителей/день):
- 30% × 10% = 300 реальных запросов/день
- В месяц: ~220 ₽

ВЫВОД: Стоимость минимальна благодаря кэшированию!
```

**Что это:** Показываем результат сразу по нескольким формулам с объяснением разницы.

**Где использовать:** Калькулятор калорий, идеальный вес, базовый метаболизм

```tsx
// components/features/FormulaComparison.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface FormulaResult {
  name: string
  value: number
  description: string
  isRecommended?: boolean
}

interface FormulaComparisonProps {
  results: FormulaResult[]
  unit: string
}

export function FormulaComparison({ results, unit }: FormulaComparisonProps) {
  const min = Math.min(...results.map(r => r.value))
  const max = Math.max(...results.map(r => r.value))
  const recommended = results.find(r => r.isRecommended)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Сравнение формул
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>Разные формулы дают разные результаты. 
                Мы рекомендуем формулу Миффлина-Сан Жеора как наиболее 
                точную для современных людей.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {results.map((result) => (
            <div
              key={result.name}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                result.isRecommended 
                  ? 'bg-primary/5 border-primary' 
                  : 'bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{result.name}</span>
                {result.isRecommended && (
                  <Badge variant="default" className="text-xs">
                    Рекомендуем
                  </Badge>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-bold">
                  {result.value.toLocaleString('ru-RU')}
                </span>
                <span className="text-muted-foreground ml-1">{unit}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Диапазон */}
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Диапазон значений:</span>
            <span className="font-medium">
              {min.toLocaleString('ru-RU')} — {max.toLocaleString('ru-RU')} {unit}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Использование:
const calorieResults: FormulaResult[] = [
  { 
    name: "Миффлина-Сан Жеора", 
    value: 1847, 
    description: "Самая точная для современных людей",
    isRecommended: true 
  },
  { name: "Харриса-Бенедикта", value: 1921, description: "Классическая формула 1919 года" },
  { name: "Харриса-Бенедикта (1984)", value: 1889, description: "Пересмотренная версия" },
  { name: "Кетча-МакАрдла", value: 1756, description: "Учитывает процент жира" },
  { name: "ВОЗ", value: 1812, description: "Формула Всемирной организации здравоохранения" },
]

<FormulaComparison results={calorieResults} unit="ккал" />
```

---

### 2. Экспорт в PDF

**Что это:** Кнопка "Скачать PDF" генерирует красивый отчёт с результатами.

**Где использовать:** ВСЕ калькуляторы

**Библиотека:** `@react-pdf/renderer` или `html2canvas` + `jspdf`

```bash
npm install @react-pdf/renderer
# или для простого варианта:
npm install html2canvas jspdf
```

```tsx
// components/features/ExportPDF.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useState } from "react"

interface ExportPDFProps {
  /** ID элемента для экспорта */
  targetId: string
  /** Имя файла (без .pdf) */
  filename: string
  /** Заголовок в PDF */
  title: string
}

export function ExportPDF({ targetId, filename, title }: ExportPDFProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleExport = async () => {
    setIsLoading(true)
    
    try {
      const element = document.getElementById(targetId)
      if (!element) return
      
      // Создаём canvas из HTML
      const canvas = await html2canvas(element, {
        scale: 2, // Лучшее качество
        useCORS: true,
        logging: false,
      })
      
      // Создаём PDF
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })
      
      // Размеры
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 20
      
      // Заголовок
      pdf.setFontSize(18)
      pdf.text(title, pdfWidth / 2, 15, { align: 'center' })
      
      // Изображение результатов
      pdf.addImage(
        imgData, 
        'PNG', 
        imgX, 
        imgY, 
        imgWidth * ratio * 0.9, 
        imgHeight * ratio * 0.9
      )
      
      // Футер
      pdf.setFontSize(10)
      pdf.setTextColor(128, 128, 128)
      pdf.text(
        `Создано на mycalc.ru • ${new Date().toLocaleDateString('ru-RU')}`,
        pdfWidth / 2,
        pdfHeight - 10,
        { align: 'center' }
      )
      
      // Скачиваем
      pdf.save(`${filename}.pdf`)
      
    } catch (error) {
      console.error('Ошибка экспорта PDF:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Button 
      variant="outline" 
      onClick={handleExport}
      disabled={isLoading}
      className="gap-2"
    >
      <Download className="w-4 h-4" />
      {isLoading ? 'Создаём PDF...' : 'Скачать PDF'}
    </Button>
  )
}

// Использование в калькуляторе:
<div id="result-for-pdf">
  <ResultCard ... />
  <FormulaComparison ... />
</div>

<ExportPDF 
  targetId="result-for-pdf"
  filename="расчёт-калорий"
  title="Расчёт суточной нормы калорий"
/>
```

**Продвинутый вариант с @react-pdf/renderer:**

```tsx
// components/features/CaloriePDFReport.tsx
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet,
  pdf 
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#999',
  },
})

interface CalorieReportProps {
  data: {
    bmr: number
    tdee: number
    forLoss: number
    forGain: number
    protein: number
    fat: number
    carbs: number
    formulas: { name: string; value: number }[]
  }
  inputs: {
    gender: string
    age: number
    height: number
    weight: number
    activity: string
  }
}

export function CaloriePDFReport({ data, inputs }: CalorieReportProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Расчёт суточной нормы калорий</Text>
        
        {/* Входные данные */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Ваши данные:</Text>
          <Text>Пол: {inputs.gender === 'male' ? 'Мужской' : 'Женский'}</Text>
          <Text>Возраст: {inputs.age} лет</Text>
          <Text>Рост: {inputs.height} см</Text>
          <Text>Вес: {inputs.weight} кг</Text>
          <Text>Активность: {inputs.activity}</Text>
        </View>
        
        {/* Результаты */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Результаты:</Text>
          
          <View style={styles.row}>
            <Text>Базовый метаболизм (BMR)</Text>
            <Text style={styles.value}>{data.bmr} ккал</Text>
          </View>
          
          <View style={styles.row}>
            <Text>Суточная норма (TDEE)</Text>
            <Text style={styles.value}>{data.tdee} ккал</Text>
          </View>
          
          <View style={styles.row}>
            <Text>Для похудения (-15%)</Text>
            <Text style={styles.value}>{data.forLoss} ккал</Text>
          </View>
          
          <View style={styles.row}>
            <Text>Для набора массы (+15%)</Text>
            <Text style={styles.value}>{data.forGain} ккал</Text>
          </View>
        </View>
        
        {/* БЖУ */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>
            Рекомендуемое БЖУ (при {data.tdee} ккал):
          </Text>
          <Text>Белки: {data.protein} г</Text>
          <Text>Жиры: {data.fat} г</Text>
          <Text>Углеводы: {data.carbs} г</Text>
        </View>
        
        {/* Сравнение формул */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Сравнение формул:</Text>
          {data.formulas.map((formula) => (
            <View key={formula.name} style={styles.row}>
              <Text>{formula.name}</Text>
              <Text>{formula.value} ккал</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.footer}>
          Создано на mycalc.ru • {new Date().toLocaleDateString('ru-RU')}
        </Text>
      </Page>
    </Document>
  )
}

// Функция для скачивания
export async function downloadCaloriePDF(data: CalorieReportProps['data'], inputs: CalorieReportProps['inputs']) {
  const blob = await pdf(<CaloriePDFReport data={data} inputs={inputs} />).toBlob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'расчёт-калорий.pdf'
  link.click()
  URL.revokeObjectURL(url)
}
```

---

### 3. Режим "Что если" (WhatIfMode)

**Что это:** Пользователь задаёт цель → калькулятор показывает путь и сроки.

**Где использовать:** Калькулятор калорий, дефицит калорий

```tsx
// components/features/WhatIfMode.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Calendar, Target, AlertTriangle } from "lucide-react"

interface WhatIfModeProps {
  currentWeight: number
  tdee: number
}

export function WhatIfMode({ currentWeight, tdee }: WhatIfModeProps) {
  const [targetWeight, setTargetWeight] = useState(currentWeight - 5)
  const [deficit, setDeficit] = useState(500) // ккал/день
  
  // Расчёты
  const weightToLose = currentWeight - targetWeight
  const caloriesPerKg = 7700 // ккал в 1 кг жира
  const totalCaloriesToBurn = weightToLose * caloriesPerKg
  const daysNeeded = Math.ceil(totalCaloriesToBurn / deficit)
  const weeksNeeded = Math.ceil(daysNeeded / 7)
  const monthsNeeded = (daysNeeded / 30).toFixed(1)
  
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + daysNeeded)
  
  const dailyCalories = tdee - deficit
  const weeklyLoss = (deficit * 7) / caloriesPerKg
  
  // Предупреждения
  const isTooFast = deficit > 1000
  const isTooLow = dailyCalories < 1200
  const isHealthy = !isTooFast && !isTooLow && weeklyLoss <= 1
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Режим "Что если"
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Целевой вес */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Целевой вес</label>
            <span className="text-2xl font-bold">{targetWeight} кг</span>
          </div>
          <Slider
            value={[targetWeight]}
            onValueChange={(v) => setTargetWeight(v[0])}
            min={currentWeight - 30}
            max={currentWeight - 1}
            step={0.5}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>-30 кг</span>
            <span>-1 кг</span>
          </div>
        </div>
        
        {/* Дефицит калорий */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Дефицит калорий в день</label>
            <span className="text-2xl font-bold">{deficit} ккал</span>
          </div>
          <Slider
            value={[deficit]}
            onValueChange={(v) => setDeficit(v[0])}
            min={200}
            max={1200}
            step={50}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Медленно (200)</span>
            <span>Быстро (1200)</span>
          </div>
        </div>
        
        {/* Результаты прогноза */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <TrendingDown className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weightToLose.toFixed(1)} кг</div>
            <div className="text-xs text-muted-foreground">нужно сбросить</div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weeksNeeded} нед</div>
            <div className="text-xs text-muted-foreground">
              (~{monthsNeeded} мес)
            </div>
          </div>
        </div>
        
        {/* План питания */}
        <div className="p-4 border rounded-lg space-y-2">
          <h4 className="font-medium">Ваш план:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Калорий в день:</div>
            <div className="font-medium">{dailyCalories} ккал</div>
            
            <div>Потеря в неделю:</div>
            <div className="font-medium">{weeklyLoss.toFixed(2)} кг</div>
            
            <div>Дата достижения цели:</div>
            <div className="font-medium">
              {targetDate.toLocaleDateString('ru-RU', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </div>
        
        {/* Предупреждения */}
        {!isHealthy && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <div className="flex gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <div className="text-sm">
                {isTooFast && (
                  <p>⚠️ Дефицит больше 1000 ккал может привести к потере мышц и замедлению метаболизма.</p>
                )}
                {isTooLow && (
                  <p>⚠️ Калорийность ниже 1200 ккал опасна для здоровья без наблюдения врача.</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {isHealthy && (
          <Badge variant="secondary" className="w-full justify-center py-2">
            ✅ Здоровый темп похудения
          </Badge>
        )}
        
      </CardContent>
    </Card>
  )
}
```

**Визуальный график прогресса:**

```tsx
// components/features/WeightProgressChart.tsx
"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

interface WeightProgressChartProps {
  currentWeight: number
  targetWeight: number
  weeklyLoss: number
  weeks: number
}

export function WeightProgressChart({ 
  currentWeight, 
  targetWeight, 
  weeklyLoss, 
  weeks 
}: WeightProgressChartProps) {
  // Генерируем данные для графика
  const data = Array.from({ length: weeks + 1 }, (_, i) => {
    const weight = Math.max(targetWeight, currentWeight - (weeklyLoss * i))
    const date = new Date()
    date.setDate(date.getDate() + (i * 7))
    
    return {
      week: i,
      weight: Number(weight.toFixed(1)),
      date: date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
    }
  })
  
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
          />
          <YAxis 
            domain={[targetWeight - 2, currentWeight + 2]}
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background border rounded-lg p-2 shadow-lg">
                    <p className="font-medium">{payload[0].payload.date}</p>
                    <p className="text-primary">{payload[0].value} кг</p>
                  </div>
                )
              }
              return null
            }}
          />
          <ReferenceLine 
            y={targetWeight} 
            stroke="hsl(var(--primary))" 
            strokeDasharray="5 5"
            label={{ value: 'Цель', position: 'right' }}
          />
          <Line 
            type="monotone" 
            dataKey="weight" 
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
```

---

### 4. Сравнение "Ты vs Норма" (Percentile)

**Что это:** Показываем где пользователь находится относительно населения.

**Где использовать:** ИМТ, вес, рост, калории

```tsx
// components/features/PercentileComparison.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

interface PercentileComparisonProps {
  value: number
  percentile: number // 0-100
  metric: string
  description: string
}

export function PercentileComparison({ 
  value, 
  percentile, 
  metric,
  description 
}: PercentileComparisonProps) {
  // Определяем позицию и цвет
  const getColor = () => {
    if (percentile < 25) return 'text-blue-500'
    if (percentile < 75) return 'text-green-500'
    return 'text-orange-500'
  }
  
  const getMessage = () => {
    if (percentile < 5) return 'значительно ниже большинства'
    if (percentile < 25) return 'ниже большинства'
    if (percentile < 50) return 'немного ниже среднего'
    if (percentile < 75) return 'немного выше среднего'
    if (percentile < 95) return 'выше большинства'
    return 'значительно выше большинства'
  }
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Сравнение с населением
          </span>
        </div>
        
        {/* Визуальная шкала */}
        <div className="relative h-8 bg-gradient-to-r from-blue-100 via-green-100 to-orange-100 rounded-full overflow-hidden mb-4">
          {/* Маркер позиции */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-foreground rounded-full transition-all duration-500"
            style={{ left: `${percentile}%` }}
          />
          
          {/* Метки */}
          <div className="absolute inset-0 flex justify-between items-center px-2 text-xs text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        
        {/* Результат */}
        <div className="text-center space-y-1">
          <div className={`text-3xl font-bold ${getColor()}`}>
            {percentile}%
          </div>
          <p className="text-sm">
            Ваш {metric} <span className="font-medium">{getMessage()}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        </div>
        
        {/* Визуализация с человечками */}
        <div className="mt-4 flex justify-center gap-0.5">
          {Array.from({ length: 20 }, (_, i) => {
            const isHighlighted = (i + 1) * 5 <= percentile
            return (
              <div
                key={i}
                className={`w-2 h-6 rounded-sm transition-colors ${
                  isHighlighted ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Вы выше, чем {percentile}% людей вашего возраста и пола
        </p>
      </CardContent>
    </Card>
  )
}

// Данные перцентилей для ИМТ (пример для женщин 25-34 лет)
// Источник: WHO, CDC
const bmiPercentiles = {
  female: {
    '25-34': [
      { percentile: 5, bmi: 18.0 },
      { percentile: 10, bmi: 19.2 },
      { percentile: 25, bmi: 21.4 },
      { percentile: 50, bmi: 24.5 },
      { percentile: 75, bmi: 29.1 },
      { percentile: 90, bmi: 35.2 },
      { percentile: 95, bmi: 40.1 },
    ],
  },
  male: {
    '25-34': [
      { percentile: 5, bmi: 19.8 },
      { percentile: 10, bmi: 21.0 },
      { percentile: 25, bmi: 23.5 },
      { percentile: 50, bmi: 26.5 },
      { percentile: 75, bmi: 30.2 },
      { percentile: 90, bmi: 34.8 },
      { percentile: 95, bmi: 38.5 },
    ],
  },
}

// Функция для определения перцентиля
export function getPercentile(
  value: number, 
  data: { percentile: number; bmi: number }[]
): number {
  // Интерполяция между точками
  for (let i = 0; i < data.length - 1; i++) {
    if (value <= data[i].bmi) {
      if (i === 0) return data[0].percentile
      // Линейная интерполяция
      const ratio = (value - data[i-1].bmi) / (data[i].bmi - data[i-1].bmi)
      return Math.round(data[i-1].percentile + ratio * (data[i].percentile - data[i-1].percentile))
    }
  }
  return 99
}

// Использование:
const bmi = 27.3
const percentile = getPercentile(bmi, bmiPercentiles.female['25-34'])

<PercentileComparison
  value={bmi}
  percentile={percentile}
  metric="ИМТ"
  description="Среди женщин 25-34 лет в России"
/>
```

---

### 5. Календарь беременности (PregnancyCalendar)

**Что это:** Интерактивный таймлайн беременности с ключевыми датами и информацией.

**Где использовать:** Калькулятор даты родов, срок беременности

```tsx
// components/features/PregnancyCalendar.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Baby, Stethoscope, Heart, Briefcase } from "lucide-react"

interface PregnancyCalendarProps {
  dueDate: Date
  lastPeriod: Date
  currentWeek: number
  currentDay: number
}

// Данные о размере плода по неделям
const fetusSizeByWeek: Record<number, { size: string; emoji: string; length: string; weight: string }> = {
  4: { size: 'маковое зёрнышко', emoji: '🌱', length: '1 мм', weight: '< 1 г' },
  8: { size: 'фасолинка', emoji: '🫘', length: '1.6 см', weight: '1 г' },
  12: { size: 'лайм', emoji: '🍋', length: '5.4 см', weight: '14 г' },
  16: { size: 'авокадо', emoji: '🥑', length: '11.6 см', weight: '100 г' },
  20: { size: 'банан', emoji: '🍌', length: '16.5 см', weight: '300 г' },
  24: { size: 'кукуруза', emoji: '🌽', length: '30 см', weight: '600 г' },
  28: { size: 'баклажан', emoji: '🍆', length: '37 см', weight: '1 кг' },
  32: { size: 'пекинская капуста', emoji: '🥬', length: '42 см', weight: '1.7 кг' },
  36: { size: 'папайя', emoji: '🥭', length: '47 см', weight: '2.6 кг' },
  40: { size: 'арбуз', emoji: '🍉', length: '51 см', weight: '3.4 кг' },
}

// Ключевые события
const milestones = [
  { week: 8, title: 'Сердцебиение', icon: Heart, description: 'Можно услышать на УЗИ' },
  { week: 12, title: 'Первый скрининг', icon: Stethoscope, description: 'УЗИ + анализ крови' },
  { week: 16, title: 'Определение пола', icon: Baby, description: 'Можно узнать на УЗИ' },
  { week: 20, title: 'Середина пути!', icon: Calendar, description: 'Второй скрининг' },
  { week: 30, title: 'Декретный отпуск', icon: Briefcase, description: 'Можно оформить' },
  { week: 37, title: 'Доношенная беременность', icon: Baby, description: 'Малыш готов к рождению' },
]

export function PregnancyCalendar({ 
  dueDate, 
  lastPeriod, 
  currentWeek, 
  currentDay 
}: PregnancyCalendarProps) {
  const totalDays = 280 // 40 недель
  const daysPassed = currentWeek * 7 + currentDay
  const daysLeft = totalDays - daysPassed
  const progress = (daysPassed / totalDays) * 100
  
  // Определяем триместр
  const trimester = currentWeek < 13 ? 1 : currentWeek < 27 ? 2 : 3
  
  // Находим ближайший размер плода
  const nearestWeek = Object.keys(fetusSizeByWeek)
    .map(Number)
    .reduce((prev, curr) => 
      Math.abs(curr - currentWeek) < Math.abs(prev - currentWeek) ? curr : prev
    )
  const fetusSize = fetusSizeByWeek[nearestWeek]
  
  // Ближайшее событие
  const nextMilestone = milestones.find(m => m.week > currentWeek)
  const passedMilestones = milestones.filter(m => m.week <= currentWeek)
  
  return (
    <div className="space-y-6">
      
      {/* Основная информация */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">{fetusSize.emoji}</div>
            <p className="text-lg">
              Размер малыша: <span className="font-bold">{fetusSize.size}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Длина ~{fetusSize.length}, вес ~{fetusSize.weight}
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <div className="text-3xl font-bold text-primary">{currentWeek}</div>
              <div className="text-xs text-muted-foreground">неделя</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{trimester}</div>
              <div className="text-xs text-muted-foreground">триместр</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{daysLeft}</div>
              <div className="text-xs text-muted-foreground">дней до ПДР</div>
            </div>
          </div>
          
          {/* Прогресс-бар */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Прогресс беременности</span>
              <span className="font-medium">{progress.toFixed(0)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Зачатие</span>
              <span>ПДР: {dueDate.toLocaleDateString('ru-RU')}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Ближайшее событие */}
      {nextMilestone && (
        <Card className="border-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <nextMilestone.icon className="w-5 h-5 text-primary" />
              Скоро: {nextMilestone.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              {nextMilestone.description}
            </p>
            <Badge variant="secondary">
              Через {nextMilestone.week - currentWeek} нед.
            </Badge>
          </CardContent>
        </Card>
      )}
      
      {/* Таймлайн */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Ваш путь</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const isPassed = milestone.week <= currentWeek
              const isCurrent = milestone.week === nextMilestone?.week
              
              return (
                <div 
                  key={milestone.week}
                  className={`flex gap-4 ${isPassed ? '' : 'opacity-50'}`}
                >
                  {/* Линия и точка */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      isPassed ? 'bg-primary' : 'bg-muted'
                    } ${isCurrent ? 'ring-4 ring-primary/20' : ''}`} />
                    {index < milestones.length - 1 && (
                      <div className={`w-0.5 h-full ${
                        isPassed ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                  
                  {/* Контент */}
                  <div className="pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{milestone.title}</span>
                      <Badge variant="outline" className="text-xs">
                        {milestone.week} нед.
                      </Badge>
                      {isPassed && (
                        <Badge variant="secondary" className="text-xs">✓</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
      
      {/* Ключевые даты */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Важные даты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Первый день последних месячных</span>
              <span className="font-medium">
                {lastPeriod.toLocaleDateString('ru-RU')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Предполагаемая дата зачатия</span>
              <span className="font-medium">
                {new Date(lastPeriod.getTime() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Конец 1 триместра</span>
              <span className="font-medium">
                {new Date(lastPeriod.getTime() + 13 * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Декретный отпуск (30 нед.)</span>
              <span className="font-medium">
                {new Date(lastPeriod.getTime() + 30 * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
              </span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-muted-foreground">Предполагаемая дата родов</span>
              <span className="font-bold text-primary">
                {dueDate.toLocaleDateString('ru-RU')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
    </div>
  )
}
```

---

## 📁 Структура проекта

```
src/
├── app/
│   ├── layout.tsx              # Корневой layout
│   ├── page.tsx                # Главная страница
│   ├── globals.css             # Глобальные стили
│   │
│   ├── pitanie/                # Раздел: Питание
│   │   ├── page.tsx            # Хаб раздела
│   │   ├── kalkulyator-kalorij/
│   │   │   └── page.tsx
│   │   ├── kalkulyator-bzhu/
│   │   │   └── page.tsx
│   │   ├── defitsit-kalorij/
│   │   │   └── page.tsx
│   │   └── norma-vody/
│   │       └── page.tsx
│   │
│   ├── telo/                   # Раздел: Тело
│   │   ├── page.tsx
│   │   ├── kalkulyator-imt/
│   │   ├── idealnyj-ves/
│   │   ├── protsent-zhira/
│   │   ├── bazovyj-metabolizm/
│   │   └── tip-teloslozheniya/
│   │
│   ├── beremennost/            # Раздел: Беременность
│   │   ├── page.tsx
│   │   ├── data-rodov/
│   │   ├── srok-beremennosti/
│   │   ├── ovulyatsiya/
│   │   ├── menstrualnyj-tsikl/
│   │   └── nabor-vesa/
│   │
│   ├── deti/                   # Раздел: Дети
│   │   ├── page.tsx
│   │   ├── rost-rebenka/
│   │   └── ves-rebenka/
│   │
│   └── sport/                  # Раздел: Спорт
│       ├── page.tsx
│       ├── puls-dlya-trenirovok/
│       └── belok-dlya-sportsmenov/
│
├── components/
│   ├── ui/                     # shadcn/ui компоненты
│   │
│   ├── calculators/            # Компоненты калькуляторов
│   │   ├── CalorieCalculator.tsx
│   │   ├── BMICalculator.tsx
│   │   ├── MacroCalculator.tsx
│   │   └── ...
│   │
│   ├── layout/                 # Layout компоненты
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Breadcrumbs.tsx
│   │   └── AdBlock.tsx
│   │
│   ├── results/                # Компоненты результатов (КЛЮЧЕВОЕ!)
│   │   ├── ResultCard.tsx      # Карточка результата
│   │   ├── ResultScale.tsx     # Визуальная шкала
│   │   ├── ResultChart.tsx     # График
│   │   ├── MacroBreakdown.tsx  # Разбивка БЖУ
│   │   └── ComparisonTable.tsx # Сравнение формул
│   │
│   ├── inputs/                 # Улучшенные инпуты
│   │   ├── AgeSlider.tsx       # Слайдер возраста
│   │   ├── WeightSlider.tsx    # Слайдер веса
│   │   ├── HeightSlider.tsx    # Слайдер роста
│   │   ├── GenderToggle.tsx    # Переключатель пола
│   │   └── ActivitySelector.tsx # Выбор активности
│   │
│   └── seo/                    # SEO компоненты
│       ├── JsonLd.tsx
│       ├── FAQ.tsx
│       └── RelatedCalculators.tsx
│
├── lib/
│   ├── calculations/           # ВСЕ формулы расчётов
│   │   ├── calories.ts         # Калории (6 формул)
│   │   ├── bmi.ts              # ИМТ
│   │   ├── ideal-weight.ts     # Идеальный вес (5 формул)
│   │   ├── body-fat.ts         # Процент жира
│   │   ├── pregnancy.ts        # Беременность
│   │   ├── ovulation.ts        # Овуляция
│   │   └── index.ts            # Экспорт всего
│   │
│   ├── constants/              # Константы
│   │   ├── activity-levels.ts  # Уровни активности
│   │   ├── bmi-categories.ts   # Категории ИМТ
│   │   ├── diet-types.ts       # Типы диет
│   │   └── index.ts
│   │
│   ├── validations/            # Zod схемы
│   │   ├── calorie-schema.ts
│   │   ├── bmi-schema.ts
│   │   └── index.ts
│   │
│   └── utils/                  # Утилиты
│       ├── format.ts           # Форматирование чисел
│       ├── storage.ts          # localStorage
│       └── share.ts            # Шеринг результатов
│
├── hooks/                      # Кастомные хуки
│   ├── useCalculator.ts        # Общий хук для калькуляторов
│   ├── useLocalStorage.ts      # Сохранение данных
│   └── useDebounce.ts          # Дебаунс для реалтайм расчёта
│
└── types/
    └── calculator.ts           # TypeScript типы
```

---

## 🎨 КРИТИЧЕСКИ ВАЖНО: UI/UX требования

### Принцип #1: Современный дизайн (НЕ как у beregifiguru!)

```tsx
// ❌ ЗАПРЕЩЕНО (как у конкурентов):
<div style={{background: '#f5f5f5', border: '1px solid #ccc'}}>
  <label>Ваш вес:</label>
  <input type="text" />
  <button>Рассчитать</button>
  <p>Результат: 2150 ккал</p>
</div>

// ✅ ПРАВИЛЬНО (наш стандарт):
<Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-white to-slate-50">
  <div className="space-y-6">
    <GenderToggle value={gender} onChange={setGender} />
    <WeightSlider value={weight} onChange={setWeight} />
    <HeightSlider value={height} onChange={setHeight} />
    <ActivitySelector value={activity} onChange={setActivity} />
  </div>
  
  <ResultCard 
    value={calories}
    unit="ккал"
    status="normal"
    showScale={true}
  />
</Card>
```

### Принцип #2: Расчёт в реальном времени (БЕЗ кнопки!)

```tsx
// ❌ ЗАПРЕЩЕНО (как у всех конкурентов):
const handleSubmit = () => {
  const result = calculate(values);
  setResult(result);
};
<button onClick={handleSubmit}>Рассчитать</button>

// ✅ ПРАВИЛЬНО (наше преимущество):
// Результат пересчитывается при каждом изменении
useEffect(() => {
  const result = calculate(values);
  setResult(result);
}, [values]);

// Используем debounce для производительности
const debouncedValues = useDebounce(values, 150);
```

### Принцип #3: Слайдеры вместо полей ввода

```tsx
// ❌ ЗАПРЕЩЕНО (как у всех):
<Input type="number" placeholder="Введите вес" />

// ✅ ПРАВИЛЬНО (наше преимущество):
<div className="space-y-2">
  <div className="flex justify-between">
    <Label>Вес</Label>
    <span className="text-2xl font-bold text-primary">{weight} кг</span>
  </div>
  <Slider
    value={[weight]}
    onValueChange={([v]) => setWeight(v)}
    min={30}
    max={200}
    step={1}
    className="py-4"
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>30 кг</span>
    <span>200 кг</span>
  </div>
</div>
```

### Принцип #4: Визуализация результатов (КЛЮЧЕВОЕ отличие!)

```tsx
// ❌ ЗАПРЕЩЕНО (скучно, как у конкурентов):
<p>Ваш ИМТ: 24.5</p>
<p>Категория: Норма</p>

// ✅ ПРАВИЛЬНО (наглядно):
<ResultScale
  value={24.5}
  ranges={[
    { min: 0, max: 18.5, label: 'Дефицит', color: 'blue' },
    { min: 18.5, max: 25, label: 'Норма', color: 'green' },
    { min: 25, max: 30, label: 'Избыток', color: 'yellow' },
    { min: 30, max: 50, label: 'Ожирение', color: 'red' },
  ]}
/>

// Визуально это выглядит так:
// ┌────────────────────────────────────────────┐
// │  Дефицит │   НОРМА   │ Избыток │ Ожирение │
// │  ────────┼─────●─────┼─────────┼───────── │
// │   <18.5  │  18.5-25  │  25-30  │   >30    │
// └────────────────────────────────────────────┘
```

### Принцип #5: Анимации (живой интерфейс)

```tsx
import { motion, AnimatePresence } from 'framer-motion';

// Анимация появления результата
<AnimatePresence>
  {result && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ResultCard value={result} />
    </motion.div>
  )}
</AnimatePresence>

// Анимация числа (счётчик)
<motion.span
  key={value}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
>
  {value.toLocaleString('ru-RU')}
</motion.span>
```

---

## 📐 Компоненты результатов (то, что делает нас лучше конкурентов)

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

export function ResultCard({ 
  title, 
  value, 
  unit, 
  description, 
  status = 'info', 
  icon 
}: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'rounded-xl border-2 p-6 text-center',
        statusColors[status]
      )}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-sm font-medium opacity-80">{title}</p>
      <motion.p 
        className="text-4xl font-bold my-2"
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
      >
        {value.toLocaleString('ru-RU')}
        <span className="text-lg ml-1">{unit}</span>
      </motion.p>
      {description && (
        <p className="text-sm opacity-70">{description}</p>
      )}
    </motion.div>
  );
}
```

### ResultScale — Визуальная шкала (КИЛЛЕР-ФИЧА!)

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

  // Определяем текущую категорию
  const currentRange = ranges.find(r => value >= r.min && value < r.max) || ranges[ranges.length - 1];

  return (
    <div className="space-y-3">
      {/* Текущее значение */}
      <div className="text-center">
        <span className="text-3xl font-bold">{value.toFixed(1)}</span>
        <span className={cn(
          'ml-2 px-2 py-1 rounded text-sm font-medium',
          `bg-${currentRange.color}-100 text-${currentRange.color}-700`
        )}>
          {currentRange.label}
        </span>
      </div>

      {/* Шкала */}
      <div className="relative h-4 rounded-full overflow-hidden flex">
        {ranges.map((range, i) => (
          <div
            key={i}
            className={cn(colorMap[range.color], 'h-full')}
            style={{ width: `${((range.max - range.min) / totalRange) * 100}%` }}
          />
        ))}
        
        {/* Маркер текущего значения */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-gray-800 rounded-full shadow-lg z-10"
          initial={{ left: '0%' }}
          animate={{ left: `${clampedPosition}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ marginLeft: '-10px' }}
        />
      </div>
      
      {/* Подписи категорий */}
      {showLabels && (
        <div className="flex text-xs">
          {ranges.map((range, i) => (
            <div 
              key={i} 
              className="text-center text-muted-foreground"
              style={{ width: `${((range.max - range.min) / totalRange) * 100}%` }}
            >
              {range.label}
            </div>
          ))}
        </div>
      )}
      
      {/* Значения границ */}
      <div className="flex justify-between text-xs text-muted-foreground">
        {ranges.map((range, i) => (
          <span key={i}>{range.min}</span>
        ))}
        <span>{ranges[ranges.length - 1].max}</span>
      </div>
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
  protein: number;  // граммы
  fat: number;
  carbs: number;
}

export function MacroBreakdown({ protein, fat, carbs }: MacroBreakdownProps) {
  const proteinCal = protein * 4;
  const fatCal = fat * 9;
  const carbsCal = carbs * 4;
  const total = proteinCal + fatCal + carbsCal;
  
  const data = [
    { 
      name: 'Белки', 
      value: protein, 
      percent: (proteinCal / total) * 100, 
      color: 'bg-red-500',
      bgColor: 'bg-red-100',
      emoji: '🥩'
    },
    { 
      name: 'Жиры', 
      value: fat, 
      percent: (fatCal / total) * 100, 
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-100',
      emoji: '🥑'
    },
    { 
      name: 'Углеводы', 
      value: carbs, 
      percent: (carbsCal / total) * 100, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-100',
      emoji: '🍞'
    },
  ];

  return (
    <div className="space-y-4">
      {data.map((macro, index) => (
        <motion.div 
          key={macro.name} 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium flex items-center gap-2">
              <span>{macro.emoji}</span>
              {macro.name}
            </span>
            <span>
              <strong className="text-lg">{macro.value} г</strong>
              <span className="text-muted-foreground ml-2">
                ({macro.percent.toFixed(0)}%)
              </span>
            </span>
          </div>
          <div className={cn('h-4 rounded-full overflow-hidden', macro.bgColor)}>
            <motion.div
              className={cn('h-full rounded-full', macro.color)}
              initial={{ width: 0 }}
              animate={{ width: `${macro.percent}%` }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
```

### FormulaComparison — Сравнение формул (уникальная фича!)

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
            <motion.div 
              key={result.name} 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-40 text-sm flex items-center gap-1">
                {result.recommended && (
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                )}
                <span className={cn(
                  'truncate',
                  result.recommended && 'font-medium'
                )}>
                  {result.name}
                </span>
              </div>
              <div className="flex-1 h-7 bg-gray-100 rounded-lg relative overflow-hidden">
                <motion.div
                  className={cn(
                    'h-full rounded-lg',
                    result.recommended ? 'bg-primary' : 'bg-gray-400'
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
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <p className="text-muted-foreground">Минимум</p>
          <p className="font-semibold">{min.toLocaleString('ru-RU')} {unit}</p>
        </div>
        <div className="border-x">
          <p className="text-muted-foreground">Среднее</p>
          <p className="font-semibold text-primary">{Math.round(avg).toLocaleString('ru-RU')} {unit}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Максимум</p>
          <p className="font-semibold">{max.toLocaleString('ru-RU')} {unit}</p>
        </div>
      </div>
    </Card>
  );
}
```

---

## 🎛 Компоненты ввода

### GenderToggle — Переключатель пола

```tsx
// components/inputs/GenderToggle.tsx
'use client';

import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GenderToggleProps {
  value: 'male' | 'female';
  onChange: (value: 'male' | 'female') => void;
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
      <button
        type="button"
        onClick={() => onChange('male')}
        className={cn(
          'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200',
          value === 'male' 
            ? 'bg-white shadow-md text-blue-600 font-medium' 
            : 'text-gray-500 hover:text-gray-700'
        )}
      >
        <span className="text-xl">👨</span>
        Мужчина
      </button>
      <button
        type="button"
        onClick={() => onChange('female')}
        className={cn(
          'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200',
          value === 'female' 
            ? 'bg-white shadow-md text-pink-600 font-medium' 
            : 'text-gray-500 hover:text-gray-700'
        )}
      >
        <span className="text-xl">👩</span>
        Женщина
      </button>
    </div>
  );
}
```

### ActivitySelector — Выбор активности

```tsx
// components/inputs/ActivitySelector.tsx
'use client';

import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const ACTIVITY_LEVELS = [
  { 
    id: 'sedentary', 
    label: 'Минимальная', 
    emoji: '🪑', 
    description: 'Сидячая работа, без тренировок', 
    factor: 1.2 
  },
  { 
    id: 'light', 
    label: 'Лёгкая', 
    emoji: '🚶', 
    description: '1-2 тренировки в неделю', 
    factor: 1.375 
  },
  { 
    id: 'moderate', 
    label: 'Средняя', 
    emoji: '🏃', 
    description: '3-5 тренировок в неделю', 
    factor: 1.55 
  },
  { 
    id: 'active', 
    label: 'Высокая', 
    emoji: '💪', 
    description: '6-7 тренировок в неделю', 
    factor: 1.725 
  },
  { 
    id: 'extreme', 
    label: 'Очень высокая', 
    emoji: '🏋️', 
    description: 'Профессиональный спорт / физ. работа', 
    factor: 1.9 
  },
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
                <button
                  type="button"
                  onClick={() => onChange(level.id)}
                  className={cn(
                    'flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200',
                    value === level.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  )}
                >
                  <span className="text-2xl mb-1">{level.emoji}</span>
                  <span className={cn(
                    'text-xs text-center',
                    value === level.id ? 'font-medium text-primary' : 'text-gray-600'
                  )}>
                    {level.label}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="font-medium">{level.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Коэффициент: ×{level.factor}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
```

### ValueSlider — Универсальный слайдер

```tsx
// components/inputs/ValueSlider.tsx
'use client';

import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

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

export function ValueSlider({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  unit,
  icon 
}: ValueSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <Label className="flex items-center gap-2">
          {icon}
          {label}
        </Label>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{value}</span>
          <span className="text-muted-foreground ml-1">{unit}</span>
        </div>
      </div>
      
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="py-2"
      />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}
```

---

## 📊 Формулы расчётов

### Калории (все 5 формул)

```typescript
// lib/calculations/calories.ts

export interface CalorieInput {
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  activityFactor: number;
  bodyFat?: number;
}

export interface CalorieResult {
  bmr: number;
  tdee: number;
  deficit: number;
  surplus: number;
}

// 1. Формула Миффлина-Сан Жеора (рекомендуемая)
export function mifflinStJeor(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  
  const tdee = bmr * activityFactor;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  };
}

// 2. Формула Харриса-Бенедикта (оригинальная)
export function harrisBenedict(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  
  const bmr = gender === 'male'
    ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
    : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age;
  
  const tdee = bmr * activityFactor;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  };
}

// 3. Формула Харриса-Бенедикта (1984)
export function harrisBenedictRevised(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  
  const bmr = gender === 'male'
    ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
  
  const tdee = bmr * activityFactor;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  };
}

// 4. Формула Кетча-МакАрдла
export function katchMcArdle(input: CalorieInput): CalorieResult {
  const { weight, activityFactor, bodyFat = 20 } = input;
  
  const leanMass = weight * (1 - bodyFat / 100);
  const bmr = 370 + 21.6 * leanMass;
  const tdee = bmr * activityFactor;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  };
}

// 5. Формула ВОЗ
export function whoFormula(input: CalorieInput): CalorieResult {
  const { gender, age, weight, activityFactor } = input;
  
  let bmr: number;
  
  if (gender === 'male') {
    if (age < 30) bmr = 15.3 * weight + 679;
    else if (age < 60) bmr = 11.6 * weight + 879;
    else bmr = 13.5 * weight + 487;
  } else {
    if (age < 30) bmr = 14.7 * weight + 496;
    else if (age < 60) bmr = 8.7 * weight + 829;
    else bmr = 10.5 * weight + 596;
  }
  
  const tdee = bmr * activityFactor;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficit: Math.round(tdee * 0.85),
    surplus: Math.round(tdee * 1.15),
  };
}

// Все формулы для сравнения
export function calculateAllFormulas(input: CalorieInput) {
  return [
    { name: 'Миффлина-Сан Жеора', ...mifflinStJeor(input), recommended: true },
    { name: 'Харриса-Бенедикта', ...harrisBenedict(input), recommended: false },
    { name: 'Харриса-Бенедикта (1984)', ...harrisBenedictRevised(input), recommended: false },
    { name: 'Кетча-МакАрдла', ...katchMcArdle(input), recommended: false },
    { name: 'ВОЗ', ...whoFormula(input), recommended: false },
  ];
}
```

### ИМТ

```typescript
// lib/calculations/bmi.ts

export const BMI_CATEGORIES = [
  { min: 0, max: 16, label: 'Выраженный дефицит', color: 'blue' as const, status: 'danger' as const },
  { min: 16, max: 18.5, label: 'Дефицит массы', color: 'blue' as const, status: 'warning' as const },
  { min: 18.5, max: 25, label: 'Норма', color: 'green' as const, status: 'success' as const },
  { min: 25, max: 30, label: 'Избыточный вес', color: 'yellow' as const, status: 'warning' as const },
  { min: 30, max: 35, label: 'Ожирение I', color: 'red' as const, status: 'danger' as const },
  { min: 35, max: 40, label: 'Ожирение II', color: 'red' as const, status: 'danger' as const },
  { min: 40, max: 60, label: 'Ожирение III', color: 'red' as const, status: 'danger' as const },
];

export interface BMIResult {
  value: number;
  category: string;
  status: 'success' | 'warning' | 'danger';
  color: 'green' | 'yellow' | 'red' | 'blue';
  idealWeight: { min: number; max: number };
  recommendation: string;
}

export function calculateBMI(weight: number, height: number): BMIResult {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  
  const category = BMI_CATEGORIES.find(c => bmi >= c.min && bmi < c.max) || BMI_CATEGORIES[6];
  
  const idealWeight = {
    min: Math.round(18.5 * heightM * heightM),
    max: Math.round(24.9 * heightM * heightM),
  };
  
  let recommendation = '';
  if (bmi < 18.5) {
    const toGain = idealWeight.min - weight;
    recommendation = `Рекомендуется набрать ${Math.round(toGain)} кг до нормы`;
  } else if (bmi >= 25) {
    const toLose = weight - idealWeight.max;
    recommendation = `Рекомендуется сбросить ${Math.round(toLose)} кг до нормы`;
  } else {
    recommendation = 'Отлично! Ваш вес в пределах нормы';
  }
  
  return {
    value: Math.round(bmi * 10) / 10,
    category: category.label,
    status: category.status,
    color: category.color,
    idealWeight,
    recommendation,
  };
}
```

---

## 📄 Шаблон страницы калькулятора

```tsx
// app/pitanie/kalkulyator-kalorij/page.tsx
import { Metadata } from 'next';
import { CalorieCalculator } from '@/components/calculators/CalorieCalculator';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AdBlock } from '@/components/layout/AdBlock';
import { FAQ } from '@/components/seo/FAQ';
import { RelatedCalculators } from '@/components/seo/RelatedCalculators';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Калькулятор калорий онлайн — расчёт суточной нормы бесплатно',
  description: 'Бесплатный калькулятор калорий ✓ Расчёт по 5 формулам ✓ Сравнение результатов ✓ Калории для похудения и набора массы ✓ Расчёт БЖУ',
  keywords: ['калькулятор калорий', 'расчёт калорий', 'суточная норма калорий', 'сколько калорий в день'],
};

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/pitanie' },
  { label: 'Калькулятор калорий', href: '/pitanie/kalkulyator-kalorij' },
];

const faqData = [
  {
    question: 'Какая формула расчёта калорий самая точная?',
    answer: 'Формула Миффлина-Сан Жеора считается наиболее точной для большинства людей по данным Американской диетической ассоциации.',
  },
  {
    question: 'Сколько калорий нужно для похудения?',
    answer: 'Для безопасного похудения создайте дефицит 15-20% от нормы. Это позволит терять 0.5-1 кг в неделю без вреда для здоровья.',
  },
  {
    question: 'Нужно ли считать калории каждый день?',
    answer: 'На начальном этапе рекомендуется считать 2-4 недели, чтобы понять размер порций. Затем можно перейти на интуитивное питание.',
  },
];

const relatedCalculators = [
  { title: 'Калькулятор БЖУ', href: '/pitanie/kalkulyator-bzhu', description: 'Расчёт белков, жиров и углеводов' },
  { title: 'Калькулятор ИМТ', href: '/telo/kalkulyator-imt', description: 'Индекс массы тела' },
  { title: 'Дефицит калорий', href: '/pitanie/defitsit-kalorij', description: 'Расчёт для похудения' },
];

export default function CalorieCalculatorPage() {
  return (
    <>
      <JsonLd type="WebApplication" data={{
        name: 'Калькулятор калорий',
        description: 'Онлайн калькулятор суточной нормы калорий',
        applicationCategory: 'HealthApplication',
      }} />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор калорий онлайн
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму калорий по 5 научным формулам. 
            Результат обновляется мгновенно при изменении параметров.
          </p>
        </header>
        
        <AdBlock position="top" className="mb-8" />
        
        <section className="mb-12">
          <CalorieCalculator />
        </section>
        
        <AdBlock position="middle" className="my-8" />
        
        <section className="prose prose-lg max-w-none mb-12">
          {/* SEO-контент 1500+ слов */}
          <h2>Что такое калории</h2>
          <p>Калория — единица измерения энергии...</p>
          
          <h2>Как работает калькулятор</h2>
          <p>Наш калькулятор использует 5 научных формул...</p>
          
          {/* Продолжение... */}
        </section>
        
        <FAQ items={faqData} />
        
        <AdBlock position="bottom" className="my-8" />
        
        <RelatedCalculators items={relatedCalculators} />
      </article>
    </>
  );
}
```

---

## ⚡ Производительность (обязательно!)

### Цель: Lighthouse Performance > 90

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
```

### Lazy loading

```tsx
import dynamic from 'next/dynamic';

const ResultChart = dynamic(() => import('@/components/results/ResultChart'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded" />,
  ssr: false,
});

const AdBlock = dynamic(() => import('@/components/layout/AdBlock'), {
  ssr: false,
});
```

---

## 📋 Порядок разработки

### Фаза 1: Инфраструктура (3 дня)
1. Создание проекта Next.js
2. Настройка shadcn/ui
3. Базовые компоненты (Header, Footer, Breadcrumbs)
4. Компоненты ввода (GenderToggle, Sliders, ActivitySelector)
5. Компоненты результатов (ResultCard, ResultScale, MacroBreakdown)

### Фаза 2: Калькуляторы Tier 1 (2 недели)
1. Калькулятор калорий (с FormulaComparison)
2. Калькулятор даты родов
3. Калькулятор БЖУ
4. Калькулятор ИМТ
5. Калькулятор срока беременности

### Фаза 3: SEO и деплой (1 неделя)
1. SEO-тексты для всех страниц
2. JSON-LD разметка
3. sitemap.xml, robots.txt
4. Деплой на Vercel
5. Яндекс.Вебмастер + Метрика

---

## ✅ Чек-лист готовности

```
□ Современный дизайн (shadcn/ui)
□ Слайдеры вместо инпутов
□ Расчёт в реальном времени
□ Визуальная шкала результата
□ Сравнение формул (где применимо)
□ Анимации (framer-motion)
□ Мобильная адаптация
□ Metadata (title, description)
□ JSON-LD разметка
□ SEO-текст 1500+ слов
□ FAQ раздел
□ 3 рекламных блока
□ Lighthouse > 90
```

---

## 🚫 НЕ делать (антипаттерны)

```tsx
// ❌ Кнопка "Рассчитать"
<button onClick={calculate}>Рассчитать</button>

// ❌ Обычные инпуты
<input type="number" />

// ❌ Текстовый результат
<p>Ваш ИМТ: 24.5</p>

// ❌ Устаревший дизайн
<div style={{background: '#eee', border: '1px solid #ccc'}} />

// ❌ any в TypeScript
const data: any = ...

// ❌ Формулы в компонентах
function Calculator() {
  const bmr = 10 * weight + ... // НЕПРАВИЛЬНО!
}
```

---

*Версия 2.0 | Январь 2025 | С учётом конкурентного анализа*
