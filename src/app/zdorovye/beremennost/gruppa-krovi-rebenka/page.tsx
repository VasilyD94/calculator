import type { Metadata } from 'next'
import Link from 'next/link'
import { BloodTypeCalculator } from '@/components/calculators/BloodTypeCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Info,
  Calculator,
  Lightbulb,
  ClipboardList,
  CircleHelp,
  Baby,
  Droplets,
  Scale,
  Dna,
  FlaskConical,
  AlertTriangle,
  BookOpen,
  Compass,
  CalendarDays,
  Egg,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Группа крови ребёнка — расчёт по родителям онлайн',
  description:
    'Рассчитайте группу крови ребёнка бесплатно ✓ По группам крови родителей ✓ Резус-фактор ✓ Вероятность каждой группы. Без регистрации.',
  keywords: [
    'группа крови ребенка',
    'калькулятор группы крови',
    'наследование группы крови',
    'резус-фактор ребенка',
    'группа крови по родителям',
    'какая группа крови будет у ребенка',
    'расчет группы крови',
  ],
  openGraph: {
    title: 'Группа крови ребёнка — расчёт по родителям онлайн',
    description:
      'Узнайте возможную группу крови ребёнка по группам крови родителей. Расчёт резус-фактора и вероятности.',
    type: 'website',
    url: '/zdorovye/beremennost/gruppa-krovi-rebenka',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/gruppa-krovi-rebenka',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Группа крови ребёнка', href: '/zdorovye/beremennost/gruppa-krovi-rebenka' },
]

