import type { Metadata } from 'next'
import Link from 'next/link'
import { MacroCalculator } from '@/components/calculators/MacroCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Flame,
  Scale,
  TrendingDown,
  GlassWater,
  Activity,
  Target,
  Beef,
  Droplets,
  Wheat,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Compass,
  Info,
  Calculator,
  Puzzle,
  Utensils,
  Search,
  ClipboardList,
  CircleHelp,
  ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор БЖУ онлайн — расчёт белков, жиров и углеводов',
  description:
    'Бесплатный калькулятор БЖУ онлайн ✓ 5 типов диет ✓ Расчёт в граммах и на кг веса ✓ Белки, жиры, углеводы для похудения и набора массы. Без регистрации.',
  keywords: [
    'калькулятор БЖУ',
    'расчёт БЖУ',
    'белки жиры углеводы',
    'норма БЖУ',
    'БЖУ для похудения',
    'макронутриенты',
    'соотношение БЖУ',
    'расчёт макросов',
  ],
  openGraph: {
    title: 'Калькулятор БЖУ — расчёт белков, жиров и углеводов',
    description:
      'Рассчитайте оптимальное соотношение БЖУ. 5 типов диет, результат в граммах и на кг веса.',
    type: 'website',
    url: '/zdorovye/pitanie/kalkulyator-bzhu',
  },
  alternates: {
    canonical: '/zdorovye/pitanie/kalkulyator-bzhu',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Калькулятор БЖУ', href: '/zdorovye/pitanie/kalkulyator-bzhu' },
]

