import type { Topic } from '@/types/content'

export const choosingFrameworkTopic: Topic = {
  id: 'architecture-choosing-a-framework',
  slug: 'choosing-the-right-backend-framework',
  title: 'How & When to Choose a Backend Language or Framework',
  tagline: 'Picking the right tool without falling for social media hype.',
  stage: 1,
  category: 'Picking a Language',
  difficulty: 'Foundations',
  estimatedTime: '12 min read',
  prerequisites: ['Basic understanding of programming languages'],
  analogy: {
    title: 'Picking the Right Vehicle',
    story:
      'A racing car (like C++ or Rust) is super fast, but hard to drive and expensive to maintain. A luxury SUV with every accessory built-in (like PHP with Laravel) comes with navigation, heated seats, and built-in security so you can hit the road immediately. A flexible family sedan (like TypeScript or Python) is comfortable and easy to customize. A reliable cargo truck (like Go or Java) is great for carrying heavy loads all day long.',
  },
  whyItMatters:
    'Beginners waste weeks arguing about what language is "the best". In real life, almost any modern language can handle thousands of users. What matters most is how fast you can build features and how easy it is to find help.',
  visualConcept: {
    title: 'Framework Decision Matrix',
    summary:
      'Choose your backend tool based on developer speed and project needs, not synthetic speed tests.',
    comparison: {
      badTitle: 'Hype-Driven Selection',
      badSubtitle: 'Choosing based on raw speed benchmarks',
      badSteps: [
        {
          label: 'Look at Benchmark Charts',
          detail: 'Notice a framework serving 1,000,000 empty text responses per second.',
          tag: 'Impulsive',
        },
        {
          label: 'Switch Entire Project',
          detail: 'Pick an unfamiliar or complex language with few learning tutorials.',
          tag: 'Struggle',
        },
        {
          label: 'Reinvent Basic Tools',
          detail: 'Spend weeks manually building authentication and database drivers.',
          tag: 'Burnout',
        },
        {
          label: 'Project Abandoned',
          detail: 'Product never ships to real users because development was too difficult.',
          tag: 'Failed',
        },
      ],
      goodTitle: 'Pragmatic Selection',
      goodSubtitle: 'Choosing based on developer speed and community support',
      goodSteps: [
        {
          label: 'Identify Project Scope',
          detail: 'Determine team size, expected traffic, and need for third-party libraries.',
          tag: 'Plan',
        },
        {
          label: 'Choose Mature Ecosystem',
          detail: 'Pick a complete framework like Laravel or a fast runtime like TypeScript/Python.',
          tag: 'Speed',
        },
        {
          label: 'Use Battle-Tested Libraries',
          detail: 'Leverage community packages for payments, auth, and database connections.',
          tag: 'Leverage',
        },
        {
          label: 'Ship to Production Early',
          detail: 'Launch to real users in days and optimize only if traffic demands it.',
          tag: 'Shipped',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Speed of Building (Developer Velocity)',
      description:
        'When you are starting out or building a new product, being able to write code and test ideas quickly matters 10 times more than raw computer execution speed.',
    },
    {
      title: 'Available Libraries (Ecosystem)',
      description:
        'Does your chosen language have ready-made, well-tested tools for payments, logins, and databases? If not, you will have to build everything yourself.',
    },
    {
      title: 'Database Bottlenecks',
      description:
        'In almost every web app, waiting for the database takes 95% of the time. The language you use is rarely the slow part.',
    },
  ],
  deepDive: [
    {
      heading: 'Why Batteries-Included Frameworks Like Laravel Shine',
      content:
        'Frameworks like Laravel provide authentication (Sanctum/Breeze), database migrations, queue workers, mailers, and the Eloquent ORM straight out of the box. You do not have to piece together 15 different packages before building your first feature.',
    },
  ],
  recommendedTools: [
    {
      name: 'Laravel Documentation',
      url: 'https://laravel.com/docs',
      purpose: 'The complete, elegant PHP web framework with built-in auth, queues, and ORM.',
    },
    {
      name: 'FastAPI Tutorial',
      url: 'https://fastapi.tiangolo.com/tutorial/',
      purpose: 'One of the friendliest, best-documented frameworks in Python.',
    },
    {
      name: 'Express.js Getting Started',
      url: 'https://expressjs.com/en/starter/installing.html',
      purpose: 'The classic, simple starter framework for Node.js.',
    },
  ],
  commonPitfalls: [
    'Rewriting your project in a new language every time a new tool trends online.',
    'Picking microservices when you only have 5 users.',
    'Writing custom security code instead of using popular libraries.',
  ],
  actionableExercises: [
    'Write down the 3 main features of your app. Check if there are popular libraries for them in your language before you start coding.',
  ],
}