export default function BloodTypePage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор группы крови ребёнка',
          description:
            'Онлайн калькулятор определения возможной группы крови ребёнка по группам крови родителей',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/beremennost/gruppa-krovi-rebenka',
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
              name: 'Как наследуется группа крови?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Группа крови наследуется по законам Менделя. Ребёнок получает по одному гену от каждого родителя. Гены A и B — доминантные, ген O — рецессивный. Поэтому у родителей с I(O) группой может родиться только ребёнок с I группой.',
              },
            },
            {
              '@type': 'Question',
              name: 'Может ли у ребёнка быть группа крови, отличная от родителей?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, это возможно и часто случается. Например, у родителей со II(A) и III(B) группами может родиться ребёнок с любой из четырёх групп крови — I, II, III или IV.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как наследуется резус-фактор?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Резус-фактор определяется доминантным геном D. Если оба родителя Rh-, ребёнок будет только Rh-. Если хотя бы один родитель Rh+, ребёнок может быть как Rh+, так и Rh- (если оба родителя являются носителями рецессивного гена).',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое резус-конфликт?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Резус-конфликт возникает, когда у Rh- матери развивается Rh+ плод. Организм матери может начать вырабатывать антитела против эритроцитов ребёнка. Современная профилактика (введение антирезусного иммуноглобулина) позволяет избежать осложнений.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли точно определить группу крови ребёнка до рождения?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Калькулятор показывает только вероятности на основе генетических законов. Точно определить группу крови можно только анализом крови после рождения ребёнка или с помощью специальных пренатальных тестов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему у родителей с IV группой не может быть ребёнка с I группой?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'IV группа крови имеет генотип AB — оба гена доминантные. Для I группы нужен генотип OO (два рецессивных гена). Поскольку родитель с IV группой не может передать ген O, ребёнок с I группой невозможен.',
              },
            },
            {
              '@type': 'Question',
              name: 'Влияет ли группа крови на здоровье ребёнка?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Сама по себе группа крови не влияет на здоровье. Однако знание группы крови важно при переливании крови, операциях и для учёта возможного резус-конфликта при беременности.',
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
          name: 'Как рассчитать группу крови ребёнка',
          description: 'Пошаговая инструкция по расчёту возможной группы крови ребёнка',
          step: [
            {
              '@type': 'HowToStep',
              name: 'Выберите группу крови матери',
              text: 'Укажите группу крови и резус-фактор матери в полях калькулятора.',
            },
            {
              '@type': 'HowToStep',
              name: 'Выберите группу крови отца',
              text: 'Укажите группу крови и резус-фактор отца.',
            },
            {
              '@type': 'HowToStep',
              name: 'Получите результат',
              text: 'Калькулятор автоматически рассчитает возможные группы крови ребёнка и их вероятности.',
            },
          ],
        }}
      />

      {/* BreadcrumbList Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.label,
            item: `https://calc-box.ru${crumb.href}`,
          })),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Заголовок */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Группа крови ребёнка — онлайн расчёт
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте возможную группу крови и резус-фактор ребёнка по группам крови
            родителей. Калькулятор покажет все варианты с вероятностями.
          </p>
        </header>

        {/* Как пользоваться */}
        <section className="mb-8 rounded-lg border p-4">
          <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Как пользоваться калькулятором
          </h2>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary">
                1
              </span>
              <span className="pt-0.5">Выберите группу крови и резус-фактор матери.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary">
                2
              </span>
              <span className="pt-0.5">Выберите группу крови и резус-фактор отца.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary">
                3
              </span>
              <span className="pt-0.5">Получите все возможные группы крови ребёнка с процентом вероятности.</span>
            </li>
          </ol>
        </section>

        {/* Калькулятор */}
        <section aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">
            Калькулятор группы крови ребёнка
          </h2>
          <BloodTypeCalculator />
        </section>

        {/* Вам также будет полезно */}
        <section className="mt-8 rounded-lg border p-4">
          <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Link
              href="/zdorovye/beremennost/data-rodov"
              className="flex flex-col items-center gap-1.5 rounded-md p-3 text-center hover:bg-accent transition-colors"
            >
              <CalendarDays className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs">Дата родов</span>
            </Link>
            <Link
              href="/zdorovye/beremennost/srok-beremennosti"
              className="flex flex-col items-center gap-1.5 rounded-md p-3 text-center hover:bg-accent transition-colors"
            >
              <Baby className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs">Срок беременности</span>
            </Link>
            <Link
              href="/zdorovye/beremennost/ovulyatsiya"
              className="flex flex-col items-center gap-1.5 rounded-md p-3 text-center hover:bg-accent transition-colors"
            >
              <Egg className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs">Овуляция</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="flex flex-col items-center gap-1.5 rounded-md p-3 text-center hover:bg-accent transition-colors"
            >
              <Scale className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs">Калькулятор ИМТ</span>
            </Link>
          </div>
        </section>

        {/* SEO-контент */}
        <section className="mt-12 space-y-8 text-sm text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что определяет группу крови
            </h2>
            <p>
              Группа крови человека определяется генами, которые наследуются от родителей.
              Система ABO основана на наличии или отсутствии антигенов A и B на поверхности
              эритроцитов. Эти антигены кодируются тремя аллелями гена: A, B и O.
            </p>
            <p>
              Каждый человек получает по одному аллелю от каждого родителя. Аллели A и B
              являются доминантными по отношению к аллелю O, который рецессивен. При этом
              A и B кодоминантны друг к другу — если человек получил оба, проявятся оба.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Dna className="h-5 w-5" />
              Генотипы групп крови
            </h2>
            <p>
              Каждая группа крови имеет определённые генотипы — комбинации аллелей,
              которые её определяют:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">I группа (O)</h3>
                <p>
                  Генотип: <strong className="text-foreground">OO</strong>
                </p>
                <p>
                  Оба аллеля рецессивные. Антигены A и B отсутствуют.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">II группа (A)</h3>
                <p>
                  Генотип: <strong className="text-foreground">AA</strong> или{' '}
                  <strong className="text-foreground">AO</strong>
                </p>
                <p>
                  На эритроцитах присутствует антиген A.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">III группа (B)</h3>
                <p>
                  Генотип: <strong className="text-foreground">BB</strong> или{' '}
                  <strong className="text-foreground">BO</strong>
                </p>
                <p>
                  На эритроцитах присутствует антиген B.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">IV группа (AB)</h3>
                <p>
                  Генотип: <strong className="text-foreground">AB</strong>
                </p>
                <p>
                  Присутствуют оба антигена — A и B.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Как рассчитать группу крови ребёнка
            </h2>
            <p>
              Для расчёта возможных групп крови ребёнка нужно знать группы крови обоих
              родителей. Ребёнок получает по одному аллелю от каждого родителя, и
              комбинация этих аллелей определяет его группу крови.
            </p>
            <p>
              Например, если у матери II группа (генотип AO), а у отца III группа
              (генотип BO), возможные комбинации для ребёнка:
            </p>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-primary">
              <li><strong className="text-foreground">AB</strong> — IV группа (25%)</li>
              <li><strong className="text-foreground">AO</strong> — II группа (25%)</li>
              <li><strong className="text-foreground">BO</strong> — III группа (25%)</li>
              <li><strong className="text-foreground">OO</strong> — I группа (25%)</li>
            </ul>
            <p>
              Наш калькулятор автоматически учитывает все возможные генотипы родителей
              и рассчитывает вероятности для каждой группы крови.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Droplets className="h-5 w-5" />
              Резус-фактор: наследование
            </h2>
            <p>
              Резус-фактор определяется наличием или отсутствием белка RhD на поверхности
              эритроцитов. Ген, кодирующий этот белок, имеет два аллеля: D (доминантный,
              Rh+) и d (рецессивный, Rh-).
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">Rh+ (положительный)</h3>
                <p>
                  Генотип: <strong className="text-foreground">DD</strong> или{' '}
                  <strong className="text-foreground">Dd</strong>
                </p>
                <p>
                  Человек с Dd является носителем рецессивного гена.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1">
                <h3 className="font-medium text-foreground">Rh- (отрицательный)</h3>
                <p>
                  Генотип: <strong className="text-foreground">dd</strong>
                </p>
                <p>
                  Оба аллеля рецессивные, белок RhD отсутствует.
                </p>
              </div>
            </div>
            <p>
              Если оба родителя Rh-, ребёнок будет только Rh-. Если хотя бы один родитель
              Rh+, возможны оба варианта (если Rh+ родитель является носителем гена d).
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Резус-конфликт при беременности
            </h2>
            <p>
              Резус-конфликт может возникнуть, когда у Rh- матери развивается Rh+ плод.
              При попадании эритроцитов плода в кровоток матери (например, при родах)
              её организм может начать вырабатывать антитела против резус-положительных
              клеток.
            </p>
            <p className="rounded-md bg-amber-50 text-amber-900 p-3 border border-amber-200">
              <strong>Важно:</strong> При первой беременности резус-конфликт обычно не
              проявляется. Проблемы могут возникнуть при последующих беременностях Rh+
              плодом. Современная профилактика — введение антирезусного иммуноглобулина
              на 28 неделе и после родов — позволяет избежать осложнений.
            </p>
            <p>
              Если у вас отрицательный резус-фактор, а у партнёра положительный,
              обязательно сообщите об этом врачу при планировании беременности.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Таблица наследования групп крови
            </h2>
            <p>
              В таблице показаны возможные группы крови ребёнка в зависимости от групп
              крови родителей:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left font-medium text-foreground">Мать / Отец</th>
                    <th className="p-2 text-center font-medium text-foreground">I (O)</th>
                    <th className="p-2 text-center font-medium text-foreground">II (A)</th>
                    <th className="p-2 text-center font-medium text-foreground">III (B)</th>
                    <th className="p-2 text-center font-medium text-foreground">IV (AB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium text-foreground">I (O)</td>
                    <td className="p-2 text-center">I</td>
                    <td className="p-2 text-center">I, II</td>
                    <td className="p-2 text-center">I, III</td>
                    <td className="p-2 text-center">II, III</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium text-foreground">II (A)</td>
                    <td className="p-2 text-center">I, II</td>
                    <td className="p-2 text-center">I, II</td>
                    <td className="p-2 text-center">I, II, III, IV</td>
                    <td className="p-2 text-center">II, III, IV</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium text-foreground">III (B)</td>
                    <td className="p-2 text-center">I, III</td>
                    <td className="p-2 text-center">I, II, III, IV</td>
                    <td className="p-2 text-center">I, III</td>
                    <td className="p-2 text-center">II, III, IV</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium text-foreground">IV (AB)</td>
                    <td className="p-2 text-center">II, III</td>
                    <td className="p-2 text-center">II, III, IV</td>
                    <td className="p-2 text-center">II, III, IV</td>
                    <td className="p-2 text-center">II, III, IV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Обратите внимание: у родителей с IV группой не может быть ребёнка с I группой,
              а у родителей с I группой не может быть ребёнка с IV группой.
            </p>
          </div>

          {/* Якорная ссылка */}
          <div className="flex justify-center">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <Calculator className="h-4 w-4" />
              Рассчитать группу крови ребёнка
            </a>
          </div>

          <hr className="border-border" />

          {/* Блок 7 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <FlaskConical className="h-5 w-5" />
              Как определить группу крови
            </h2>
            <p>
              Группу крови определяют с помощью лабораторного анализа. Существует
              несколько методов:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Стандартные сыворотки</strong> —
                капли крови смешивают с сыворотками, содержащими антитела к антигенам
                A и B. По реакции агглютинации определяют группу.
              </li>
              <li>
                <strong className="text-foreground">Цоликлоны</strong> — современные
                моноклональные антитела, более точный и быстрый метод.
              </li>
              <li>
                <strong className="text-foreground">Гелевые карты</strong> —
                автоматизированный метод, используемый в крупных лабораториях.
              </li>
            </ul>
            <p>
              Анализ на группу крови можно сдать в любой поликлинике или лаборатории.
              Результат обычно готов в тот же день или на следующий.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Интересные факты о группах крови
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Распространённость:</strong> В России
                наиболее распространена II группа (~35-40%), затем I (~30-35%), III (~15-20%)
                и IV (~5-10%).
              </li>
              <li>
                <strong className="text-foreground">Универсальный донор:</strong> Люди с
                I группой и Rh- могут быть донорами эритроцитов для всех групп крови.
              </li>
              <li>
                <strong className="text-foreground">Универсальный реципиент:</strong> Люди
                с IV группой и Rh+ могут получать эритроциты любой группы крови.
              </li>
              <li>
                <strong className="text-foreground">Редкая группа:</strong> IV группа с
                отрицательным резусом — самая редкая, встречается у менее 1% населения.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <CircleHelp className="h-5 w-5" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Как наследуется группа крови?
                </AccordionTrigger>
                <AccordionContent>
                  Группа крови наследуется по законам Менделя. Ребёнок получает по одному
                  гену от каждого родителя. Гены A и B — доминантные, ген O — рецессивный.
                  Поэтому у родителей с I(O) группой может родиться только ребёнок с I группой.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Может ли у ребёнка быть группа крови, отличная от родителей?
                </AccordionTrigger>
                <AccordionContent>
                  Да, это возможно и часто случается. Например, у родителей со II(A) и
                  III(B) группами может родиться ребёнок с любой из четырёх групп крови.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Как наследуется резус-фактор?
                </AccordionTrigger>
                <AccordionContent>
                  Резус-фактор определяется доминантным геном D. Если оба родителя Rh-,
                  ребёнок будет только Rh-. Если хотя бы один родитель Rh+, ребёнок может
                  быть как Rh+, так и Rh-.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Что такое резус-конфликт?
                </AccordionTrigger>
                <AccordionContent>
                  Резус-конфликт возникает, когда у Rh- матери развивается Rh+ плод.
                  Организм матери может начать вырабатывать антитела против эритроцитов
                  ребёнка. Современная профилактика позволяет избежать осложнений.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Можно ли точно определить группу крови ребёнка до рождения?
                </AccordionTrigger>
                <AccordionContent>
                  Калькулятор показывает только вероятности. Точно определить группу крови
                  можно только анализом крови после рождения или с помощью специальных
                  пренатальных тестов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Почему у родителей с IV группой не может быть ребёнка с I группой?
                </AccordionTrigger>
                <AccordionContent>
                  IV группа крови имеет генотип AB. Для I группы нужен генотип OO.
                  Поскольку родитель с IV группой не может передать ген O, ребёнок
                  с I группой невозможен.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  Влияет ли группа крови на здоровье ребёнка?
                </AccordionTrigger>
                <AccordionContent>
                  Сама по себе группа крови не влияет на здоровье. Однако знание группы
                  крови важно при переливании крови, операциях и для учёта возможного
                  резус-конфликта при беременности.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-3" aria-label="Связанные калькуляторы">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Compass className="h-5 w-5" />
              Связанные калькуляторы
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/zdorovye/beremennost/data-rodov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <CalendarDays className="h-4 w-4" />
                Дата родов
              </Link>
              <Link
                href="/zdorovye/beremennost/srok-beremennosti"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Baby className="h-4 w-4" />
                Срок беременности
              </Link>
              <Link
                href="/zdorovye/beremennost/ovulyatsiya"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Egg className="h-4 w-4" />
                Овуляция
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Scale className="h-4 w-4" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Activity className="h-4 w-4" />
                Базовый метаболизм
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
