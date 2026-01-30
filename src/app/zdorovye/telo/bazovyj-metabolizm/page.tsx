import type { Metadata } from 'next'
import Link from 'next/link'
import { BMRCalculator } from '@/components/calculators/BMRCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор базового метаболизма — BMR по 5 формулам',
  description:
    'Бесплатный калькулятор базового метаболизма (BMR): формулы Миффлина-Сан Жеора, Харриса-Бенедикта, Кетча-МакАрдла и ВОЗ. Сравнение 5 формул, расход в покое и рекомендации.',
  keywords: [
    'базовый метаболизм',
    'калькулятор BMR',
    'базовый обмен веществ',
    'расчёт метаболизма',
    'формула Миффлина',
    'формула Харриса-Бенедикта',
    'калории в покое',
    'BMR калькулятор',
  ],
  openGraph: {
    title: 'Калькулятор базового метаболизма — BMR по 5 формулам',
    description:
      'Узнайте свой базовый метаболизм по 5 научным формулам. Сравнение результатов, расход в покое и пояснения.',
    type: 'website',
    url: '/zdorovye/telo/bazovyj-metabolizm',
  },
  alternates: {
    canonical: '/zdorovye/telo/bazovyj-metabolizm',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Базовый метаболизм', href: '/zdorovye/telo/bazovyj-metabolizm' },
]

