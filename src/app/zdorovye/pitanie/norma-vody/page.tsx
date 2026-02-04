import type { Metadata } from 'next'
import Link from 'next/link'
import { WaterCalculator } from '@/components/calculators/WaterCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Droplets,
  BookOpen,
  Compass,
  CircleHelp,
  ArrowUpRight,
  AlertTriangle,
  Lightbulb,
  Calculator,
  Activity,
  ThermometerSun,
  ShieldCheck,
  ClipboardList,
  Flame,
  Scale,
  GlassWater,
  Dumbbell,
  Heart,
  Brain,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Сколько воды пить в день — расчёт нормы онлайн',
  description:
    'Узнайте сколько воды пить в день бесплатно ✓ Индивидуальный расчёт по весу и активности ✓ Учёт климата и особенностей ✓ Расписание приёма воды. Без регистрации.',
  keywords: [
    'сколько воды пить в день',
    'сколько пить воды',
    'норма воды в день',
    'суточная норма воды',
    'водный баланс',
    'расчёт нормы воды',
    'сколько воды нужно пить',
    'калькулятор воды',
  ],
  openGraph: {
    title: 'Сколько воды пить в день — расчёт нормы',
    description:
      'Рассчитайте индивидуальную норму воды с учётом веса, активности и климата. Расписание на день.',
    type: 'website',
    url: '/zdorovye/pitanie/norma-vody',
  },
  alternates: {
    canonical: '/zdorovye/pitanie/norma-vody',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Сколько воды пить', href: '/zdorovye/pitanie/norma-vody' },
]

