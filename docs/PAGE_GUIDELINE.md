# Гайдлайн по созданию страницы калькулятора

> Эталон: `/zdorovye/pitanie/kalkulyator-kalorij/page.tsx` (842 строки)
> Этот документ — полная спецификация. Следуй ему буквально, не отступая ни в чём.

---

## 1. Структура файла (порядок сверху вниз)

```
1. Импорты
2. export const metadata
3. const breadcrumbs
4. export default function Page()
   ├── JSON-LD схемы (вне <article>)
   ├── <article>
   │   ├── <Breadcrumbs>
   │   ├── <header> — H1 + подзаголовок
   │   ├── «Как пользоваться» — 3 шага
   │   ├── <section> — Компонент калькулятора
   │   ├── «Вам также будет полезно» — 4 перекрёстные ссылки
   │   ├── <section> — SEO-контент (5–10 блоков)
   │   │   ├── Тематические блоки
   │   │   ├── FAQ (аккордеон)
   │   │   └── Связанные калькуляторы (чипы)
   │   └── </section>
   └── </article>
```

---

## 2. Контейнер страницы

```tsx
<article className="mx-auto max-w-4xl px-4 py-8">
```

Только `max-w-4xl`. Никогда `max-w-6xl` (это для главной) и не `max-w-2xl`.

---

## 3. Metadata

```tsx
export const metadata: Metadata = {
  title: '...',           // 50–60 символов. Формат: «Название — действие бесплатно»
  description: '...',     // 150–160 символов. С символами ✓ для преимуществ
  keywords: ['...'],      // 6–8 ключевых слов
  openGraph: {
    title: '...',         // Короче чем title, без «бесплатно»
    description: '...',   // Короче чем description
    type: 'website',
    url: '/zdorovye/раздел/страница',
  },
  alternates: {
    canonical: '/zdorovye/раздел/страница',
  },
}
```

**Title** шаблон из layout: `%s | CalcBox` — поэтому НЕ добавлять «| CalcBox» в title.

**Правила:**
- НЕ дублировать слова в title (например, «калькулятор калорий калории» — плохо)
- description должен содержать конкретику: числа, формулы, преимущества
- keywords — только релевантные, без стоп-слов

---

## 4. Хлебные крошки

```tsx
const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Раздел', href: '/zdorovye/раздел' },
  { label: 'Калькулятор', href: '/zdorovye/раздел/страница' },
]
```

Всегда 3 уровня. Компонент: `<Breadcrumbs items={breadcrumbs} />`.

---

## 5. JSON-LD схемы

Каждая страница калькулятора содержит **ровно 4 схемы** в указанном порядке:

### 5.1 WebApplication

```tsx
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Название калькулятора',
  description: 'Описание',
  applicationCategory: 'HealthApplication',
  url: 'https://calcbox.ru/zdorovye/раздел/страница',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RUB',
  },
}} />
```

**НЕ добавлять:** `aggregateRating` (нет реальных отзывов).

### 5.2 FAQPage

```tsx
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Вопрос?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ответ.',
      },
    },
    // ... ещё вопросы
  ],
}} />
```

**Критично:** Вопросы и ответы в JSON-LD **должны совпадать** с визуальным FAQ-аккордеоном на странице. Если в аккордеоне 7 вопросов — в JSON-LD 7 вопросов. Текст может немного отличаться (в JSON-LD без HTML-форматирования), но смысл идентичный.

### 5.3 HowTo

```tsx
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как рассчитать ...',
  description: 'Пошаговая инструкция...',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Шаг 1', text: 'Описание' },
    { '@type': 'HowToStep', position: 2, name: 'Шаг 2', text: 'Описание' },
    { '@type': 'HowToStep', position: 3, name: 'Шаг 3', text: 'Описание' },
  ],
}} />
```

3 шага. Совпадают с визуальным блоком «Как пользоваться».

### 5.4 BreadcrumbList

```tsx
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://calcbox.ru' },
    { '@type': 'ListItem', position: 2, name: 'Раздел', item: 'https://calcbox.ru/zdorovye/раздел' },
    { '@type': 'ListItem', position: 3, name: 'Калькулятор', item: 'https://calcbox.ru/zdorovye/раздел/страница' },
  ],
}} />
```

