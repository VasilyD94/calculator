import type { Metadata } from 'next'
import { CalorieCalculator } from '@/components/calculators/CalorieCalculator'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Калькулятор калорий онлайн — расчёт суточной нормы бесплатно',
  description:
    'Бесплатный калькулятор калорий: расчёт по 5 формулам, сравнение результатов, калории для похудения и набора массы, расчёт БЖУ.',
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Питание', href: '/zdorovye/pitanie' },
  { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij' },
]

export default function CalorieCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Калькулятор калорий онлайн',
          description: 'Онлайн калькулятор суточной нормы калорий по 5 научным формулам',
          applicationCategory: 'HealthApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'RUB',
          },
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор калорий онлайн
          </h1>
          <p className="text-lg text-muted-foreground">
            Рассчитайте суточную норму калорий по 5 научным формулам.
            Результат обновляется мгновенно при изменении параметров.
          </p>
        </header>

        <section className="mb-12">
          <CalorieCalculator />
        </section>

        {/* SEO-контент */}
        <section className="prose prose-gray max-w-none">
          <h2>Что такое калории и зачем их считать</h2>
          <p>
            Калория — это единица измерения энергии, которую организм получает из пищи.
            Знание своей суточной нормы калорий помогает контролировать вес: если вы
            потребляете больше, чем тратите — вес растёт, меньше — снижается.
          </p>

          <h2>Какие формулы использует калькулятор</h2>
          <p>
            Наш калькулятор рассчитывает норму калорий по 5 научно обоснованным формулам:
          </p>
          <ul>
            <li>
              <strong>Миффлина-Сан Жеора</strong> — самая точная для большинства людей
              по данным Американской диетической ассоциации (2005).
            </li>
            <li>
              <strong>Харриса-Бенедикта</strong> — классическая формула 1919 года
              и её пересмотренная версия 1984 года.
            </li>
            <li>
              <strong>Кетча-МакАрдла</strong> — учитывает процент жира в организме,
              подходит тренированным людям.
            </li>
            <li>
              <strong>ВОЗ</strong> — формула Всемирной организации здравоохранения.
            </li>
          </ul>

          <h2>Как пользоваться калькулятором</h2>
          <p>
            Укажите пол, возраст, рост, вес и уровень физической активности. Результат
            появится мгновенно — без нажатия кнопки. Выберите цель (похудение,
            поддержание или набор массы), чтобы увидеть рекомендуемую калорийность
            и распределение белков, жиров и углеводов.
          </p>

          <h2>Сколько калорий нужно для похудения</h2>
          <p>
            Для безопасного похудения рекомендуется создать дефицит 15-20% от суточной
            нормы. Это позволит терять 0.5-1 кг в неделю без вреда для здоровья и потери
            мышечной массы. Не рекомендуется опускаться ниже 1200 ккал для женщин
            и 1500 ккал для мужчин без консультации врача.
          </p>
        </section>
      </article>
    </>
  )
}
