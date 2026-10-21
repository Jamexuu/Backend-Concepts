import type { Topic } from '@/types/content'

export const rateLimitingTopic: Topic = {
  id: 'security-rate-limiting-and-throttling',
  slug: 'rate-limiting-and-throttling',
  title: 'Rate Limiting & Throttling: Stopping Spammers and Bot Overload',
  tagline: 'How to keep automated scripts from crashing your website.',
  stage: 3,
  category: 'Stopping Bots (Rate Limiting)',
  difficulty: 'Intermediate',
  estimatedTime: '13 min read',
  prerequisites: ['Basic API routes and status code 429'],
  analogy: {
    title: 'The Theme Park Line Token Machine',
    story:
      'A roller coaster can only hold 50 people every 5 minutes. The ticket machine gives you one ticket. If someone tries to mash the button 100 times to grab all the seats, the machine says: "Please wait 5 minutes before asking for another ticket." Rate limiting is that ticket machine protecting your server from crashing.',
  },
  whyItMatters:
    'Without rate limiting, an automated computer program can try 10,000 passwords a second on your login page, or send 50,000 search queries that overload your database and make your site unusable for real visitors.',
  visualConcept: {
    title: 'How Rate Limiting Protects Your Server',
    summary:
      'Track request counts in fast memory (Redis). When an IP or user exceeds the threshold, immediately return HTTP 429 Too Many Requests.',
    comparison: {
      badTitle: 'Open Route (No Limit)',
      badSubtitle: 'Vulnerable to brute-force automated bots',
      badSteps: [
        {
          label: 'Bot Starts Automated Loop',
          detail: 'Fires 1,000 password guesses every single second.',
          tag: 'Spam Attack',
        },
        {
          label: 'Database CPU Spikes to 100%',
          detail: 'Every single guess triggers a password calculation.',
          tag: 'Overload',
        },
        {
          label: 'Legitimate Users Locked Out',
          detail: 'The website becomes sluggish or completely crashes.',
          tag: 'Downtime',
        },
      ],
      goodTitle: 'Protected Route (Rate Limited)',
      goodSubtitle: 'Blocks bots after 5 failed attempts',
      goodSteps: [
        {
          label: 'Bot Sends 5 Rapid Guesses',
          detail: 'Each attempt increments a counter in fast Redis memory.',
          tag: 'Counting',
        },
        {
          label: 'Limit Crossed',
          detail: 'Attempt #6 is stopped at the front door before touching the database.',
          tag: 'Blocked',
        },
        {
          label: 'HTTP 429 Returned',
          detail: 'Server responds with status 429 and Retry-After header.',
          tag: 'Protected',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Rate Limiting vs. Throttling',
      description:
        'Rate limiting says: "You hit your limit, try again in 10 minutes" (HTTP 429). Throttling says: "You are going too fast, I will slow your requests down to keep things steady."',
    },
    {
      title: 'Protecting Sensitive Routes',
      description:
        'Login pages, password reset emails, and payment checkouts should always have tight limits (like 5 tries per 15 minutes) to stop guessing bots.',
    },
    {
      title: 'Using Redis for Counters',
      description:
        'We store request counts in fast memory (Redis) by IP address or user ID so counts are checked in less than 1 millisecond.',
    },
  ],
  deepDive: [
    {
      heading: 'What is HTTP 429?',
      content:
        'HTTP status code 429 means "Too Many Requests". Friendly servers also send a `Retry-After` header telling the client how many seconds to wait before trying again.',
    },
  ],
  recommendedTools: [
    {
      name: 'express-rate-limit',
      url: 'https://express-rate-limit.mintlify.app/',
      purpose: 'Simple, popular rate limiting middleware for Node.js apps.',
    },
    {
      name: 'Upstash Rate Limit',
      url: 'https://upstash.com/docs/redis/sdks/ratelimit-ts/overview',
      purpose: 'Serverless rate limiting library for modern apps using Redis.',
    },
  ],
  commonPitfalls: [
    'Keeping counts only in local server memory (counts reset when the server restarts or scales).',
    'Forgetting to rate limit expensive routes like PDF generators or search bars.',
  ],
  actionableExercises: [
    'Think about popular apps like Instagram or Twitter: if you refresh or like 100 photos rapidly, notice how the app asks you to wait. That is rate limiting.',
  ],
}

