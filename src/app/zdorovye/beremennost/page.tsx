import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы беременности онлайн — дата родов, срок, овуляция',
  description:
    'Бесплатные калькуляторы беременности: расчёт даты родов (ПДР), определение срока беременности и календарь овуляции. Мгновенный результат без регистрации.',
  keywords: [
    'калькулятор беременности',
    'дата родов',
    'срок беременности',
    'калькулятор овуляции',
    'ПДР онлайн',
    'календарь беременности',
  ],
  openGraph: {
    title: 'Калькуляторы беременности онлайн',
    description:
      'Бесплатные калькуляторы беременности: дата родов, срок беременности и овуляция.',
    type: 'website',
    url: '/zdorovye/beremennost',
  },
  alternates: {
    canonical: '/zdorovye/beremennost',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
]

export default function BeremennostPage() {
  const section = NAV_SECTIONS.find((s) => s.href === '/zdorovye/beremennost')
  if (!section) return null

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Калькуляторы беременности',
          description:
            'Бесплатные онлайн-калькуляторы беременности: дата родов, срок и овуляция.',
          url: 'https://calcbox.ru/zdorovye/beremennost',
          inLanguage: 'ru',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: `https://calcbox.ru${item.href}`,
          })),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Калькуляторы беременности
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте предполагаемую дату родов, определите текущий срок
            беременности и спланируйте зачатие с помощью календаря овуляции.
            Мгновенный результат без регистрации.
          </p>
        </header>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex min-h-12 items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors hover:bg-accent"
                    >
                      <span className="font-medium">{item.label}</span>
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
        </section>

        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Калькуляторы для будущих мам
            </h2>
            <p>
              Беременность — особенный период, когда важно знать точные сроки
              и ключевые даты. Наши калькуляторы помогут определить
              предполагаемую дату родов, узнать текущий срок и спланировать
              визиты к врачу.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Наши калькуляторы
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Дата родов</strong> —
                расчёт предполагаемой даты родов (ПДР) по дате последних
                месячных, дате зачатия или данным УЗИ. Таймлайн ключевых
                событий беременности.
              </li>
              <li>
                <strong className="text-foreground">Срок беременности</strong>{' '}
                — определение текущего акушерского срока в неделях и днях
                с прогрессом по триместрам.
              </li>
              <li>
                <strong className="text-foreground">Овуляция</strong> —
                расчёт дней овуляции и фертильного окна для планирования
                беременности.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как пользоваться
            </h2>
            <p>
              Все калькуляторы работают мгновенно — результат обновляется
              при изменении параметров. Укажите дату последних месячных или
              другие данные, и калькулятор рассчитает все необходимые сроки
              и даты.
            </p>
            <p>
              Результаты расчётов носят информационный характер и не заменяют
              наблюдение у врача акушера-гинеколога.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
