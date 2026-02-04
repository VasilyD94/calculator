'use client'

import { useState, useMemo, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BirthDateInput } from '@/components/inputs/BirthDateInput'
import { calculateAge, formatAgeFull, pluralize } from '@/lib/calculations/age'
import { motion } from 'framer-motion'
import {
  Calendar,
  Cake,
  Clock,
  PartyPopper,
  Sparkles,
  Star,
  SlidersHorizontal,
  Target,
  Info,
} from 'lucide-react'

export function AgeCalculator() {
  const [loaded, setLoaded] = useState(false)
  const [birthDate, setBirthDate] = useState<Date>(() => {
    // Дефолт: 30 лет назад
    const d = new Date()
    d.setFullYear(d.getFullYear() - 30)
    return d
  })

  // Загрузка из localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('calcbox_birthdate')
      if (saved) {
        const parsed = new Date(saved)
        if (!isNaN(parsed.getTime())) {
          setBirthDate(parsed)
        }
      }
    } catch {
      // ignore
    }
    setLoaded(true)
  }, [])

  // Сохранение в localStorage
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem('calcbox_birthdate', birthDate.toISOString())
    } catch {
      // ignore
    }
  }, [birthDate, loaded])

  const result = useMemo(() => calculateAge({ birthDate }), [birthDate])

  if (!loaded) {
    return (
      <div className="space-y-6">
        <Card className="gap-3 py-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex items-center gap-2">
              <SlidersHorizontal className="size-5" />
              Дата рождения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="h-4 w-32 rounded bg-muted animate-pulse" />
              <div className="h-10 rounded bg-muted animate-pulse" />
            </div>
          </CardContent>
        </Card>
        <div className="h-24 rounded-xl border bg-muted/50 animate-pulse" />
      </div>
    )
  }

  return (
    <div id="calculator" className="space-y-6">
      {/* Ввод даты */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Calendar className="size-5" />
            Дата рождения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BirthDateInput
            label="Когда вы родились?"
            value={birthDate}
            onChange={setBirthDate}
            icon={<Cake className="size-5" />}
          />
        </CardContent>
      </Card>

      {/* Главный результат */}
      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Ваш возраст</p>
        <p className="text-4xl font-bold text-primary tabular-nums">
          {result.years}
          <span className="text-lg font-normal text-muted-foreground ml-1">
            {result.years === 1 ? 'год' : result.years >= 2 && result.years <= 4 ? 'года' : 'лет'}
          </span>
        </p>
        {(result.months > 0 || result.days > 0) && (
          <p className="text-sm text-muted-foreground mt-1">
            {formatAgeFull(result.years, result.months, result.days)}
          </p>
        )}
      </div>

      {/* Детальная информация */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Target className="size-5" />
            Подробности
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Статистика */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              className="rounded-lg border p-3 text-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Clock className="size-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-2xl font-bold tabular-nums">{result.totalDays.toLocaleString('ru-RU')}</p>
              <p className="text-xs text-muted-foreground">
                дней прожито
              </p>
            </motion.div>

            <motion.div
              className="rounded-lg border p-3 text-center"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Cake className="size-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-2xl font-bold tabular-nums">{result.daysUntilBirthday}</p>
              <p className="text-xs text-muted-foreground">
                дней до ДР
              </p>
            </motion.div>
          </div>

          {/* До юбилея */}
          <motion.div
            className="rounded-lg bg-amber-50 border border-amber-200 p-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <PartyPopper className="size-5 text-amber-500" />
              <span className="font-medium text-amber-700">
                До {result.nextMilestone}-летия
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-600">
              {pluralize(result.daysUntilMilestone, 'день', 'дня', 'дней')} —{' '}
              {result.nextMilestoneDate.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </motion.div>
        </CardContent>
      </Card>

      {/* Знаки */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Sparkles className="size-5" />
            Знаки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              className="rounded-lg border p-3 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-3xl">{result.zodiacEmoji}</span>
              <p className="font-medium mt-1">{result.zodiacSign}</p>
              <p className="text-xs text-muted-foreground">Знак зодиака</p>
            </motion.div>

            <motion.div
              className="rounded-lg border p-3 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
            >
              <span className="text-3xl">{result.chineseEmoji}</span>
              <p className="font-medium mt-1">{result.chineseZodiac}</p>
              <p className="text-xs text-muted-foreground">Китайский гороскоп</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Важно знать */}
      <Card className="gap-3 py-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="size-5" />
            Интересные факты
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <Star className="inline size-4 mr-1 text-amber-400" />
            За {result.years} {result.years === 1 ? 'год' : result.years >= 2 && result.years <= 4 ? 'года' : 'лет'} ваше сердце сделало примерно{' '}
            <strong className="text-foreground">
              {(result.totalDays * 100000).toLocaleString('ru-RU')}
            </strong>{' '}
            ударов.
          </p>
          <p>
            <Star className="inline size-4 mr-1 text-amber-400" />
            Вы сделали около{' '}
            <strong className="text-foreground">
              {(result.totalDays * 20000).toLocaleString('ru-RU')}
            </strong>{' '}
            вдохов.
          </p>
          <p>
            <Star className="inline size-4 mr-1 text-amber-400" />
            Земля совершила{' '}
            <strong className="text-foreground">{result.years}</strong>{' '}
            {result.years === 1 ? 'оборот' : result.years >= 2 && result.years <= 4 ? 'оборота' : 'оборотов'} вокруг Солнца с вашего рождения.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
