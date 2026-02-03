import { Metadata } from 'next'
import Link from 'next/link'
import { BodyTypeCalculator } from '@/components/calculators/BodyTypeCalculator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  ChevronRight,
  User,
  Info,
  Calculator,
  CircleHelp,
  ArrowUpRight,
  Scale,
  Target,
  Activity,
  Flame,
  Dumbbell,
  Utensils,
  Ruler,
  Lightbulb,
  BookOpen,
  Compass,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Тип телосложения — эктоморф, мезоморф или эндоморф онлайн',
  description:
    'Бесплатный тест на тип телосложения ✓ Определение по обхвату запястья ✓ Эктоморф, мезоморф, эндоморф ✓ Рекомендации по питанию и тренировкам.',
  keywords: [
    'тип телосложения',
    'эктоморф мезоморф эндоморф',
    'определить тип телосложения',
    'тест на тип телосложения',
    'соматотип',
    'обхват запястья',
    'индекс Соловьёва',
  ],
  openGraph: {
    title: 'Тип телосложения — эктоморф, мезоморф или эндоморф онлайн',
    description:
      'Бесплатный тест на тип телосложения. Определение по обхвату запястья с рекомендациями по питанию и тренировкам.',
    type: 'website',
    url: '/zdorovye/telo/tip-teloslozheniya',
  },
  alternates: {
    canonical: '/zdorovye/telo/tip-teloslozheniya',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Калькулятор типа телосложения',
      description:
        'Онлайн определение типа телосложения по обхвату запястья с рекомендациями',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'RUB',
      },
      featureList: [
        'Определение типа телосложения по обхвату запястья',
        'Расчёт индекса Соловьёва',
        'Рекомендации по питанию',
        'Рекомендации по тренировкам',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Как определить тип телосложения по запястью?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Измерьте обхват запястья в самом узком месте (чуть ниже косточки). Для мужчин: менее 17 см — эктоморф, 17-20 см — мезоморф, более 20 см — эндоморф. Для женщин границы: 15 и 17 см соответственно.',
          },
        },
        {
          '@type': 'Question',
          name: 'Можно ли изменить тип телосложения?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Тип телосложения определяется генетически и не может быть изменён. Однако правильное питание и тренировки позволяют существенно изменить внешний вид тела и улучшить пропорции независимо от соматотипа.',
          },
        },
        {
          '@type': 'Question',
          name: 'Что такое индекс Соловьёва?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Индекс Соловьёва — это отношение роста к обхвату запястья. Он помогает уточнить тип телосложения: значение выше 10.4 указывает на астенический тип (эктоморф), 10.4-9.6 — нормостенический (мезоморф), ниже 9.6 — гиперстенический (эндоморф).',
          },
        },
        {
          '@type': 'Question',
          name: 'Какой тип телосложения лучше для спорта?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Каждый тип имеет преимущества в разных видах спорта. Эктоморфы успешны в беге на длинные дистанции и баскетболе. Мезоморфы преуспевают в силовых видах и единоборствах. Эндоморфы сильны в тяжёлой атлетике и борьбе.',
          },
        },
        {
          '@type': 'Question',
          name: 'Как питаться эктоморфу для набора массы?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Эктоморфам необходим профицит калорий 300-500 ккал от нормы, 5-6 приёмов пищи в день, повышенное потребление белка (1.6-2 г/кг) и сложных углеводов. Важно не пропускать приёмы пищи и есть даже без чувства голода.',
          },
        },
        {
          '@type': 'Question',
          name: 'Как похудеть эндоморфу?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Эндоморфам рекомендуется умеренный дефицит калорий (300-500 ккал), ограничение простых углеводов, много кардио (4-5 раз в неделю), высокобелковая диета (1.8-2.2 г/кг) и регулярные силовые тренировки для сохранения мышц.',
          },
        },
        {
          '@type': 'Question',
          name: 'Существуют ли смешанные типы телосложения?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Да, большинство людей имеют смешанный тип телосложения: экто-мезоморф, эндо-мезоморф и т.д. Чистые типы встречаются редко. При определении ориентируйтесь на преобладающий тип.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'Как определить тип телосложения',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Укажите пол',
          text: 'Выберите ваш пол — границы типов различаются для мужчин и женщин.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Измерьте запястье',
          text: 'Измерьте обхват запястья в самом узком месте (чуть ниже косточки) и укажите значение.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Получите результат',
          text: 'Калькулятор определит ваш тип телосложения и даст рекомендации по питанию и тренировкам.',
        },
      ],
    },
    {
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
          name: 'Тип телосложения',
          item: 'https://calc-box.ru/zdorovye/telo/tip-teloslozheniya',
        },
      ],
    },
  ],
}

