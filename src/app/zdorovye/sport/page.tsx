import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Heart, Info, Calculator, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы для спорта онлайн — пульс, белок, тренировки',
  description:
    'Бесплатные калькуляторы для спорта: пульсовые зоны для тренировок и норма белка для спортсменов. Мгновенный расчёт по научным формулам без регистрации.',
  keywords: [
    'калькулятор для спорта',
    'пульсовые зоны',
    'калькулятор пульса',
    'белок для спортсменов',
    'норма белка',
    'тренировки онлайн',
  ],
  openGraph: {
    title: 'Калькуляторы для спорта онлайн — пульс, белок, тренировки',
    description:
      'Бесплатные калькуляторы для спорта: пульсовые зоны и норма белка для спортсменов.',
    type: 'website',
    url: '/zdorovye/sport',
  },
  alternates: {
    canonical: '/zdorovye/sport',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Спорт', href: '/zdorovye/sport' },
]

export default function SportPage() {
  const section = NAV_SECTIONS.find((s) => s.href === '/zdorovye/sport')
  if (!section) return null

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Калькуляторы для спорта',
          description:
            'Бесплатные онлайн-калькуляторы для спорта: пульсовые зоны и норма белка.',
          url: 'https://calc-box.ru/zdorovye/sport',
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
            Калькуляторы для спорта
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте персональные пульсовые зоны для эффективных тренировок
            и суточную норму белка для роста мышц и восстановления. Мгновенный
            результат по научным формулам.
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
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Зачем нужны спортивные калькуляторы
            </h2>
            <p>
              Эффективные тренировки требуют точных данных. Зная свои пульсовые
              зоны, вы тренируетесь в нужной интенсивности — жжёте жир,
              развиваете выносливость или наращиваете скорость. Правильная норма
              белка обеспечивает восстановление мышц и прогресс в силовых
              показателях.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Наши калькуляторы
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <Link
                  href="/zdorovye/sport/puls-dlya-trenirovok"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Пульс для тренировок</strong>
                </Link>{' '}
                — 5 персональных пульсовых зон по методу Карвонена. Сравнение
                3 формул максимального пульса (Танака, Хаскелла–Фокса, Гелиша).
              </li>
              <li>
                <Link
                  href="/zdorovye/sport/belok-dlya-sportsmenov"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Белок для спортсменов</strong>
                </Link>{' '}
                — суточная норма протеина по рекомендациям ISSN и ACSM для
                4 типов тренировок. Распределение по приёмам пищи и сравнение
                формул.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Как пользоваться
            </h2>
            <p>
              Все калькуляторы работают в реальном времени — результат
              обновляется мгновенно при изменении параметров. Укажите возраст,
              вес и тип тренировок, и калькулятор подберёт оптимальные значения
              для вашего уровня подготовки.
            </p>
            <p>
              Результаты расчётов носят информационный характер и не заменяют
              консультацию спортивного врача или тренера.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
