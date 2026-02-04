import type { Metadata } from 'next'
import Link from 'next/link'
import { DueDateCalculator } from '@/components/calculators/DueDateCalculator'
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
  AlertTriangle,
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
  Timer,
  Egg,
  RefreshCw,
  Dna,
  Hash,
  Users,
  CalendarClock,
  FlaskConical,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Рассчитать дату родов — ПДР по месячным и зачатию онлайн',
  description:
    'Рассчитайте дату родов бесплатно ✓ ПДР по 3 методам ✓ По месячным, зачатию и УЗИ ✓ Прогресс беременности и ключевые даты. Без регистрации.',
  keywords: [
    'рассчитать дату родов',
    'дата родов',
    'ПДР калькулятор',
    'калькулятор даты родов',
    'срок беременности',
    'когда рожать',
    'предполагаемая дата родов',
    'расчёт ПДР',
  ],
  openGraph: {
    title: 'Рассчитать дату родов — ПДР онлайн',
    description:
      'Узнайте предполагаемую дату родов по 3 методам. Прогресс беременности, триместры и ключевые даты.',
    type: 'website',
    url: '/zdorovye/beremennost/data-rodov',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/data-rodov',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Рассчитать дату родов', href: '/zdorovye/beremennost/data-rodov' },
]

export default function DueDatePage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор даты родов',
          description:
            'Онлайн калькулятор предполагаемой даты родов по дате последних месячных, зачатия или УЗИ',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/beremennost/data-rodov',
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
              name: 'Как рассчитать дату родов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Самый распространённый способ — правило Негеле: к первому дню последних месячных прибавляют 280 дней (40 недель). Также можно рассчитать по дате зачатия (прибавить 266 дней) или по данным УЗИ первого триместра.',
              },
            },
            {
              '@type': 'Question',
              name: 'Насколько точен расчёт даты родов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Только 4–5% детей рождаются точно в ПДР. Нормальные роды происходят на сроке 37–42 недели. Наиболее точный метод — УЗИ в первом триместре (11–13 недель), погрешность составляет 3–5 дней.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое акушерский срок беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Акушерский срок считается от первого дня последних месячных, а не от зачатия. Он примерно на 2 недели больше эмбрионального срока. Именно акушерский срок используют врачи для наблюдения беременности.',
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
              name: 'Может ли ПДР измениться после УЗИ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Если УЗИ первого триместра показывает срок, отличающийся от расчётного более чем на 5–7 дней, врач может скорректировать ПДР. Данные УЗИ в 11–13 недель считаются наиболее точными.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем отличается акушерский срок от эмбрионального?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Акушерский срок отсчитывается от первого дня последних месячных и составляет 40 недель. Эмбриональный — от момента зачатия, то есть 38 недель. Разница обычно около 2 недель. Врачи используют акушерский срок.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда делать первое УЗИ при беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Первое скрининговое УЗИ проводится на сроке 11–13 недель. На этом сроке можно точно определить срок беременности, количество плодов и провести оценку рисков хромосомных аномалий.',
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
          name: 'Как рассчитать дату родов онлайн',
          description:
            'Пошаговая инструкция по расчёту предполагаемой даты родов.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите метод расчёта',
              text: 'Выберите один из трёх методов: по дате последних месячных, по дате зачатия или по данным УЗИ.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Укажите дату',
              text: 'Введите соответствующую дату. Для метода УЗИ также укажите срок, определённый врачом.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет ПДР, текущий срок, прогресс беременности и таймлайн ключевых дат.',
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
              name: 'Дата родов',
              item: 'https://calc-box.ru/zdorovye/beremennost/data-rodov',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Рассчитать дату родов — ПДР онлайн
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте предполагаемую дату родов по дате последних месячных,
            зачатия или УЗИ. Результат обновляется мгновенно — без кнопки «Рассчитать».
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
              <p>
                Выберите один из трёх методов: по дате последних месячных, по дате
                зачатия или по данным УЗИ.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>
                Введите соответствующую дату. Для метода УЗИ также укажите срок,
                определённый врачом.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Калькулятор покажет ПДР, текущий срок, прогресс беременности
                и таймлайн ключевых дат.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт даты родов</h2>
          <DueDateCalculator />
        </section>

        {/* Вам будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/beremennost/srok-beremennosti"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Baby className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Срок беременности</span>
            </Link>
            <Link
              href="/zdorovye/beremennost/ovulyatsiya"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Egg className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор овуляции</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор ИМТ</span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <CalendarDays className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор калорий</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1: Что это */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое ПДР и зачем её рассчитывать
            </h2>
            <p>
              Предполагаемая дата родов (ПДР) — это ориентировочная дата, когда
              ваш малыш появится на свет. Расчёт основан на средней
              продолжительности беременности — <strong className="text-foreground">280</strong> дней
              (<strong className="text-foreground">40</strong> акушерских недель) от первого дня
              последних месячных.
            </p>
            <p>
              Важно понимать, что ПДР — это именно <strong className="text-foreground">предполагаемая</strong> дата.
              Только <strong className="text-foreground">4–5%</strong> детей рождаются точно в этот день.
              Нормальными считаются роды в период с <strong className="text-foreground">37</strong> по{' '}
              <strong className="text-foreground">42</strong> неделю беременности. Знание ПДР помогает
              врачам планировать наблюдение, скрининги и подготовку к родам,
              а будущим родителям — морально и практически подготовиться к появлению малыша.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Методы расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Методы определения даты родов
            </h2>
            <p>
              Существует три основных метода расчёта ПДР. Наш калькулятор
              поддерживает все три — выберите наиболее подходящий:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По дате последних месячных (правило Негеле)
                  </p>
                  <p>
                    Самый распространённый метод. К первому дню последних месячных
                    прибавляют <strong className="text-foreground">280</strong> дней. Формула предполагает
                    регулярный цикл <strong className="text-foreground">28</strong> дней с <Link href="/zdorovye/beremennost/ovulyatsiya" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">овуляцией</Link>{' '}
                    на <strong className="text-foreground">14</strong>-й день. При нерегулярном цикле точность снижается.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По дате зачатия
                  </p>
                  <p>
                    Если вы точно знаете дату зачатия (например, при ЭКО),
                    к ней прибавляют <strong className="text-foreground">266</strong> дней (<strong className="text-foreground">38</strong> недель).
                    Это эмбриональный срок — на <strong className="text-foreground">2</strong> недели меньше акушерского.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    По данным УЗИ
                  </p>
                  <p>
                    Наиболее точный метод — УЗИ в первом триместре (<strong className="text-foreground">11–13</strong> недель).
                    Врач измеряет размеры эмбриона и определяет срок с точностью
                    до <strong className="text-foreground">3–5</strong> дней. Во втором и третьем триместрах точность снижается.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою дату родов&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Точность */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Stethoscope className="size-5" />
              Точность расчёта ПДР
            </h2>
            <p>
              Точность определения даты родов зависит от метода расчёта
              и индивидуальных особенностей организма. Ни один метод не даёт
              абсолютно точного результата — роды происходят в диапазоне
              от <strong className="text-foreground">37</strong> до <strong className="text-foreground">42</strong> недель.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Метод</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Погрешность</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Условие</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">По месячным</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±2 нед.</strong></td>
                    <td className="py-2 pl-2">Регулярный цикл 28 дн.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">По зачатию</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±1–2 нед.</strong></td>
                    <td className="py-2 pl-2">Точная дата известна</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">УЗИ (1 трим.)</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±3–5 дн.</strong></td>
                    <td className="py-2 pl-2">11–13 недель</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">УЗИ (2–3 трим.)</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±1–3 нед.</strong></td>
                    <td className="py-2 pl-2">После 14 недель</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Stethoscope className="size-5 shrink-0 text-blue-400" />
              <p>
                УЗИ в первом триместре — наиболее точный метод определения ПДР.
                Если данные УЗИ расходятся с расчётом по месячным более чем
                на <strong className="text-foreground">5–7</strong> дней, врач скорректирует дату.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Триместры */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="size-5" />
              Триместры беременности
            </h2>
            <p>
              Беременность делится на три триместра — каждый со своими
              особенностями развития малыша и изменениями в организме мамы:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Egg className="size-5 text-pink-500" />1-й триместр (1–12 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Формирование всех органов</li>
                  <li>Сердцебиение с <strong className="text-foreground">6–8</strong> недели</li>
                  <li>Первый скрининг на <strong className="text-foreground">11–13</strong> нед.</li>
                  <li>Токсикоз и адаптация организма</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Baby className="size-5 text-violet-500" />2-й триместр (13–26 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Активный рост малыша</li>
                  <li>Определение пола на <strong className="text-foreground">16–20</strong> нед.</li>
                  <li>Второй скрининг на <strong className="text-foreground">18–21</strong> нед.</li>
                  <li>Первые шевеления</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="size-5 text-red-500" />3-й триместр (27–40 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc marker:text-primary text-sm">
                  <li>Набор веса малышом</li>
                  <li>Декретный отпуск с <strong className="text-foreground">30</strong> нед.</li>
                  <li>Подготовка к родам</li>
                  <li>Доношенность с <strong className="text-foreground">37</strong> недели</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Факторы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Что влияет на дату родов
            </h2>
            <p>
              ПДР — это статистическое среднее. Фактическая дата родов зависит
              от множества факторов, которые калькулятор не может учесть:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><RefreshCw className="size-5 text-violet-500" />Длина цикла</h3>
                <p>
                  При цикле длиннее <strong className="text-foreground">28</strong> дней <Link href="/zdorovye/beremennost/ovulyatsiya" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">овуляция</Link> происходит позже,
                  и реальная дата родов может сдвинуться на несколько дней вперёд.
                  При коротком цикле — наоборот.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><Dna className="size-5 text-pink-500" />Наследственность</h3>
                <p>
                  Если в вашей семье женщины рожали позже <strong className="text-foreground">40</strong> недель,
                  у вас тоже может быть склонность к пролонгированной беременности.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><Hash className="size-5 text-blue-500" />Количество беременностей</h3>
                <p>
                  Первая беременность в среднем длится на <strong className="text-foreground">5–7</strong> дней дольше
                  последующих. Повторнородящие чаще рожают ближе к <strong className="text-foreground">39</strong> неделе.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><Users className="size-5 text-amber-500" />Многоплодная беременность</h3>
                <p>
                  Двойня в среднем рождается на <strong className="text-foreground">36–37</strong> неделе,
                  тройня — на <strong className="text-foreground">33–34</strong>. ПДР для многоплодной беременности
                  рассчитывается врачом индивидуально.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Развитие малыша */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Baby className="size-5" />
              Развитие малыша по неделям
            </h2>
            <p>
              Краткий обзор ключевых этапов развития ребёнка во время беременности.
              Размеры приведены для наглядного сравнения:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    4–8 недель
                    <span className="font-normal text-xs text-muted-foreground"> 1–16 мм</span>
                  </p>
                  <p>Формируется нервная трубка, сердце начинает биться. Размер — от макового зёрнышка до фасолинки.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    12–16 недель
                    <span className="font-normal text-xs text-muted-foreground"> 5–12 см</span>
                  </p>
                  <p>Все органы сформированы, малыш активно двигается. Можно узнать пол. Размер — от лайма до авокадо.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    20–28 недель
                    <span className="font-normal text-xs text-muted-foreground"> 25–37 см</span>
                  </p>
                  <p>Мама чувствует шевеления. Малыш слышит звуки и открывает глаза. Размер — от банана до баклажана.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    32–40 недель
                    <span className="font-normal text-xs text-muted-foreground"> 42–53 см, 2,5–4 кг</span>
                  </p>
                  <p>Активный набор веса. Лёгкие созревают, малыш занимает окончательное положение и готовится к рождению.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Ключевые обследования */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Ключевые обследования и даты
            </h2>
            <p>
              Зная ПДР, вы можете заранее спланировать все важные обследования
              и события. Вот основные ориентиры по неделям:
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
                    <td className="py-2 pl-2">Оформление декретного отпуска, выдача больничного</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">32–34 нед.</strong></td>
                    <td className="py-2 pl-2">Третий скрининг: оценка положения плода и плаценты</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 whitespace-nowrap"><strong className="text-foreground">37+ нед.</strong></td>
                    <td className="py-2 pl-2">Беременность считается доношенной, подготовка к родам</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать все ключевые даты&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Акушерский vs эмбриональный */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Timer className="size-5" />
              Акушерский и эмбриональный срок: в чём разница
            </h2>
            <p>
              Один из самых частых вопросов у беременных — почему врач называет один
              срок, а по зачатию получается другой. Дело в двух системах отсчёта:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><CalendarClock className="size-5 text-blue-500" />Акушерский срок</h3>
                <p>
                  Отсчитывается от первого дня последних месячных.
                  Полная беременность = <strong className="text-foreground">40</strong> недель.
                  Именно этот срок используют врачи, указывают в обменной карте
                  и по нему рассчитывают ПДР.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5"><FlaskConical className="size-5 text-green-500" />Эмбриональный срок</h3>
                <p>
                  Отсчитывается от момента зачатия (обычно на <strong className="text-foreground">14</strong> дней позже).
                  Полная беременность = <strong className="text-foreground">38</strong> недель.
                  Используется реже, в основном при ЭКО, когда дата оплодотворения
                  точно известна.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Calculator className="size-5 shrink-0 text-blue-400" />
              <p>
                Наш калькулятор автоматически пересчитывает срок в акушерский — тот,
                который использует ваш врач. Если вы вводите дату зачатия, к ней
                прибавляется <strong className="text-foreground">14</strong> дней для перевода в акушерские недели.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 9: Советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Практические советы для будущих мам
            </h2>
            <p>
              Зная свою ПДР и текущий <Link href="/zdorovye/beremennost/srok-beremennosti" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">срок беременности</Link>, вы можете
              лучше спланировать подготовку. Вот несколько рекомендаций:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">1</span>
                <div>
                  <p className="text-foreground font-medium">Встаньте на учёт до 12 недель</p>
                  <p>Это позволит своевременно пройти первый скрининг, проверить <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">индекс массы тела</Link> и получить право на дополнительное пособие при ранней постановке на учёт.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">2</span>
                <div>
                  <p className="text-foreground font-medium">Не пропускайте скрининги</p>
                  <p>Первый (<strong className="text-foreground">11–13</strong> нед.) и второй (<strong className="text-foreground">18–21</strong> нед.) скрининги — ключевые для оценки развития малыша. Запланируйте их заранее.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">3</span>
                <div>
                  <p className="text-foreground font-medium">Подготовьте сумку в роддом к 36 неделе</p>
                  <p>Роды могут начаться раньше ПДР. С <strong className="text-foreground">37</strong> недели беременность считается доношенной, и малыш может появиться в любой момент.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">4</span>
                <div>
                  <p className="text-foreground font-medium">Следите за шевелениями с 28 недели</p>
                  <p>С третьего триместра считайте шевеления: не менее <strong className="text-foreground">10</strong> за <strong className="text-foreground">12</strong> часов. При снижении активности обратитесь к врачу.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">5</span>
                <div>
                  <p className="text-foreground font-medium">Принимайте фолиевую кислоту</p>
                  <p>В первом триместре — <strong className="text-foreground">400</strong> мкг/день. Фолиевая кислота критически важна для формирования нервной трубки малыша.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>
                Калькулятор даёт ориентировочную дату. При любых вопросах
                о течении беременности, болях или необычных симптомах
                обязательно обратитесь к врачу.
              </p>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать дату родов&nbsp;→
              </a>
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
                  Как рассчитать дату родов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Самый распространённый способ — правило Негеле: к первому дню
                  последних месячных прибавляют <strong className="text-foreground">280</strong> дней
                  (<strong className="text-foreground">40</strong> недель). Также можно рассчитать по дате зачатия
                  (прибавить <strong className="text-foreground">266</strong> дней) или по данным УЗИ первого триместра.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Насколько точен расчёт даты родов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Только <strong className="text-foreground">4–5%</strong> детей рождаются точно в ПДР.
                  Нормальные роды происходят на сроке <strong className="text-foreground">37–42</strong> недели.
                  Наиболее точный метод — УЗИ в первом триместре
                  (<strong className="text-foreground">11–13</strong> недель), погрешность — <strong className="text-foreground">3–5</strong> дней.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое акушерский срок беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Акушерский срок считается от первого дня последних месячных,
                  а не от зачатия. Он примерно на <strong className="text-foreground">2</strong> недели больше
                  эмбрионального. Именно акушерский срок используют врачи
                  для наблюдения беременности и указывают в обменной карте.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда вставать на учёт по беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Рекомендуется встать на учёт до <strong className="text-foreground">12</strong> недель.
                  Это позволит пройти первый скрининг и все необходимые обследования.
                  Ранняя постановка на учёт также даёт право на дополнительное пособие.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Может ли ПДР измениться после УЗИ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Если УЗИ первого триместра показывает срок, отличающийся
                  от расчётного более чем на <strong className="text-foreground">5–7</strong> дней, врач может
                  скорректировать ПДР. Данные УЗИ в <strong className="text-foreground">11–13</strong> недель
                  считаются наиболее точными.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем отличается акушерский срок от эмбрионального?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Акушерский срок — от первого дня последних месячных
                  (<strong className="text-foreground">40</strong> недель). Эмбриональный — от момента зачатия
                  (<strong className="text-foreground">38</strong> недель). Разница обычно
                  около <strong className="text-foreground">2</strong> недель. Врачи используют акушерский срок.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда делать первое УЗИ при беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Первое скрининговое УЗИ проводится на сроке <strong className="text-foreground">11–13</strong> недель.
                  На этом сроке можно точно определить срок беременности, количество
                  плодов и провести оценку рисков хромосомных аномалий.
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
                href="/zdorovye/beremennost/srok-beremennosti"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Baby className="size-4 text-muted-foreground" />
                Срок беременности
              </Link>
              <Link
                href="/zdorovye/beremennost/ovulyatsiya"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Egg className="size-4 text-muted-foreground" />
                Калькулятор овуляции
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <CalendarDays className="size-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
