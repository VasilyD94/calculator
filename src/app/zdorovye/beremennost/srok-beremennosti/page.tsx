import type { Metadata } from 'next'
import Link from 'next/link'
import { GestationalAgeCalculator } from '@/components/calculators/GestationalAgeCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор срока беременности — какая неделя сейчас',
  description:
    'Бесплатный калькулятор срока беременности: узнайте текущую неделю, триместр и развитие малыша. Расчёт по дате месячных, зачатия или УЗИ. Мгновенный результат.',
  keywords: [
    'срок беременности',
    'какая неделя беременности',
    'калькулятор срока беременности',
    'акушерский срок',
    'неделя беременности',
    'развитие плода по неделям',
    'триместр беременности',
    'эмбриональный срок',
  ],
  openGraph: {
    title: 'Калькулятор срока беременности — какая неделя сейчас',
    description:
      'Узнайте текущую неделю беременности, развитие малыша и прогресс по триместрам.',
    type: 'website',
    url: '/zdorovye/beremennost/srok-beremennosti',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/srok-beremennosti',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti' },
]

export default function GestationalAgePage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор срока беременности',
          description:
            'Онлайн калькулятор текущего срока беременности с развитием малыша по неделям',
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
              name: 'Как определить срок беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Срок беременности определяют тремя способами: по первому дню последних месячных (акушерский срок), по дате зачатия (эмбриональный срок) или по данным УЗИ. Наиболее точный метод — УЗИ в 11–13 недель с погрешностью 3–5 дней.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем акушерский срок отличается от эмбрионального?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Акушерский срок считается от первого дня последних месячных и на 2 недели больше эмбрионального (от момента зачатия). Врачи всегда используют акушерский срок для наблюдения беременности и расчёта даты родов.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какой размер ребёнка на 20 неделе беременности?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'На 20 неделе беременности малыш размером с банан: длина около 16,5 см, вес около 300 г. Это середина беременности — мама хорошо чувствует шевеления, а на УЗИ можно узнать пол.',
              },
            },
            {
              '@type': 'Question',
              name: 'Когда начинаются шевеления плода?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Первородящие мамы обычно начинают чувствовать шевеления на 18–20 неделе, повторнородящие — на 16–18 неделе. На самом деле малыш шевелится уже с 8 недели, но из-за маленького размера мама ещё не ощущает движений.',
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
          name: 'Как узнать текущую неделю беременности',
          description:
            'Пошаговая инструкция по определению срока беременности онлайн.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Выберите метод',
              text: 'Укажите, по какой дате рассчитывать: по последним месячным, дате зачатия или данным УЗИ.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Введите дату',
              text: 'Укажите дату последних месячных, зачатия или проведения УЗИ. Для УЗИ также введите срок, определённый врачом.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Узнайте результат',
              text: 'Калькулятор покажет текущую неделю, триместр, развитие малыша и календарь беременности.',
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
              name: 'Срок беременности',
              item: 'https://calcbox.ru/zdorovye/beremennost/srok-beremennosti',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор срока беременности
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте, на какой вы неделе, что происходит с малышом прямо сейчас
            и какой у него размер. Расчёт по дате месячных, зачатия или УЗИ.
          </p>
        </header>

        <section className="mb-12">
          <GestationalAgeCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как определить срок беременности
            </h2>
            <p>
              Срок беременности — один из первых вопросов, который задаёт себе
              будущая мама. Знание точной недели помогает следить за развитием
              малыша, вовремя проходить обследования и планировать подготовку
              к родам.
            </p>
            <p>
              Наш калькулятор определяет акушерский срок — именно его используют
              врачи для наблюдения беременности. Вы узнаете текущую неделю,
              триместр, размер малыша и что происходит с ним прямо сейчас.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Акушерский vs эмбриональный */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Акушерский и эмбриональный срок
            </h2>
            <p>
              Существует два способа считать срок беременности, и их важно
              различать:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  Акушерский срок
                </h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between">
                    <span>Отсчёт от</span>
                    <span className="font-medium text-foreground">Первого дня месячных</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Длительность</span>
                    <span className="font-medium text-foreground">40 нед. (280 дней)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Используется</span>
                    <span className="font-medium text-pink-700">Врачами (стандарт)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🧬</span>
                  Эмбриональный срок
                </h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between">
                    <span>Отсчёт от</span>
                    <span className="font-medium text-foreground">Даты зачатия</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Длительность</span>
                    <span className="font-medium text-foreground">38 нед. (266 дней)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Используется</span>
                    <span className="font-medium text-purple-700">Реже (при ЭКО и пр.)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm rounded-lg bg-muted/50 border p-3">
              <strong className="text-foreground">Разница:</strong> акушерский срок на ~2 недели больше эмбрионального. Наш калькулятор показывает акушерский срок — так же, как считает ваш врач.
            </p>
            <p>
              Если вы знаете только дату зачатия, калькулятор автоматически
              пересчитает в акушерский срок.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Развитие по триместрам */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Развитие малыша по триместрам
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🌱</span>
                  1-й триместр (1–12 нед.)
                </h3>
                <p className="text-sm">
                  От одной клетки до полностью сформированного организма.
                  К 12 неделе все органы заложены, сердце бьётся, малыш
                  двигается. Размер — от макового зёрнышка до лайма (5 см).
                </p>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🌸</span>
                  2-й триместр (13–26 нед.)
                </h3>
                <p className="text-sm">
                  Период активного роста. Малыш начинает слышать, видеть свет,
                  сосать палец. Мама чувствует первые шевеления. Размер — от
                  персика до кабачка (33 см, 760 г).
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">👶</span>
                  3-й триместр (27–40 нед.)
                </h3>
                <p className="text-sm">
                  Малыш набирает вес и готовится к рождению. Лёгкие созревают,
                  мозг активно развивается. С 37 недели беременность считается
                  доношенной. Вес при рождении — 2.5–4 кг.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Методы определения */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Методы определения срока
            </h2>
            <div className="grid gap-3">
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  <h3 className="font-semibold text-foreground">
                    По дате месячных (правило Негеле)
                  </h3>
                </div>
                <p className="text-sm">
                  Самый распространённый метод. Подходит при регулярном цикле
                  28 дней. Точность: &plusmn;2 недели.
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
                  Наиболее точный метод. В 11–13 недель погрешность всего 3–5
                  дней. Во 2–3 триместре точность снижается до &plusmn;1–3
                  недель.
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
                  Подходит, если дата точно известна (например, при ЭКО).
                  Эмбриональный срок на 2 недели меньше акушерского.
                </p>
              </div>
            </div>
            <p>
              Для максимальной точности рекомендуется совмещать несколько
              методов. Ваш врач определит окончательный срок на основании
              всех данных.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Что происходит с мамой */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что происходит с мамой
            </h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🤢</span>
                  1 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-pink-400">
                  <li>Токсикоз и утренняя тошнота</li>
                  <li>Повышенная утомляемость</li>
                  <li>Чувствительность груди</li>
                  <li>Частое мочеиспускание</li>
                </ul>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  2 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-purple-400">
                  <li>Энергия возвращается</li>
                  <li>Живот становится заметным</li>
                  <li>Первые шевеления малыша</li>
                  <li>Набор веса 0.5 кг/неделю</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-xl">🍼</span>
                  3 триместр
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm marker:text-blue-400">
                  <li>Одышка и изжога</li>
                  <li>Отёки ног</li>
                  <li>Тренировочные схватки</li>
                  <li>Подготовка к родам</li>
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
            <div className="space-y-3">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Как определить срок беременности?
                </h3>
                <p className="text-sm pl-8">
                  Срок определяют тремя способами: по первому дню последних
                  месячных (акушерский срок), по дате зачатия (эмбриональный
                  срок) или по данным УЗИ. Наиболее точный метод — УЗИ
                  в 11–13 недель с погрешностью 3–5 дней.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Чем акушерский срок отличается от эмбрионального?
                </h3>
                <p className="text-sm pl-8">
                  Акушерский срок считается от первого дня последних месячных
                  и на 2 недели больше эмбрионального (от момента зачатия).
                  Врачи всегда используют акушерский срок для наблюдения
                  беременности.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Какой размер ребёнка на 20 неделе?
                </h3>
                <p className="text-sm pl-8">
                  На 20 неделе малыш размером с банан: длина около 16.5 см,
                  вес около 300 г. Это середина беременности — мама хорошо
                  чувствует шевеления, на УЗИ можно узнать пол.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Когда начинаются шевеления плода?
                </h3>
                <p className="text-sm pl-8">
                  Первородящие мамы обычно чувствуют шевеления на 18–20 неделе,
                  повторнородящие — на 16–18 неделе. Малыш шевелится с 8 недели,
                  но из-за маленького размера мама ещё не ощущает движений.
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
                href="/zdorovye/beremennost/data-rodov"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">🤰</span>
                  Дата родов
                </h3>
                <p className="text-sm mt-1 pl-7">
                  Расчёт предполагаемой даты родов (ПДР) с таймлайном
                  ключевых дат.
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
                  Определите дни овуляции и фертильное окно для планирования.
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
