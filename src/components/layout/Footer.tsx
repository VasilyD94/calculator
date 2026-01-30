import Link from 'next/link'
import { Calculator } from 'lucide-react'
import { NAV_SECTIONS } from '@/lib/constants/navigation'

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
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

          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
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
