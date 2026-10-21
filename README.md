# Backend Concepts Documentation

A clean, friendly, and practical documentation platform for backend engineering fundamentals. Built to help developers learn backend development step by step, without getting lost in complicated cloud tools.

Created by **James Francis L. Mercado** (`jamesfrancislmercado@gmail.com`).

---

## What This Documentation Covers

1. **Stage 0: Fundamentals & How the Web Works**
   - Web Requests Under the Hood (Sockets, DNS, TCP handshakes, TLS encryption).
   - Synchronous vs. Asynchronous Execution (Event loops, thread pools, avoiding server freezes).

2. **Stage 1: Choosing Tools & Organizing Code**
   - How and when to choose backend languages and frameworks (Laravel, Node, Python, Go).
   - Layered Architecture (Controllers vs Services vs Repositories).

3. **Stage 2: Databases & Storing Data**
   - What is a Database? Types, real-world analogies, and trade-offs.
   - Parameterized queries to stop SQL injection attacks.
   - Preventing the N+1 Query Problem (Eager loading, JOINs, batching).

4. **Stage 3: Securing Your App & Website**
   - Authentication vs. Authorization (Laravel Sanctum, Supabase, Firebase Auth, Argon2, HttpOnly cookies).
   - Input Validation (Checking data at the front door with schemas like Zod).
   - Rate Limiting & Throttling (Stopping bots and brute-force password guessing).

5. **Stage 4: Keeping Your App Running Smoothly**
   - Safe Retries with Idempotency Keys (Preventing double payments on network drops).
   - Background Jobs & Queues (Offloading slow work like emails and PDF generation).
   - Fast Memory Caching with Redis and preventing cache stampedes.
   - Real-Time Communication (WebSockets, short polling, long polling, and FCM push notifications).

6. **Stage 5: Putting Your App Online**
   - Simple, practical deployment (From beginner platforms like Render to a $5 VPS with Docker Compose).

---

## Architecture & Codebase Structure

```
src/
├── assets/                 # Static media assets (.gitkeep)
├── components/
│   ├── common/             # Badges, ConceptVisualizer (flows & comparisons), ThemeToggle
│   └── layout/             # DocsLayout, DocsSidebar, Navbar, Footer
├── config/                 # App configurations (.gitkeep)
├── context/                # ThemeContext (dark/light mode persistence)
├── data/
│   ├── stages.ts           # Curriculum stages and themes
│   ├── topics.ts           # Backwards-compatible topics re-export
│   └── topics/             # Modular topic definitions by domain
├── hooks/                  # Custom hooks (.gitkeep)
├── pages/                  # DocsOverviewPage, TopicDetailPage, AboutPage
├── routes/                 # React Router definitions
├── services/               # API clients (.gitkeep)
├── types/                  # TypeScript interfaces and models
├── utils/                  # Helper utilities (.gitkeep)
├── App.tsx                 # Root application wrapper
├── index.css               # Tailwind CSS v4 & custom scrollbars
└── main.tsx                # Entrypoint
```

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Routing**: React Router DOM

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production type-check & build
npm run build
```
