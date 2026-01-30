import { Flame, Scale, Baby, Dumbbell, type LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  hot?: boolean
}

export interface NavSection {
  title: string
  href: string
  icon: LucideIcon
  items: NavItem[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Питание',
    href: '/zdorovye/pitanie',
    icon: Flame,
    items: [
      { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij', hot: true },
      { label: 'Калькулятор БЖУ', href: '/zdorovye/pitanie/kalkulyator-bzhu', hot: true },
      { label: 'Дефицит калорий', href: '/zdorovye/pitanie/defitsit-kalorij' },
      { label: 'Норма воды', href: '/zdorovye/pitanie/norma-vody' },
    ],
  },
  {
    title: 'Тело',
    href: '/zdorovye/telo',
    icon: Scale,
    items: [
      { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt', hot: true },
      { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' },
      { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' },
      { label: 'Базовый метаболизм', href: '/zdorovye/telo/bazovyj-metabolizm' },
    ],
  },
  {
    title: 'Беременность',
    href: '/zdorovye/beremennost',
    icon: Baby,
    items: [
      { label: 'Дата родов', href: '/zdorovye/beremennost/data-rodov', hot: true },
      { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti', hot: true },
      { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya' },
    ],
  },
  {
    title: 'Спорт',
    href: '/zdorovye/sport',
    icon: Dumbbell,
    items: [
      { label: 'Пульс для тренировок', href: '/zdorovye/sport/puls-dlya-trenirovok' },
      { label: 'Белок для спортсменов', href: '/zdorovye/sport/belok-dlya-sportsmenov' },
    ],
  },
]
