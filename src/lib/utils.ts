import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertInterval = (intervalInSeconds: number): string => {
  if (intervalInSeconds === 3600) return 'Hourly'
  if (intervalInSeconds === 86400) return 'Daily'
  if (intervalInSeconds === 604800) return 'Weekly'
  if (intervalInSeconds === 2592000) return 'Monthly'

  if (intervalInSeconds < 86400) return `${intervalInSeconds / 3600} Hours`
  if (intervalInSeconds < 604800) return `${intervalInSeconds / 86400} Days`
  return `${intervalInSeconds / 604800} Weeks`
}
