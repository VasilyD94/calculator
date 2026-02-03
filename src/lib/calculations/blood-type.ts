// === Типы ===

export type BloodGroup = 'I' | 'II' | 'III' | 'IV'
export type RhFactor = '+' | '-'

export interface BloodTypeInput {
  motherGroup: BloodGroup
  motherRh: RhFactor
  fatherGroup: BloodGroup
  fatherRh: RhFactor
}

export interface BloodTypeResult {
  possibleGroups: PossibleBloodGroup[]
  possibleRh: PossibleRh
}

export interface PossibleBloodGroup {
  group: BloodGroup
  probability: number // 0-100
  genotypes: string[] // возможные генотипы, например ['AA', 'AO']
}

export interface PossibleRh {
  positive: number // вероятность Rh+ (0-100)
  negative: number // вероятность Rh- (0-100)
}

// === Генотипы групп крови ===

// Группа крови определяется геном ABO с тремя аллелями: A, B, O
// A и B — доминантные, O — рецессивный
// I (O)  = OO
// II (A) = AA или AO
// III (B) = BB или BO
// IV (AB) = AB

const GROUP_GENOTYPES: Record<BloodGroup, string[]> = {
  I: ['OO'],
  II: ['AA', 'AO'],
  III: ['BB', 'BO'],
  IV: ['AB'],
}

// Резус-фактор определяется геном RHD
// D — доминантный (Rh+), d — рецессивный (Rh-)
// Rh+ = DD или Dd
// Rh- = dd

const RH_GENOTYPES: Record<RhFactor, string[]> = {
  '+': ['DD', 'Dd'],
  '-': ['dd'],
}

// === Расчёт группы крови ===

function getAlleleFromGenotype(genotype: string): [string, string] {
  return [genotype[0], genotype[1]]
}

function combineAlleles(allele1: string, allele2: string): string {
  // Сортируем аллели для консистентности (A перед B перед O, D перед d)
  const order = ['A', 'B', 'D', 'O', 'd']
  const sorted = [allele1, allele2].sort((a, b) => order.indexOf(a) - order.indexOf(b))
  return sorted.join('')
}

function genotypeToGroup(genotype: string): BloodGroup {
  if (genotype === 'OO') return 'I'
  if (genotype === 'AA' || genotype === 'AO') return 'II'
  if (genotype === 'BB' || genotype === 'BO') return 'III'
  if (genotype === 'AB') return 'IV'
  throw new Error(`Unknown genotype: ${genotype}`)
}

function genotypeToRh(genotype: string): RhFactor {
  if (genotype === 'dd') return '-'
  return '+'
}

function calculateGroupProbabilities(
  motherGroup: BloodGroup,
  fatherGroup: BloodGroup
): Map<BloodGroup, { probability: number; genotypes: Set<string> }> {
  const motherGenotypes = GROUP_GENOTYPES[motherGroup]
  const fatherGenotypes = GROUP_GENOTYPES[fatherGroup]

  // Если у родителя может быть несколько генотипов,
  // считаем что они равновероятны
  const outcomes = new Map<string, number>()
  let totalCombinations = 0

  for (const mGenotype of motherGenotypes) {
    const mWeight = 1 / motherGenotypes.length
    const [mAllele1, mAllele2] = getAlleleFromGenotype(mGenotype)

    for (const fGenotype of fatherGenotypes) {
      const fWeight = 1 / fatherGenotypes.length
      const [fAllele1, fAllele2] = getAlleleFromGenotype(fGenotype)

      // Каждый родитель передаёт одну аллель с вероятностью 50%
      const combinations = [
        combineAlleles(mAllele1, fAllele1),
        combineAlleles(mAllele1, fAllele2),
        combineAlleles(mAllele2, fAllele1),
        combineAlleles(mAllele2, fAllele2),
      ]

      for (const genotype of combinations) {
        const weight = mWeight * fWeight * 0.25
        outcomes.set(genotype, (outcomes.get(genotype) || 0) + weight)
        totalCombinations += weight
      }
    }
  }

  // Группируем по группе крови
  const result = new Map<BloodGroup, { probability: number; genotypes: Set<string> }>()

  for (const [genotype, probability] of outcomes) {
    const group = genotypeToGroup(genotype)
    const existing = result.get(group)
    if (existing) {
      existing.probability += probability
      existing.genotypes.add(genotype)
    } else {
      result.set(group, { probability, genotypes: new Set([genotype]) })
    }
  }

  return result
}

