# Рабочий процесс: разработка и деплой

> **Проект:** CalcBox ([calc-box.ru](https://calc-box.ru))
> **Сервер:** Timeweb VPS (72.56.97.130), Nginx → Next.js:3001, PM2

## Принцип

Никогда не разрабатывать новые фичи напрямую в `main`. Ветка `main` — это всегда рабочий продакшен.

---

## Пошаговый процесс

### 1. Создать ветку под фичу

```bash
git checkout main
git pull
git checkout -b feature/название-фичи
```

Примеры названий:
- `feature/kalkulyator-pulsa`
- `feature/seo-text-imt`
- `fix/slider-mobile-bug`

### 2. Разработка

Работать в своей ветке. Коммитить часто с понятными сообщениями:

```bash
git add src/lib/calculations/heart-rate.ts
git commit -m "feat: add heart rate calculation logic"
```

### 3. Локальное тестирование

```bash
npm run build    # Проверить что сборка проходит без ошибок
npm run dev      # Проверить визуально в браузере на localhost:3000
```

### 4. Влить в main

Когда фича готова и протестирована:

```bash
git checkout main
git pull
git merge feature/название-фичи
```

Если есть конфликты — решить их, затем:

```bash
git add .
git commit -m "merge: feature/название-фичи"
```

### 5. Деплой на сервер

```bash
git push
ssh -o StrictHostKeyChecking=no root@72.56.97.130 "cd /var/www/calculator && git pull && npm run build && pm2 restart calculator 2>&1"
```

### 6. Проверить продакшен

Открыть [calc-box.ru](https://calc-box.ru) и убедиться что всё работает.

### 7. Удалить ветку (опционально)

```bash
git branch -d feature/название-фичи
```

---

## Быстрая шпаргалка

```
main (продакшен) ──────────────────────────────────►
         \                          /
          └── feature/новая-фича ──┘
              (разработка + тесты)
```

## Откат при проблемах

Если после деплоя что-то сломалось:

```bash
# Посмотреть последние коммиты
git log --oneline -5

# Откатить последний коммит (создаёт новый коммит-отмену)
git revert HEAD
git push

# Задеплоить откат
ssh -o StrictHostKeyChecking=no root@72.56.97.130 "cd /var/www/calculator && git pull && npm run build && pm2 restart calculator 2>&1"
```
