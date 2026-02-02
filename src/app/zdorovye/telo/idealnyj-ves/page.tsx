import type { Metadata } from 'next'
import Link from 'next/link'
import { IdealWeightCalculator } from '@/components/calculators/IdealWeightCalculator'
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
  Percent,
  Dumbbell,
  Bone,
  Clock,
  Users,
  TrendingDown,
  TrendingUp,
  Droplets,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор идеального веса — расчёт по 5 формулам',
  description:
    'Бесплатный калькулятор идеального веса онлайн ✓ Расчёт по формулам Devine, Robinson, Miller, Hamwi и Брока ✓ Сравнение 5 формул ✓ Отклонение от нормы.',
  keywords: [
    'идеальный вес',
    'калькулятор идеального веса',
    'нормальный вес по росту',
    'формула идеального веса',
    'расчёт веса',
    'вес по росту',
    'идеальная масса тела',
    'калькулятор веса',
  ],
  openGraph: {
    title: 'Калькулятор идеального веса — расчёт по 5 формулам',
    description:
      'Узнайте свой идеальный вес по 5 научным формулам. Сравнение результатов и оценка текущего веса.',
    type: 'website',
    url: '/zdorovye/telo/idealnyj-ves',
  },
  alternates: {
    canonical: '/zdorovye/telo/idealnyj-ves',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' },
]

