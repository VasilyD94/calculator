import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности сайта CalcBox. Информация о сборе, обработке и защите персональных данных пользователей.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
}

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Политика конфиденциальности', href: '/privacy' },
]

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
          Политика конфиденциальности
        </h1>
        <p className="text-sm text-muted-foreground">
          Дата последнего обновления: 7 февраля 2026 г.
        </p>
      </header>

      <section className="space-y-8 text-sm leading-relaxed text-muted-foreground break-words">
        {/* 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            1. Общие положения
          </h2>
          <p>
            Настоящая Политика конфиденциальности (далее — Политика) действует в
            отношении всей информации, которую сайт{' '}
            <strong className="text-foreground">calc-box.ru</strong> (далее —
            Сайт, Оператор) может получить о пользователе во время использования
            Сайта.
          </p>
          <p>
            Использование Сайта означает безоговорочное согласие пользователя с
            настоящей Политикой и указанными в ней условиями обработки его
            персональных данных. В случае несогласия с условиями Политики
            пользователь должен воздержаться от использования Сайта.
          </p>
        </div>

        <hr className="border-border" />

        {/* 2 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            2. Какие данные мы собираем
          </h2>
          <p>
            Сайт не требует регистрации и не собирает имена, адреса электронной
            почты, номера телефонов или иные контактные данные. Мы собираем
            только техническую информацию:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>
              <strong className="text-foreground">Файлы cookie</strong> —
              небольшие текстовые файлы, сохраняемые в браузере для корректной
              работы Сайта и аналитики.
            </li>
            <li>
              <strong className="text-foreground">Данные аналитики</strong> —
              обезличенная информация о посещении: тип устройства, браузер,
              разрешение экрана, источник перехода, просмотренные страницы, время
              на сайте.
            </li>
            <li>
              <strong className="text-foreground">IP-адрес</strong> —
              обрабатывается в обезличенном виде для определения региона и
              обеспечения безопасности.
            </li>
          </ul>
          <p>
            Все данные, которые пользователь вводит в калькуляторы (вес, рост,
            возраст и т.д.), обрабатываются{' '}
            <strong className="text-foreground">
              исключительно в браузере пользователя
            </strong>{' '}
            и не передаются на сервер.
          </p>
        </div>

        <hr className="border-border" />

        {/* 3 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            3. Цели обработки данных
          </h2>
          <p>Техническая информация используется для:</p>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>обеспечения корректной работы Сайта;</li>
            <li>
              анализа посещаемости и улучшения качества контента;
            </li>
            <li>
              выявления и устранения технических проблем;
            </li>
            <li>
              обеспечения безопасности и защиты от злоупотреблений.
            </li>
          </ul>
        </div>

        <hr className="border-border" />

        {/* 4 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            4. Файлы cookie
          </h2>
          <p>Сайт использует следующие типы файлов cookie:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3 space-y-1">
              <h3 className="font-semibold text-foreground">Технические</h3>
              <p>Корректная работа сайта, сохранение настроек</p>
              <p className="text-xs text-muted-foreground/70">Срок: сессия / 1 год</p>
            </div>
            <div className="rounded-lg border p-3 space-y-1">
              <h3 className="font-semibold text-foreground">Аналитические</h3>
              <p>Яндекс.Метрика — анализ посещаемости</p>
              <p className="text-xs text-muted-foreground/70">Срок: 1 год</p>
            </div>
          </div>
          <p>
            Вы можете отключить cookie в настройках браузера. Однако это может
            повлиять на работоспособность некоторых функций Сайта.
          </p>
        </div>

        <hr className="border-border" />

        {/* 5 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            5. Яндекс.Метрика
          </h2>
          <p>
            Для анализа посещаемости Сайт использует сервис{' '}
            <strong className="text-foreground">Яндекс.Метрика</strong>,
            предоставляемый ООО «Яндекс» (119021, Россия, г. Москва, ул. Льва
            Толстого, д. 16).
          </p>
          <p>
            Яндекс.Метрика собирает обезличенные данные о поведении
            пользователей на сайте с использованием файлов cookie. Собранная
            информация не позволяет идентифицировать конкретного пользователя.
          </p>
          <p>
            Подробнее об обработке данных Яндекс.Метрикой:{' '}
            <a
              href="https://yandex.ru/legal/confidential/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary break-all"
            >
              Политика конфиденциальности Яндекса
            </a>
            .
          </p>
        </div>

        <hr className="border-border" />

        {/* 6 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            6. Передача данных третьим лицам
          </h2>
          <p>
            Оператор не продаёт, не обменивает и не передаёт персональные данные
            пользователей третьим лицам, за исключением случаев:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>
              предоставления обезличенных данных сервису Яндекс.Метрика для
              целей аналитики;
            </li>
            <li>
              исполнения требований законодательства Российской Федерации.
            </li>
          </ul>
        </div>

        <hr className="border-border" />

        {/* 7 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            7. Защита данных
          </h2>
          <p>
            Сайт использует протокол{' '}
            <strong className="text-foreground">HTTPS</strong> для шифрования
            передаваемых данных. Мы принимаем необходимые организационные и
            технические меры для защиты информации от несанкционированного
            доступа, изменения, раскрытия или уничтожения.
          </p>
        </div>

        <hr className="border-border" />

        {/* 8 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            8. Права пользователя
          </h2>
          <p>В соответствии с Федеральным законом №152-ФЗ «О персональных данных» вы имеете право:</p>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>получать информацию об обработке ваших данных;</li>
            <li>требовать уточнения, блокирования или уничтожения данных;</li>
            <li>отозвать согласие на обработку данных;</li>
            <li>
              обжаловать действия Оператора в Роскомнадзор или в судебном
              порядке.
            </li>
          </ul>
          <p>
            Для отключения сбора данных вы можете очистить файлы cookie в
            настройках браузера или использовать режим «Инкогнито».
          </p>
        </div>

        <hr className="border-border" />

        {/* 9 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            9. Правовое основание
          </h2>
          <p>
            Обработка данных осуществляется в соответствии с:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных»;</li>
            <li>Федеральным законом от 08.08.2024 №420-ФЗ (изменения в части обработки cookie);</li>
            <li>иными нормативными правовыми актами Российской Федерации.</li>
          </ul>
        </div>

        <hr className="border-border" />

        {/* 10 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            10. Изменение Политики
          </h2>
          <p>
            Оператор оставляет за собой право вносить изменения в настоящую
            Политику. Новая редакция вступает в силу с момента её размещения на
            Сайте. Продолжение использования Сайта после внесения изменений
            означает согласие пользователя с новой редакцией Политики.
          </p>
        </div>

        <hr className="border-border" />

        {/* 11 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground">
            11. Контактная информация
          </h2>
          <p>
            Если у вас есть вопросы по данной Политике конфиденциальности, вы
            можете связаться с нами по адресу электронной почты:{' '}
            <strong className="text-foreground">support@calc-box.ru</strong>
          </p>
        </div>
      </section>
    </article>
  )
}
