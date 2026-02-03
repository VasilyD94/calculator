import { Metadata } from 'next'
import Link from 'next/link'
import { BodyTypeCalculator } from '@/components/calculators/BodyTypeCalculator'
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
  CheckCircle2,
  Lightbulb,
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
          name: 'Укажите пол',
          text: 'Выберите ваш пол — границы типов различаются для мужчин и женщин.',
        },
        {
          '@type': 'HowToStep',
          name: 'Измерьте запястье',
          text: 'Измерьте обхват запястья в самом узком месте (чуть ниже косточки) и укажите значение.',
        },
        {
          '@type': 'HowToStep',
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
        <div className="mb-8 rounded-lg border bg-muted/30 p-4">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Как пользоваться калькулятором
          </h2>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                1
              </span>
              <span>Выберите ваш пол — границы типов различаются для мужчин и женщин.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                2
              </span>
              <span>Измерьте обхват запястья в самом узком месте и укажите значение.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                3
              </span>
              <span>
                Получите результат с описанием типа и рекомендациями по питанию и тренировкам.
              </span>
            </li>
          </ol>
        </div>

        {/* Калькулятор */}
        <BodyTypeCalculator />

        {/* Полезные ссылки */}
        <div className="mt-8 mb-10 rounded-lg border bg-muted/30 p-4">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <ArrowUpRight className="h-5 w-5 text-primary" />
            Вам также будет полезно
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            <Link
              href="/zdorovye/telo/idealnyj-ves"
              className="flex items-center gap-2 rounded-md border bg-background p-3 text-sm hover:bg-accent transition-colors"
            >
              <Target className="h-4 w-4 text-primary" />
              <span>Идеальный вес</span>
            </Link>
            <Link
              href="/zdorovye/pitanie/kalkulyator-kalorij"
              className="flex items-center gap-2 rounded-md border bg-background p-3 text-sm hover:bg-accent transition-colors"
            >
              <Flame className="h-4 w-4 text-primary" />
              <span>Калькулятор калорий</span>
            </Link>
            <Link
              href="/zdorovye/telo/bazovyj-metabolizm"
              className="flex items-center gap-2 rounded-md border bg-background p-3 text-sm hover:bg-accent transition-colors"
            >
              <Activity className="h-4 w-4 text-primary" />
              <span>Базовый метаболизм</span>
            </Link>
            <Link
              href="/zdorovye/sport/belok-dlya-sportsmenov"
              className="flex items-center gap-2 rounded-md border bg-background p-3 text-sm hover:bg-accent transition-colors"
            >
              <Dumbbell className="h-4 w-4 text-primary" />
              <span>Норма белка</span>
            </Link>
          </div>
        </div>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="h-6 w-6" />
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
              в 1940-х годах. Он выделил три основных типа: <strong className="text-foreground">
              эктоморф</strong>, <strong className="text-foreground">мезоморф</strong> и{' '}
              <strong className="text-foreground">эндоморф</strong>. Каждый тип имеет свои
              особенности метаболизма и реагирования на физические нагрузки.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              Методы определения типа телосложения
            </h2>
            <p>
              Существует несколько методов определения соматотипа. Наиболее простой и доступный —{' '}
              <strong className="text-foreground">измерение обхвата запястья</strong>. Этот метод
              основан на том, что толщина костей запястья практически не зависит от количества
              мышечной или жировой ткани.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-blue-400" />
                  Метод обхвата запястья
                </h3>
                <p className="text-sm">
                  Измерьте обхват запястья в самом узком месте (чуть ниже косточки) сантиметровой
                  лентой. Сравните результат с таблицей для вашего пола.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-green-400" />
                  Индекс Соловьёва
                </h3>
                <p className="text-sm">
                  Отношение роста к обхвату запястья. Более точный метод, учитывающий
                  пропорциональность тела. Значение выше 10.4 — эктоморф, 9.6–10.4 — мезоморф,
                  ниже 9.6 — эндоморф.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Таблица границ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <User className="h-6 w-6" />
              Таблица определения типа по запястью
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold text-foreground">Тип</th>
                    <th className="text-center p-3 font-semibold text-foreground">Мужчины</th>
                    <th className="text-center p-3 font-semibold text-foreground">Женщины</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-blue-50/50">
                    <td className="p-3 font-medium text-blue-700">Эктоморф</td>
                    <td className="p-3 text-center">&lt; 17 см</td>
                    <td className="p-3 text-center">&lt; 15 см</td>
                  </tr>
                  <tr className="border-b bg-green-50/50">
                    <td className="p-3 font-medium text-green-700">Мезоморф</td>
                    <td className="p-3 text-center">17–20 см</td>
                    <td className="p-3 text-center">15–17 см</td>
                  </tr>
                  <tr className="bg-orange-50/50">
                    <td className="p-3 font-medium text-orange-700">Эндоморф</td>
                    <td className="p-3 text-center">&gt; 20 см</td>
                    <td className="p-3 text-center">&gt; 17 см</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Эктоморф */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <User className="h-6 w-6 text-blue-500" />
              Эктоморф — тонкокостный тип
            </h2>
            <p>
              <strong className="text-foreground">Эктоморфы</strong> — люди с астеническим типом
              телосложения. Для них характерны узкие плечи, длинные конечности, тонкие кости и
              быстрый метаболизм. Эктоморфам сложно набирать как мышечную массу, так и жировую.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для эктоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Профицит калорий 300-500 ккал</li>
                  <li>• 5-6 приёмов пищи в день</li>
                  <li>• Белок: 1.6-2 г на кг массы</li>
                  <li>• Много сложных углеводов</li>
                  <li>• Полезные жиры (орехи, авокадо)</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для эктоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Акцент на базовые упражнения</li>
                  <li>• 3-4 тренировки в неделю</li>
                  <li>• Тяжёлые веса, 6-10 повторений</li>
                  <li>• Длинный отдых между подходами</li>
                  <li>• Минимум кардио</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Мезоморф */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <User className="h-6 w-6 text-green-500" />
              Мезоморф — атлетический тип
            </h2>
            <p>
              <strong className="text-foreground">Мезоморфы</strong> — люди с нормостеническим
              типом телосложения. Для них характерны широкие плечи, узкая талия, атлетичное
              телосложение и сбалансированный метаболизм. Мезоморфы легко набирают мышечную массу
              и хорошо реагируют на любые тренировки.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для мезоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Сбалансированная калорийность</li>
                  <li>• 40% углеводов, 30% белка, 30% жиров</li>
                  <li>• Белок: 1.4-1.8 г на кг массы</li>
                  <li>• Контроль размера порций</li>
                  <li>• Разнообразное питание</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для мезоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Комбинация силовых и кардио</li>
                  <li>• 4-5 тренировок в неделю</li>
                  <li>• Разнообразие упражнений</li>
                  <li>• Смена программы каждые 6-8 недель</li>
                  <li>• Кардио 2-3 раза по 30-40 мин</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — Эндоморф */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <User className="h-6 w-6 text-orange-500" />
              Эндоморф — ширококостный тип
            </h2>
            <p>
              <strong className="text-foreground">Эндоморфы</strong> — люди с гиперстеническим
              типом телосложения. Для них характерны широкие кости, округлые формы тела и
              медленный метаболизм. Эндоморфы легко набирают вес (как мышцы, так и жир), но с
              трудом его теряют.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-amber-400" />
                  Питание для эндоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Дефицит калорий 300-500 ккал</li>
                  <li>• Белок: 1.8-2.2 г на кг массы</li>
                  <li>• Ограничение простых углеводов</li>
                  <li>• Много овощей и клетчатки</li>
                  <li>• Контроль порций</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-green-400" />
                  Тренировки для эндоморфа
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Акцент на кардио 4-5 раз в неделю</li>
                  <li>• Силовые 3-4 раза в неделю</li>
                  <li>• Круговые и HIIT-тренировки</li>
                  <li>• Короткий отдых между подходами</li>
                  <li>• Высокая дневная активность</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 7 — Смешанные типы */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="h-6 w-6" />
              Смешанные типы телосложения
            </h2>
            <p>
              На практике чистые соматотипы встречаются редко. Большинство людей имеют{' '}
              <strong className="text-foreground">смешанный тип телосложения</strong> с
              преобладанием характеристик одного из типов. Наиболее распространённые комбинации:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Экто-мезоморф</h3>
                <p className="text-sm">
                  Высокий рост, длинные конечности, но с хорошим потенциалом для набора мышц.
                  Часто встречается среди баскетболистов и пловцов.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Мезо-эндоморф</h3>
                <p className="text-sm">
                  Атлетичное телосложение со склонностью к набору веса. Требует контроля питания
                  для поддержания формы.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Эндо-мезоморф</h3>
                <p className="text-sm">
                  Крупное телосложение с хорошим мышечным потенциалом. Типичен для пауэрлифтеров
                  и борцов.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 8 — Важно знать */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Важно знать
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Тип телосложения — не приговор.</strong>{' '}
                  Правильное питание и регулярные тренировки позволяют достичь отличных
                  результатов независимо от генетики.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Метаболизм можно ускорить.</strong>{' '}
                  Наращивание мышечной массы увеличивает базовый обмен веществ, что помогает даже
                  эндоморфам контролировать вес.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Результат требует времени.</strong>{' '}
                  Не ожидайте быстрых изменений. Устойчивый прогресс достигается месяцами
                  последовательной работы.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#calculator"
            className="block text-center text-primary hover:underline font-medium"
          >
            ↑ Вернуться к калькулятору
          </Link>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <CircleHelp className="h-6 w-6" />
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как определить тип телосложения по запястью?
                </h3>
                <p>
                  Измерьте обхват запястья в самом узком месте (чуть ниже косточки). Для мужчин:
                  менее 17 см — эктоморф, 17-20 см — мезоморф, более 20 см — эндоморф. Для женщин
                  границы: 15 и 17 см соответственно.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Можно ли изменить тип телосложения?
                </h3>
                <p>
                  Тип телосложения определяется генетически и не может быть изменён. Однако
                  правильное питание и тренировки позволяют существенно изменить внешний вид тела
                  и улучшить пропорции.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Что такое индекс Соловьёва?</h3>
                <p>
                  Индекс Соловьёва — это отношение роста к обхвату запястья. Он помогает уточнить
                  тип телосложения: значение выше 10.4 — эктоморф, 9.6-10.4 — мезоморф, ниже 9.6
                  — эндоморф.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Какой тип телосложения лучше для спорта?
                </h3>
                <p>
                  Каждый тип имеет преимущества в разных видах спорта. Эктоморфы успешны в беге
                  на длинные дистанции. Мезоморфы — в силовых видах. Эндоморфы — в тяжёлой
                  атлетике и борьбе.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как питаться эктоморфу для набора массы?
                </h3>
                <p>
                  Эктоморфам необходим профицит калорий 300-500 ккал, 5-6 приёмов пищи в день,
                  повышенное потребление белка (1.6-2 г/кг) и сложных углеводов. Важно не
                  пропускать приёмы пищи.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Как похудеть эндоморфу?</h3>
                <p>
                  Эндоморфам рекомендуется умеренный дефицит калорий (300-500 ккал), ограничение
                  простых углеводов, много кардио, высокобелковая диета и регулярные силовые
                  тренировки.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Существуют ли смешанные типы телосложения?
                </h3>
                <p>
                  Да, большинство людей имеют смешанный тип: экто-мезоморф, эндо-мезоморф и т.д.
                  Чистые типы встречаются редко. При определении ориентируйтесь на преобладающий
                  тип.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-4" aria-label="Связанные калькуляторы">
            <h2 className="text-2xl font-bold text-foreground">Связанные калькуляторы</h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Scale className="h-3.5 w-3.5" />
                Калькулятор ИМТ
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Target className="h-3.5 w-3.5" />
                Идеальный вес
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Flame className="h-3.5 w-3.5" />
                Калькулятор калорий
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Activity className="h-3.5 w-3.5" />
                Базовый метаболизм
              </Link>
              <Link
                href="/zdorovye/sport/belok-dlya-sportsmenov"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <Dumbbell className="h-3.5 w-3.5" />
                Норма белка
              </Link>
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <User className="h-3.5 w-3.5" />
                Процент жира
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
