import type { Metadata } from 'next'
import Link from 'next/link'
import { BloodPressureCalculator } from '@/components/calculators/BloodPressureCalculator'
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
  Info,
  Scale,
  Target,
  Flame,
  Heart,
  Activity,
  AlertTriangle,
  Clock,
  TrendingUp,
  TrendingDown,
  Stethoscope,
  Pill,
  Utensils,
  Dumbbell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Норма давления по возрасту — таблица и расчёт онлайн бесплатно',
  description:
    'Бесплатный калькулятор давления ✓ Норма по возрасту и полу ✓ Таблица давления ✓ Определение гипертонии и гипотонии ✓ Классификация ВОЗ.',
  keywords: [
    'норма давления',
    'давление по возрасту',
    'таблица давления',
    'калькулятор давления',
    'гипертония',
    'артериальное давление',
    'нормальное давление',
  ],
  openGraph: {
    title: 'Норма давления по возрасту — таблица и расчёт онлайн',
    description:
      'Узнайте норму артериального давления для вашего возраста. Таблица норм, классификация и рекомендации.',
    type: 'website',
    url: '/zdorovye/telo/norma-davleniya',
  },
  alternates: {
    canonical: '/zdorovye/telo/norma-davleniya',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Норма давления', href: '/zdorovye/telo/norma-davleniya' },
]

