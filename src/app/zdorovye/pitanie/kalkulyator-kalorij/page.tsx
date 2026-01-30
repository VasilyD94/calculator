import type { Metadata } from 'next'
import Link from 'next/link'
import { CalorieCalculator } from '@/components/calculators/CalorieCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор калорий онлайн — расчёт суточной нормы бесплатно',
  description:
    'Бесплатный калькулятор калорий: расчёт по 5 формулам, сравнение результатов, калории для похудения и набора массы, расчёт БЖУ.',
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
              name: 'Калькулятор калорий',
              item: 'https://calcbox.ru/zdorovye/pitanie/kalkulyator-kalorij',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор калорий онлайн
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму калорий по 5 научным формулам.
            Результат обновляется мгновенно при изменении параметров.
          </p>
        </header>

        <section className="mb-12">
          <CalorieCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое калории и зачем их считать
            </h2>
            <p>
              Калория — это единица измерения энергии, которую организм получает
              из пищи. Каждый продукт содержит определённое количество калорий:
              белки и углеводы дают по 4 ккал на грамм, жиры — 9 ккал.
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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Какие формулы использует калькулятор
            </h2>
            <p>
              Наш калькулятор рассчитывает норму калорий по 5 научно
              обоснованным формулам и показывает результат каждой, чтобы вы
              могли сравнить:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Миффлина-Сан Жеора (1990)</strong>{' '}
                — считается наиболее точной для современных людей. Рекомендована
                Американской диетической ассоциацией.
              </li>
              <li>
                <strong className="text-foreground">Харриса-Бенедикта (1919)</strong>{' '}
                — одна из первых научных формул расчёта метаболизма. Пересмотрена
                в 1984 году с уточнёнными коэффициентами.
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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое BMR и TDEE
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  BMR — базовый метаболизм
                </h3>
                <p className="text-sm">
                  Количество калорий, которое организм тратит в состоянии
                  полного покоя: дыхание, кровообращение, работа мозга
                  и внутренних органов.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  TDEE — суточный расход
                </h3>
                <p className="text-sm">
                  BMR с учётом физической активности. Именно TDEE является
                  вашей реальной нормой калорий — от него отталкиваются при
                  составлении рациона.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как пользоваться калькулятором
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                <p>
                  Укажите пол, возраст, рост, вес и уровень физической
                  активности.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                <p>
                  Результат появится мгновенно — без нажатия кнопки.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                <p>
                  Передвигайте ползунок желаемого веса — калькулятор
                  автоматически определит цель и покажет рекомендации по
                  калорийности и БЖУ.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border p-5">
              <h2 className="text-xl font-bold text-foreground">
                Для похудения
              </h2>
              <p>
                Создайте дефицит 300–500 ккал от суточной нормы. Это позволит
                терять 0,5–1 кг в неделю без вреда для здоровья.
              </p>
              <p className="text-sm rounded-md bg-destructive/10 text-destructive p-3">
                Не опускайтесь ниже{' '}
                <strong>1200 ккал для женщин</strong> и{' '}
                <strong>1500 ккал для мужчин</strong> без наблюдения врача.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border p-5">
              <h2 className="text-xl font-bold text-foreground">
                Для набора массы
              </h2>
              <p>
                Оптимальный профицит — 300–500 ккал в день. При таком подходе
                вы набираете преимущественно мышечную массу, а не жир.
              </p>
              <p className="text-sm rounded-md bg-primary/5 text-foreground p-3">
                Рекомендуется{' '}
                <strong>1,6–2 г белка на кг веса</strong> в день для
                оптимального роста мышц.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Роль белков, жиров и углеводов
            </h2>
            <p>
              Помимо общей калорийности, важно соотношение
              макронутриентов — БЖУ:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-1">
                <h3 className="font-semibold text-foreground">Белки</h3>
                <p className="text-sm">
                  Строительный материал для мышц, иммунной системы и гормонов.
                  При похудении помогают сохранить мышечную массу.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-1">
                <h3 className="font-semibold text-foreground">Жиры</h3>
                <p className="text-sm">
                  Необходимы для усвоения витаминов, выработки гормонов
                  и работы нервной системы. Минимум — 0,8 г на кг веса.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-1">
                <h3 className="font-semibold text-foreground">Углеводы</h3>
                <p className="text-sm">
                  Основной источник энергии для мозга и мышц. Предпочтительны
                  сложные: крупы, овощи, цельнозерновые продукты.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Какая формула расчёта калорий самая точная?
                </h3>
                <p>
                  Формула Миффлина-Сан Жеора считается наиболее точной для
                  большинства людей. Если вы знаете свой процент жира, формула
                  Кетча-МакАрдла может дать более точный результат.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Нужно ли считать калории каждый день?
                </h3>
                <p>
                  На начальном этапе рекомендуется считать калории 2–4 недели,
                  чтобы выработать понимание размеров порций. После этого
                  многие переходят на интуитивное питание.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Почему разные формулы дают разные результаты?
                </h3>
                <p>
                  Каждая формула разработана на основе разных исследований.
                  Разница обычно составляет 100–200 ккал. Ориентируйтесь на
                  формулу Миффлина-Сан Жеора и корректируйте калорийность по
                  результатам через 2–3 недели.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Связанные калькуляторы */}
          <nav className="space-y-4" aria-label="Связанные калькуляторы">
            <h2 className="text-2xl font-bold text-foreground">
              Связанные калькуляторы
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Калькулятор ИМТ
                </h3>
                <p className="text-sm mt-1">
                  Рассчитайте индекс массы тела и узнайте, в норме ли ваш вес.
                </p>
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-bzhu"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Калькулятор БЖУ
                </h3>
                <p className="text-sm mt-1">
                  Подробный расчёт белков, жиров и углеводов для вашей цели.
                </p>
              </Link>
              <Link
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Дефицит калорий
                </h3>
                <p className="text-sm mt-1">
                  Узнайте, сколько калорий нужно сократить для безопасного
                  похудения.
                </p>
              </Link>
              <Link
                href="/zdorovye/telo/bazovyj-metabolizm"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Базовый метаболизм
                </h3>
                <p className="text-sm mt-1">
                  Рассчитайте BMR — количество калорий, которое тратит ваш
                  организм в покое.
                </p>
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
