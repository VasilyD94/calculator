import type { Metadata } from 'next'
import Link from 'next/link'
import { BodyFatCalculator } from '@/components/calculators/BodyFatCalculator'
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
  Target,
  ClipboardList,
  Ruler,
  Flame,
  Dumbbell,
  Droplets,
  Scan,
  TrendingDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор процента жира онлайн — расчёт по 3 формулам',
  description:
    'Бесплатный онлайн калькулятор процента жира в организме ✓ Метод ВМС США ✓ Формулы Deurenberg и Gallagher ✓ Категории ACE ✓ Состав тела и сравнение 3 формул.',
  keywords: [
    'процент жира',
    'калькулятор процента жира',
    'процент жира в организме',
    'расчёт жира',
    'состав тела',
    'жировая масса',
    'метод ВМС США',
    'body fat calculator',
  ],
  openGraph: {
    title: 'Калькулятор процента жира онлайн — расчёт по 3 формулам',
    description:
      'Узнайте процент жира в организме по 3 научным формулам. Категории ACE, состав тела и сравнение методов.',
    type: 'website',
    url: '/zdorovye/telo/protsent-zhira',
  },
  alternates: {
    canonical: '/zdorovye/telo/protsent-zhira',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' },
]

export default function BodyFatPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор процента жира',
          description:
            'Онлайн калькулятор процента жира в организме по 3 научным формулам с визуальной шкалой категорий',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/protsent-zhira',
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
              name: 'Какой процент жира считается нормальным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для мужчин нормальный процент жира — 14–24%, для женщин — 21–31%. Атлетический уровень: 6–13% для мужчин и 14–20% для женщин. Незаменимый жир (минимум для здоровья): 2–5% у мужчин и 10–13% у женщин.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как точно измерить процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Самый доступный метод — расчёт по обхватам тела (метод ВМС США), точность 3–4%. Более точные методы: калиперометрия (складки кожи), биоимпедансный анализ (BIA), подводное взвешивание и DEXA-сканирование (золотой стандарт, точность до 1%).',
              },
            },
            {
              '@type': 'Question',
              name: 'Как правильно измерить обхват талии?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Измеряйте обхват талии на уровне пупка, не втягивая живот. Используйте мягкую сантиметровую ленту. Лучше измерять утром натощак. Лента должна плотно прилегать к коже, но не сдавливать.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем опасен высокий процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Избыток жировой ткани повышает риск сердечно-сосудистых заболеваний, диабета 2 типа, гипертонии, некоторых видов рака, заболеваний суставов и апноэ сна. Особенно опасен висцеральный жир вокруг внутренних органов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем процент жира лучше ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ не различает жировую и мышечную массу. Спортсмен с развитой мускулатурой может иметь ИМТ выше 25 (избыточный вес) при низком проценте жира. Процент жира даёт более точную картину состава тела и реальных рисков для здоровья.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как быстро можно снизить процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Безопасная скорость — 0,5–1% жира в месяц при дефиците калорий 300–500 ккал и регулярных тренировках. Более быстрое снижение чревато потерей мышечной массы и замедлением метаболизма.',
              },
            },
            {
              '@type': 'Question',
              name: 'Влияет ли возраст на нормальный процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. С возрастом процент жира естественно увеличивается — после 40 лет тело теряет мышечную массу и накапливает жир. Формула Gallagher учитывает возраст, а категории ACE дают общие ориентиры для взрослых всех возрастов.',
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
          name: 'Как рассчитать процент жира в организме',
          description:
            'Пошаговая инструкция по расчёту процента жира с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры тела',
              text: 'Выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Введите обхваты',
              text: 'Измерьте и укажите обхват талии, шеи и бёдер (для женщин) с помощью мягкой сантиметровой ленты.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Калькулятор покажет процент жира, категорию ACE, состав тела и сравнение 3 формул.',
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
              name: 'Процент жира',
              item: 'https://calc-box.ru/zdorovye/telo/protsent-zhira',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор процента жира
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте процент жира в организме по 3 научным формулам.
            Метод ВМС США, формулы Deurenberg и Gallagher. Визуальная шкала
            категорий, состав тела и рекомендации.
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
              <p>Выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Измерьте и укажите обхват талии, шеи и бёдер (для женщин) с помощью мягкой сантиметровой ленты.{' '}
                <a href="#measurements" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">Как правильно измерять&nbsp;&darr;</a>
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Калькулятор покажет процент жира, категорию ACE, состав тела и сравнение 3 формул.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт процента жира в организме</h2>
          <BodyFatCalculator />
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
              <Ruler className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
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
              <Target className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор калорий
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">

          {/* Блок 1: Что такое процент жира */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что такое процент жира в организме
            </h2>
            <p>
              Процент жира в организме (Body Fat Percentage, BF%) — это доля
              жировой ткани от общей массы тела. Жир необходим для нормального
              функционирования организма: он защищает внутренние органы,
              регулирует температуру тела, участвует в выработке гормонов
              и обеспечивает запас энергии.
            </p>
            <p>
              Однако избыток жировой ткани повышает риск сердечно-сосудистых
              заболеваний, диабета 2 типа, гипертонии и других проблем
              со здоровьем. Процент жира считается более информативным
              показателем, чем{' '}
              <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                индекс массы тела
              </Link>, поскольку учитывает соотношение жировой
              и мышечной массы. Зная свой процент жира, можно более точно оценить
              здоровье и определить{' '}
              <Link href="/zdorovye/telo/idealnyj-ves" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                идеальный вес
              </Link>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Формулы расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Формулы расчёта процента жира
            </h2>
            <p>
              Калькулятор использует <strong className="text-foreground">3 формулы</strong>, каждая из которых
              оценивает процент жира по-разному — на основе обхватов тела
              или индекса массы тела.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Target className="h-5 w-5 text-green-500" />
                  Метод ВМС США (US Navy)
                </h3>
                <p>
                  Разработан Военно-морскими силами США для оценки физической
                  формы военнослужащих. Использует обхваты тела (талия, шея,
                  бёдра для женщин) и рост. Точность метода — <strong className="text-foreground">3–4%</strong>{' '}
                  по сравнению с DEXA-сканированием.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 86,010 &times; log10(талия &minus; шея) &minus; 70,041 &times; log10(рост) + 36,76.</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 163,205 &times; log10(талия + бёдра &minus; шея) &minus; 97,684 &times; log10(рост) &minus; 78,387.</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-blue-500" />
                  Формула Deurenberg (1991)
                </h3>
                <p>
                  Оценивает процент жира на основе индекса массы тела (ИМТ),
                  возраста и пола. Удобна тем, что не требует измерения обхватов,
                  но менее точна для спортсменов и людей с нестандартным
                  телосложением.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Формула:</strong> BF% = 1,20 &times; ИМТ + 0,23 &times; возраст &minus; 10,8 &times; пол &minus; 5,4.</span>
                  <span className="block text-xs text-muted-foreground">(пол: мужчины = 1, женщины = 0)</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Scan className="h-5 w-5 text-violet-500" />
                  Формула Gallagher (2000)
                </h3>
                <p>
                  Более современная формула на основе ИМТ, разработанная
                  с использованием данных DEXA-сканирования. Учитывает возраст,
                  пол и этническую принадлежность (в калькуляторе используется
                  универсальный вариант).
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Формула:</strong> BF% = 63,7 &minus; 864 &times; (1/ИМТ) &minus; 12,1 &times; пол + 0,12 &times; возраст.</span>
                  <span className="block text-xs text-muted-foreground">(пол: мужчины = 1, женщины = 0)</span>
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Категории ACE — таблица */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Категории процента жира (ACE)
            </h2>
            <p>
              Американский совет по физическим упражнениям (ACE) выделяет
              следующие категории процента жира для взрослых:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Категория</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Мужчины</th>
                    <th className="py-2 pl-2 font-semibold text-foreground whitespace-nowrap">Женщины</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Незаменимый жир</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2–5%</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">10–13%</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Атлеты</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">6–13%</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">14–20%</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Фитнес</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">14–17%</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">21–24%</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Средний</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">18–24%</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">25–31%</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Выше нормы</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">25%+</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">32%+</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой процент жира&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Как правильно измерять обхваты */}
          <div id="measurements" className="space-y-3 scroll-mt-4">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Как правильно измерять обхваты
            </h2>
            <p>
              Точность метода ВМС США зависит от правильности измерений.
              Следуйте этим рекомендациям:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-amber-500" />
                  Обхват талии
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Измеряйте на уровне пупка</li>
                  <li>Не втягивайте живот</li>
                  <li>Лента параллельна полу</li>
                  <li>Измеряйте утром натощак</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Scan className="h-5 w-5 text-blue-500" />
                  Обхват шеи
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Измеряйте под кадыком</li>
                  <li>Смотрите прямо перед собой</li>
                  <li>Лента плотно, но не сдавливает</li>
                  <li>Не напрягайте мышцы шеи</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-pink-500" />
                  Обхват бёдер
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Самое широкое место ягодиц</li>
                  <li>Стойте ровно, ноги вместе</li>
                  <li>Лента параллельна полу</li>
                  <li>Для женщин — обязательно</li>
                </ul>
              </div>
            </div>
            <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
              Перейти к калькулятору&nbsp;&uarr;
            </a>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Как снизить процент жира */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="h-5 w-5" />
              Как снизить процент жира
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Droplets className="h-5 w-5 text-green-500" />
                  Питание
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Создайте умеренный дефицит калорий (<strong className="text-foreground">300–500</strong> ккал)</li>
                  <li>Увеличьте потребление белка (<strong className="text-foreground">1,6–2 г</strong> на кг веса)</li>
                  <li>Сократите простые углеводы и переработанные продукты</li>
                  <li>Ешьте больше овощей, клетчатки и здоровых жиров</li>
                </ul>
                <p>
                  Рассчитайте свою{' '}
                  <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    суточную норму калорий
                  </Link>{' '}
                  и спланируйте{' '}
                  <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    дефицит калорий
                  </Link>{' '}
                  для безопасного снижения веса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-blue-500" />
                  Тренировки
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Силовые тренировки <strong className="text-foreground">3–4</strong> раза в неделю</li>
                  <li>Кардио <strong className="text-foreground">2–3</strong> раза в неделю (30–45 минут)</li>
                  <li><strong className="text-foreground">10000</strong> шагов в день для базовой активности</li>
                  <li>Достаточный сон (<strong className="text-foreground">7–9</strong> часов) для восстановления</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Мужчина, 30 лет, 178 см, 82 кг</h3>
                <p>Талия <strong className="text-foreground">85 см</strong>, шея <strong className="text-foreground">38 см</strong></p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>ВМС США: <strong className="text-foreground">18,1%</strong></li>
                  <li>Deurenberg: <strong className="text-foreground">24,8%</strong></li>
                  <li>Gallagher: <strong className="text-foreground">22,4%</strong></li>
                </ul>
                <p>Категория ACE: <strong className="text-foreground">средний</strong>. Жировая масса: <strong className="text-foreground">14,8 кг</strong>, сухая масса: <strong className="text-foreground">67,2 кг</strong>.</p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Женщина, 25 лет, 165 см, 60 кг</h3>
                <p>Талия <strong className="text-foreground">70 см</strong>, шея <strong className="text-foreground">32 см</strong>, бёдра <strong className="text-foreground">95 см</strong></p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>ВМС США: <strong className="text-foreground">27,0%</strong></li>
                  <li>Deurenberg: <strong className="text-foreground">27,9%</strong></li>
                  <li>Gallagher: <strong className="text-foreground">29,5%</strong></li>
                </ul>
                <p>Категория ACE: <strong className="text-foreground">средний</strong>. Жировая масса: <strong className="text-foreground">16,2 кг</strong>, сухая масса: <strong className="text-foreground">43,8 кг</strong>.</p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой процент жира&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Сравнение методов измерения */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Сравнение методов измерения процента жира
            </h2>
            <p>
              Помимо формул по обхватам и ИМТ, существуют и другие методы
              измерения процента жира. Каждый имеет свои преимущества
              и ограничения.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Метод</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Точность</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Доступность</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">DEXA-скан</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±1%</strong></td>
                    <td className="py-2 pl-2">Клиника, дорого</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Гидростатика</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±1,5%</strong></td>
                    <td className="py-2 pl-2">Спецлаборатория</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">BIA (весы)</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±3–5%</strong></td>
                    <td className="py-2 pl-2">Дома / фитнес-клуб</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Калипер</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±3%</strong></td>
                    <td className="py-2 pl-2">Нужен опыт</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">ВМС США</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±3–4%</strong></td>
                    <td className="py-2 pl-2">Бесплатно, дома</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">По ИМТ</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">±5–8%</strong></td>
                    <td className="py-2 pl-2">Бесплатно, дома</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                BIA-весы чувствительны к уровню гидратации — результат может
                меняться на <strong className="text-foreground">2–3%</strong> в течение дня. Измеряйте
                в одно и то же время для корректного сравнения.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Практические советы */}
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
                  <p className="text-foreground font-medium">Измеряйте регулярно</p>
                  <p>Отслеживайте процент жира раз в 2–4 недели. Более частые измерения не покажут значимых изменений и могут демотивировать.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Измеряйте в одинаковых условиях</p>
                  <p>Утром, натощак, до тренировки. Результат зависит от уровня гидратации, приёма пищи и физической активности.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Не гонитесь за минимумом</p>
                  <p>Слишком низкий процент жира (<strong className="text-foreground">&lt;5%</strong> для мужчин, <strong className="text-foreground">&lt;12%</strong> для женщин) опасен для здоровья: гормональные нарушения, ослабление иммунитета, потеря костной массы.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Сохраняйте мышечную массу</p>
                  <p>При снижении процента жира ключевую роль играют силовые тренировки и достаточное потребление белка. Без них организм сжигает мышцы вместе с жиром.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Учитывайте{' '}
                    <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      базовый метаболизм
                    </Link>
                  </p>
                  <p>Зная свой базовый расход калорий, проще планировать дефицит и контролировать процесс снижения жировой массы без вреда для здоровья.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                Результаты калькулятора — ориентир, а не медицинский диагноз.
                При серьёзных отклонениях от нормы проконсультируйтесь с врачом.
              </p>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой процент жира&nbsp;&rarr;
              </a>
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
                  Какой процент жира считается нормальным?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для мужчин нормальный процент жира — <strong className="text-foreground">14–24%</strong>, для женщин —{' '}
                  <strong className="text-foreground">21–31%</strong>. Атлетический уровень: <strong className="text-foreground">6–13%</strong>{' '}
                  для мужчин и <strong className="text-foreground">14–20%</strong> для женщин. Минимум для здоровья
                  (незаменимый жир): <strong className="text-foreground">2–5%</strong> у мужчин
                  и <strong className="text-foreground">10–13%</strong> у женщин.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как точно измерить процент жира?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Самый доступный метод — расчёт по обхватам тела (метод ВМС
                  США), точность <strong className="text-foreground">3–4%</strong>. Более точные методы: калиперометрия,
                  биоимпедансный анализ (BIA) и DEXA-сканирование (золотой
                  стандарт, точность до <strong className="text-foreground">1%</strong>).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как правильно измерить обхват талии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Измеряйте обхват талии на уровне пупка, не втягивая живот.
                  Используйте мягкую сантиметровую ленту утром натощак. Лента
                  должна плотно прилегать к коже, но не сдавливать.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем опасен высокий процент жира?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Избыток жировой ткани повышает риск сердечно-сосудистых
                  заболеваний, диабета 2 типа, гипертонии, некоторых видов рака,
                  заболеваний суставов и апноэ сна. Особенно опасен висцеральный
                  жир вокруг внутренних органов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем процент жира лучше ИМТ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ИМТ не различает жировую и мышечную массу. Спортсмен с развитой
                  мускулатурой может иметь ИМТ выше <strong className="text-foreground">25</strong> (избыточный вес)
                  при низком проценте жира. Процент жира даёт более точную картину
                  состава тела и реальных рисков для здоровья.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как быстро можно снизить процент жира?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Безопасная скорость — <strong className="text-foreground">0,5–1%</strong> жира в месяц при дефиците
                  калорий <strong className="text-foreground">300–500</strong> ккал и регулярных тренировках. Более
                  быстрое снижение чревато потерей мышечной массы и замедлением
                  метаболизма.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Влияет ли возраст на нормальный процент жира?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. С возрастом процент жира естественно увеличивается — после{' '}
                  <strong className="text-foreground">40 лет</strong> тело теряет мышечную массу и накапливает жир.
                  Формула Gallagher учитывает возраст, а категории ACE дают общие
                  ориентиры для взрослых всех возрастов.
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
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
              <Link
                href="/zdorovye/pitanie/norma-vody"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Droplets className="h-4 w-4 text-muted-foreground" />
                Норма воды
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
