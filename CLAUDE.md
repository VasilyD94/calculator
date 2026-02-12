# CLAUDE.md — Инструкции для Claude Code

## Проект: CalcBox — Онлайн-калькуляторы (calc-box.ru)

> **Текущий фокус:** Здоровье (25 калькуляторов)
> **Расширение:** Строительство, финансы, авто (позже)
> **Цель:** Обойти beregifiguru.ru и calcus.ru за счёт дизайна, скорости и UX.

---

## Подробная документация (docs/)

| Файл | Содержание |
|------|-----------|
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Эталонные примеры UI-компонентов (ResultCard, ResultScale, FormulaComparison, ValueSlider, GenderToggle, PDF-экспорт, WhatIfMode) |
| [docs/FORMULAS.md](docs/FORMULAS.md) | Формулы расчётов (калории 5 формул, ИМТ, коэффициенты активности) |
| [docs/SHADCN_SETUP.md](docs/SHADCN_SETUP.md) | Настройка shadcn/ui, частые проблемы |
| [docs/PAGE_GUIDELINE.md](docs/PAGE_GUIDELINE.md) | Гайдлайн по созданию страниц калькуляторов |
| [docs/AI_RECOMMENDATIONS.md](docs/AI_RECOMMENDATIONS.md) | Стратегия рекомендаций и ИИ (фазы 1-3) |
| [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md) | Полная техническая спецификация |
| [docs/NEW_CALCULATORS_PLAN.md](docs/NEW_CALCULATORS_PLAN.md) | План новых калькуляторов |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Дорожная карта проекта |

---

## Git-воркфлоу (ОБЯЗАТЕЛЬНО!)

```
После внедрения каждой фичи или компонента:
1. npm run build — убедиться что собирается
2. Закоммитить с осмысленным сообщением
3. Запушить в GitHub
4. Задеплоить на сервер (см. раздел «Деплой»)

НЕ НАКАПЛИВАТЬ изменения! Каждая рабочая фича = отдельный коммит + пуш.
```

---

## Сервер и деплой

### Сервер

```
Хостинг: Timeweb VPS
IP: 2.59.40.88
ОС: Ubuntu 24.04 (6.8.0-100-generic)
RAM: 3.8 GB
Диск: 38 GB
```

### Установленное ПО

```
Node.js: v20.20.0
PM2: 6.0.14 (автозапуск через systemd)
Nginx: 1.24.0 (reverse proxy)
Git: 2.43.0
```

### Расположение проекта

```
/var/www/calculator/
```

### Конфигурация Nginx

```
Файл: /etc/nginx/sites-available/calculator
Схема: Nginx (443 SSL) → proxy_pass → Next.js (порт 3001)
SSL: Let's Encrypt (calc-box.ru + www.calc-box.ru, до 10 мая 2026)
```

### Деплой (одна команда)

```bash
sshpass -p 'j*J19-5uZ@-9Cu' ssh -o StrictHostKeyChecking=no root@2.59.40.88 "cd /var/www/calculator && git pull && npm run build && pm2 restart calculator 2>&1"
```

### Полезные команды на сервере

```bash
pm2 status                              # Статус
pm2 logs calculator --lines 50 --nostream  # Логи
pm2 restart calculator                   # Перезапуск
nginx -t && systemctl reload nginx       # Nginx
```

### Домен и SSL

```
Домен: calc-box.ru (REG.ru)
DNS: A-запись → 2.59.40.88
SSL: Let's Encrypt, автообновление через certbot
```

---

## Домен и структура URL

```
calc-box.ru
├── /zdorovye/
│   ├── /pitanie/        (калькулятор-калорий, БЖУ, дефицит, норма воды)
│   ├── /telo/           (ИМТ, идеальный вес, процент жира, базовый метаболизм)
│   ├── /beremennost/    (дата родов, срок, овуляция, менструальный цикл, набор веса)
│   ├── /deti/           (рост, вес ребёнка)
│   └── /sport/          (пульс для тренировок, белок для спортсменов)
├── /stroitelstvo/       (позже)
├── /finansy/            (позже)
└── /avto/               (позже)
```

---

## Технологический стек

| Технология | Зачем |
|------------|-------|
| Next.js 16+ (App Router) | SSG, быстрая загрузка |
| TypeScript | Надёжность кода |
| Tailwind CSS | Быстрая стилизация |
| shadcn/ui | Современные компоненты (см. [docs/SHADCN_SETUP.md](docs/SHADCN_SETUP.md)) |
| Framer Motion | Анимации |
| React Hook Form + Zod | Формы и валидация |
| Recharts | Графики |
| Lucide React | Иконки |

