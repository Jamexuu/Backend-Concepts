import { Check, Copy, Mail, Sparkles, Terminal } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function AboutPage() {
  const [copied, setCopied] = useState(false)
  const email = 'jamesfrancislmercado@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span>Author&apos;s Note & Story</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Why I Created Backend Concepts
        </h1>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          A personal reflection by James Francis L. Mercado
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="prose dark:prose-invert max-w-none rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          When I first started learning backend development, I often felt completely stuck. It felt like I was spending more time worrying about what to learn next than actually building software.
        </p>

        <p>
          Everywhere you look online, tutorials immediately throw complicated tools at you: Docker containers, Kubernetes clusters, microservices, and endless cloud platforms. When you just want to understand how a server handles a request and saves data safely, seeing all these tools right away makes you feel overwhelmed before you even begin.
        </p>

        <p>
          Having the privilege to enter a university and study is a great opportunity that builds solid foundations in discipline and teamwork. However, in this field, especially in this AI era, it is not enough to depend only on what university classes teach. It is not their fault either. Backend engineering has so many topics that it is hard to compress all of them into just one semester. In an era where AI can quickly generate code snippets, true understanding comes from knowing how systems connect, why architectures are chosen, and how data flows reliably under the hood.
        </p>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-white pt-2">
          A Reflection on Growth
        </h3>
        <p>
          I encountered every single one of these learning hurdles firsthand. Because practical concepts like safe queries, race conditions, and background processing take time to master, I spent months learning them on my own through trial, error, and fixing real mistakes.
        </p>

        <p>
          I built this documentation platform as a personal reflection of how much I have grown since I first started programming, and to help anyone who is serious about learning these concepts. You do not need to memorize dry theory, and you do not need expensive cloud setups to become a great backend developer.
        </p>

        <p>
          If this documentation helps even one learner gain confidence and understand how servers really work, building this was completely worth it.
        </p>

        {/* Contact box */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Get in Touch
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            If this project helped you, or if you have questions or suggestions for new topics, feel free to reach out directly:
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-mono dark:border-zinc-700 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              <span>{email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-2 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-sans font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 transition"
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
              href={`mailto:${email}?subject=Hello%20from%20Backend%20Concepts`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition"
        >
          <Terminal className="h-4 w-4" />
          <span>Explore the Documentation</span>
        </Link>
      </div>
    </div>
  )
}
