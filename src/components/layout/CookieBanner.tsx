'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie-consent'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Показываем баннер с небольшой задержкой, чтобы не мешать загрузке
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-3xl rounded-xl border bg-background/95 backdrop-blur-sm shadow-lg p-4 md:p-5">
        <div className="flex items-start gap-3">
          <Cookie className="size-5 shrink-0 text-primary mt-0.5" />
          <div className="flex-1 space-y-3">
            <p className="text-sm text-muted-foreground">
              Мы используем файлы cookie и сервис Яндекс.Метрика для анализа
              посещаемости и улучшения работы сайта. Продолжая использовать сайт,
              вы соглашаетесь с{' '}
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
              >
                политикой конфиденциальности
              </Link>
              .
            </p>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Принять
            </button>
          </div>
          <button
            onClick={handleAccept}
            className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Закрыть"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