Совпадает с визуальными хлебными крошками.

---

## 6. Header (H1 + подзаголовок)

```tsx
<header className="mb-8">
  <h1 className="text-3xl md:text-4xl font-bold mb-4">
    Название калькулятора онлайн
  </h1>
  <p className="text-lg text-muted-foreground">
    1–2 предложения. Упомянуть ключевое преимущество (формулы, мгновенный результат и т.д.)
  </p>
</header>
```

---

## 7. Блок «Как пользоваться»

```tsx
<section className="mb-8 space-y-3 text-sm text-muted-foreground">
  <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
    <BookOpen className="h-5 w-5" />
    Как пользоваться калькулятором
  </h2>
  <div className="space-y-2">
    {/* Повторить 3 раза */}
    <div className="flex gap-3 items-start">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
        1
      </span>
      <p>Текст шага.</p>
    </div>
  </div>
</section>
```

Всегда **3 шага**. Текст совпадает с HowTo JSON-LD.

---

## 8. Компонент калькулятора

```tsx
<section className="mb-12" aria-labelledby="calculator-heading">
  <h2 id="calculator-heading" className="sr-only">Расчёт чего-то</h2>
  <CalculatorComponent />
</section>
```

- `sr-only` заголовок для accessibility
- Компонент калькулятора **обязан** иметь `id="calculator"` на корневом `<div>` — для якорных ссылок из SEO-текста
- `mb-12` — увеличенный отступ перед следующим блоком

---

## 9. Блок «Вам также будет полезно»

```tsx
<div className="mb-10 space-y-3">
  <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
    <Compass className="h-5 w-5" />
    Вам также будет полезно
  </h2>
  <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
    <Link
      href="/путь"
      className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
    >
      <IconName className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
        Название
      </span>
    </Link>
    {/* ещё 3 ссылки */}
  </div>
</div>
```

- Ровно **4 ссылки** — 2×2 на мобилке, 4 в ряд на десктопе
- Каждая с иконкой из lucide-react
- Ссылки ведут на **существующие** страницы (не на 404!)
- Выбирать тематически близкие калькуляторы

---

## 10. SEO-контент — общая обёртка

```tsx
<section className="space-y-8 text-sm text-muted-foreground">
  {/* Блоки контента */}
</section>
```

**Размер шрифта:** `text-sm` (14px) для всего SEO-контента. НЕ `text-base`.

**Цвет текста:** `text-muted-foreground` по умолчанию. Акценты — `text-foreground` через `<strong>`.

---

## 11. SEO-блок (каждый тематический раздел)

```tsx
<div className="space-y-3">
  <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
    <ИконкаПоСмыслу className="h-5 w-5" />
    Заголовок блока
  </h2>
  <p>Текст параграфа...</p>
</div>

<hr className="border-border" />
```

**Правила:**
- Заголовки: `text-base font-semibold text-foreground flex items-center gap-2` (единообразно на всех страницах)
- **Каждый h2 содержит иконку** из lucide-react (см. п.17.9 — маппинг иконок для заголовков)
- Между блоками: `<hr className="border-border" />`
- Отступы внутри блока: `space-y-3`
- Отступы между блоками: `space-y-8` (задаётся обёрткой)

---

## 12. Паттерны контента внутри SEO-блоков

### 12.1 Обычный текст

```tsx
<p>
  Текст с <strong className="text-foreground">выделением</strong> ключевых цифр и терминов.
</p>
```

Все `<strong>` содержат `className="text-foreground"`. Без этого класса bold-текст останется серым.

### 12.2 Маркированный список

```tsx
<ul className="space-y-2 pl-5 list-disc marker:text-primary">
  <li>
    <strong className="text-foreground">Термин</strong> — описание.
  </li>
</ul>
```

### 12.3 Нумерованный список (шаги, советы, уровни)

```tsx
<div className="space-y-2">
  <div className="flex gap-3 items-start">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
      1
    </span>
    <div>
      <p className="text-foreground font-medium">
        Заголовок пункта
        {/* Если есть коэффициент или метаданные: */}
        <span className="font-normal text-xs text-muted-foreground"> коэфф. 1,2</span>
      </p>
      <p>Описание пункта.</p>
    </div>
  </div>
</div>
```