export default function IdealWeightPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор идеального веса',
          description:
            'Онлайн калькулятор идеального веса по 5 научным формулам с визуальным сравнением результатов',
          applicationCategory: 'HealthApplication',
          url: 'https://calc-box.ru/zdorovye/telo/idealnyj-ves',
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
              name: 'Какая формула идеального веса самая точная?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Наиболее распространённой считается формула Devine (1974), которая используется в клинической практике для дозирования лекарств. Однако ни одна формула не является абсолютно точной — рекомендуется ориентироваться на диапазон значений по нескольким формулам.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему разные формулы дают разные результаты?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формулы создавались в разные годы, на основе разных выборок населения и с разными методологиями. Например, формулы Devine и Robinson используют дюймы роста, а формула Брока — сантиметры. Разброс в 3–7 кг считается нормальным.',
              },
            },
            {
              '@type': 'Question',
              name: 'Учитывают ли формулы идеального веса возраст?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Классические формулы идеального веса (Devine, Robinson, Miller, Hamwi, Брока) не учитывают возраст — они основаны только на росте и поле. Для более точной оценки рекомендуется учитывать ИМТ, процент жира и обхват талии.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли использовать калькулятор при росте ниже 152 см?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста от 152 см (60 дюймов). При меньшем росте результат может быть неточным. Формула Брока работает для любого роста, но также имеет ограничения.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как часто нужно пересчитывать идеальный вес?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Идеальный вес по формулам зависит от роста и пола — он не меняется с возрастом. Однако пересчёт полезен, если вы набрали или сбросили вес: калькулятор покажет, насколько ваш текущий вес далёк от идеального диапазона.',
              },
            },
            {
              '@type': 'Question',
              name: 'Идеальный вес одинаков для всех возрастов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формулы дают одинаковый результат независимо от возраста. Но врачи отмечают, что после 50 лет небольшое превышение нормы (ИМТ 25–27) не связано с повышенными рисками. Ориентируйтесь на самочувствие и комплексные показатели.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой показатель точнее — ИМТ или идеальный вес?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ и идеальный вес — это дополняющие друг друга показатели. ИМТ оценивает соотношение веса к росту по шкале ВОЗ, а формулы идеального веса дают конкретное целевое число. Для полной картины используйте оба показателя вместе с процентом жира.',
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
          name: 'Как рассчитать идеальный вес',
          description:
            'Пошаговая инструкция по расчёту идеального веса с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите рост и текущий вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Сравните формулы',
              text: 'Калькулятор мгновенно рассчитает идеальный вес по 5 научным формулам и покажет визуальное сравнение.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Узнайте диапазон идеального веса, среднее значение и разницу с вашим текущим весом.',
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
              name: 'Идеальный вес',
              item: 'https://calc-box.ru/zdorovye/telo/idealnyj-ves',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор идеального веса
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте идеальный вес по 5 научным формулам и сравните
            результаты. Калькулятор учитывает пол и рост, показывает диапазон
            и сравнение с текущим весом.
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
              <p>Выберите пол, укажите рост и текущий вес с помощью удобных слайдеров.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Калькулятор мгновенно рассчитает идеальный вес по 5 научным формулам и покажет визуальное сравнение.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Узнайте диапазон идеального веса, среднее значение и разницу с вашим текущим весом.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">Расчёт идеального веса</h2>
          <IdealWeightCalculator />
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
              href="/zdorovye/telo/protsent-zhira"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Percent className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Процент жира
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

          {/* Блок 1: Что такое идеальный вес */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что такое идеальный вес
            </h2>
            <p>
              Идеальный вес — это масса тела, при которой организм функционирует
              наиболее эффективно, а риски заболеваний, связанных с весом,
              минимальны. Понятие «идеального веса» не имеет единого
              определения — это скорее диапазон, чем конкретное число.
            </p>
            <p>
              Идеальный вес зависит от множества факторов: роста, пола, возраста,
              типа телосложения, соотношения мышечной и жировой ткани. Именно
              поэтому наш калькулятор использует сразу <strong className="text-foreground">5 формул</strong> — это даёт более
              объективную картину, чем любая одна формула по отдельности. Для комплексной
              оценки полезно также рассчитать свой{' '}
              <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                индекс массы тела
              </Link>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2: Формулы расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Формулы расчёта идеального веса
            </h2>
            <p>
              Калькулятор использует <strong className="text-foreground">5 формул</strong>, каждая из которых
              была разработана в разные годы и на разных выборках населения.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Scale className="h-5 w-5 text-green-500" />
                  Формула Devine (1974)
                </h3>
                <p>
                  Создана доктором Б. Дж. Девайном и первоначально использовалась
                  для расчёта дозировок лекарств. Самая распространённая формула
                  в клинической практике.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 50 + 2,3 &times; (рост в дюймах &minus; 60).</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 45,5 + 2,3 &times; (рост в дюймах &minus; 60).</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-blue-500" />
                  Формула Robinson (1983)
                </h3>
                <p>
                  Модификация формулы Девайна, разработанная для более точного
                  определения идеального веса в клинических условиях.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 52 + 1,9 &times; (рост в дюймах &minus; 60).</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 49 + 1,7 &times; (рост в дюймах &minus; 60).</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Users className="h-5 w-5 text-violet-500" />
                  Формула Miller (1983)
                </h3>
                <p>
                  Даёт несколько более высокие значения идеального веса по сравнению
                  с другими формулами — может быть более реалистичной для людей
                  с крупным телосложением.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 56,2 + 1,41 &times; (рост в дюймах &minus; 60).</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 53,1 + 1,36 &times; (рост в дюймах &minus; 60).</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-amber-500" />
                  Формула Hamwi (1964)
                </h3>
                <p>
                  Одна из старейших формул, предложенная эндокринологом
                  Г. Дж. Хамви. Широко применялась в больницах и до сих пор
                  используется в некоторых клинических рекомендациях.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> 48 + 2,7 &times; (рост в дюймах &minus; 60).</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> 45,5 + 2,2 &times; (рост в дюймах &minus; 60).</span>
                </p>
              </div>

              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <ClipboardList className="h-5 w-5 text-pink-500" />
                  Формула Брока (модифицированная)
                </h3>
                <p>
                  Оригинальная формула Поля Брока (1871): рост &minus; 100.
                  Модифицированная версия добавляет коэффициент <strong className="text-foreground">1,15</strong> и поправку
                  на пол, что делает результат более точным для современных людей.
                </p>
                <p>
                  <span className="block"><strong className="text-foreground">Мужчины:</strong> (рост &minus; 100) &times; 1,15.</span>
                  <span className="block"><strong className="text-foreground">Женщины:</strong> (рост &minus; 110) &times; 1,15.</span>
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3: Почему формулы дают разные результаты */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Users className="h-5 w-5" />
              Почему формулы дают разные результаты
            </h2>
            <p>
              Разница между формулами обычно составляет <strong className="text-foreground">3–7 кг</strong>. Это связано
              с тем, что каждая формула была создана в разное время, на основе
              разных групп людей и с использованием разных методологий.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Users className="h-5 w-5 text-blue-500" />
                  Разные выборки
                </h3>
                <p>
                  Формулы создавались на разных популяциях — от американских
                  солдат до пациентов больниц.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Clock className="h-5 w-5 text-amber-500" />
                  Разные годы
                </h3>
                <p>
                  Формула Хамви (1964) отражает стандарты 60-х, а формулы
                  Робинсона и Миллера (1983) — более современные представления.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-violet-500" />
                  Разные единицы
                </h3>
                <p>
                  Формулы Devine, Robinson, Miller и Hamwi используют дюймы,
                  а формула Брока — сантиметры. Перевод вносит погрешность.
                </p>
              </div>
            </div>
            <p>
              Именно поэтому лучше ориентироваться на <strong className="text-foreground">диапазон</strong> значений,
              а не на одно конкретное число. Если ваш вес попадает в диапазон
              от минимума до максимума по всем формулам — это хороший знак.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4: Ограничения формул */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Ограничения формул идеального веса
            </h2>
            <p>
              Все формулы идеального веса имеют важные ограничения,
              о которых следует помнить.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Clock className="h-5 w-5 text-amber-500" />
                  Не учитывают возраст
                </h3>
                <p>
                  Ни одна из 5 формул не принимает во внимание возраст, хотя
                  с годами состав тела меняется.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Bone className="h-5 w-5 text-orange-500" />
                  Не учитывают телосложение
                </h3>
                <p>
                  Люди с широкой костью (гиперстеники) могут весить больше нормы
                  по формулам и при этом быть здоровыми.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-5 w-5 text-red-500" />
                  Не различают мышцы и жир
                </h3>
                <p>
                  Спортсмены с развитой мускулатурой могут весить существенно
                  больше «идеального» по формулам. Для них точнее{' '}
                  <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                    процент жира в организме
                  </Link>.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-blue-500" />
                  Ограничение по росту
                </h3>
                <p>
                  Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста
                  от <strong className="text-foreground">152 см</strong> (60 дюймов). При меньшем росте результат некорректен.
                </p>
              </div>
            </div>
            <p>
              Для комплексной оценки рекомендуется учитывать{' '}
              <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                ИМТ
              </Link>,{' '}
              <Link href="/zdorovye/telo/protsent-zhira" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                процент жира
              </Link>{' '}
              в организме, обхват талии и общее самочувствие.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5: Примеры расчёта */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Примеры расчёта
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Мужчина, рост 178 см</h3>
                <p>Рост в дюймах: <strong className="text-foreground">70,1</strong></p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Devine: 50 + 2,3 &times; 10,1 = <strong className="text-foreground">73,2 кг</strong></li>
                  <li>Robinson: 52 + 1,9 &times; 10,1 = <strong className="text-foreground">71,2 кг</strong></li>
                  <li>Miller: 56,2 + 1,41 &times; 10,1 = <strong className="text-foreground">70,4 кг</strong></li>
                  <li>Hamwi: 48 + 2,7 &times; 10,1 = <strong className="text-foreground">75,3 кг</strong></li>
                  <li>Брока: (178 &minus; 100) &times; 1,15 = <strong className="text-foreground">89,7 кг</strong></li>
                </ul>
                <p>Диапазон: <strong className="text-foreground">70,4–89,7 кг</strong>, среднее: <strong className="text-foreground">76,0 кг</strong></p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Женщина, рост 165 см</h3>
                <p>Рост в дюймах: <strong className="text-foreground">65,0</strong></p>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Devine: 45,5 + 2,3 &times; 5 = <strong className="text-foreground">57,0 кг</strong></li>
                  <li>Robinson: 49 + 1,7 &times; 5 = <strong className="text-foreground">57,5 кг</strong></li>
                  <li>Miller: 53,1 + 1,36 &times; 5 = <strong className="text-foreground">59,9 кг</strong></li>
                  <li>Hamwi: 45,5 + 2,2 &times; 5 = <strong className="text-foreground">56,5 кг</strong></li>
                  <li>Брока: (165 &minus; 110) &times; 1,15 = <strong className="text-foreground">63,3 кг</strong></li>
                </ul>
                <p>Диапазон: <strong className="text-foreground">56,5–63,3 кг</strong>, среднее: <strong className="text-foreground">58,8 кг</strong></p>
              </div>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой идеальный вес&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 6: Как достичь идеального веса */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Target className="h-5 w-5" />
              Как достичь идеального веса
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingDown className="h-5 w-5 text-amber-500" />
                  Если вес выше идеального
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Рассчитайте{' '}
                    <Link href="/zdorovye/pitanie/kalkulyator-kalorij" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      суточную норму калорий
                    </Link>{' '}
                    и создайте дефицит 300–500 ккал
                  </li>
                  <li>Добавьте регулярную физическую активность</li>
                  <li>Безопасный темп — <strong className="text-foreground">0,5–1 кг</strong> в неделю</li>
                  <li>При большом лишнем весе проконсультируйтесь с врачом</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Если вес ниже идеального
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-primary">
                  <li>Увеличьте калорийность рациона на <strong className="text-foreground">300–500 ккал</strong></li>
                  <li>Добавьте силовые тренировки для набора мышц</li>
                  <li>Ешьте чаще — 4–5 приёмов пищи в день</li>
                  <li>Исключите медицинские причины дефицита веса</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7: Практические советы */}
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
                  <p className="text-foreground font-medium">Ориентируйтесь на диапазон</p>
                  <p>Не стремитесь к конкретному числу — ваш идеальный вес находится в интервале между минимальным и максимальным значениями формул.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Учитывайте состав тела</p>
                  <p>Процент жира и мышечная масса важнее цифры на весах. Два человека одного роста и веса могут выглядеть и чувствовать себя совершенно по-разному.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Измеряйте обхват талии</p>
                  <p>Для мужчин здоровый показатель — до <strong className="text-foreground">94 см</strong>, для женщин — до <strong className="text-foreground">80 см</strong>. Это более надёжный маркер здоровья, чем вес.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  4
                </span>
                <div>
                  <p className="text-foreground font-medium">Используйте несколько показателей</p>
                  <p>Комбинируйте формулы идеального веса с{' '}
                    <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      ИМТ
                    </Link>{' '}
                    и{' '}
                    <Link href="/zdorovye/telo/bazovyj-metabolizm" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      базовым метаболизмом
                    </Link>{' '}
                    для полной картины.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  5
                </span>
                <div>
                  <p className="text-foreground font-medium">Не спешите</p>
                  <p>Безопасная скорость изменения веса — <strong className="text-foreground">0,5–1 кг</strong> в неделю. Резкие изменения вредят здоровью и приводят к обратному набору.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-sm rounded-md bg-muted p-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
              <p>
                Формулы идеального веса — ориентир, а не диагноз. При серьёзных
                отклонениях от нормы проконсультируйтесь с врачом.
              </p>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать свой идеальный вес&nbsp;&rarr;
              </a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 8: Таблица нормального веса по росту */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Нормальный вес по росту (ИМТ 18,5–24,9)
            </h2>
            <p>
              В таблице приведён диапазон здорового веса по{' '}
              <Link href="/zdorovye/telo/kalkulyator-imt" className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                индексу массы тела
              </Link>{' '}
              (ИМТ 18,5–24,9) для разного роста. Формулы идеального веса обычно
              попадают в этот диапазон.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Рост</th>
                    <th className="py-2 px-2 font-semibold text-foreground whitespace-nowrap">Мин. вес</th>
                    <th className="py-2 pl-2 font-semibold text-foreground whitespace-nowrap">Макс. вес</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">155 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">44</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">60</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">160 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">47</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">64</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">165 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">50</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">68</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">170 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">53</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">72</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">175 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">57</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">76</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">180 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">60</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">81</strong> кг</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 whitespace-nowrap">185 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">63</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">85</strong> кг</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 whitespace-nowrap">190 см</td>
                    <td className="py-2 px-2 whitespace-nowrap"><strong className="text-foreground">67</strong> кг</td>
                    <td className="py-2 pl-2 whitespace-nowrap"><strong className="text-foreground">90</strong> кг</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <a href="#calculator" className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors">
                Рассчитать точнее по 5 формулам&nbsp;&rarr;
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
                  Какая формула идеального веса самая точная?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наиболее распространённой считается формула <strong className="text-foreground">Devine (1974)</strong>,
                  которая используется в клинической практике для дозирования
                  лекарств. Однако ни одна формула не является абсолютно точной —
                  лучше ориентироваться на диапазон значений по нескольким формулам.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Почему разные формулы дают разные результаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формулы создавались в разные годы, на разных выборках населения
                  и с разными методологиями. Например, формулы Devine и Robinson
                  используют дюймы, а формула Брока — сантиметры. Разброс
                  в <strong className="text-foreground">3–7 кг</strong> считается нормальным.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Учитывают ли формулы возраст?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Классические формулы идеального веса (Devine, Robinson, Miller,
                  Hamwi, Брока) <strong className="text-foreground">не учитывают возраст</strong> — они основаны только
                  на росте и поле. Для более точной оценки рекомендуется
                  дополнительно учитывать ИМТ и процент жира.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли использовать калькулятор при росте ниже 152 см?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста
                  от <strong className="text-foreground">152 см</strong> (60 дюймов). При меньшем росте результат может
                  быть неточным. Формула Брока работает для любого роста, но также
                  имеет свои ограничения.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как часто нужно пересчитывать идеальный вес?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Идеальный вес по формулам зависит от роста и пола — он не меняется
                  с возрастом. Однако пересчёт полезен, если вы набрали или сбросили
                  вес: калькулятор покажет, насколько ваш текущий вес далёк от
                  идеального диапазона.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Идеальный вес одинаков для всех возрастов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Формулы дают одинаковый результат независимо от возраста. Но врачи
                  отмечают, что после <strong className="text-foreground">50 лет</strong> небольшое превышение нормы
                  (ИМТ 25–27) не связано с повышенными рисками. Ориентируйтесь
                  на самочувствие и комплексные показатели.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой показатель точнее — ИМТ или идеальный вес?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ИМТ и идеальный вес — это дополняющие друг друга показатели. ИМТ
                  оценивает соотношение веса к росту по шкале ВОЗ, а формулы
                  идеального веса дают конкретное целевое число. Для полной картины
                  используйте оба показателя вместе
                  с <strong className="text-foreground">процентом жира</strong>.
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
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Percent className="h-4 w-4 text-muted-foreground" />
                Процент жира
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
                <Target className="h-4 w-4 text-muted-foreground" />
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