export default function BloodPressurePage() {
  return (
    <>
      {/* JSON-LD разметка */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор нормы давления',
          description: 'Онлайн калькулятор нормы артериального давления по возрасту и полу',
          applicationCategory: 'HealthApplication',
          operatingSystem: 'All',
          url: 'https://calc-box.ru/zdorovye/telo/norma-davleniya',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'RUB',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Какое давление считается нормальным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Оптимальным считается давление ниже 120/80 мм рт.ст. Нормальным — 120-129/80-84. Давление 130-139/85-89 относится к высокому нормальному и требует контроля.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как меняется норма давления с возрастом?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'С возрастом стенки сосудов теряют эластичность, и норма давления незначительно повышается. Для людей 60+ лет давление до 140/90 может считаться приемлемым при хорошем самочувствии.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда нужно обращаться к врачу?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Обратитесь к врачу, если давление регулярно выше 140/90 или ниже 90/60, при резких скачках давления, головных болях, головокружении или боли в груди.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как правильно измерять давление?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Измеряйте давление в спокойном состоянии после 5 минут отдыха, сидя с опорой для спины. Рука на уровне сердца. Не курите и не пейте кофе за 30 минут до измерения.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем опасна гипертония?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Длительное повышение давления повреждает сосуды и органы. Увеличивается риск инсульта, инфаркта, почечной недостаточности и проблем со зрением.',
              },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Как определить норму давления',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              text: 'Укажите ваш пол и возраст',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              text: 'Введите показатели вашего давления (систолическое и диастолическое)',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              text: 'Получите оценку давления и сравнение с нормой для вашего возраста',
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://calc-box.ru${item.href}`,
          })),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Норма давления по возрасту
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте норму артериального давления для вашего возраста и пола.
            Введите показатели для оценки состояния сердечно-сосудистой системы.
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
              <p>Укажите ваш пол и возраст в первом блоке.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Введите показатели вашего давления: систолическое (верхнее) и диастолическое (нижнее).</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Получите оценку давления и сравнение с нормой для вашего возраста.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт нормы давления</h2>
          <BloodPressureCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="flex flex-col items-center rounded-lg border p-3 text-center transition-colors hover:bg-accent"
            >
              <Scale className="h-5 w-5 mb-1 text-muted-foreground" />
              <span className="text-sm font-medium">Калькулятор ИМТ</span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="flex flex-col items-center rounded-lg border p-3 text-center transition-colors hover:bg-accent"
            >
              <Activity className="h-5 w-5 mb-1 text-muted-foreground" />
              <span className="text-sm font-medium">Базовый метаболизм</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-vozrasta"
              className="flex flex-col items-center rounded-lg border p-3 text-center transition-colors hover:bg-accent"
            >
              <Clock className="h-5 w-5 mb-1 text-muted-foreground" />
              <span className="text-sm font-medium">Калькулятор возраста</span>
            </Link>
            <Link
              href="/zdorovye/sport/puls-dlya-trenirovok"
              className="flex flex-col items-center rounded-lg border p-3 text-center transition-colors hover:bg-accent"
            >
              <Heart className="h-5 w-5 mb-1 text-muted-foreground" />
              <span className="text-sm font-medium">Пульсовые зоны</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что такое артериальное давление
            </h2>
            <p>
              Артериальное давление (АД) — это сила, с которой кровь давит на стенки
              артерий при движении по сосудам. Это один из важнейших показателей работы
              сердечно-сосудистой системы.
            </p>
            <p>
              Давление измеряется в миллиметрах ртутного столба (мм рт.ст.) и записывается
              двумя числами: систолическое (верхнее) и диастолическое (нижнее). Например,
              120/80 означает систолическое давление 120 и диастолическое 80.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Систолическое и диастолическое давление
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-400" />
                  Систолическое (верхнее)
                </h3>
                <p>
                  Максимальное давление в момент сокращения сердца (систолы), когда
                  кровь выталкивается в аорту. Отражает силу сердечного выброса и
                  тонус крупных артерий.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-blue-400" />
                  Диастолическое (нижнее)
                </h3>
                <p>
                  Минимальное давление в момент расслабления сердца (диастолы).
                  Отражает сопротивление периферических сосудов и эластичность
                  артериальных стенок.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              Классификация артериального давления
            </h2>
            <p>
              Всемирная организация здравоохранения (ВОЗ) и Европейское общество
              кардиологов (ESC) выделяют следующие категории давления:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Категория</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Систолическое</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Диастолическое</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-blue-600">Гипотония</td>
                    <td className="py-2 px-2 whitespace-nowrap">&lt;90</td>
                    <td className="py-2 px-2 whitespace-nowrap">&lt;60</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-green-600">Оптимальное</td>
                    <td className="py-2 px-2 whitespace-nowrap">&lt;120</td>
                    <td className="py-2 px-2 whitespace-nowrap">&lt;80</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-green-600">Нормальное</td>
                    <td className="py-2 px-2 whitespace-nowrap">120–129</td>
                    <td className="py-2 px-2 whitespace-nowrap">80–84</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-yellow-600">Высокое нормальное</td>
                    <td className="py-2 px-2 whitespace-nowrap">130–139</td>
                    <td className="py-2 px-2 whitespace-nowrap">85–89</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-orange-600">Гипертония 1 степени</td>
                    <td className="py-2 px-2 whitespace-nowrap">140–159</td>
                    <td className="py-2 px-2 whitespace-nowrap">90–99</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 text-red-600">Гипертония 2 степени</td>
                    <td className="py-2 px-2 whitespace-nowrap">160–179</td>
                    <td className="py-2 px-2 whitespace-nowrap">100–109</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 text-red-600">Гипертония 3 степени</td>
                    <td className="py-2 px-2 whitespace-nowrap">&ge;180</td>
                    <td className="py-2 px-2 whitespace-nowrap">&ge;110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Якорная ссылка */}
          <p className="text-sm">
            <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
              Проверить своё давление&nbsp;→
            </a>
          </p>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Как давление меняется с возрастом
            </h2>
            <p>
              С возрастом стенки артерий теряют эластичность, что приводит к
              естественному повышению давления. Это связано с атеросклеротическими
              изменениями сосудов и снижением их способности расширяться.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Возраст</th>
                    <th className="py-2 px-2 font-semibold text-foreground" colSpan={2}>Мужчины</th>
                    <th className="py-2 pl-2 font-semibold text-foreground" colSpan={2}>Женщины</th>
                  </tr>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="py-1 pr-2"></th>
                    <th className="py-1 px-2">Сист.</th>
                    <th className="py-1 px-2">Диаст.</th>
                    <th className="py-1 px-2">Сист.</th>
                    <th className="py-1 pl-2">Диаст.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">18–29</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">115–125</td>
                    <td className="py-2 px-2 whitespace-nowrap">75–82</td>
                    <td className="py-2 px-2 whitespace-nowrap">110–120</td>
                    <td className="py-2 pl-2 whitespace-nowrap">70–78</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">30–39</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">118–128</td>
                    <td className="py-2 px-2 whitespace-nowrap">78–85</td>
                    <td className="py-2 px-2 whitespace-nowrap">115–125</td>
                    <td className="py-2 pl-2 whitespace-nowrap">75–82</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">40–49</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">120–135</td>
                    <td className="py-2 px-2 whitespace-nowrap">80–88</td>
                    <td className="py-2 px-2 whitespace-nowrap">118–130</td>
                    <td className="py-2 pl-2 whitespace-nowrap">78–85</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">50–59</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">125–140</td>
                    <td className="py-2 px-2 whitespace-nowrap">82–90</td>
                    <td className="py-2 px-2 whitespace-nowrap">125–138</td>
                    <td className="py-2 pl-2 whitespace-nowrap">80–88</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">60–69</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">130–145</td>
                    <td className="py-2 px-2 whitespace-nowrap">82–88</td>
                    <td className="py-2 px-2 whitespace-nowrap">130–145</td>
                    <td className="py-2 pl-2 whitespace-nowrap">82–88</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2"><strong className="text-foreground">70+</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">135–150</td>
                    <td className="py-2 px-2 whitespace-nowrap">80–85</td>
                    <td className="py-2 px-2 whitespace-nowrap">135–150</td>
                    <td className="py-2 pl-2 whitespace-nowrap">80–85</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              Значения в мм рт.ст. Данные являются ориентировочными.
            </p>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Факторы риска гипертонии
            </h2>
            <p>
              Повышенное давление (гипертония) — одно из самых распространённых
              сердечно-сосудистых заболеваний. Факторы риска:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Наследственность</strong> — если у родителей
                гипертония, риск её развития выше.
              </li>
              <li>
                <strong className="text-foreground">Избыточный вес</strong> — каждые лишние 10 кг
                увеличивают давление на 2-3 мм рт.ст.
              </li>
              <li>
                <strong className="text-foreground">Малоподвижный образ жизни</strong> — регулярные
                физические нагрузки снижают давление.
              </li>
              <li>
                <strong className="text-foreground">Избыток соли</strong> — рекомендуется не более
                5 г соли в день.
              </li>
              <li>
                <strong className="text-foreground">Курение и алкоголь</strong> — никотин сужает
                сосуды, алкоголь повышает давление.
              </li>
              <li>
                <strong className="text-foreground">Хронический стресс</strong> — постоянное
                напряжение негативно влияет на сосуды.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Как правильно измерять давление
            </h2>
            <p>
              Для получения точных результатов измерения давления соблюдайте
              следующие правила:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Отдохните 5-10 минут</strong> перед измерением
                в спокойной обстановке.
              </li>
              <li>
                <strong className="text-foreground">Сядьте правильно</strong> — спина с опорой,
                ноги на полу (не скрещены), рука на столе на уровне сердца.
              </li>
              <li>
                <strong className="text-foreground">Не курите и не пейте кофе</strong> за 30 минут
                до измерения.
              </li>
              <li>
                <strong className="text-foreground">Сделайте 2-3 измерения</strong> с интервалом
                1-2 минуты и запишите среднее значение.
              </li>
              <li>
                <strong className="text-foreground">Измеряйте в одно время</strong> — утром и
                вечером для отслеживания динамики.
              </li>
            </ul>
          </div>

          {/* Якорная ссылка */}
          <p className="text-sm">
            <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
              Проверить своё давление&nbsp;→
            </a>
          </p>

          <hr className="border-border" />

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Как нормализовать давление
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-green-400" />
                  Питание
                </h3>
                <p>
                  Ограничьте соль и животные жиры. Увеличьте потребление овощей,
                  фруктов, цельнозерновых продуктов, рыбы. Следуйте DASH-диете.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-blue-400" />
                  Физическая активность
                </h3>
                <p>
                  30 минут умеренной нагрузки 5 дней в неделю: ходьба, плавание,
                  велосипед. Избегайте резких силовых упражнений.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Scale className="h-4 w-4 text-amber-400" />
                  Контроль веса
                </h3>
                <p>
                  Поддерживайте ИМТ в пределах 18.5-24.9. Снижение веса на 5-10%
                  может значительно уменьшить давление.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Pill className="h-4 w-4 text-violet-400" />
                  Лечение
                </h3>
                <p>
                  При стойком повышении давления врач может назначить препараты.
                  Не прекращайте приём лекарств без консультации.
                </p>
              </div>
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
                  Какое давление считается нормальным?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Оптимальным считается давление ниже <strong className="text-foreground">120/80</strong> мм рт.ст.
                  Давление <strong className="text-foreground">120-129/80-84</strong> — нормальное.
                  <strong className="text-foreground">130-139/85-89</strong> — высокое нормальное,
                  требующее контроля образа жизни.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда нужно обращаться к врачу?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Обратитесь к врачу, если давление регулярно выше <strong className="text-foreground">140/90</strong> или
                  ниже <strong className="text-foreground">90/60</strong>, при резких скачках давления, головных болях,
                  головокружении, боли в груди или затруднённом дыхании.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему утром давление выше?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Утром активизируется симпатическая нервная система, повышается уровень
                  кортизола. Это естественный процесс. Однако резкий утренний подъём давления
                  (более чем на <strong className="text-foreground">20 мм рт.ст.</strong>) повышает риск инсульта.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли снизить давление без лекарств?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  При гипертонии 1 степени и высоком нормальном давлении изменение образа
                  жизни может быть эффективным: снижение веса, ограничение соли,
                  регулярные физические нагрузки, отказ от курения и алкоголя.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем опасно низкое давление?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Гипотония (давление ниже <strong className="text-foreground">90/60</strong>) вызывает слабость,
                  головокружение, обмороки. Может приводить к недостаточному кровоснабжению
                  органов. При постоянной гипотонии необходима консультация врача.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто измерять давление?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Здоровым людям — раз в год на профосмотре. При повышенном давлении —
                  ежедневно утром и вечером. Ведите дневник измерений для отслеживания
                  динамики и показывайте его врачу.
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
                href="/zdorovye/sport/puls-dlya-trenirovok"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Heart className="h-4 w-4 text-muted-foreground" />
                Пульсовые зоны
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="h-4 w-4 text-muted-foreground" />
                Базовый метаболизм
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
                <Target className="h-4 w-4 text-muted-foreground" />
                Идеальный вес
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
