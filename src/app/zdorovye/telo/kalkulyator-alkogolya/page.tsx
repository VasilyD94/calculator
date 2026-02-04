import type { Metadata } from 'next'
import Link from 'next/link'
import { AlcoholCalculator } from '@/components/calculators/AlcoholCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BookOpen,
  Compass,
  CircleHelp,
  ArrowUpRight,
  Lightbulb,
  Calculator,
  Info,
  Scale,
  Target,
  Flame,
  Wine,
  Clock,
  Car,
  AlertTriangle,
  Heart,
  Brain,
  Timer,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор алкоголя — через сколько выветрится онлайн бесплатно',
  description:
    'Бесплатный калькулятор алкоголя ✓ Расчёт уровня промилле ✓ Время выветривания ✓ Когда можно за руль ✓ Почасовой график снижения алкоголя в крови.',
  keywords: [
    'калькулятор алкоголя',
    'через сколько выветрится алкоголь',
    'калькулятор промилле',
    'когда можно за руль',
    'выветривание алкоголя',
    'уровень алкоголя в крови',
    'время трезвости',
  ],
  openGraph: {
    title: 'Калькулятор алкоголя — через сколько выветрится онлайн',
    description:
      'Рассчитайте уровень алкоголя в крови и время до полного выветривания. Узнайте, когда можно садиться за руль.',
    type: 'website',
    url: '/zdorovye/telo/kalkulyator-alkogolya',
  },
  alternates: {
    canonical: '/zdorovye/telo/kalkulyator-alkogolya',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Калькулятор алкоголя', href: '/zdorovye/telo/kalkulyator-alkogolya' },
]

