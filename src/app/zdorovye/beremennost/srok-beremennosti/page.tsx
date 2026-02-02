import type { Metadata } from 'next'
import Link from 'next/link'
import { GestationalAgeCalculator } from '@/components/calculators/GestationalAgeCalculator'
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
  Info,
  Calculator,
  Lightbulb,
  ClipboardList,
  CircleHelp,
  ArrowUpRight,
  Baby,
  CalendarDays,
  Stethoscope,
  Heart,
  Scale,
  Puzzle,
  Egg,
  Flame,
  Timer,
  CalendarClock,
  FlaskConical,
  AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор срока беременности — какая неделя сейчас',
  description:
    'Бесплатный калькулятор срока беременности ✓ Текущая неделя и триместр ✓ Развитие малыша по неделям ✓ Расчёт по месячным, зачатию и УЗИ. Без регистрации.',
  keywords: [
    'срок беременности',
    'какая неделя беременности',
    'калькулятор срока беременности',
    'акушерский срок',
    'неделя беременности',
    'развитие плода по неделям',
    'триместр беременности',
    'эмбриональный срок',
  ],
  openGraph: {
    title: 'Калькулятор срока беременности — какая неделя сейчас',
    description:
      'Узнайте текущую неделю беременности, развитие малыша и прогресс по триместрам.',
    type: 'website',
    url: '/zdorovye/beremennost/srok-beremennosti',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/srok-beremennosti',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti' },
]

