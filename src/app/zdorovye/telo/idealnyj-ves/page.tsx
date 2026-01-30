import type { Metadata } from 'next'
import Link from 'next/link'
import { IdealWeightCalculator } from '@/components/calculators/IdealWeightCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор идеального веса — расчёт по 5 формулам',
  description:
    'Бесплатный калькулятор идеального веса: расчёт по формулам Devine, Robinson, Miller, Hamwi и Брока. Сравнение результатов 5 формул, диапазон идеального веса и сравнение с текущим.',
  keywords: [
    'идеальный вес',
    'калькулятор идеального веса',
    'нормальный вес по росту',
    'формула идеального веса',
    'расчёт веса',
    'вес по росту',
    'идеальная масса тела',
    'калькулятор веса',
  ],
  openGraph: {
    title: 'Калькулятор идеального веса — расчёт по 5 формулам',
    description:
      'Узнайте свой идеальный вес по 5 научным формулам. Сравнение результатов и оценка текущего веса.',
    type: 'website',
    url: '/zdorovye/telo/idealnyj-ves',
  },
  alternates: {
    canonical: '/zdorovye/telo/idealnyj-ves',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Тело', href: '/zdorovye/telo' },
  { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' },
]

export default function IdealWeightPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор идеального веса',
          description:
            'Онлайн калькулятор идеального веса по 5 научным формулам с визуальным сравнением результатов',
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
              name: 'Какая формула идеального веса самая точная?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Наиболее распространённой считается формула Devine (1974), которая используется в клинической практике для дозирования лекарств. Однако ни одна формула не является абсолютно точной — рекомендуется ориентироваться на диапазон значений по нескольким формулам.',
              },
            },
            {
              '@type': 'Question',
              name: 'Почему разные формулы дают разные результаты?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формулы создавались в разные годы, на основе разных выборок населения и с разными методологиями. Например, формулы Devine и Robinson используют дюймы роста, а формула Брока — сантиметры. Поэтому разброс в 3–7 кг считается нормальным.',
              },
            },
            {
              '@type': 'Question',
              name: 'Учитывают ли формулы идеального веса возраст?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Классические формулы идеального веса (Devine, Robinson, Miller, Hamwi, Брока) не учитывают возраст — они основаны только на росте и поле. Для более точной оценки рекомендуется учитывать ИМТ, процент жира и обхват талии.',
              },
            },
            {
              '@type': 'Question',
              name: 'Можно ли использовать калькулятор при росте ниже 152 см?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста от 152 см (60 дюймов). При меньшем росте результат может быть неточным. Формула Брока работает для любого роста, но также имеет ограничения.',
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
          name: 'Как рассчитать идеальный вес',
          description:
            'Пошаговая инструкция по расчёту идеального веса с помощью онлайн-калькулятора.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите рост и текущий вес с помощью удобных слайдеров.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Сравните формулы',
              text: 'Калькулятор мгновенно рассчитает идеальный вес по 5 научным формулам и покажет визуальное сравнение.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Оцените результат',
              text: 'Узнайте диапазон идеального веса, среднее значение и разницу с вашим текущим весом.',
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
              name: 'Идеальный вес',
              item: 'https://calcbox.ru/zdorovye/telo/idealnyj-ves',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор идеального веса
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте идеальный вес по 5 научным формулам и сравните
            результаты. Калькулятор учитывает пол и рост, показывает диапазон
            и сравнение с текущим весом.
          </p>
        </header>

        <section className="mb-12">
          <IdealWeightCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Что такое идеальный вес
            </h2>
            <p>
              Идеальный вес — это масса тела, при которой организм функционирует
              наиболее эффективно, а риски заболеваний, связанных с весом,
              минимальны. Понятие &laquo;идеального веса&raquo; не имеет единого
              определения — это скорее диапазон, чем конкретное число.
            </p>
            <p>
              Идеальный вес зависит от множества факторов: роста, пола, возраста,
              типа телосложения, соотношения мышечной и жировой ткани. Именно
              поэтому наш калькулятор использует сразу 5 формул — это даёт более
              объективную картину, чем любая одна формула по отдельности.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Формулы расчёта идеального веса
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Devine (1974) — рекомендуемая
                </h3>
                <p>
                  Создана доктором Б. Дж. Девайном и первоначально использовалась
                  для расчёта дозировок лекарств. Стала одной из самых
                  распространённых формул в клинической практике.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    50 + 2,3 &times; (рост в дюймах &minus; 60)
                  </p>
                  <p>
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    45,5 + 2,3 &times; (рост в дюймах &minus; 60)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Robinson (1983)
                </h3>
                <p>
                  Модификация формулы Девайна, разработанная для более точного
                  определения идеального веса. Даёт немного более высокие
                  значения для женщин и чуть более высокие для мужчин.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    52 + 1,9 &times; (рост в дюймах &minus; 60)
                  </p>
                  <p>
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    49 + 1,7 &times; (рост в дюймах &minus; 60)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Miller (1983)
                </h3>
                <p>
                  Формула Миллера даёт несколько более высокие значения
                  идеального веса по сравнению с другими формулами.
                  Это может быть более реалистичным для людей с крупным
                  телосложением.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    56,2 + 1,41 &times; (рост в дюймах &minus; 60)
                  </p>
                  <p>
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    53,1 + 1,36 &times; (рост в дюймах &minus; 60)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Hamwi (1964)
                </h3>
                <p>
                  Одна из старейших формул, предложенная эндокринологом
                  Г. Дж. Хамви. Широко применялась в больницах и до сих пор
                  используется в некоторых клинических рекомендациях.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    48 + 2,7 &times; (рост в дюймах &minus; 60)
                  </p>
                  <p>
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    45,5 + 2,2 &times; (рост в дюймах &minus; 60)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Формула Брока (модифицированная)
                </h3>
                <p>
                  Оригинальная формула Поля Брока (1871): рост &minus; 100.
                  Модифицированная версия добавляет коэффициент 1,15 и поправку
                  на пол, что делает результат более точным для современных людей.
                </p>
                <div className="rounded-lg border p-4 text-sm">
                  <p>
                    <strong className="text-foreground">Мужчины:</strong>{' '}
                    (рост &minus; 100) &times; 1,15
                  </p>
                  <p>
                    <strong className="text-foreground">Женщины:</strong>{' '}
                    (рост &minus; 110) &times; 1,15
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Почему формулы дают разные результаты
            </h2>
            <p>
              Разница между формулами обычно составляет 3–7 кг. Это связано
              с тем, что каждая формула была создана в разное время, на основе
              разных групп людей и с использованием разных методологий.
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Разные выборки.</strong>{' '}
                Формулы создавались на разных популяциях — от американских
                солдат до пациентов больниц.
              </li>
              <li>
                <strong className="text-foreground">Разные годы.</strong>{' '}
                Формула Хамви (1964) отражает стандарты 60-х годов, а формулы
                Робинсона и Миллера (1983) — более современные представления
                о норме.
              </li>
              <li>
                <strong className="text-foreground">Разные единицы.</strong>{' '}
                Формулы Devine, Robinson, Miller и Hamwi используют дюймы роста,
                а формула Брока — сантиметры. Перевод единиц вносит дополнительную
                погрешность.
              </li>
            </ul>
            <p>
              Именно поэтому лучше ориентироваться на диапазон значений,
              а не на одно конкретное число. Если ваш вес попадает в диапазон
              от минимума до максимума по всем формулам — это хороший знак.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Ограничения формул идеального веса
            </h2>
            <p>
              Все формулы идеального веса имеют важные ограничения,
              о которых следует помнить.
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Не учитывают возраст.</strong>{' '}
                Ни одна из 5 формул не принимает во внимание возраст, хотя
                с годами состав тела меняется.
              </li>
              <li>
                <strong className="text-foreground">
                  Не учитывают телосложение.
                </strong>{' '}
                Люди с широкой костью (гиперстеники) могут весить больше нормы
                по формулам и при этом быть здоровыми.
              </li>
              <li>
                <strong className="text-foreground">
                  Не различают мышцы и жир.
                </strong>{' '}
                Спортсмены с развитой мускулатурой могут весить существенно
                больше &laquo;идеального&raquo; по формулам.
              </li>
              <li>
                <strong className="text-foreground">
                  Ограничение по росту.
                </strong>{' '}
                Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста
                от 152 см (60 дюймов). При меньшем росте результат некорректен.
              </li>
            </ul>
            <p>
              Для комплексной оценки рекомендуется учитывать ИМТ, процент жира
              в организме, обхват талии и общее самочувствие.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как достичь идеального веса
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Если вес выше идеального
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Рассчитайте суточную норму калорий и создайте дефицит 300–500 ккал</li>
                  <li>Добавьте регулярную физическую активность</li>
                  <li>Безопасный темп — 0,5–1 кг в неделю</li>
                  <li>При большом лишнем весе проконсультируйтесь с врачом</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Если вес ниже идеального
                </h3>
                <ul className="space-y-1 pl-4 list-disc text-sm">
                  <li>Увеличьте калорийность рациона на 300–500 ккал</li>
                  <li>Добавьте силовые тренировки для набора мышц</li>
                  <li>Ешьте чаще — 4–5 приёмов пищи в день</li>
                  <li>Исключите медицинские причины дефицита веса</li>
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
                  Какая формула идеального веса самая точная?
                </h3>
                <p>
                  Наиболее распространённой считается формула Devine (1974),
                  которая используется в клинической практике. Однако ни одна
                  формула не является абсолютно точной — лучше ориентироваться
                  на диапазон значений по нескольким формулам.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Почему разные формулы дают разные результаты?
                </h3>
                <p>
                  Формулы создавались в разные годы, на разных выборках населения
                  и с разными методологиями. Разброс в 3–7 кг считается
                  нормальным.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Учитывают ли формулы возраст?
                </h3>
                <p>
                  Классические формулы идеального веса (Devine, Robinson, Miller,
                  Hamwi, Брока) не учитывают возраст — они основаны только на росте
                  и поле. Для более точной оценки рекомендуется дополнительно
                  учитывать ИМТ и процент жира.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Можно ли использовать калькулятор при росте ниже 152 см?
                </h3>
                <p>
                  Формулы Devine, Robinson, Miller и Hamwi рассчитаны для роста
                  от 152 см (60 дюймов). При меньшем росте результат может быть
                  неточным. Формула Брока работает для любого роста, но также
                  имеет свои ограничения.
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
