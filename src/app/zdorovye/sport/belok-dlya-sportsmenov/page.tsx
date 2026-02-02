import type { Metadata } from 'next'
import Link from 'next/link'
import { ProteinCalculator } from '@/components/calculators/ProteinCalculator'
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
  ClipboardList,
  Lightbulb,
  AlertTriangle,
  Flame,
  Scale,
  Activity,
  TrendingDown,
  TrendingUp,
  Equal,
  Dumbbell,
  Heart,
  Beef,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор белка для спортсменов — норма протеина онлайн',
  description:
    'Бесплатный калькулятор белка для спортсменов ✓ Норма протеина по ISSN и ACSM ✓ 4 типа тренировок ✓ Распределение по приёмам пищи ✓ Сравнение 3 формул.',
  keywords: [
    'калькулятор белка',
    'норма белка для спортсменов',
    'сколько белка в день',
    'белок для набора массы',
    'протеин для тренировок',
    'белок на кг веса',
    'ISSN белок',
  ],
  openGraph: {
    title: 'Калькулятор белка для спортсменов',
    description:
      'Рассчитайте суточную норму белка по весу, типу тренировок и цели. Рекомендации ISSN и ACSM.',
    type: 'website',
    url: '/zdorovye/sport/belok-dlya-sportsmenov',
  },
  alternates: {
    canonical: '/zdorovye/sport/belok-dlya-sportsmenov',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Спорт', href: '/zdorovye/sport' },
  {
    label: 'Белок для спортсменов',
    href: '/zdorovye/sport/belok-dlya-sportsmenov',
  },
]

