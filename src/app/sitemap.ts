import type { MetadataRoute } from 'next'

const BASE_URL = 'https://calc-box.ru'

// Обновлять при реальном изменении контента на сайте
const LAST_CONTENT_UPDATE = '2026-02-12'

// Список всех страниц сайта
const pages = [
  // Главная
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },

  // Питание
  { path: '/zdorovye/pitanie', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/zdorovye/pitanie/kalkulyator-kalorij', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/pitanie/kalkulyator-bzhu', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/pitanie/defitsit-kalorij', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/pitanie/norma-vody', changeFrequency: 'monthly' as const, priority: 0.9 },

  // Тело
  { path: '/zdorovye/telo', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/zdorovye/telo/kalkulyator-imt', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/idealnyj-ves', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/protsent-zhira', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/bazovyj-metabolizm', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/kalkulyator-vozrasta', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/kalkulyator-alkogolya', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/kalkulyator-sna', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/norma-davleniya', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/telo/tip-teloslozheniya', changeFrequency: 'monthly' as const, priority: 0.9 },

  // Беременность
  { path: '/zdorovye/beremennost', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/zdorovye/beremennost/data-rodov', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/beremennost/srok-beremennosti', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/beremennost/ovulyatsiya', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/beremennost/gruppa-krovi-rebenka', changeFrequency: 'monthly' as const, priority: 0.9 },

  // Спорт
  { path: '/zdorovye/sport', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/zdorovye/sport/puls-dlya-trenirovok', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/zdorovye/sport/belok-dlya-sportsmenov', changeFrequency: 'monthly' as const, priority: 0.9 },

  // Юридические страницы
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
