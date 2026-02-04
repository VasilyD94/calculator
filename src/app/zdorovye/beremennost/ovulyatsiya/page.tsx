import type { Metadata } from 'next'
import Link from 'next/link'
import { OvulationCalculator } from '@/components/calculators/OvulationCalculator'
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
  Info,
  Calculator,
  Puzzle,
  Lightbulb,
  ClipboardList,
  Heart,
  CalendarDays,
  Stethoscope,
  Thermometer,
  FlaskConical,
  ScanSearch,
  Baby,
  Scale,
  Flame,
  AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор овуляции — рассчитайте дни для зачатия',
  description:
    'Бесплатный калькулятор овуляции онлайн ✓ Точная дата овуляции и фертильное окно ✓ Фазы менструального цикла ✓ По дате месячных и длине цикла. Без регистрации.',
  keywords: [
    'рассчитать овуляцию',
    'калькулятор овуляции',
    'овуляция расчёт',
    'рассчитать овуляцию онлайн',
    'фертильное окно',
    'дни для зачатия',
    'когда овуляция',
    'планирование беременности',
    'менструальный цикл',
    'календарь овуляции',
  ],
  openGraph: {
    title: 'Калькулятор овуляции — рассчитайте дни для зачатия',
    description:
      'Узнайте дату овуляции, фертильное окно и прогноз циклов для планирования беременности.',
    type: 'website',
    url: '/zdorovye/beremennost/ovulyatsiya',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/ovulyatsiya',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya' },
]

