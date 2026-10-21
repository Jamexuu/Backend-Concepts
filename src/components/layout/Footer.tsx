import { Check, Copy, Mail, MessageSquare, Terminal } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  const [copied, setCopied] = useState(false)
  const authorEmail = 'jamesfrancislmercado@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(authorEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="mt-24 border-t border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Personal Origin & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-zinc-900 dark:text-white">
                Backend Concepts
              </span>
            </div>
          </div>

          {/* Column 2: Direct Contact & Feedback */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Direct Contact & Feedback
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Have questions, feedback on a concept, or want to suggest a backend topic? Reach out directly:
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50/50 p-2 text-xs font-mono dark:border-zinc-800 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-300">
                <Mail className="h-4 w-4 text-zinc-500 shrink-0" />
                <span className="truncate">{authorEmail}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-auto inline-flex items-center gap-1 rounded bg-zinc-200 px-2 py-1 text-[11px] font-sans font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${authorEmail}?subject=Backend%20Concepts%20Feedback`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Send an Email
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Curriculum Stages
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link to="/prerequisites" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 0: Prerequisites & Sockets
                </Link>
              </li>
              <li>
                <Link to="/topic/choosing-the-right-backend-framework" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 1: Frameworks & Architecture
                </Link>
              </li>
              <li>
                <Link to="/topic/what-is-a-database-and-types" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 2: Databases & SQL Injection
                </Link>
              </li>
              <li>
                <Link to="/topic/authentication-vs-authorization" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 3: Auth, Validation & Rate Limiting
                </Link>
              </li>
              <li>
                <Link to="/topic/idempotency-and-safe-retries" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 4: Queues, Caching & WebSockets
                </Link>
              </li>
              <li>
                <Link to="/topic/sensible-deployment-without-kubernetes-paralysis" className="hover:text-zinc-900 dark:hover:text-white transition">
                  Stage 5: Pragmatic Deployment
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-zinc-900 dark:hover:text-white transition">
                  The Story Behind This Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 sm:flex-row dark:border-zinc-800/80">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Backend Concepts Documentation by James Francis L. Mercado
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <span>Free & Open Source</span>
            <span>•</span>
            <a
              href="https://github.com/Jamexuu/Backend-Concepts"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
