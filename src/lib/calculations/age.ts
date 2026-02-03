// === Типы ===

export interface AgeInput {
  birthDate: Date
}

export interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  daysUntilBirthday: number
  nextBirthdayDate: Date
  nextMilestone: number // ближайший юбилей (круглая дата)
  daysUntilMilestone: number
  nextMilestoneDate: Date
  zodiacSign: string
  zodiacEmoji: string
  chineseZodiac: string
  chineseEmoji: string
}

// === Знаки зодиака ===

const ZODIAC_SIGNS = [
  { name: 'Козерог', emoji: '♑', start: [1, 1], end: [1, 19] },
  { name: 'Водолей', emoji: '♒', start: [1, 20], end: [2, 18] },
  { name: 'Рыбы', emoji: '♓', start: [2, 19], end: [3, 20] },
  { name: 'Овен', emoji: '♈', start: [3, 21], end: [4, 19] },
  { name: 'Телец', emoji: '♉', start: [4, 20], end: [5, 20] },
  { name: 'Близнецы', emoji: '♊', start: [5, 21], end: [6, 20] },
  { name: 'Рак', emoji: '♋', start: [6, 21], end: [7, 22] },
  { name: 'Лев', emoji: '♌', start: [7, 23], end: [8, 22] },
  { name: 'Дева', emoji: '♍', start: [8, 23], end: [9, 22] },
  { name: 'Весы', emoji: '♎', start: [9, 23], end: [10, 22] },
  { name: 'Скорпион', emoji: '♏', start: [10, 23], end: [11, 21] },
  { name: 'Стрелец', emoji: '♐', start: [11, 22], end: [12, 21] },
  { name: 'Козерог', emoji: '♑', start: [12, 22], end: [12, 31] },
]

function getZodiacSign(month: number, day: number): { name: string; emoji: string } {
  for (const sign of ZODIAC_SIGNS) {
    const [startMonth, startDay] = sign.start
    const [endMonth, endDay] = sign.end

    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return { name: sign.name, emoji: sign.emoji }
      }
    } else {
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return { name: sign.name, emoji: sign.emoji }
      }
    }
  }
  return { name: 'Козерог', emoji: '♑' }
}

// === Китайский гороскоп ===

const CHINESE_ZODIAC = [
  { name: 'Крыса', emoji: '🐀' },
  { name: 'Бык', emoji: '🐂' },
  { name: 'Тигр', emoji: '🐅' },
  { name: 'Кролик', emoji: '🐇' },
  { name: 'Дракон', emoji: '🐉' },
  { name: 'Змея', emoji: '🐍' },
  { name: 'Лошадь', emoji: '🐎' },
  { name: 'Коза', emoji: '🐐' },
  { name: 'Обезьяна', emoji: '🐒' },
  { name: 'Петух', emoji: '🐓' },
  { name: 'Собака', emoji: '🐕' },
  { name: 'Свинья', emoji: '🐖' },
]

function getChineseZodiac(year: number): { name: string; emoji: string } {
  // Цикл начинается с 1900 года (Крыса)
  const index = (year - 1900) % 12
  const normalizedIndex = index < 0 ? index + 12 : index
  return CHINESE_ZODIAC[normalizedIndex]
}

// === Расчёт ===

export function calculateAge(input: AgeInput): AgeResult {
  const { birthDate } = input
  const today = new Date()

  // Сбрасываем время для корректного сравнения дат
  const birth = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate())
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  // Полный возраст
  let years = now.getFullYear() - birth.getFullYear()
  let months = now.getMonth() - birth.getMonth()
  let days = now.getDate() - birth.getDate()

  // Корректировка дней
  if (days < 0) {
    months--
    // Количество дней в предыдущем месяце
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  // Корректировка месяцев
  if (months < 0) {
    years--
    months += 12
  }

  // Общее количество дней
  const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))

  // Дней до следующего дня рождения
  let nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate())
  if (nextBirthday <= now) {
    nextBirthday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate())
  }
  const daysUntilBirthday = Math.floor((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  // Ближайший юбилей (кратный 5 или 10)
  const currentAge = years
  let nextMilestone = Math.ceil((currentAge + 1) / 5) * 5
  if (nextMilestone <= currentAge) {
    nextMilestone = currentAge + 5 - (currentAge % 5)
  }

  const yearsToMilestone = nextMilestone - currentAge
  const milestoneDate = new Date(
    birth.getFullYear() + nextMilestone,
    birth.getMonth(),
    birth.getDate()
  )
  const daysUntilMilestone = Math.floor((milestoneDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  // Знаки
  const zodiac = getZodiacSign(birth.getMonth() + 1, birth.getDate())
  const chinese = getChineseZodiac(birth.getFullYear())

  return {
    years,
    months,
    days,
    totalDays,
    daysUntilBirthday,
    nextBirthdayDate: nextBirthday,
    nextMilestone,
    daysUntilMilestone,
    nextMilestoneDate: milestoneDate,
    zodiacSign: zodiac.name,
    zodiacEmoji: zodiac.emoji,
    chineseZodiac: chinese.name,
    chineseEmoji: chinese.emoji,
  }
}

// === Форматирование ===

export function formatAgeFull(years: number, months: number, days: number): string {
  const parts: string[] = []

  if (years > 0) {
    parts.push(pluralize(years, 'год', 'года', 'лет'))
  }
  if (months > 0) {
    parts.push(pluralize(months, 'месяц', 'месяца', 'месяцев'))
  }
  if (days > 0 || parts.length === 0) {
    parts.push(pluralize(days, 'день', 'дня', 'дней'))
  }

  return parts.join(', ')
}

export function pluralize(n: number, one: string, few: string, many: string): string {
  const abs = Math.abs(n)
  const mod10 = abs % 10
  const mod100 = abs % 100
  const formatted = n.toLocaleString('ru-RU')

  if (mod10 === 1 && mod100 !== 11) {
    return `${formatted} ${one}`
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return `${formatted} ${few}`
  }
  return `${formatted} ${many}`
}
