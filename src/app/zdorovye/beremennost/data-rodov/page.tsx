import type { Metadata } from 'next'
import Link from 'next/link'
import { DueDateCalculator } from '@/components/calculators/DueDateCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор даты родов — расчёт ПДР онлайн',
  description:
    'Бесплатный калькулятор даты родов: расчёт ПДР по последним месячным, дате зачатия или УЗИ. Срок беременности, прогресс по триместрам и ключевые даты.',
  keywords: [
    'дата родов',
    'ПДР',
    'калькулятор даты родов',
    'срок беременности',
    'правило Негеле',
    'когда рожать',
    'предполагаемая дата родов',
    'расчёт ПДР',
  ],
  openGraph: {
    title: 'Калькулятор даты родов — расчёт ПДР онлайн',
    description:
      'Узнайте предполагаемую дату родов по 3 методам. Прогресс беременности, триместры и ключевые даты.',
    type: 'website',
    url: '/zdorovye/beremennost/data-rodov',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/data-rodov',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Дата родов', href: '/zdorovye/beremennost/data-rodov' },
]

export default function DueDatePage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор даты родов',
          description:
            'Онлайн калькулятор предполагаемой даты родов по дате последних месячных, зачатия или УЗИ',
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
              name: 'Как рассчитать дату родов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Самый распространённый способ — правило Негеле: к первому дню последних месячных прибавляют 280 дней (40 недель). Также можно рассчитать по дате зачатия (прибавить 266 дней) или по данным УЗИ первого триместра.',
              },
            },
            {
              '@type': 'Question',
              name: 'Насколько точен расчёт даты родов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Только 4–5% детей рождаются точно в ПДР. Нормальные роды происходят на сроке 37–42 недели. Наиболее точный метод — УЗИ в первом триместре (11–13 недель), погрешность составляет 3–5 дней.',
              },
            },
            {
              '@type': 'Question',
              name: 'Что такое акушерский срок беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Акушерский срок считается от первого дня последних месячных, а не от зачатия. Он примерно на 2 недели больше эмбрионального срока. Именно акушерский срок используют врачи для наблюдения беременности.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда вставать на учёт по беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Рекомендуется встать на учёт до 12 недель беременности. Это позволит своевременно пройти первый скрининг и все необходимые обследования. Ранняя постановка на учёт также даёт право на дополнительное пособие.',
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
          name: 'Как рассчитать дату родов онлайн',
          description:
            'Пошаговая инструкция по расчёту предполагаемой даты родов.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите метод расчёта',
              text: 'Выберите один из трёх методов: по дате последних месячных, по дате зачатия или по данным УЗИ.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Укажите дату',
              text: 'Введите соответствующую дату. Для метода УЗИ также укажите срок, определённый врачом.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет ПДР, текущий срок, прогресс беременности и таймлайн ключевых дат.',
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
              name: 'Беременность',
              item: 'https://calcbox.ru/zdorovye/beremennost',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Дата родов',
              item: 'https://calcbox.ru/zdorovye/beremennost/data-rodov',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор даты родов
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте предполагаемую дату родов по дате последних месячных,
            зачатия или УЗИ. Узнайте текущий срок, триместр и ключевые даты
            вашей беременности.
          </p>
        </header>

        <section className="mb-12">
          <DueDateCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как рассчитать дату родов
            </h2>
            <p>
              Предполагаемая дата родов (ПДР) — это ориентировочная дата, когда
              ваш малыш появится на свет. Расчёт основан на средней
              продолжительности беременности — 280 дней (40 акушерских недель)
              от первого дня последних месячных.
            </p>
            <p>
              Важно понимать, что ПДР — это именно предполагаемая дата. Только
              4–5% детей рождаются точно в этот день. Нормальными считаются
              роды в период с 37 по 42 неделю беременности. Ваш малыш родится
              тогда, когда будет полностью готов.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Методы определения ПДР
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  По дате последних месячных (правило Негеле)
                </h3>
                <p>
                  Самый распространённый метод. К первому дню последних
                  месячных прибавляют 280 дней (40 недель). Формула
                  предполагает регулярный цикл 28 дней с овуляцией
                  на 14-й день. При нерегулярном цикле точность снижается.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Формула:</strong> ПДР =
                    дата последних месячных + 280 дней
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  По дате зачатия
                </h3>
                <p>
                  Если вы точно знаете дату зачатия (например, при ЭКО),
                  к ней прибавляют 266 дней (38 недель). Это эмбриональный
                  срок беременности, который на 2 недели меньше акушерского.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  По данным УЗИ
                </h3>
                <p>
                  Наиболее точный метод — УЗИ в первом триместре (11–13
                  недель). Врач измеряет размеры эмбриона и определяет срок
                  с точностью до 3–5 дней. Во втором и третьем триместрах
                  точность УЗИ снижается.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Триместры беременности
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  1-й триместр (1–12 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Формирование всех органов</li>
                  <li>Сердцебиение с 6–8 недели</li>
                  <li>Первый скрининг на 11–13 нед.</li>
                  <li>Токсикоз и адаптация организма</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  2-й триместр (13–26 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Активный рост малыша</li>
                  <li>Определение пола на 16–20 нед.</li>
                  <li>Второй скрининг на 18–21 нед.</li>
                  <li>Первые шевеления</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  3-й триместр (27–40 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Набор веса малышом</li>
                  <li>Декретный отпуск с 30 нед.</li>
                  <li>Подготовка к родам</li>
                  <li>Доношенность с 37 недели</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Точность расчёта ПДР
            </h2>
            <p>
              Точность определения даты родов зависит от метода расчёта
              и индивидуальных особенностей организма:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Метод
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Точность
                    </th>
                    <th className="text-left py-3 font-semibold text-foreground">
                      Условия
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">По месячным (Негеле)</td>
                    <td className="py-2.5 pr-4">&plusmn;2 недели</td>
                    <td className="py-2.5">Регулярный цикл 28 дней</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">По дате зачатия</td>
                    <td className="py-2.5 pr-4">&plusmn;1–2 недели</td>
                    <td className="py-2.5">Точная дата известна</td>
                  </tr>
                  <tr className="border-b bg-green-50/50">
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      УЗИ (1 триместр)
                    </td>
                    <td className="py-2.5 pr-4 font-medium text-foreground">
                      &plusmn;3–5 дней
                    </td>
                    <td className="py-2.5 font-medium text-foreground">
                      11–13 недель
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">УЗИ (2–3 триместр)</td>
                    <td className="py-2.5 pr-4">&plusmn;1–3 недели</td>
                    <td className="py-2.5">После 14 недель</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Развитие малыша по неделям
            </h2>
            <p>
              Краткий обзор ключевых этапов развития ребёнка во время
              беременности:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">4–8 недель</h3>
                <p className="text-sm">
                  Формируется нервная трубка, сердце начинает биться. Размер
                  эмбриона — от макового зёрнышка до фасолинки (1–16 мм).
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">12–16 недель</h3>
                <p className="text-sm">
                  Все органы сформированы, малыш двигается. Размер — от лайма
                  до авокадо (5–12 см). Можно узнать пол.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">20–28 недель</h3>
                <p className="text-sm">
                  Мама чувствует шевеления. Малыш слышит звуки, открывает
                  глаза. Размер — от банана до баклажана (25–37 см).
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">32–40 недель</h3>
                <p className="text-sm">
                  Активный набор веса. Лёгкие созревают, малыш готовится
                  к рождению. Вес при рождении — 2,5–4 кг, рост — 48–53 см.
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
                  Как рассчитать дату родов?
                </h3>
                <p>
                  Самый распространённый способ — правило Негеле: к первому
                  дню последних месячных прибавляют 280 дней (40 недель). Также
                  можно рассчитать по дате зачатия (прибавить 266 дней) или
                  по данным УЗИ первого триместра.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Насколько точен расчёт даты родов?
                </h3>
                <p>
                  Только 4–5% детей рождаются точно в ПДР. Нормальные роды
                  происходят на сроке 37–42 недели. Наиболее точный метод —
                  УЗИ в первом триместре (11–13 недель), погрешность
                  составляет 3–5 дней.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Что такое акушерский срок беременности?
                </h3>
                <p>
                  Акушерский срок считается от первого дня последних месячных,
                  а не от зачатия. Он примерно на 2 недели больше
                  эмбрионального срока. Именно акушерский срок используют
                  врачи для наблюдения беременности.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Когда вставать на учёт по беременности?
                </h3>
                <p>
                  Рекомендуется встать на учёт до 12 недель беременности. Это
                  позволит своевременно пройти первый скрининг и все
                  необходимые обследования. Ранняя постановка на учёт также
                  даёт право на дополнительное пособие.
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
                href="/zdorovye/beremennost/srok-beremennosti"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Срок беременности
                </h3>
                <p className="text-sm mt-1">
                  Определите текущий акушерский срок в неделях и днях.
                </p>
              </Link>
              <Link
                href="/zdorovye/beremennost/ovulyatsiya"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Калькулятор овуляции
                </h3>
                <p className="text-sm mt-1">
                  Определите дни овуляции и фертильное окно.
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
                  Расчёт суточной нормы калорий по 5 формулам.
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
                  Индекс массы тела с визуальной шкалой категорий ВОЗ.
                </p>
              </Link>
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
