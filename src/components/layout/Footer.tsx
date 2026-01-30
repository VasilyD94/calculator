import Link from 'next/link'
import { Calculator } from 'lucide-react'

const FOOTER_LINKS = [
  {
    title: 'Питание',
    links: [
      { label: 'Калькулятор калорий', href: '/zdorovye/pitanie/kalkulyator-kalorij' },
      { label: 'Калькулятор БЖУ', href: '/zdorovye/pitanie/kalkulyator-bzhu' },
      { label: 'Дефицит калорий', href: '/zdorovye/pitanie/defitsit-kalorij' },
      { label: 'Норма воды', href: '/zdorovye/pitanie/norma-vody' },
    ],
  },
  {
    title: 'Тело',
    links: [
      { label: 'Калькулятор ИМТ', href: '/zdorovye/telo/kalkulyator-imt' },
      { label: 'Идеальный вес', href: '/zdorovye/telo/idealnyj-ves' },
      { label: 'Процент жира', href: '/zdorovye/telo/protsent-zhira' },
      { label: 'Базовый метаболизм', href: '/zdorovye/telo/bazovyj-metabolizm' },
    ],
  },
  {
    title: 'Беременность',
    links: [
      { label: 'Дата родов', href: '/zdorovye/beremennost/data-rodov' },
      { label: 'Срок беременности', href: '/zdorovye/beremennost/srok-beremennosti' },
      { label: 'Овуляция', href: '/zdorovye/beremennost/ovulyatsiya' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <Calculator className="h-5 w-5 text-primary" />
              <span>CalcBox</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Современные онлайн-калькуляторы здоровья. Быстро, точно, бесплатно.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CalcBox. Все расчёты носят информационный характер.</p>
        </div>
      </div>
    </footer>
  )
}
