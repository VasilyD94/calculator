import type { Metadata } from 'next'
import Link from 'next/link'
import { WaterCalculator } from '@/components/calculators/WaterCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор нормы воды — сколько воды пить в день',
  description:
    'Бесплатный калькулятор нормы воды: индивидуальный расчёт с учётом веса, активности, климата и особенностей организма. Расписание приёма воды на весь день.',
  keywords: [
    'норма воды',
    'сколько пить воды в день',
    'калькулятор воды',
    'суточная норма воды',
    'норма воды в день',
    'водный баланс',
    'расчёт нормы воды',
    'сколько воды нужно пить',
  ],
  openGraph: {
    title: 'Калькулятор нормы воды — сколько воды пить в день',
    description:
      'Рассчитайте индивидуальную норму воды с учётом веса, активности и климата. Расписание на день.',
    type: 'website',
    url: '/zdorovye/pitanie/norma-vody',
  },
  alternates: {
    canonical: '/zdorovye/pitanie/norma-vody',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Норма воды', href: '/zdorovye/pitanie/norma-vody' },
]

export default function WaterCalculatorPage() {
  return (
    <>
      {/* WebApplication Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор нормы воды',
          description:
            'Онлайн калькулятор суточной нормы воды с учётом веса, активности, климата и особенностей организма',
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
              name: 'Сколько воды нужно пить в день?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Индивидуальная норма зависит от веса, активности и климата. Базовая формула: 30–35 мл на 1 кг массы тела. Для человека весом 70 кг это 2,1–2,5 литра в день.',
              },
            },
            {
              '@type': 'Question',
              name: 'Считается ли чай и кофе в норму воды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Чай, травяные отвары, морс и супы входят в суточную норму жидкости. Кофе обладает лёгким мочегонным эффектом, но умеренное потребление (до 3 чашек) также учитывается. Алкоголь не считается.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как понять, что я пью недостаточно воды?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Основные признаки обезвоживания: тёмный цвет мочи, сухость во рту, головная боль, усталость, головокружение и снижение концентрации. В норме моча должна быть светло-жёлтого цвета.',
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
          name: 'Как рассчитать норму воды в день',
          description:
            'Пошаговая инструкция по расчёту индивидуальной нормы воды.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Укажите параметры',
              text: 'Выберите пол, укажите вес и уровень физической активности.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Уточните условия',
              text: 'Отметьте жаркий климат, если температура выше 30°C. Для женщин доступны опции беременности и кормления грудью.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Получите результат',
              text: 'Калькулятор покажет норму в мл и стаканах, разбивку по факторам и расписание приёма воды на весь день.',
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
              name: 'Норма воды',
              item: 'https://calcbox.ru/zdorovye/pitanie/norma-vody',
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор нормы воды
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте индивидуальную суточную норму воды с учётом вашего веса,
            активности, климата и особенностей организма. Результат обновляется
            мгновенно.
          </p>
        </header>

        <section className="mb-12">
          <WaterCalculator />
        </section>

        {/* SEO-контент */}
        <section className="space-y-10 text-base leading-7 text-muted-foreground">
          {/* Блок 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Зачем пить воду и почему это важно
            </h2>
            <p>
              Вода — основа жизнедеятельности организма. Она составляет 60–70%
              массы тела взрослого человека и участвует практически во всех
              биохимических процессах: от переваривания пищи до терморегуляции.
              Без пищи человек может прожить несколько недель, а без воды —
              всего 3–5 дней.
            </p>
            <p>
              Достаточное потребление воды обеспечивает нормальную работу
              почек, помогает выводить токсины, поддерживает эластичность кожи,
              смазывает суставы и улучшает когнитивные функции. Исследования
              показывают, что даже лёгкое обезвоживание (потеря 1–2% жидкости)
              снижает концентрацию внимания, ухудшает настроение и повышает
              утомляемость.
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как рассчитывается норма воды
            </h2>
            <p>
              Базовая формула расчёта: 30–35 мл воды на каждый килограмм массы
              тела. Для мужчин используется коэффициент 35 мл/кг, для женщин —
              31 мл/кг. Эти значения основаны на рекомендациях Всемирной
              организации здравоохранения (ВОЗ) и Института медицины (IOM).
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Пример для мужчины 80 кг
                </h3>
                <p className="text-sm">
                  80 кг &times; 35 мл = 2800 мл (2,8 литра) — базовая
                  потребность без учёта активности и климата.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Пример для женщины 60 кг
                </h3>
                <p className="text-sm">
                  60 кг &times; 31 мл = 1860 мл (1,9 литра) — базовая
                  потребность без учёта активности и климата.
                </p>
              </div>
            </div>
            <p>
              К базовой потребности добавляются бонусы: за физическую
              активность (до +800 мл), за жаркий климат (+500 мл), за
              беременность (+300 мл) или кормление грудью (+700 мл).
            </p>
          </div>

          <hr className="border-border" />

          {/* Блок 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Признаки обезвоживания
            </h2>
            <p>
              Обезвоживание наступает, когда организм теряет больше жидкости,
              чем получает. Важно распознавать первые признаки, чтобы
              своевременно восполнить баланс.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border p-5">
                <h3 className="font-semibold text-foreground">
                  Ранние признаки
                </h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-amber-500 text-sm">
                  <li>Тёмная моча (темнее светло-соломенного цвета)</li>
                  <li>Жажда и сухость во рту</li>
                  <li>Головная боль без явной причины</li>
                  <li>Повышенная утомляемость</li>
                  <li>Снижение концентрации внимания</li>
                </ul>
              </div>
              <div className="space-y-4 rounded-lg border p-5">
                <h3 className="font-semibold text-foreground">
                  Серьёзные признаки
                </h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-red-500 text-sm">
                  <li>Головокружение и предобморочное состояние</li>
                  <li>Учащённое сердцебиение</li>
                  <li>Сухая, потерявшая упругость кожа</li>
                  <li>Редкое мочеиспускание (менее 4 раз в день)</li>
                  <li>Мышечные судороги</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Когда нужно пить больше воды
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">
                  Физические нагрузки
                </strong>{' '}
                — при тренировке организм теряет 0,5–1 литр жидкости через пот
                в час. Пейте 150–200 мл каждые 15–20 минут во время занятий.
              </li>
              <li>
                <strong className="text-foreground">
                  Жаркая погода
                </strong>{' '}
                — при температуре выше 30°C потоотделение усиливается.
                Добавьте 500 мл к суточной норме.
              </li>
              <li>
                <strong className="text-foreground">
                  Болезнь с температурой
                </strong>{' '}
                — при повышенной температуре тела потеря жидкости
                увеличивается. Пейте больше тёплой воды, морса, компота.
              </li>
              <li>
                <strong className="text-foreground">
                  После алкоголя
                </strong>{' '}
                — алкоголь обладает сильным мочегонным эффектом. На каждую
                порцию алкоголя выпивайте дополнительный стакан воды.
              </li>
              <li>
                <strong className="text-foreground">
                  Сухой воздух
                </strong>{' '}
                — кондиционеры и отопление снижают влажность, увеличивая
                потерю жидкости через дыхание и кожу.
              </li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* Блок 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Мифы о воде
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Миф: Нужно пить ровно 8 стаканов в день
                </h3>
                <p className="text-sm">
                  Это обобщённая рекомендация, не учитывающая вес, активность
                  и климат. Человеку весом 50 кг нужно значительно меньше
                  воды, чем человеку весом 100 кг. Используйте
                  индивидуальный расчёт.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Миф: Чай и кофе обезвоживают
                </h3>
                <p className="text-sm">
                  Кофеин обладает лёгким мочегонным эффектом, но при
                  умеренном потреблении (до 400 мг кофеина в день) чай и кофе
                  вносят положительный вклад в водный баланс. Они
                  преимущественно состоят из воды.
                </p>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <h3 className="font-semibold text-foreground">
                  Миф: Чем больше воды — тем лучше
                </h3>
                <p className="text-sm">
                  Избыточное потребление воды (гипергидратация) может привести
                  к водной интоксикации — опасному состоянию, при котором
                  снижается концентрация натрия в крови. Придерживайтесь
                  рассчитанной нормы.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Блок 6 — советы */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Как приучить себя пить достаточно воды
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                <p>
                  <strong className="text-foreground">Начинайте утро со стакана воды.</strong>{' '}
                  За ночь организм теряет до 500 мл жидкости. Стакан воды
                  натощак запускает метаболизм и восполняет потери.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                <p>
                  <strong className="text-foreground">Держите бутылку воды на виду.</strong>{' '}
                  Визуальное напоминание работает лучше любого приложения.
                  Поставьте бутылку на рабочий стол или носите с собой.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                <p>
                  <strong className="text-foreground">Пейте перед каждым приёмом пищи.</strong>{' '}
                  Стакан воды за 30 минут до еды улучшает пищеварение
                  и помогает контролировать аппетит.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </span>
                <p>
                  <strong className="text-foreground">Следите за цветом мочи.</strong>{' '}
                  Это самый простой индикатор гидратации. Светло-жёлтый цвет
                  — норма. Тёмный — пора выпить стакан воды.
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
                  Сколько воды нужно пить в день?
                </h3>
                <p>
                  Индивидуальная норма зависит от веса, пола, активности
                  и климата. Базовая формула: 30–35 мл на каждый килограмм
                  массы тела. Для человека весом 70 кг это 2,1–2,5 литра.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Считается ли чай и кофе в норму воды?
                </h3>
                <p>
                  Чай, морс, компот, суп и сочные фрукты учитываются
                  в суточной норме жидкости. Кофе при умеренном потреблении
                  (до 3 чашек) тоже засчитывается. Алкоголь не учитывается.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Как понять, что я пью недостаточно воды?
                </h3>
                <p>
                  Основные признаки: тёмная моча, сухость во рту, головная
                  боль, усталость и снижение концентрации. Моча здорового
                  человека — светло-жёлтого цвета.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Можно ли пить слишком много воды?
                </h3>
                <p>
                  Да, избыточное потребление воды (более 5–6 литров в день)
                  может привести к гипонатриемии — снижению уровня натрия
                  в крови. Это опасное состояние. Придерживайтесь рассчитанной
                  нормы.
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
            </div>
          </nav>
        </section>
      </article>
    </>
  )
}
