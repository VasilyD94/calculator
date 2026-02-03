import type { Metadata } from 'next'
import Link from 'next/link'
import { AgeCalculator } from '@/components/calculators/AgeCalculator'
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
  ClipboardList,
  Flame,
  Percent,
  Calendar,
  Clock,
  Cake,
  Star,
  Heart,
  Users,
  Globe,
  History,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Сколько мне лет — калькулятор возраста онлайн бесплатно',
  description:
    'Бесплатный калькулятор возраста ✓ Точный расчёт лет, месяцев и дней ✓ Дней до дня рождения ✓ Знак зодиака и китайский гороскоп ✓ Интересные факты о прожитом времени.',
  keywords: [
    'сколько мне лет',
    'калькулятор возраста',
    'расчёт возраста',
    'узнать возраст',
    'возраст онлайн',
    'дней до дня рождения',
    'знак зодиака',
    'калькулятор дня рождения',
  ],
  openGraph: {
    title: 'Сколько мне лет — калькулятор возраста онлайн',
    description:
      'Узнайте свой точный возраст в годах, месяцах и днях. Дней до следующего дня рождения и юбилея.',
    type: 'website',
    url: '/zdorovye/telo/kalkulyator-vozrasta',
  },
  alternates: {
    canonical: '/zdorovye/telo/kalkulyator-vozrasta',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Калькулятор возраста', href: '/zdorovye/telo/kalkulyator-vozrasta' },
]

