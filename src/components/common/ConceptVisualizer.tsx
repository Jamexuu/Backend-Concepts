import type { VisualConcept } from '@/types/content'
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Workflow,
  XCircle,
} from 'lucide-react'

interface ConceptVisualizerProps {
  visual: VisualConcept
}

export function ConceptVisualizer({ visual }: ConceptVisualizerProps) {
  return (
    <div className="space-y-6">
      {/* Title & Summary */}
      <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
          <Workflow className="h-4 w-4 text-indigo-500" />
          <span>{visual.title}</span>
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {visual.summary}
        </p>
      </div>

      {/* Side-by-Side Comparison Flow if present */}
      {visual.comparison && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Risky Flow (Problem) */}
          <div className="flex flex-col rounded-2xl border border-rose-200/90 bg-rose-50/30 p-5 dark:border-rose-900/50 dark:bg-rose-950/10">
            <div className="flex items-center gap-2 pb-3 border-b border-rose-200/60 dark:border-rose-900/40">
              <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                  {visual.comparison.badTitle}
                </h4>
                <p className="text-[11px] text-rose-600/80 dark:text-rose-400/80">
                  {visual.comparison.badSubtitle}
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="mt-4 space-y-3 flex-1">
              {visual.comparison.badSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="rounded-xl border border-rose-200/70 bg-white p-3 shadow-xs dark:border-rose-900/60 dark:bg-zinc-900/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-[11px] font-bold text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                        {idx + 1}
                      </span>
                      {step.tag && (
                        <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                          {step.tag}
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 font-bold text-xs text-zinc-900 dark:text-zinc-100">
                      {step.label}
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {idx < visual.comparison!.badSteps.length - 1 && (
                    <div className="flex justify-center my-1 text-rose-400">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Flow (Solution) */}
          <div className="flex flex-col rounded-2xl border border-emerald-200/90 bg-emerald-50/30 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/10">
            <div className="flex items-center gap-2 pb-3 border-b border-emerald-200/60 dark:border-emerald-900/40">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  {visual.comparison.goodTitle}
                </h4>
                <p className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80">
                  {visual.comparison.goodSubtitle}
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="mt-4 space-y-3 flex-1">
              {visual.comparison.goodSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="rounded-xl border border-emerald-200/70 bg-white p-3 shadow-xs dark:border-emerald-900/60 dark:bg-zinc-900/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                        {idx + 1}
                      </span>
                      {step.tag && (
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                          {step.tag}
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 font-bold text-xs text-zinc-900 dark:text-zinc-100">
                      {step.label}
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {idx < visual.comparison!.goodSteps.length - 1 && (
                    <div className="flex justify-center my-1 text-emerald-400">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sequential Flow Steps (if no comparison or standalone) */}
      {visual.flowSteps && visual.flowSteps.length > 0 && (
        <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
            Step-by-Step Flow:
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visual.flowSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between rounded-xl border border-zinc-200/70 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                      {idx + 1}
                    </span>
                    {step.tag && (
                      <span className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <h5 className="mt-2 text-xs font-bold text-zinc-900 dark:text-white">
                    {step.label}
                  </h5>
                  <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                {idx < visual.flowSteps!.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-zinc-400">
                    <ArrowRight className="h-4 w-4 bg-white dark:bg-zinc-900 rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

