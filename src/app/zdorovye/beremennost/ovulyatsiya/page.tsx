import type { Metadata } from 'next'
import Link from 'next/link'
import { OvulationCalculator } from '@/components/calculators/OvulationCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { Calendar, FlaskConical, Thermometer, ScanSearch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Калькулятор овуляции — рассчитайте дни для зачатия',
  description:
    'Бесплатный калькулятор овуляции: узнайте дату овуляции, фертильное окно и прогноз на 6 циклов. Расчёт по дате месячных и длине цикла. Мгновенный результат.',
  keywords: [
    'калькулятор овуляции',
    'овуляция расчёт',
    'фертильное окно',
    'дни для зачатия',
    'когда овуляция',
    'планирование беременности',
    'менструальный цикл',
    'календарь овуляции',
  ],
  openGraph: {
    title: 'Калькулятор овуляции — рассчитайте дни для зачатия',
    description:
      'Узнайте дату овуляции, фертильное окно и прогноз циклов для планирования беременности.',
    type: 'website',
    url: '/zdorovye/beremennost/ovulyatsiya',
  },
  alternates: {
    canonical: '/zdorovye/beremennost/ovulyatsiya',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Беременность', href: '/zdorovye/beremennost' },
  { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya' },
]

export default function OvulationPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор овуляции',
          description:
            'Онлайн калькулятор овуляции с расчётом фертильного окна и прогнозом циклов',
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
              name: 'Как рассчитать день овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Овуляция происходит примерно за 14 дней до начала следующих месячных. При цикле 28 дней это 14-й день цикла. При цикле 30 дней — 16-й день. Наиболее точные методы — тесты на овуляцию и фолликулометрия (УЗИ).',
              },
            },
            {
              '@type': 'Question',
              name: 'Сколько длится фертильное окно?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Фертильное окно длится около 6–7 дней: 5 дней до овуляции (срок жизни сперматозоидов) и 1–2 дня после (срок жизни яйцеклетки). Наибольшая вероятность зачатия — за 1–2 дня до овуляции и в день овуляции.',
              },
            },
            {
              '@type': 'Question',
              name: 'Какие признаки овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Основные признаки: повышение базальной температуры на 0.2–0.5°C, прозрачные тягучие выделения (как яичный белок), лёгкая боль внизу живота (овуляторный синдром), повышение либидо, нагрубание молочных желёз.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли забеременеть не в день овуляции?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, зачатие возможно в течение всего фертильного окна (5–6 дней). Сперматозоиды сохраняют жизнеспособность в женских половых путях до 5 дней, поэтому половой акт за несколько дней до овуляции тоже может привести к беременности.',
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
          name: 'Как рассчитать овуляцию онлайн',
          description:
            'Пошаговая инструкция по расчёту даты овуляции и фертильного окна.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите дату месячных',
              text: 'Введите первый день ваших последних месячных.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Настройте параметры цикла',
              text: 'Укажите среднюю длину вашего менструального цикла (21–45 дней) и длительность менструации.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет дату овуляции, фертильное окно, текущую фазу цикла и прогноз на 6 циклов.',
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
              name: 'Овуляция',
              item: 'https://calcbox.ru/zdorovye/beremennost/ovulyatsiya',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор овуляции
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте дату овуляции и фертильное окно для планирования
            беременности. Прогноз на 6 циклов вперёд по дате последних месячных
            и длине цикла.
          </p>
        </header>

        <section className="mb-12">
          <OvulationCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое овуляция
            </h2>
            <p>
              Овуляция — это выход созревшей яйцеклетки из яичника
              в маточную трубу. Это единственный момент в цикле, когда
              возможно зачатие. Яйцеклетка живёт всего 12–24 часа после
              выхода, поэтому знание точной даты овуляции критически важно
              при планировании беременности.
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              <div className="flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1.5 rounded-lg bg-pink-50 border border-pink-200 px-3 py-2.5 sm:px-2 sm:py-3">
                <span className="text-xl shrink-0">🥚</span>
                <div>
                  <p className="text-sm font-medium text-pink-700">Яйцеклетка</p>
                  <p className="text-xs text-pink-600">живёт 12–24 часа</p>
                </div>
              </div>
              <div className="flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1.5 rounded-lg bg-blue-50 border border-blue-200 px-3 py-2.5 sm:px-2 sm:py-3">
                <span className="text-xl shrink-0">💧</span>
                <div>
                  <p className="text-sm font-medium text-blue-700">Сперматозоиды</p>
                  <p className="text-xs text-blue-600">живут до 5 дней</p>
                </div>
              </div>
              <div className="flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1.5 rounded-lg bg-green-50 border border-green-200 px-3 py-2.5 sm:px-2 sm:py-3">
                <span className="text-xl shrink-0">📅</span>
                <div>
                  <p className="text-sm font-medium text-primary">Лютеиновая фаза</p>
                  <p className="text-xs text-green-600">стабильно 14 дней</p>
                </div>
              </div>
            </div>
            <p>
              Овуляция обычно происходит за 14 дней до начала следующей
              менструации. Эта закономерность (постоянство лютеиновой фазы)
              лежит в основе календарного метода расчёта.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 — Методы определения */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как определить овуляцию
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 shrink-0">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      Календарный метод
                    </h3>
                    <span className="text-xs text-purple-600 font-medium">
                      Точность ~80%
                    </span>
                  </div>
                </div>
                <p className="text-sm">
                  Расчёт по формуле: день овуляции = длина цикла &minus; 14.
                  Прост, но точен только при регулярном цикле. Погрешность
                  &plusmn;2–3 дня.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100 text-pink-600 shrink-0">
                    <FlaskConical className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      Тесты на овуляцию
                    </h3>
                    <span className="text-xs text-pink-600 font-medium">
                      Точность 97–99%
                    </span>
                  </div>
                </div>
                <p className="text-sm">
                  Определяют пик лютеинизирующего гормона (ЛГ) в моче
                  за 24–36 часов до овуляции. Продаются в аптеках.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                    <Thermometer className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      Базальная температура
                    </h3>
                    <span className="text-xs text-orange-600 font-medium">
                      Постфактум
                    </span>
                  </div>
                </div>
                <p className="text-sm">
                  Измеряется утром до подъёма. После овуляции повышается
                  на 0.2–0.5°C и остаётся высокой до менструации.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 shrink-0">
                    <ScanSearch className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      Фолликулометрия (УЗИ)
                    </h3>
                    <span className="text-xs text-blue-600 font-medium">
                      Самый точный
                    </span>
                  </div>
                </div>
                <p className="text-sm">
                  Врач отслеживает рост фолликула на УЗИ каждые 2–3 дня.
                  Применяется при лечении бесплодия и стимуляции овуляции.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 — Фертильное окно */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Фертильное окно
            </h2>
            <p>
              Фертильное окно — это период, когда зачатие наиболее вероятно.
              Оно длится около 6–7 дней: 5 дней до овуляции (столько живут
              сперматозоиды в женских половых путях) плюс 1–2 дня после
              (срок жизни яйцеклетки).
            </p>
            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-semibold text-foreground">
                Вероятность зачатия по дням
              </h3>
              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>5 дней до овуляции</span>
                    <span className="font-medium text-foreground">~4%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/20" style={{ width: '13%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>3–4 дня до</span>
                    <span className="font-medium text-foreground">~10–15%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/30" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">1–2 дня до</span>
                    <span className="font-semibold text-primary">~25–30%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/60" style={{ width: '90%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">День овуляции 🥚</span>
                    <span className="font-semibold text-primary">~20–25%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/50" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>1 день после</span>
                    <span className="font-medium text-foreground">~5–10%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/20" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 — Фазы цикла */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Фазы менструального цикла
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-red-200 bg-red-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm">
                    1
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Менструальная фаза
                  </h3>
                  <span className="ml-auto text-xs text-red-600 font-medium">
                    1–5 день
                  </span>
                </div>
                <p className="text-sm">
                  Отторжение эндометрия, менструальное кровотечение.
                  Уровень гормонов минимален. Длится 3–7 дней.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm">
                    2
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Фолликулярная фаза
                  </h3>
                  <span className="ml-auto text-xs text-blue-600 font-medium">
                    6–13 день
                  </span>
                </div>
                <p className="text-sm">
                  В яичнике растёт доминантный фолликул с яйцеклеткой.
                  Эстроген повышается, эндометрий нарастает. Длительность
                  варьируется.
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm">
                    3
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Овуляция
                  </h3>
                  <span className="ml-auto text-xs text-green-600 font-medium">
                    14 день
                  </span>
                </div>
                <p className="text-sm">
                  Пик ЛГ вызывает выход яйцеклетки из фолликула. Она
                  попадает в маточную трубу и ждёт оплодотворения 12–24
                  часа.
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm">
                    4
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Лютеиновая фаза
                  </h3>
                  <span className="ml-auto text-xs text-amber-600 font-medium">
                    15–28 день
                  </span>
                </div>
                <p className="text-sm">
                  Фолликул превращается в жёлтое тело и вырабатывает
                  прогестерон. Длится стабильно ~14 дней. Если зачатия нет —
                  начинается менструация.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 — Признаки овуляции */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Признаки овуляции
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💧</span>
                  <h3 className="font-semibold text-foreground">
                    Изменение выделений
                  </h3>
                </div>
                <p className="text-sm">
                  Становятся прозрачными, тягучими (как яичный белок).
                  Это цервикальная слизь, которая помогает сперматозоидам
                  достичь яйцеклетки.
                </p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌡️</span>
                  <h3 className="font-semibold text-foreground">
                    Базальная температура
                  </h3>
                </div>
                <p className="text-sm">
                  Повышается на 0.2–0.5°C после овуляции из-за выброса
                  прогестерона. Фиксируется при ежедневном измерении утром.
                </p>
              </div>
              <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <h3 className="font-semibold text-foreground">
                    Овуляторный синдром
                  </h3>
                </div>
                <p className="text-sm">
                  Лёгкая тянущая боль внизу живота с одной стороны.
                  Ощущается примерно у 20% женщин.
                </p>
              </div>
              <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">❤️‍🔥</span>
                  <h3 className="font-semibold text-foreground">
                    Повышение либидо
                  </h3>
                </div>
                <p className="text-sm">
                  Природный механизм для увеличения шансов зачатия
                  в фертильные дни.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 sm:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤱</span>
                  <h3 className="font-semibold text-foreground">
                    Нагрубание груди
                  </h3>
                </div>
                <p className="text-sm">
                  Чувствительность и лёгкая болезненность молочных желёз
                  из-за гормональных изменений.
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
                  Как рассчитать день овуляции?
                </h3>
                <p className="text-sm pl-8">
                  Овуляция происходит примерно за 14 дней до начала
                  следующих месячных. При цикле 28 дней это 14-й день,
                  при цикле 30 дней — 16-й день. Для точного определения
                  используйте тесты на овуляцию или фолликулометрию.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Сколько длится фертильное окно?
                </h3>
                <p className="text-sm pl-8">
                  Фертильное окно длится 6–7 дней: 5 дней до овуляции
                  и 1–2 дня после. Наибольшие шансы зачатия — за 1–2 дня
                  до овуляции и в день овуляции.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Какие признаки овуляции?
                </h3>
                <p className="text-sm pl-8">
                  Основные признаки: прозрачные тягучие выделения, повышение
                  базальной температуры, лёгкая боль внизу живота, повышение
                  либидо, нагрубание груди.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">?</span>
                  Можно ли забеременеть не в день овуляции?
                </h3>
                <p className="text-sm pl-8">
                  Да. Сперматозоиды живут в женских половых путях до 5
                  дней, поэтому половой акт за несколько дней до овуляции
                  тоже может привести к беременности.
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
                href="/zdorovye/beremennost/srok-beremennosti"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-lg">👶</span>
                  Срок беременности
                </h3>
                <p className="text-sm mt-1 pl-7">
                  Определите текущую неделю и развитие малыша.
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