---

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx                # Корневой layout (Metrika, Header, Footer, CookieBanner)
│   ├── page.tsx                  # Главная страница
│   ├── globals.css               # Глобальные стили
│   ├── sitemap.ts                # Sitemap
│   ├── robots.ts                 # Robots
│   ├── privacy/page.tsx          # Политика конфиденциальности
│   └── zdorovye/                 # Калькуляторы здоровья
│       ├── pitanie/
│       ├── telo/
│       ├── beremennost/
│       ├── deti/
│       └── sport/
├── components/
│   ├── ui/                       # shadcn/ui компоненты
│   ├── calculators/              # Компоненты калькуляторов
│   ├── layout/                   # Header, Footer, Breadcrumbs, CookieBanner
│   └── results/                  # ResultCard, ResultScale, FormulaComparison
├── lib/
│   ├── calculations/             # Формулы расчётов (см. docs/FORMULAS.md)
│   ├── constants/                # Константы, navigation.ts
│   └── utils.ts                  # cn() и утилиты
└── hooks/                        # useCalculator, useLocalStorage, useDebounce
```

---

## UI/UX правила (КРИТИЧЕСКИ ВАЖНО!)

### 1. Расчёт в реальном времени — БЕЗ кнопки «Рассчитать»

```tsx
// Результат пересчитывается при каждом изменении
useEffect(() => {
  const result = calculate(values);
  setResult(result);
}, [values]);
```

### 2. Слайдеры вместо полей ввода

```tsx
// НЕ <Input type="number" />
// А ValueSlider с визуальным отображением значения
<ValueSlider label="Вес" value={weight} onChange={setWeight} min={30} max={200} unit="кг" />
```

### 3. Визуализация результатов

Всегда ResultScale (цветная шкала), а не просто текст «Ваш ИМТ: 24.5».

### 4. Сравнение формул

Где применимо — показывать FormulaComparison с несколькими формулами и пометкой «Рекомендуем».

### 5. Анимации

Framer Motion для появления результатов, счётчиков, шкал.

---

## Типографика (строго на всех страницах!)

| Элемент | Классы |
|---------|--------|
| H1 (главная) | `text-4xl md:text-5xl font-bold tracking-tight` |
| H1 (калькулятор) | `text-2xl md:text-4xl font-bold` |
| H2 (SEO-блоки) | `text-2xl font-bold text-foreground` |
| H3 | `font-semibold text-foreground` |
| Основной текст | `text-base leading-7 text-muted-foreground` |
| Текст в карточках | `text-sm` |
| Подзаголовок под H1 | `text-lg text-muted-foreground` |

### SEO-обёртка текста

```tsx
<section className="space-y-10 text-base leading-7 text-muted-foreground">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-foreground">Заголовок</h2>
    <p>Текст...</p>
  </div>
  <hr className="border-border" />
  {/* ... */}
</section>
```

### Контейнеры

```
Главная:     <div className="mx-auto max-w-6xl px-4 py-10">
Калькулятор: <article className="mx-auto max-w-4xl px-4 py-8 overflow-hidden">
```

---

## SEO (обязательно на каждой странице)

### Metadata

```tsx
export const metadata: Metadata = {
  title: 'Заголовок — действие бесплатно',        // 50-60 символов
  description: 'Описание с преимуществами',        // 150-160 символов
  keywords: ['ключ 1', 'ключ 2'],
  openGraph: { title: '...', description: '...', type: 'website', url: '/путь' },
  alternates: { canonical: '/путь' },
}
```

### JSON-LD на страницах калькуляторов

1. WebApplication
2. FAQPage
3. HowTo
4. BreadcrumbList

### SEO-инфраструктура (уже реализовано)

- `lang="ru"`, кириллический subset (Geist + Geist_Mono)
- `metadataBase: 'https://calc-box.ru'`
- Title template: `%s | CalcBox`
- Geo-теги: `geo.region=RU`, `content-language=ru`
- Open Graph: `locale=ru_RU`
- `robots.ts`: Yandex allow + Host directive
- `sitemap.ts`: все страницы
- Canonical URLs на каждой странице
- Хлебные крошки + JSON-LD BreadcrumbList
- Политика конфиденциальности: `/privacy`
- Cookie-баннер: информационный (Вариант А), Метрика грузится всегда

---

## Навигация (единый источник)

```
src/lib/constants/navigation.ts → NAV_SECTIONS

Используется в:
├── Header.tsx (десктоп + мобильное меню)
├── Footer.tsx (ссылки по разделам)
└── page.tsx (главная — сетка калькуляторов + ItemList JSON-LD)

При добавлении нового калькулятора — добавить в navigation.ts.
```

---

## Чек-лист готовности калькулятора

```
[ ] Слайдеры вместо инпутов
[ ] Расчёт в реальном времени
[ ] Визуальная шкала результата
[ ] Сравнение формул (где применимо)
[ ] Анимации (framer-motion)
[ ] Мобильная адаптация (320px+)
[ ] Metadata (title, description, canonical, OG)
[ ] JSON-LD (WebApplication, FAQPage, HowTo, BreadcrumbList)
[ ] SEO-текст 1500+ слов
[ ] FAQ раздел
[ ] Хлебные крошки
[ ] Добавлен в navigation.ts
[ ] Добавлен в sitemap.ts
[ ] npm run build проходит
[ ] Коммит + пуш + деплой
```

---

## Антипаттерны (НЕ делать!)

```tsx
// Кнопка «Рассчитать»
<button onClick={calculate}>Рассчитать</button>

// Обычные инпуты
<input type="number" />

// Текстовый результат без визуализации
<p>Ваш ИМТ: 24.5</p>

// any в TypeScript
const data: any = ...

// Формулы прямо в компонентах (выносить в lib/calculations/)
function Calculator() { const bmr = 10 * weight + ... }
```
