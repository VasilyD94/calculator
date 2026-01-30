'use client'

import { useState, useEffect, useCallback } from 'react'
import type { ActivityLevel } from '@/components/inputs/ActivitySelector'

const STORAGE_KEY = 'calcbox_user_params'

export interface UserParams {
  gender: 'male' | 'female'
  age: number
  weight: number
  height: number
  activity: ActivityLevel
}

const DEFAULTS: UserParams = {
  gender: 'male',
  age: 30,
  weight: 75,
  height: 175,
  activity: 'moderate',
}

function loadParams(): UserParams {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    const parsed = JSON.parse(raw)
    return {
      gender: parsed.gender === 'female' ? 'female' : 'male',
      age: clamp(Number(parsed.age) || DEFAULTS.age, 15, 80),
      weight: clamp(Number(parsed.weight) || DEFAULTS.weight, 30, 200),
      height: clamp(Number(parsed.height) || DEFAULTS.height, 140, 220),
      activity: validActivity(parsed.activity),
    }
  } catch {
    return DEFAULTS
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

const VALID_ACTIVITIES: ActivityLevel[] = [
  'sedentary',
  'light',
  'moderate',
  'active',
  'extreme',
]

function validActivity(value: unknown): ActivityLevel {
  if (typeof value === 'string' && VALID_ACTIVITIES.includes(value as ActivityLevel)) {
    return value as ActivityLevel
  }
  return DEFAULTS.activity
}

export function useUserParams() {
  const [params, setParamsState] = useState<UserParams>(DEFAULTS)
  const [loaded, setLoaded] = useState(false)

  // Читаем из localStorage после монтирования (SSR-safe)
  useEffect(() => {
    setParamsState(loadParams())
    setLoaded(true)
  }, [])

  // Сохраняем в localStorage при изменении
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(params))
    } catch {
      // localStorage недоступен — молча игнорируем
    }
  }, [params, loaded])

  const setParam = useCallback(
    <K extends keyof UserParams>(key: K, value: UserParams[K]) => {
      setParamsState((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  return { ...params, setParam, loaded }
}