**Критично:**
- Заголовок и описание — на **разных строках** (`<p>` + `<p>` внутри `<div>`)
- Никаких тире между заголовком и описанием
- Числовой кружок: `h-6 w-6`, `rounded-full border`, `text-xs`

### 12.4 Карточки (2 или 3 колонки)

```tsx
<div className="grid gap-3 md:grid-cols-2">
  {/* или md:grid-cols-3 */}
  <div className="rounded-lg border p-3 space-y-1.5">
    <h3 className="font-semibold text-foreground">Заголовок</h3>
    <p>Описание</p>
  </div>
</div>
```

С иконкой:
```tsx
<h3 className="font-semibold text-foreground flex items-center gap-1.5">
  <IconName className="h-5 w-5 text-muted-foreground" />
  Заголовок
</h3>
```

Цвет иконки подбирается по смыслу (см. п.17.8).

### 12.5 Карточки с предупреждениями внутри

```tsx
<div className="space-y-3 rounded-lg border p-4">
  <h3 className="font-semibold text-foreground">Заголовок</h3>
  <p>Текст...</p>
  <div className="flex gap-2 items-start">
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
    <p>Текст предупреждения.</p>
  </div>
</div>
```

Или с подсказкой:
```tsx
<div className="flex gap-2 items-start">
  <Lightbulb className="h-5 w-5 shrink-0 text-blue-400" />
  <p>Текст совета.</p>
</div>
```

### 12.6 Таблица

```tsx
<div className="overflow-x-auto -mx-4 px-4">
  <table className="w-full text-left border-collapse text-sm">
    <thead>
      <tr className="border-b">
        <th className="py-2 pr-2 font-semibold text-foreground">Столбец 1</th>
        <th className="py-2 px-2 font-semibold text-foreground">Столбец 2</th>
        <th className="py-2 pl-2 font-semibold text-foreground">Столбец 3</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-border/50">
        <td className="py-2 pr-2">Значение</td>
        <td className="py-2 px-2 whitespace-nowrap">
          <strong className="text-foreground">1800–2200</strong>
        </td>
        <td className="py-2 pl-2 whitespace-nowrap">
          <strong className="text-foreground">1500–1700</strong>
        </td>
      </tr>
      {/* Последний tr без border-b */}
    </tbody>
  </table>
</div>
```

**Правила для таблиц на мобилке 320px:**
- Обёртка `overflow-x-auto -mx-4 px-4` — позволяет скроллить, если совсем не влезет
- `whitespace-nowrap` на ячейках с числами — числа НЕ переносятся
- Числа **без пробелов-разделителей**: `1800–2200`, НЕ `1 800–2 200`
- Заголовки максимально короткие: сокращать слова, убирать единицы из заголовков если они дублируются
- Padding компактный: `pr-2`, `px-2`, `pl-2` (не `p-4`)
- Тире: использовать `–` (длинное), не `-`

### 12.7 Информационный блок (синий)

```tsx
<p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
  Текст информации.
</p>
```

### 12.8 Блок предупреждения (серый с иконкой)

```tsx
<div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
  <p>Текст предупреждения.</p>
</div>
```

### 12.9 Якорная ссылка обратно в калькулятор

```tsx
<p className="text-sm">
  <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
    Рассчитать свою норму&nbsp;→
  </a>
</p>
```

Стиль: мини-кнопка с полупрозрачным фоном — хорошо выделяется на фоне текста.

**Критично:**
- Использовать `<a href="#calculator">`, НЕ `<Link href="#calculator">` — Next.js `<Link>` не скроллит к якорям на той же странице
- Неразрывный пробел перед стрелкой: `&nbsp;→`
- Размещать после таблиц, примеров расчёта и блоков с практическим применением
- 2–3 якорные ссылки на страницу — достаточно

### 12.10 Внутренние ссылки в тексте

```tsx
<Link href="/zdorovye/раздел/страница" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
  текст ссылки
</Link>
```

Стиль: постоянное полупрозрачное подчёркивание, при наведении становится ярким. Ссылка всегда видна в тексте, не сливается с окружающим контентом.

