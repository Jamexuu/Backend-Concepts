import type { Topic } from '@/types/content'

export const inputValidationTopic: Topic = {
  id: 'security-input-validation-and-sanitization',
  slug: 'input-validation-and-sanitization',
  title: 'Input Validation: Never Trust What Users Send You',
  tagline: 'Checking and cleaning data at the front door before it touches your code.',
  stage: 3,
  category: 'Checking Input (Validation)',
  difficulty: 'Intermediate',
  estimatedTime: '12 min read',
  prerequisites: ['Basic forms and JSON data'],
  analogy: {
    title: 'The Metal Detector at Security',
    story:
      'When you enter an arena or airport, you walk through a scanner first. Security checks bags at the entrance door, not after you are already seated inside. Input validation is that front door scanner: checking incoming data before it ever reaches your database or business logic.',
  },
  whyItMatters:
    'If you do not check incoming data, users can send empty text, negative prices, giant files that crash your memory, or secret fields that make their regular account an admin.',
  visualConcept: {
    title: 'The Front-Door Schema Gatekeeper',
    summary:
      'Validating data with a strict schema strips out unapproved fields and guarantees correct data types before business logic executes.',
    comparison: {
      badTitle: 'Trusting Client Data Directly',
      badSubtitle: 'Accepting raw input straight into the database',
      badSteps: [
        {
          label: 'Attacker Sends Raw JSON',
          detail: 'Attacker adds unexpected field: { email: "user@test.com", role: "admin" }.',
          tag: 'Crafted Request',
        },
        {
          label: 'Server Passes Raw Body',
          detail: 'Handler passes entire request body directly to database update.',
          tag: 'No Filter',
        },
        {
          label: 'Privilege Escalation',
          detail: 'Database assigns admin status to normal user account.',
          tag: 'Hacked',
        },
      ],
      goodTitle: 'Schema Gatekeeper (Zod)',
      goodSubtitle: 'Allowlisting only approved fields and types',
      goodSteps: [
        {
          label: 'Attacker Sends Raw JSON',
          detail: 'Attacker tries injecting extra fields.',
          tag: 'Attempt',
        },
        {
          label: 'Schema Strips Extra Fields',
          detail: 'Schema only allows email and age; role: "admin" is discarded automatically.',
          tag: 'Filtered',
        },
        {
          label: 'Type-Safe Data Saved',
          detail: 'Only verified, sanitized data ever reaches the database.',
          tag: 'Safe',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Never Trust the Client',
      description:
        'Anyone can open a terminal or tool like Postman and send fake data directly to your server without ever using your website buttons.',
    },
    {
      title: 'Allowlisting vs. Blocklisting',
      description:
        'Do not try to guess what bad words to block. Instead, define strictly what is allowed (for example: "Age must be a whole number between 13 and 100").',
    },
    {
      title: 'Schema Validation',
      description:
        'Using a schema tool (like Zod) lets you write clean rules in one place that automatically reject unexpected fields.',
    },
  ],
  deepDive: [
    {
      heading: 'Why Schema Libraries Save Time',
      content:
        'Libraries like Zod give you both runtime checking (when users send data) and TypeScript type hints in your code editor automatically.',
    },
  ],
  recommendedTools: [
    {
      name: 'Zod Documentation',
      url: 'https://zod.dev/',
      purpose: 'Easy-to-use schema validation library for TypeScript and JavaScript.',
    },
    {
      name: 'OWASP Input Validation Guide',
      url: 'https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html',
      purpose: 'Short rules for checking inputs securely.',
    },
  ],
  commonPitfalls: [
    'Assuming that HTML form required tags are enough to stop bad data.',
    'Allowing negative numbers for prices or quantities in e-commerce stores.',
    'Passing raw request bodies directly into database update functions.',
  ],
  actionableExercises: [
    'Write down what a user sign-up payload should look like. Mark which fields are strictly required, what characters are allowed, and what maximum length each field has.',
  ],
}

