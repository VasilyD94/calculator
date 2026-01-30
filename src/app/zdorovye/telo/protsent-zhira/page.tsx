import type { Metadata } from 'next'
import Link from 'next/link'
import { BodyFatCalculator } from '@/components/calculators/BodyFatCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор процента жира — расчёт по 3 формулам',
  description:
    'Бесплатный калькулятор процента жира в организме: метод ВМС США, формулы Deurenberg и Gallagher. Сравнение формул, категории ACE, состав тела и рекомендации.',
  keywords: [
    'процент жира',
    'калькулятор процента жира',
    'процент жира в организме',
    'расчёт жира',
    'состав тела',
    'жировая масса',
    'метод ВМС США',
    'body fat calculator',
  ],
  openGraph: {
    title: 'Калькулятор процента жира — расчёт по 3 формулам',
    description:
      'Узнайте процент жира в организме по 3 научным формулам. Категории ACE, состав тела и сравнение методов.',
    type: 'website',
    url: '/zdorovye/telo/protsent-zhira',
  },
  alternates: {
    canonical: '/zdorovye/telo/protsent-zhira',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' },
]

export default function BodyFatPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор процента жира',
          description:
            'Онлайн калькулятор процента жира в организме по 3 научным формулам с визуальной шкалой категорий',
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
              name: 'Какой процент жира считается нормальным?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для мужчин нормальный процент жира — 14–24%, для женщин — 21–31%. Атлетический уровень: 6–13% для мужчин и 14–20% для женщин. Незаменимый жир (минимум для здоровья): 2–5% у мужчин и 10–13% у женщин.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как точно измерить процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Самый доступный метод — расчёт по обхватам тела (метод ВМС США), точность 3–4%. Более точные методы: калиперометрия (складки кожи), биоимпедансный анализ (BIA), подводное взвешивание и DEXA-сканирование (золотой стандарт, точность до 1%).',
              },
            },
            {
              '@type': 'Question',
              name: 'Как правильно измерить обхват талии?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Измеряйте обхват талии на уровне пупка, не втягивая живот. Используйте мягкую сантиметровую ленту. Лучше измерять утром натощак. Лента должна плотно прилегать к коже, но не сдавливать.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем опасен высокий процент жира?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Избыток жировой ткани повышает риск сердечно-сосудистых заболеваний, диабета 2 типа, гипертонии, некоторых видов рака, заболеваний суставов и апноэ сна. Особенно опасен висцеральный жир вокруг внутренних органов.',
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
          name: 'Как рассчитать процент жира в организме',
          description:
            'Пошаговая инструкция по расчёту процента жира с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры тела',
              text: 'Выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Введите обхваты',
              text: 'Измерьте и укажите обхват талии, шеи, и бёдер (для женщин). Используйте мягкую сантиметровую ленту.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Калькулятор покажет процент жира, категорию ACE, состав тела и сравнение 3 формул.',
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
              name: 'Процент жира',
              item: 'https://calcbox.ru/zdorovye/telo/protsent-zhira',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор процента жира
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте процент жира в организме по 3 научным формулам.
            Метод ВМС США, формулы Deurenberg и Gallagher. Визуальная шкала
            категорий, состав тела и рекомендации.
          </p>
        </header>

        <section className="mb-12">
          <BodyFatCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое процент жира в организме
            </h2>
            <p>
              Процент жира в организме (Body Fat Percentage, BF%) — это доля
              жировой ткани от общей массы тела. Жир необходим для нормального
              функционирования организма: он защищает внутренние органы,
              регулирует температуру тела, участвует в выработке гормонов
              и обеспечивает запас энергии.
            </p>
            <p>
              Однако избыток жировой ткани повышает риск сердечно-сосудистых
              заболеваний, диабета 2 типа, гипертонии и других проблем
              со здоровьем. Процент жира считается более информативным
              показателем, чем ИМТ, поскольку учитывает соотношение жировой
              и мышечной массы.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Формулы расчёта процента жира
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Метод ВМС США (US Navy) — рекомендуемый
                </h3>
                <p>
                  Разработан Военно-морскими силами США для оценки физической
                  формы военнослужащих. Использует обхваты тела (талия, шея,
                  бёдра для женщин) и рост. Точность метода — 3–4%
                  по сравнению с DEXA-сканированием.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    86,010 &times; log10(талия &minus; шея) &minus; 70,041
                    &times; log10(рост) + 36,76
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    163,205 &times; log10(талия + бёдра &minus; шея) &minus;
                    97,684 &times; log10(рост) &minus; 78,387
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Deurenberg (1991)
                </h3>
                <p>
                  Оценивает процент жира на основе индекса массы тела (ИМТ),
                  возраста и пола. Удобна тем, что не требует измерения обхватов,
                  но менее точна для спортсменов и людей с нестандартным
                  телосложением.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    BF% = 1,20 &times; ИМТ + 0,23 &times; возраст &minus; 10,8
                    &times; пол &minus; 5,4
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (пол: мужчины = 1, женщины = 0)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Gallagher (2000)
                </h3>
                <p>
                  Более современная формула на основе ИМТ, разработанная
                  с использованием данных DEXA-сканирования. Учитывает возраст,
                  пол и этническую принадлежность (в нашем калькуляторе
                  используется универсальный вариант).
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    BF% = 63,7 &minus; 864 &times; (1/ИМТ) &minus; 12,1
                    &times; пол + 0,12 &times; возраст
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (пол: мужчины = 1, женщины = 0)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — таблица */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Категории процента жира (ACE)
            </h2>
            <p>
              Американский совет по физическим упражнениям (ACE) выделяет
              следующие категории процента жира для взрослых:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Категория
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Мужчины
                    </th>
                    <th className="text-left py-3 font-semibold text-foreground">
                      Женщины
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Незаменимый жир</td>
                    <td className="py-2.5 pr-4">2–5%</td>
                    <td className="py-2.5">10–13%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Атлеты</td>
                    <td className="py-2.5 pr-4">6–13%</td>
                    <td className="py-2.5">14–20%</td>
                  </tr>
                  <tr className="border-b bg-green-50/50">
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      Фитнес
                    </td>
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      14–17%
                    </td>
                    <td className="py-2.5 font-medium text-foreground">
                      21–24%
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Средний</td>
                    <td className="py-2.5 pr-4">18–24%</td>
                    <td className="py-2.5">25–31%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Выше нормы</td>
                    <td className="py-2.5 pr-4">25%+</td>
                    <td className="py-2.5">32%+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как правильно измерять обхваты
            </h2>
            <p>
              Точность метода ВМС США зависит от правильности измерений.
              Следуйте этим рекомендациям:
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Обхват талии</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Измеряйте на уровне пупка</li>
                  <li>Не втягивайте живот</li>
                  <li>Лента параллельна полу</li>
                  <li>Измеряйте утром натощак</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Обхват шеи</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Измеряйте под кадыком</li>
                  <li>Смотрите прямо перед собой</li>
                  <li>Лента плотно, но не сдавливает</li>
                  <li>Не напрягайте мышцы шеи</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Обхват бёдер</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Самое широкое место ягодиц</li>
                  <li>Стойте ровно, ноги вместе</li>
                  <li>Лента параллельна полу</li>
                  <li>Для женщин — обязательно</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как снизить процент жира
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Питание</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Создайте умеренный дефицит калорий (300–500 ккал)</li>
                  <li>Увеличьте потребление белка (1,6–2 г на кг веса)</li>
                  <li>Сократите простые углеводы и переработанные продукты</li>
                  <li>Ешьте больше овощей, клетчатки и здоровых жиров</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Тренировки</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Силовые тренировки 3–4 раза в неделю</li>
                  <li>Кардио 2–3 раза в неделю (30–45 минут)</li>
                  <li>10 000 шагов в день для базовой активности</li>
                  <li>Достаточный сон (7–9 часов) для восстановления</li>
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
                  Какой процент жира считается нормальным?
                </h3>
                <p>
                  Для мужчин нормальный процент жира — 14–24%, для женщин —
                  21–31%. Атлетический уровень: 6–13% для мужчин и 14–20%
                  для женщин. Минимум для здоровья (незаменимый жир): 2–5%
                  у мужчин и 10–13% у женщин.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как точно измерить процент жира?
                </h3>
                <p>
                  Самый доступный метод — расчёт по обхватам тела (метод ВМС
                  США), точность 3–4%. Более точные методы: калиперометрия,
                  биоимпедансный анализ (BIA) и DEXA-сканирование (золотой
                  стандарт, точность до 1%).
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как правильно измерить обхват талии?
                </h3>
                <p>
                  Измеряйте обхват талии на уровне пупка, не втягивая живот.
                  Используйте мягкую сантиметровую ленту утром натощак. Лента
                  должна плотно прилегать к коже, но не сдавливать.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Чем опасен высокий процент жира?
                </h3>
                <p>
                  Избыток жировой ткани повышает риск сердечно-сосудистых
                  заболеваний, диабета 2 типа, гипертонии, некоторых видов рака,
                  заболеваний суставов и апноэ сна. Особенно опасен висцеральный
                  жир вокруг внутренних органов.
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
                  Индекс массы тела с визуальной шкалой категорий ВОЗ.
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
                  Расчёт идеального веса по 5 научным формулам.
                </p>
              </Link>
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
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
