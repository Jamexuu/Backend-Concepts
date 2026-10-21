# Backend Concepts

A clean React + TypeScript project built with Vite and Tailwind CSS.

## Architecture

```
src/
├── assets/             # Static media assets (images, icons, svgs)
├── components/         # Reusable UI components
│   ├── common/         # Atomic & generic shared components (buttons, modals, inputs)
│   └── layout/         # Structural layout components (navbar, sidebar, footer)
├── config/             # App-level configurations & environment constants
├── context/            # React Context providers and custom context hooks
├── hooks/              # Custom reusable React hooks
├── pages/              # Route views & page-level components
├── routes/             # Route declarations and navigation guards
├── services/           # Backend API integration and HTTP clients
├── types/              # TypeScript declarations, interfaces, and models
├── utils/              # Helper functions, formatters, and utility methods
├── App.tsx             # Root component styled with Tailwind CSS
├── index.css           # Global stylesheet with Tailwind CSS directives
└── main.tsx            # Application entrypoint
```

## Styling

Tailwind CSS (v4) is integrated via `@tailwindcss/vite`:
- Directives are configured in [src/index.css](file:///c:/Dev/Backend-Concepts/src/index.css) via `@import "tailwindcss";`.
- Vite integration configured in [vite.config.ts](file:///c:/Dev/Backend-Concepts/vite.config.ts).

## Path Aliases

Path alias `@/*` is configured to map directly to `src/*`:

```ts
import { MyComponent } from '@/components/common/MyComponent'
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build & type check
npm run build
```
