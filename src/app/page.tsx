import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'

export const metadata: Metadata = {
  title: 'Онлайн-калькуляторы здоровья — калории, ИМТ, БЖУ, беременность',
  description:
    'Бесплатные калькуляторы здоровья: суточная норма калорий, ИМТ, БЖУ, дефицит калорий, дата родов и другие. Мгновенный расчёт по научным формулам без регистрации.',
  keywords: [
    'калькулятор здоровья',
    'калькулятор калорий онлайн',
    'калькулятор ИМТ',
    'калькулятор БЖУ',
    'калькулятор дефицита калорий',
    'калькулятор даты родов',
    'онлайн калькуляторы бесплатно',
  ],
  openGraph: {
    title: 'CalcBox — Онлайн-калькуляторы здоровья',
    description:
      'Бесплатные калькуляторы здоровья: калории, ИМТ, БЖУ, беременность. Мгновенный расчёт без регистрации.',
    type: 'website',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const allItems = NAV_SECTIONS.flatMap((s) => s.items)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CalcBox',
          url: 'https://calc-box.ru',
          description:
            'Современные онлайн-калькуляторы здоровья: калории, ИМТ, БЖУ, беременность и другие.',
          inLanguage: 'ru',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Онлайн-калькуляторы здоровья',
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: allItems.length,
          itemListElement: allItems.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            url: `https://calc-box.ru${item.href}`,
          })),
        }}
      />

      {/* Hero */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-balance">
          Онлайн-калькуляторы здоровья
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
          Точные расчёты по научным формулам. Мгновенный результат без регистрации.
        </p>
      </section>

      {/* Calculator grid */}
      {/* Мобильная версия — 1 колонка */}
      <section className="sm:hidden">
        {NAV_SECTIONS.map((section, idx) => (
          <div key={section.title}>
            <div className="py-4">
              <div className="flex justify-center mb-3">
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 font-semibold text-primary hover:bg-primary/20 transition-colors"
                >
                  <section.icon className="size-4" />
                  {section.title}
                </Link>
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-center gap-1.5 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.hot && <Flame className="size-3 shrink-0 text-foreground" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {idx < NAV_SECTIONS.length - 1 && <hr className="border-border" />}
          </div>
        ))}
      </section>

      {/* Десктоп версия — 4 колонки без внешней рамки */}
      <section className="hidden sm:flex">
        {NAV_SECTIONS.map((section, idx) => (
          <div key={section.title} className="flex-1 flex">
            <div className="flex-1 py-4 px-5 flex flex-col items-center text-center">
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 font-semibold text-primary hover:bg-primary/20 transition-colors"
              >
                <section.icon className="size-4" />
                {section.title}
              </Link>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.hot && <Flame className="size-3 shrink-0 text-foreground" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {idx < NAV_SECTIONS.length - 1 && (
              <div className="w-px bg-border my-6" />
            )}
          </div>
        ))}
      </section>

      {/* SEO text */}
      <section className="mt-10 space-y-8 text-sm leading-6 text-muted-foreground">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            Бесплатные калькуляторы здоровья онлайн
          </h2>
          <p>
            CalcBox — это сборник современных онлайн-калькуляторов здоровья. Мы
            помогаем рассчитать суточную норму калорий, индекс массы тела (ИМТ),
            соотношение белков, жиров и углеводов (БЖУ), предполагаемую дату
            родов и другие важные показатели. Все расчёты выполняются по
            проверенным научным формулам — Миффлина-Сан Жеора,
            Харриса-Бенедикта, формуле ВОЗ и другим.
          </p>
          <p>
            Результаты калькуляторов обновляются мгновенно при изменении
            параметров, без нажатия кнопки и без регистрации. Для каждого
            расчёта доступно сравнение нескольких формул, визуальная шкала
            результата и понятные пояснения. Сервис полностью бесплатный и
            работает на любом устройстве.
          </p>
        </div>

        <hr className="border-border" />

        {/* 2 колонки для списка калькуляторов */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            Какие калькуляторы доступны
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Питание</h3>
              <p>Расчёт калорий, БЖУ, дефицита калорий для похудения и нормы воды.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Тело</h3>
              <p>ИМТ, идеальный вес, процент жира, базовый метаболизм, возраст, давление.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Беременность</h3>
              <p>Дата родов, срок беременности, овуляция, группа крови ребёнка.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Спорт</h3>
              <p>Пульсовые зоны для тренировок и норма белка для спортсменов.</p>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* 3 колонки для преимуществ */}
        <div className="rounded-xl border bg-muted/30 p-5 space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            Чем CalcBox отличается от других
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-background border p-4 space-y-1">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                Мгновенный результат
              </h3>
              <p className="text-xs text-muted-foreground">
                Результат пересчитывается в реальном времени — без кнопки «Рассчитать».
              </p>
            </div>
            <div className="rounded-lg bg-background border p-4 space-y-1">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                Сравнение формул
              </h3>
              <p className="text-xs text-muted-foreground">
                Результаты по нескольким научным формулам для сравнения.
              </p>
            </div>
            <div className="rounded-lg bg-background border p-4 space-y-1">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                Визуальные шкалы
              </h3>
              <p className="text-xs text-muted-foreground">
                Наглядные шкалы с цветовой индикацией результата.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Все расчёты носят информационный характер и не заменяют консультацию специалиста.
          </p>
        </div>
      </section>
    </div>
  )
}
