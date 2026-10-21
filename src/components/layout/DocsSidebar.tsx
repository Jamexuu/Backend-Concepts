import { stages, topics } from '@/data/topics'
import {
  Compass,
  FileText,
  HeartHandshake,
  Search,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface DocsSidebarProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  onSelectTopic?: () => void
}

export function DocsSidebar({
  searchQuery,
  onSearchChange,
  onSelectTopic,
}: DocsSidebarProps) {
  const location = useLocation()

  const filteredTopics = topics.filter((t) => {
    if (!searchQuery) return true
    return (
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <aside className="w-full flex flex-col h-full bg-white dark:bg-zinc-950">
      {/* Mobile search */}
      <div className="p-4 sm:hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search concepts..."
            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-9 pr-3 py-1.5 text-xs dark:border-zinc-800 dark:bg-zinc-900"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-7">
        {/* Quick Intro Link */}
        <div className="space-y-1">
          <Link
            to="/"
            onClick={onSelectTopic}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition ${
              location.pathname === '/'
                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800/90 dark:text-white font-bold'
                : 'text-zinc-600 hover:bg-zinc-100/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
            }`}
          >
            <Compass className="h-4 w-4 text-zinc-500" />
            <span>Overview & Learning Path</span>
          </Link>

          <Link
            to="/about"
            onClick={onSelectTopic}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition ${
              location.pathname === '/about'
                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800/90 dark:text-white font-bold'
                : 'text-zinc-600 hover:bg-zinc-100/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
            }`}
          >
            <HeartHandshake className="h-4 w-4 text-zinc-500" />
            <span>Creator&apos;s Note & Reflection</span>
          </Link>
        </div>

        {/* Stages / Concept Groups */}
        {stages.map((stage) => {
          const stageTopics = filteredTopics.filter((t) => t.stage === stage.number)
          if (stageTopics.length === 0) return null

          return (
            <div key={stage.number} className="space-y-1.5">
              <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {stage.title.replace('Stage ', '')}
              </div>

              <div className="space-y-0.5">
                {stageTopics.map((topic) => {
                  const isActive = location.pathname === `/topic/${topic.slug}`
                  return (
                    <Link
                      key={topic.id}
                      to={`/topic/${topic.slug}`}
                      onClick={onSelectTopic}
                      className={`group flex items-start justify-between gap-2 rounded-lg px-3 py-2 text-xs transition ${
                        isActive
                          ? 'bg-zinc-100 text-zinc-900 font-semibold border-l-2 border-zinc-900 dark:border-white dark:bg-zinc-800/90 dark:text-white'
                          : 'text-zinc-600 hover:bg-zinc-100/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <FileText
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                            isActive
                              ? 'text-zinc-900 dark:text-white'
                              : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400'
                          }`}
                        />
                        <span className="leading-snug truncate">{topic.title}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {filteredTopics.length === 0 && (
          <div className="px-3 py-4 text-center text-xs text-zinc-400">
            No concepts match your search.
          </div>
        )}
      </nav>
    </aside>
  )
}

