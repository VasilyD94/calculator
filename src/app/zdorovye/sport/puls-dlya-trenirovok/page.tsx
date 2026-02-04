import type { Metadata } from 'next'
import Link from 'next/link'
import { HeartRateCalculator } from '@/components/calculators/HeartRateCalculator'
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
  Activity,
  ClipboardList,
  Heart,
  Lightbulb,
  AlertTriangle,
  Flame,
  Scale,
  Target,
  TrendingDown,
  Dumbbell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Пульсовые зоны — расчёт зон ЧСС для тренировок онлайн',
  description:
    'Рассчитайте пульсовые зоны бесплатно ✓ 5 зон по Карвонену ✓ Сравнение 3 формул макс. пульса ✓ Персональные зоны по возрасту и пульсу покоя.',
  keywords: [
    'пульсовые зоны',
    'зоны пульса',
    'калькулятор пульса',
    'пульс для жиросжигания',
    'зоны ЧСС',
    'максимальный пульс',
    'формула Карвонена',
    'зоны сердечного ритма',
  ],
  openGraph: {
    title: 'Пульсовые зоны — расчёт зон ЧСС',
    description: 'Рассчитайте 5 пульсовых зон по возрасту и пульсу покоя. Сравнение 3 формул.',
    type: 'website',
    url: '/zdorovye/sport/puls-dlya-trenirovok',
  },
  alternates: {
    canonical: '/zdorovye/sport/puls-dlya-trenirovok',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Спорт', href: '/zdorovye/sport' },
  { label: 'Пульсовые зоны', href: '/zdorovye/sport/puls-dlya-trenirovok' },
]