function calculateRhProbabilities(
  motherRh: RhFactor,
  fatherRh: RhFactor
): PossibleRh {
  const motherGenotypes = RH_GENOTYPES[motherRh]
  const fatherGenotypes = RH_GENOTYPES[fatherRh]

  let positiveProb = 0
  let negativeProb = 0

  for (const mGenotype of motherGenotypes) {
    const mWeight = 1 / motherGenotypes.length
    const [mAllele1, mAllele2] = getAlleleFromGenotype(mGenotype)

    for (const fGenotype of fatherGenotypes) {
      const fWeight = 1 / fatherGenotypes.length
      const [fAllele1, fAllele2] = getAlleleFromGenotype(fGenotype)

      const combinations = [
        combineAlleles(mAllele1, fAllele1),
        combineAlleles(mAllele1, fAllele2),
        combineAlleles(mAllele2, fAllele1),
        combineAlleles(mAllele2, fAllele2),
      ]

      for (const genotype of combinations) {
        const weight = mWeight * fWeight * 0.25
        if (genotypeToRh(genotype) === '+') {
          positiveProb += weight
        } else {
          negativeProb += weight
        }
      }
    }
  }

  return {
    positive: Math.round(positiveProb * 100),
    negative: Math.round(negativeProb * 100),
  }
}

// === Основная функция расчёта ===

export function calculateBloodType(input: BloodTypeInput): BloodTypeResult {
  const { motherGroup, motherRh, fatherGroup, fatherRh } = input

  // Расчёт возможных групп крови
  const groupProbabilities = calculateGroupProbabilities(motherGroup, fatherGroup)

  const possibleGroups: PossibleBloodGroup[] = []
  for (const [group, data] of groupProbabilities) {
    const probability = Math.round(data.probability * 100)
    if (probability > 0) {
      possibleGroups.push({
        group,
        probability,
        genotypes: Array.from(data.genotypes),
      })
    }
  }

  // Сортируем по вероятности (от большей к меньшей)
  possibleGroups.sort((a, b) => b.probability - a.probability)

  // Расчёт резус-фактора
  const possibleRh = calculateRhProbabilities(motherRh, fatherRh)

  return {
    possibleGroups,
    possibleRh,
  }
}

// === Вспомогательные функции ===

export function getGroupName(group: BloodGroup): string {
  const names: Record<BloodGroup, string> = {
    I: 'I (O)',
    II: 'II (A)',
    III: 'III (B)',
    IV: 'IV (AB)',
  }
  return names[group]
}

export function getGroupDescription(group: BloodGroup): string {
  const descriptions: Record<BloodGroup, string> = {
    I: 'Первая группа — универсальный донор эритроцитов',
    II: 'Вторая группа — одна из самых распространённых',
    III: 'Третья группа — встречается реже',
    IV: 'Четвёртая группа — универсальный реципиент',
  }
  return descriptions[group]
}

export function getRhDescription(rh: RhFactor): string {
  return rh === '+' ? 'Положительный' : 'Отрицательный'
}

// Информация о совместимости при беременности
export function getRhConflictWarning(motherRh: RhFactor, fatherRh: RhFactor): string | null {
  if (motherRh === '-' && fatherRh === '+') {
    return 'При отрицательном резусе матери и положительном у отца возможен резус-конфликт. Рекомендуется наблюдение у врача и профилактика (введение антирезусного иммуноглобулина).'
  }
  return null
}