**Правила:**
- Использовать Next.js `<Link>` для всех ссылок на **другие страницы**
- 3–5 контекстных ссылок по тексту SEO-контента
- Анкор — естественное слово/фраза из предложения, не «нажмите тут»
- Ссылки только на **существующие** страницы

---

## 13. FAQ (аккордеон)

```tsx
<div className="space-y-3">
  <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
    <CircleHelp className="h-5 w-5" />
    Часто задаваемые вопросы
  </h2>
  <Accordion type="multiple" className="w-full">
    <AccordionItem value="faq-1">
      <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
        Вопрос?
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Ответ. Числа выделяем: <strong className="text-foreground">5</strong> кг.
      </AccordionContent>
    </AccordionItem>
    {/* ещё вопросы */}
  </Accordion>
</div>
```

**Правила:**
- `type="multiple"` — можно раскрыть несколько одновременно
- `hover:no-underline` на trigger — убираем подчёркивание при наведении
- 5–8 вопросов
- Вопросы таргетируют long-tail запросы (пример: «Как часто пересчитывать ...?», «Какая формула точнее?»)
- В ответах использовать `<strong className="text-foreground">` для чисел
- **Синхронизировать** с FAQPage JSON-LD

---

## 14. Связанные калькуляторы (чипы)

```tsx
<hr className="border-border" />

<nav className="space-y-3" aria-label="Связанные калькуляторы">
  <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
    <ArrowUpRight className="h-5 w-5" />
    Связанные калькуляторы
  </h2>
  <div className="flex flex-wrap gap-2">
    <Link
      href="/zdorovye/раздел/страница"
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
    >
      <IconName className="h-4 w-4 text-muted-foreground" />
      Название калькулятора
    </Link>
    {/* ещё 4–6 ссылок */}
  </div>
</nav>
```

**Правила:**
- Обёртка `<nav>` с `aria-label`
- Чипы: `rounded-full border px-3 py-1.5 text-sm`
- Иконка: `h-4 w-4 text-muted-foreground`
- 5–6 ссылок
- `flex flex-wrap gap-2` — переносятся на мобилке естественно
- НЕ включать описания — только название + иконка
- НЕ дублировать текущую страницу в списке

---

## 15. Импорты

```tsx
// Next.js
import type { Metadata } from 'next'
import Link from 'next/link'

// Компоненты проекта
import { XxxCalculator } from '@/components/calculators/XxxCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

// UI компоненты
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Иконки (только используемые)
import { Scale, PieChart, TrendingDown, AlertTriangle, Lightbulb } from 'lucide-react'
```

НЕ импортировать неиспользуемые иконки. Каждая иконка должна быть задействована.

---

## 16. Мобильная адаптация 320px — чеклист

- [ ] Таблицы: числа без пробелов-разделителей, `whitespace-nowrap`, компактные заголовки
- [ ] Нумерованные списки: заголовок + описание на **разных строках**, никаких тире
- [ ] Карточки `md:grid-cols-2` или `md:grid-cols-3` — на мобилке складываются в 1 колонку
- [ ] Связанные калькуляторы: чипы с `flex-wrap`, не grid
- [ ] Блок «Вам будет полезно»: `grid-cols-2` (не 4) на мобилке
- [ ] Нет горизонтального скролла (проверить на 320px)
- [ ] Числа в тексте: `100–200`, используя `–` (en-dash), не `-`
- [ ] `<strong>` везде с `className="text-foreground"`

---

## 17. Визуальный дизайн калькулятора

### 17.1 Иконки — библиотека и размеры

Источник: `lucide-react`. Никаких эмодзи в компонентах калькулятора.

| Контекст | Размер | Пример |
|----------|--------|--------|
| **Иконка в h2 заголовке (SEO + структурные)** | `h-5 w-5` | `<BookOpen className="h-5 w-5" />` |
| **Иконка в CardTitle калькулятора** | `h-5 w-5` | `<SlidersHorizontal className="h-5 w-5" />` |
| Иконка в слайдере / лейбле | `h-5 w-5` | `<Calendar className="h-5 w-5" />` |
| Иконка в чипе связанного калькулятора | `h-4 w-4` | `<Scale className="h-4 w-4" />` |
| Иконка предупреждения в тексте | `h-5 w-5 shrink-0` | `<AlertTriangle className="h-5 w-5 shrink-0" />` |
| Иконка в блоке «Вам будет полезно» | `h-5 w-5 mx-auto mb-1` | центрирована над текстом |
| Иконка пола в GenderToggle | `h-5 w-5` | `Mars`, `Venus` |
| Иконка в ActivitySelector | `h-5 w-5 mb-0.5` | `Armchair`, `Bike` и т.д. |