export default function ProteinCalculatorPage() {
  return (
    <>
      {/* JSON-LD: WebApplication */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор белка для спортсменов',
          description:
            'Онлайн калькулятор суточной нормы белка для спортсменов по рекомендациям ISSN и ACSM. Учитывает тип тренировок и цель.',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/sport/belok-dlya-sportsmenov',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'RUB',
          },
        }}
      />

      {/* JSON-LD: FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Сколько белка нужно спортсмену в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'По рекомендациям ISSN (2017), спортсменам необходимо 1,4–2,0 г белка на кг массы тела в день. Для силовых тренировок верхняя граница может достигать 2,2 г/кг, а при снижении жировой массы — до 2,4 г/кг.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли получить весь белок из обычной еды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Куриная грудка, рыба, яйца, творог, бобовые содержат достаточно белка. Спортивное питание (протеиновые коктейли) — удобная добавка, но не обязательная. Если суточная норма превышает 150 г, может быть проще добавить 1–2 порции протеина.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько белка усваивается за один приём пищи?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Организм усваивает 25–40 г белка за один приём для стимуляции синтеза мышечного белка. Это не значит, что остальной белок пропадёт — он усвоится, но не даст дополнительного анаболического эффекта. Оптимально распределять белок на 4 приёма.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужно ли увеличивать белок при похудении?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. При дефиците калорий повышенное потребление белка (1,6–2,4 г/кг) помогает сохранить мышечную массу. Исследования показывают, что высокобелковая диета при похудении позволяет терять преимущественно жир, а не мышцы.',
              },
            },
            {
              '@type': 'Question',
              name: 'Вреден ли избыток белка для почек?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для здоровых людей потребление белка до 2,5 г/кг безопасно — это подтверждено множеством исследований. Однако при заболеваниях почек необходимо ограничивать белок и консультироваться с врачом.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой белок лучше — животный или растительный?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Животный белок (мясо, рыба, яйца, молочные продукты) содержит все незаменимые аминокислоты. Растительный белок (бобовые, соя, крупы) можно комбинировать для полного аминокислотного профиля. Для максимального эффекта рекомендуется сочетать оба источника.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда лучше принимать белок — до или после тренировки?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Важнее общее суточное потребление, чем точное время приёма. Однако порция белка (25–40 г) в течение 2 часов после тренировки оптимальна для восстановления. «Анаболическое окно» шире, чем считалось ранее — не обязательно есть сразу после зала.',
              },
            },
          ],
        }}
      />

      {/* JSON-LD: HowTo */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Как рассчитать норму белка для спортсмена',
          description:
            'Пошаговая инструкция по расчёту суточной нормы белка для тренировок.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите вес',
              text: 'Укажите свой вес в килограммах с помощью слайдера.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Выберите тип тренировок и цель',
              text: 'Выберите тип ваших тренировок (силовой, кардио, смешанный, любительский) и цель (поддержание, набор массы, снижение жира).',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите рекомендацию',
              text: 'Калькулятор покажет суточную норму белка, распределение по приёмам пищи и сравнение рекомендаций разных организаций.',
            },
          ],
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
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
              name: 'Спорт',
              item: 'https://calc-box.ru/zdorovye/sport',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Белок для спортсменов',
              item: 'https://calc-box.ru/zdorovye/sport/belok-dlya-sportsmenov',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор белка для спортсменов онлайн
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму белка по рекомендациям ISSN и ACSM.
            Мгновенный результат с учётом типа тренировок и вашей цели.
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
              <p>Укажите свой вес в килограммах с помощью слайдера.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>
                Выберите тип ваших тренировок (силовой, кардио, смешанный,
                любительский) и цель (поддержание, набор массы, снижение жира).
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Получите суточную норму белка, распределение по приёмам пищи и
                сравнение рекомендаций разных организаций.
              </p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">
            Расчёт нормы белка
          </h2>
          <ProteinCalculator />
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
              href="/zdorovye/pitanie/kalkulyator-bzhu"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Beef className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор БЖУ
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
              href="/zdorovye/sport/puls-dlya-trenirovok"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Heart className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Пульс для тренировок
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1: Зачем спортсмену белок */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Зачем спортсмену белок
            </h2>
            <p>
              Белок (протеин) — главный строительный материал для мышц. При
              физических нагрузках мышечные волокна получают микроповреждения, и
              именно белок обеспечивает их восстановление и рост. Без достаточного
              количества белка тренировки не принесут ожидаемого результата.
            </p>
            <p>
              Для обычного человека достаточно{' '}
              <strong className="text-foreground">0,8 г белка на кг</strong> массы
              тела в день — это рекомендация ВОЗ. Однако для спортсменов эта
              норма значительно выше. Международное общество спортивного питания
              (ISSN) рекомендует{' '}
              <strong className="text-foreground">1,4–2,0 г/кг</strong> для
              тренирующихся людей, а при силовых нагрузках — до{' '}
              <strong className="text-foreground">2,2 г/кг</strong>.
            </p>
            <p>
              Помимо роста мышц, белок участвует в производстве ферментов и
              гормонов, поддерживает иммунитет и помогает контролировать аппетит.
              При похудении достаточное количество белка позволяет терять жир, а
              не мышечную массу. Для точного расчёта суточного рациона используйте{' '}
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
              >
                калькулятор калорий
              </Link>
              .
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Рекомендации международных организаций */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Рекомендации международных организаций
            </h2>
            <p>
              Нормы белка для спортсменов основаны на десятилетиях исследований.
              Три ключевые организации дают следующие рекомендации:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5 border-primary/30 bg-primary/5">
                <h3 className="font-semibold text-foreground">ISSN (2017)</h3>
                <p className="text-foreground font-medium">1,4–2,0 г/кг</p>
                <p>
                  Международное общество спортивного питания. Наиболее
                  актуальные рекомендации для тренирующихся.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">ACSM (2016)</h3>
                <p className="text-foreground font-medium">1,2–2,0 г/кг</p>
                <p>
                  Американский колледж спортивной медицины. Совместная позиция
                  с AND и DC.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">RDA</h3>
                <p className="text-foreground font-medium">0,8 г/кг</p>
                <p>
                  Рекомендуемая суточная норма — минимум для поддержания
                  здоровья. Недостаточна для спортсменов.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Calculator className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
              <p>
                Наш калькулятор по умолчанию использует рекомендации ISSN как
                наиболее актуальные и адаптирует их под ваш тип тренировок и
                цель.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Как тип тренировок влияет на потребность в белке */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="h-5 w-5" />
              Как тип тренировок влияет на потребность в белке
            </h2>
            <p>
              Потребность в белке зависит от типа нагрузки. Силовые тренировки
              вызывают больше микроповреждений мышечных волокон, поэтому требуют
              больше белка для восстановления.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-red-500" />
                  Силовые тренировки
                </h3>
                <p>
                  Тренажёрный зал, пауэрлифтинг, бодибилдинг. Требуют
                  максимального потребления белка —{' '}
                  <strong className="text-foreground">1,6–2,2 г/кг</strong>.
                  Именно силовые нагрузки в сочетании с высоким белком дают
                  наибольший прирост мышечной массы.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Activity className="h-5 w-5 text-blue-500" />
                  Кардионагрузки
                </h3>
                <p>
                  Бег, плавание, велосипед. Потребность ниже —{' '}
                  <strong className="text-foreground">1,2–1,4 г/кг</strong>.
                  Белок нужен для восстановления мышц и предотвращения их распада
                  при длительных тренировках.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Target className="h-5 w-5 text-orange-500" />
                  Смешанные тренировки
                </h3>
                <p>
                  Кроссфит, единоборства, функциональный тренинг. Потребность
                  средняя —{' '}
                  <strong className="text-foreground">1,4–1,7 г/кг</strong>.
                  Сочетание силовой и аэробной нагрузки требует сбалансированного
                  подхода к питанию.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Белок и цели тренировок */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="h-5 w-5" />
              Белок и цели тренировок
            </h2>
            <p>
              Цель тренировок напрямую влияет на потребность в белке. При
              наборе массы белок является строительным материалом, при похудении —
              защитой от потери мышц.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Equal className="h-5 w-5 text-green-500" />
                  Поддержание формы
                </h3>
                <p>
                  Базовый уровень белка для сохранения текущей мышечной массы.
                  Достаточно нижней границы рекомендуемого диапазона.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Набор мышечной массы
                </h3>
                <p>
                  Для гипертрофии необходим профицит калорий и повышенный белок.
                  Без профицита калорий набор массы невозможен даже при высоком
                  белке.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  Снижение жировой массы
                </h3>
                <p>
                  При{' '}
                  <Link
                    href="/zdorovye/pitanie/defitsit-kalorij"
                    className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                  >
                    дефиците калорий
                  </Link>{' '}
                  белок критически важен — он предотвращает потерю мышц.
                  Рекомендуется верхняя граница диапазона.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Таблица нормы белка */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Таблица нормы белка по весу и типу тренировок
            </h2>
            <p>
              Ориентировочные значения суточной нормы белка (в граммах) для
              поддержания мышечной массы:
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="min-w-[400px] w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">
                      Вес
                    </th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">
                      <span className="sm:hidden">Любит.</span>
                      <span className="hidden sm:inline">Любительский</span>
                    </th>
                    <th className="py-2 px-2 font-semibold text-foreground">
                      Кардио
                    </th>
                    <th className="py-2 px-2 font-semibold text-foreground">
                      Микс
                    </th>
                    <th className="py-2 pl-2 font-semibold text-foreground">
                      Сила
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">55 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">55–66</td>
                    <td className="py-2 px-2 whitespace-nowrap">66–77</td>
                    <td className="py-2 px-2 whitespace-nowrap">77–94</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">88–110</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">65 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">65–78</td>
                    <td className="py-2 px-2 whitespace-nowrap">78–91</td>
                    <td className="py-2 px-2 whitespace-nowrap">91–111</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">104–130</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">75 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">75–90</td>
                    <td className="py-2 px-2 whitespace-nowrap">90–105</td>
                    <td className="py-2 px-2 whitespace-nowrap">105–128</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">120–150</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">85 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">85–102</td>
                    <td className="py-2 px-2 whitespace-nowrap">102–119</td>
                    <td className="py-2 px-2 whitespace-nowrap">119–145</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">136–170</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">95 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">95–114</td>
                    <td className="py-2 px-2 whitespace-nowrap">114–133</td>
                    <td className="py-2 px-2 whitespace-nowrap">133–162</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">152–190</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">
                      <strong className="text-foreground whitespace-nowrap">105 кг</strong>
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap">105–126</td>
                    <td className="py-2 px-2 whitespace-nowrap">126–147</td>
                    <td className="py-2 px-2 whitespace-nowrap">147–179</td>
                    <td className="py-2 pl-2 whitespace-nowrap">
                      <strong className="text-foreground">168–210</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a
                href="#calculator"
                className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"
              >
                Рассчитать свою норму белка&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Лучшие источники белка */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Beef className="h-5 w-5" />
              Лучшие источники белка для спортсменов
            </h2>
            <p>
              Для максимального эффекта важен не только объём белка, но и его
              качество. Полноценные источники содержат все{' '}
              <strong className="text-foreground">9 незаменимых аминокислот</strong>,
              необходимых для синтеза мышечного белка.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Животные источники
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>
                    <strong className="text-foreground">Куриная грудка</strong> —
                    31 г белка на 100 г
                  </li>
                  <li>
                    <strong className="text-foreground">Тунец</strong> — 30 г
                    белка на 100 г
                  </li>
                  <li>
                    <strong className="text-foreground">Яйца</strong> — 13 г
                    белка на 100 г (2 яйца)
                  </li>
                  <li>
                    <strong className="text-foreground">Творог 5%</strong> — 18 г
                    белка на 100 г
                  </li>
                  <li>
                    <strong className="text-foreground">Говядина</strong> — 26 г
                    белка на 100 г
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Растительные источники
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>
                    <strong className="text-foreground">Чечевица</strong> — 24 г
                    белка на 100 г (сухая)
                  </li>
                  <li>
                    <strong className="text-foreground">Нут</strong> — 20 г
                    белка на 100 г (сухой)
                  </li>
                  <li>
                    <strong className="text-foreground">Тофу</strong> — 15 г
                    белка на 100 г
                  </li>
                  <li>
                    <strong className="text-foreground">Киноа</strong> — 14 г
                    белка на 100 г (сухая)
                  </li>
                  <li>
                    <strong className="text-foreground">Арахис</strong> — 26 г
                    белка на 100 г
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Beef className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" />
              <p>
                Для набора <strong className="text-foreground">150 г белка</strong> в
                день: 200 г куриной грудки (62 г) + 200 г творога (36 г) + 3 яйца
                (20 г) + порция протеина (25 г) + гарнир и перекусы (~10 г).
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Мужчина, 80 кг, силовые
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>
                    Цель: набор массы
                  </li>
                  <li>
                    Норма (ISSN):{' '}
                    <strong className="text-foreground">1,8–2,2 г/кг</strong>
                  </li>
                  <li>
                    В день:{' '}
                    <strong className="text-foreground">144–176 г</strong> белка
                  </li>
                  <li>
                    На приём (×4):{' '}
                    <strong className="text-foreground">36–44 г</strong>
                  </li>
                  <li>
                    Это 500 г курицы + 200 г творога + протеин
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Женщина, 60 кг, кардио
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>
                    Цель: снижение жира
                  </li>
                  <li>
                    Норма (ISSN):{' '}
                    <strong className="text-foreground">1,4–1,8 г/кг</strong>
                  </li>
                  <li>
                    В день:{' '}
                    <strong className="text-foreground">84–108 г</strong> белка
                  </li>
                  <li>
                    На приём (×4):{' '}
                    <strong className="text-foreground">21–27 г</strong>
                  </li>
                  <li>
                    Это 300 г рыбы + 150 г творога + 2 яйца
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm">
              <a
                href="#calculator"
                className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"
              >
                Рассчитать свою норму&nbsp;→
              </a>
            </p>
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
                  <p className="text-foreground font-medium">
                    Распределяйте белок равномерно
                  </p>
                  <p>
                    4 приёма по 25–40 г белка эффективнее, чем 2 приёма по 60–80 г.
                    Это оптимизирует синтез мышечного белка в течение дня.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Белок перед сном
                  </p>
                  <p>
                    Порция казеина или творога перед сном поддерживает синтез
                    белка ночью. Исследования показывают, что{' '}
                    <strong className="text-foreground">30–40 г</strong> казеина
                    перед сном улучшают восстановление.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Считайте общие калории
                  </p>
                  <p>
                    Белок важен, но без правильного баланса калорий результат не
                    будет оптимальным. Рассчитайте свой{' '}
                    <Link
                      href="/zdorovye/telo/bazovyj-metabolizm"
                      className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                    >
                      базовый метаболизм
                    </Link>{' '}
                    и общую потребность в{' '}
                    <Link
                      href="/zdorovye/pitanie/kalkulyator-bzhu"
                      className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                    >
                      БЖУ
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Лейцин — ключевая аминокислота
                  </p>
                  <p>
                    Для запуска синтеза мышечного белка нужно{' '}
                    <strong className="text-foreground">2–3 г лейцина</strong> за
                    приём. Это примерно 25 г сывороточного протеина или 170 г
                    куриной грудки.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">
                    Пейте достаточно воды
                  </p>
                  <p>
                    Высокобелковая диета увеличивает нагрузку на почки. Пейте
                    минимум <strong className="text-foreground">2–3 литра</strong>{' '}
                    воды в день, особенно при потреблении более 2 г белка на кг.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                При заболеваниях почек, печени или подагре проконсультируйтесь с
                врачом перед увеличением белка в рационе. Потребление выше{' '}
                <strong className="text-foreground">2,5 г/кг</strong> не имеет
                доказанных преимуществ для роста мышц.
              </p>
            </div>
            <p className="text-sm">
              <a
                href="#calculator"
                className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"
              >
                Рассчитать свою норму белка&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9: FAQ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <CircleHelp className="h-5 w-5" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько белка нужно спортсмену в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  По рекомендациям ISSN (2017), спортсменам необходимо{' '}
                  <strong className="text-foreground">1,4–2,0 г</strong> белка на
                  кг массы тела в день. Для силовых тренировок верхняя граница
                  может достигать{' '}
                  <strong className="text-foreground">2,2 г/кг</strong>, а при
                  снижении жировой массы — до{' '}
                  <strong className="text-foreground">2,4 г/кг</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли получить весь белок из обычной еды?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Куриная грудка, рыба, яйца, творог, бобовые содержат
                  достаточно белка. Спортивное питание — удобная добавка, но не
                  обязательная. Если суточная норма превышает{' '}
                  <strong className="text-foreground">150 г</strong>, может быть
                  проще добавить 1–2 порции протеинового коктейля.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько белка усваивается за один приём пищи?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Организм усваивает{' '}
                  <strong className="text-foreground">25–40 г</strong> белка за
                  один приём для стимуляции синтеза мышечного белка. Остальной
                  белок усвоится, но не даст дополнительного анаболического
                  эффекта. Оптимально распределять белок на{' '}
                  <strong className="text-foreground">4 приёма</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужно ли увеличивать белок при похудении?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. При дефиците калорий повышенное потребление белка (
                  <strong className="text-foreground">1,6–2,4 г/кг</strong>)
                  помогает сохранить мышечную массу. Высокобелковая диета при
                  похудении позволяет терять преимущественно жир, а не мышцы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Вреден ли избыток белка для почек?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для здоровых людей потребление белка до{' '}
                  <strong className="text-foreground">2,5 г/кг</strong> безопасно
                  — это подтверждено множеством исследований. Однако при
                  заболеваниях почек необходимо ограничивать белок и
                  консультироваться с врачом.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой белок лучше — животный или растительный?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Животный белок содержит все незаменимые аминокислоты.
                  Растительный можно комбинировать для полного аминокислотного
                  профиля. Для максимального эффекта рекомендуется сочетать оба
                  источника. Лучшие животные источники: курица, рыба, яйца,
                  творог.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда лучше принимать белок — до или после тренировки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Важнее общее суточное потребление, чем точное время приёма.
                  Однако порция белка (
                  <strong className="text-foreground">25–40 г</strong>) в течение{' '}
                  <strong className="text-foreground">2 часов</strong> после
                  тренировки оптимальна для восстановления. «Анаболическое окно»
                  шире, чем считалось ранее.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Блок 10: Связанные калькуляторы */}
          <nav
            className="space-y-3"
            aria-label="Связанные калькуляторы"
          >
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
                href="/zdorovye/pitanie/kalkulyator-bzhu"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Beef className="h-4 w-4 text-muted-foreground" />
                Калькулятор БЖУ
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="h-4 w-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="h-4 w-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/sport/puls-dlya-trenirovok"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Heart className="h-4 w-4 text-muted-foreground" />
                Пульс для тренировок
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
