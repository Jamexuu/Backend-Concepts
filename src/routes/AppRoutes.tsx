import { DocsLayout } from '@/components/layout/DocsLayout'
import { AboutPage } from '@/pages/AboutPage'
import { DocsOverviewPage } from '@/pages/DocsOverviewPage'
import { TopicDetailPage } from '@/pages/TopicDetailPage'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        <Route path="/" element={<DocsOverviewPage />} />
        <Route path="/prerequisites" element={<Navigate to="/topic/http-lifecycle-under-the-hood" replace />} />
        <Route path="/topic/:slug" element={<TopicDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