export default function GestationalAgePage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор срока беременности',
          description:
            'Онлайн калькулятор текущего срока беременности с развитием малыша по неделям',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/beremennost/srok-beremennosti',
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
              name: 'Как определить срок беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Срок беременности определяют тремя способами: по первому дню последних месячных (акушерский срок), по дате зачатия (эмбриональный срок) или по данным УЗИ. Наиболее точный метод — УЗИ в 11–13 недель с погрешностью 3–5 дней.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем акушерский срок отличается от эмбрионального?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Акушерский срок считается от первого дня последних месячных и на 2 недели больше эмбрионального (от момента зачатия). Врачи всегда используют акушерский срок для наблюдения беременности и расчёта даты родов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой размер ребёнка на 20 неделе беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На 20 неделе беременности малыш размером с банан: длина около 16,5 см, вес около 300 г. Это середина беременности — мама хорошо чувствует шевеления, а на УЗИ можно узнать пол.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда начинаются шевеления плода?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Первородящие мамы обычно начинают чувствовать шевеления на 18–20 неделе, повторнородящие — на 16–18 неделе. На самом деле малыш шевелится уже с 8 недели, но из-за маленького размера мама ещё не ощущает движений.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда начинается токсикоз и когда проходит?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Токсикоз обычно начинается на 5–6 неделе и проходит к 12–14 неделе. У некоторых женщин он продолжается до 16–20 недель. Если тошнота и рвота мешают нормально питаться, обязательно обратитесь к врачу.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда вставать на учёт по беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Рекомендуется встать на учёт до 12 недель беременности. Это позволит своевременно пройти первый скрининг и все необходимые обследования. Ранняя постановка на учёт также даёт право на дополнительное пособие.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как считают срок при ЭКО?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'При ЭКО акушерский срок считают от даты переноса эмбриона плюс 2 недели (для 3-дневного эмбриона) или плюс 2 недели и 2 дня (для 5-дневного). Это позволяет перевести эмбриональный срок в акушерский, который используют врачи.',
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
          name: 'Как узнать текущую неделю беременности',
          description:
            'Пошаговая инструкция по определению срока беременности онлайн.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите метод',
              text: 'Укажите, по какой дате рассчитывать: по последним месячным, дате зачатия или данным УЗИ.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Введите дату',
              text: 'Укажите дату последних месячных, зачатия или проведения УЗИ. Для УЗИ также введите срок, определённый врачом.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Узнайте результат',
              text: 'Калькулятор покажет текущую неделю, триместр, развитие малыша и календарь беременности.',
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
              name: 'Беременность',
              item: 'https://calc-box.ru/zdorovye/beremennost',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Срок беременности',
              item: 'https://calc-box.ru/zdorovye/beremennost/srok-beremennosti',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор срока беременности
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте, на какой вы неделе, что происходит с малышом прямо сейчас
            и какой у него размер. Расчёт по дате месячных, зачатия или УЗИ.
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
              <p>
                Выберите метод: по дате последних месячных, дате зачатия
                или данным УЗИ.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>
                Введите дату: укажите нужную дату, для УЗИ также введите
                срок от врача.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Узнайте результат: текущая неделя, триместр, развитие малыша
                и прогресс беременности.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт срока беременности</h2>
          <GestationalAgeCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/beremennost/data-rodov"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <CalendarDays className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Дата родов</span>
            </Link>
            <Link
              href="/zdorovye/beremennost/ovulyatsiya"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Egg className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор овуляции</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор ИМТ</span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор калорий</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1: Как определить срок */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Как определить срок беременности
            </h2>
            <p>
              Срок беременности — один из первых вопросов, который задаёт себе
              будущая мама. Знание точной недели помогает следить за развитием
              малыша, вовремя проходить обследования и планировать подготовку
              к родам.
            </p>
            <p>
              Наш калькулятор определяет акушерский срок — именно его используют
              врачи для наблюдения беременности. Вы узнаете текущую неделю,
              триместр, размер малыша и что происходит с ним прямо сейчас.
              Также вы можете рассчитать{' '}
              <Link href="/zdorovye/beremennost/data-rodov" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">дату родов</Link>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Акушерский vs эмбриональный */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Timer className="h-5 w-5" />
              Акушерский и эмбриональный срок
            </h2>
            <p>
              Существует два способа считать срок беременности, и их важно
              различать:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <CalendarClock className="h-5 w-5 text-blue-500" />
                  Акушерский срок
                </h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Отсчёт от</span>
                    <span className="font-medium text-foreground">Первого дня месячных</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Длительность</span>
                    <span className="font-medium text-foreground">40 нед. (280 дней)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Используется</span>
                    <span className="font-medium text-foreground">Врачами (стандарт)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <FlaskConical className="h-5 w-5 text-green-500" />
                  Эмбриональный срок
                </h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Отсчёт от</span>
                    <span className="font-medium text-foreground">Даты зачатия</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Длительность</span>
                    <span className="font-medium text-foreground">38 нед. (266 дней)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Используется</span>
                    <span className="font-medium text-foreground">Реже (при ЭКО и пр.)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Calculator className="h-5 w-5 shrink-0 text-blue-400" />
              <p>
                <strong className="text-foreground">Разница:</strong> акушерский срок на ~2 недели больше эмбрионального.
                Наш калькулятор показывает акушерский срок — так же, как считает ваш врач.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Развитие по триместрам */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Развитие малыша по триместрам
            </h2>
            <p>
              Беременность делится на три триместра — каждый со своими
              особенностями развития:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Egg className="h-5 w-5 text-pink-500" />
                  1-й триместр (1–12 нед.)
                </h3>
                <p className="text-sm">
                  От одной клетки до полностью сформированного организма.
                  К <strong className="text-foreground">12</strong> неделе все органы заложены, сердце бьётся, малыш
                  двигается. Размер — от макового зёрнышка до лайма (<strong className="text-foreground">5</strong> см).
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Baby className="h-5 w-5 text-violet-500" />
                  2-й триместр (13–26 нед.)
                </h3>
                <p className="text-sm">
                  Период активного роста. Малыш начинает слышать, видеть свет,
                  сосать палец. Мама чувствует первые шевеления. Размер — от
                  персика до кабачка (<strong className="text-foreground">33</strong> см, <strong className="text-foreground">760</strong> г).
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="h-5 w-5 text-red-500" />
                  3-й триместр (27–40 нед.)
                </h3>
                <p className="text-sm">
                  Малыш набирает вес и готовится к рождению. Лёгкие созревают,
                  мозг активно развивается. С <strong className="text-foreground">37</strong> недели беременность считается
                  доношенной. Вес при рождении — <strong className="text-foreground">2,5–4</strong> кг.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Методы определения */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Методы определения срока
            </h2>
            <p>
              Существует три основных метода определения срока. Наш калькулятор
              поддерживает все три — выберите наиболее подходящий:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По дате месячных (правило Негеле)
                  </p>
                  <p>
                    Самый распространённый метод. Подходит при регулярном цикле
                    <strong className="text-foreground"> 28</strong> дней с{' '}
                    <Link href="/zdorovye/beremennost/ovulyatsiya" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">овуляцией</Link>{' '}
                    на <strong className="text-foreground">14</strong>-й день. Точность: ±2 недели.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По данным УЗИ
                  </p>
                  <p>
                    Наиболее точный метод. В <strong className="text-foreground">11–13</strong> недель погрешность всего{' '}
                    <strong className="text-foreground">3–5</strong> дней. Во 2–3 триместре точность снижается
                    до ±1–3 недель.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По дате зачатия
                  </p>
                  <p>
                    Подходит, если дата точно известна (например, при ЭКО).
                    Эмбриональный срок на <strong className="text-foreground">2</strong> недели меньше акушерского.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой срок&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Таблица размеров плода */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Таблица размеров плода по неделям
            </h2>
            <p>
              Размеры малыша на ключевых этапах развития. Данные приведены
              для среднестатистического плода:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Неделя</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Размер</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Длина</th>
                    <th className="py-2 pl-2 font-semibold text-foreground whitespace-nowrap">Вес</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">8</strong></td>
                    <td className="py-2 px-2">Фасолинка</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1,6 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1 г</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">12</strong></td>
                    <td className="py-2 px-2">Лайм</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">5,4 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">14 г</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">16</strong></td>
                    <td className="py-2 px-2">Авокадо</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">11,6 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">100 г</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">20</strong></td>
                    <td className="py-2 px-2">Банан</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">16,5 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">300 г</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">24</strong></td>
                    <td className="py-2 px-2">Кукуруза</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">30 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">600 г</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">28</strong></td>
                    <td className="py-2 px-2">Баклажан</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">37 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1 кг</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">32</strong></td>
                    <td className="py-2 px-2">Пекинская капуста</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">42 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1,7 кг</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">36</strong></td>
                    <td className="py-2 px-2">Папайя</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">47 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2,6 кг</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2"><strong className="text-foreground">40</strong></td>
                    <td className="py-2 px-2">Арбуз</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">51 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">3,4 кг</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Узнать размер малыша на вашем сроке&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Что происходит с мамой */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="h-5 w-5" />
              Что происходит с мамой
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Egg className="h-5 w-5 text-pink-500" />
                  1 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Токсикоз и утренняя тошнота</li>
                  <li>Повышенная утомляемость</li>
                  <li>Чувствительность груди</li>
                  <li>Частое мочеиспускание</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Baby className="h-5 w-5 text-violet-500" />
                  2 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Энергия возвращается</li>
                  <li>Живот становится заметным</li>
                  <li>Первые шевеления малыша</li>
                  <li>Набор веса <strong className="text-foreground">0,5</strong> кг/неделю</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="h-5 w-5 text-red-500" />
                  3 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Одышка и изжога</li>
                  <li>Отёки ног</li>
                  <li>Тренировочные схватки</li>
                  <li>Подготовка к родам</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Ключевые обследования */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              Ключевые обследования
            </h2>
            <p>
              Зная свой срок, вы можете заранее спланировать все важные
              обследования. Вот основные ориентиры:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Срок</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Событие</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">6–8 нед.</strong></td>
                    <td className="py-2 pl-2">Первое УЗИ, подтверждение беременности и сердцебиения</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">11–13 нед.</strong></td>
                    <td className="py-2 pl-2">Первый скрининг: УЗИ + анализ крови на хромосомные аномалии</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">18–21 нед.</strong></td>
                    <td className="py-2 pl-2">Второй скрининг: подробное УЗИ, определение пола</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">24–28 нед.</strong></td>
                    <td className="py-2 pl-2">Тест на гестационный диабет (глюкозотолерантный тест)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">30 нед.</strong></td>
                    <td className="py-2 pl-2">Оформление декретного отпуска</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">32–34 нед.</strong></td>
                    <td className="py-2 pl-2">Третий скрининг: оценка положения плода и плаценты</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">37+ нед.</strong></td>
                    <td className="py-2 pl-2">Беременность доношена, готовность к родам</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Узнать свой текущий срок&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Практические советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Практические советы
            </h2>
            <p>
              Зная свой <Link href="/zdorovye/beremennost/data-rodov" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">срок и дату родов</Link>,
              вы можете лучше спланировать подготовку:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">1</span>
                <div>
                  <p className="text-foreground font-medium">Встаньте на учёт до 12 недель</p>
                  <p>Это позволит своевременно пройти первый скрининг и получить право на дополнительное пособие. Проверьте свой{' '}
                    <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">индекс массы тела</Link> — врач будет контролировать набор веса.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">2</span>
                <div>
                  <p className="text-foreground font-medium">Не пропускайте скрининги</p>
                  <p>Первый (<strong className="text-foreground">11–13</strong> нед.) и второй (<strong className="text-foreground">18–21</strong> нед.) скрининги — ключевые для оценки развития малыша.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">3</span>
                <div>
                  <p className="text-foreground font-medium">Принимайте фолиевую кислоту</p>
                  <p>В первом триместре — <strong className="text-foreground">400</strong> мкг/день. Она критически важна для формирования нервной трубки малыша.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">4</span>
                <div>
                  <p className="text-foreground font-medium">Подготовьте сумку в роддом к 36 неделе</p>
                  <p>С <strong className="text-foreground">37</strong> недели беременность считается доношенной — малыш может появиться в любой момент.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">5</span>
                <div>
                  <p className="text-foreground font-medium">Следите за шевелениями с 28 недели</p>
                  <p>Считайте шевеления: не менее <strong className="text-foreground">10</strong> за <strong className="text-foreground">12</strong> часов. При снижении активности обратитесь к врачу.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                Калькулятор даёт ориентировочный результат. При любых вопросах
                о течении беременности обязательно обратитесь к врачу.
              </p>
            </div>
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
                  Как определить срок беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Срок определяют тремя способами: по первому дню последних
                  месячных (акушерский срок), по дате зачатия (эмбриональный
                  срок) или по данным УЗИ. Наиболее точный метод — УЗИ
                  в <strong className="text-foreground">11–13</strong> недель с погрешностью <strong className="text-foreground">3–5</strong> дней.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем акушерский срок отличается от эмбрионального?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Акушерский срок считается от первого дня последних месячных
                  (<strong className="text-foreground">40</strong> недель). Эмбриональный — от момента зачатия
                  (<strong className="text-foreground">38</strong> недель). Разница обычно
                  около <strong className="text-foreground">2</strong> недель. Врачи используют акушерский срок.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой размер ребёнка на 20 неделе?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  На <strong className="text-foreground">20</strong> неделе малыш размером с банан: длина около <strong className="text-foreground">16,5</strong> см,
                  вес около <strong className="text-foreground">300</strong> г. Это середина беременности — мама хорошо
                  чувствует шевеления, на УЗИ можно узнать пол.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда начинаются шевеления плода?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Первородящие мамы обычно чувствуют шевеления на <strong className="text-foreground">18–20</strong> неделе,
                  повторнородящие — на <strong className="text-foreground">16–18</strong> неделе. Малыш шевелится с <strong className="text-foreground">8</strong> недели,
                  но из-за маленького размера мама ещё не ощущает движений.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда начинается токсикоз и когда проходит?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Токсикоз обычно начинается на <strong className="text-foreground">5–6</strong> неделе и проходит
                  к <strong className="text-foreground">12–14</strong> неделе. У некоторых женщин он продолжается
                  до <strong className="text-foreground">16–20</strong> недель. Если тошнота и рвота мешают нормально
                  питаться, обязательно обратитесь к врачу.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда вставать на учёт по беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Рекомендуется встать на учёт до <strong className="text-foreground">12</strong> недель. Это позволит
                  своевременно пройти первый скрининг и все необходимые обследования.
                  Ранняя постановка на учёт также даёт право на дополнительное пособие.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как считают срок при ЭКО?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  При ЭКО акушерский срок считают от даты переноса эмбриона
                  плюс <strong className="text-foreground">2</strong> недели (для 3-дневного эмбриона) или плюс{' '}
                  <strong className="text-foreground">2</strong> недели и <strong className="text-foreground">2</strong> дня (для 5-дневного).
                  Это позволяет перевести эмбриональный срок в акушерский.
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
                href="/zdorovye/beremennost/data-rodov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                Дата родов
              </Link>
              <Link
                href="/zdorovye/beremennost/ovulyatsiya"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Egg className="h-4 w-4 text-muted-foreground" />
                Калькулятор овуляции
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="h-4 w-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="h-4 w-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="h-4 w-4 text-muted-foreground" />
                Идеальный вес
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
