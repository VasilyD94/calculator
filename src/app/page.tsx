import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, Scale, Baby, Dumbbell, Heart } from 'lucide-react'

const CALCULATOR_SECTIONS = [
  {
    title: 'Питание',
    icon: Flame,
    href: '/zdorovye/pitanie',
    items: [
      { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij', hot: true },
      { label: 'Калькулятор БЖУ', href: '/zdorovye/pitanie/kalkulyator-bzhu', hot: true },
      { label: 'Дефицит калорий', href: '/zdorovye/pitanie/defitsit-kalorij' },
      { label: 'Норма воды', href: '/zdorovye/pitanie/norma-vody' },
    ],
  },
  {
    title: 'Тело',
    icon: Scale,
    href: '/zdorovye/telo',
    items: [
      { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt', hot: true },
      { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' },
      { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' },
      { label: 'Базовый метаболизм', href: '/zdorovye/telo/bazovyj-metabolizm' },
    ],
  },
  {
    title: 'Беременность',
    icon: Baby,
    href: '/zdorovye/beremennost',
    items: [
      { label: 'Дата родов', href: '/zdorovye/beremennost/data-rodov', hot: true },
      { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti', hot: true },
      { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya' },
    ],
  },
  {
    title: 'Спорт',
    icon: Dumbbell,
    href: '/zdorovye/sport',
    items: [
      { label: 'Пульс для тренировок', href: '/zdorovye/sport/puls-dlya-trenirovok' },
      { label: 'Белок для спортсменов', href: '/zdorovye/sport/belok-dlya-sportsmenov' },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Онлайн-калькуляторы здоровья
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Точные расчёты по научным формулам. Мгновенный результат без регистрации.
        </p>
      </section>

      {/* Calculator grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {CALCULATOR_SECTIONS.map((section) => (
          <Card key={section.title}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
                    >
                      <span>{item.label}</span>
                      {item.hot && (
                        <Badge variant="secondary" className="text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          Популярный
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
