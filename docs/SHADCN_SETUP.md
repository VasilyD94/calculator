# Настройка shadcn/ui — справочник

> Основная инструкция: [CLAUDE.md](../CLAUDE.md)

---

## Что такое shadcn/ui

shadcn/ui — это НЕ npm-библиотека, а ГЕНЕРАТОР компонентов.
`npx shadcn@latest add button` создаёт ФАЙЛ `/components/ui/button.tsx` со всеми стилями.

## Установка

```bash
# 1. Инициализация (ОБЯЗАТЕЛЬНО перед добавлением компонентов!)
npx shadcn@latest init

# Ответы при init:
# Style: Default
# Base color: Slate
# CSS variables: yes

# 2. Добавление компонентов
npx shadcn@latest add button card slider tabs badge progress tooltip alert input label select form
```

## Что создаётся при init

### CSS переменные (`app/globals.css`)
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --destructive: 0 84.2% 60.2%;
    --border: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}
```

### Утилита `cn()` (`lib/utils.ts`)
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### components.json
```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": { "baseColor": "slate", "cssVariables": true },
  "aliases": { "components": "@/components", "utils": "@/lib/utils" }
}
```

## Частые проблемы

| Проблема | Причина | Решение |
|----------|---------|---------|
| Компоненты без стилей | Не запустили `init` | Удалить `components/ui`, запустить `init`, заново добавить |
| Стили не применяются | Не импортирован `globals.css` | Проверить `import "./globals.css"` в `layout.tsx` |
| Tailwind не видит классы | Неправильный `content` | Добавить `"./components/**/*.{ts,tsx}"` |
| Ошибка с `cn()` | Нет зависимостей | `npm install clsx tailwind-merge` |
