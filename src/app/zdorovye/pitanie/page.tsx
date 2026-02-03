import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Flame, Info, Calculator, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы питания — калории, БЖУ, дефицит и норма воды',
  description:
    'Бесплатные калькуляторы питания: суточная норма калорий, соотношение БЖУ, дефицит калорий для похудения и норма воды. Мгновенный расчёт без регистрации.',
  keywords: [
    'калькулятор питания',
    'калькулятор калорий',
    'калькулятор БЖУ',
    'дефицит калорий',
    'норма воды',
    'расчёт калорий онлайн',
  ],
  openGraph: {
    title: 'Калькуляторы питания — калории, БЖУ, дефицит и норма воды',
    description:
      'Бесплатные калькуляторы питания: калории, БЖУ, дефицит калорий и норма воды.',
    type: 'website',
    url: '/zdorovye/pitanie',
  },
  alternates: {
    canonical: '/zdorovye/pitanie',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
]

export default function PitaniePage() {
  const section = NAV_SECTIONS.find((s) => s.href === '/zdorovye/pitanie')
  if (!section) return null

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Калькуляторы питания',
          description:
            'Бесплатные онлайн-калькуляторы питания: калории, БЖУ, дефицит калорий и норма воды.',
          url: 'https://calc-box.ru/zdorovye/pitanie',
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
            Калькуляторы питания
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму калорий, оптимальное соотношение белков,
            жиров и углеводов, дефицит калорий для похудения и норму воды.
            Мгновенный результат по научным формулам.
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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Зачем считать калории и БЖУ
            </h2>
            <p>
              Контроль питания — основа управления весом и здоровьем. Зная свою
              суточную норму калорий, вы можете осознанно планировать рацион:
              создавать дефицит для похудения, профицит для набора массы или
              поддерживать текущий вес. Расчёт БЖУ помогает сбалансировать
              макронутриенты — белки для мышц, жиры для гормонов и углеводы для
              энергии.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Наши калькуляторы питания
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <Link
                  href="/zdorovye/pitanie/kalkulyator-kalorij"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор калорий</strong>
                </Link>{' '}
                — расчёт суточной нормы по 5 научным формулам с прогнозом
                похудения и набора массы.
              </li>
              <li>
                <Link
                  href="/zdorovye/pitanie/kalkulyator-bzhu"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор БЖУ</strong>
                </Link>{' '}
                — оптимальное соотношение белков, жиров и углеводов для 5 типов
                диет: сбалансированная, высокобелковая, низкоуглеводная, кето и
                спортивная.
              </li>
              <li>
                <Link
                  href="/zdorovye/pitanie/defitsit-kalorij"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Дефицит калорий</strong>
                </Link>{' '}
                — расчёт безопасного дефицита для похудения с прогнозом сроков
                достижения цели.
              </li>
              <li>
                <Link
                  href="/zdorovye/pitanie/norma-vody"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Норма воды</strong>
                </Link>{' '}
                — индивидуальный расчёт суточной потребности в воде с учётом
                веса, активности и климата.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Как пользоваться калькуляторами
            </h2>
            <p>
              Все калькуляторы работают в реальном времени — результат
              обновляется мгновенно при изменении параметров. Введите свои данные
              (пол, возраст, рост, вес и уровень активности) один раз — они
              автоматически сохранятся и будут подставлены во все остальные
              калькуляторы.
            </p>
            <p>
              Результаты расчётов носят информационный характер и не заменяют
              консультацию диетолога или врача.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