export default function HeartRateCalculatorPage() {
  return (
    <>
      {/* JSON-LD: WebApplication */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор пульса для тренировок',
          description:
            'Онлайн калькулятор пульсовых зон для тренировок по формуле Карвонена. Сравнение 3 формул максимального пульса.',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/sport/puls-dlya-trenirovok',
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
              name: 'Как рассчитать максимальный пульс?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Самая точная формула — Танака (2001): 208 − 0,7 × возраст. Для 30-летнего человека это 208 − 21 = 187 ударов в минуту. Классическая формула 220 − возраст менее точна, особенно для людей старше 40 лет.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое пульс покоя и как его измерить?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Пульс покоя — это частота сердечных сокращений в состоянии полного покоя. Измеряйте утром, не вставая с кровати, 3 дня подряд и возьмите среднее значение. Норма для взрослого человека — 60–80 ударов в минуту, у тренированных спортсменов — 40–55.',
              },
            },
            {
              '@type': 'Question',
              name: 'В какой зоне лучше тренироваться для похудения?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для сжигания жира оптимальна зона 2 (60–70% от ЧСС резерва). В этой зоне организм использует преимущественно жиры как источник энергии. Тренировки в зоне 2 можно проводить длительно — 40–60 минут и более.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли тренироваться в зоне 5 каждый день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Нет. Зона 5 (90–100% ЧСС резерва) — это максимальная нагрузка, которая допустима только короткими интервалами (15–60 секунд) и не чаще 1–2 раз в неделю. Ежедневные тренировки в этой зоне приведут к перетренированности и травмам.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как пульсовые зоны меняются с возрастом?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'С возрастом максимальный пульс снижается примерно на 0,7 удара в год. Соответственно, все пульсовые зоны сдвигаются вниз. Это нормальный физиологический процесс.',
              },
            },
            {
              '@type': 'Question',
              name: 'Нужен ли пульсометр для тренировок?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Пульсометр значительно повышает эффективность тренировок, помогая точно контролировать нагрузку. Без него можно ориентироваться на «разговорный тест»: в зоне 2 вы можете разговаривать, в зоне 3 — говорить короткими фразами, в зоне 4 — только отдельные слова.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда высокий пульс — повод обратиться к врачу?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Обратитесь к кардиологу, если пульс покоя стабильно выше 100 ударов в минуту, вы ощущаете перебои в сердцебиении, испытываете боль или давление в груди при нагрузке, или если пульс долго не восстанавливается после тренировки.',
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
          name: 'Как рассчитать пульсовые зоны для тренировок',
          description:
            'Пошаговая инструкция по расчёту персональных пульсовых зон.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Укажите возраст и пульс покоя в полях калькулятора.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите максимальный пульс',
              text: 'Калькулятор автоматически рассчитает максимальный пульс по формуле Танака.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Узнайте свои зоны',
              text: 'Получите 5 персональных пульсовых зон для разных типов тренировок.',
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
              name: 'Пульс для тренировок',
              item: 'https://calc-box.ru/zdorovye/sport/puls-dlya-trenirovok',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Пульсовые зоны — расчёт зон ЧСС онлайн
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Рассчитайте персональные пульсовые зоны по формуле Карвонена.
            Мгновенный результат по возрасту и пульсу покоя.
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
              <p>Укажите возраст и пульс покоя в полях калькулятора.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Калькулятор автоматически рассчитает максимальный пульс по формуле Танака.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Получите 5 персональных пульсовых зон для разных типов тренировок.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт пульсовых зон</h2>
          <HeartRateCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="size-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-5">
            <Link
              href="/zdorovye/sport/belok-dlya-sportsmenov"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Dumbbell className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Белок для спортсменов
              </span>
            </Link>
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
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Activity className="size-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
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

          {/* Блок 1: Что такое пульсовые зоны */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="size-5" />
              Что такое пульсовые зоны
            </h2>
            <p>
              Пульсовые зоны — это диапазоны частоты сердечных сокращений (ЧСС), каждый из которых соответствует определённой интенсивности нагрузки. Зная свои зоны, вы можете точно дозировать тренировки: сжигать жир, развивать выносливость или увеличивать скорость.
            </p>
            <p>
              Всего выделяют <strong className="text-foreground">5 зон</strong> — от лёгкого восстановления до максимального усилия. Каждая зона задействует разные энергетические системы организма и даёт разный тренировочный эффект. Контроль пульса особенно важен для бегунов, велосипедистов и всех, кто занимается кардиотренировками.
            </p>
            <p>
              Расчёт зон основан на двух параметрах: максимальном пульсе и пульсе покоя. Чем точнее вы знаете эти значения, тем эффективнее будут тренировки. Калькулятор также поможет рассчитать{' '}
              <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                суточную норму калорий
              </Link>{' '}
              для вашего уровня активности.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Формулы расчёта максимального пульса */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="size-5" />
              Формулы расчёта максимального пульса
            </h2>
            <p>
              Максимальный пульс (ЧСС макс) — это наибольшая частота сердечных сокращений, которую сердце способно развить при максимальной нагрузке. Существует несколько формул для его расчёта:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Хаскелла–Фокса</h3>
                <p className="text-foreground font-medium">220 − возраст</p>
                <p>Классическая формула 1970 года. Проста, но завышает результат для людей старше 40 лет.</p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5 border-primary/30 bg-primary/5">
                <h3 className="font-semibold text-foreground">Танака (2001)</h3>
                <p className="text-foreground font-medium">208 − 0,7 × возраст</p>
                <p>Основана на мета-анализе 351 исследования. Считается наиболее точной для большинства людей.</p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Гелиш (2007)</h3>
                <p className="text-foreground font-medium">207 − 0,7 × возраст</p>
                <p>Уточнённая версия, близкая к формуле Танака. Разница — 1 удар в минуту.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Calculator className="size-5 shrink-0 text-blue-500 mt-0.5" />
              <p>Наш калькулятор по умолчанию использует формулу Танака как наиболее точную. Вы можете сравнить результаты всех трёх формул в блоке «Сравнение формул» калькулятора.</p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Метод Карвонена */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Puzzle className="size-5" />
              Метод Карвонена
            </h2>
            <p>
              Метод Карвонена — это способ расчёта пульсовых зон, который учитывает не только максимальный пульс, но и <strong className="text-foreground">пульс покоя</strong>. Это делает расчёт более персональным и точным.
            </p>
            <p>
              Формула использует понятие <strong className="text-foreground">ЧСС резерва</strong> — разницу между максимальным пульсом и пульсом покоя:
            </p>
            <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
              ЧСС зоны = ЧСС покоя + (ЧСС макс − ЧСС покоя) × процент интенсивности
            </p>
            <p>
              Например, для человека с максимальным пульсом <strong className="text-foreground">187</strong> и пульсом покоя <strong className="text-foreground">65</strong> ЧСС резерва составит <strong className="text-foreground">122</strong> удара. Нижняя граница зоны 2 (60%): 65 + 122 × 0,6 = <strong className="text-foreground">138 уд/мин</strong>.
            </p>
            <p>
              Преимущество метода Карвонена в том, что он учитывает уровень тренированности. У человека с низким пульсом покоя (45 уд/мин) зоны будут шире, чем у нетренированного (80 уд/мин), что отражает реальную разницу в физической подготовке.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Пять пульсовых зон */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Activity className="size-5" />
              Пять пульсовых зон
            </h2>
            <p>
              Каждая зона тренирует определённые качества и задействует разные источники энергии. Грамотное чередование зон — ключ к прогрессу и профилактике травм.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-400 text-[10px] font-bold text-white">1</span>
                  Восстановление (50–60% ЧСС резерва)
                </h3>
                <p>Лёгкая нагрузка для разминки, заминки и активного восстановления между тяжёлыми тренировками. В этой зоне организм использует жиры как основной источник энергии. Можно свободно разговаривать.</p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[10px] font-bold text-white">2</span>
                  Жиросжигание (60–70% ЧСС резерва)
                </h3>
                <p>Оптимальная зона для длительных тренировок и похудения. Организм эффективно сжигает жиры, при этом нагрузка комфортна для тренировок продолжительностью 40–90 минут. Вы можете говорить полными предложениями. Подходит для начинающих и тех, кто следит за{' '}
                  <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    индексом массы тела
                  </Link>.
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-white">3</span>
                  Аэробная (70–80% ЧСС резерва)
                </h3>
                <p>Основная зона для развития кардиовыносливости. Сердце становится сильнее, улучшается транспорт кислорода к мышцам. Тренировки длятся 20–60 минут. Говорить можно только короткими фразами.</p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-orange-400 text-[10px] font-bold text-white">4</span>
                  Анаэробная (80–90% ЧСС резерва)
                </h3>
                <p>Высокая интенсивность, при которой организм переходит на анаэробный режим. Развивает скоростную выносливость и повышает лактатный порог. Тренировки — интервалами по 2–10 минут с отдыхом. Говорить практически невозможно.</p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-400 text-[10px] font-bold text-white">5</span>
                  Максимальная (90–100% ЧСС резерва)
                </h3>
                <p>Предельная нагрузка для коротких спринтов и финишных рывков. Допустима только интервалами по 15–60 секунд. Используется опытными спортсменами не чаще 1–2 раз в неделю. Требует полного восстановления между подходами.</p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Таблица пульсовых зон по возрасту */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Таблица пульсовых зон по возрасту
            </h2>
            <p>
              Ориентировочные значения зон при пульсе покоя <strong className="text-foreground">65 уд/мин</strong> (формула Танака + Карвонен):
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Возраст</th>
                    <th className="py-2 px-2 font-semibold text-foreground">ЧСС макс</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Зона 1</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Зона 2</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Зона 3</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Зона 4</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Зона 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">20</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">194</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">130–142</td>
                    <td className="py-2 px-2 whitespace-nowrap">142–155</td>
                    <td className="py-2 px-2 whitespace-nowrap">155–168</td>
                    <td className="py-2 px-2 whitespace-nowrap">168–181</td>
                    <td className="py-2 pl-2 whitespace-nowrap">181–194</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">30</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">187</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">126–138</td>
                    <td className="py-2 px-2 whitespace-nowrap">138–150</td>
                    <td className="py-2 px-2 whitespace-nowrap">150–162</td>
                    <td className="py-2 px-2 whitespace-nowrap">162–175</td>
                    <td className="py-2 pl-2 whitespace-nowrap">175–187</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">40</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">180</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">123–134</td>
                    <td className="py-2 px-2 whitespace-nowrap">134–146</td>
                    <td className="py-2 px-2 whitespace-nowrap">146–157</td>
                    <td className="py-2 px-2 whitespace-nowrap">157–168</td>
                    <td className="py-2 pl-2 whitespace-nowrap">168–180</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">50</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">173</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">119–130</td>
                    <td className="py-2 px-2 whitespace-nowrap">130–141</td>
                    <td className="py-2 px-2 whitespace-nowrap">141–151</td>
                    <td className="py-2 px-2 whitespace-nowrap">151–162</td>
                    <td className="py-2 pl-2 whitespace-nowrap">162–173</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2"><strong className="text-foreground">60</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">166</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">116–126</td>
                    <td className="py-2 px-2 whitespace-nowrap">126–136</td>
                    <td className="py-2 px-2 whitespace-nowrap">136–146</td>
                    <td className="py-2 px-2 whitespace-nowrap">146–156</td>
                    <td className="py-2 pl-2 whitespace-nowrap">156–166</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2"><strong className="text-foreground">70</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">159</strong></td>
                    <td className="py-2 px-2 whitespace-nowrap">112–121</td>
                    <td className="py-2 px-2 whitespace-nowrap">121–131</td>
                    <td className="py-2 px-2 whitespace-nowrap">131–140</td>
                    <td className="py-2 px-2 whitespace-nowrap">140–150</td>
                    <td className="py-2 pl-2 whitespace-nowrap">150–159</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свои зоны пульса&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Как измерить пульс покоя */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Heart className="size-5" />
              Как измерить пульс покоя
            </h2>
            <p>
              Пульс покоя — важный показатель здоровья сердечно-сосудистой системы и уровня тренированности. Чем ниже пульс покоя, тем эффективнее работает сердце.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  1
                </span>
                <div>
                  <p className="text-foreground font-medium">Измеряйте утром</p>
                  <p>Сразу после пробуждения, не вставая с кровати. Полежите 2–3 минуты спокойно.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Найдите пульс</p>
                  <p>Приложите два пальца к запястью (лучевая артерия) или к шее (сонная артерия).</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Считайте 60 секунд</p>
                  <p>Или 15 секунд и умножьте на 4. Полная минута даёт более точный результат.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Повторите 3 дня</p>
                  <p>Среднее значение за 3 утра — ваш истинный пульс покоя.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-primary/5 text-foreground p-3">
              <Heart className="size-5 shrink-0 text-red-500 mt-0.5" />
              <p>Нормальный пульс покоя для взрослого — <strong className="text-foreground">60–80 уд/мин</strong>. У тренированных спортсменов — <strong className="text-foreground">40–55 уд/мин</strong>. Пульс покоя выше <strong className="text-foreground">100 уд/мин</strong> (тахикардия) — повод обратиться к врачу.</p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="size-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Мужчина, 30 лет</h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Пульс покоя: <strong className="text-foreground">65</strong> уд/мин</li>
                  <li>ЧСС макс (Танака): 208 − 0,7 × 30 = <strong className="text-foreground">187</strong></li>
                  <li>ЧСС резерва: 187 − 65 = <strong className="text-foreground">122</strong></li>
                  <li>Зона 2 (60–70%): <strong className="text-foreground">138–150</strong> уд/мин</li>
                  <li>Зона 3 (70–80%): <strong className="text-foreground">150–163</strong> уд/мин</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Женщина, 45 лет</h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Пульс покоя: <strong className="text-foreground">72</strong> уд/мин</li>
                  <li>ЧСС макс (Танака): 208 − 0,7 × 45 = <strong className="text-foreground">176</strong></li>
                  <li>ЧСС резерва: 176 − 72 = <strong className="text-foreground">104</strong></li>
                  <li>Зона 2 (60–70%): <strong className="text-foreground">134–145</strong> уд/мин</li>
                  <li>Зона 3 (70–80%): <strong className="text-foreground">145–155</strong> уд/мин</li>
                </ul>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свои зоны&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Практические советы */}
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
                  <p className="text-foreground font-medium">Правило 80/20</p>
                  <p>80% тренировочного объёма — в зонах 1–2, 20% — в зонах 3–5. Это «поляризованная» модель, которую используют элитные спортсмены.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Начните с зоны 2</p>
                  <p>Если вы новичок, первые 4–6 недель тренируйтесь исключительно в зоне 2. Это создаст аэробную базу и подготовит сердце к более интенсивным нагрузкам.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Следите за восстановлением</p>
                  <p>Если утренний пульс покоя на 5–10 ударов выше обычного — организм не восстановился. Замените тяжёлую тренировку на лёгкую в зоне 1.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Учитывайте питание</p>
                  <p>
                    Эффективные тренировки невозможны без правильного питания. Рассчитайте свой{' '}
                    <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      базовый метаболизм
                    </Link>{' '}
                    и{' '}
                    <Link href="/zdorovye/pitanie/defitsit-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      дефицит калорий
                    </Link>{' '}
                    для достижения целей.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Пересчитывайте зоны</p>
                  <p>С ростом тренированности пульс покоя снижается — пересчитывайте зоны каждые 2–3 месяца.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-400" />
              <p>Перед началом интенсивных тренировок проконсультируйтесь с врачом, особенно если у вас есть заболевания сердечно-сосудистой системы или вы старше 45 лет.</p>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свои зоны пульса&nbsp;→
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 9: FAQ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <CircleHelp className="size-5" />
              Часто задаваемые вопросы
            </h2>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как рассчитать максимальный пульс?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Самая точная формула — Танака (2001): <strong className="text-foreground">208 − 0,7 × возраст</strong>. Для 30-летнего человека это 208 − 21 = <strong className="text-foreground">187 уд/мин</strong>. Классическая формула «220 минус возраст» менее точна, особенно для людей старше 40 лет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое пульс покоя и как его измерить?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пульс покоя — это частота сердечных сокращений в состоянии полного покоя. Измеряйте утром, не вставая с кровати, <strong className="text-foreground">3 дня подряд</strong> и возьмите среднее значение. Норма для взрослого — <strong className="text-foreground">60–80 уд/мин</strong>, у тренированных спортсменов — <strong className="text-foreground">40–55 уд/мин</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  В какой зоне лучше тренироваться для похудения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для сжигания жира оптимальна <strong className="text-foreground">зона 2 (60–70%</strong> от ЧСС резерва). В этой зоне организм использует преимущественно жиры как источник энергии. Тренировки можно проводить длительно — <strong className="text-foreground">40–60 минут</strong> и более.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли тренироваться в зоне 5 каждый день?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет. Зона 5 (90–100% ЧСС резерва) — максимальная нагрузка, допустимая только короткими интервалами (<strong className="text-foreground">15–60 секунд</strong>) и не чаще <strong className="text-foreground">1–2 раз в неделю</strong>. Ежедневные тренировки в этой зоне приведут к перетренированности и травмам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как пульсовые зоны меняются с возрастом?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  С возрастом максимальный пульс снижается примерно на <strong className="text-foreground">0,7 удара в год</strong>. Соответственно, все пульсовые зоны сдвигаются вниз. Это нормальный физиологический процесс, не означающий снижения работоспособности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Нужен ли пульсометр для тренировок?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пульсометр значительно повышает эффективность тренировок, помогая точно контролировать нагрузку. Без него можно ориентироваться на «разговорный тест»: в зоне 2 вы свободно разговариваете, в зоне 3 — короткими фразами, в зоне 4 — только отдельные слова.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Когда высокий пульс — повод обратиться к врачу?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Обратитесь к кардиологу, если пульс покоя стабильно выше <strong className="text-foreground">100 уд/мин</strong>, вы ощущаете перебои в сердцебиении, испытываете боль или давление в груди при нагрузке, или пульс долго не восстанавливается после тренировки (более <strong className="text-foreground">5 минут</strong>).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <hr className="border-border" />

          {/* Блок 10: Связанные калькуляторы */}
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
                <Target className="size-4 text-muted-foreground" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="size-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <TrendingDown className="size-4 text-muted-foreground" />
                Дефицит калорий
              </Link>
              <Link
                href="/zdorovye/sport/belok-dlya-sportsmenov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Dumbbell className="size-4 text-muted-foreground" />
                Белок для спортсменов
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
