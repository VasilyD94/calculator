import type { Metadata } from 'next'
import Link from 'next/link'
import { SleepCalculator } from '@/components/calculators/SleepCalculator'
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
  Moon,
  Sun,
  Clock,
  BedDouble,
  Brain,
  Activity,
  Heart,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор сна — во сколько лечь спать онлайн бесплатно',
  description:
    'Бесплатный калькулятор сна ✓ Расчёт по циклам сна ✓ Во сколько лечь спать ✓ Оптимальное время пробуждения ✓ Просыпайтесь бодрым и отдохнувшим.',
  keywords: [
    'калькулятор сна',
    'во сколько лечь спать',
    'циклы сна',
    'время пробуждения',
    'сколько нужно спать',
    'фазы сна',
    'качество сна',
  ],
  openGraph: {
    title: 'Калькулятор сна — во сколько лечь спать онлайн',
    description:
      'Рассчитайте оптимальное время отхода ко сну и пробуждения по циклам сна. Просыпайтесь бодрым и отдохнувшим.',
    type: 'website',
    url: '/zdorovye/telo/kalkulyator-sna',
  },
  alternates: {
    canonical: '/zdorovye/telo/kalkulyator-sna',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Калькулятор сна', href: '/zdorovye/telo/kalkulyator-sna' },
]