export default function OvulationPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор овуляции',
          description:
            'Онлайн калькулятор овуляции с расчётом фертильного окна и прогнозом циклов',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/beremennost/ovulyatsiya',
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
              name: 'Как рассчитать день овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Овуляция происходит примерно за 14 дней до начала следующих месячных. При цикле 28 дней это 14-й день цикла, при цикле 30 дней — 16-й день. Для точного определения используйте тесты на овуляцию или фолликулометрию (УЗИ).',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько длится фертильное окно?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Фертильное окно длится около 6–7 дней: 5 дней до овуляции (срок жизни сперматозоидов) и 1–2 дня после (срок жизни яйцеклетки). Наибольшая вероятность зачатия — за 1–2 дня до овуляции и в день овуляции.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какие признаки овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Основные признаки: повышение базальной температуры на 0.2–0.5°C, прозрачные тягучие выделения (как яичный белок), лёгкая боль внизу живота (овуляторный синдром), повышение либидо, нагрубание молочных желёз.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли забеременеть не в день овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, зачатие возможно в течение всего фертильного окна (5–6 дней). Сперматозоиды сохраняют жизнеспособность в женских половых путях до 5 дней, поэтому половой акт за несколько дней до овуляции тоже может привести к беременности.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему овуляция может сдвигаться?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На сроки овуляции влияют: стресс, болезни, смена климата, физические нагрузки, резкое изменение веса, приём лекарств. Лютеиновая фаза стабильна (14 дней), а вот фолликулярная фаза может удлиняться или укорачиваться.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли использовать калькулятор овуляции как метод контрацепции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Календарный метод не является надёжным методом контрацепции. Индекс Перля составляет 12–24 при типичном использовании. Овуляция может сдвинуться непредсказуемо. Для контрацепции используйте барьерные или гормональные методы.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда обратиться к врачу при планировании беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Обратитесь к репродуктологу, если беременность не наступает в течение 12 месяцев регулярных попыток (или 6 месяцев после 35 лет). Также рекомендуется консультация при нерегулярном цикле (разброс более 7 дней) или отсутствии овуляции по тестам.',
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
          name: 'Как рассчитать овуляцию онлайн',
          description:
            'Пошаговая инструкция по расчёту даты овуляции и фертильного окна.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите дату месячных',
              text: 'Введите первый день ваших последних месячных.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Настройте параметры цикла',
              text: 'Укажите среднюю длину вашего менструального цикла (21–45 дней) и длительность менструации.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет дату овуляции, фертильное окно и текущую фазу цикла.',
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
              name: 'Овуляция',
              item: 'https://calc-box.ru/zdorovye/beremennost/ovulyatsiya',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Калькулятор овуляции
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте дату овуляции и фертильное окно для планирования
            беременности. Мгновенный результат по дате последних месячных
            и длине цикла.
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
              <p>Введите первый день ваших последних месячных.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Укажите среднюю длину цикла (21–45 дней) и длительность менструации.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Получите дату овуляции, фертильное окно и текущую фазу цикла.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт овуляции</h2>
          <OvulationCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/beremennost/data-rodov"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <CalendarDays className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Дата родов
              </span>
            </Link>
            <Link
              href="/zdorovye/beremennost/srok-beremennosti"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Baby className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Срок беременности
              </span>
            </Link>
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
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1 — Что такое овуляция */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое овуляция
            </h2>
            <p>
              Овуляция — это выход созревшей яйцеклетки из яичника
              в маточную трубу. Это единственный момент в цикле, когда
              возможно зачатие. Яйцеклетка живёт всего <strong className="text-foreground">12–24 часа</strong> после
              выхода, поэтому знание точной даты овуляции критически важно
              при планировании беременности.
            </p>
            <p>
              Овуляция обычно происходит за <strong className="text-foreground">14 дней</strong> до начала следующей
              менструации. Эта закономерность (постоянство лютеиновой фазы)
              лежит в основе календарного метода расчёта. Наш калькулятор использует
              именно этот принцип для определения даты овуляции и фертильного окна.
            </p>
            <p>
              Если вы уже знаете дату овуляции и планируете беременность, вам будет полезен{' '}
              <Link href="/zdorovye/beremennost/data-rodov" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                калькулятор даты родов
              </Link>{' '}
              для расчёта ПДР, а также{' '}
              <Link href="/zdorovye/beremennost/srok-beremennosti" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                калькулятор срока беременности
              </Link>{' '}
              для определения текущей недели.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Фертильное окно */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="size-5" />
              Фертильное окно и вероятность зачатия
            </h2>
            <p>
              Фертильное окно — это период, когда зачатие наиболее вероятно.
              Оно длится около <strong className="text-foreground">6–7 дней</strong>: 5 дней до овуляции (столько живут
              сперматозоиды в женских половых путях) плюс 1–2 дня после
              (срок жизни яйцеклетки).
            </p>
            <div className="rounded-lg border p-3 space-y-1.5">
              <h3 className="font-semibold text-foreground">
                Вероятность зачатия по дням
              </h3>
              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>5 дней до овуляции</span>
                    <span className="font-medium text-foreground">~4%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/20" style={{ width: '13%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>3–4 дня до</span>
                    <span className="font-medium text-foreground">~10–15%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/30" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">1–2 дня до</span>
                    <span className="font-semibold text-primary">~25–30%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/60" style={{ width: '90%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">День овуляции</span>
                    <span className="font-semibold text-primary">~20–25%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/50" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>1 день после</span>
                    <span className="font-medium text-foreground">~5–10%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/20" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3 flex gap-2">
              <Heart className="size-5 text-pink-500 shrink-0 mt-0.5" />
              <span>Наибольшие шансы на зачатие — при половом акте за <strong className="text-foreground">1–2 дня до овуляции</strong>. Именно в эти дни сперматозоиды успевают достичь маточной трубы к моменту выхода яйцеклетки.</span>
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать своё фертильное окно&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Методы определения */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Как определить овуляцию
            </h2>
            <p>
              Существует несколько методов определения овуляции — от простых домашних
              до высокоточных медицинских.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <CalendarDays className="size-5 text-violet-400" />
                  Календарный метод
                </h3>
                <p>
                  Расчёт по формуле: день овуляции = длина цикла &minus; 14.
                  Прост, но точен только при регулярном цикле. Погрешность <strong className="text-foreground">&plusmn;2–3 дня</strong>.
                  Точность около <strong className="text-foreground">80%</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <FlaskConical className="size-5 text-pink-400" />
                  Тесты на овуляцию
                </h3>
                <p>
                  Определяют пик лютеинизирующего гормона (ЛГ) в моче
                  за <strong className="text-foreground">24–36 часов</strong> до овуляции. Продаются в аптеках.
                  Точность <strong className="text-foreground">97–99%</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Thermometer className="size-5 text-orange-400" />
                  Базальная температура
                </h3>
                <p>
                  Измеряется утром до подъёма. После овуляции повышается
                  на <strong className="text-foreground">0.2–0.5°C</strong> и остаётся высокой до менструации. Определяет овуляцию постфактум.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <ScanSearch className="size-5 text-blue-400" />
                  Фолликулометрия (УЗИ)
                </h3>
                <p>
                  Врач отслеживает рост фолликула на УЗИ каждые 2–3 дня.
                  <strong className="text-foreground"> Самый точный</strong> метод. Применяется при лечении бесплодия и стимуляции.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Фазы менструального цикла */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Фазы менструального цикла
            </h2>
            <p>
              Менструальный цикл состоит из <strong className="text-foreground">4 основных фаз</strong>, каждая из которых
              регулируется гормонами и выполняет свою функцию в подготовке к возможной беременности.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Менструальная фаза
                    <span className="font-normal text-xs text-muted-foreground"> дни 1–5</span>
                  </p>
                  <p>Отторжение эндометрия, менструальное кровотечение. Уровень гормонов минимален. Длится 3–7 дней.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Фолликулярная фаза
                    <span className="font-normal text-xs text-muted-foreground"> дни 6–13</span>
                  </p>
                  <p>В яичнике растёт доминантный фолликул с яйцеклеткой. Эстроген повышается, эндометрий нарастает. Длительность варьируется.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Овуляция
                    <span className="font-normal text-xs text-muted-foreground"> ~14 день</span>
                  </p>
                  <p>Пик ЛГ вызывает выход яйцеклетки из фолликула. Она попадает в маточную трубу и ждёт оплодотворения 12–24 часа.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Лютеиновая фаза
                    <span className="font-normal text-xs text-muted-foreground"> дни 15–28</span>
                  </p>
                  <p>Фолликул превращается в жёлтое тело и вырабатывает прогестерон. Длится стабильно ~14 дней. Если зачатия нет — начинается менструация.</p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Узнать свою текущую фазу&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Таблица: длина цикла и день овуляции */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              День овуляции при разной длине цикла
            </h2>
            <p>
              Овуляция рассчитывается по формуле: <strong className="text-foreground">длина цикла &minus; 14</strong>.
              Ниже таблица для наиболее распространённых вариантов.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Длина цикла</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Овуляция</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Ферт. окно</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Лютеин. фаза</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">21 день</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">7-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 2–8</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">24 дня</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">10-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 5–11</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">28 дней</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">14-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 9–15</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">30 дней</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">16-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 11–17</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">32 дня</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">18-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 13–19</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">35 дней</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">21-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 16–22</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 whitespace-nowrap">40 дней</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">26-й день</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">дни 21–27</td>
                    <td className="py-2 pl-2 whitespace-nowrap">14 дней</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Обратите внимание: лютеиновая фаза стабильна (<strong className="text-foreground">14 дней</strong>), а фолликулярная фаза
              варьируется. Именно поэтому при коротком цикле овуляция происходит раньше, а при длинном — позже.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Признаки овуляции */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Stethoscope className="size-5" />
              Признаки овуляции
            </h2>
            <p>
              Помимо календарного метода, организм даёт подсказки о наступлении овуляции.
              Эти признаки помогают подтвердить расчёт калькулятора.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Thermometer className="size-5 text-orange-400" />
                  Базальная температура
                </h3>
                <p>
                  Повышается на <strong className="text-foreground">0.2–0.5°C</strong> после овуляции из-за выброса
                  прогестерона. Фиксируется при ежедневном измерении утром до подъёма с постели.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <FlaskConical className="size-5 text-violet-400" />
                  Цервикальная слизь
                </h3>
                <p>
                  Становится прозрачной, тягучей (как яичный белок) — помогает
                  сперматозоидам достичь яйцеклетки. Это один из самых надёжных домашних признаков.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="size-5 text-pink-400" />
                  Овуляторный синдром
                </h3>
                <p>
                  Лёгкая тянущая боль внизу живота с одной стороны.
                  Ощущается примерно у <strong className="text-foreground">20%</strong> женщин и длится от нескольких минут до суток.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Stethoscope className="size-5 text-blue-400" />
                  Другие признаки
                </h3>
                <p>
                  Повышение либидо, нагрубание и чувствительность груди,
                  повышение энергии — природные механизмы для увеличения шансов зачатия.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Факторы, влияющие на овуляцию */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Что влияет на сроки овуляции
            </h2>
            <p>
              Овуляция может сдвигаться на несколько дней даже при стабильном цикле.
              Основные факторы, которые влияют на её сроки:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Стресс</strong> — повышенный кортизол подавляет выброс ЛГ и может задержать или заблокировать овуляцию.
              </li>
              <li>
                <strong className="text-foreground">Болезни и ОРВИ</strong> — даже лёгкая простуда может сдвинуть овуляцию на 1–2 недели.
              </li>
              <li>
                <strong className="text-foreground">Физические нагрузки</strong> — чрезмерные тренировки (марафоны, кроссфит) могут привести к ановуляции.
              </li>
              <li>
                <strong className="text-foreground">Вес тела</strong> — как дефицит, так и значительный избыток веса нарушают гормональный баланс. Для оценки используйте{' '}
                <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                  калькулятор ИМТ
                </Link>.
              </li>
              <li>
                <strong className="text-foreground">Смена климата</strong> — перелёты, акклиматизация могут сдвинуть цикл.
              </li>
              <li>
                <strong className="text-foreground">Лекарства</strong> — НПВС (ибупрофен), некоторые антидепрессанты и антибиотики могут влиять на овуляцию.
              </li>
            </ul>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>При нерегулярном цикле (разброс более <strong className="text-foreground">7 дней</strong>) календарный метод ненадёжен. Используйте тесты на овуляцию или обратитесь к гинекологу.</p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта овуляции
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Пример 1: цикл 28 дней</h3>
                <p>
                  Последние месячные начались <strong className="text-foreground">1 января</strong>.
                  Овуляция: 28 &minus; 14 = <strong className="text-foreground">14-й день цикла</strong> → <strong className="text-foreground">14 января</strong>.
                  Фертильное окно: <strong className="text-foreground">9–15 января</strong>.
                  Лучшие дни для зачатия: 12–14 января.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Пример 2: цикл 32 дня</h3>
                <p>
                  Последние месячные начались <strong className="text-foreground">1 января</strong>.
                  Овуляция: 32 &minus; 14 = <strong className="text-foreground">18-й день цикла</strong> → <strong className="text-foreground">18 января</strong>.
                  Фертильное окно: <strong className="text-foreground">13–19 января</strong>.
                  Лучшие дни для зачатия: 16–18 января.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою овуляцию&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9 — Практические советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Практические советы при планировании
            </h2>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Ведите дневник цикла</p>
                  <p>Записывайте дату начала месячных, их длительность и ощущения. Через 3–4 цикла вы увидите свою закономерность.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Используйте тесты на овуляцию</p>
                  <p>Начните тестирование за <strong className="text-foreground">3–4 дня</strong> до предполагаемой овуляции. Две яркие полоски = овуляция через 24–36 часов.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Не ждите точный день овуляции</p>
                  <p>Регулярная близость каждые <strong className="text-foreground">2–3 дня</strong> в фертильное окно эффективнее, чем попытка попасть в один день.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Следите за питанием</p>
                  <p>Фолиевая кислота (<strong className="text-foreground">400 мкг/день</strong>) рекомендуется за 3 месяца до планируемого зачатия. Контролируйте{' '}
                    <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      калорийность рациона
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Обратитесь к врачу вовремя</p>
                  <p>Если беременность не наступает <strong className="text-foreground">12 месяцев</strong> (или 6 месяцев после 35 лет) — обратитесь к репродуктологу.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>Калькулятор овуляции — вспомогательный инструмент. Он не заменяет консультацию гинеколога и не является методом контрацепции.</p>
            </div>
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
                  Как рассчитать день овуляции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Овуляция происходит примерно за <strong className="text-foreground">14 дней</strong> до начала
                  следующих месячных. При цикле 28 дней это 14-й день,
                  при цикле 30 дней — 16-й день. Для точного определения
                  используйте тесты на овуляцию или фолликулометрию (УЗИ).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько длится фертильное окно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Фертильное окно длится <strong className="text-foreground">6–7 дней</strong>: 5 дней до овуляции
                  и 1–2 дня после. Наибольшие шансы зачатия — за 1–2 дня
                  до овуляции и в день овуляции.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какие признаки овуляции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Основные признаки: прозрачные тягучие выделения, повышение
                  базальной температуры на <strong className="text-foreground">0.2–0.5°C</strong>, лёгкая боль внизу живота, повышение
                  либидо, нагрубание груди.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли забеременеть не в день овуляции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Сперматозоиды живут в женских половых путях до <strong className="text-foreground">5 дней</strong>,
                  поэтому половой акт за несколько дней до овуляции
                  тоже может привести к беременности.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему овуляция может сдвигаться?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  На сроки овуляции влияют: стресс, болезни, смена климата, физические нагрузки,
                  резкое изменение веса, приём лекарств. Лютеиновая фаза стабильна (<strong className="text-foreground">14 дней</strong>),
                  а вот фолликулярная фаза может удлиняться или укорачиваться.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли использовать калькулятор овуляции как метод контрацепции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Календарный метод <strong className="text-foreground">не является</strong> надёжным методом контрацепции.
                  Индекс Перля составляет 12–24 при типичном использовании.
                  Овуляция может сдвинуться непредсказуемо. Для контрацепции используйте
                  барьерные или гормональные методы.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда обратиться к врачу при планировании беременности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Обратитесь к репродуктологу, если беременность не наступает в течение{' '}
                  <strong className="text-foreground">12 месяцев</strong> регулярных попыток (или <strong className="text-foreground">6 месяцев</strong> после 35 лет).
                  Также рекомендуется консультация при нерегулярном цикле (разброс более 7 дней)
                  или отсутствии овуляции по тестам.
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
                href="/zdorovye/beremennost/data-rodov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <CalendarDays className="size-4 text-muted-foreground" />
                Дата родов
              </Link>
              <Link
                href="/zdorovye/beremennost/srok-beremennosti"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Baby className="size-4 text-muted-foreground" />
                Срок беременности
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
                <Flame className="size-4 text-muted-foreground" />
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
