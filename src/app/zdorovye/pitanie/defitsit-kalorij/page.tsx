import type { Metadata } from 'next'
import Link from 'next/link'
import { DeficitCalculator } from '@/components/calculators/DeficitCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор дефицита калорий — план похудения онлайн',
  description:
    'Бесплатный калькулятор дефицита калорий: график снижения веса, сравнение сценариев похудения, оценка безопасности. Мгновенный расчёт без регистрации.',
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
    title: 'Калькулятор дефицита калорий — план похудения онлайн',
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
              name: 'Установите целевой вес',
              text: 'Передвиньте ползунок целевого веса — калькулятор покажет, сколько нужно сбросить.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Выберите размер дефицита',
              text: 'Настройте дефицит с помощью ползунка. Сравните сценарии: лёгкий, умеренный и агрессивный.',
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

        <section className="mb-12">
          <DeficitCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое дефицит калорий
            </h2>
            <p>
              Дефицит калорий — это разница между суточной нормой энергии
              (TDEE) и количеством потребляемых калорий. Когда вы съедаете
              меньше, чем тратите, организм начинает использовать жировые
              запасы для покрытия недостающей энергии. Это единственный
              научно доказанный механизм снижения веса.
            </p>
            <p>
              Например, если ваша суточная норма — 2200 ккал, а вы
              потребляете 1700 ккал, дефицит составляет 500 ккал. За неделю
              это даст суммарный дефицит в 3500 ккал, что эквивалентно
              примерно 0,45 кг жира (в 1 кг жира ~7700 ккал).
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Какой дефицит считается безопасным
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <h3 className="font-semibold text-foreground">
                    200–400 ккал
                  </h3>
                </div>
                <p className="text-sm">
                  Лёгкий дефицит. Потеря 0,2–0,4 кг в неделю. Минимальный
                  риск потери мышц. Легко придерживаться длительное время.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <h3 className="font-semibold text-foreground">
                    400–700 ккал
                  </h3>
                </div>
                <p className="text-sm">
                  Умеренный дефицит. Потеря 0,4–0,7 кг в неделю. Требует
                  дисциплины. Рекомендуется увеличить белок до 1,6 г/кг.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <h3 className="font-semibold text-foreground">
                    700+ ккал
                  </h3>
                </div>
                <p className="text-sm">
                  Агрессивный дефицит. Быстрая потеря веса, но высокий риск
                  потери мышц, замедления метаболизма и срывов.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как работает калькулятор
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                <p>
                  Укажите свои параметры — пол, возраст, рост, вес
                  и уровень активности. Калькулятор определит вашу суточную
                  норму калорий (TDEE).
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                <p>
                  Установите целевой вес и размер дефицита. Цветная шкала
                  подскажет, насколько агрессивен выбранный дефицит.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                <p>
                  Посмотрите результаты: график снижения веса, сравнение
                  сценариев и оценку безопасности. Нажмите на сценарий,
                  чтобы применить его параметры.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border p-5">
              <h2 className="text-xl font-bold text-foreground">
                Ошибки при дефиците калорий
              </h2>
              <ul className="space-y-2 pl-5 list-disc marker:text-destructive text-sm">
                <li>Слишком большой дефицит (более 1000 ккал)</li>
                <li>Недостаток белка — потеря мышц вместо жира</li>
                <li>Полный отказ от жиров — гормональные сбои</li>
                <li>Отсутствие перерывов — замедление метаболизма</li>
                <li>Игнорирование силовых тренировок</li>
              </ul>
            </div>
            <div className="space-y-4 rounded-lg border p-5">
              <h2 className="text-xl font-bold text-foreground">
                Правила безопасного похудения
              </h2>
              <ul className="space-y-2 pl-5 list-disc marker:text-primary text-sm">
                <li>Дефицит не более 500 ккал для начинающих</li>
                <li>Белок 1,6–2 г на кг веса для сохранения мышц</li>
                <li>Минимум 0,8 г жиров на кг для гормонов</li>
                <li>Перерыв на 1–2 недели каждые 8–12 недель</li>
                <li>Силовые тренировки 2–3 раза в неделю</li>
              </ul>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что делать, если вес остановился
            </h2>
            <p>
              Плато — нормальная часть процесса похудения. По мере
              снижения веса ваш TDEE тоже уменьшается, и прежний дефицит
              может стать недостаточным. Что делать:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">
                  Пересчитайте норму
                </strong>{' '}
                — используйте калькулятор с актуальным весом.
              </li>
              <li>
                <strong className="text-foreground">
                  Сделайте перерыв
                </strong>{' '}
                — 1–2 недели на уровне TDEE помогут восстановить метаболизм.
              </li>
              <li>
                <strong className="text-foreground">
                  Добавьте активность
                </strong>{' '}
                — увеличьте TDEE вместо ещё большего урезания калорий.
              </li>
              <li>
                <strong className="text-foreground">Проверьте белок</strong>{' '}
                — достаточное потребление белка ускоряет метаболизм
                на 15–30% (термический эффект пищи).
              </li>
            </ul>
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
                  Какой дефицит калорий безопасен для похудения?
                </h3>
                <p>
                  Безопасным считается дефицит 300–500 ккал в день.
                  Это позволяет терять 0,3–0,5 кг в неделю без потери
                  мышечной массы и замедления метаболизма.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как быстро можно похудеть без вреда для здоровья?
                </h3>
                <p>
                  Безопасный темп — 0,5–1 кг в неделю. Более быстрое
                  снижение веса приводит к потере мышц, замедлению
                  метаболизма и эффекту «йо-йо».
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Почему вес перестал снижаться на диете?
                </h3>
                <p>
                  Плато — нормальное явление. Причины: адаптация
                  метаболизма, задержка воды, рост мышц. Пересчитайте
                  норму по текущему весу и сделайте перерыв на 1–2 недели.
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
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Калькулятор калорий
                </h3>
                <p className="text-sm mt-1">
                  Расчёт суточной нормы калорий по 5 научным формулам.
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
                  Оптимальное соотношение белков, жиров и углеводов.
                </p>
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Калькулятор ИМТ
                </h3>
                <p className="text-sm mt-1">
                  Рассчитайте индекс массы тела и узнайте, в норме ли ваш
                  вес.
                </p>
              </Link>
              <Link
                href="/zdorovye/telo/idealnyj-ves"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Идеальный вес
                </h3>
                <p className="text-sm mt-1">
                  Узнайте свой идеальный вес по нескольким научным формулам.
                </p>
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