export default function AlcoholCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор алкоголя',
          description:
            'Онлайн калькулятор для расчёта уровня алкоголя в крови (промилле) и времени выветривания',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/kalkulyator-alkogolya',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'RUB',
          },
        }}
      />

      {/* FAQPage Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Через сколько выветривается пиво?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Одна бутылка пива (500 мл, 5%) выветривается примерно за 2-3 часа у мужчины весом 80 кг. У женщин и людей с меньшим весом этот процесс занимает больше времени.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько промилле допустимо для вождения в России?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В России допустимый уровень алкоголя в крови для водителей составляет 0,3 промилле. Превышение карается штрафом 30 000 рублей и лишением прав на 1,5-2 года.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как ускорить выведение алкоголя?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Скорость выведения алкоголя практически не поддаётся ускорению. Ни кофе, ни холодный душ, ни физические упражнения существенно не влияют на этот процесс. Единственный надёжный способ — время.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что влияет на скорость выветривания алкоголя?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На скорость выветривания влияют: пол (у женщин медленнее), вес тела, состояние печени, приём пищи, крепость напитка и индивидуальные особенности организма.',
              },
            },
            {
              '@type': 'Question',
              name: 'Через сколько выветривается водка?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '100 мл водки (40%) выветривается примерно за 4-5 часов у мужчины весом 80 кг. Бутылка водки (500 мл) может выводиться до 20-24 часов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли обмануть алкотестер?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Нет, современные алкотестеры измеряют алкоголь в выдыхаемом воздухе напрямую из лёгких. Жвачка, чеснок и другие народные средства не помогут скрыть опьянение.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое промилле?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Промилле (‰) — единица измерения концентрации алкоголя в крови. 1 промилле означает, что в 1 литре крови содержится 1 грамм чистого алкоголя.',
              },
            },
          ],
        }}
      />

      {/* HowTo Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Как рассчитать уровень алкоголя в крови',
          description:
            'Пошаговая инструкция по расчёту уровня алкоголя и времени выветривания.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите свои данные',
              text: 'Выберите пол и укажите свой вес с помощью слайдера.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Выберите напиток',
              text: 'Выберите тип алкогольного напитка из списка и укажите выпитый объём.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет уровень алкоголя в промилле и время до полного выветривания.',
            },
          ],
        }}
      />

      {/* BreadcrumbList Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Главная',
              item: 'https://calc-box.ru',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Тело',
              item: 'https://calc-box.ru/zdorovye/telo',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Калькулятор алкоголя',
              item: 'https://calc-box.ru/zdorovye/telo/kalkulyator-alkogolya',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Калькулятор алкоголя — онлайн расчёт
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте уровень алкоголя в крови и узнайте, через сколько времени
            он полностью выветрится. Калькулятор покажет, когда безопасно садиться
            за руль.
          </p>
        </header>

        {/* Как пользоваться */}
        <section className="mb-8 space-y-3 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="size-5" />
            Как пользоваться калькулятором
          </h2>
          <div className="space-y-2">
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                1
              </span>
              <p>Выберите пол и укажите свой вес с помощью слайдера.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Выберите тип алкогольного напитка из списка и укажите выпитый объём.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Калькулятор покажет уровень алкоголя в промилле и время до полного выветривания.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт уровня алкоголя</h2>
          <AlcoholCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор ИМТ
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/idealnyj-ves"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Target className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Идеальный вес
              </span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Calculator className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1 — Что такое промилле */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое промилле и зачем его считать
            </h2>
            <p>
              Промилле (‰) — это единица измерения концентрации алкоголя в крови.
              Одно промилле означает, что в 1 литре крови содержится 1 грамм
              чистого этилового спирта. Это важный показатель, который определяет
              степень опьянения и способность управлять транспортом.
            </p>
            <p>
              Знание своего уровня алкоголя помогает принимать ответственные решения:
              не садиться за руль в состоянии опьянения, планировать время до важных
              событий, понимать своё состояние. Калькулятор даёт приблизительную
              оценку — реальный уровень может отличаться в зависимости от
              индивидуальных особенностей организма.
            </p>
            <p className="text-sm rounded-md bg-destructive/10 text-destructive p-3">
              <strong>Важно:</strong> Калькулятор даёт приблизительную оценку.
              Единственный надёжный способ узнать уровень алкоголя — анализ крови
              или сертифицированный алкотестер. Садиться за руль в состоянии
              опьянения запрещено законом.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Формула расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Как рассчитывается уровень алкоголя
            </h2>
            <p>
              Калькулятор использует формулу Видмарка — научно обоснованный метод
              расчёта концентрации алкоголя в крови, применяемый в судебной
              медицине с 1932 года.
            </p>
            <div className="rounded-lg border p-4 space-y-3">
              <p className="text-center text-foreground font-semibold">
                BAC = (A / (r × W)) × 100
              </p>
              <div className="grid gap-2 text-sm">
                <p><strong className="text-foreground">BAC</strong> — уровень алкоголя в крови (промилле)</p>
                <p><strong className="text-foreground">A</strong> — масса выпитого алкоголя в граммах</p>
                <p><strong className="text-foreground">r</strong> — коэффициент распределения (0.7 для мужчин, 0.6 для женщин)</p>
                <p><strong className="text-foreground">W</strong> — масса тела в килограммах</p>
              </div>
            </div>
            <p>
              Организм выводит алкоголь со средней скоростью <strong className="text-foreground">0.1–0.15 промилле в час</strong>.
              Эта скорость практически не зависит от внешних факторов и определяется
              работой печени.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Степени опьянения */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Brain className="size-5" />
              Степени алкогольного опьянения
            </h2>
            <p>
              Уровень алкоголя в крови напрямую влияет на состояние организма.
              Вот как проявляются разные степени опьянения:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  ✓
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Менее 0.3‰
                    <span className="font-normal text-xs text-muted-foreground"> — норма</span>
                  </p>
                  <p>Отсутствие влияния алкоголя. Допустимый уровень для вождения.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                  !
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    0.3–0.5‰
                    <span className="font-normal text-xs text-muted-foreground"> — лёгкое опьянение</span>
                  </p>
                  <p>Лёгкая эйфория, расслабление. Незначительное снижение реакции.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                  ⚠
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    0.5–1.5‰
                    <span className="font-normal text-xs text-muted-foreground"> — среднее опьянение</span>
                  </p>
                  <p>Нарушена координация, снижено внимание. Вождение опасно.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 text-xs font-medium">
                  ✕
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    1.5–2.5‰
                    <span className="font-normal text-xs text-muted-foreground"> — сильное опьянение</span>
                  </p>
                  <p>Выраженные нарушения речи и движений. Возможна агрессия или апатия.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-red-800 text-xs font-medium">
                  ☠
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Более 2.5‰
                    <span className="font-normal text-xs text-muted-foreground"> — тяжёлое опьянение</span>
                  </p>
                  <p>Риск потери сознания. Выше 4‰ — угроза жизни, требуется медицинская помощь.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Таблица выветривания */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Timer className="size-5" />
              Таблица времени выветривания алкоголя
            </h2>
            <p>
              Ориентировочное время выветривания алкоголя для мужчины весом 80 кг.
              Для женщин и людей с меньшим весом время увеличивается на 20–30%.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Напиток</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Объём</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Время</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🍺 Пиво светлое (4.5%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">500 мл</strong></td>
                    <td className="py-2 pl-2">2–3 часа</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🍺 Пиво крепкое (7%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">500 мл</strong></td>
                    <td className="py-2 pl-2">3–4 часа</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🍷 Вино (12%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">200 мл</strong></td>
                    <td className="py-2 pl-2">2–3 часа</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🥂 Шампанское (12%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">150 мл</strong></td>
                    <td className="py-2 pl-2">1.5–2 часа</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🥃 Водка (40%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">100 мл</strong></td>
                    <td className="py-2 pl-2">4–5 часов</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">🥃 Виски/Коньяк (40%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">50 мл</strong></td>
                    <td className="py-2 pl-2">2–3 часа</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">🍸 Ликёр (25%)</td>
                    <td className="py-2 px-2"><strong className="text-foreground">50 мл</strong></td>
                    <td className="py-2 pl-2">1–1.5 часа</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать для своего веса&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Вождение */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Car className="size-5" />
              Алкоголь и вождение в России
            </h2>
            <p>
              В России действуют строгие правила относительно вождения в состоянии
              алкогольного опьянения. Знание этих правил поможет избежать серьёзных
              проблем с законом.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="size-5 text-amber-500" />
                  Допустимый уровень
                </h3>
                <p>
                  Максимально допустимый уровень алкоголя в крови для водителя —
                  <strong className="text-foreground"> 0.3 промилле</strong> (0.16 мг/л в выдыхаемом воздухе).
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="size-5 text-red-500" />
                  Штраф за превышение
                </h3>
                <p>
                  Вождение в нетрезвом виде: <strong className="text-foreground">30 000 ₽</strong> штраф
                  и лишение прав на <strong className="text-foreground">1.5–2 года</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="size-5 text-red-500" />
                  Повторное нарушение
                </h3>
                <p>
                  Повторное вождение в нетрезвом виде: <strong className="text-foreground">200 000–300 000 ₽</strong> штраф
                  или до <strong className="text-foreground">2 лет</strong> лишения свободы.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="size-5 text-red-500" />
                  Отказ от освидетельствования
                </h3>
                <p>
                  Отказ от медицинского освидетельствования приравнивается к вождению
                  в нетрезвом виде — <strong className="text-foreground">те же наказания</strong>.
                </p>
              </div>
            </div>
            <p className="text-sm rounded-md bg-destructive/10 text-destructive p-3">
              <strong>Помните:</strong> Даже небольшое количество алкоголя снижает
              реакцию и увеличивает риск ДТП. Если планируете пить — не садитесь за руль.
              Используйте такси или общественный транспорт.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Факторы влияния */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Activity className="size-5" />
              Что влияет на скорость выветривания
            </h2>
            <p>
              Скорость выведения алкоголя из организма зависит от множества факторов.
              Понимание этих факторов поможет более точно оценить своё состояние.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Пол</p>
                  <p>У женщин алкоголь выводится медленнее из-за меньшего содержания воды в организме.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Масса тела</p>
                  <p>Чем больше вес, тем больше объём крови и ниже концентрация алкоголя.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Состояние печени</p>
                  <p>Печень перерабатывает 90% алкоголя. Заболевания печени замедляют этот процесс.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Приём пищи</p>
                  <p>Еда замедляет всасывание алкоголя, но не влияет на скорость выведения.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Генетика</p>
                  <p>Активность ферментов печени (ADH, ALDH) определяется генетически.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Мифы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Мифы о выветривании алкоголя
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">❌ Кофе поможет протрезветь</h3>
                <p>
                  Кофеин не выводит алкоголь. Он лишь временно бодрит, создавая
                  иллюзию трезвости, но не влияет на уровень алкоголя в крови.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">❌ Холодный душ отрезвляет</h3>
                <p>
                  Холодная вода может взбодрить, но не ускорит выведение алкоголя.
                  Печень работает с постоянной скоростью.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">❌ Физические упражнения</h3>
                <p>
                  Потоотделение выводит менее 5% алкоголя. Основная работа — на печени,
                  и её нельзя ускорить.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">❌ Жвачка обманет алкотестер</h3>
                <p>
                  Алкотестер измеряет алкоголь в воздухе из лёгких, а не изо рта.
                  Жвачка и освежители не помогут.
                </p>
              </div>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              <strong>Единственный работающий способ</strong> снизить уровень алкоголя —
              время. Печень перерабатывает примерно 10 мл чистого спирта в час,
              и ускорить этот процесс невозможно.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Влияние на здоровье */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="size-5" />
              Влияние алкоголя на организм
            </h2>
            <p>
              Алкоголь воздействует на все системы организма. Понимание этого
              воздействия помогает принимать осознанные решения об употреблении.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Brain className="size-5 text-purple-400" />
                  Мозг
                </h3>
                <p>
                  Снижает скорость реакции, нарушает координацию, ухудшает
                  память и способность принимать решения.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="size-5 text-red-400" />
                  Сердце
                </h3>
                <p>
                  Повышает артериальное давление, увеличивает нагрузку на
                  сердечно-сосудистую систему.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Activity className="size-5 text-amber-400" />
                  Печень
                </h3>
                <p>
                  Основной орган переработки алкоголя. Регулярное употребление
                  может привести к циррозу.
                </p>
              </div>
            </div>
            <p>
              При регулярном употреблении даже умеренных доз алкоголя повышается
              риск развития зависимости, заболеваний печени и сердечно-сосудистой
              системы. Безопасной дозы алкоголя не существует — любое количество
              несёт определённые риски для здоровья.
            </p>
          </div>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <CircleHelp className="size-5" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Через сколько выветривается пиво?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Одна бутылка пива (500 мл, 5%) выветривается примерно за <strong className="text-foreground">2–3 часа</strong> у
                  мужчины весом 80 кг. У женщин и людей с меньшим весом этот процесс
                  занимает больше времени.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько промилле допустимо для вождения в России?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В России допустимый уровень алкоголя в крови для водителей составляет
                  <strong className="text-foreground"> 0.3 промилле</strong>. Превышение карается штрафом
                  30 000 рублей и лишением прав на 1.5–2 года.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как ускорить выведение алкоголя?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Скорость выведения алкоголя практически не поддаётся ускорению.
                  Ни кофе, ни холодный душ, ни физические упражнения существенно
                  не влияют на этот процесс. Единственный надёжный способ — <strong className="text-foreground">время</strong>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что влияет на скорость выветривания алкоголя?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  На скорость выветривания влияют: пол (у женщин медленнее), вес тела,
                  состояние печени, приём пищи, крепость напитка и индивидуальные
                  особенности организма.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Через сколько выветривается водка?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  100 мл водки (40%) выветривается примерно за <strong className="text-foreground">4–5 часов</strong> у
                  мужчины весом 80 кг. Бутылка водки (500 мл) может выводиться до 20–24 часов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли обмануть алкотестер?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, современные алкотестеры измеряют алкоголь в выдыхаемом воздухе
                  напрямую из лёгких. Жвачка, чеснок и другие народные средства
                  <strong className="text-foreground"> не помогут</strong> скрыть опьянение.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое промилле?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Промилле (‰) — единица измерения концентрации алкоголя в крови.
                  1 промилле означает, что в 1 литре крови содержится <strong className="text-foreground">1 грамм</strong> чистого
                  алкоголя.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-3" aria-label="Связанные калькуляторы">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ArrowUpRight className="size-5" />
              Связанные калькуляторы
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="size-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Calculator className="size-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-vozrasta"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Clock className="size-4 text-muted-foreground" />
                Калькулятор возраста
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
