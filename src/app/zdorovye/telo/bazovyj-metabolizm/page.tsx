import type { Metadata } from 'next'
import Link from 'next/link'
import { BMRCalculator } from '@/components/calculators/BMRCalculator'
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
  Target,
  Lightbulb,
  ClipboardList,
  AlertTriangle,
  Scale,
  Flame,
  Ruler,
  TrendingDown,
  Droplets,
  Dumbbell,
  Weight,
  TrendingUp,
  Award,
  ScrollText,
  RefreshCw,
  Globe,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Сколько калорий нужно в день — расчёт BMR по 5 формулам онлайн',
  description:
    'Узнайте сколько калорий нужно в день для вашего организма ✓ Расчёт базового метаболизма по 5 формулам ✓ Миффлина-Сан Жеора ✓ Минимум калорий для жизни.',
  keywords: [
    'сколько калорий нужно в день',
    'сколько калорий нужно',
    'основной обмен веществ',
    'базовый метаболизм',
    'расчёт метаболизма',
    'калькулятор метаболизма',
    'формула Миффлина',
    'BMR калькулятор',
  ],
  openGraph: {
    title: 'Сколько калорий нужно в день — расчёт BMR онлайн',
    description:
      'Узнайте сколько калорий нужно вашему организму в день. Расчёт базового метаболизма по 5 формулам.',
    type: 'website',
    url: '/zdorovye/telo/bazovyj-metabolizm',
  },
  alternates: {
    canonical: '/zdorovye/telo/bazovyj-metabolizm',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Норма калорий', href: '/zdorovye/telo/bazovyj-metabolizm' },
]

