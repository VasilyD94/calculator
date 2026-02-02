import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://calc-box.ru'),
  title: {
    default: 'CalcBox — Онлайн-калькуляторы здоровья',
    template: '%s | CalcBox',
  },
  description:
    'Современные онлайн-калькуляторы здоровья: калории, ИМТ, БЖУ, беременность и другие. Быстро, точно, бесплатно.',
  keywords: [
    'калькулятор калорий',
    'калькулятор ИМТ',
    'калькулятор БЖУ',
    'онлайн калькулятор здоровья',
    'расчёт калорий',
    'норма калорий',
    'индекс массы тела',
  ],
  authors: [{ name: 'CalcBox' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'geo.region': 'RU',
    'geo.placename': 'Russia',
    'content-language': 'ru',
    // После регистрации в Яндекс.Вебмастер — вставить реальный код:
    // 'yandex-verification': 'ваш_код_верификации',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'CalcBox',
    title: 'CalcBox — Онлайн-калькуляторы здоровья',
    description:
      'Современные онлайн-калькуляторы здоровья: калории, ИМТ, БЖУ, беременность и другие. Быстро, точно, бесплатно.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcBox — Онлайн-калькуляторы здоровья',
    description:
      'Современные онлайн-калькуляторы здоровья: калории, ИМТ, БЖУ, беременность и другие.',
  },
  alternates: {
    canonical: 'https://calc-box.ru',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
