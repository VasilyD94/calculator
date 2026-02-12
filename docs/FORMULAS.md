# Формулы расчётов — справочник

> Этот файл содержит все формулы, используемые в калькуляторах.
> Основная инструкция: [CLAUDE.md](../CLAUDE.md)

---

## Калории (5 формул)

```typescript
// lib/calculations/calories.ts

export interface CalorieInput {
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  activityFactor: number;
  bodyFat?: number;
}

export interface CalorieResult {
  bmr: number;
  tdee: number;
  deficit: number;
  surplus: number;
}

// 1. Миффлина-Сан Жеора (рекомендуемая)
export function mifflinStJeor(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const tdee = bmr * activityFactor;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), deficit: Math.round(tdee * 0.85), surplus: Math.round(tdee * 1.15) };
}

// 2. Харриса-Бенедикта (оригинальная)
export function harrisBenedict(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  const bmr = gender === 'male'
    ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
    : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age;
  const tdee = bmr * activityFactor;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), deficit: Math.round(tdee * 0.85), surplus: Math.round(tdee * 1.15) };
}

// 3. Харриса-Бенедикта (1984)
export function harrisBenedictRevised(input: CalorieInput): CalorieResult {
  const { gender, age, weight, height, activityFactor } = input;
  const bmr = gender === 'male'
    ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
  const tdee = bmr * activityFactor;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), deficit: Math.round(tdee * 0.85), surplus: Math.round(tdee * 1.15) };
}

// 4. Кетча-МакАрдла
export function katchMcArdle(input: CalorieInput): CalorieResult {
  const { weight, activityFactor, bodyFat = 20 } = input;
  const leanMass = weight * (1 - bodyFat / 100);
  const bmr = 370 + 21.6 * leanMass;
  const tdee = bmr * activityFactor;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), deficit: Math.round(tdee * 0.85), surplus: Math.round(tdee * 1.15) };
}

// 5. ВОЗ
export function whoFormula(input: CalorieInput): CalorieResult {
  const { gender, age, weight, activityFactor } = input;
  let bmr: number;
  if (gender === 'male') {
    if (age < 30) bmr = 15.3 * weight + 679;
    else if (age < 60) bmr = 11.6 * weight + 879;
    else bmr = 13.5 * weight + 487;
  } else {
    if (age < 30) bmr = 14.7 * weight + 496;
    else if (age < 60) bmr = 8.7 * weight + 829;
    else bmr = 10.5 * weight + 596;
  }
  const tdee = bmr * activityFactor;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), deficit: Math.round(tdee * 0.85), surplus: Math.round(tdee * 1.15) };
}

// Все формулы для сравнения
export function calculateAllFormulas(input: CalorieInput) {
  return [
    { name: 'Миффлина-Сан Жеора', ...mifflinStJeor(input), recommended: true },
    { name: 'Харриса-Бенедикта', ...harrisBenedict(input), recommended: false },
    { name: 'Харриса-Бенедикта (1984)', ...harrisBenedictRevised(input), recommended: false },
    { name: 'Кетча-МакАрдла', ...katchMcArdle(input), recommended: false },
    { name: 'ВОЗ', ...whoFormula(input), recommended: false },
  ];
}
```

---

## ИМТ

```typescript
// lib/calculations/bmi.ts

export const BMI_CATEGORIES = [
  { min: 0, max: 16, label: 'Выраженный дефицит', color: 'blue', status: 'danger' },
  { min: 16, max: 18.5, label: 'Дефицит массы', color: 'blue', status: 'warning' },
  { min: 18.5, max: 25, label: 'Норма', color: 'green', status: 'success' },
  { min: 25, max: 30, label: 'Избыточный вес', color: 'yellow', status: 'warning' },
  { min: 30, max: 35, label: 'Ожирение I', color: 'red', status: 'danger' },
  { min: 35, max: 40, label: 'Ожирение II', color: 'red', status: 'danger' },
  { min: 40, max: 60, label: 'Ожирение III', color: 'red', status: 'danger' },
];

export function calculateBMI(weight: number, height: number) {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const category = BMI_CATEGORIES.find(c => bmi >= c.min && bmi < c.max) || BMI_CATEGORIES[6];
  const idealWeight = {
    min: Math.round(18.5 * heightM * heightM),
    max: Math.round(24.9 * heightM * heightM),
  };
  return {
    value: Math.round(bmi * 10) / 10,
    category: category.label,
    status: category.status,
    color: category.color,
    idealWeight,
  };
}
```

---

## Коэффициенты активности

| ID | Название | Коэффициент | Описание |
|----|----------|-------------|----------|
| sedentary | Минимальная | 1.2 | Сидячая работа, без тренировок |
| light | Лёгкая | 1.375 | 1-2 тренировки в неделю |
| moderate | Средняя | 1.55 | 3-5 тренировок в неделю |
| active | Высокая | 1.725 | 6-7 тренировок в неделю |
| extreme | Очень высокая | 1.9 | Профессиональный спорт |