**Цвета иконок:**

| Назначение | Класс цвета |
|------------|-------------|
| Лейблы слайдеров | без цвета (наследует `text-muted-foreground` от родителя) |
| Предупреждение | `text-amber-400` |
| Совет / информация | `text-blue-400` |
| Мужчина (активен) | `text-blue-600` |
| Женщина (активна) | `text-pink-600` |
| Активный элемент выбора | `text-primary` |
| Иконки в чипах / блоках | `text-muted-foreground` |
| Тематические акценты в карточках | Подбирать из палитры `*-300` или `*-400` по смыслу |

### 17.2 Компоненты ввода (переиспользуемые)

#### GenderToggle

```tsx
<GenderToggle value={gender} onChange={(v) => setParam('gender', v)} />
```

Визуально: две кнопки в `bg-muted rounded-lg`, активная — `bg-background shadow-sm`.
Иконки: `Mars` (мужчина), `Venus` (женщина).
Цвет активного: `text-blue-600` / `text-pink-600`.

#### ValueSlider

```tsx
<ValueSlider
  label="Возраст"
  value={age}
  onChange={(v) => setParam('age', v)}
  min={15}
  max={80}
  unit="лет"
  icon={<Calendar className="h-5 w-5" />}
/>
```

Компактная разметка: label + значение в одну строку, слайдер под ними.
Значение: `font-semibold`, единица: `text-muted-foreground ml-0.5`.

**Часто используемые слайдеры (когда калькулятор требует параметры тела):**

| Параметр | min | max | unit | icon |
|----------|-----|-----|------|------|
| Возраст | 15 | 80 | лет | `Calendar` |
| Рост | 140 | 220 | см | `Ruler` |
| Вес | 30 | 200 | кг | `Weight` |

Для калькуляторов с другими параметрами (длина цикла, процент жира, пульс и т.д.) — создавать слайдеры по аналогии с подходящими `min/max/unit/icon`.

#### ActivitySelector (если калькулятору нужен уровень активности)

```tsx
<ActivitySelector value={activity} onChange={(v) => setParam('activity', v)} />
```

5 кнопок в `grid grid-cols-5 gap-1.5`.
На мобилке текст сокращается: `label` (сокращённый) vs `labelFull` (полный на `sm:`).
Размер текста на мобилке: `text-[9px]`, на десктопе: `sm:text-xs`.
Активная кнопка: `border-primary bg-primary/5 shadow-sm`.

#### DateInput (если калькулятору нужна дата)

```tsx
<DateInput
  label="Дата"
  value={date}
  onChange={setDate}
  icon={<CalendarIcon className="h-5 w-5" />}
  min="2024-01-01"
  max="2026-12-31"
/>
```

Реализован через shadcn Popover + Calendar. Формат даты: `d MMMM yyyy` на русском.

### 17.3 Компоненты результатов (переиспользуемые)

#### Главный результат (inline, не компонент)

```tsx
<div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
  <p className="text-sm text-muted-foreground mb-1">
    Подзаголовок (например: «Ваша норма» / «Для похудения»)
  </p>
  <p className="text-4xl font-bold text-primary">
    {value.toLocaleString('ru-RU')}
    <span className="text-lg font-normal text-muted-foreground ml-1">единица</span>
  </p>
  <p className="text-xs text-muted-foreground mt-1">
    Дополнительная строка (вспомогательные показатели, пояснение)
  </p>
</div>
```

**Критично:**
- `border-2 border-primary/20` — тонкая рамка основного цвета
- `bg-primary/5` — едва заметный фон
- Главное число: `text-4xl font-bold text-primary`
- Единица: `text-lg font-normal text-muted-foreground ml-1`
- Локализация: `.toLocaleString('ru-RU')` — пробел как разделитель тысяч

#### FormulaComparison (если есть несколько формул/методов расчёта)

