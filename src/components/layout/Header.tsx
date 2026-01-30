'use client'

import Link from 'next/link'
import { Calculator, Flame, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { NAV_SECTIONS } from '@/lib/constants/navigation'
import { Badge } from '@/components/ui/badge'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Calculator className="h-6 w-6 text-primary" />
          <span>CalcBox</span>
        </Link>

        {/* Desktop nav with dropdowns */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {NAV_SECTIONS.map((section) => (
              <NavigationMenuItem key={section.href}>
                <NavigationMenuTrigger className="bg-transparent">
                  <section.icon className="h-4 w-4 mr-1.5" />
                  {section.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-0.5 p-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild className="flex-row items-center justify-between gap-4">
                          <Link
                            href={item.href}
                            className="whitespace-nowrap"
                          >
                            <span>{item.label}</span>
                            {item.hot && (
                              <Badge variant="default" className="text-xs">
                                <Flame className="h-3 w-3 mr-1 text-white" />
                                Хит
                              </Badge>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-200 border-t',
          mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 border-t-0'
        )}
      >
        <nav className="px-4 py-3 space-y-4">
          {NAV_SECTIONS.map((section) => (
            <div key={section.href}>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-1">
                <section.icon className="h-4 w-4 text-primary" />
                {section.title}
              </p>
              <ul className="ml-5.5 space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
