import type { Metadata } from 'next'
import Script from 'next/script'
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
    'yandex-verification': '58aa0606f2a8d76f',
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
            ym(106583944,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106583944"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Skip link для accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Перейти к содержимому
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
