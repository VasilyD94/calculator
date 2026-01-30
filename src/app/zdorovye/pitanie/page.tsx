import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы питания онлайн — калории, БЖУ, дефицит, норма воды',
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
    title: 'Калькуляторы питания онлайн',
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
          url: 'https://calcbox.ru/zdorovye/pitanie',
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
            Калькуляторы питания
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму калорий, оптимальное соотношение белков,
            жиров и углеводов, дефицит калорий для похудения и норму воды.
            Мгновенный результат по научным формулам.
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
            <h2 className="text-2xl font-bold text-foreground">
              Наши калькуляторы питания
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Калькулятор калорий</strong>{' '}
                — расчёт суточной нормы по 5 научным формулам с прогнозом
                похудения и набора массы.
              </li>
              <li>
                <strong className="text-foreground">Калькулятор БЖУ</strong> —
                оптимальное соотношение белков, жиров и углеводов для 5 типов
                диет: сбалансированная, высокобелковая, низкоуглеводная, кето и
                спортивная.
              </li>
              <li>
                <strong className="text-foreground">Дефицит калорий</strong> —
                расчёт безопасного дефицита для похудения с прогнозом сроков
                достижения цели.
              </li>
              <li>
                <strong className="text-foreground">Норма воды</strong> —
                индивидуальный расчёт суточной потребности в воде с учётом веса,
                активности и климата.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
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