```tsx
<FormulaComparison
  results={[
    { name: 'Метод 1', value: 1847, recommended: true },
    { name: 'Метод 2', value: 1921 },
  ]}
  unit="ккал"
/>
```

Показывает горизонтальные полоски + summary (мин/среднее/макс).
`recommended: true` — выделяет формулу как основную (primary цвет полоски).
Применимо к любому калькулятору, где есть сравнение методов: калории, идеальный вес, базовый метаболизм и т.д.

#### MacroBreakdown (только для калькуляторов питания с БЖУ)

```tsx
<MacroBreakdown protein={130} fat={65} carbs={210} />
```

Три анимированные полоски с иконками (Beef, Droplets, Wheat).
Автоматически считает % и калории. Специфичен для питания — в других калькуляторах не используется.

### 17.4 Карточки калькулятора (Card)

```tsx
<Card className="gap-3 py-4">
  <CardHeader className="pb-0">
    <CardTitle className="text-base flex items-center gap-2">
      <ИконкаПоСмыслу className="h-5 w-5" />
      Заголовок карточки
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    {/* содержимое */}
  </CardContent>
</Card>
```

**Строго:**
- Card: `gap-3 py-4` (компактный padding)
- CardHeader: `pb-0` (без нижнего padding — gap в Card управляет отступом)
- CardTitle: `text-base flex items-center gap-2` (16px, не больше, **обязательно с иконкой**)
- CardContent: `space-y-3` для слайдеров, `space-y-4` для результатов

**Типичные иконки для CardTitle:**

| Карточка | Иконка |
|----------|--------|
| Ваши параметры | `SlidersHorizontal` |
| Ваша цель | `Target` |
| Тип питания | `Utensils` |
| Ваше БЖУ / Рекомендуемое БЖУ | `ChartPie` |
| Сравнение формул (FormulaComparison) | `BarChart3` |

### 17.5 Skeleton (загрузка)

При `!loaded` показываем skeleton вместо калькулятора:

```tsx
if (!loaded) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Ваши параметры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 w-24 rounded bg-muted animate-pulse" />
              <div className="h-8 rounded bg-muted animate-pulse" />
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="h-16 rounded-xl border bg-muted/50 animate-pulse" />
    </div>
  )
}
```

Количество skeleton-блоков = количество слайдеров в калькуляторе.

### 17.6 Анимации (framer-motion)

| Элемент | initial | animate | transition |
|---------|---------|---------|------------|
| Горизонтальная полоска результата | `{ width: 0 }` | `{ width: N% }` | `duration: 0.4–0.5, delay: index * 0.05–0.1` |
| Строка списка результатов | `{ opacity: 0, x: -10...-20 }` | `{ opacity: 1, x: 0 }` | `delay: index * 0.05–0.1` |

Не перебарщивать: анимации только на полосках результатов и появлении строк. Инпуты, карточки, тексты — без анимаций.

### 17.7 Alert (предупреждение в калькуляторе)

```tsx
<Alert variant="destructive">
  <AlertTriangle className="h-5 w-5" />
  <AlertDescription>
    Текст предупреждения.
  </AlertDescription>
</Alert>
```

Используется внутри калькулятора при опасных или пограничных значениях (слишком низкие/высокие показатели, выход за безопасные границы и т.д.).

### 17.8 Цветовая система (CSS-переменные)

Не использовать хардкод-цвета в калькуляторах. Только семантические переменные:

| Назначение | Класс |
|------------|-------|
| Основной текст | `text-foreground` |
| Второстепенный текст | `text-muted-foreground` |
| Акцент / активный элемент | `text-primary`, `bg-primary`, `border-primary` |
| Фон карточки | `bg-card` (через Card компонент) |
| Фон страницы | `bg-background` (через layout) |
| Рамки | `border-border` |
| Ошибка | `variant="destructive"` (через Alert) |
| Hover фон | `hover:bg-accent` |

**Исключения** (допустимые хардкод-цвета):
- Пол: `text-blue-600`, `text-pink-600`
- Предупреждения: `text-amber-400`
- Советы: `text-blue-400`
- Тематические иконки в карточках результатов: подбирать из `*-300` / `*-400` (например, `text-rose-300` для здоровья, `text-green-400` для нормы, `text-red-400` для опасности)

