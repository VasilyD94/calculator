import type { Metadata } from 'next'
import Link from 'next/link'
import { DeficitCalculator } from '@/components/calculators/DeficitCalculator'
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
  Activity,
  Target,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Compass,
  Info,
  Calculator,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  ClipboardList,
  CircleHelp,
  ArrowUpRight,
  Beef,
  GlassWater,
  Weight,
  Dumbbell,
  Moon,
  Droplets,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор дефицита калорий — план похудения онлайн',
  description:
    'Бесплатный калькулятор дефицита калорий ✓ График снижения веса ✓ Сравнение сценариев похудения ✓ Оценка безопасности ✓ Расчёт БЖУ при дефиците. Без регистрации.',
  keywords: [
    'дефицит калорий',
    'калькулятор дефицита',
    'калории для похудения',
    'расчёт дефицита калорий',
    'план похудения',
    'безопасное похудение',
    'сколько калорий для похудения',
    'темп похудения',
  ],
  openGraph: {
    title: 'Калькулятор дефицита калорий — план похудения',
    description:
      'Рассчитайте безопасный дефицит калорий с графиком прогресса и сравнением сценариев.',
    type: 'website',
    url: '/zdorovye/pitanie/defitsit-kalorij',
  },
  alternates: {
    canonical: '/zdorovye/pitanie/defitsit-kalorij',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Дефицит калорий', href: '/zdorovye/pitanie/defitsit-kalorij' },
]