export default function AgeCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор возраста',
          description:
            'Онлайн калькулятор для расчёта точного возраста в годах, месяцах и днях с определением знака зодиака и китайского гороскопа',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/kalkulyator-vozrasta',
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
              name: 'Как точно рассчитать свой возраст?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для точного расчёта возраста нужно знать дату рождения. Калькулятор вычисляет разницу между текущей датой и датой рождения, учитывая високосные годы и разную длину месяцев.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько дней в году?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В обычном году 365 дней, а в високосном — 366 дней. Високосные годы наступают каждые 4 года (кроме столетий, не делящихся на 400).',
              },
            },
            {
              '@type': 'Question',
              name: 'Как узнать свой знак зодиака?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Знак зодиака определяется по дате рождения. Всего 12 знаков, каждый охватывает период около месяца. Например, Овен — с 21 марта по 19 апреля.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое биологический возраст?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Биологический возраст — это состояние организма, которое может отличаться от календарного возраста. На него влияют образ жизни, питание, физическая активность и генетика.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как определяется китайский знак зодиака?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Китайский зодиак основан на 12-летнем цикле, где каждый год представлен животным: Крыса, Бык, Тигр, Кролик, Дракон, Змея, Лошадь, Коза, Обезьяна, Петух, Собака, Свинья.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда наступает совершеннолетие в России?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В России совершеннолетие наступает в 18 лет. С этого момента человек получает полную гражданскую дееспособность.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое юбилей?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Юбилей — это годовщина, которая приходится на круглую дату: 10, 20, 25, 30, 40, 50 лет и так далее. Особенно отмечаются «круглые» даты, кратные 10 или 25.',
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
          name: 'Как рассчитать свой возраст',
          description:
            'Пошаговая инструкция по расчёту точного возраста с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите дату рождения',
              text: 'Укажите день, месяц и год вашего рождения в поле ввода.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно покажет ваш точный возраст в годах, месяцах и днях.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Узнайте дополнительную информацию',
              text: 'Посмотрите, сколько дней до дня рождения, ваш знак зодиака и интересные факты.',
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
              name: 'Калькулятор возраста',
              item: 'https://calc-box.ru/zdorovye/telo/kalkulyator-vozrasta',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Сколько мне лет — онлайн расчёт
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте свой точный возраст в годах, месяцах и днях. Калькулятор
            покажет, сколько дней до следующего дня рождения, ваш знак зодиака
            и интересные факты о прожитом времени.
          </p>
        </header>

        {/* Как пользоваться */}
        <section className="mb-8 space-y-3 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Как пользоваться калькулятором
          </h2>
          <div className="space-y-2">
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                1
              </span>
              <p>Укажите день, месяц и год вашего рождения в поле ввода.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Калькулятор мгновенно покажет ваш точный возраст в годах, месяцах и днях.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Посмотрите, сколько дней до дня рождения, ваш знак зодиака и интересные факты.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт возраста</h2>
          <AgeCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор ИМТ
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/idealnyj-ves"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Target className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Идеальный вес
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
              </span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Calculator className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1 — Что такое возраст */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Зачем знать свой точный возраст
            </h2>
            <p>
              Возраст — это не просто число. Знание точного возраста важно для
              многих аспектов жизни: от оформления документов до понимания своего
              здоровья. Хотя большинство людей знают, сколько им лет, точный
              расчёт в днях, месяцах и годах может быть полезен в различных
              ситуациях.
            </p>
            <p>
              Наш калькулятор не только покажет ваш точный возраст, но и
              рассчитает, сколько дней осталось до следующего дня рождения,
              когда будет ваш следующий юбилей, и даже сколько ударов сделало
              ваше сердце за всю жизнь. Кроме того, вы узнаете свой знак зодиака
              и год по китайскому календарю.
            </p>
            <p>
              Точное знание возраста особенно важно при расчёте{' '}
              <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                базового метаболизма
              </Link>{' '}
              и{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                суточной нормы калорий
              </Link>
              , поскольку эти показатели напрямую зависят от возраста.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Как рассчитывается возраст */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Как рассчитывается возраст
            </h2>
            <p>
              Расчёт возраста кажется простым: нужно вычесть год рождения из
              текущего года. Однако для точного результата необходимо учитывать
              месяцы, дни и даже високосные годы.
            </p>
            <div className="rounded-lg border p-4 space-y-3">
              <p className="text-center text-foreground font-semibold">
                Возраст = Текущая дата − Дата рождения
              </p>
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <p>
                  Если вы родились <strong className="text-foreground">15 марта 1990 года</strong>,
                  а сегодня <strong className="text-foreground">3 февраля 2026 года</strong>:
                </p>
                <p>
                  Вам <strong className="text-foreground">35 лет, 10 месяцев и 19 дней</strong>
                </p>
              </div>
            </div>
            <p>
              Калькулятор автоматически учитывает, что в разных месяцах разное
              количество дней (от 28 до 31), а также високосные годы, когда в
              феврале 29 дней вместо 28.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Интересные факты о времени */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Интересные факты о времени жизни
            </h2>
            <p>
              За свою жизнь человек проживает удивительное количество событий.
              Вот несколько цифр, которые помогут осознать ценность времени:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="h-5 w-5 text-red-400" />
                  Сердцебиение
                </h3>
                <p>
                  Сердце бьётся около <strong className="text-foreground">100 000</strong> раз
                  в день. За год это более <strong className="text-foreground">36 миллионов</strong> ударов,
                  а за 70 лет — около <strong className="text-foreground">2,5 миллиарда</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Clock className="h-5 w-5 text-blue-400" />
                  Дыхание
                </h3>
                <p>
                  Человек делает около <strong className="text-foreground">20 000</strong> вдохов
                  в день. За 70 лет это примерно <strong className="text-foreground">500 миллионов</strong> вдохов.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Globe className="h-5 w-5 text-green-400" />
                  Путь вокруг Солнца
                </h3>
                <p>
                  Каждый год Земля проходит <strong className="text-foreground">940 млн км</strong> вокруг
                  Солнца. За 30 лет вы путешествуете в космосе более <strong className="text-foreground">28 млрд км</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Users className="h-5 w-5 text-amber-400" />
                  Сон
                </h3>
                <p>
                  Человек спит около <strong className="text-foreground">8 часов</strong> в сутки.
                  За 70 лет это почти <strong className="text-foreground">23 года</strong> сна.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Знаки зодиака */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Star className="h-5 w-5" />
              Знаки зодиака по дате рождения
            </h2>
            <p>
              Знак зодиака определяется положением Солнца относительно созвездий
              в момент рождения. Всего существует 12 знаков, каждый из которых
              охватывает период около месяца.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Знак</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Период</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Стихия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♈ Овен</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">21.03–19.04</strong></td>
                    <td className="py-2 pl-2">Огонь</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♉ Телец</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">20.04–20.05</strong></td>
                    <td className="py-2 pl-2">Земля</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♊ Близнецы</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">21.05–20.06</strong></td>
                    <td className="py-2 pl-2">Воздух</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♋ Рак</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">21.06–22.07</strong></td>
                    <td className="py-2 pl-2">Вода</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♌ Лев</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">23.07–22.08</strong></td>
                    <td className="py-2 pl-2">Огонь</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♍ Дева</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">23.08–22.09</strong></td>
                    <td className="py-2 pl-2">Земля</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♎ Весы</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">23.09–22.10</strong></td>
                    <td className="py-2 pl-2">Воздух</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♏ Скорпион</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">23.10–21.11</strong></td>
                    <td className="py-2 pl-2">Вода</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♐ Стрелец</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">22.11–21.12</strong></td>
                    <td className="py-2 pl-2">Огонь</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♑ Козерог</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">22.12–19.01</strong></td>
                    <td className="py-2 pl-2">Земля</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">♒ Водолей</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">20.01–18.02</strong></td>
                    <td className="py-2 pl-2">Воздух</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">♓ Рыбы</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">19.02–20.03</strong></td>
                    <td className="py-2 pl-2">Вода</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Узнать свой знак зодиака&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Возрастные этапы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <History className="h-5 w-5" />
              Возрастные этапы жизни
            </h2>
            <p>
              Жизнь человека традиционно делится на несколько возрастных этапов,
              каждый из которых имеет свои особенности и характеристики.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Младенчество
                    <span className="font-normal text-xs text-muted-foreground"> 0–1 год</span>
                  </p>
                  <p>Период активного роста и развития основных навыков.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Детство
                    <span className="font-normal text-xs text-muted-foreground"> 1–12 лет</span>
                  </p>
                  <p>Формирование личности, обучение, активное познание мира.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Подростковый период
                    <span className="font-normal text-xs text-muted-foreground"> 12–18 лет</span>
                  </p>
                  <p>Половое созревание, формирование самосознания.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Молодость
                    <span className="font-normal text-xs text-muted-foreground"> 18–35 лет</span>
                  </p>
                  <p>Пик физической формы, создание семьи, карьера.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Средний возраст
                    <span className="font-normal text-xs text-muted-foreground"> 35–55 лет</span>
                  </p>
                  <p>Профессиональная зрелость, забота о семье.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  6
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Зрелость и старость
                    <span className="font-normal text-xs text-muted-foreground"> 55+ лет</span>
                  </p>
                  <p>Накопленная мудрость, передача опыта, время для себя.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Юбилеи и важные даты */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Cake className="h-5 w-5" />
              Юбилеи и важные даты
            </h2>
            <p>
              В жизни каждого человека есть особые даты, которые принято отмечать.
              Юбилеи — это круглые годовщины, которые обычно кратны 5 или 10 годам.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">18 лет</h3>
                <p>
                  Совершеннолетие. Получение полной гражданской дееспособности,
                  право голоса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">25 лет</h3>
                <p>
                  Четверть века. Популярная дата для подведения первых итогов.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">30 лет</h3>
                <p>
                  Начало зрелости. Традиционно считается временем стабильности.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">40 лет</h3>
                <p>
                  «Сорокалетие». Многие отмечают начало второй молодости.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">50 лет</h3>
                <p>
                  Полвека. Важный юбилей, который традиционно отмечают широко.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">60+ лет</h3>
                <p>
                  Возраст мудрости. Пенсионный возраст в большинстве стран.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Узнать дату следующего юбилея&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Практические советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Практические советы
            </h2>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Следите за здоровьем с возрастом</p>
                  <p>После <strong className="text-foreground">30 лет</strong> метаболизм замедляется. Важно контролировать вес и вести активный образ жизни.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Регулярные обследования</p>
                  <p>Рекомендуется проходить полное обследование раз в год после <strong className="text-foreground">40 лет</strong>.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Планируйте заранее</p>
                  <p>Зная дату следующего дня рождения, можно заранее спланировать празднование.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Используйте калькуляторы здоровья</p>
                  <p>
                    Возраст влияет на расчёт{' '}
                    <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      ИМТ
                    </Link>,{' '}
                    <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      калорий
                    </Link>{' '}
                    и других показателей.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Цените каждый день</p>
                  <p>Осознание прожитых дней помогает ценить время и ставить важные цели.</p>
                </div>
              </div>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Помните: возраст — это не ограничение, а этап жизни со своими
              преимуществами. В любом возрасте можно начать что-то новое,
              улучшить здоровье и качество жизни.
            </p>
          </div>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <CircleHelp className="h-5 w-5" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как точно рассчитать свой возраст?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для точного расчёта возраста нужно знать дату рождения. Калькулятор
                  вычисляет разницу между текущей датой и датой рождения, учитывая
                  високосные годы и разную длину месяцев.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько дней в году?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В обычном году <strong className="text-foreground">365</strong> дней,
                  а в високосном — <strong className="text-foreground">366</strong> дней.
                  Високосные годы наступают каждые 4 года (кроме столетий, не делящихся на 400).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как узнать свой знак зодиака?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Знак зодиака определяется по дате рождения. Всего 12 знаков,
                  каждый охватывает период около месяца. Например, Овен — с 21 марта
                  по 19 апреля.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое биологический возраст?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Биологический возраст — это состояние организма, которое может
                  отличаться от календарного возраста. На него влияют образ жизни,
                  питание, физическая активность и генетика.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как определяется китайский знак зодиака?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Китайский зодиак основан на 12-летнем цикле, где каждый год представлен
                  животным: Крыса, Бык, Тигр, Кролик, Дракон, Змея, Лошадь, Коза,
                  Обезьяна, Петух, Собака, Свинья.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда наступает совершеннолетие в России?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В России совершеннолетие наступает в <strong className="text-foreground">18 лет</strong>.
                  С этого момента человек получает полную гражданскую дееспособность.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое юбилей?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Юбилей — это годовщина, которая приходится на круглую дату:
                  10, 20, 25, 30, 40, 50 лет и так далее. Особенно отмечаются
                  «круглые» даты, кратные 10 или 25.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-3" aria-label="Связанные калькуляторы">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5" />
              Связанные калькуляторы
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="h-4 w-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="h-4 w-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="h-4 w-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Calculator className="h-4 w-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Percent className="h-4 w-4 text-muted-foreground" />
                Процент жира
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
