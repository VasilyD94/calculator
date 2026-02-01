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

            <div className="grid gap-3">
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  <h3 className="font-semibold text-foreground">
                    По дате последних месячных (правило Негеле)
                  </h3>
                </div>
                <p className="text-sm">
                  Самый распространённый метод. К первому дню последних
                  месячных прибавляют 280 дней (40 недель). Формула
                  предполагает регулярный цикл 28 дней с овуляцией
                  на 14-й день. При нерегулярном цикле точность снижается.
                </p>
                <p className="text-xs rounded-md bg-pink-100/50 border border-pink-200 px-3 py-2 text-pink-700">
                  <strong>Формула:</strong> ПДР = дата последних месячных + 280 дней
                </p>
              </div>

              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🧬</span>
                  <h3 className="font-semibold text-foreground">
                    По дате зачатия
                  </h3>
                </div>
                <p className="text-sm">
                  Если вы точно знаете дату зачатия (например, при ЭКО),
                  к ней прибавляют 266 дней (38 недель). Это эмбриональный
                  срок беременности, который на 2 недели меньше акушерского.
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔬</span>
                  <h3 className="font-semibold text-foreground">
                    По данным УЗИ
                  </h3>
                </div>
                <p className="text-sm">
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
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🌱</span>
                  1-й триместр (1–12 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-pink-400">
                  <li>Формирование всех органов</li>
                  <li>Сердцебиение с 6–8 недели</li>
                  <li>Первый скрининг на 11–13 нед.</li>
                  <li>Токсикоз и адаптация организма</li>
                </ul>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🌸</span>
                  2-й триместр (13–26 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-purple-400">
                  <li>Активный рост малыша</li>
                  <li>Определение пола на 16–20 нед.</li>
                  <li>Второй скрининг на 18–21 нед.</li>
                  <li>Первые шевеления</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">👶</span>
                  3-й триместр (27–40 нед.)
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-blue-400">
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
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 min-w-0">
                    <span className="text-lg shrink-0">📅</span>
                    По месячным
                  </h3>
                  <span className="text-xs rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 font-medium shrink-0 whitespace-nowrap">&plusmn;2 нед.</span>
                </div>
                <p className="text-sm">Регулярный цикл 28 дней</p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 min-w-0">
                    <span className="text-lg shrink-0">🧬</span>
                    По дате зачатия
                  </h3>
                  <span className="text-xs rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 font-medium shrink-0 whitespace-nowrap">&plusmn;1–2 нед.</span>
                </div>
                <p className="text-sm">Точная дата известна</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 min-w-0">
                    <span className="text-lg shrink-0">🔬</span>
                    УЗИ (1 триместр)
                  </h3>
                  <span className="text-xs rounded-full bg-green-100 text-green-700 px-2.5 py-1 font-medium shrink-0 whitespace-nowrap">&plusmn;3–5 дн.</span>
                </div>
                <p className="text-sm font-medium text-green-700">11–13 недель — самый точный метод</p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 min-w-0">
                    <span className="text-lg shrink-0">🔬</span>
                    УЗИ (2–3 триместр)
                  </h3>
                  <span className="text-xs rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 font-medium shrink-0 whitespace-nowrap">&plusmn;1–3 нед.</span>
                </div>
                <p className="text-sm">После 14 недель</p>
              </div>
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
              <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🫘</span>
                  4–8 недель
                </h3>
                <p className="text-sm">
                  Формируется нервная трубка, сердце начинает биться. Размер
                  эмбриона — от макового зёрнышка до фасолинки (1–16 мм).
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🍋</span>
                  12–16 недель
                </h3>
                <p className="text-sm">
                  Все органы сформированы, малыш двигается. Размер — от лайма
                  до авокадо (5–12 см). Можно узнать пол.
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🍌</span>
                  20–28 недель
                </h3>
                <p className="text-sm">
                  Мама чувствует шевеления. Малыш слышит звуки, открывает
                  глаза. Размер — от банана до баклажана (25–37 см).
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🍉</span>
                  32–40 недель
                </h3>
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
            <div className="space-y-3">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Как рассчитать дату родов?
                </h3>
                <p className="text-sm pl-8">
                  Самый распространённый способ — правило Негеле: к первому
                  дню последних месячных прибавляют 280 дней (40 недель). Также
                  можно рассчитать по дате зачатия (прибавить 266 дней) или
                  по данным УЗИ первого триместра.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Насколько точен расчёт даты родов?
                </h3>
                <p className="text-sm pl-8">
                  Только 4–5% детей рождаются точно в ПДР. Нормальные роды
                  происходят на сроке 37–42 недели. Наиболее точный метод —
                  УЗИ в первом триместре (11–13 недель), погрешность
                  составляет 3–5 дней.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Что такое акушерский срок беременности?
                </h3>
                <p className="text-sm pl-8">
                  Акушерский срок считается от первого дня последних месячных,
                  а не от зачатия. Он примерно на 2 недели больше
                  эмбрионального срока. Именно акушерский срок используют
                  врачи для наблюдения беременности.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Когда вставать на учёт по беременности?
                </h3>
                <p className="text-sm pl-8">
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
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">👶</span>
                  Срок беременности
                </h3>
                <p className="text-sm mt-1 pl-7">
                  Определите текущий акушерский срок в неделях и днях.
                </p>
              </Link>
              <Link
                href="/zdorovye/beremennost/ovulyatsiya"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">🥚</span>
                  Калькулятор овуляции
                </h3>
                <p className="text-sm mt-1 pl-7">
                  Определите дни овуляции и фертильное окно.
                </p>
              </Link>
              <Link
                href="/zdorovye/pitanie/kalkulyator-kalorij"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  Калькулятор калорий
                </h3>
                <p className="text-sm mt-1 pl-7">
                  Расчёт суточной нормы калорий по 5 формулам.
                </p>
              </Link>
              <Link
                href="/zdorovye/telo/kalkulyator-imt"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">⚖️</span>
                  Калькулятор ИМТ
                </h3>
                <p className="text-sm mt-1 pl-7">
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
