import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Heart, Info, Calculator, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы тела — ИМТ, идеальный вес, жир и метаболизм',
  description:
    'Бесплатные калькуляторы тела: индекс массы тела, идеальный вес, процент жира и базовый метаболизм. Мгновенный расчёт по научным формулам без регистрации.',
  keywords: [
    'калькулятор тела',
    'калькулятор ИМТ',
    'идеальный вес',
    'процент жира',
    'базовый метаболизм',
    'индекс массы тела',
  ],
  openGraph: {
    title: 'Калькуляторы тела — ИМТ, идеальный вес, жир и метаболизм',
    description:
      'Бесплатные калькуляторы тела: ИМТ, идеальный вес, процент жира и базовый метаболизм.',
    type: 'website',
    url: '/zdorovye/telo',
  },
  alternates: {
    canonical: '/zdorovye/telo',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
]

export default function TeloPage() {
  const section = NAV_SECTIONS.find((s) => s.href === '/zdorovye/telo')
  if (!section) return null

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Калькуляторы тела',
          description:
            'Бесплатные онлайн-калькуляторы тела: ИМТ, идеальный вес, процент жира и метаболизм.',
          url: 'https://calc-box.ru/zdorovye/telo',
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
            Калькуляторы тела
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте свой индекс массы тела, идеальный вес по 5 формулам,
            процент жира и базовый метаболизм. Все расчёты мгновенные
            и основаны на научных формулах.
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
              Зачем знать параметры тела
            </h2>
            <p>
              Понимание своих физических показателей — первый шаг к управлению
              здоровьем. ИМТ помогает оценить соотношение роста и веса, процент
              жира показывает реальный состав тела, а базовый метаболизм —
              сколько калорий сжигает ваш организм в состоянии покоя.
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
                  href="/zdorovye/telo/kalkulyator-imt"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор ИМТ</strong>
                </Link>{' '}
                — индекс массы тела по шкале ВОЗ с 7 категориями, идеальным
                диапазоном веса и персональными рекомендациями.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/idealnyj-ves"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Идеальный вес</strong>
                </Link>{' '}
                — расчёт по 5 формулам (Devine, Robinson, Miller, Hamwi, Брока)
                с наглядным сравнением результатов.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/protsent-zhira"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Процент жира</strong>
                </Link>{' '}
                — оценка содержания жировой ткани по 3 формулам на основе
                обхватов тела. Визуальная шкала и рекомендации.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/bazovyj-metabolizm"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Базовый метаболизм</strong>
                </Link>{' '}
                — расчёт BMR по 5 формулам (Миффлина-Сан Жеора,
                Харриса-Бенедикта и другим) для планирования питания.
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
              обновляется мгновенно при изменении параметров. Введите рост, вес,
              возраст и пол — остальное калькулятор рассчитает сам.
            </p>
            <p>
              Результаты расчётов носят информационный характер и не заменяют
              консультацию врача или диетолога.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