export default function DeficitCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор дефицита калорий',
          description:
            'Онлайн калькулятор дефицита калорий с графиком прогресса и оценкой безопасности',
          applicationCategory: 'HealthApplication',
          url: 'https://calcbox.ru/zdorovye/pitanie/defitsit-kalorij',
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
              name: 'Какой дефицит калорий безопасен для похудения?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Безопасным считается дефицит 300–500 ккал в день, что позволяет терять 0,3–0,5 кг в неделю. Дефицит более 700 ккал повышает риск потери мышц и замедления метаболизма.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как быстро можно похудеть без вреда для здоровья?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Безопасный темп похудения — 0,5–1 кг в неделю. Более быстрое снижение веса приводит к потере мышечной массы, замедлению метаболизма и повышенному риску срывов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему вес перестал снижаться на диете?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Плато в похудении — нормальное явление. Причины: адаптация метаболизма, задержка воды, увеличение мышечной массы. Решение: пересчитайте норму по текущему весу, сделайте перерыв на 1–2 недели, добавьте физическую активность.',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько калорий в 1 кг жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'В 1 кг жировой ткани содержится примерно 7700 ккал. Это означает, что для потери 1 кг жира нужен суммарный дефицит 7700 ккал. При дефиците 500 ккал в день это займёт около 15 дней.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужно ли считать калории каждый день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На начальном этапе рекомендуется считать 2–4 недели, чтобы понять размеры порций и калорийность привычных продуктов. Затем можно перейти на интуитивное питание, периодически проверяя себя.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли похудеть без дефицита калорий?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Нет, дефицит калорий — единственный научно доказанный механизм снижения жировой массы. Любая диета, которая приводит к похудению, создаёт дефицит калорий тем или иным способом.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто нужно пересчитывать дефицит?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Пересчитывайте при изменении веса на 5 кг и более, при смене уровня физической активности, при достижении плато (отсутствие прогресса более 2–3 недель) или при смене цели.',
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
          name: 'Как рассчитать дефицит калорий для похудения',
          description:
            'Пошаговая инструкция по расчёту безопасного дефицита калорий.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры тела',
              text: 'Введите пол, возраст, рост, вес и уровень физической активности.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Установите целевой вес и дефицит',
              text: 'Передвиньте ползунок целевого веса и настройте размер дефицита калорий.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Изучите результаты',
              text: 'Посмотрите график снижения веса, сравните сценарии похудения и оценку безопасности.',
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
              item: 'https://calcbox.ru',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Питание',
              item: 'https://calcbox.ru/zdorovye/pitanie',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Дефицит калорий',
              item: 'https://calcbox.ru/zdorovye/pitanie/defitsit-kalorij',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор дефицита калорий
          </h1>
          <p className="text-lg text-muted-foreground">
            Спланируйте похудение: настройте дефицит калорий, посмотрите
            график снижения веса и сравните сценарии. Оценка безопасности
            в реальном времени.
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
              <p>
                Введите пол, возраст, рост, вес и уровень физической
                активности.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>
                Передвиньте ползунок целевого веса и настройте размер
                дефицита калорий.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>
                Посмотрите график снижения веса, сравните сценарии похудения
                и оценку безопасности.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт дефицита калорий</h2>
          <DeficitCalculator />
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
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор калорий</span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-bzhu"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Beef className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор БЖУ</span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Калькулятор ИМТ</span>
            </Link>
            <Link
              href="/zdorovye/telo/idealnyj-ves"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Target className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Идеальный вес</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1: Что такое дефицит калорий */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что такое дефицит калорий и зачем он нужен
            </h2>
            <p>
              Дефицит калорий — это разница между суточной нормой энергии
              (TDEE) и количеством потребляемых калорий. Когда вы съедаете
              меньше, чем тратите, организм начинает использовать жировые
              запасы для покрытия недостающей энергии. Это{' '}
              <strong className="text-foreground">единственный научно доказанный
              механизм</strong> снижения веса.
            </p>
            <p>
              Например, если ваша{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                суточная норма калорий
              </Link>{' '}
              составляет <strong className="text-foreground">2200</strong> ккал,
              а вы потребляете <strong className="text-foreground">1700</strong> ккал,
              дефицит составляет <strong className="text-foreground">500</strong> ккал.
              За неделю суммарный дефицит — <strong className="text-foreground">3500</strong> ккал,
              что эквивалентно примерно <strong className="text-foreground">0,45</strong> кг
              жира (в 1 кг жировой ткани ~7700 ккал).
            </p>
            <p>
              Любая диета, которая приводит к потере веса, так или иначе
              создаёт дефицит калорий — будь то кето, интервальное голодание
              или просто уменьшение порций. Разница лишь в способе создания
              этого дефицита.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Какой дефицит безопасен */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Какой дефицит считается безопасным
            </h2>
            <p>
              Размер дефицита определяет скорость похудения и его
              безопасность. Слишком большой дефицит ведёт к потере мышц
              и замедлению метаболизма. Слишком маленький — к отсутствию
              видимого прогресса и потере мотивации.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  200–400 ккал
                </h3>
                <p>
                  <strong className="text-foreground">Лёгкий дефицит.</strong>
                  <br className="sm:hidden" />
                  {' '}Потеря <strong className="text-foreground">0,2–0,4</strong> кг
                  в неделю. Минимальный риск потери мышц. Легко придерживаться
                  длительное время.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  400–700 ккал
                </h3>
                <p>
                  <strong className="text-foreground">Умеренный дефицит.</strong>
                  <br className="sm:hidden" />
                  {' '}Потеря <strong className="text-foreground">0,4–0,7</strong> кг
                  в неделю. Требует дисциплины. Рекомендуется увеличить белок
                  до <strong className="text-foreground">1,6</strong> г/кг.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  700+ ккал
                </h3>
                <p>
                  <strong className="text-foreground">Агрессивный дефицит.</strong>
                  <br className="sm:hidden" />
                  {' '}Быстрая потеря веса, но высокий риск
                  потери мышц, замедления метаболизма и срывов.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой безопасный дефицит&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Как работает калькулятор */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Как работает калькулятор дефицита
            </h2>
            <p>
              Калькулятор определяет вашу суточную норму калорий (TDEE) по
              формуле Миффлина-Сан Жеора с учётом пола, возраста, роста, веса
              и уровня активности. Затем рассчитывает параметры похудения
              на основе выбранного дефицита:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Расчёт TDEE</p>
                  <p>
                    Базовый метаболизм (BMR) умножается на коэффициент
                    активности. Это ваша суточная норма для поддержания веса.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Вычитание дефицита</p>
                  <p>
                    Из TDEE вычитается выбранный дефицит. Например:
                    TDEE <strong className="text-foreground">2200</strong> − дефицит{' '}
                    <strong className="text-foreground">500</strong> = <strong className="text-foreground">1700</strong> ккал/день.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Прогноз и сценарии</p>
                  <p>
                    Калькулятор строит график снижения веса по неделям,
                    сравнивает <strong className="text-foreground">3 сценария</strong> (лёгкий,
                    умеренный, агрессивный) и оценивает безопасность.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Ошибки и правила */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Ошибки и правила при дефиците калорий
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Распространённые ошибки
                </h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary">
                  <li>Слишком большой дефицит (более <strong className="text-foreground">1000</strong> ккал)</li>
                  <li>Недостаток белка — потеря мышц вместо жира</li>
                  <li>Полный отказ от жиров — гормональные сбои</li>
                  <li>Отсутствие перерывов — замедление метаболизма</li>
                  <li>Игнорирование силовых тренировок</li>
                </ul>
                <div className="flex gap-2 items-start">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
                  <p>
                    Калорийность ниже <strong className="text-foreground">1200</strong> ккал
                    для женщин и <strong className="text-foreground">1500</strong> ккал
                    для мужчин опасна без контроля врача.
                  </p>
                </div>
              </div>
              <div className="space-y-3 rounded-lg border p-4">
                <h3 className="font-semibold text-foreground">
                  Правила безопасного похудения
                </h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary">
                  <li>Дефицит не более <strong className="text-foreground">500</strong> ккал для начинающих</li>
                  <li>Белок <strong className="text-foreground">1,6–2</strong> г на кг для сохранения мышц</li>
                  <li>Минимум <strong className="text-foreground">0,8</strong> г жиров на кг для гормонов</li>
                  <li>Перерыв на 1–2 недели каждые 8–12 недель</li>
                  <li>Силовые тренировки 2–3 раза в неделю</li>
                </ul>
                <div className="flex gap-2 items-start">
                  <Lightbulb className="h-5 w-5 shrink-0 text-blue-400" />
                  <p>
                    Используйте{' '}
                    <Link href="/zdorovye/pitanie/kalkulyator-bzhu" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      калькулятор БЖУ
                    </Link>{' '}
                    для точного расчёта белков и жиров при дефиците.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Таблица — TDEE и дефицит */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Примеры дефицита для разных людей
            </h2>
            <p>
              TDEE сильно зависит от пола, веса и активности. Одинаковый
              дефицит в абсолютных цифрах может быть безопасным для одного
              человека и агрессивным для другого. Ориентируйтесь
              на <strong className="text-foreground">процент от TDEE</strong>:
              безопасный дефицит — <strong className="text-foreground">10–20%</strong>.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Профиль</th>
                    <th className="py-2 px-2 font-semibold text-foreground">TDEE</th>
                    <th className="py-2 px-2 font-semibold text-foreground">−15%</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">−25%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Ж, 60 кг, низкая</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1700</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1445</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1275</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">Ж, 75 кг, средняя</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2100</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1785</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1575</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">М, 80 кг, низкая</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2200</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1870</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1650</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">М, 90 кг, средняя</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2700</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2295</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2025</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Таблица показывает ориентировочные значения. Точную норму для вашего
              профиля рассчитает{' '}
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                калькулятор выше&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Что делать если вес остановился */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Что делать, если вес остановился
            </h2>
            <p>
              Плато — нормальная часть процесса похудения. По мере снижения
              веса ваш TDEE тоже уменьшается, и прежний дефицит может стать
              недостаточным. Вот что делать:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Пересчитайте норму</p>
                  <p>
                    Используйте калькулятор с актуальным весом. При потере каждых{' '}
                    <strong className="text-foreground">5</strong> кг TDEE снижается
                    на <strong className="text-foreground">50–100</strong> ккал.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Сделайте перерыв</p>
                  <p>
                    1–2 недели на уровне TDEE помогут восстановить метаболизм
                    и гормональный баланс. Это не шаг назад, а стратегия.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Добавьте активность</p>
                  <p>
                    Увеличьте TDEE вместо ещё большего урезания калорий.{' '}
                    <strong className="text-foreground">30</strong> минут ходьбы в день
                    добавляют <strong className="text-foreground">150–200</strong> ккал
                    к расходу.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Проверьте белок</p>
                  <p>
                    Достаточное потребление белка ускоряет метаболизм
                    на <strong className="text-foreground">15–30%</strong> за счёт
                    термического эффекта пищи.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Примеры расчёта дефицита
            </h2>
            <p>
              Рассмотрим два примера: умеренное и лёгкое похудение.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Женщина, 30 лет, −5 кг
                </h3>
                <p>
                  Рост <strong className="text-foreground">165</strong> см,
                  вес <strong className="text-foreground">70</strong> кг,
                  средняя активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>TDEE: <strong className="text-foreground">2079</strong> ккал</li>
                  <li>Дефицит: <strong className="text-foreground">400</strong> ккал (−19%)</li>
                  <li>Питание: <strong className="text-foreground">1679</strong> ккал/день</li>
                  <li>Потеря: <strong className="text-foreground">0,36</strong> кг/нед</li>
                  <li>Срок: <strong className="text-foreground">14</strong> недель</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Мужчина, 35 лет, −10 кг
                </h3>
                <p>
                  Рост <strong className="text-foreground">180</strong> см,
                  вес <strong className="text-foreground">90</strong> кг,
                  низкая активность.
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>TDEE: <strong className="text-foreground">2376</strong> ккал</li>
                  <li>Дефицит: <strong className="text-foreground">500</strong> ккал (−21%)</li>
                  <li>Питание: <strong className="text-foreground">1876</strong> ккал/день</li>
                  <li>Потеря: <strong className="text-foreground">0,45</strong> кг/нед</li>
                  <li>Срок: <strong className="text-foreground">22</strong> недели</li>
                </ul>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой план похудения&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Влияющие факторы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Что влияет на скорость похудения
            </h2>
            <p>
              Скорость потери веса зависит не только от размера дефицита.
              Несколько ключевых факторов могут ускорить или замедлить
              прогресс:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Weight className="h-5 w-5 text-violet-400" />
                  Начальный вес
                </h3>
                <p>
                  Чем больше жировая масса, тем быстрее идёт похудение
                  на старте. Люди с{' '}
                  <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    ИМТ выше 30
                  </Link>{' '}
                  могут безопасно терять до <strong className="text-foreground">1</strong> кг в неделю.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-orange-400" />
                  Мышечная масса
                </h3>
                <p>
                  Мышцы сжигают больше калорий даже в покое. Силовые тренировки
                  поддерживают мышечную массу и{' '}
                  <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    базовый метаболизм
                  </Link>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Moon className="h-5 w-5 text-indigo-400" />
                  Сон и стресс
                </h3>
                <p>
                  Недосып повышает уровень кортизола, который способствует
                  накоплению жира. Минимум <strong className="text-foreground">7–8</strong> часов
                  сна критически важны.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Droplets className="h-5 w-5 text-sky-400" />
                  Водный баланс
                </h3>
                <p>
                  Достаточное потребление{' '}
                  <Link href="/zdorovye/pitanie/norma-vody" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    воды
                  </Link>{' '}
                  ускоряет метаболизм на <strong className="text-foreground">3–8%</strong> и
                  помогает организму расщеплять жиры.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 9: Советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Практические советы для похудения
            </h2>
            <p>
              Дефицит калорий — это математика. Но успех зависит от
              привычек и подхода:
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">1</span>
                <div>
                  <p className="text-foreground font-medium">Не спешите</p>
                  <p>
                    Начните с умеренного дефицита <strong className="text-foreground">300–400</strong> ккал.
                    Через 2 недели оцените самочувствие и при необходимости
                    скорректируйте.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">2</span>
                <div>
                  <p className="text-foreground font-medium">Увеличьте белок</p>
                  <p>
                    При дефиците калорий белок становится критически важен —
                    минимум <strong className="text-foreground">1,6</strong> г на кг веса.
                    Это защитит мышцы от разрушения.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">3</span>
                <div>
                  <p className="text-foreground font-medium">Взвешивайтесь правильно</p>
                  <p>
                    Утром натощак, в одно время. Оценивайте среднее за неделю,
                    не ежедневные колебания. Вес может колебаться
                    на <strong className="text-foreground">1–2</strong> кг из-за воды.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">4</span>
                <div>
                  <p className="text-foreground font-medium">Планируйте перерывы</p>
                  <p>
                    Каждые <strong className="text-foreground">8–12</strong> недель дефицита
                    делайте перерыв на 1–2 недели на уровне TDEE. Это
                    предотвращает адаптацию метаболизма.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">5</span>
                <div>
                  <p className="text-foreground font-medium">Добавьте движение</p>
                  <p>
                    Даже ходьба <strong className="text-foreground">10 000</strong> шагов
                    в день существенно увеличивает расход калорий без нагрузки
                    на суставы и восстановление.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                Калькулятор даёт ориентировочные значения. При заболеваниях,
                расстройствах пищевого поведения или беременности
                проконсультируйтесь с врачом перед началом диеты.
              </p>
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
                  Какой дефицит калорий безопасен для похудения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Безопасным считается дефицит <strong className="text-foreground">300–500</strong> ккал
                  в день, что позволяет терять <strong className="text-foreground">0,3–0,5</strong> кг
                  в неделю. Дефицит более <strong className="text-foreground">700</strong> ккал
                  повышает риск потери мышц и замедления метаболизма.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как быстро можно похудеть без вреда для здоровья?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Безопасный темп — <strong className="text-foreground">0,5–1</strong> кг
                  в неделю. Более быстрое снижение веса приводит к потере
                  мышечной массы, замедлению метаболизма и повышенному
                  риску срывов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему вес перестал снижаться на диете?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Плато — нормальное явление. Причины: адаптация метаболизма,
                  задержка воды, рост мышечной массы. Решение: пересчитайте
                  норму по текущему весу, сделайте перерыв на 1–2 недели,
                  добавьте физическую активность.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Сколько калорий в 1 кг жира?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В 1 кг жировой ткани содержится примерно{' '}
                  <strong className="text-foreground">7700</strong> ккал. Это означает,
                  что для потери 1 кг жира нужен суммарный дефицит{' '}
                  <strong className="text-foreground">7700</strong> ккал. При дефиците{' '}
                  <strong className="text-foreground">500</strong> ккал в день это
                  займёт около <strong className="text-foreground">15</strong> дней.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужно ли считать калории каждый день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  На начальном этапе рекомендуется считать{' '}
                  <strong className="text-foreground">2–4</strong> недели, чтобы понять
                  размеры порций и калорийность привычных продуктов. Затем
                  можно перейти на интуитивное питание, периодически проверяя
                  себя.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли похудеть без дефицита калорий?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, дефицит калорий — единственный научно доказанный
                  механизм снижения жировой массы. Любая диета, которая
                  приводит к похудению, создаёт дефицит калорий тем или
                  иным способом.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто нужно пересчитывать дефицит?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пересчитывайте при изменении веса на{' '}
                  <strong className="text-foreground">5</strong> кг и более, при смене
                  уровня физической активности, при достижении плато (отсутствие
                  прогресса более <strong className="text-foreground">2–3</strong> недель)
                  или при смене цели.
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
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Target className="h-4 w-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/pitanie/norma-vody"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <GlassWater className="h-4 w-4 text-muted-foreground" />
                Норма воды
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