export default function SleepCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор сна',
          description:
            'Онлайн калькулятор для расчёта оптимального времени сна по циклам. Узнайте, во сколько лечь спать, чтобы проснуться бодрым.',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/kalkulyator-sna',
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
              name: 'Сколько длится один цикл сна?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Один полный цикл сна длится примерно 90 минут (1,5 часа). За это время организм проходит все фазы: лёгкий сон, глубокий сон и фазу быстрого движения глаз (REM).',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько циклов сна нужно для полноценного отдыха?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для полноценного отдыха взрослому человеку рекомендуется 5-6 циклов сна (7,5-9 часов). Минимум для восстановления — 4 цикла (6 часов).',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему важно просыпаться в конце цикла сна?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В конце цикла сна мы находимся в фазе лёгкого сна, и пробуждение происходит естественно и легко. Если проснуться в середине цикла (глубокий сон), ощущается разбитость и усталость.',
              },
            },
            {
              '@type': 'Question',
              name: 'Во сколько лечь спать, чтобы проснуться в 7 утра?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Чтобы проснуться бодрым в 7:00, оптимально лечь спать в 21:30 (6 циклов), 23:00 (5 циклов) или 00:30 (4 цикла). Учитывайте 15 минут на засыпание.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое фаза REM сна?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'REM (Rapid Eye Movement) — фаза быстрого сна, во время которой мы видим сновидения. Она важна для обработки информации и эмоций. REM занимает около 20-25% всего сна.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли выспаться за 4 часа?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Теоретически 4 часа — это 2-3 цикла сна, что недостаточно для полноценного восстановления. Регулярный недосып приводит к проблемам со здоровьем. Минимум — 6 часов (4 цикла).',
              },
            },
            {
              '@type': 'Question',
              name: 'Как время засыпания влияет на расчёт?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Среднее время засыпания — 10-20 минут. Калькулятор учитывает это время при расчёте, когда нужно лечь в кровать, чтобы заснуть вовремя.',
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
          name: 'Как рассчитать оптимальное время сна',
          description:
            'Пошаговая инструкция по расчёту времени отхода ко сну и пробуждения.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите режим',
              text: 'Укажите, что вы хотите рассчитать: время отхода ко сну или время пробуждения.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Введите время',
              text: 'Укажите желаемое время пробуждения или время, когда планируете лечь спать.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет 4 оптимальных варианта с разным количеством циклов сна.',
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
              name: 'Калькулятор сна',
              item: 'https://calc-box.ru/zdorovye/telo/kalkulyator-sna',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Заголовок */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор сна — онлайн расчёт
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте оптимальное время отхода ко сну или пробуждения по циклам сна.
            Просыпайтесь легко и чувствуйте себя бодрым весь день.
          </p>
        </header>

        {/* Как пользоваться */}
        <section className="mb-8 rounded-lg border bg-muted/30 p-4">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            Как пользоваться калькулятором
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </span>
              <p className="text-sm text-muted-foreground">
                Выберите режим: рассчитать время отхода ко сну или время пробуждения.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </span>
              <p className="text-sm text-muted-foreground">
                Укажите желаемое время и время, которое вам нужно на засыпание.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </span>
              <p className="text-sm text-muted-foreground">
                Получите 4 варианта с разным количеством циклов сна.
              </p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <SleepCalculator />

        {/* Вам также будет полезно */}
        <section className="mt-10 mb-8">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Flame className="h-5 w-5 text-orange-500" />
              <div>
                <p className="font-medium">Калькулятор калорий</p>
                <p className="text-sm text-muted-foreground">Норма калорий в день</p>
              </div>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Scale className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">Калькулятор ИМТ</p>
                <p className="text-sm text-muted-foreground">Индекс массы тела</p>
              </div>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Activity className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Базовый метаболизм</p>
                <p className="text-sm text-muted-foreground">Основной обмен веществ</p>
              </div>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-vozrasta"
              className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Clock className="h-5 w-5 text-purple-500" />
              <div>
                <p className="font-medium">Калькулятор возраста</p>
                <p className="text-sm text-muted-foreground">Точный возраст в днях</p>
              </div>
            </Link>
          </div>
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" />
              Что такое циклы сна
            </h2>
            <p>
              Сон — это не однородный процесс. Каждую ночь наш мозг проходит через несколько
              повторяющихся циклов, каждый из которых длится примерно 90 минут. За ночь мы
              переживаем от 4 до 6 таких циклов.
            </p>
            <p>
              Каждый цикл состоит из нескольких стадий: лёгкий сон (N1 и N2), глубокий сон (N3)
              и фаза быстрого движения глаз (REM). Именно во время глубокого сна организм
              восстанавливается физически, а REM-фаза важна для обработки информации и
              эмоционального восстановления.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Moon className="h-6 w-6 text-primary" />
              Фазы сна и их значение
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">N1 — Дремота (5%)</h3>
                <p className="text-sm">
                  Переходная стадия между бодрствованием и сном. Длится 5-10 минут.
                  Легко проснуться от малейшего шума.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">N2 — Лёгкий сон (45%)</h3>
                <p className="text-sm">
                  Температура тела снижается, пульс замедляется. Мозг начинает
                  обрабатывать дневную информацию.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">N3 — Глубокий сон (25%)</h3>
                <p className="text-sm">
                  Самая важная фаза для физического восстановления. Происходит выработка
                  гормона роста, восстановление тканей.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">REM — Быстрый сон (25%)</h3>
                <p className="text-sm">
                  Фаза сновидений. Мозг активен почти как днём. Важна для памяти,
                  обучения и эмоциональной регуляции.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Sun className="h-6 w-6 text-primary" />
              Почему важно просыпаться в конце цикла
            </h2>
            <p>
              В конце каждого цикла мы находимся в фазе лёгкого сна (N1 или N2). В этот момент
              пробуждение происходит естественно и легко — мы чувствуем себя отдохнувшими и
              бодрыми.
            </p>
            <p>
              Если будильник звонит в середине цикла (особенно в фазе глубокого сна N3),
              мы просыпаемся с трудом и ощущаем разбитость, даже если спали достаточно долго.
              Это состояние называется «инерция сна» и может длиться до 30 минут.
            </p>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              <strong>Совет:</strong> Калькулятор сна рассчитывает время так, чтобы вы
              просыпались именно в конце цикла — на границе лёгкого сна.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BedDouble className="h-6 w-6 text-primary" />
              Сколько нужно спать по возрасту
            </h2>
            <p>
              Потребность во сне меняется с возрастом. Научные рекомендации по
              продолжительности сна:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Новорождённые (0-3 месяца)</strong> — 14-17 часов
              </li>
              <li>
                <strong className="text-foreground">Младенцы (4-11 месяцев)</strong> — 12-15 часов
              </li>
              <li>
                <strong className="text-foreground">Дети (1-5 лет)</strong> — 10-14 часов
              </li>
              <li>
                <strong className="text-foreground">Школьники (6-13 лет)</strong> — 9-11 часов
              </li>
              <li>
                <strong className="text-foreground">Подростки (14-17 лет)</strong> — 8-10 часов
              </li>
              <li>
                <strong className="text-foreground">Взрослые (18-64 года)</strong> — 7-9 часов (5-6 циклов)
              </li>
              <li>
                <strong className="text-foreground">Пожилые (65+ лет)</strong> — 7-8 часов
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Таблица времени сна
            </h2>
            <p>
              Если вы хотите проснуться в 7:00, вот оптимальное время отхода ко сну
              (с учётом 15 минут на засыпание):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-semibold text-foreground">Лечь спать</th>
                    <th className="text-center py-2 font-semibold text-foreground">Циклов</th>
                    <th className="text-center py-2 font-semibold text-foreground">Часов сна</th>
                    <th className="text-right py-2 font-semibold text-foreground">Качество</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-foreground font-medium">21:30</td>
                    <td className="text-center py-2">6</td>
                    <td className="text-center py-2">9 ч</td>
                    <td className="text-right py-2 text-green-600">Отличный</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-foreground font-medium">23:00</td>
                    <td className="text-center py-2">5</td>
                    <td className="text-center py-2">7,5 ч</td>
                    <td className="text-right py-2 text-green-600">Отличный</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-foreground font-medium">00:30</td>
                    <td className="text-center py-2">4</td>
                    <td className="text-center py-2">6 ч</td>
                    <td className="text-right py-2 text-blue-600">Хороший</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-foreground font-medium">02:00</td>
                    <td className="text-center py-2">3</td>
                    <td className="text-center py-2">4,5 ч</td>
                    <td className="text-right py-2 text-yellow-600">Минимум</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Якорная ссылка */}
          <div className="text-center">
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Calculator className="h-4 w-4" />
              Рассчитать своё время сна
            </Link>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Последствия недосыпа
            </h2>
            <p>
              Хронический недостаток сна негативно влияет на все системы организма:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Когнитивные функции</h3>
                <p className="text-sm">
                  Снижается концентрация, память, скорость реакции. Повышается риск ошибок
                  и несчастных случаев.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Иммунная система</h3>
                <p className="text-sm">
                  Организм хуже сопротивляется инфекциям. Увеличивается время
                  выздоровления от болезней.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Обмен веществ</h3>
                <p className="text-sm">
                  Нарушается выработка гормонов голода. Повышается тяга к сладкому
                  и калорийной пище.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Сердечно-сосудистая система</h3>
                <p className="text-sm">
                  Повышается артериальное давление. Увеличивается риск сердечно-сосудистых
                  заболеваний.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Советы для улучшения качества сна
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Соблюдайте режим.</strong> Ложитесь и вставайте
                в одно время даже в выходные. Это помогает настроить биологические часы.
              </li>
              <li>
                <strong className="text-foreground">Откажитесь от гаджетов.</strong> Синий свет экранов
                подавляет выработку мелатонина. Отложите телефон за 1-2 часа до сна.
              </li>
              <li>
                <strong className="text-foreground">Создайте комфортную среду.</strong> Температура
                в спальне 18-22°C, полная темнота, тишина или белый шум.
              </li>
              <li>
                <strong className="text-foreground">Избегайте кофеина после 14:00.</strong> Кофеин
                выводится из организма 6-8 часов и может помешать засыпанию.
              </li>
              <li>
                <strong className="text-foreground">Не ешьте тяжёлую пищу на ночь.</strong> Последний
                приём пищи — за 2-3 часа до сна. Избегайте острого и жирного.
              </li>
              <li>
                <strong className="text-foreground">Занимайтесь физической активностью.</strong> Но
                не позже чем за 3-4 часа до сна, иначе организм не успеет успокоиться.
              </li>
            </ul>
          </div>

          {/* Якорная ссылка */}
          <div className="text-center">
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Calculator className="h-4 w-4" />
              Рассчитать оптимальное время сна
            </Link>
          </div>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <CircleHelp className="h-6 w-6 text-primary" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Сколько длится один цикл сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Один полный цикл сна длится примерно 90 минут (1,5 часа). За это время
                  организм проходит все фазы: лёгкий сон, глубокий сон и фазу быстрого
                  движения глаз (REM).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Сколько циклов нужно для полноценного отдыха?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для полноценного отдыха взрослому человеку рекомендуется 5-6 циклов
                  (7,5-9 часов сна). Минимум для восстановления — 4 цикла (6 часов).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Почему я просыпаюсь разбитым даже после 8 часов сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Скорее всего, будильник звонит в середине цикла, когда вы находитесь
                  в глубоком сне. Попробуйте использовать калькулятор сна для расчёта
                  оптимального времени пробуждения.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Можно ли выспаться за 4-5 часов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  4-5 часов — это 3 цикла сна, что недостаточно для полноценного
                  восстановления. Такой режим можно использовать изредка, но регулярный
                  недосып вредит здоровью.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Что такое фаза REM и почему она важна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  REM (Rapid Eye Movement) — фаза быстрого сна, во время которой мы видим
                  сновидения. Она важна для обработки информации, закрепления памяти и
                  эмоциональной регуляции.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Влияет ли время засыпания на качество сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Глубокий сон преобладает в первой половине ночи, а REM — во второй.
                  Поэтому сон до полуночи считается более ценным для физического
                  восстановления.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Как учитывать время засыпания в расчётах?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Среднее время засыпания — 10-20 минут. Калькулятор позволяет указать
                  ваше индивидуальное время засыпания для более точного расчёта.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-4" aria-label="Связанные калькуляторы">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <ArrowUpRight className="h-6 w-6 text-primary" />
              Связанные калькуляторы
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                <Flame className="h-4 w-4 text-orange-500" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                <Scale className="h-4 w-4 text-blue-500" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                <Target className="h-4 w-4 text-green-500" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                <Activity className="h-4 w-4 text-purple-500" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-alkogolya"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                <Clock className="h-4 w-4 text-amber-500" />
                Калькулятор алкоголя
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