export default function MacroCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор БЖУ онлайн',
          description:
            'Онлайн калькулятор белков, жиров и углеводов с 5 типами диет',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/pitanie/kalkulyator-bzhu',
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
              name: 'Что такое БЖУ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'БЖУ — это аббревиатура, обозначающая три макронутриента: белки, жиры и углеводы. Это основные источники энергии и строительный материал для организма. Белки и углеводы дают по 4 ккал на грамм, жиры — 9 ккал.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какое соотношение БЖУ оптимально для похудения?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для похудения рекомендуется повышенное содержание белка — около 35–40% от калорий. Оптимальное соотношение: белки 35–40%, жиры 25–30%, углеводы 30–35%. Высокий белок помогает сохранить мышечную массу при дефиците калорий.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько белка нужно в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для обычного человека — 0,8–1,2 г на кг веса. При занятиях спортом — 1,4–2 г на кг. При похудении — 1,6–2 г на кг для сохранения мышц. При интенсивном спорте — до 2,5 г на кг.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли полностью убрать жиры из рациона?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Нет, жиры жизненно необходимы. Минимальная безопасная норма — 0,8 г на кг веса. Жиры участвуют в усвоении витаминов A, D, E, K, производстве гормонов и работе нервной системы.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем отличается кето-диета от низкоуглеводной?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Низкоуглеводная диета ограничивает углеводы до 25% от калорий (около 100–150 г в день). Кето-диета — это экстремальное ограничение до 5% (менее 50 г), при котором организм переходит в состояние кетоза и использует жиры как основной источник энергии.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужно ли считать БЖУ или достаточно калорий?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Калории определяют, будете вы худеть или набирать вес. БЖУ определяет качество — сохраните ли мышцы или потеряете их. Два рациона с одинаковой калорийностью, но разным БЖУ дадут разные результаты. Для оптимального результата важно контролировать и то, и другое.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто нужно пересчитывать норму БЖУ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Пересчитывайте при изменении веса на 5 кг и более, при смене уровня активности, при переходе на другой тип диеты или при отсутствии прогресса в течение 3–4 недель.',
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
          name: 'Как рассчитать норму БЖУ',
          description:
            'Пошаговая инструкция по расчёту оптимального соотношения белков, жиров и углеводов.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры тела',
              text: 'Укажите пол, возраст, рост, вес и уровень физической активности.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Выберите цель и тип питания',
              text: 'Укажите цель (похудение, поддержание, набор массы) и подходящий тип диеты из 5 вариантов.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно покажет количество граммов белков, жиров и углеводов, а также сравнение всех типов диет.',
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
              name: 'Питание',
              item: 'https://calc-box.ru/zdorovye/pitanie',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Калькулятор БЖУ',
              item: 'https://calc-box.ru/zdorovye/pitanie/kalkulyator-bzhu',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Калькулятор БЖУ онлайн
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте оптимальное соотношение белков, жиров и углеводов
            для вашей цели. 5 типов диет, результат в граммах и на кг веса.
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
                Укажите пол, возраст, рост, вес и уровень физической
                активности.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>
                Выберите цель (похудение, поддержание, набор массы)
                и подходящий тип диеты из 5 вариантов.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Калькулятор мгновенно покажет количество граммов белков,
                жиров и углеводов, а также сравнение всех типов диет.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт белков, жиров и углеводов</h2>
          <MacroCalculator />
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
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор калорий</span>
            </Link>
            <Link
              href="/zdorovye/pitanie/defitsit-kalorij"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <TrendingDown className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Дефицит калорий</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор ИМТ</span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Activity className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Базовый метаболизм</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1: Что такое БЖУ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое БЖУ и зачем их считать
            </h2>
            <p>
              БЖУ — это белки, жиры и углеводы, три основных макронутриента,
              из которых организм получает энергию. Каждый из них выполняет
              уникальную функцию: белки строят и восстанавливают ткани, жиры
              участвуют в гормональном обмене и усвоении витаминов, углеводы
              обеспечивают энергией мозг и мышцы.
            </p>
            <p>
              Простой подсчёт{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                калорий
              </Link>{' '}
              не даёт полной картины. Два рациона
              с одинаковой калорийностью, но разным{' '}
              <strong className="text-foreground">соотношением БЖУ</strong>,
              дадут совершенно разные результаты. Рацион с высоким содержанием
              белка помогает сохранить мышечную массу при похудении, тогда как
              избыток простых углеводов может привести к набору жира даже при
              умеренной калорийности.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Как работает калькулятор */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Как работает калькулятор БЖУ
            </h2>
            <p>
              Калькулятор рассчитывает вашу суточную норму калорий по формуле
              Миффлина-Сан Жеора с учётом пола, возраста, роста, веса и уровня
              физической активности. Затем распределяет калории между белками,
              жирами и углеводами в зависимости от выбранного типа питания
              и цели.
            </p>
            <p>
              Результат обновляется мгновенно при изменении любого параметра.
              Вы можете переключать типы диет и сразу видеть, как меняется
              количество граммов каждого макронутриента. Калькулятор также
              показывает количество белков, жиров и углеводов{' '}
              <strong className="text-foreground">на килограмм веса</strong> —
              это удобно для сравнения с научными рекомендациями.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Роль каждого макронутриента */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Роль каждого макронутриента
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Beef className="size-5 text-rose-300" />
                  Белки
                </h3>
                <p>
                  Строительный материал для мышц, иммунной системы, гормонов
                  и ферментов. <strong className="text-foreground">1 грамм = 4 ккал</strong>.
                  При похудении защищают мышцы от разрушения.
                  Норма: <strong className="text-foreground">0,8–2</strong> г на кг веса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Droplets className="size-5 text-amber-300" />
                  Жиры
                </h3>
                <p>
                  Необходимы для усвоения жирорастворимых витаминов (A, D, E, K),
                  работы нервной системы и выработки гормонов.{' '}
                  <strong className="text-foreground">1 грамм = 9 ккал</strong>.
                  Минимум: <strong className="text-foreground">0,8</strong> г на кг веса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Wheat className="size-5 text-orange-300" />
                  Углеводы
                </h3>
                <p>
                  Основной источник энергии для мозга и мышц.{' '}
                  <strong className="text-foreground">1 грамм = 4 ккал</strong>.
                  Предпочтительны сложные: крупы, овощи, цельнозерновые.
                  Простые углеводы (сахар) лучше ограничивать.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4: 5 типов питания */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Utensils className="size-5" />
              5 типов питания в калькуляторе
            </h2>
            <p>
              Калькулятор предлагает <strong className="text-foreground">5</strong> готовых
              профилей питания с разным распределением макронутриентов.
              Выбирайте тип в зависимости от вашей цели и образа жизни:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Сбалансированная
                    <span className="font-normal text-xs text-muted-foreground"> 30/30/40</span>
                  </p>
                  <p>
                    Классическое соотношение, подходит большинству людей для
                    поддержания здоровья и веса.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Высокобелковая
                    <span className="font-normal text-xs text-muted-foreground"> 40/30/30</span>
                  </p>
                  <p>
                    Акцент на белок для сохранения мышц при похудении или их
                    роста при наборе массы.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Низкоуглеводная
                    <span className="font-normal text-xs text-muted-foreground"> 35/40/25</span>
                  </p>
                  <p>
                    Ограничение углеводов при увеличении доли жиров. Помогает
                    контролировать аппетит и уровень сахара в крови.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Кето
                    <span className="font-normal text-xs text-muted-foreground"> 25/70/5</span>
                  </p>
                  <p>
                    Экстремальное ограничение углеводов (менее <strong className="text-foreground">50</strong> г
                    в день). Организм переключается на жиры как основной источник
                    энергии — состояние кетоза.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Для спортсменов
                    <span className="font-normal text-xs text-muted-foreground"> 30/20/50</span>
                  </p>
                  <p>
                    Больше углеводов для обеспечения энергией при интенсивных
                    тренировках. Жиры снижены до минимума.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5: БЖУ для похудения и набора */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="size-5" />
              БЖУ для похудения и набора массы
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Для похудения
                </h3>
                <p>
                  Ключевой момент — достаточное количество белка. При{' '}
                  <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    дефиците калорий
                  </Link>{' '}
                  организм теряет не только жир, но и мышечную массу.
                  Высокое потребление белка (<strong className="text-foreground">1,6–2</strong> г/кг)
                  помогает сохранить мышцы.
                </p>
                <div className="flex gap-2 items-start">
                  <AlertTriangle className="size-5 shrink-0 text-amber-400" />
                  <p>
                    Не рекомендуется сочетать жёсткий дефицит калорий с
                    низкобелковой диетой — это приведёт к потере мышц
                    и замедлению метаболизма.
                  </p>
                </div>
              </div>
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Для набора массы
                </h3>
                <p>
                  Для роста мышц нужен профицит калорий и достаточно белка.
                  Оптимально: профицит <strong className="text-foreground">300–500</strong> ккал
                  и <strong className="text-foreground">1,6–2</strong> г белка на кг веса.
                </p>
                <div className="flex gap-2 items-start">
                  <Lightbulb className="size-5 shrink-0 text-blue-400" />
                  <p>
                    При наборе массы <strong className="text-foreground">углеводы не менее важны</strong>,
                    чем белок — они необходимы для восполнения гликогена
                    в мышцах после тренировок.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму БЖУ&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Норма белка — таблица */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Beef className="size-5" />
              Норма белка в зависимости от цели
            </h2>
            <p>
              Потребность в белке сильно зависит от цели и уровня
              физической активности. В таблице ниже приведены научно обоснованные
              нормы:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Цель</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Белок, г/кг</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Пример (75 кг)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Поддержание</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">0,8–1,2</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">60–90</strong> г</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Похудение</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1,6–2,0</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">120–150</strong> г</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Набор мышц</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1,6–2,2</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">120–165</strong> г</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Интенсивный спорт</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1,8–2,5</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">135–188</strong> г</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Таблица показывает средние значения. Точную норму для вашего веса
              и цели рассчитает{' '}
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                калькулятор выше&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Как подобрать тип питания */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Search className="size-5" />
              Как подобрать тип питания
            </h2>
            <p>
              Выбор типа диеты зависит от вашей цели, образа жизни
              и индивидуальных особенностей организма:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Хотите похудеть без потери мышц</strong> —
                выберите высокобелковую диету. Повышенный белок помогает
                сохранить мышечную массу при дефиците калорий.
              </li>
              <li>
                <strong className="text-foreground">Занимаетесь спортом регулярно</strong> —
                подойдёт спортивная диета с акцентом на углеводы. Они
                обеспечивают энергию для тренировок и восстановления.
              </li>
              <li>
                <strong className="text-foreground">Хотите контролировать аппетит</strong> —
                попробуйте низкоуглеводную диету. Жиры и белки дают более
                длительное чувство сытости.
              </li>
              <li>
                <strong className="text-foreground">Нет специфических целей</strong> —
                сбалансированная диета является оптимальным выбором для
                большинства людей.
              </li>
              <li>
                <strong className="text-foreground">Рассматриваете кето</strong> —
                проконсультируйтесь с врачом. Кето-диета имеет
                противопоказания и требует контроля.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта БЖУ
            </h2>
            <p>
              Рассмотрим два примера расчёта по формуле Миффлина-Сан Жеора
              с высокобелковой диетой (40/30/30):
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Женщина, 30 лет, похудение
                </h3>
                <p>
                  Рост <strong className="text-foreground">165</strong> см,
                  вес <strong className="text-foreground">68</strong> кг,
                  средняя активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>TDEE: <strong className="text-foreground">2079</strong> ккал</li>
                  <li>Для похудения (−15%): <strong className="text-foreground">1767</strong> ккал</li>
                  <li>Белки: <strong className="text-foreground">177</strong> г (40%)</li>
                  <li>Жиры: <strong className="text-foreground">59</strong> г (30%)</li>
                  <li>Углеводы: <strong className="text-foreground">133</strong> г (30%)</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Мужчина, 25 лет, набор массы
                </h3>
                <p>
                  Рост <strong className="text-foreground">180</strong> см,
                  вес <strong className="text-foreground">75</strong> кг,
                  высокая активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>TDEE: <strong className="text-foreground">3009</strong> ккал</li>
                  <li>Для набора (+15%): <strong className="text-foreground">3460</strong> ккал</li>
                  <li>Белки: <strong className="text-foreground">346</strong> г (40%)</li>
                  <li>Жиры: <strong className="text-foreground">115</strong> г (30%)</li>
                  <li>Углеводы: <strong className="text-foreground">260</strong> г (30%)</li>
                </ul>
              </div>
            </div>
            <p>
              Обратите внимание: при наборе массы количество белка значительно
              выше за счёт большей калорийности. Используйте
              показатель <strong className="text-foreground">«г на кг»</strong> для
              контроля — он не должен превышать <strong className="text-foreground">2,5</strong> г/кг.
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму БЖУ&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9: Советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Практические советы по контролю БЖУ
            </h2>
            <p>
              Контроль макронутриентов не должен превращаться в стресс. Вот
              несколько рекомендаций для начала:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">1</span>
                <div>
                  <p className="text-foreground font-medium">Начните с белка</p>
                  <p>
                    Белок — самый сложный макронутриент для набора. Планируйте
                    его в каждый приём пищи: мясо, рыба, яйца, творог,
                    бобовые.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">2</span>
                <div>
                  <p className="text-foreground font-medium">Не бойтесь жиров</p>
                  <p>
                    Полезные жиры (авокадо, орехи, оливковое масло, рыба)
                    необходимы для здоровья. Ограничивать стоит только
                    трансжиры и избыток насыщенных.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">3</span>
                <div>
                  <p className="text-foreground font-medium">Выбирайте сложные углеводы</p>
                  <p>
                    Крупы, овощи, цельнозерновой хлеб дают стабильную энергию.
                    Простые углеводы (сахар, белый хлеб) вызывают скачки
                    глюкозы и быстрый голод.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">4</span>
                <div>
                  <p className="text-foreground font-medium">Используйте приложения</p>
                  <p>
                    На первых порах используйте приложения для подсчёта БЖУ.
                    Через <strong className="text-foreground">2–3</strong> недели вы научитесь
                    оценивать порции интуитивно.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">5</span>
                <div>
                  <p className="text-foreground font-medium">Пейте достаточно воды</p>
                  <p>
                    При повышенном потреблении белка организму нужно больше воды.
                    Рекомендуется{' '}
                    <Link href="/zdorovye/pitanie/norma-vody" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      минимум 30 мл на кг веса
                    </Link>{' '}
                    в день.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>
                Калькулятор даёт ориентировочные значения. При заболеваниях
                почек, печени, диабете или расстройствах пищевого поведения
                проконсультируйтесь с врачом перед изменением рациона.
              </p>
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
                  Что такое БЖУ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  БЖУ — аббревиатура, обозначающая белки, жиры и углеводы.
                  Это три основных макронутриента, из которых организм получает
                  энергию и строительный материал для клеток. Белки и углеводы
                  дают по <strong className="text-foreground">4</strong> ккал на грамм,
                  жиры — <strong className="text-foreground">9</strong> ккал.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какое соотношение БЖУ оптимально для похудения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для похудения рекомендуется повышенное содержание белка —
                  около <strong className="text-foreground">35–40%</strong> от калорий.
                  Это помогает сохранить мышечную массу при дефиците калорий.
                  Оптимальное соотношение: белки 35–40%, жиры 25–30%,
                  углеводы 30–35%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько белка нужно в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для обычного человека — <strong className="text-foreground">0,8–1,2</strong> г
                  на кг веса. При занятиях спортом — <strong className="text-foreground">1,4–2</strong> г
                  на кг. При похудении — <strong className="text-foreground">1,6–2</strong> г на кг
                  для сохранения мышц. При интенсивном спорте — до{' '}
                  <strong className="text-foreground">2,5</strong> г на кг.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли полностью убрать жиры из рациона?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, жиры жизненно необходимы. Минимальная безопасная норма —{' '}
                  <strong className="text-foreground">0,8</strong> г на кг веса.
                  Жиры участвуют в усвоении витаминов A, D, E, K, производстве
                  гормонов и работе нервной системы.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Чем отличается кето-диета от низкоуглеводной?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Низкоуглеводная диета ограничивает углеводы до{' '}
                  <strong className="text-foreground">25%</strong> от калорий
                  (около <strong className="text-foreground">100–150</strong> г в день).
                  Кето-диета — это экстремальное ограничение до{' '}
                  <strong className="text-foreground">5%</strong> (менее{' '}
                  <strong className="text-foreground">50</strong> г), при котором организм
                  переходит в состояние кетоза и использует жиры как основной
                  источник энергии.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужно ли считать БЖУ или достаточно калорий?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Калории определяют, будете вы худеть или набирать вес. БЖУ
                  определяет качество — сохраните ли мышцы или потеряете их.
                  Два рациона с одинаковой калорийностью, но разным БЖУ дадут
                  разные результаты. Для оптимального результата важно
                  контролировать и то, и другое.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто нужно пересчитывать норму БЖУ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пересчитывайте при изменении веса
                  на <strong className="text-foreground">5</strong> кг и более, при смене уровня
                  активности, при переходе на другой тип диеты или при
                  отсутствии прогресса в течение <strong className="text-foreground">3–4</strong> недель.
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
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="size-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="size-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/pitanie/norma-vody"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <GlassWater className="size-4 text-muted-foreground" />
                Норма воды
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
