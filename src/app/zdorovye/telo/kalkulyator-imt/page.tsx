import type { Metadata } from 'next'
import Link from 'next/link'
import { BMICalculator } from '@/components/calculators/BMICalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор ИМТ — индекс массы тела онлайн',
  description:
    'Бесплатный калькулятор ИМТ: рассчитайте индекс массы тела по росту и весу. Визуальная шкала категорий ВОЗ, идеальный диапазон веса и персональные рекомендации.',
  keywords: [
    'калькулятор ИМТ',
    'индекс массы тела',
    'расчёт ИМТ',
    'ИМТ онлайн',
    'BMI калькулятор',
    'нормальный вес',
    'ожирение',
    'идеальный вес',
  ],
  openGraph: {
    title: 'Калькулятор ИМТ — индекс массы тела онлайн',
    description:
      'Рассчитайте индекс массы тела и узнайте, в норме ли ваш вес. Шкала категорий ВОЗ и рекомендации.',
    type: 'website',
    url: '/zdorovye/telo/kalkulyator-imt',
  },
  alternates: {
    canonical: '/zdorovye/telo/kalkulyator-imt',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt' },
]

export default function BMICalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор ИМТ',
          description:
            'Онлайн калькулятор индекса массы тела с визуальной шкалой категорий ВОЗ и расчётом идеального веса',
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
              name: 'Как рассчитать ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ рассчитывается по формуле: вес в килограммах разделить на рост в метрах, возведённый в квадрат. Например, при весе 70 кг и росте 175 см: 70 / (1,75 × 1,75) = 22,9.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой ИМТ считается нормальным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'По классификации ВОЗ нормальный ИМТ находится в диапазоне 18,5–24,9. Значения ниже 18,5 указывают на дефицит массы тела, а выше 25 — на избыточный вес.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли полагаться только на ИМТ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ИМТ — это скрининговый показатель, не учитывающий соотношение мышц и жира, возраст и тип телосложения. Для полной оценки рекомендуется также измерить обхват талии и процент жира в организме.',
              },
            },
            {
              '@type': 'Question',
              name: 'Одинаков ли нормальный ИМТ для мужчин и женщин?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формула ИМТ одинакова для обоих полов. Однако у женщин нормальный процент жира выше (20–25%), чем у мужчин (10–20%). Поэтому при одинаковом ИМТ состав тела может различаться.',
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
          name: 'Как рассчитать индекс массы тела',
          description:
            'Пошаговая инструкция по расчёту ИМТ с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно рассчитает ИМТ и покажет его на визуальной шкале категорий ВОЗ.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Узнайте свою категорию, идеальный диапазон веса и получите персональные рекомендации.',
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
              name: 'Тело',
              item: 'https://calcbox.ru/zdorovye/telo',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Калькулятор ИМТ',
              item: 'https://calcbox.ru/zdorovye/telo/kalkulyator-imt',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор ИМТ
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте индекс массы тела и узнайте, в норме ли ваш вес.
            Визуальная шкала категорий ВОЗ, идеальный диапазон веса
            и рекомендации. Результат обновляется мгновенно.
          </p>
        </header>

        <section className="mb-12">
          <BMICalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое ИМТ и зачем его знать
            </h2>
            <p>
              Индекс массы тела (ИМТ, англ. BMI — Body Mass Index) — это
              показатель, позволяющий оценить соответствие массы тела росту
              человека. Его предложил бельгийский учёный Адольф Кетле в 1832
              году, и с тех пор он остаётся одним из наиболее распространённых
              инструментов для первичной оценки массы тела.
            </p>
            <p>
              Всемирная организация здравоохранения (ВОЗ) использует ИМТ для
              классификации избыточной массы тела и ожирения у взрослых. Знание
              своего ИМТ помогает оценить риски развития сердечно-сосудистых
              заболеваний, диабета 2 типа, гипертонии и других заболеваний,
              связанных с весом.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как рассчитывается ИМТ
            </h2>
            <p>
              Формула расчёта индекса массы тела проста: вес в килограммах
              делится на квадрат роста в метрах.
            </p>
            <div className="rounded-lg border p-5 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                ИМТ = вес (кг) &divide; рост&sup2; (м)
              </p>
              <p className="text-sm">
                Например: при весе 70 кг и росте 175 см (1,75 м):
                <br />
                70 &divide; (1,75 &times; 1,75) = 70 &divide; 3,0625 ={' '}
                <strong className="text-foreground">22,9</strong>
              </p>
            </div>
            <p>
              Наш калькулятор выполняет расчёт автоматически — достаточно
              указать рост и вес с помощью ползунков, и результат обновится
              мгновенно без нажатия кнопок.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — таблица */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Классификация ИМТ по ВОЗ
            </h2>
            <p>
              Всемирная организация здравоохранения выделяет следующие категории
              на основании значения ИМТ для взрослых людей старше 18 лет:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      ИМТ
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Категория
                    </th>
                    <th className="text-left py-3 font-semibold text-foreground">
                      Риск для здоровья
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Менее 16</td>
                    <td className="py-2.5 pr-4">Выраженный дефицит</td>
                    <td className="py-2.5">Высокий</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">16–18,5</td>
                    <td className="py-2.5 pr-4">Дефицит массы тела</td>
                    <td className="py-2.5">Повышенный</td>
                  </tr>
                  <tr className="border-b bg-green-50/50">
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      18,5–24,9
                    </td>
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      Норма
                    </td>
                    <td className="py-2.5 text-foreground">Минимальный</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">25–29,9</td>
                    <td className="py-2.5 pr-4">Избыточный вес</td>
                    <td className="py-2.5">Повышенный</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">30–34,9</td>
                    <td className="py-2.5 pr-4">Ожирение I степени</td>
                    <td className="py-2.5">Высокий</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">35–39,9</td>
                    <td className="py-2.5 pr-4">Ожирение II степени</td>
                    <td className="py-2.5">Очень высокий</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">40 и более</td>
                    <td className="py-2.5 pr-4">Ожирение III степени</td>
                    <td className="py-2.5">Чрезвычайно высокий</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Ограничения ИМТ
            </h2>
            <p>
              ИМТ — полезный скрининговый инструмент, однако он имеет ряд
              ограничений, которые важно учитывать при интерпретации результата.
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Спортсмены.</strong>{' '}
                Мышечная ткань тяжелее жировой. У атлетов и бодибилдеров ИМТ
                может показывать &laquo;избыточный вес&raquo;, хотя процент жира
                в норме.
              </li>
              <li>
                <strong className="text-foreground">Пожилые люди.</strong>{' '}
                С возрастом мышечная масса снижается, а доля жировой ткани
                увеличивается. ИМТ может быть &laquo;нормальным&raquo;, хотя
                процент жира повышен.
              </li>
              <li>
                <strong className="text-foreground">
                  Дети и подростки.
                </strong>{' '}
                Для лиц до 18 лет используются специальные перцентильные таблицы,
                так как стандартная формула ИМТ для них некорректна.
              </li>
              <li>
                <strong className="text-foreground">
                  Беременные женщины.
                </strong>{' '}
                ИМТ не применяется во время беременности из-за естественного
                увеличения массы тела.
              </li>
              <li>
                <strong className="text-foreground">
                  Распределение жира.
                </strong>{' '}
                ИМТ не учитывает, где именно скапливается жир. Абдоминальный
                (висцеральный) жир значительно опаснее подкожного. Для оценки
                рекомендуется дополнительно измерить обхват талии.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что делать при отклонениях от нормы
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  При дефиците массы тела (ИМТ &lt; 18,5)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Увеличить калорийность рациона на 300–500 ккал</li>
                  <li>Добавить силовые тренировки для набора мышечной массы</li>
                  <li>Есть чаще — 4–5 приёмов пищи в день</li>
                  <li>Проконсультироваться с врачом для исключения заболеваний</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  При избыточном весе (ИМТ &ge; 25)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Создать дефицит калорий 300–500 ккал от суточной нормы</li>
                  <li>Добавить 30 минут физической активности ежедневно</li>
                  <li>Сократить быстрые углеводы и переработанные продукты</li>
                  <li>При ИМТ &ge; 30 обратиться к врачу</li>
                </ul>
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
                  Как рассчитать ИМТ?
                </h3>
                <p>
                  ИМТ = вес (кг) &divide; рост&sup2; (м). Например, при весе
                  70 кг и росте 175 см: 70 &divide; (1,75 &times; 1,75) = 22,9.
                  Наш калькулятор делает это автоматически.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Какой ИМТ считается нормальным?
                </h3>
                <p>
                  По классификации ВОЗ нормальный ИМТ — от 18,5 до 24,9.
                  Значения ниже 18,5 указывают на дефицит массы, выше 25 — на
                  избыточный вес, выше 30 — на ожирение.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Можно ли полагаться только на ИМТ?
                </h3>
                <p>
                  ИМТ — скрининговый показатель. Он не учитывает мышечную массу,
                  тип телосложения и распределение жира. Для полной картины
                  рекомендуется измерить обхват талии и процент жира в организме.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Одинаков ли нормальный ИМТ для мужчин и женщин?
                </h3>
                <p>
                  Формула ИМТ одинакова для обоих полов. Однако у женщин
                  нормальный процент жира выше (20–25%), чем у мужчин (10–20%).
                  Поэтому при одинаковом ИМТ состав тела может различаться.
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
                href="/zdorovye/pitanie/defitsit-kalorij"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Дефицит калорий
                </h3>
                <p className="text-sm mt-1">
                  Спланируйте похудение с графиком прогресса и оценкой
                  безопасности.
                </p>
              </Link>
              <Link
                href="/zdorovye/pitanie/norma-vody"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Норма воды
                </h3>
                <p className="text-sm mt-1">
                  Индивидуальный расчёт суточной нормы воды с расписанием
                  на день.
                </p>
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
