import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart } from 'lucide-react'
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CalcBox',
          url: 'https://calcbox.ru',
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
            url: `https://calcbox.ru${item.href}`,
          })),
        }}
      />
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Онлайн-калькуляторы здоровья
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Точные расчёты по научным формулам. Мгновенный результат без регистрации.
        </p>
      </section>

      {/* Calculator grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {NAV_SECTIONS.map((section) => (
          <Card key={section.title} className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex min-h-10 items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
                    >
                      <span>{item.label}</span>
                      {item.hot && (
                        <Badge variant="default" className="text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          Популярный
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* SEO text */}
      <section className="mt-16 space-y-10 text-base leading-7 text-muted-foreground">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
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
            работает на любом устройстве — компьютере, планшете или телефоне.
          </p>
        </div>

        <hr className="border-border" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Какие калькуляторы доступны
          </h2>
          <p>
            Калькуляторы CalcBox охватывают четыре основных направления
            здоровья:
          </p>
          <ul className="space-y-3 pl-5 list-disc marker:text-primary">
            <li>
              <strong className="text-foreground">Питание</strong> — расчёт
              суточной нормы калорий, соотношения белков, жиров и углеводов
              (БЖУ), дефицита калорий для похудения и нормы воды.
            </li>
            <li>
              <strong className="text-foreground">Тело</strong> — индекс массы
              тела (ИМТ), идеальный вес по нескольким формулам, процент жира в
              организме и базовый метаболизм.
            </li>
            <li>
              <strong className="text-foreground">Беременность</strong> —
              предполагаемая дата родов, текущий срок беременности и расчёт
              овуляции.
            </li>
            <li>
              <strong className="text-foreground">Спорт</strong> — оптимальный
              пульс для тренировок и норма белка для спортсменов.
            </li>
          </ul>
        </div>

        <hr className="border-border" />

        <div className="rounded-2xl border bg-muted/30 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Чем CalcBox отличается от других калькуляторов
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-background border p-5 space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-semibold text-foreground">
                Мгновенный результат
              </h3>
              <p className="text-sm text-muted-foreground">
                Результат пересчитывается в реальном времени при изменении
                параметров — без кнопки «Рассчитать».
              </p>
            </div>
            <div className="rounded-lg bg-background border p-5 space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
              </div>
              <h3 className="font-semibold text-foreground">
                Сравнение формул
              </h3>
              <p className="text-sm text-muted-foreground">
                Каждый калькулятор показывает результаты по нескольким научным
                формулам, чтобы вы могли сравнить.
              </p>
            </div>
            <div className="rounded-lg bg-background border p-5 space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
              </div>
              <h3 className="font-semibold text-foreground">
                Визуальные шкалы
              </h3>
              <p className="text-sm text-muted-foreground">
                Результаты отображаются на наглядных шкалах с цветовой
                индикацией — сразу видно, в норме ли показатель.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Все расчёты носят информационный характер и не заменяют
            консультацию специалиста.
          </p>
        </div>
      </section>
    </div>
  )
}
