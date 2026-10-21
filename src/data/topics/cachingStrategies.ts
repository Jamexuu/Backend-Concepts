import type { Topic } from '@/types/content'

export const cachingStrategiesTopic: Topic = {
  id: 'resilience-caching-strategies',
  slug: 'caching-strategies-and-thundering-herd',
  title: 'Caching: Using Fast Memory and Avoiding the Thundering Herd',
  tagline: 'Keeping answers on an index card so you do not have to re-read the whole book.',
  stage: 4,
  category: 'Fast Memory Caching',
  difficulty: 'Intermediate',
  estimatedTime: '13 min read',
  prerequisites: ['Basic key-value stores like Redis'],
  analogy: {
    title: 'The Cheat Sheet on Your Desk',
    story:
      'Walking to the library archive (Database hard drive) takes 20 minutes every time someone asks a question. Writing the top 5 answers on a post-it note on your desk (Redis RAM cache) takes 1 second. But if the facts change, your post-it note is outdated until you throw it away (Cache Invalidation).',
  },
  whyItMatters:
    'If 1,000 users visit your home page at the same time, asking your database to calculate the exact same top products 1,000 times will bring your server to its knees. Caching keeps the calculated answer in memory for fast reuse.',
  visualConcept: {
    title: 'Cache-Aside Pattern & Stampede Defense',
    summary:
      'Check ultra-fast memory (Redis) first. Only query the slower database hard drive on a cache miss.',
    flowSteps: [
      {
        label: '1. Request Arrives',
        detail: 'Visitor requests popular products list.',
        tag: 'Incoming',
      },
      {
        label: '2. Check RAM Cache',
        detail: 'Look up key in Redis in under 2 milliseconds.',
        tag: 'RAM Check',
      },
      {
        label: '3. Cache Hit (Fast)',
        detail: 'If present, return saved JSON immediately without touching disk.',
        tag: '2ms Response',
      },
      {
        label: '4. Cache Miss (Slow)',
        detail: 'If expired, query database disk once, save to Redis, and return.',
        tag: 'Refresh',
      },
    ],
    comparison: {
      badTitle: 'Without a Cache',
      badSubtitle: 'Every single visitor slams the database disk',
      badSteps: [
        {
          label: '1,000 Concurrent Visitors',
          detail: 'A popular link is shared on social media.',
          tag: 'Traffic Surge',
        },
        {
          label: '1,000 Heavy Queries',
          detail: 'Database runs the exact same sorting calculation 1,000 times.',
          tag: 'Disk Overload',
        },
        {
          label: 'Database CPU Hits 100%',
          detail: 'Hard drive I/O queues up and the database crashes.',
          tag: 'Downtime',
        },
      ],
      goodTitle: 'With Cache-Aside & Expiration',
      goodSubtitle: 'Database runs calculation once; memory serves the rest',
      goodSteps: [
        {
          label: '1,000 Concurrent Visitors',
          detail: 'Traffic surge arrives.',
          tag: 'Traffic Surge',
        },
        {
          label: 'Visitor 1 Fills Cache',
          detail: 'First visitor triggers calculation once and saves result to Redis.',
          tag: 'Cached',
        },
        {
          label: 'Visitors 2 to 1,000 Hit RAM',
          detail: '999 visitors get answers in 2 milliseconds straight from memory.',
          tag: 'Instant',
        },
        {
          label: 'Database Stays Relaxed',
          detail: 'Database CPU remains under 5% throughout the entire surge.',
          tag: 'Healthy',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Cache-Aside (Check Memory First)',
      description:
        'Check Redis first. If the answer is there (cache hit), return it in 2 milliseconds. If not (cache miss), query the database, save to Redis with a timer, and return.',
    },
    {
      title: 'Expiration Times (TTL)',
      description:
        'Always set a Time To Live (like 5 minutes). If data changes, the old post-it note will be replaced after the timer runs out.',
    },
    {
      title: 'The Thundering Herd Problem',
      description:
        'When a popular cached item expires, all 500 visitors miss the cache at the exact same millisecond and slam the database at once.',
    },
  ],
  deepDive: [
    {
      heading: 'Adding Random Jitter to Expiration Timers',
      content:
        'If you cache 100 items at noon with a 1-hour timer, all 100 will expire at exactly 1:00 PM. Adding a few random seconds (jitter) spreads out the work.',
    },
  ],
  recommendedTools: [
    {
      name: 'Redis Crash Course',
      url: 'https://redis.io/docs/latest/develop/get-started/',
      purpose: 'Official guide on setting up and using Redis for caching.',
    },
  ],
  commonPitfalls: [
    'Caching private user data under a global key so everyone sees someone elses account.',
    'Forgetting to set an expiration timer, so your cache keeps growing until the server runs out of RAM.',
  ],
  actionableExercises: [
    'Think about search engines: when millions of people search for today weather, they get cached answers from memory instead of re-calculating from satellite data.',
  ],
}