### 17.9 Иконки в заголовках h2 — маппинг и правила

**Каждый h2 на странице обязан содержать иконку.** Паттерн:

```tsx
<h2 className="text-base font-semibold text-foreground flex items-center gap-2">
  <IconName className="h-5 w-5" />
  Текст заголовка
</h2>
```

**Правило: иконки в h2 НЕ окрашиваются.** Они наследуют `text-foreground` от родителя. Причины:
- Много заголовков на странице — цветные иконки создадут эффект радуги
- У SEO-заголовков нет семантического цвета (в отличие от CardTitle калькулятора, где цвет может нести смысл)
- Неокрашенные иконки работают как навигационные маркеры, не перетягивая внимание

**Маппинг иконок для повторяющихся заголовков** (одинаковые на всех страницах):

| Заголовок | Иконка | Импорт |
|-----------|--------|--------|
| Как пользоваться калькулятором | `BookOpen` | `lucide-react` |
| Вам также будет полезно | `Compass` | `lucide-react` |
| Часто задаваемые вопросы | `CircleHelp` | `lucide-react` |
| Связанные калькуляторы | `ArrowUpRight` | `lucide-react` |
| Практические советы / Советы | `Lightbulb` | `lucide-react` |
| Примеры расчёта | `ClipboardList` | `lucide-react` |

**Маппинг иконок для тематических заголовков** (подбирать по смыслу):

| Тема заголовка | Иконка |
|----------------|--------|
| Что это / Определение | `Info` |
| Как работает / Методы расчёта | `Calculator` |
| Влияющие факторы / Роль чего-то | `Puzzle` |
| Цель / Для похудения / Для набора | `Target` |
| Норма / Стандарты | подбирать по теме (`Beef`, `Activity`, `Users` и т.д.) |

**Размер иконок — всегда `h-5 w-5`.** Не `h-4 w-4` (это только для чипов связанных калькуляторов).

---

## 18. Компонент калькулятора — чеклист

Калькулятор (отдельный `.tsx` файл в `src/components/calculators/`) должен соответствовать:

- [ ] Корневой `<div>` имеет `id="calculator"` — для якорных ссылок
- [ ] Расчёт в реальном времени — БЕЗ кнопки «Рассчитать»
- [ ] Слайдеры вместо полей ввода (`ValueSlider` компонент)
- [ ] Skeleton-загрузка при `!loaded` (из `useUserParams`)
- [ ] Card / CardHeader / CardTitle стилизация по п.17.4 (**с иконкой в каждом CardTitle**)
- [ ] Главный результат стилизация по п.17.3
- [ ] `FormulaComparison` если есть несколько формул/методов расчёта
- [ ] `MacroBreakdown` если калькулятор питания с БЖУ
- [ ] Анимации только на полосках результатов (п.17.6)
- [ ] Alert при опасных значениях (п.17.7)
- [ ] Цвета только семантические (п.17.8)

---

## 19. SEO-контент — требования по объёму

- **Минимум 1 500 слов** SEO-текста (без учёта калькулятора)
- **5–10 тематических блоков**, разделённых `<hr>`
- **5–8 вопросов** в FAQ
- **2–3 якорные ссылки** обратно в калькулятор
- **3–5 внутренних ссылок** на другие страницы
- **1 таблица** с данными (если релевантно)
- **1–2 примера расчёта** с конкретными числами

### Рекомендуемая структура блоков (адаптировать под тематику калькулятора):

1. **Что это и зачем** — объяснение концепции (что считает калькулятор, зачем это знать)
2. **Какие формулы/методы** — описание алгоритмов расчёта (если применимо)
3. **Ключевые термины** — определения специфических понятий (карточки 2 колонки)
4. **Практическое применение** — сценарии использования результатов (карточки с иконками)
5. **Влияющие факторы** — что влияет на результат (карточки 3 колонки или список)
6. **Таблица данных** — справочные нормы/значения + якорная ссылка на калькулятор
7. **Детализация фактора** — подробное описание ключевого параметра (нумерованный список)
8. **Примеры расчёта** — 2 карточки с конкретными числами + якорная ссылка
9. **Практические советы** — 5 пунктов (нумерованный список) + предупреждение/disclaimer
10. **FAQ** — аккордеон
11. **Связанные калькуляторы** — чипы