export default function BodyTypePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Главная
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/zdorovye/telo" className="hover:text-foreground transition-colors">
            Тело
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Тип телосложения</span>
        </nav>

        {/* Заголовок */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Тип телосложения — онлайн определение
          </h1>
          <p className="text-lg text-muted-foreground">
            Определите свой соматотип по обхвату запястья. Узнайте особенности вашего типа
            телосложения и получите персональные рекомендации по питанию и тренировкам.
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
              <p>Выберите ваш пол — границы типов различаются для мужчин и женщин.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                2
              </span>
              <p>Измерьте обхват запястья в самом узком месте и укажите значение.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                3
              </span>
              <p>Получите результат с описанием типа и рекомендациями по питанию и тренировкам.</p>
            </div>
          </div>
        </section>

        {/* Калькулятор */}
        <section className="mb-12" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">
            Определение типа телосложения
          </h2>
          <BodyTypeCalculator />
        </section>

        {/* Вам также будет полезно */}
        <div className="mb-10 space-y-3">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/zdorovye/telo/idealnyj-ves"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Target className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Идеальный вес
              </span>
            </Link>
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
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Activity className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Базовый метаболизм
              </span>
            </Link>
            <Link
              href="/zdorovye/sport/belok-dlya-sportsmenov"
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent group"
            >
              <Dumbbell className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                Норма белка
              </span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-8 text-sm text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Что такое тип телосложения
            </h2>
            <p>
              <strong className="text-foreground">Тип телосложения</strong> (или соматотип) — это
              совокупность пропорций тела, особенностей костной структуры и распределения
              мышечной и жировой ткани, которые определяются генетически. Понимание своего типа
              телосложения помогает правильно подобрать питание и тренировочную программу.
            </p>
            <p>
              Классификация соматотипов была разработана американским психологом Уильямом Шелдоном
              в 1940-х годах. Он выделил три основных типа:{' '}
              <strong className="text-foreground">эктоморф</strong>,{' '}
              <strong className="text-foreground">мезоморф</strong> и{' '}
              <strong className="text-foreground">эндоморф</strong>. Каждый тип имеет свои
              особенности метаболизма и реагирования на физические нагрузки.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Методы определения типа телосложения
            </h2>
            <p>
              Существует несколько методов определения соматотипа. Наиболее простой и доступный —{' '}
              <strong className="text-foreground">измерение обхвата запястья</strong>. Этот метод
              основан на том, что толщина костей запястья практически не зависит от количества
              мышечной или жировой ткани.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Ruler className="h-4 w-4 text-blue-400" />
                  Метод обхвата запястья
                </h3>
                <p>
                  Измерьте обхват запястья в самом узком месте (чуть ниже косточки) сантиметровой
                  лентой. Сравните результат с таблицей для вашего пола.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Calculator className="h-4 w-4 text-green-400" />
                  Индекс Соловьёва
                </h3>
                <p>
                  Отношение роста к обхвату запястья. Более точный метод, учитывающий
                  пропорциональность тела. Значение выше 10.4 — эктоморф, 9.6–10.4 — мезоморф,
                  ниже 9.6 — эндоморф.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Таблица границ */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <User className="h-5 w-5" />
              Таблица определения типа по запястью
            </h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-2 font-semibold text-foreground">Тип</th>
                    <th className="py-2 px-2 font-semibold text-foreground">Мужчины</th>
                    <th className="py-2 pl-2 font-semibold text-foreground">Женщины</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 font-medium text-blue-600">Эктоморф</td>
                    <td className="py-2 px-2 whitespace-nowrap">&lt;17 см</td>
                    <td className="py-2 pl-2 whitespace-nowrap">&lt;15 см</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-2 font-medium text-green-600">Мезоморф</td>
                    <td className="py-2 px-2 whitespace-nowrap">17–20 см</td>
                    <td className="py-2 pl-2 whitespace-nowrap">15–17 см</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 font-medium text-orange-600">Эндоморф</td>
                    <td className="py-2 px-2 whitespace-nowrap">&gt;20 см</td>
                    <td className="py-2 pl-2 whitespace-nowrap">&gt;17 см</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm">
            <a
              href="#calculator"
              className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"
            >
              Определить свой тип&nbsp;→
            </a>
          </p>

          <hr className="border-border" />

          {/* Блок 4 — Эктоморф */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <User className="h-5 w-5" />
              Эктоморф — тонкокостный тип
            </h2>
            <p>
              <strong className="text-foreground">Эктоморфы</strong> — люди с астеническим типом
              телосложения. Для них характерны узкие плечи, длинные конечности, тонкие кости и
              быстрый метаболизм. Эктоморфам сложно набирать как мышечную массу, так и жировую.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для эктоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Профицит калорий 300–500 ккал</li>
                  <li>• 5–6 приёмов пищи в день</li>
                  <li>• Белок: 1.6–2 г на кг массы</li>
                  <li>• Много сложных углеводов</li>
                  <li>• Полезные жиры (орехи, авокадо)</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для эктоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Акцент на базовые упражнения</li>
                  <li>• 3–4 тренировки в неделю</li>
                  <li>• Тяжёлые веса, 6–10 повторений</li>
                  <li>• Длинный отдых между подходами</li>
                  <li>• Минимум кардио</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Мезоморф */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <User className="h-5 w-5" />
              Мезоморф — атлетический тип
            </h2>
            <p>
              <strong className="text-foreground">Мезоморфы</strong> — люди с нормостеническим
              типом телосложения. Для них характерны широкие плечи, узкая талия, атлетичное
              телосложение и сбалансированный метаболизм. Мезоморфы легко набирают мышечную массу
              и хорошо реагируют на любые тренировки.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для мезоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Сбалансированная калорийность</li>
                  <li>• 40% углеводов, 30% белка, 30% жиров</li>
                  <li>• Белок: 1.4–1.8 г на кг массы</li>
                  <li>• Контроль размера порций</li>
                  <li>• Разнообразное питание</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для мезоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Комбинация силовых и кардио</li>
                  <li>• 4–5 тренировок в неделю</li>
                  <li>• Разнообразие упражнений</li>
                  <li>• Смена программы каждые 6–8 недель</li>
                  <li>• Кардио 2–3 раза по 30–40 мин</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Эндоморф */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <User className="h-5 w-5" />
              Эндоморф — ширококостный тип
            </h2>
            <p>
              <strong className="text-foreground">Эндоморфы</strong> — люди с гиперстеническим
              типом телосложения. Для них характерны широкие кости, округлые формы тела и
              медленный метаболизм. Эндоморфы легко набирают вес (как мышцы, так и жир), но с
              трудом его теряют.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для эндоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Дефицит калорий 300–500 ккал</li>
                  <li>• Белок: 1.8–2.2 г на кг массы</li>
                  <li>• Ограничение простых углеводов</li>
                  <li>• Много овощей и клетчатки</li>
                  <li>• Контроль порций</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для эндоморфа
                </h3>
                <ul className="space-y-1">
                  <li>• Акцент на кардио 4–5 раз в неделю</li>
                  <li>• Силовые 3–4 раза в неделю</li>
                  <li>• Круговые и HIIT-тренировки</li>
                  <li>• Короткий отдых между подходами</li>
                  <li>• Высокая дневная активность</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Смешанные типы */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              Смешанные типы телосложения
            </h2>
            <p>
              На практике чистые соматотипы встречаются редко. Большинство людей имеют{' '}
              <strong className="text-foreground">смешанный тип телосложения</strong> с
              преобладанием характеристик одного из типов. Наиболее распространённые комбинации:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Экто-мезоморф</h3>
                <p>
                  Высокий рост, длинные конечности, но с хорошим потенциалом для набора мышц.
                  Часто встречается среди баскетболистов и пловцов.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Мезо-эндоморф</h3>
                <p>
                  Атлетичное телосложение со склонностью к набору веса. Требует контроля питания
                  для поддержания формы.
                </p>
              </div>
              <div className="rounded-lg border p-3 space-y-1.5">
                <h3 className="font-semibold text-foreground">Эндо-мезоморф</h3>
                <p>
                  Крупное телосложение с хорошим мышечным потенциалом. Типичен для пауэрлифтеров
                  и борцов.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Важно знать */}
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
                  <p className="text-foreground font-medium">Тип телосложения — не приговор</p>
                  <p>
                    Правильное питание и регулярные тренировки позволяют достичь отличных
                    результатов независимо от генетики.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  2
                </span>
                <div>
                  <p className="text-foreground font-medium">Метаболизм можно ускорить</p>
                  <p>
                    Наращивание мышечной массы увеличивает базовый обмен веществ, что помогает даже
                    эндоморфам контролировать вес.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground">
                  3
                </span>
                <div>
                  <p className="text-foreground font-medium">Результат требует времени</p>
                  <p>
                    Не ожидайте быстрых изменений. Устойчивый прогресс достигается месяцами
                    последовательной работы.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm">
            <a
              href="#calculator"
              className="inline-flex items-center gap-1 text-primary font-medium rounded-md bg-primary/5 px-2.5 py-1 hover:bg-primary/10 transition-colors"
            >
              Определить свой тип&nbsp;→
            </a>
          </p>

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
                  Как определить тип телосложения по запястью?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Измерьте обхват запястья в самом узком месте (чуть ниже косточки). Для мужчин:
                  менее <strong className="text-foreground">17</strong> см — эктоморф,{' '}
                  <strong className="text-foreground">17–20</strong> см — мезоморф, более{' '}
                  <strong className="text-foreground">20</strong> см — эндоморф. Для женщин
                  границы: <strong className="text-foreground">15</strong> и{' '}
                  <strong className="text-foreground">17</strong> см соответственно.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Можно ли изменить тип телосложения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Тип телосложения определяется генетически и не может быть изменён. Однако
                  правильное питание и тренировки позволяют существенно изменить внешний вид тела
                  и улучшить пропорции.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Что такое индекс Соловьёва?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Индекс Соловьёва — это отношение роста к обхвату запястья. Он помогает уточнить
                  тип телосложения: значение выше <strong className="text-foreground">10.4</strong>{' '}
                  — эктоморф, <strong className="text-foreground">9.6–10.4</strong> — мезоморф,
                  ниже <strong className="text-foreground">9.6</strong> — эндоморф.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Какой тип телосложения лучше для спорта?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Каждый тип имеет преимущества в разных видах спорта. Эктоморфы успешны в беге на
                  длинные дистанции. Мезоморфы — в силовых видах. Эндоморфы — в тяжёлой атлетике и
                  борьбе.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как питаться эктоморфу для набора массы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Эктоморфам необходим профицит калорий{' '}
                  <strong className="text-foreground">300–500</strong> ккал,{' '}
                  <strong className="text-foreground">5–6</strong> приёмов пищи в день, повышенное
                  потребление белка (<strong className="text-foreground">1.6–2</strong> г/кг) и
                  сложных углеводов. Важно не пропускать приёмы пищи.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Как похудеть эндоморфу?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Эндоморфам рекомендуется умеренный дефицит калорий (
                  <strong className="text-foreground">300–500</strong> ккал), ограничение простых
                  углеводов, много кардио, высокобелковая диета и регулярные силовые тренировки.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  Существуют ли смешанные типы телосложения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, большинство людей имеют смешанный тип: экто-мезоморф, эндо-мезоморф и т.д.
                  Чистые типы встречаются редко. При определении ориентируйтесь на преобладающий
                  тип.
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
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Flame className="h-4 w-4 text-muted-foreground" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Activity className="h-4 w-4 text-muted-foreground" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/sport/belok-dlya-sportsmenov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
                Норма белка
              </Link>
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-primary"
              >
                <User className="h-4 w-4 text-muted-foreground" />
                Процент жира
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
