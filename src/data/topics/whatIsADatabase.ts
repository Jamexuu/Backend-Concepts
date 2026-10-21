import type { Topic } from '@/types/content'

export const whatIsADatabaseTopic: Topic = {
  id: 'persistence-what-is-a-database',
  slug: 'what-is-a-database-types-and-analogies',
  title: 'What is a Database? Types, Everyday Analogies & Choices',
  tagline: 'Spreadsheets vs. folders vs. coat check rooms.',
  stage: 2,
  category: 'What is a Database?',
  difficulty: 'Foundations',
  estimatedTime: '12 min read',
  prerequisites: ['Basic understanding of saving files on a computer'],
  analogy: {
    title: 'Three Types of Storage in an Office',
    story:
      'A Relational Database (SQL) is a neat digital spreadsheet with strict columns: every row must follow the rules. A Document Database (NoSQL) is a drawer of folders: each folder has papers inside, and some papers can have extra notes that others do not. A Key-Value Cache (Redis) is a coat check desk: hand in ticket #15, get coat #15 back instantly.',
  },
  whyItMatters:
    'Beginners often pick whatever database they saw in a YouTube video. If you pick a loose document store for bank transfers, you can lose money. If you use a slow SQL query for temporary visitor counts, your server slows to a crawl.',
  visualConcept: {
    title: 'Database Types at a Glance',
    summary:
      'Different databases are designed for different shapes of data and speed requirements.',
    flowSteps: [
      {
        label: '1. Relational (PostgreSQL, SQLite)',
        detail: 'Neat tables with foreign keys. Best for users, orders, and money.',
        tag: 'Strict Tables',
      },
      {
        label: '2. Document (MongoDB)',
        detail: 'Loose JSON documents. Best for variable product catalogs and articles.',
        tag: 'Flexible JSON',
      },
      {
        label: '3. In-Memory Key-Value (Redis)',
        detail: 'Stored directly in RAM. Ultra fast for sessions, counts, and cache.',
        tag: 'Fast RAM',
      },
      {
        label: '4. The Golden Rule',
        detail: 'Start with PostgreSQL. It handles tables and JSON documents easily.',
        tag: 'Best Default',
      },
    ],
    comparison: {
      badTitle: 'Managing Too Many Databases Early',
      badSubtitle: 'Setting up 4 different database services on day one',
      badSteps: [
        {
          label: 'Spin Up Multiple Databases',
          detail: 'Use MongoDB, Redis, Cassandra, and Neo4j for a blog with 5 users.',
          tag: 'Complex',
        },
        {
          label: 'Sync Disasters',
          detail: 'Data gets updated in one database but fails in another.',
          tag: 'Inconsistent',
        },
        {
          label: 'High Cloud Bills',
          detail: 'Paying separate hosting fees for four database servers.',
          tag: 'Expensive',
        },
      ],
      goodTitle: 'Starting with a Solid Default',
      goodSubtitle: 'PostgreSQL or SQLite handles almost everything you need',
      goodSteps: [
        {
          label: 'Single Database Server',
          detail: 'PostgreSQL stores standard relational tables safely on disk.',
          tag: 'Simple',
        },
        {
          label: 'Store JSON When Needed',
          detail: 'Use PostgreSQL JSONB columns for flexible, dynamic fields.',
          tag: 'Versatile',
        },
        {
          label: 'Add Redis Only for Cache',
          detail: 'Introduce Redis later only when traffic requires sub-millisecond RAM caching.',
          tag: 'Scalable',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'What a Database Does',
      description:
        'A database is specialized software that saves your data to the hard drive safely, makes sure multiple people can save things at the same time without overwriting each other, and survives power outages.',
    },
    {
      title: 'Relational (SQL) Databases',
      description:
        'Best for most projects. Data lives in tables with strict columns. Examples: PostgreSQL, MySQL, SQLite. Perfect for user accounts, orders, and money.',
    },
    {
      title: 'Document (NoSQL) Databases',
      description:
        'Best when data shapes change constantly or when you want to store JSON directly. Examples: MongoDB. Good for article drafts and dynamic product catalogs.',
    },
    {
      title: 'In-Memory Stores (Key-Value)',
      description:
        'Saves data directly in RAM instead of slow hard drives. Ultra fast, but can lose unsaved data on restart. Examples: Redis. Perfect for temporary logins and caching.',
    },
  ],
  deepDive: [
    {
      heading: 'Why SQLite is Great for Beginners',
      content:
        'SQLite lives in a single file on your computer. You do not need to install background services or remember passwords. It is built into almost every programming language.',
    },
  ],
  recommendedTools: [
    {
      name: 'SQLite Official Site',
      url: 'https://www.sqlite.org/',
      purpose: 'Simple, zero-setup database stored in a single file.',
    },
    {
      name: 'PostgreSQL Tutorial',
      url: 'https://www.postgresqltutorial.com/',
      purpose: 'Easy step-by-step guides for beginners learning SQL.',
    },
    {
      name: 'DBeaver Community',
      url: 'https://dbeaver.io/',
      purpose: 'Free desktop app that lets you view and click your database tables visually.',
    },
  ],
  commonPitfalls: [
    'Using a text file or JSON file as a database (two users writing at once will corrupt the file).',
    'Forgetting to create automated database backups.',
    'Putting temporary session data into a slow disk database when it belongs in Redis.',
  ],
  actionableExercises: [
    'Download DBeaver or an online SQLite sandbox. Create a simple table with 3 columns (id, name, email) and insert two rows.',
  ],
}

