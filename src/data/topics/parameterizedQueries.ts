import type { Topic } from '@/types/content'

export const parameterizedQueriesTopic: Topic = {
  id: 'persistence-parameterized-queries',
  slug: 'parameterized-queries-and-sql-injection',
  title: 'SQL Injection: How Hackers Attack and How to Stop Them with Parameters',
  tagline: 'Why gluing text into database queries is the most dangerous mistake in web development.',
  stage: 2,
  category: 'Safe Queries',
  difficulty: 'Foundations',
  estimatedTime: '12 min read',
  prerequisites: ['Basic SQL SELECT statement'],
  analogy: {
    title: 'The Drive-Through Trick',
    story:
      'Imagine ordering at a fast food speaker: "Give me burger #1." The cashier presses button 1. But gluing strings together is like saying: "Give me burger #1, and then give me all the money in the register." Because the machine treats your words as instructions instead of safe data, you get robbed.',
  },
  whyItMatters:
    'SQL Injection is one of the oldest and most dangerous hacks on the internet. A single glued string can let a stranger download all your passwords, delete your tables, or log in as an administrator.',
  visualConcept: {
    title: 'How Parameterized Queries Stop Attacks',
    summary:
      'When you glue text together, the database parser treats user input as executable SQL commands. When you use parameters, user input is isolated safely into a plain data container.',
    comparison: {
      badTitle: 'Gluing Strings Together (Vulnerable)',
      badSubtitle: 'User input alters the command syntax',
      badSteps: [
        {
          label: 'Attacker Enters Malicious Input',
          detail: 'Attacker submits text containing an apostrophe and SQL commands.',
          tag: 'Input',
        },
        {
          label: 'Query Glued Together',
          detail: 'Code concatenates the input directly into the SQL string.',
          tag: 'Concat',
        },
        {
          label: 'Database Parser Hijacked',
          detail: 'The apostrophe ends the string early; the database executes the new commands.',
          tag: 'Compromised',
        },
        {
          label: 'Unauthorized Data Returned',
          detail: 'All user accounts are leaked and authentication is bypassed.',
          tag: 'Hacked',
        },
      ],
      goodTitle: 'Parameterized Queries (Protected)',
      goodSubtitle: 'Command structure is locked before data is sent',
      goodSteps: [
        {
          label: 'SQL Template Sent with Placeholders',
          detail: 'The database compiles the query structure with placeholders ($1).',
          tag: 'Template',
        },
        {
          label: 'User Input Sent Separately',
          detail: 'User text is passed in an isolated data array.',
          tag: 'Isolated',
        },
        {
          label: 'Strict Plain-Text Treatment',
          detail: 'The database treats the input strictly as literal characters.',
          tag: 'Safe',
        },
        {
          label: 'Attack Neutralized',
          detail: 'Even if the user types quotes, it searches for quotes as literal text.',
          tag: 'Secure',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Instructions vs. Plain Data',
      description:
        'When you glue strings together, the database cannot tell where your command stops and where the user text begins. An apostrophe makes the database think user text is part of the command.',
    },
    {
      title: 'Prepared Statements (Placeholders)',
      description:
        'We send the command template first with placeholders like $1 or ?. The database prepares the plan. Then we send the user values separately. The database treats them strictly as safe data.',
    },
  ],
  deepDive: [
    {
      heading: 'Do ORMs Protect You?',
      content:
        'Most modern ORMs (like Prisma or TypeORM) use parameters automatically. But if you ever use their raw query escape hatches, you can accidentally bring the danger right back.',
    },
  ],
  recommendedTools: [
    {
      name: 'OWASP SQL Injection Cheat Sheet',
      url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',
      purpose: 'Easy guide on how to protect any language against query injection.',
    },
  ],
  commonPitfalls: [
    'Trying to clean input using your own search-and-replace regex (hackers easily bypass custom filters).',
    'Thinking client-side form validation protects you (anyone can send raw HTTP requests without a browser).',
  ],
  actionableExercises: [
    'Check your existing database code. Make sure every single query uses $1, ?, or named parameters instead of string concatenation.',
  ],
}

