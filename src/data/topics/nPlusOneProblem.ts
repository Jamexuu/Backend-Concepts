import type { Topic } from '@/types/content'

export const nPlusOneProblemTopic: Topic = {
  id: 'persistence-n-plus-one-query-problem',
  slug: 'preventing-n-plus-one-query-problem',
  title: 'The N+1 Query Problem: Why Fast Local Apps Become Slow in Production',
  tagline: 'How innocent loops inside code send hundreds of unnecessary database requests.',
  stage: 2,
  category: 'Preventing Slow Loops (N+1)',
  difficulty: 'Intermediate',
  estimatedTime: '13 min read',
  prerequisites: ['Basic database tables and loops'],
  analogy: {
    title: 'The Supermarket Grocery Run',
    story:
      'Imagine you need ingredients for 10 recipes. Going to the store once with a full list and buying everything in one trip is a batch query. Driving to the store, buying one egg, driving home, driving back for butter, driving home... that is the N+1 problem. The driving back and forth is what kills your speed.',
  },
  whyItMatters:
    'On your personal computer with 5 test items, your app loads in the blink of an eye. In production with 500 items, sending 501 separate database requests over the network takes 3 full seconds, making your site feel slow.',
  visualConcept: {
    title: 'The N+1 Loop vs. Single Batch Join',
    summary:
      'Network roundtrips add up fast. Batching or joining data into a single query eliminates unnecessary network lag.',
    comparison: {
      badTitle: 'The N+1 Loop (Innocent-Looking Trap)',
      badSubtitle: '1 query for posts + 50 separate queries for authors',
      badSteps: [
        {
          label: 'Query 1: Fetch 50 Posts',
          detail: 'Server sends 1 SQL query and receives 50 posts back.',
          tag: 'Trip 1',
        },
        {
          label: 'Code Enters a Loop',
          detail: 'For each post, the code sends an extra query to find the author.',
          tag: '50 Extra Trips',
        },
        {
          label: '51 Network Roundtrips',
          detail: 'Even at 2ms each, 51 sequential roundtrips equal 100ms+ of pure delay.',
          tag: 'High Latency',
        },
        {
          label: 'Connection Pool Drained',
          detail: 'Multiple users doing this simultaneously exhaust database connections.',
          tag: 'Bottleneck',
        },
      ],
      goodTitle: 'Single Batch Query with JOIN',
      goodSubtitle: 'Both posts and authors fetched in one single trip',
      goodSteps: [
        {
          label: 'Single Joined Query',
          detail: 'Server asks for posts and authors connected together.',
          tag: '1 Trip',
        },
        {
          label: 'Database Engine Connects Rows',
          detail: 'The database engine performs the join in fast internal RAM in sub-millisecond time.',
          tag: 'Ultra Fast',
        },
        {
          label: 'Complete Payload Returned',
          detail: 'Entire data structure travels across the network in one single packet.',
          tag: '1 Roundtrip',
        },
        {
          label: 'Zero Extra Queries',
          detail: 'Response renders instantly without any nested loops hitting the database.',
          tag: 'Optimized',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Where the Name Comes From',
      description:
        '1 query to get a list of N items (like 50 blog posts), plus N separate queries in a loop to get the author of each post. Total: 1 + 50 = 51 queries.',
    },
    {
      title: 'Network Lag Adds Up',
      description:
        'Even if a query takes only 2 milliseconds, doing it 500 times in a row adds up to a full second of pure waiting.',
    },
    {
      title: 'Eager Loading & Joins',
      description:
        'Ask the database for both the posts and authors together in one single request.',
    },
  ],
  deepDive: [
    {
      heading: 'Batching with WHERE IN',
      content:
        'If a JOIN is too messy, you can do 2 fast queries instead of 51: first get the 50 posts, collect their author IDs, and do `SELECT * FROM authors WHERE id IN (1, 2, 3...)`.',
    },
  ],
  recommendedTools: [
    {
      name: 'Prisma Relation Queries Guide',
      url: 'https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries',
      purpose: 'Shows how to load connected data cleanly without extra queries.',
    },
  ],
  commonPitfalls: [
    'Not turning on SQL query logs while developing on your laptop.',
    'Assuming that because code looks short, it only runs one query.',
  ],
  actionableExercises: [
    'Turn on query logging in your backend terminal. Load a page with a list of items and count how many SQL lines print out.',
  ],
}