Не все блоки обязательны для каждого калькулятора. Минимум: 1, 4 или 5, 8 или 6, 9, 10, 11.

---

## 20. Навигация — добавление нового калькулятора

При создании нового калькулятора **обязательно** обновить:

1. `src/lib/constants/navigation.ts` — добавить в соответствующий раздел NAV_SECTIONS
2. `src/app/sitemap.ts` — добавить URL
3. Ссылки из «Связанных калькуляторов» на других страницах — если уместно

---

## 21. Финальный чеклист перед коммитом

### Техническое

- [ ] `npm run build` без ошибок
- [ ] Нет неиспользуемых импортов
- [ ] Все ссылки ведут на существующие страницы (нет 404)
- [ ] `id="calculator"` на корневом div калькулятора
- [ ] Якорные ссылки используют `<a>`, не `<Link>`
- [ ] Внутренние ссылки используют `<Link>`, не `<a>`

### SEO

- [ ] Title 50–60 символов
- [ ] Description 150–160 символов
- [ ] 4 JSON-LD схемы (WebApplication, FAQPage, HowTo, BreadcrumbList)
- [ ] FAQ в JSON-LD совпадает с визуальным FAQ
- [ ] HowTo совпадает с «Как пользоваться»
- [ ] BreadcrumbList совпадает с визуальными хлебными крошками
- [ ] Canonical URL указан
- [ ] Open Graph заполнен
- [ ] SEO-текст 1 500+ слов
- [ ] Добавлен в sitemap.ts
- [ ] Добавлен в navigation.ts

### UX/UI

- [ ] Расчёт без кнопки (реалтайм)
- [ ] Skeleton при загрузке
- [ ] Все `<strong>` с `className="text-foreground"`
- [ ] Единообразные заголовки: `text-base font-semibold text-foreground flex items-center gap-2` + иконка
- [ ] Все h2 содержат иконку из lucide-react (см. п.17.9)
- [ ] Все CardTitle содержат иконку (см. п.17.4)
- [ ] Skeleton CardTitle повторяет стиль реального CardTitle с иконкой

### Мобилка 320px

- [ ] Нет горизонтального скролла
- [ ] Таблицы: компактные заголовки, числа без пробелов
- [ ] Нумерованные списки: 2 строки (заголовок + описание)
- [ ] Карточки: 1 колонка на мобилке
- [ ] Связанные калькуляторы: чипы с переносом

---

## 22. Типичные ошибки (НЕ допускать)

| Ошибка | Правильно |
|--------|-----------|
| `<Link href="#calculator">` | `<a href="#calculator">` |
| `<strong>текст</strong>` без класса | `<strong className="text-foreground">текст</strong>` |
| Числа с пробелами в таблицах: `1 800` | `1800` |
| `aggregateRating` в JSON-LD | Не добавлять без реальных отзывов |
| Заголовок + тире + описание в одну строку | Заголовок на одной строке, описание на следующей |
| `grid-cols-4` для связанных калькуляторов | `flex flex-wrap gap-2` с чипами |
| Описания в чипах связанных калькуляторов | Только название + иконка |
| Кнопка «Рассчитать» | Реалтайм пересчёт |
| `text-2xl` для H2 в SEO-тексте | `text-base font-semibold` |
| `text-base` для SEO-параграфов | `text-sm` |
| h2 без иконки | Каждый h2 обязан содержать иконку из lucide-react (см. п.17.9) |
| `h-4 w-4` иконка в h2 заголовке | `h-5 w-5` — единый размер для всех заголовков |
| Цветная иконка в SEO h2 (`text-primary`, `text-blue-400`) | Без цвета — наследует `text-foreground` |
| CardTitle без иконки | Каждый CardTitle в калькуляторе обязан иметь иконку (см. п.17.4) |
| Skeleton CardTitle без иконки | Skeleton должен повторять стиль реального CardTitle с иконкой |
| Инлайн-ссылка `className="text-primary hover:underline"` | `className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"` |
| Якорная ссылка `className="text-primary hover:underline font-medium"` | `className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"` |
