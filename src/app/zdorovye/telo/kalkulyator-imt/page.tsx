import type { Metadata } from 'next'
import Link from 'next/link'
import { BMICalculator } from '@/components/calculators/BMICalculator'
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
  AlertTriangle,
  Lightbulb,
  Calculator,
  Info,
  Scale,
  Dumbbell,
  Users,
  Target,
  ClipboardList,
  Ruler,
  Flame,
  Droplets,
  Heart,
  Percent,
  Dna,
  UtensilsCrossed,
  Moon,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор ИМТ онлайн — индекс массы тела бесплатно',
  description:
    'Бесплатный калькулятор ИМТ онлайн ✓ Расчёт индекса массы тела по росту и весу ✓ Шкала 7 категорий ВОЗ ✓ Идеальный диапазон веса ✓ Персональные рекомендации.',
  keywords: [
    'калькулятор ИМТ',
    'индекс массы тела',
    'расчёт ИМТ',
    'ИМТ онлайн',
    'BMI калькулятор',
    'нормальный вес',
    'ожирение',
    'идеальный вес',
  ],
  openGraph: {
    title: 'Калькулятор ИМТ онлайн — индекс массы тела бесплатно',
    description:
      'Рассчитайте индекс массы тела и узнайте, в норме ли ваш вес. Шкала категорий ВОЗ и рекомендации.',
    type: 'website',
    url: '/zdorovye/telo/kalkulyator-imt',
  },
  alternates: {
    canonical: '/zdorovye/telo/kalkulyator-imt',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt' },
]

