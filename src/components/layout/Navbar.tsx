import { ThemeToggle } from '@/components/common/ThemeToggle'
import { BookOpen, Mail, Menu, Search, Terminal, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  onToggleSidebar?: () => void
  sidebarOpen?: boolean
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function Navbar({
  onToggleSidebar,
  sidebarOpen,
  searchQuery = '',
  onSearchChange,
}: NavbarProps) {
  const location = useLocation()
  const authorEmail = 'jamesfrancislmercado@gmail.com'

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/95 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Left: Mobile Sidebar toggle & Brand */}
        <div className="flex items-center gap-3">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
              aria-label="Toggle Documentation Sidebar"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          )}

          <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm transition-transform group-hover:scale-105">
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                Backend Concepts
              </span>
              <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                Docs
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search Input */}
        {onSearchChange && (
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search backend concepts (e.g. Idempotency, N+1, Sockets)..."
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-9 pr-3 py-1.5 text-xs text-zinc-900 placeholder-zinc-400 transition focus:border-zinc-400 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-700"
              />
            </div>
          </div>
        )}

        {/* Right: Nav items, Email, Theme */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/about"
            className={`hidden md:inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              location.pathname === '/about'
                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Creator&apos;s Note</span>
          </Link>

          <a
            href={`mailto:${authorEmail}`}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition"
            title={authorEmail}
          >
            <Mail className="h-3.5 w-3.5 text-zinc-500" />
            <span className="hidden lg:inline">{authorEmail}</span>
            <span className="lg:hidden">Email</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
