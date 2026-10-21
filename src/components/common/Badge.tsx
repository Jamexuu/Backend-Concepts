import type { DifficultyLevel } from '@/types/content'

interface BadgeProps {
  children: React.ReactNode
  variant?: DifficultyLevel | 'neutral' | 'success' | 'stage'
  className?: string
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  let style = 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/60'

  switch (variant) {
    case 'Prerequisite':
      style = 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50'
      break
    case 'Foundations':
      style = 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50'
      break
    case 'Intermediate':
      style = 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50'
      break
    case 'Advanced':
      style = 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/50'
      break
    case 'stage':
      style = 'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/50'
      break
    case 'success':
      style = 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/50'
      break
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border ${style} ${className}`}
    >
      {children}
    </span>
  )
}