export default function WaterCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор нормы воды',
          description:
            'Онлайн калькулятор суточной нормы воды с учётом веса, активности, климата и особенностей организма',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/pitanie/norma-vody',
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
              name: 'Сколько воды нужно пить в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Индивидуальная норма зависит от веса, пола, активности и климата. Базовая формула: 30–35 мл на каждый килограмм массы тела. Для человека весом 70 кг это 2,1–2,5 литра в день.',
              },
            },
            {
              '@type': 'Question',
              name: 'Считается ли чай и кофе в норму воды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Чай, морс, компот, суп и сочные фрукты учитываются в суточной норме жидкости. Кофе при умеренном потреблении (до 3 чашек) тоже засчитывается. Алкоголь не учитывается.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как понять, что я пью недостаточно воды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Основные признаки: тёмная моча, сухость во рту, головная боль, усталость и снижение концентрации. Моча здорового человека — светло-жёлтого цвета.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли пить слишком много воды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, избыточное потребление воды (более 5–6 литров в день) может привести к гипонатриемии — снижению уровня натрия в крови. Это опасное состояние. Придерживайтесь рассчитанной нормы.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужно ли пить воду, если не хочется?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Чувство жажды — уже признак начавшегося обезвоживания. С возрастом рецепторы жажды становятся менее чувствительными. Лучше пить регулярно, не дожидаясь жажды, ориентируясь на рассчитанную норму.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда нужно пить больше воды, чем обычно?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Увеличить потребление воды нужно при физических нагрузках (0,5–1 л за тренировку), в жаркую погоду (+500 мл), при болезни с температурой, после употребления алкоголя и при сухом воздухе в помещении.',
              },
            },
            {
              '@type': 'Question',
              name: 'Правда ли, что нужно пить ровно 8 стаканов воды в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Это обобщённая рекомендация, не учитывающая вес, активность и климат. Человеку весом 50 кг нужно значительно меньше воды, чем человеку весом 100 кг. Используйте индивидуальный расчёт по формуле 30–35 мл на кг массы тела.',
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
          name: 'Как рассчитать норму воды в день',
          description:
            'Пошаговая инструкция по расчёту индивидуальной нормы воды.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите вес и уровень физической активности.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Уточните условия',
              text: 'Отметьте жаркий климат, если температура выше 30°C. Для женщин доступны опции беременности и кормления грудью.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет норму в мл и стаканах, разбивку по факторам и расписание приёма воды на весь день.',
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
              name: 'Норма воды',
              item: 'https://calc-box.ru/zdorovye/pitanie/norma-vody',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Сколько воды пить в день — онлайн расчёт
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте индивидуальную суточную норму воды с учётом вашего веса,
            активности, климата и особенностей организма. Результат обновляется
            мгновенно.
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
              <p>Выберите пол, укажите вес и уровень физической активности.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Отметьте жаркий климат, если температура выше 30°C. Для женщин доступны опции беременности и кормления грудью.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Калькулятор покажет норму в мл и стаканах, разбивку по факторам и расписание приёма воды на весь день.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт нормы воды</h2>
          <WaterCalculator />
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
              href="/zdorovye/pitanie/kalkulyator-bzhu"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Scale className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор БЖУ
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/kalkulyator-imt"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Activity className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Калькулятор ИМТ
              </span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Dumbbell className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1 — Зачем пить воду */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Droplets className="size-5" />
              Зачем пить воду и почему это важно
            </h2>
            <p>
              Вода — основа жизнедеятельности организма. Она составляет <strong className="text-foreground">60–70%</strong>{' '}
              массы тела взрослого человека и участвует практически во всех
              биохимических процессах: от переваривания пищи до терморегуляции.
              Без пищи человек может прожить несколько недель, а без воды —
              всего <strong className="text-foreground">3–5 дней</strong>.
            </p>
            <p>
              Достаточное потребление воды обеспечивает нормальную работу
              почек, помогает выводить токсины, поддерживает эластичность кожи,
              смазывает суставы и улучшает когнитивные функции. Исследования
              показывают, что даже лёгкое обезвоживание (потеря <strong className="text-foreground">1–2%</strong> жидкости)
              снижает концентрацию внимания, ухудшает настроение и повышает
              утомляемость.
            </p>
            <p>
              Правильный водный баланс важен для всех процессов в организме — от{' '}
              <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                базового метаболизма
              </Link>{' '}
              до усвоения питательных веществ. Если вы следите за{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                суточной нормой калорий
              </Link>
              , не забывайте и о норме воды.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Как рассчитывается */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Как рассчитывается норма воды
            </h2>
            <p>
              Базовая формула расчёта: <strong className="text-foreground">30–35 мл</strong> воды на каждый килограмм массы
              тела. Для мужчин используется коэффициент <strong className="text-foreground">35 мл/кг</strong>, для женщин —{' '}
              <strong className="text-foreground">31 мл/кг</strong>. Эти значения основаны на рекомендациях Всемирной
              организации здравоохранения (ВОЗ) и Института медицины (IOM).
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Мужчина, 80 кг
                </h3>
                <p>
                  80 кг &times; 35 мл = <strong className="text-foreground">2800 мл</strong> (2,8 литра) — базовая
                  потребность без учёта активности и климата.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Женщина, 60 кг
                </h3>
                <p>
                  60 кг &times; 31 мл = <strong className="text-foreground">1860 мл</strong> (1,9 литра) — базовая
                  потребность без учёта активности и климата.
                </p>
              </div>
            </div>
            <p>
              К базовой потребности добавляются бонусы: за физическую
              активность (до <strong className="text-foreground">+800 мл</strong>), за жаркий климат (<strong className="text-foreground">+500 мл</strong>), за
              беременность (<strong className="text-foreground">+300 мл</strong>) или кормление грудью (<strong className="text-foreground">+700 мл</strong>).
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Роль воды в организме */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="size-5" />
              Роль воды в организме
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Brain className="size-5 text-purple-400" />
                  Мозг и нервы
                </h3>
                <p>Мозг на 75% состоит из воды. Обезвоживание снижает концентрацию, память и скорость реакции.</p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Heart className="size-5 text-rose-400" />
                  Сердце и сосуды
                </h3>
                <p>Вода поддерживает объём крови и нормальное артериальное давление. При дефиците кровь сгущается.</p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Activity className="size-5 text-green-400" />
                  Обмен веществ
                </h3>
                <p>Вода участвует в расщеплении жиров и углеводов. Недостаток замедляет{' '}
                  <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    метаболизм
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Признаки обезвоживания */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="size-5" />
              Признаки обезвоживания
            </h2>
            <p>
              Обезвоживание наступает, когда организм теряет больше жидкости,
              чем получает. Важно распознавать первые признаки, чтобы
              своевременно восполнить баланс.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Ранние признаки
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Тёмная моча (темнее светло-соломенного цвета)</li>
                  <li>Жажда и сухость во рту</li>
                  <li>Головная боль без явной причины</li>
                  <li>Повышенная утомляемость</li>
                  <li>Снижение концентрации внимания</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">
                  Серьёзные признаки
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Головокружение и предобморочное состояние</li>
                  <li>Учащённое сердцебиение</li>
                  <li>Сухая, потерявшая упругость кожа</li>
                  <li>Редкое мочеиспускание (менее 4 раз в день)</li>
                  <li>Мышечные судороги</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>При серьёзных признаках обезвоживания обратитесь к врачу. Не пытайтесь восполнить потерю жидкости резко — пейте маленькими порциями.</p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Когда нужно пить больше */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ThermometerSun className="size-5" />
              Когда нужно пить больше воды
            </h2>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Физические нагрузки</p>
                  <p>При тренировке организм теряет <strong className="text-foreground">0,5–1 литр</strong> жидкости через пот
                  в час. Пейте 150–200 мл каждые 15–20 минут во время занятий.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Жаркая погода</p>
                  <p>При температуре выше 30°C потоотделение усиливается.
                  Добавьте <strong className="text-foreground">500 мл</strong> к суточной норме.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Болезнь с температурой</p>
                  <p>При повышенной температуре тела потеря жидкости
                  увеличивается. Пейте больше тёплой воды, морса, компота.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">После алкоголя</p>
                  <p>Алкоголь обладает сильным мочегонным эффектом. На каждую
                  порцию алкоголя выпивайте дополнительный стакан воды.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Сухой воздух</p>
                  <p>Кондиционеры и отопление снижают влажность, увеличивая
                  потерю жидкости через дыхание и кожу.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Мифы о воде */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="size-5" />
              Мифы о воде
            </h2>
            <div className="grid gap-3 md:grid-cols-1">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Миф: Нужно пить ровно 8 стаканов в день</h3>
                <p>
                  Это обобщённая рекомендация, не учитывающая вес, активность
                  и климат. Человеку весом 50 кг нужно значительно меньше
                  воды, чем человеку весом 100 кг. Используйте
                  индивидуальный расчёт.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Миф: Чай и кофе обезвоживают</h3>
                <p>
                  Кофеин обладает лёгким мочегонным эффектом, но при
                  умеренном потреблении (до <strong className="text-foreground">400 мг</strong> кофеина в день) чай и кофе
                  вносят положительный вклад в водный баланс. Они
                  преимущественно состоят из воды.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Миф: Чем больше воды — тем лучше</h3>
                <p>
                  Избыточное потребление воды (гипергидратация) может привести
                  к водной интоксикации — опасному состоянию, при котором
                  снижается концентрация натрия в крови. Придерживайтесь
                  рассчитанной нормы.
                </p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свою норму&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Таблица норм */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Таблица примерных норм воды
            </h2>
            <p>
              Ориентировочные значения для людей со средним уровнем активности в умеренном климате.
              Точная норма зависит от индивидуальных факторов.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Вес</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Мужчины</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Женщины</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">50 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">1750 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1550 мл</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">60 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2100 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">1860 мл</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">70 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2450 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2170 мл</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">80 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">2800 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2480 мл</strong></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2">90 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">3150 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">2790 мл</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">100 кг</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">3500 мл</strong></td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">3100 мл</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              Значения в таблице — базовая потребность. При активном образе жизни или жарком климате норма будет выше.
            </p>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать точную норму&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Советы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="size-5" />
              Как приучить себя пить достаточно воды
            </h2>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Начинайте утро со стакана воды</p>
                  <p>За ночь организм теряет до <strong className="text-foreground">500 мл</strong> жидкости. Стакан воды
                  натощак запускает метаболизм и восполняет потери.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Держите бутылку воды на виду</p>
                  <p>Визуальное напоминание работает лучше любого приложения.
                  Поставьте бутылку на рабочий стол или носите с собой.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Пейте перед каждым приёмом пищи</p>
                  <p>Стакан воды за 30 минут до еды улучшает пищеварение
                  и помогает контролировать аппетит. Это особенно полезно при{' '}
                    <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      дефиците калорий
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Следите за цветом мочи</p>
                  <p>Это самый простой индикатор гидратации. Светло-жёлтый цвет
                  — норма. Тёмный — пора выпить стакан воды.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Добавляйте вкус</p>
                  <p>Если чистая вода кажется невкусной — добавьте дольку лимона, мяту или огурец. Травяной чай тоже считается.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <Lightbulb className="size-5 shrink-0 text-blue-400" />
              <p>Водный баланс влияет на{' '}
                <Link href="/zdorovye/pitanie/kalkulyator-bzhu" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                  усвоение белков, жиров и углеводов
                </Link>. Пейте достаточно воды для максимальной пользы от питания.
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
                  Сколько воды нужно пить в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Индивидуальная норма зависит от веса, пола, активности
                  и климата. Базовая формула: <strong className="text-foreground">30–35 мл</strong> на каждый килограмм
                  массы тела. Для человека весом 70 кг это <strong className="text-foreground">2,1–2,5</strong> литра.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Считается ли чай и кофе в норму воды?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Чай, морс, компот, суп и сочные фрукты учитываются
                  в суточной норме жидкости. Кофе при умеренном потреблении
                  (до <strong className="text-foreground">3</strong> чашек) тоже засчитывается. Алкоголь не учитывается.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как понять, что я пью недостаточно воды?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Основные признаки: тёмная моча, сухость во рту, головная
                  боль, усталость и снижение концентрации. Моча здорового
                  человека — светло-жёлтого цвета.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли пить слишком много воды?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, избыточное потребление воды (более <strong className="text-foreground">5–6</strong> литров в день)
                  может привести к гипонатриемии — снижению уровня натрия
                  в крови. Это опасное состояние. Придерживайтесь рассчитанной
                  нормы.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужно ли пить воду, если не хочется?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Чувство жажды — уже признак начавшегося обезвоживания. С возрастом рецепторы жажды становятся менее чувствительными. Лучше пить регулярно, не дожидаясь жажды, ориентируясь на рассчитанную норму.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда нужно пить больше воды, чем обычно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Увеличить потребление воды нужно при физических нагрузках (<strong className="text-foreground">0,5–1 л</strong> за тренировку), в жаркую погоду (<strong className="text-foreground">+500 мл</strong>), при болезни с температурой, после употребления алкоголя и при сухом воздухе в помещении.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Правда ли, что нужно пить ровно 8 стаканов воды в день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Это обобщённая рекомендация, не учитывающая вес, активность и климат. Человеку весом 50 кг нужно значительно меньше воды, чем человеку весом 100 кг. Используйте индивидуальный расчёт по формуле <strong className="text-foreground">30–35 мл</strong> на кг массы тела.
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
                href="/zdorovye/pitanie/kalkulyator-bzhu"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Scale className="size-4 text-muted-foreground" />
                Калькулятор БЖУ
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <GlassWater className="size-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="size-4 text-muted-foreground" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Dumbbell className="size-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
