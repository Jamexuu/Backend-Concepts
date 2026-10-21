import type { Topic } from '@/types/content'

export const layeredArchitectureTopic: Topic = {
  id: 'architecture-layered-services',
  slug: 'layered-architecture-controllers-services-repositories',
  title: 'How to Organize Your Code: Controllers, Services & Repositories',
  tagline: 'Why putting database queries inside route handlers makes a giant mess.',
  stage: 1,
  category: 'Splitting Code into Layers',
  difficulty: 'Foundations',
  estimatedTime: '14 min read',
  prerequisites: ['Basic functions and routing'],
  analogy: {
    title: 'A Restaurant Kitchen Team',
    story:
      'The Waiter (Controller) greets the customer, takes the order ticket, and brings out the food. The Chef (Service) knows the recipe, calculates prices, and cooks. The Pantry Helper (Repository) only gets raw ingredients from the storage fridge (Database). If the waiter tried to cook and manage the fridge, orders would be ruined.',
  },
  whyItMatters:
    'In beginner tutorials, everything is thrown into one giant 300-line route file: checking input, writing SQL, sending emails, and formatting output. When your app grows, finding bugs or writing tests becomes a nightmare.',
  visualConcept: {
    title: 'The 3-Layer Architecture Flow',
    summary:
      'Separating your code into Controllers, Services, and Repositories ensures each layer has one clear responsibility.',
    flowSteps: [
      {
        label: '1. Controller (Front Door)',
        detail: 'Validates incoming HTTP request body and checks basic format.',
        tag: 'HTTP Transport',
      },
      {
        label: '2. Service (Business Brain)',
        detail: 'Applies business rules, calculates totals, and enforces logic.',
        tag: 'Business Rules',
      },
      {
        label: '3. Repository (Data Access)',
        detail: 'The only file that speaks SQL or talks directly to the database.',
        tag: 'Database Queries',
      },
      {
        label: '4. Database Engine',
        detail: 'Reads and writes records safely to the disk.',
        tag: 'Storage',
      },
    ],
    comparison: {
      badTitle: 'The Fat Route Anti-Pattern',
      badSubtitle: 'Everything crammed into one single handler',
      badSteps: [
        {
          label: 'Route Receives Request',
          detail: 'Starts with 15 nested if statements checking raw input.',
          tag: 'Messy',
        },
        {
          label: 'Raw SQL in Route',
          detail: 'Mixes database queries directly with web server logic.',
          tag: 'Tight Coupling',
        },
        {
          label: 'Calculations Mixed In',
          detail: 'Taxes, discounts, and order rules glued into the handler.',
          tag: 'Untestable',
        },
        {
          label: 'Code Cannot Be Reused',
          detail: 'If a background job needs to place an order, you must copy-paste 100 lines.',
          tag: 'Duplication',
        },
      ],
      goodTitle: 'Clean Layered Architecture',
      goodSubtitle: 'Each component does exactly one job well',
      goodSteps: [
        {
          label: 'Controller Accepts Request',
          detail: 'Strips unexpected fields and calls the Service method.',
          tag: 'Clean',
        },
        {
          label: 'Service Executes Rules',
          detail: 'Runs discount calculations that can be unit-tested in 5 milliseconds.',
          tag: 'Testable',
        },
        {
          label: 'Repository Runs Query',
          detail: 'Handles database details cleanly and returns plain objects.',
          tag: 'Isolated',
        },
        {
          label: 'Controller Sends Status',
          detail: 'Returns HTTP 201 Created with clean JSON response.',
          tag: 'Modular',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Controller (The Front Door)',
      description:
        'Only cares about HTTP: reads the request, checks if the input is shaped right, calls the Service, and returns a status code like 200 or 400. It does not touch the database.',
    },
    {
      title: 'Service (The Business Brain)',
      description:
        'Contains all your rules: "If the user is VIP, give 10% off. If stock is zero, do not allow order." It does not care if the request came from a website, phone app, or scheduled job.',
    },
    {
      title: 'Repository (The Database Helper)',
      description:
        'The only part of your code that writes SQL or talks to your ORM. If you ever switch databases, this is the only file that changes.',
    },
  ],
  deepDive: [
    {
      heading: 'Why This Makes Testing Easy',
      content:
        'When your business logic is in a service file, you can test it with simple unit tests by giving it fake data, without needing internet or databases.',
    },
  ],
  recommendedTools: [
    {
      name: 'Martin Fowler: Presentation Domain Data Layering',
      url: 'https://martinfowler.com/bliki/PresentationDomainDataLayering.html',
      purpose: 'Short, clear explanation of why software is split into layers.',
    },
  ],
  commonPitfalls: [
    'Passing Express req and res objects deep inside your service files.',
    'Making folders with 10 empty files before writing a single line of working code.',
    'Writing SQL queries directly inside React components.',
  ],
  actionableExercises: [
    'Take one route in your project. Move the calculations into a separate helper function in a new file. Notice how much easier it is to read.',
  ],
}

