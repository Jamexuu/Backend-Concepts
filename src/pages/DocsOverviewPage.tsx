import { Badge } from '@/components/common/Badge'
import { stages, topics } from '@/data/topics'
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function DocsOverviewPage() {
  const stageIcons = [
    Cpu,         // Stage 0: Fundamentals
    Layers,      // Stage 1: Architecture
    Database,    // Stage 2: Databases
    ShieldCheck, // Stage 3: Security & Auth
    Zap,         // Stage 4: Resilience & Caching
    Server,      // Stage 5: Deployment
  ]

  return (
    <div className="max-w-4xl space-y-12 pb-12">
      {/* Doc Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="Foundations">Documentation</Badge>
          <span className="text-xs font-medium text-zinc-500">v1.0 • Ground Up</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Backend Concepts
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A clear, friendly guide to essential backend engineering patterns. Built to help you understand the fundamentals step by step, without getting lost in complicated cloud tools.
        </p>
      </div>

      {/* The Problem: Why This Docs Exists */}
      <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
        <div className="flex items-center gap-2.5 text-zinc-900 dark:text-white font-bold text-base">
          <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
          <span>Learn Fundamentals Before Complicated Cloud Tools</span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          When people start learning backend development, the internet often overwhelms them with Docker, Kubernetes, and complicated cloud setups. While those tools are useful for large companies, learning them first makes beginners feel stuck before they even build their first project.
        </p>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Backend engineering is really about <strong>keeping data safe, handling web requests, securing logins, and making sure your app runs smoothly when users click buttons twice</strong>. This documentation explains those core mechanics in plain English with simple, relatable examples.
        </p>
      </div>

      {/* Suggested Reading Progression */}
      <div className="space-y-6">
        <div className="border-b border-zinc-200/80 pb-3 dark:border-zinc-800">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Curriculum Stages
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Browse through each level sequentially, or jump directly to any topic you want to learn.
          </p>
        </div>

        <div className="space-y-8">
          {stages.map((stage) => {
            const Icon = stageIcons[stage.number] || BookOpen
            const stageTopics = topics.filter((t) => t.stage === stage.number)

            return (
              <div
                key={stage.number}
                className="rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="stage">{`Stage ${stage.number}`}</Badge>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                        {stage.title.replace(`Stage ${stage.number}: `, '')}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {stage.subtitle}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 pt-1 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Topics in this stage */}
                <div className="mt-5 border-t border-zinc-100 pt-4 dark:border-zinc-800/80 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Topics in this stage:
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {stageTopics.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/topic/${topic.slug}`}
                        className="group flex items-start justify-between gap-2 rounded-xl border border-zinc-100 bg-zinc-50/60 p-3 hover:border-zinc-300 hover:bg-zinc-100/70 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:border-zinc-700 transition"
                      >
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-200 dark:group-hover:text-white truncate">
                            {topic.title}
                          </h4>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                            {topic.estimatedTime} • {topic.difficulty}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 group-hover:translate-x-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Jump Callout */}
      <div className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-100/80 via-white to-zinc-50 p-6 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/70 dark:to-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
            Ready to start learning?
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Begin with how web requests work under the hood.
          </p>
        </div>
        <Link
          to="/topic/http-lifecycle-under-the-hood"
          className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition shrink-0"
        >
          <span>Start Reading Stage 0</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
