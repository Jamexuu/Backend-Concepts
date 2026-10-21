import { DocsSidebar } from './DocsSidebar'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function DocsLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar
        onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        sidebarOpen={mobileSidebarOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Documentation Wrapper */}
      <div className="mx-auto flex-1 w-full max-w-7xl flex relative">
        {/* Desktop Sticky Left Sidebar */}
        <div className="hidden lg:block w-72 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <DocsSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Mobile Off-canvas Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileSidebarOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-zinc-950 shadow-2xl z-10 flex flex-col">
              <DocsSidebar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSelectTopic={() => setMobileSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main Doc Content */}
        <div className="flex-1 min-w-0 px-4 py-8 sm:px-8 lg:px-12 flex flex-col justify-between">
          <div>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Thoughtful, personalized footer */}
      <Footer />
    </div>
  )
}

