import { Badge } from '@/components/common/Badge'
import { ConceptVisualizer } from '@/components/common/ConceptVisualizer'
import { stages, topics } from '@/data/topics'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  Compass,
  ExternalLink,
  Hash,
  Lightbulb,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

export function TopicDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const topicIndex = topics.findIndex((t) => t.slug === slug)
  const topic = topics[topicIndex]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const stage = useMemo(() => {
    return topic ? stages.find((s) => s.number === topic.stage) : null
  }, [topic])

  const previousTopic = topicIndex > 0 ? topics[topicIndex - 1] : null
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null

  if (!topic) {
    return (
      <div className="max-w-2xl py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Document Not Found</h2>
        <p className="mt-2 text-sm text-zinc-500">The requested backend concept does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Overview
        </Link>
      </div>
    )
  }

  const tableOfContents = [
    ...(topic.analogy ? [{ id: 'analogy', label: 'Everyday Analogy' }] : []),
    { id: 'why-it-matters', label: 'Why This Matters' },
    { id: 'core-concepts', label: 'Core Principles' },
    ...(topic.visualConcept ? [{ id: 'visual-concept', label: 'Visual Concept' }] : []),
    ...(topic.deepDive.length > 0 ? [{ id: 'deep-dive', label: 'Helpful Details' }] : []),
    ...(topic.recommendedTools && topic.recommendedTools.length > 0
      ? [{ id: 'recommended-tools', label: 'Tools & Documentation' }]
      : []),
    { id: 'pitfalls', label: 'Common Mistakes' },
    { id: 'hands-on', label: 'Try It Yourself' },
  ]

  return (
    <div className="flex gap-10">
      {/* Article Content */}
      <div className="max-w-3xl flex-1 space-y-12 pb-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <Link to="/" className="hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1">
            <Compass className="h-3.5 w-3.5" />
            <span>Docs</span>
          </Link>
          <span>/</span>
          <span>{stage ? `Stage ${stage.number}` : 'Foundations'}</span>
          <span>/</span>
          <span className="truncate max-w-[220px] text-zinc-900 dark:text-zinc-200 font-semibold">
            {topic.title}
          </span>
        </nav>

        {/* Doc Header */}
        <header className="space-y-4 border-b border-zinc-200/80 pb-8 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="stage">{stage ? `Stage ${stage.number}` : 'Topic'}</Badge>
            <Badge variant={topic.difficulty}>{topic.difficulty}</Badge>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="h-3.5 w-3.5" />
              {topic.estimatedTime}
            </span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white leading-[1.2]">
            {topic.title}
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {topic.tagline}
          </p>

          {/* Prerequisites Checklist */}
          {topic.prerequisites.length > 0 && (
            <div className="mt-4 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Prerequisites:</span>
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {topic.prerequisites.map((req, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Section: Real-World Analogy */}
        {topic.analogy && (
          <section id="analogy" className="scroll-mt-24 space-y-3">
            <div className="rounded-2xl border border-sky-200/80 bg-sky-50/60 p-5 sm:p-6 dark:border-sky-900/50 dark:bg-sky-950/20">
              <div className="flex items-center gap-2 text-sm font-bold text-sky-900 dark:text-sky-300">
                <Sparkles className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Everyday Analogy: {topic.analogy.title}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-sky-950/90 dark:text-sky-200/90">
                {topic.analogy.story}
              </p>
            </div>
          </section>
        )}

        {/* Section: Why It Matters */}
        <section id="why-it-matters" className="scroll-mt-24 space-y-3">
          <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
            <Lightbulb className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
            <span>Why This Concept Matters</span>
          </h2>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 leading-relaxed text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
            {topic.whyItMatters}
          </div>
        </section>

        {/* Section: Visual Concept */}
        {topic.visualConcept && (
          <section id="visual-concept" className="scroll-mt-24 space-y-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <Workflow className="h-5 w-5 text-indigo-500" />
              <span>How It Works (Visual Concept)</span>
            </h2>
            <ConceptVisualizer visual={topic.visualConcept} />
          </section>
        )}

        {/* Section: Core Concepts */}
        <section id="core-concepts" className="scroll-mt-24 space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
            <Zap className="h-5 w-5 text-amber-500" />
            <span>Core Ideas in Plain English</span>
          </h2>
          <div className="space-y-3">
            {topic.coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {idx + 1}
                  </span>
                  <span>{concept.title}</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Deep Dive */}
        {topic.deepDive.length > 0 && (
          <section id="deep-dive" className="scroll-mt-24 space-y-4">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Helpful Details to Know
            </h2>
            <div className="space-y-3">
              {topic.deepDive.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section: Recommended Tools & Documentation */}
        {topic.recommendedTools && topic.recommendedTools.length > 0 && (
          <section id="recommended-tools" className="scroll-mt-24 space-y-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <BookOpen className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <span>Recommended Tools & Official Documentation</span>
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {topic.recommendedTools.map((tool, idx) => (
                <a
                  key={idx}
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-4 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition">
                        {tool.name}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition shrink-0" />
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {tool.purpose}
                    </p>
                  </div>
                  <span className="mt-3 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <span>Read Documentation</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Section: Common Pitfalls */}
        <section id="pitfalls" className="scroll-mt-24 rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
            <AlertTriangle className="h-4 w-4 text-rose-500" />
            <span>Common Mistakes to Avoid</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            {topic.commonPitfalls.map((pitfall, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>{pitfall}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Hands-On Exercise */}
        <section id="hands-on" className="scroll-mt-24 rounded-2xl border border-indigo-200/80 bg-indigo-50/40 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/20 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-indigo-950 dark:text-indigo-300">
            <Terminal className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Try It Yourself (Quick Exercise)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-indigo-900/80 dark:text-indigo-200/80">
            {topic.actionableExercises.map((exercise, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{idx + 1}.</span>
                <span>{exercise}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Pager Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
          <div>
            {previousTopic ? (
              <Link
                to={`/topic/${previousTopic.slug}`}
                className="group flex flex-col items-start rounded-xl border border-zinc-200/80 bg-white p-3.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition"
              >
                <span className="text-[11px] font-semibold text-zinc-400 flex items-center gap-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  <ArrowLeft className="h-3 w-3" /> Previous Concept
                </span>
                <span className="mt-1 text-xs font-bold text-zinc-900 dark:text-white truncate max-w-[200px]">
                  {previousTopic.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div>
            {nextTopic && (
              <Link
                to={`/topic/${nextTopic.slug}`}
                className="group flex flex-col items-end rounded-xl border border-zinc-200/80 bg-white p-3.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition"
              >
                <span className="text-[11px] font-semibold text-zinc-400 flex items-center gap-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  Next Concept <ArrowRight className="h-3 w-3" />
                </span>
                <span className="mt-1 text-xs font-bold text-zinc-900 dark:text-white truncate max-w-[200px]">
                  {nextTopic.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right Desktop Table of Contents */}
      <div className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            <Hash className="h-3.5 w-3.5" />
            <span>On This Page</span>
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 border-l border-zinc-200 dark:border-zinc-800 pl-3">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-0.5 hover:text-zinc-900 dark:hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
