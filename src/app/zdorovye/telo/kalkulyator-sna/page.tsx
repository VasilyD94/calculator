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
  Shield,
  Utensils,
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
              <p>Выберите режим: рассчитать время отхода ко сну или время пробуждения.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Укажите желаемое время и время, которое вам нужно на засыпание.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Получите 4 варианта с разным количеством циклов сна.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт времени сна</h2>
          <SleepCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
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
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Activity className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-vozrasta"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Clock className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор возраста
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Фазы сна и их значение
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">N1 — Дремота (5%)</h3>
                <p>
                  Переходная стадия между бодрствованием и сном. Длится 5-10 минут.
                  Легко проснуться от малейшего шума.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">N2 — Лёгкий сон (45%)</h3>
                <p>
                  Температура тела снижается, пульс замедляется. Мозг начинает
                  обрабатывать дневную информацию.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">N3 — Глубокий сон (25%)</h3>
                <p>
                  Самая важная фаза для физического восстановления. Происходит выработка
                  гормона роста, восстановление тканей.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">REM — Быстрый сон (25%)</h3>
                <p>
                  Фаза сновидений. Мозг активен почти как днём. Важна для памяти,
                  обучения и эмоциональной регуляции.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Sun className="h-5 w-5" />
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <BedDouble className="h-5 w-5" />
              Сколько нужно спать по возрасту
            </h2>
            <p>
              Потребность во сне меняется с возрастом. Научные рекомендации по
              продолжительности сна:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
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

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Таблица времени сна
            </h2>
            <p>
              Если вы хотите проснуться в 7:00, вот оптимальное время отхода ко сну
              (с учётом 15 минут на засыпание):
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Лечь спать</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Циклов</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Часов сна</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Качество</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">21:30</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">6</td>
                    <td className="py-2 px-2 whitespace-nowrap">9 ч</td>
                    <td className="py-2 pl-2 whitespace-nowrap text-green-600">Отличный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">23:00</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">5</td>
                    <td className="py-2 px-2 whitespace-nowrap">7,5 ч</td>
                    <td className="py-2 pl-2 whitespace-nowrap text-green-600">Отличный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">00:30</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">4</td>
                    <td className="py-2 px-2 whitespace-nowrap">6 ч</td>
                    <td className="py-2 pl-2 whitespace-nowrap text-blue-600">Хороший</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2"><strong className="text-foreground">02:00</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">3</td>
                    <td className="py-2 px-2 whitespace-nowrap">4,5 ч</td>
                    <td className="py-2 pl-2 whitespace-nowrap text-yellow-600">Минимум</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Якорная ссылка */}
          <p className="text-sm">
            <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
              Рассчитать своё время сна&nbsp;→
            </a>
          </p>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Последствия недосыпа
            </h2>
            <p>
              Хронический недостаток сна негативно влияет на все системы организма:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Brain className="h-4 w-4 text-violet-400" />
                  Когнитивные функции
                </h3>
                <p>
                  Снижается концентрация, память, скорость реакции. Повышается риск ошибок
                  и несчастных случаев.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  Иммунная система
                </h3>
                <p>
                  Организм хуже сопротивляется инфекциям. Увеличивается время
                  выздоровления от болезней.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Обмен веществ
                </h3>
                <p>
                  Нарушается выработка гормонов голода. Повышается тяга к сладкому
                  и калорийной пище.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-400" />
                  Сердечно-сосудистая система
                </h3>
                <p>
                  Повышается артериальное давление. Увеличивается риск сердечно-сосудистых
                  заболеваний.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Советы для улучшения качества сна
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
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
          <p className="text-sm">
            <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
              Рассчитать оптимальное время сна&nbsp;→
            </a>
          </p>

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
                  Сколько длится один цикл сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Один полный цикл сна длится примерно <strong className="text-foreground">90 минут</strong> (1,5 часа). За это время
                  организм проходит все фазы: лёгкий сон, глубокий сон и фазу быстрого
                  движения глаз (REM).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько циклов нужно для полноценного отдыха?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для полноценного отдыха взрослому человеку рекомендуется <strong className="text-foreground">5-6 циклов</strong> (7,5-9 часов сна). Минимум для восстановления — <strong className="text-foreground">4 цикла</strong> (6 часов).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему я просыпаюсь разбитым даже после 8 часов сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Скорее всего, будильник звонит в середине цикла, когда вы находитесь
                  в глубоком сне. Попробуйте использовать калькулятор сна для расчёта
                  оптимального времени пробуждения.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли выспаться за 4-5 часов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  4-5 часов — это <strong className="text-foreground">3 цикла</strong> сна, что недостаточно для полноценного
                  восстановления. Такой режим можно использовать изредка, но регулярный
                  недосып вредит здоровью.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое фаза REM и почему она важна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  REM (Rapid Eye Movement) — фаза быстрого сна, во время которой мы видим
                  сновидения. Она важна для обработки информации, закрепления памяти и
                  эмоциональной регуляции. REM занимает около <strong className="text-foreground">20-25%</strong> всего сна.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Влияет ли время засыпания на качество сна?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Глубокий сон преобладает в первой половине ночи, а REM — во второй.
                  Поэтому сон до полуночи считается более ценным для физического
                  восстановления.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как учитывать время засыпания в расчётах?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Среднее время засыпания — <strong className="text-foreground">10-20 минут</strong>. Калькулятор позволяет указать
                  ваше индивидуальное время засыпания для более точного расчёта.
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
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="h-4 w-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
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
                <Activity className="h-4 w-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-alkogolya"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Clock className="h-4 w-4 text-muted-foreground" />
                Калькулятор алкоголя
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
