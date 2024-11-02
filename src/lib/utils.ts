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

export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export const ADDRESS_OWNER = '0x8306a15c09e4704c340a58Af451E640E7D399a1e'

export const BLOCKSTAR_CONTRACT = '0xc760B2a742618AdE9eBFb49023eDF4DfcC6E208d'
