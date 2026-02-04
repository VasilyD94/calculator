import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Flame, Info, Calculator, BookOpen } from 'lucide-react'

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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Калькуляторы для спорта
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте персональные пульсовые зоны для эффективных тренировок
            и суточную норму белка для роста мышц и восстановления. Мгновенный
            результат по научным формулам.
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
              <Info className="size-5" />
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Наши калькуляторы
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="size-5" />
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
