import type { StageInfo } from '@/types/content'

export const stages: StageInfo[] = [
  {
    number: 0,
    title: 'Stage 0: Fundamentals & How the Web Works',
    subtitle: 'The basic ideas you need before writing any backend code',
    description:
      'Learn how information travels across the internet, how computers handle waiting for slow tasks, and what a server actually does.',
    color: 'emerald',
    themes: ['Network Basics', 'Waiting for Tasks (Async)', 'Web Requests'],
  },
  {
    number: 1,
    title: 'Stage 1: Choosing Tools & Organizing Code',
    subtitle: 'Avoiding confusion when picking languages and folder structures',
    description:
      'Do not get stuck trying to find the perfect framework. Learn how to pick the right tool for your project and how to keep your code neat and clean.',
    color: 'blue',
    themes: ['Picking a Language', 'Splitting Code into Layers', 'App Settings'],
  },
  {
    number: 2,
    title: 'Stage 2: Databases & Storing Data',
    subtitle: 'Understanding databases with simple real-life analogies',
    description:
      'What a database actually is, how different types store information, and how to query them without slowing your app down.',
    color: 'amber',
    themes: ['What is a Database?', 'Safe Queries', 'Preventing Slow Loops (N+1)'],
  },
  {
    number: 3,
    title: 'Stage 3: Securing Your App & Website',
    subtitle: 'Protecting your users, accounts, and server from bad actors',
    description:
      'Easy-to-understand security. Learn login systems, checking user input, and stopping spam or automated bots from crashing your site.',
    color: 'rose',
    themes: ['Login & Passwords (Auth)', 'Checking Input (Validation)', 'Stopping Bots (Rate Limiting)'],
  },
  {
    number: 4,
    title: 'Stage 4: Keeping Your App Running Smoothly',
    subtitle: 'Handling background jobs, bad Wi-Fi, and heavy traffic',
    description:
      'What happens when users lose connection or click twice? Learn how to prevent double payments, run slow tasks in the background, use fast memory caches, and send instant real-time updates.',
    color: 'violet',
    themes: [
      'Safe Retries (Idempotency)',
      'Background Jobs & Queues',
      'Fast Memory Caching',
      'Real-Time (WebSockets & Polling)',
    ],
  },
  {
    number: 5,
    title: 'Stage 5: Putting Your App Online',
    subtitle: 'Shipping your project without getting lost in complicated cloud tools',
    description:
      'You do not need expensive cloud setups to put your app online. Learn simple, reliable ways to deploy your project to real servers.',
    color: 'teal',
    themes: ['Simple Hosting', 'Docker Basics', 'Checking Server Health'],
  },
]

