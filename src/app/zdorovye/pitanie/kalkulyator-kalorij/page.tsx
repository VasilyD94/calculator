import type { Metadata } from 'next'
import Link from 'next/link'
import { CalorieCalculator } from '@/components/calculators/CalorieCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  AlertTriangle,
  Lightbulb,
  Beef,
  Droplets,
  Wheat,
  Scale,
  PieChart,
  TrendingDown,
  Activity,
  GlassWater,
  Target,
  BookOpen,
  Compass,
  Info,
  Calculator,
  Flame,
  Puzzle,
  Users,
  ClipboardList,
  CircleHelp,
  ArrowUpRight,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Калькулятор калорий онлайн — расчёт суточной нормы бесплатно',
  description:
    'Бесплатный калькулятор калорий онлайн ✓ Расчёт суточной нормы по 5 формулам ✓ Сравнение результатов ✓ Калории для похудения и набора массы ✓ Расчёт БЖУ.',
  keywords: [
    'калькулятор калорий',
    'расчёт калорий',
    'суточная норма калорий',
    'сколько калорий в день',
    'калории для похудения',
    'калории для набора массы',
    'формула Миффлина',
    'TDEE калькулятор',
  ],
  openGraph: {
    title: 'Калькулятор калорий онлайн — расчёт суточной нормы',
    description:
      'Рассчитайте суточную норму калорий по 5 научным формулам. Мгновенный результат без регистрации.',
    type: 'website',
    url: '/zdorovye/pitanie/kalkulyator-kalorij',
  },
  alternates: {
    canonical: '/zdorovye/pitanie/kalkulyator-kalorij',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij' },
]

