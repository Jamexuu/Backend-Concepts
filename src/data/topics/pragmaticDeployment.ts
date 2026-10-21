import type { Topic } from '@/types/content'

export const pragmaticDeploymentTopic: Topic = {
  id: 'operations-pragmatic-deployment',
  slug: 'sensible-deployment-without-kubernetes-paralysis',
  title: 'Putting Your App Online: Keeping Deployment Simple',
  tagline: 'Why you do not need expensive Kubernetes setups to launch your project.',
  stage: 5,
  category: 'Simple Hosting',
  difficulty: 'Advanced',
  estimatedTime: '12 min read',
  prerequisites: ['Basic command line and Git familiarity'],
  analogy: {
    title: 'A Food Truck vs. A Giant Food Factory',
    story:
      'If you want to sell tacos to your neighborhood (your first 1,000 visitors), you need a reliable food truck with a stove and cooler (a clean VPS or simple cloud host). You do not need to build a $5,000,000 automated industrial factory with 30 conveyor belts (Kubernetes) that takes an engineering crew just to turn on the lights.',
  },
  whyItMatters:
    'So many developers build great projects, and then spend 2 months stuck reading complex Kubernetes and cloud documentation, get frustrated, and never put their project online. Keep it simple so you can actually ship.',
  visualConcept: {
    title: 'The Pragmatic Deployment Ladder',
    summary:
      'Start at Level 1 with zero-config hosting. Only move up the ladder when your user base and revenue demand it.',
    flowSteps: [
      {
        label: 'Level 1: PaaS (Render, Fly.io)',
        detail: 'Connects to your GitHub repository and deploys automatically on every git push.',
        tag: 'Beginner',
      },
      {
        label: 'Level 2: A Single $5 VPS',
        detail: 'A virtual private server running Docker Compose and Caddy for automatic HTTPS.',
        tag: 'Intermediate',
      },
      {
        label: 'Level 3: Multi-Server Stack',
        detail: 'Separate database server and load-balanced web servers.',
        tag: 'Growth',
      },
      {
        label: 'Level 4: Orchestration (Kubernetes)',
        detail: 'Only when you have dedicated full-time devops engineers.',
        tag: 'Big Enterprise',
      },
    ],
    comparison: {
      badTitle: 'Overcomplicated Kubernetes Day 1',
      badSubtitle: 'Setting up enterprise cluster tools for a weekend project',
      badSteps: [
        {
          label: 'Write 300 Lines of Cluster YAML',
          detail: 'Struggle with ingress controllers, persistent volumes, and Helm charts.',
          tag: 'Headache',
        },
        {
          label: 'Expensive Cloud Bills',
          detail: 'Pay $100+ per month just for cloud control plane management.',
          tag: 'Costly',
        },
        {
          label: 'Frustration and Delays',
          detail: 'Spend weeks debugging networking instead of building product features.',
          tag: 'Delayed',
        },
      ],
      goodTitle: 'Simple Docker Compose or PaaS',
      goodSubtitle: 'One simple command boots your whole stack',
      goodSteps: [
        {
          label: 'Define App and Database',
          detail: 'Use a short, readable docker-compose file with environment variables.',
          tag: 'Simple',
        },
        {
          label: 'Automatic Free HTTPS',
          detail: 'Caddy or cloud platform provisions certificates automatically.',
          tag: 'Zero Hassle',
        },
        {
          label: 'Shipped in Minutes',
          detail: 'Project is live online on a $5 server handling thousands of visitors.',
          tag: 'Shipped',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Start on a Simple Platform (PaaS)',
      description:
        'Services like Render, Railway, or Fly.io connect directly to your GitHub repository and build your app automatically with zero server configuration.',
    },
    {
      title: 'A Simple Virtual Private Server (VPS)',
      description:
        'A simple $5 a month server (from DigitalOcean, Hetzner, or Linode) running Docker Compose is enough to handle thousands of daily users reliably.',
    },
    {
      title: 'Environment Variables',
      description:
        'Never put passwords or database links inside your Git code. Store them in environment variables so your code stays safe when shared publicly.',
    },
  ],
  deepDive: [
    {
      heading: 'Automatic HTTPS with Caddy',
      content:
        'Old tools required setting up manual certificates every few months. Modern servers like Caddy give you free, automatic HTTPS encryption out of the box with zero effort.',
    },
  ],
  recommendedTools: [
    {
      name: 'Render Documentation',
      url: 'https://render.com/docs',
      purpose: 'Beginner-friendly cloud host that deploys your GitHub code automatically.',
    },
    {
      name: 'Docker Compose Getting Started',
      url: 'https://docs.docker.com/compose/gettingstarted/',
      purpose: 'Easy guide to running multiple containers together with one command.',
    },
    {
      name: 'Caddy Web Server',
      url: 'https://caddyserver.com/',
      purpose: 'Simple, modern web server with automatic HTTPS encryption.',
    },
  ],
  commonPitfalls: [
    'Committing `.env` secret files with database passwords into public GitHub repos.',
    'Saving user uploads on local container disks (which get erased every time a new version deploys).',
    'Deploying without a health check route like `/healthz`.',
  ],
  actionableExercises: [
    'Create a free Render or Fly.io account. Connect one of your GitHub repositories and watch it build and deploy to a real live URL.',
  ],
}

