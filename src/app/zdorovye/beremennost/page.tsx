import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Flame, Info, Calculator, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы беременности — дата родов, срок, овуляция, группа крови',
  description:
    'Бесплатные калькуляторы беременности: расчёт даты родов (ПДР), определение срока беременности, календарь овуляции и группа крови ребёнка. Мгновенный результат без регистрации.',
  keywords: [
    'калькулятор беременности',
    'дата родов',
    'срок беременности',
    'калькулятор овуляции',
    'ПДР онлайн',
    'календарь беременности',
    'группа крови ребенка',
  ],
  openGraph: {
    title: 'Калькуляторы беременности — дата родов, срок, овуляция, группа крови',
    description:
      'Бесплатные калькуляторы беременности: дата родов, срок беременности, овуляция и группа крови ребёнка.',
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
            'Бесплатные онлайн-калькуляторы беременности: дата родов, срок, овуляция и группа крови ребёнка.',
          url: 'https://calc-box.ru/zdorovye/beremennost',
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
            item: `https://calc-box.ru${item.href}`,
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
            беременности, спланируйте зачатие с помощью календаря овуляции
            и узнайте возможную группу крови ребёнка. Мгновенный результат без регистрации.
          </p>
        </header>

        <section className="mb-10">
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-base text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hot && <Flame className="h-3.5 w-3.5 shrink-0" />}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8 text-sm leading-6 text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Калькуляторы для будущих мам
            </h2>
            <p>
              Беременность — особенный период, когда важно знать точные сроки
              и ключевые даты. Наши калькуляторы помогут определить
              предполагаемую дату родов, узнать текущий срок, спланировать
              визиты к врачу и узнать возможную группу крови будущего малыша.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Наши калькуляторы
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <Link
                  href="/zdorovye/beremennost/data-rodov"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Дата родов</strong>
                </Link>{' '}
                — расчёт предполагаемой даты родов (ПДР) по дате последних
                месячных, дате зачатия или данным УЗИ. Таймлайн ключевых
                событий беременности.
              </li>
              <li>
                <Link
                  href="/zdorovye/beremennost/srok-beremennosti"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Срок беременности</strong>
                </Link>{' '}
                — определение текущего акушерского срока в неделях и днях
                с прогрессом по триместрам.
              </li>
              <li>
                <Link
                  href="/zdorovye/beremennost/ovulyatsiya"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Овуляция</strong>
                </Link>{' '}
                — расчёт дней овуляции и фертильного окна для планирования
                беременности.
              </li>
              <li>
                <Link
                  href="/zdorovye/beremennost/gruppa-krovi-rebenka"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Группа крови ребёнка</strong>
                </Link>{' '}
                — расчёт возможной группы крови и резус-фактора ребёнка
                по группам крови родителей с процентом вероятности.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
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
