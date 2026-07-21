export function deepMerge<T>(target: T, ...sources: Partial<T>[]): T {
  for (const source of sources) {
    for (const key in source) {
      const value = source[key]

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        ;(target as Record<string, unknown>)[key] = deepMerge(
          (target[key] ?? {}) as T,
          value
        )
      } else {
        target[key] = value as T[Extract<keyof T, string>]
      }
    }
  }

  return target
}
