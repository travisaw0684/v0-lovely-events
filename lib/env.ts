export function getRequiredEnv(name: string, fallback?: string) {
  const value = process.env[name] || fallback

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function getOptionalNumberEnv(name: string, fallback: number) {
  const rawValue = process.env[name]

  if (!rawValue) {
    return fallback
  }

  const value = Number(rawValue)
  return Number.isFinite(value) && value >= 0 ? value : fallback
}