export default function BMICalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор ИМТ',
          description:
            'Онлайн калькулятор индекса массы тела с визуальной шкалой категорий ВОЗ и расчётом идеального веса',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/kalkulyator-imt',
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
              name: 'Как рассчитать ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ рассчитывается по формуле: вес в килограммах разделить на рост в метрах, возведённый в квадрат. Например, при весе 70 кг и росте 175 см: 70 / (1,75 × 1,75) = 22,9.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой ИМТ считается нормальным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'По классификации ВОЗ нормальный ИМТ находится в диапазоне 18,5–24,9. Значения ниже 18,5 указывают на дефицит массы тела, а выше 25 — на избыточный вес.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли полагаться только на ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ — это скрининговый показатель, не учитывающий соотношение мышц и жира, возраст и тип телосложения. Для полной оценки рекомендуется также измерить обхват талии и процент жира в организме.',
              },
            },
            {
              '@type': 'Question',
              name: 'Одинаков ли нормальный ИМТ для мужчин и женщин?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формула ИМТ одинакова для обоих полов. Однако у женщин нормальный процент жира выше (20–25%), чем у мужчин (10–20%). Поэтому при одинаковом ИМТ состав тела может различаться.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему ИМТ может быть неточным для спортсменов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Мышечная ткань тяжелее жировой. У атлетов с развитой мускулатурой ИМТ может показывать «избыточный вес», хотя процент жира в норме или даже ниже среднего. В таких случаях лучше ориентироваться на процент жира и обхват талии.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто нужно проверять свой ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для людей со стабильным весом достаточно проверять ИМТ раз в 3–6 месяцев. Если вы на диете или программе набора массы — раз в 2–4 недели для отслеживания динамики.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой обхват талии считается опасным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для мужчин обхват талии выше 102 см, а для женщин выше 88 см указывает на повышенный риск сердечно-сосудистых заболеваний и диабета 2 типа, даже если ИМТ в пределах нормы.',
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
          name: 'Как рассчитать индекс массы тела',
          description:
            'Пошаговая инструкция по расчёту ИМТ с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно рассчитает ИМТ и покажет его на визуальной шкале категорий ВОЗ.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Узнайте свою категорию, идеальный диапазон веса и получите персональные рекомендации.',
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
              name: 'Калькулятор ИМТ',
              item: 'https://calc-box.ru/zdorovye/telo/kalkulyator-imt',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Калькулятор ИМТ онлайн
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте индекс массы тела и узнайте, в норме ли ваш вес.
            Визуальная шкала категорий ВОЗ, идеальный диапазон веса
            и рекомендации. Результат обновляется мгновенно.
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
              <p>Выберите пол, укажите рост и вес с помощью удобных слайдеров.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Калькулятор мгновенно рассчитает ИМТ и покажет его на визуальной шкале категорий ВОЗ.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Узнайте свою категорию, идеальный диапазон веса и получите персональные рекомендации.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт индекса массы тела</h2>
          <BMICalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
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
              href="/zdorovye/telo/protsent-zhira"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Percent className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Процент жира
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
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Calculator className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1 — Что такое ИМТ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое ИМТ и зачем его знать
            </h2>
            <p>
              Индекс массы тела (ИМТ, англ. BMI — Body Mass Index) — это
              показатель, позволяющий оценить соответствие массы тела росту
              человека. Его предложил бельгийский учёный Адольф Кетле в 1832
              году, и с тех пор он остаётся одним из наиболее распространённых
              инструментов для первичной оценки массы тела.
            </p>
            <p>
              Всемирная организация здравоохранения (ВОЗ) использует ИМТ для
              классификации избыточной массы тела и ожирения у взрослых. Знание
              своего ИМТ помогает оценить риски развития сердечно-сосудистых
              заболеваний, диабета 2 типа, гипертонии и других заболеваний,
              связанных с весом. По данным ВОЗ, более <strong className="text-foreground">1,9 миллиарда</strong> взрослых
              в мире имеют избыточный вес, а <strong className="text-foreground">650 миллионов</strong> из них
              страдают ожирением.
            </p>
            <p>
              ИМТ — быстрый и бесплатный способ понять, находится ли ваш вес в
              здоровом диапазоне. Это не диагноз, а отправная точка для разговора
              со своим врачом, если показатель выходит за рамки нормы. Для более
              точной оценки рекомендуется дополнительно{' '}
              <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                измерить процент жира
              </Link>{' '}
              и обхват талии.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Формула расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Как рассчитывается ИМТ
            </h2>
            <p>
              Формула расчёта индекса массы тела проста: вес в килограммах
              делится на квадрат роста в метрах. Эту формулу можно применить
              самостоятельно, но наш калькулятор делает это мгновенно — достаточно
              указать рост и вес.
            </p>
            <div className="rounded-lg border p-4 space-y-3">
              <p className="text-center text-foreground font-semibold">
                ИМТ = вес (кг) &divide; рост&sup2; (м)
              </p>
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <p>
                  Например: при весе <strong className="text-foreground">70 кг</strong> и росте <strong className="text-foreground">175 см</strong> (1,75 м):
                </p>
                <p>
                  70 &divide; (1,75 &times; 1,75) = 70 &divide; 3,0625 ={' '}
                  <strong className="text-foreground">22,9</strong>
                </p>
              </div>
            </div>
            <p>
              Формула одинакова для мужчин и женщин, хотя интерпретация результата
              может отличаться из-за разницы в составе тела. У женщин в среднем
              выше процент жировой ткани, а у мужчин — мышечной.
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой ИМТ&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Классификация ВОЗ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Scale className="size-5" />
              Классификация ИМТ по ВОЗ
            </h2>
            <p>
              Всемирная организация здравоохранения выделяет следующие категории
              на основании значения ИМТ для взрослых людей старше 18 лет:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Категория</th>
                    <th className="py-2 px-2 font-semibold text-foreground">ИМТ</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Риск</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Выраженный дефицит</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">&lt;&nbsp;16</strong></td>
                    <td className="py-2 pl-2">Высокий</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Дефицит массы</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">16–18,5</strong></td>
                    <td className="py-2 pl-2">Повышенный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Норма</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">18,5–24,9</strong></td>
                    <td className="py-2 pl-2">Минимальный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Избыточный вес</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">25–29,9</strong></td>
                    <td className="py-2 pl-2">Повышенный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Ожирение I</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">30–34,9</strong></td>
                    <td className="py-2 pl-2">Высокий</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Ожирение II</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">35–39,9</strong></td>
                    <td className="py-2 pl-2">Очень высокий</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Ожирение III</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">&ge;&nbsp;40</strong></td>
                    <td className="py-2 pl-2">Крайне высокий</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Категория «Норма» (ИМТ <strong className="text-foreground">18,5–24,9</strong>) связана с наименьшим
              риском заболеваний. Однако даже в пределах нормы состав тела может
              значительно отличаться у разных людей — один человек может быть
              мускулистым, а другой иметь высокий процент жира при тех же
              показателях роста и веса.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Ограничения */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="size-5" />
              Ограничения ИМТ
            </h2>
            <p>
              ИМТ — полезный скрининговый инструмент, однако он имеет ряд
              ограничений, которые важно учитывать при интерпретации результата.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="size-5 text-blue-400" />
                  Спортсмены
                </h3>
                <p>
                  Мышечная ткань тяжелее жировой. У атлетов и бодибилдеров ИМТ
                  может показывать «избыточный вес», хотя процент жира в норме.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Users className="size-5 text-amber-400" />
                  Пожилые люди
                </h3>
                <p>
                  С возрастом мышечная масса снижается, а доля жировой ткани
                  увеличивается. ИМТ может быть «нормальным», хотя процент жира
                  повышен.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="size-5 text-pink-400" />
                  Беременные
                </h3>
                <p>
                  ИМТ не применяется во время беременности из-за естественного
                  увеличения массы тела.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="size-5 text-emerald-400" />
                  Распределение жира
                </h3>
                <p>
                  ИМТ не учитывает, где именно скапливается жир. Абдоминальный
                  (висцеральный) жир значительно опаснее подкожного. Для оценки
                  рекомендуется дополнительно измерить обхват талии.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <Lightbulb className="size-5 shrink-0 text-blue-400" />
              <p>
                Для полной картины рекомендуется использовать ИМТ вместе с другими
                показателями: обхват талии, соотношение талии к бёдрам и{' '}
                <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                  процент жира в организме
                </Link>.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Влияющие факторы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="size-5" />
              Что влияет на ИМТ
            </h2>
            <p>
              Значение ИМТ определяется только ростом и весом, но на сам вес
              влияет множество факторов. Понимание этих факторов помогает
              правильно интерпретировать результат.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dna className="size-5 text-violet-400" />
                  Генетика
                </h3>
                <p>
                  Тип телосложения (эктоморф, мезоморф, эндоморф) и
                  предрасположенность к набору веса заложены генетически.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <UtensilsCrossed className="size-5 text-orange-400" />
                  Питание
                </h3>
                <p>
                  Калорийность рациона напрямую влияет на вес. Избыток{' '}
                  <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    калорий
                  </Link>{' '}
                  приводит к набору, дефицит — к снижению массы.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="size-5 text-emerald-400" />
                  Активность
                </h3>
                <p>
                  Регулярные тренировки увеличивают мышечную массу и повышают{' '}
                  <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    базовый метаболизм
                  </Link>, что помогает контролировать вес.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Clock className="size-5 text-amber-400" />
                  Возраст
                </h3>
                <p>
                  После 30 лет метаболизм замедляется на 3–5% каждые 10 лет, что
                  может приводить к постепенному набору веса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Droplets className="size-5 text-pink-400" />
                  Гормоны
                </h3>
                <p>
                  Щитовидная железа, инсулин, кортизол и половые гормоны
                  существенно влияют на обмен веществ и распределение жира.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Moon className="size-5 text-indigo-400" />
                  Сон и стресс
                </h3>
                <p>
                  Недосыпание повышает уровень грелина (гормона голода) и
                  снижает лептин (гормон насыщения), провоцируя переедание.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Обхват талии */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Ruler className="size-5" />
              Обхват талии — дополнение к ИМТ
            </h2>
            <p>
              Обхват талии — простой и надёжный показатель абдоминального
              (висцерального) ожирения, которое связано с повышенным риском
              сердечно-сосудистых заболеваний, диабета 2 типа и метаболического
              синдрома. В отличие от ИМТ, этот показатель учитывает
              распределение жировой ткани.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Показатель</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Мужчины</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Женщины</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Норма</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">&lt;&nbsp;94 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">&lt;&nbsp;80 см</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Повышенный риск</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">94–102 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">80–88 см</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Высокий риск</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">&gt;&nbsp;102 см</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">&gt;&nbsp;88 см</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Для измерения оберните сантиметровую ленту вокруг талии на уровне
              пупка, стоя прямо и расслабив живот. Измеряйте на выдохе. Если ваш
              обхват талии превышает норму, даже при нормальном ИМТ стоит
              обратить внимание на питание и физическую активность.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Что делать при отклонениях */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Что делать при отклонениях от нормы
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">При дефиците (ИМТ &lt; 18,5)</h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Увеличить калорийность рациона на <strong className="text-foreground">300–500</strong> ккал</li>
                  <li>Добавить силовые тренировки для набора мышечной массы</li>
                  <li>Есть чаще — <strong className="text-foreground">4–5</strong> приёмов пищи в день</li>
                  <li>Проконсультироваться с врачом для исключения заболеваний</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">При избытке (ИМТ &ge; 25)</h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Создать{' '}
                    <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      дефицит калорий
                    </Link>{' '}
                    <strong className="text-foreground">300–500</strong> ккал от нормы
                  </li>
                  <li>Добавить <strong className="text-foreground">30</strong> минут физической активности ежедневно</li>
                  <li>Сократить быстрые углеводы и переработанные продукты</li>
                  <li>При ИМТ &ge; 30 обратиться к врачу</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>
                Безопасный темп изменения веса — не более <strong className="text-foreground">0,5–1 кг</strong> в неделю.
                Резкие диеты и голодание приводят к потере мышечной массы, замедлению
                метаболизма и последующему набору веса.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Мужчина, 30 лет</h3>
                <p>
                  Рост <strong className="text-foreground">180 см</strong>, вес <strong className="text-foreground">85 кг</strong>.
                </p>
                <p>
                  ИМТ = 85 &divide; (1,80 &times; 1,80) = <strong className="text-foreground">26,2</strong> — избыточный
                  вес. Идеальный диапазон: <strong className="text-foreground">60–81 кг</strong>. Рекомендуется
                  сбросить около <strong className="text-foreground">4 кг</strong>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Женщина, 25 лет</h3>
                <p>
                  Рост <strong className="text-foreground">165 см</strong>, вес <strong className="text-foreground">58 кг</strong>.
                </p>
                <p>
                  ИМТ = 58 &divide; (1,65 &times; 1,65) = <strong className="text-foreground">21,3</strong> — норма.
                  Идеальный диапазон: <strong className="text-foreground">50–68 кг</strong>. Вес в здоровых
                  пределах.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой ИМТ&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9 — Практические советы */}
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
                  <p className="text-foreground font-medium">Взвешивайтесь правильно</p>
                  <p>Утром натощак, после туалета, в одной и той же одежде. Не чаще раза в неделю — ежедневные колебания в <strong className="text-foreground">1–2 кг</strong> нормальны.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Отслеживайте динамику</p>
                  <p>Один замер ничего не скажет. Записывайте результаты и анализируйте тренд за <strong className="text-foreground">4–8</strong> недель.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Используйте несколько показателей</p>
                  <p>
                    Комбинируйте ИМТ с обхватом талии и{' '}
                    <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      процентом жира
                    </Link>{' '}
                    для полной картины.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Не гонитесь за цифрами</p>
                  <p>Самочувствие, уровень энергии и физическая форма важнее числа на весах. ИМТ <strong className="text-foreground">24</strong> со здоровым составом тела лучше ИМТ <strong className="text-foreground">20</strong> с дефицитом мышц.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Обратитесь к специалисту</p>
                  <p>При ИМТ ниже <strong className="text-foreground">16</strong> или выше <strong className="text-foreground">35</strong> рекомендуется консультация врача-эндокринолога или диетолога.</p>
                </div>
              </div>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Помните: ИМТ — это инструмент для первичной оценки, а не медицинский
              диагноз. Он помогает заметить проблему, но не заменяет обследование
              у специалиста.
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
                  Как рассчитать ИМТ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ИМТ = вес (кг) &divide; рост&sup2; (м). Например, при весе <strong className="text-foreground">70</strong> кг
                  и росте <strong className="text-foreground">175</strong> см: 70 &divide; (1,75 &times; 1,75) = <strong className="text-foreground">22,9</strong>.
                  Наш калькулятор делает это автоматически.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой ИМТ считается нормальным?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  По классификации ВОЗ нормальный ИМТ — от <strong className="text-foreground">18,5</strong> до <strong className="text-foreground">24,9</strong>.
                  Значения ниже 18,5 указывают на дефицит массы, выше 25 — на
                  избыточный вес, выше 30 — на ожирение.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли полагаться только на ИМТ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ИМТ — скрининговый показатель. Он не учитывает мышечную массу,
                  тип телосложения и распределение жира. Для полной картины
                  рекомендуется измерить обхват талии и процент жира в организме.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Одинаков ли нормальный ИМТ для мужчин и женщин?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формула ИМТ одинакова для обоих полов. Однако у женщин
                  нормальный процент жира выше (<strong className="text-foreground">20–25%</strong>), чем у мужчин (<strong className="text-foreground">10–20%</strong>).
                  Поэтому при одинаковом ИМТ состав тела может различаться.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему ИМТ может быть неточным для спортсменов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мышечная ткань тяжелее жировой. У атлетов с развитой
                  мускулатурой ИМТ может показывать «избыточный вес», хотя
                  процент жира в норме или даже ниже среднего. В таких случаях
                  лучше ориентироваться на процент жира и обхват талии.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто нужно проверять свой ИМТ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для людей со стабильным весом достаточно проверять ИМТ раз
                  в <strong className="text-foreground">3–6</strong> месяцев. Если вы на диете или программе набора
                  массы — раз в <strong className="text-foreground">2–4</strong> недели для отслеживания динамики.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой обхват талии считается опасным?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для мужчин обхват талии выше <strong className="text-foreground">102</strong> см, а для женщин
                  выше <strong className="text-foreground">88</strong> см указывает на повышенный риск
                  сердечно-сосудистых заболеваний и диабета 2 типа, даже
                  если ИМТ в пределах нормы.
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
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Percent className="size-4 text-muted-foreground" />
                Процент жира
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
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
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
