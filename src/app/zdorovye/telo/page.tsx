import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Flame, Info, Calculator, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькуляторы тела — ИМТ, вес, жир, метаболизм, сон и давление',
  description:
    'Бесплатные калькуляторы тела: индекс массы тела, идеальный вес, процент жира, базовый метаболизм, калькулятор сна, норма давления и алкоголя. Мгновенный расчёт без регистрации.',
  keywords: [
    'калькулятор тела',
    'калькулятор ИМТ',
    'идеальный вес',
    'процент жира',
    'базовый метаболизм',
    'калькулятор сна',
    'норма давления',
    'калькулятор алкоголя',
  ],
  openGraph: {
    title: 'Калькуляторы тела — ИМТ, вес, жир, метаболизм, сон и давление',
    description:
      'Бесплатные калькуляторы тела: ИМТ, идеальный вес, процент жира, базовый метаболизм, калькулятор сна и давления.',
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
            'Бесплатные онлайн-калькуляторы тела: ИМТ, идеальный вес, процент жира, метаболизм, сон и давление.',
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
            процент жира, базовый метаболизм, оптимальные часы сна и норму давления.
            Все расчёты мгновенные и основаны на научных формулах.
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Наши калькуляторы
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
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
              <li>
                <Link
                  href="/zdorovye/telo/kalkulyator-vozrasta"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор возраста</strong>
                </Link>{' '}
                — точный расчёт возраста в годах, месяцах, неделях и днях
                с ближайшими юбилеями и интересными фактами.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/kalkulyator-alkogolya"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор алкоголя</strong>
                </Link>{' '}
                — расчёт времени выведения алкоголя из крови по формуле Видмарка
                с учётом пола, веса и количества выпитого.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/kalkulyator-sna"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Калькулятор сна</strong>
                </Link>{' '}
                — расчёт оптимального времени пробуждения по циклам сна
                для максимальной бодрости утром.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/norma-davleniya"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Норма давления</strong>
                </Link>{' '}
                — проверка артериального давления по возрасту с классификацией
                по стандартам ВОЗ и рекомендациями.
              </li>
              <li>
                <Link
                  href="/zdorovye/telo/tip-teloslozheniya"
                  className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                >
                  <strong>Тип телосложения</strong>
                </Link>{' '}
                — определение соматотипа (эктоморф, мезоморф, эндоморф)
                по обхвату запястья с рекомендациями по питанию и тренировкам.
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