export default function BMRPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор базового метаболизма (BMR)',
          description:
            'Онлайн калькулятор базового метаболизма по 5 научным формулам с мгновенным сравнением результатов',
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
              name: 'Что такое базовый метаболизм (BMR)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Базовый метаболизм (BMR, Basal Metabolic Rate) — это количество калорий, которое организм тратит в полном покое для поддержания жизненных функций: дыхания, кровообращения, работы мозга и обновления клеток. Это минимальная энергия, необходимая для жизни.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем BMR отличается от TDEE?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'BMR — расход энергии в полном покое. TDEE (Total Daily Energy Expenditure) — полный суточный расход с учётом физической активности. TDEE = BMR × коэффициент активности (от 1.2 для сидячего образа жизни до 1.9 для профессиональных спортсменов).',
              },
            },
            {
              '@type': 'Question',
              name: 'Какая формула расчёта BMR самая точная?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формула Миффлина-Сан Жеора (1990) считается наиболее точной для большинства людей по данным Американской диетической ассоциации (ADA). Для спортсменов с известным процентом жира точнее формула Кетча-МакАрдла.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли есть меньше BMR при похудении?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Не рекомендуется. Потребление калорий ниже BMR может замедлить метаболизм, привести к потере мышечной массы, дефициту питательных веществ и гормональным нарушениям. Безопасный дефицит — 300–500 ккал от TDEE, но не ниже BMR.',
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
          name: 'Как рассчитать базовый метаболизм',
          description:
            'Пошаговая инструкция по расчёту базового метаболизма с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите возраст, рост и вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Получите результат',
              text: 'Калькулятор мгновенно покажет ваш BMR по рекомендуемой формуле Миффлина-Сан Жеора.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Сравните формулы',
              text: 'Оцените результаты по 5 научным формулам и узнайте диапазон значений.',
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
              name: 'Базовый метаболизм',
              item: 'https://calcbox.ru/zdorovye/telo/bazovyj-metabolizm',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор базового метаболизма (BMR)
          </h1>
          <p className="text-lg text-muted-foreground">
            Узнайте, сколько калорий ваш организм тратит в покое. Расчёт по 5
            научным формулам с мгновенным сравнением результатов.
          </p>
        </header>

        <section className="mb-12">
          <BMRCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое базовый метаболизм
            </h2>
            <p>
              Базовый метаболизм (BMR, Basal Metabolic Rate) — это количество
              энергии, которое организм расходует в состоянии полного покоя для
              поддержания жизненно важных функций. Сюда входит работа сердца,
              дыхание, поддержание температуры тела, работа мозга, обновление
              клеток и другие процессы, происходящие без участия сознания.
            </p>
            <p>
              BMR составляет 60–75% от общего суточного расхода энергии (TDEE).
              Это означает, что большую часть калорий организм тратит не на
              физическую активность, а на базовые биологические процессы. Знание
              своего BMR помогает правильно планировать питание — как для
              похудения, так и для набора массы.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Формулы расчёта BMR
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Миффлина-Сан Жеора (1990) — рекомендуемая
                </h3>
                <p>
                  Самая точная формула для большинства людей по данным
                  Американской диетической ассоциации (ADA). Учитывает пол,
                  возраст, рост и вес.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong> 10
                    &times; вес(кг) + 6,25 &times; рост(см) &minus; 5 &times;
                    возраст + 5
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины:</strong> 10
                    &times; вес(кг) + 6,25 &times; рост(см) &minus; 5 &times;
                    возраст &minus; 161
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Харриса-Бенедикта (1919)
                </h3>
                <p>
                  Одна из первых научных формул расчёта BMR, разработанная
                  Джеймсом Харрисом и Фрэнсисом Бенедиктом. Широко
                  использовалась в клинической практике более 70 лет, но
                  переоценивает BMR на 5–10% для современных людей.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong> 66,5 +
                    13,75 &times; вес + 5,003 &times; рост &minus; 6,755 &times;
                    возраст
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины:</strong> 655,1 +
                    9,563 &times; вес + 1,85 &times; рост &minus; 4,676 &times;
                    возраст
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Харриса-Бенедикта (1984, пересмотренная)
                </h3>
                <p>
                  Обновлённая версия оригинальной формулы, скорректированная
                  Розой и Шизгалом. Более точна, чем версия 1919 года, но
                  уступает формуле Миффлина-Сан Жеора.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong> 88,362
                    + 13,397 &times; вес + 4,799 &times; рост &minus; 5,677
                    &times; возраст
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины:</strong> 447,593
                    + 9,247 &times; вес + 3,098 &times; рост &minus; 4,33
                    &times; возраст
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Кетча-МакАрдла
                </h3>
                <p>
                  Единственная формула, использующая сухую массу тела (без жира).
                  Наиболее точна для спортсменов и людей с известным процентом
                  жира. В нашем калькуляторе используется средний процент жира
                  (20% для мужчин, 28% для женщин).
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    BMR = 370 + 21,6 &times; сухая масса тела (кг)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула ВОЗ (Всемирная организация здравоохранения)
                </h3>
                <p>
                  Разработана на основе данных из разных стран мира. Использует
                  только пол, возраст и вес. Разделена на возрастные группы:
                  до 30, 30–60 и старше 60 лет.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины 18–29:</strong>{' '}
                    15,3 &times; вес + 679
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Мужчины 30–59:</strong>{' '}
                    11,6 &times; вес + 879
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины 18–29:</strong>{' '}
                    14,7 &times; вес + 496
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Женщины 30–59:</strong>{' '}
                    8,7 &times; вес + 829
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              BMR и TDEE — в чём разница
            </h2>
            <p>
              BMR и TDEE — два ключевых показателя энергетического обмена,
              которые часто путают. BMR (базовый метаболизм) — это расход энергии
              в полном покое, а TDEE (Total Daily Energy Expenditure) — полный
              суточный расход с учётом всей физической активности.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      Показатель
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">
                      BMR
                    </th>
                    <th className="text-left py-3 font-semibold text-foreground">
                      TDEE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Что измеряет</td>
                    <td className="py-2.5 pr-4">Расход в полном покое</td>
                    <td className="py-2.5">Полный суточный расход</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Учитывает активность</td>
                    <td className="py-2.5 pr-4">Нет</td>
                    <td className="py-2.5">Да</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 pr-4">Формула</td>
                    <td className="py-2.5 pr-4">5 формул</td>
                    <td className="py-2.5">BMR &times; коэффициент</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Для чего нужен</td>
                    <td className="py-2.5 pr-4">Минимум калорий</td>
                    <td className="py-2.5">Планирование питания</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Для расчёта TDEE используйте коэффициент активности: сидячий образ
              жизни (×1,2), лёгкая активность (×1,375), средняя (×1,55),
              высокая (×1,725), очень высокая (×1,9). Рассчитать TDEE можно
              в нашем калькуляторе калорий.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Факторы, влияющие на базовый метаболизм
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Повышают BMR
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Большая мышечная масса (мышцы потребляют больше энергии)</li>
                  <li>Мужской пол (у мужчин BMR выше на 5–10%)</li>
                  <li>Молодой возраст (пик метаболизма в 20–25 лет)</li>
                  <li>Высокий рост и большая площадь тела</li>
                  <li>Генетические особенности</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Снижают BMR
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Возраст (снижение на 3–5% каждые 10 лет после 30)</li>
                  <li>Потеря мышечной массы (саркопения)</li>
                  <li>Жёсткие диеты и голодание</li>
                  <li>Нарушения щитовидной железы (гипотиреоз)</li>
                  <li>Хронический недосып и стресс</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как ускорить метаболизм
            </h2>
            <p>
              Хотя базовый метаболизм во многом определяется генетикой, полом
              и возрастом, есть научно обоснованные способы его поддержания
              и даже ускорения:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Тренировки</h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>
                    Силовые тренировки 2–4 раза в неделю для набора мышечной
                    массы — каждый кг мышц сжигает 13 ккал/день в покое
                  </li>
                  <li>
                    HIIT-тренировки повышают метаболизм на несколько часов после
                    занятия (эффект EPOC)
                  </li>
                  <li>Ежедневная ходьба 8 000–10 000 шагов</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Питание и образ жизни
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>
                    Достаточное потребление белка (1,2–1,6 г/кг) — термический
                    эффект белка 20–30%
                  </li>
                  <li>Не опускайте калорийность ниже BMR</li>
                  <li>Сон 7–9 часов — недосып снижает BMR на 2–5%</li>
                  <li>Достаточное потребление воды (30 мл на кг веса)</li>
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
                  Что такое базовый метаболизм (BMR)?
                </h3>
                <p>
                  Базовый метаболизм (BMR) — это количество калорий, которое
                  организм тратит в полном покое для поддержания жизненных
                  функций: дыхания, кровообращения, работы мозга и обновления
                  клеток. Это минимальная энергия, необходимая для жизни.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Чем BMR отличается от TDEE?
                </h3>
                <p>
                  BMR — расход энергии в полном покое. TDEE — полный суточный
                  расход с учётом физической активности. TDEE = BMR &times;
                  коэффициент активности (от 1,2 для сидячего образа жизни
                  до 1,9 для профессиональных спортсменов).
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Какая формула расчёта BMR самая точная?
                </h3>
                <p>
                  Формула Миффлина-Сан Жеора (1990) считается наиболее точной
                  для большинства людей по данным Американской диетической
                  ассоциации (ADA). Для спортсменов с известным процентом жира
                  точнее формула Кетча-МакАрдла.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Можно ли есть меньше BMR при похудении?
                </h3>
                <p>
                  Не рекомендуется. Потребление калорий ниже BMR может замедлить
                  метаболизм, привести к потере мышечной массы, дефициту
                  питательных веществ и гормональным нарушениям. Безопасный
                  дефицит — 300–500 ккал от TDEE, но не ниже BMR.
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
                  Расчёт суточной нормы калорий (TDEE) с учётом активности.
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
              <Link
                href="/zdorovye/telo/protsent-zhira"
                className="rounded-lg border p-4 transition-colors hover:bg-accent group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Процент жира
                </h3>
                <p className="text-sm mt-1">
                  Расчёт процента жира для точной формулы Кетча-МакАрдла.
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