export default function BMRPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор базового метаболизма (BMR)',
          description:
            'Онлайн калькулятор базового метаболизма по 5 научным формулам с мгновенным сравнением результатов',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/bazovyj-metabolizm',
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
              name: 'Сколько калорий нужно человеку в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Сколько калорий нужно в день зависит от пола, возраста, веса и активности. Минимум (BMR): мужчины 1500–1800 ккал, женщины 1200–1400 ккал. При средней активности: мужчины 2200–2800 ккал, женщины 1800–2200 ккал. Точную норму рассчитает калькулятор.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое базовый метаболизм (BMR)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Базовый метаболизм (BMR, Basal Metabolic Rate) — это количество калорий, которое организм тратит в полном покое для поддержания жизненных функций: дыхания, кровообращения, работы мозга и обновления клеток. Это минимальная энергия, необходимая для жизни.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем BMR отличается от TDEE?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'BMR — расход энергии в полном покое. TDEE (Total Daily Energy Expenditure) — полный суточный расход с учётом физической активности. TDEE = BMR × коэффициент активности (от 1.2 для сидячего образа жизни до 1.9 для профессиональных спортсменов).',
              },
            },
            {
              '@type': 'Question',
              name: 'Какая формула расчёта BMR самая точная?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формула Миффлина-Сан Жеора (1990) считается наиболее точной для большинства людей по данным Американской диетической ассоциации (ADA). Для спортсменов с известным процентом жира точнее формула Кетча-МакАрдла.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли есть меньше BMR при похудении?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Не рекомендуется. Потребление калорий ниже BMR может замедлить метаболизм, привести к потере мышечной массы, дефициту питательных веществ и гормональным нарушениям. Безопасный дефицит — 300–500 ккал от TDEE, но не ниже BMR.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто нужно пересчитывать BMR?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Рекомендуется пересчитывать BMR при изменении веса на 5 и более килограммов, а также каждые 5–10 лет, так как с возрастом метаболизм замедляется на 3–5% каждое десятилетие.',
              },
            },
            {
              '@type': 'Question',
              name: 'Влияют ли силовые тренировки на базовый метаболизм?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Мышечная ткань потребляет больше энергии в покое, чем жировая. Каждый килограмм мышц сжигает около 13 ккал в сутки в состоянии покоя. Регулярные силовые тренировки увеличивают мышечную массу и повышают BMR.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему у мужчин BMR выше, чем у женщин?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'У мужчин в среднем больше мышечной массы и меньше жировой ткани, что требует больше энергии на поддержание. Кроме того, гормон тестостерон способствует более высокому метаболизму. Разница составляет 5–10%.',
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
          name: 'Как рассчитать базовый метаболизм',
          description:
            'Пошаговая инструкция по расчёту базового метаболизма с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно покажет ваш BMR по рекомендуемой формуле Миффлина-Сан Жеора.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Сравните формулы',
              text: 'Оцените результаты по 5 научным формулам и узнайте диапазон значений.',
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
              name: 'Норма калорий',
              item: 'https://calc-box.ru/zdorovye/telo/bazovyj-metabolizm',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Сколько калорий нужно в день — расчёт BMR
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Узнайте, сколько калорий нужно вашему организму в день для
            поддержания жизни. Расчёт базового метаболизма по 5 научным формулам
            с мгновенным сравнением результатов.
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
              <p>Укажите параметры: выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Получите результат: калькулятор мгновенно покажет ваш BMR по рекомендуемой формуле Миффлина-Сан Жеора.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Сравните формулы: оцените результаты по 5 научным формулам и узнайте диапазон значений.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт базового метаболизма</h2>
          <BMRCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Flame className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
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
              href="/zdorovye/telo/protsent-zhira"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Target className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Процент жира
              </span>
            </Link>
            <Link
              href="/zdorovye/pitanie/defitsit-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <TrendingDown className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Дефицит калорий
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1 — Что такое BMR */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое базовый метаболизм
            </h2>
            <p>
              Базовый метаболизм (BMR, Basal Metabolic Rate) — это количество
              энергии, которое организм расходует в состоянии полного покоя для
              поддержания жизненно важных функций. Сюда входит работа сердца,
              дыхание, поддержание температуры тела, работа мозга, обновление
              клеток и другие процессы, происходящие без участия сознания.
            </p>
            <p>
              BMR составляет <strong className="text-foreground">60–75%</strong> от общего суточного расхода энергии (TDEE).
              Это означает, что большую часть калорий организм тратит не на
              физическую активность, а на базовые биологические процессы. Знание
              своего BMR помогает правильно планировать питание — как для
              похудения, так и для набора массы. Рассчитать полный суточный расход
              можно с помощью{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                калькулятора калорий
              </Link>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 1.5 — Сколько калорий нужно в день */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="size-5" />
              Сколько калорий нужно в день
            </h2>
            <p>
              Вопрос «сколько калорий нужно в день» — один из самых частых при
              планировании питания. Ответ зависит от вашего базового метаболизма
              (BMR) и уровня физической активности. BMR — это минимум калорий,
              который организм тратит в полном покое.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Категория</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Мужчины, ккал</th>
                    <th className="py-2 pl-2 font-semibold text-foreground whitespace-nowrap">Женщины, ккал</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Минимум (BMR)</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1500–1800</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1200–1400</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Сидячий образ жизни</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1800–2200</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1400–1800</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Средняя активность</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2200–2800</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1800–2200</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Высокая активность</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2800–3500</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2200–2800</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Эти значения ориентировочные. Точную норму калорий для вашего веса,
              роста и возраста рассчитает{' '}
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                калькулятор выше&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Формулы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Формулы расчёта BMR
            </h2>

            <div className="space-y-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Award className="size-5 text-green-500" />
                  Миффлина-Сан Жеора (1990)
                </h3>
                <p>
                  Самая точная формула для большинства людей по данным
                  Американской диетической ассоциации (ADA). Учитывает пол,
                  возраст, рост и вес.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 10 &times; вес(кг) + 6,25 &times; рост(см) &minus; 5 &times; возраст + 5.</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 10 &times; вес(кг) + 6,25 &times; рост(см) &minus; 5 &times; возраст &minus; 161.</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <ScrollText className="size-5 text-amber-500" />
                  Харриса-Бенедикта (1919)
                </h3>
                <p>
                  Одна из первых научных формул расчёта BMR, разработанная
                  Джеймсом Харрисом и Фрэнсисом Бенедиктом. Широко
                  использовалась в клинической практике более 70 лет, но
                  переоценивает BMR на 5–10% для современных людей.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 66,5 + 13,75 &times; вес + 5,003 &times; рост &minus; 6,755 &times; возраст.</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 655,1 + 9,563 &times; вес + 1,85 &times; рост &minus; 4,676 &times; возраст.</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <RefreshCw className="size-5 text-blue-500" />
                  Харриса-Бенедикта (1984)
                </h3>
                <p>
                  Обновлённая версия оригинальной формулы, скорректированная
                  Розой и Шизгалом. Более точна, чем версия 1919 года, но
                  уступает формуле Миффлина-Сан Жеора.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 88,362 + 13,397 &times; вес + 4,799 &times; рост &minus; 5,677 &times; возраст.</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 447,593 + 9,247 &times; вес + 3,098 &times; рост &minus; 4,33 &times; возраст.</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="size-5 text-violet-500" />
                  Кетча-МакАрдла
                </h3>
                <p>
                  Единственная формула, использующая сухую массу тела (без жира).
                  Наиболее точна для спортсменов и людей с известным{' '}
                  <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    процентом жира
                  </Link>. В нашем калькуляторе используется средний процент жира
                  (20% для мужчин, 28% для женщин).
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Формула:</strong> BMR = 370 + 21,6 &times; сухая масса тела (кг).</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Globe className="size-5 text-sky-500" />
                  Формула ВОЗ
                </h3>
                <p>
                  Разработана на основе данных из разных стран мира. Использует
                  только пол, возраст и вес. Разделена на возрастные группы:
                  до 30, 30–60 и старше 60 лет.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины 18–29:</strong> 15,3 &times; вес + 679.</span>
                  <span className="block"><strong className="text-foreground">Мужчины 30–59:</strong> 11,6 &times; вес + 879.</span>
                  <span className="block"><strong className="text-foreground">Женщины 18–29:</strong> 14,7 &times; вес + 496.</span>
                  <span className="block"><strong className="text-foreground">Женщины 30–59:</strong> 8,7 &times; вес + 829.</span>
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — BMR vs TDEE */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              BMR и TDEE — в чём разница
            </h2>
            <p>
              BMR и TDEE — два ключевых показателя энергетического обмена,
              которые часто путают. BMR (базовый метаболизм) — это расход энергии
              в полном покое, а TDEE (Total Daily Energy Expenditure) — полный
              суточный расход с учётом всей физической активности.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Flame className="size-5 text-amber-500" />
                  BMR
                </h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between gap-2">
                    <span>Что измеряет</span>
                    <span className="font-medium text-foreground text-right">Расход в покое</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Активность</span>
                    <span className="font-medium text-foreground">Нет</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Формула</span>
                    <span className="font-medium text-foreground">5 формул</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Для чего</span>
                    <span className="font-medium text-foreground text-right">Минимум калорий</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Zap className="size-5 text-blue-500" />
                  TDEE
                </h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between gap-2">
                    <span>Что измеряет</span>
                    <span className="font-medium text-foreground text-right">Полный суточный расход</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Активность</span>
                    <span className="font-medium text-foreground">Да</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Формула</span>
                    <span className="font-medium text-foreground text-right">BMR &times; коэффициент</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Для чего</span>
                    <span className="font-medium text-foreground text-right">Планирование питания</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Для расчёта TDEE используйте коэффициент активности: сидячий образ
              жизни (&times;1,2), лёгкая активность (&times;1,375), средняя (&times;1,55),
              высокая (&times;1,725), очень высокая (&times;1,9). Рассчитать TDEE можно
              в нашем{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                калькуляторе калорий
              </Link>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Факторы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Факторы, влияющие на базовый метаболизм
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingUp className="size-5 text-green-500" />
                  Повышают BMR
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Большая мышечная масса (мышцы потребляют больше энергии)</li>
                  <li>Мужской пол (у мужчин BMR выше на 5–10%)</li>
                  <li>Молодой возраст (пик метаболизма в 20–25 лет)</li>
                  <li>Высокий рост и большая площадь тела</li>
                  <li>Генетические особенности</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingDown className="size-5 text-amber-500" />
                  Снижают BMR
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Возраст (снижение на 3–5% каждые 10 лет после 30)</li>
                  <li>Потеря мышечной массы (саркопения)</li>
                  <li>Жёсткие диеты и голодание</li>
                  <li>Нарушения щитовидной железы (гипотиреоз)</li>
                  <li>Хронический недосып и стресс</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Как ускорить */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="size-5" />
              Как ускорить метаболизм
            </h2>
            <p>
              Хотя базовый метаболизм во многом определяется генетикой, полом
              и возрастом, есть научно обоснованные способы его поддержания
              и ускорения:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="size-5 text-blue-500" />
                  Тренировки
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>
                    Силовые тренировки 2–4 раза в неделю — каждый кг мышц
                    сжигает <strong className="text-foreground">13</strong> ккал/день в покое
                  </li>
                  <li>
                    HIIT-тренировки повышают метаболизм на несколько часов после
                    занятия (эффект EPOC)
                  </li>
                  <li>Ежедневная ходьба 8000–10000 шагов</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Weight className="size-5 text-green-500" />
                  Питание и образ жизни
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>
                    Достаточное потребление белка (1,2–1,6 г/кг) — термический
                    эффект белка 20–30%
                  </li>
                  <li>Не опускайте калорийность ниже BMR</li>
                  <li>Сон 7–9 часов — недосып снижает BMR на 2–5%</li>
                  <li>Достаточное потребление воды (30 мл на кг веса)</li>
                </ul>
              </div>
            </div>
            <p>
              Для контроля{' '}
              <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                дефицита калорий
              </Link>{' '}
              при похудении важно знать свой BMR — это нижняя граница, ниже
              которой опускать калорийность не рекомендуется.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Таблица BMR */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Средний BMR по возрасту и полу
            </h2>
            <p>
              Таблица показывает примерные значения базового метаболизма для
              мужчин (<strong className="text-foreground">70 кг, 175 см</strong>) и женщин (<strong className="text-foreground">60 кг, 165 см</strong>) по
              формуле Миффлина-Сан Жеора.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Возраст</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Мужчины, ккал</th>
                    <th className="py-2 pl-2 font-semibold text-foreground whitespace-nowrap">Женщины, ккал</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">20 лет</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1694</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1371</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">30 лет</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1644</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1321</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">40 лет</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1594</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1271</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">50 лет</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1544</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1221</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">60 лет</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1494</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1171</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой BMR&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Мужчина, 30 лет</h3>
                <p>Рост <strong className="text-foreground">180</strong> см, вес <strong className="text-foreground">80</strong> кг.</p>
                <p>По формуле Миффлина-Сан Жеора:</p>
                <p className="text-foreground font-medium">
                  10 &times; 80 + 6,25 &times; 180 &minus; 5 &times; 30 + 5 = <strong className="text-foreground">1780</strong> ккал/день
                </p>
                <p>
                  TDEE при средней активности (&times;1,55): <strong className="text-foreground">2759</strong> ккал/день.
                  Для похудения (&minus;15%): <strong className="text-foreground">2345</strong> ккал/день.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Женщина, 25 лет</h3>
                <p>Рост <strong className="text-foreground">165</strong> см, вес <strong className="text-foreground">60</strong> кг.</p>
                <p>По формуле Миффлина-Сан Жеора:</p>
                <p className="text-foreground font-medium">
                  10 &times; 60 + 6,25 &times; 165 &minus; 5 &times; 25 &minus; 161 = <strong className="text-foreground">1346</strong> ккал/день
                </p>
                <p>
                  TDEE при лёгкой активности (&times;1,375): <strong className="text-foreground">1851</strong> ккал/день.
                  Для похудения (&minus;15%): <strong className="text-foreground">1573</strong> ккал/день.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой BMR&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Практические советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Практические советы
            </h2>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Не опускайте калорийность ниже BMR</p>
                  <p>Потребление калорий ниже базового метаболизма замедляет обмен веществ и приводит к потере мышц.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Силовые тренировки 2–3 раза в неделю</p>
                  <p>Увеличение мышечной массы — самый эффективный способ повысить BMR на долгий срок.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Достаточно белка (1,2–1,6 г/кг)</p>
                  <p>Белок имеет высокий термический эффект — на его переваривание тратится 20–30% калорий.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Сон 7–9 часов</p>
                  <p>Хронический недосып снижает базовый метаболизм на 2–5% и провоцирует набор веса.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Пересчитывайте BMR при изменении веса</p>
                  <p>При изменении веса на 5 и более кг BMR меняется. Также пересчитывайте каждые 5–10 лет.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>
                Результаты калькулятора носят ориентировочный характер. При наличии
                заболеваний или для точного определения{' '}
                <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                  индекса массы тела
                </Link>{' '}
                и метаболизма проконсультируйтесь с врачом.
              </p>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой BMR&nbsp;&rarr;
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
              <AccordionItem value="faq-0">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько калорий нужно человеку в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Сколько калорий нужно в день зависит от пола, возраста, веса и уровня активности.
                  Минимум (BMR): мужчины <strong className="text-foreground">1500–1800</strong> ккал,
                  женщины <strong className="text-foreground">1200–1400</strong> ккал. При средней
                  активности: мужчины <strong className="text-foreground">2200–2800</strong> ккал,
                  женщины <strong className="text-foreground">1800–2200</strong> ккал. Точную норму
                  рассчитает калькулятор выше.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое базовый метаболизм (BMR)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Базовый метаболизм (BMR, Basal Metabolic Rate) — это количество калорий, которое
                  организм тратит в полном покое для поддержания жизненных функций: дыхания,
                  кровообращения, работы мозга и обновления клеток. Это минимальная энергия,
                  необходимая для жизни.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем BMR отличается от TDEE?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  BMR — расход энергии в полном покое. TDEE (Total Daily Energy Expenditure) —
                  полный суточный расход с учётом физической активности. TDEE = BMR &times;
                  коэффициент активности (от <strong className="text-foreground">1,2</strong> для сидячего образа жизни
                  до <strong className="text-foreground">1,9</strong> для профессиональных спортсменов).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какая формула расчёта BMR самая точная?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формула Миффлина-Сан Жеора (1990) считается наиболее точной для большинства людей
                  по данным Американской диетической ассоциации (ADA). Для спортсменов с известным
                  процентом жира точнее формула Кетча-МакАрдла.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли есть меньше BMR при похудении?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Не рекомендуется. Потребление калорий ниже BMR может замедлить метаболизм,
                  привести к потере мышечной массы, дефициту питательных веществ и гормональным
                  нарушениям. Безопасный дефицит — <strong className="text-foreground">300–500</strong> ккал от TDEE, но не ниже BMR.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто нужно пересчитывать BMR?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Рекомендуется пересчитывать BMR при изменении веса на <strong className="text-foreground">5</strong> и более
                  килограммов, а также каждые <strong className="text-foreground">5–10</strong> лет, так как с возрастом метаболизм
                  замедляется на 3–5% каждое десятилетие.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Влияют ли силовые тренировки на базовый метаболизм?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Мышечная ткань потребляет больше энергии в покое, чем жировая. Каждый
                  килограмм мышц сжигает около <strong className="text-foreground">13</strong> ккал в сутки в состоянии покоя.
                  Регулярные силовые тренировки увеличивают мышечную массу и повышают BMR.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему у мужчин BMR выше, чем у женщин?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  У мужчин в среднем больше мышечной массы и меньше жировой ткани, что требует
                  больше энергии на поддержание. Кроме того, гормон тестостерон способствует более
                  высокому метаболизму. Разница составляет <strong className="text-foreground">5–10%</strong>.
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
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="size-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
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
                <Ruler className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="size-4 text-muted-foreground" />
                Процент жира
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="size-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
              <Link
                href="/zdorovye/pitanie/norma-vody"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Droplets className="size-4 text-muted-foreground" />
                Норма воды
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
