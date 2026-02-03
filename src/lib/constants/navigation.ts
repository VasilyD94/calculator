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

// "hot" = >100K показов/мес по Wordstat (февраль 2026)
export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Питание',
    href: '/zdorovye/pitanie',
    icon: Flame,
    items: [
      { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij', hot: true }, // 125K
      { label: 'Калькулятор БЖУ', href: '/zdorovye/pitanie/kalkulyator-bzhu' }, // 12K — убрали hot
      { label: 'Дефицит калорий', href: '/zdorovye/pitanie/defitsit-kalorij' }, // 94K
      { label: 'Сколько воды пить', href: '/zdorovye/pitanie/norma-vody' }, // 89K
    ],
  },
  {
    title: 'Тело',
    href: '/zdorovye/telo',
    icon: Scale,
    items: [
      { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt', hot: true }, // 224K
      { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' }, // 84K
      { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' }, // 11K
      { label: 'Норма калорий', href: '/zdorovye/telo/bazovyj-metabolizm' }, // 8K+ "сколько калорий нужно"
      { label: 'Калькулятор возраста', href: '/zdorovye/telo/kalkulyator-vozrasta', hot: true }, // 140K
      { label: 'Калькулятор алкоголя', href: '/zdorovye/telo/kalkulyator-alkogolya' }, // 74K
      { label: 'Калькулятор сна', href: '/zdorovye/telo/kalkulyator-sna' }, // 57K
      { label: 'Норма давления', href: '/zdorovye/telo/norma-davleniya', hot: true }, // 356K
      { label: 'Тип телосложения', href: '/zdorovye/telo/tip-teloslozheniya' }, // 24K
    ],
  },
  {
    title: 'Беременность',
    href: '/zdorovye/beremennost',
    icon: Baby,
    items: [
      { label: 'Рассчитать дату родов', href: '/zdorovye/beremennost/data-rodov', hot: true }, // 111K
      { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti', hot: true }, // 861K
      { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya', hot: true }, // 953K — ТОПОВАЯ!
      { label: 'Группа крови ребёнка', href: '/zdorovye/beremennost/gruppa-krovi-rebenka', hot: true }, // 124K
    ],
  },
  {
    title: 'Спорт',
    href: '/zdorovye/sport',
    icon: Dumbbell,
    items: [
      { label: 'Пульсовые зоны', href: '/zdorovye/sport/puls-dlya-trenirovok' }, // 5K
      { label: 'Норма белка', href: '/zdorovye/sport/belok-dlya-sportsmenov', hot: true }, // 127K
    ],
  },
]