export default function CalorieCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор калорий онлайн',
          description: 'Онлайн калькулятор суточной нормы калорий по 5 научным формулам',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/pitanie/kalkulyator-kalorij',
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
              name: 'Какая формула расчёта калорий самая точная?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формула Миффлина-Сан Жеора считается наиболее точной для большинства людей. Если вы знаете свой процент жира, формула Кетча-МакАрдла может дать более точный результат.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужно ли считать калории каждый день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На начальном этапе рекомендуется считать калории 2–4 недели, чтобы выработать понимание размеров порций. После этого многие переходят на интуитивное питание.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему разные формулы дают разные результаты?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Каждая формула разработана на основе разных исследований. Разница обычно составляет 100–200 ккал. Ориентируйтесь на формулу Миффлина-Сан Жеора и корректируйте калорийность по результатам через 2–3 недели.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько калорий нужно женщине в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В среднем женщинам при умеренной активности требуется от 1 800 до 2 200 ккал в день. Точное значение зависит от возраста, роста, веса и образа жизни.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько калорий нужно мужчине в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Мужчинам при умеренной активности требуется от 2 200 до 2 800 ккал в день. При высокой физической нагрузке норма может достигать 3 000–3 500 ккал.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что лучше: считать калории или БЖУ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Калории определяют, будете вы худеть или набирать вес. БЖУ определяет качество — сохраните ли вы мышцы или потеряете их. В идеале нужно контролировать и то, и другое, но для начала достаточно калорий.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто пересчитывать норму калорий?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Пересчитывайте при изменении веса на 5 кг и более, при смене уровня активности или при отсутствии прогресса в течение 3–4 недель.',
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
          name: 'Как рассчитать суточную норму калорий',
          description:
            'Пошаговая инструкция по использованию онлайн-калькулятора калорий для расчёта BMR и TDEE.',
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
              name: 'Получите результат',
              text: 'Результат появится мгновенно — калькулятор покажет BMR и TDEE по 5 формулам.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Настройте цель',
              text: 'Передвигайте ползунок желаемого веса — калькулятор автоматически определит цель и покажет рекомендации по калорийности и БЖУ.',
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
              name: 'Калькулятор калорий',
              item: 'https://calc-box.ru/zdorovye/pitanie/kalkulyator-kalorij',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Калькулятор калорий онлайн
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте суточную норму калорий по 5 научным формулам.
            Результат обновляется мгновенно при изменении параметров.
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
                Результат появится мгновенно — без нажатия кнопки.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Передвигайте ползунок желаемого веса — калькулятор
                автоматически определит цель и покажет рекомендации по
                калорийности и БЖУ.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт суточной нормы калорий</h2>
          <CalorieCalculator />
        </section>

        {/* Вам будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/pitanie/kalkulyator-bzhu"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <PieChart className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор БЖУ</span>
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
              href="/zdorovye/pitanie/norma-vody"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <GlassWater className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Норма воды</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое калории и зачем их считать
            </h2>
            <p>
              Калория — это единица измерения энергии, которую организм получает
              из пищи. Каждый продукт содержит определённое количество калорий:
              белки и углеводы дают по <strong className="text-foreground">4</strong> ккал на грамм, жиры — <strong className="text-foreground">9</strong> ккал.
            </p>
            <p>
              Знание своей суточной нормы калорий помогает контролировать вес.
              Принцип прост: если вы потребляете больше энергии, чем
              тратите — вес растёт. Если меньше — снижается. Если столько
              же — остаётся стабильным. Это называется{' '}
              <strong className="text-foreground">энергетический баланс</strong>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Какие формулы использует калькулятор
            </h2>
            <p>
              Наш калькулятор рассчитывает норму калорий по <strong className="text-foreground">5</strong> научно
              обоснованным формулам и показывает результат каждой, чтобы вы
              могли сравнить:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Миффлина-Сан Жеора (1990)</strong>{' '}
                — считается наиболее точной для современных людей. Рекомендована
                Американской диетической ассоциацией.
              </li>
              <li>
                <strong className="text-foreground">Харриса-Бенедикта (1919)</strong>{' '}
                — одна из первых научных формул расчёта метаболизма. Пересмотрена
                в <strong className="text-foreground">1984</strong> году с уточнёнными коэффициентами.
              </li>
              <li>
                <strong className="text-foreground">Кетча-МакАрдла</strong>{' '}
                — единственная формула, учитывающая процент жира в организме.
                Даёт более точный результат для спортсменов.
              </li>
              <li>
                <strong className="text-foreground">ВОЗ</strong> — формула
                Всемирной организации здравоохранения, учитывающая возрастные
                группы.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Flame className="size-5" />
              Что такое BMR и TDEE
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  BMR — базовый метаболизм
                </h3>
                <p>
                  Количество калорий, которое организм тратит в состоянии
                  полного покоя: дыхание, кровообращение, работа мозга
                  и внутренних органов.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  TDEE — суточный расход
                </h3>
                <p>
                  BMR с учётом физической активности. Именно TDEE является
                  вашей реальной нормой калорий — от него отталкиваются при
                  составлении рациона.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="size-5" />
              Калории для похудения и набора массы
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Для похудения
                </h3>
                <p>
                  Создайте <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">дефицит</Link> <strong className="text-foreground">300–500</strong> ккал от суточной нормы. Это позволит
                  терять <strong className="text-foreground">0,5–1</strong> кг в неделю без вреда для здоровья.
                </p>
                <div className="flex gap-2 items-start">
                  <AlertTriangle className="size-5 shrink-0 text-amber-400" />
                  <p>
                    Не опускайтесь ниже{' '}
                    <strong className="text-foreground">1200</strong> ккал для женщин и{' '}
                    <strong className="text-foreground">1500</strong> ккал для мужчин без наблюдения врача.
                  </p>
                </div>
              </div>
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Для набора массы
                </h3>
                <p>
                  Оптимальный профицит — <strong className="text-foreground">300–500</strong> ккал в день. При таком подходе
                  вы набираете преимущественно мышечную массу, а не жир.
                </p>
                <div className="flex gap-2 items-start">
                  <Lightbulb className="size-5 shrink-0 text-blue-400" />
                  <p>
                    Рекомендуется{' '}
                    <strong className="text-foreground">1,6–2</strong> г белка на кг веса в день для
                    оптимального роста мышц.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму →
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Роль белков, жиров и углеводов
            </h2>
            <p>
              Помимо общей калорийности, важно соотношение
              макронутриентов — <Link href="/zdorovye/pitanie/kalkulyator-bzhu" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">БЖУ</Link>:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Beef className="size-5 text-rose-300" />
                  Белки
                </h3>
                <p>
                  Строительный материал для мышц, иммунной системы и гормонов.
                  При похудении помогают сохранить мышечную массу.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Droplets className="size-5 text-amber-300" />
                  Жиры
                </h3>
                <p>
                  Необходимы для усвоения витаминов, выработки гормонов
                  и работы нервной системы. Минимум — <strong className="text-foreground">0,8</strong> г на кг веса.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Wheat className="size-5 text-orange-300" />
                  Углеводы
                </h3>
                <p>
                  Основной источник энергии для мозга и мышц. Предпочтительны
                  сложные: крупы, овощи, цельнозерновые продукты.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Норма калорий по возрасту и полу */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Users className="size-5" />
              Суточная норма калорий по возрасту и полу
            </h2>
            <p>
              Потребность в калориях зависит от пола, возраста и уровня
              активности. В таблице ниже приведены средние значения TDEE при
              умеренной активности (<strong className="text-foreground">3–5</strong> тренировок в неделю):
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Возраст</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Муж., ккал</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Жен., ккал</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">18–25</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2400–2800</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2000–2200</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">26–35</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2300–2700</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1900–2100</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">36–50</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2200–2600</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1800–2000</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">51–65</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2000–2400</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1600–1800</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">65+</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1800–2200</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1500–1700</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Таблица показывает средние значения. Точную норму для вашего веса
              и роста рассчитает{' '}
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                калькулятор выше&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Уровень активности */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Activity className="size-5" />
              Как уровень активности влияет на норму калорий
            </h2>
            <p>
              Физическая активность — главный фактор, определяющий разницу между{' '}
              <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">базовым метаболизмом</Link> и реальным расходом калорий. Один и тот же
              человек при сидячей работе и при ежедневных тренировках будет тратить
              на <strong className="text-foreground">40–60%</strong> больше энергии.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Минимальная <span className="font-normal text-xs text-muted-foreground">коэфф. 1,2</span></p>
                  <p>Сидячая работа, нет тренировок. Организм тратит калории только на базовые процессы и бытовую активность.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Лёгкая <span className="font-normal text-xs text-muted-foreground">коэфф. 1,375</span></p>
                  <p><strong className="text-foreground">1–2</strong> тренировки в неделю или активные прогулки. Подходит для офисных работников, которые занимаются спортом в выходные.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Средняя <span className="font-normal text-xs text-muted-foreground">коэфф. 1,55</span></p>
                  <p><strong className="text-foreground">3–5</strong> тренировок в неделю. Самый распространённый уровень для людей, регулярно занимающихся фитнесом.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Высокая <span className="font-normal text-xs text-muted-foreground">коэфф. 1,725</span></p>
                  <p><strong className="text-foreground">6–7</strong> тренировок в неделю или физически активная работа. Требует значительно больше калорий для восстановления.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Экстра <span className="font-normal text-xs text-muted-foreground">коэфф. 1,9</span></p>
                  <p>Профессиональный спорт, тяжёлый физический труд или двойные тренировки. Расход калорий почти вдвое выше базового метаболизма.</p>
                </div>
              </div>
            </div>
            <p>
              Если вы не уверены в своём уровне, начните со <strong className="text-foreground">«Средней»</strong> активности
              и корректируйте через <strong className="text-foreground">2–3</strong> недели по динамике веса.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта калорий
            </h2>
            <p>
              Рассмотрим два конкретных примера расчёта по формуле Миффлина-Сан
              Жеора, чтобы показать, как работает калькулятор:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Женщина, 30 лет
                </h3>
                <p>
                  Рост <strong className="text-foreground">165</strong> см, вес <strong className="text-foreground">62</strong> кг, средняя активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>BMR = 10 × 62 + 6,25 × 165 − 5 × 30 − 161 = <strong className="text-foreground">1 341</strong> ккал</li>
                  <li>TDEE = 1 341 × 1,55 = <strong className="text-foreground">2 079</strong> ккал</li>
                  <li>Для похудения: <strong className="text-foreground">~1 750</strong> ккал/день</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Мужчина, 25 лет
                </h3>
                <p>
                  Рост <strong className="text-foreground">180</strong> см, вес <strong className="text-foreground">82</strong> кг, высокая активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>BMR = 10 × 82 + 6,25 × 180 − 5 × 25 + 5 = <strong className="text-foreground">1 830</strong> ккал</li>
                  <li>TDEE = 1 830 × 1,725 = <strong className="text-foreground">3 157</strong> ккал</li>
                  <li>Для набора массы: <strong className="text-foreground">~3 500</strong> ккал/день</li>
                </ul>
              </div>
            </div>
            <p>
              Обратите внимание: разница между мужчиной и женщиной составляет более
              <strong className="text-foreground"> 1 000</strong> ккал — пол, вес и активность имеют определяющее
              значение.
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму →
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 10: Советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Советы по подсчёту калорий для начинающих
            </h2>
            <p>
              Подсчёт калорий не должен становиться навязчивой привычкой. Вот
              несколько практических рекомендаций, которые помогут начать:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">1</span>
                <div>
                  <p className="text-foreground font-medium">Взвешивайте продукты</p>
                  <p>На начальном этапе используйте кухонные весы. Порции «на глаз» могут отличаться от реальных на <strong className="text-foreground">30–50%</strong>.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">2</span>
                <div>
                  <p className="text-foreground font-medium">Записывайте всё</p>
                  <p>Перекусы, напитки с сахаром, соусы. Часто именно «невидимые» калории мешают прогрессу.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">3</span>
                <div>
                  <p className="text-foreground font-medium">Не стремитесь к идеалу</p>
                  <p>Отклонение на <strong className="text-foreground">100–200</strong> ккал от нормы не критично. Важна средняя калорийность за неделю, а не каждый отдельный день.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">4</span>
                <div>
                  <p className="text-foreground font-medium">Пересчитывайте норму</p>
                  <p>При изменении веса на <strong className="text-foreground">5</strong> кг рекомендуется заново рассчитать суточную норму, так как потребности организма меняются.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">5</span>
                <div>
                  <p className="text-foreground font-medium">Следите за самочувствием</p>
                  <p>Хроническая усталость, выпадение волос или нарушение сна могут говорить о слишком сильном дефиците. В этом случае увеличьте калорийность.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>
                Калькулятор даёт ориентировочные значения. При наличии заболеваний
                обмена веществ, диабета или расстройств пищевого поведения
                проконсультируйтесь с врачом.
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
                  Какая формула расчёта калорий самая точная?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формула Миффлина-Сан Жеора считается наиболее точной для
                  большинства людей. Если вы знаете свой процент жира, формула
                  Кетча-МакАрдла может дать более точный результат.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужно ли считать калории каждый день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  На начальном этапе рекомендуется считать калории <strong className="text-foreground">2–4</strong> недели,
                  чтобы выработать понимание размеров порций. После этого
                  многие переходят на интуитивное питание.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему разные формулы дают разные результаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Каждая формула разработана на основе разных исследований.
                  Разница обычно составляет <strong className="text-foreground">100–200</strong> ккал. Ориентируйтесь на
                  формулу Миффлина-Сан Жеора и корректируйте калорийность по
                  результатам через <strong className="text-foreground">2–3</strong> недели.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько калорий нужно женщине в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В среднем женщинам при умеренной активности требуется
                  от <strong className="text-foreground">1 800</strong> до <strong className="text-foreground">2 200</strong> ккал в день. Точное
                  значение зависит от возраста, роста, веса и образа жизни —
                  используйте калькулятор выше для персонального расчёта.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько калорий нужно мужчине в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мужчинам при умеренной активности требуется
                  от <strong className="text-foreground">2 200</strong> до <strong className="text-foreground">2 800</strong> ккал в день.
                  При высокой физической нагрузке норма может
                  достигать <strong className="text-foreground">3 000–3 500</strong> ккал.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что лучше: считать калории или БЖУ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Калории определяют, будете вы худеть или набирать вес. БЖУ
                  определяет качество набора или похудения — сохраните ли вы
                  мышцы или потеряете их. В идеале нужно контролировать и то,
                  и другое, но для начала достаточно калорий.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто пересчитывать норму калорий?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пересчитывайте при изменении веса
                  на <strong className="text-foreground">5</strong> кг и более, при смене уровня активности
                  или при отсутствии прогресса в течение <strong className="text-foreground">3–4</strong> недель.
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
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-bzhu"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <PieChart className="size-4 text-muted-foreground" />
                Калькулятор БЖУ
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="size-4 text-muted-foreground" />
                Дефицит калорий
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
