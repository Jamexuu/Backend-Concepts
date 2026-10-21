import type { Topic } from '@/types/content'

export const asyncSyncExecutionTopic: Topic = {
  id: 'prerequisites-async-sync-execution',
  slug: 'async-sync-and-event-loop',
  title: 'Synchronous vs. Asynchronous: How Servers Do Multiple Things at Once',
  tagline: 'Why doing slow tasks on the main line freezes your entire application.',
  stage: 0,
  category: 'Waiting for Tasks (Async)',
  difficulty: 'Prerequisite',
  estimatedTime: '12 min read',
  prerequisites: ['Basic programming functions'],
  analogy: {
    title: 'The Restaurant Waiter',
    story:
      'Think of a waiter taking an order from Table 1. After writing the order down, the waiter hands it to the kitchen and immediately goes to serve Table 2. That is asynchronous. A synchronous waiter would stand at the kitchen counter doing nothing for 20 minutes waiting for the food to cook while all other customers starve.',
  },
  whyItMatters:
    'Backend servers need to help thousands of people at the exact same time. If one user asks your server to do something slow, and your server freezes while doing it, all other users are locked out.',
  visualConcept: {
    title: 'Synchronous Blocking vs. Asynchronous Non-Blocking',
    summary:
      'When code runs synchronously, each user must wait in a single-file line. When code runs asynchronously, the main door stays open while slow background work finishes on helper threads.',
    comparison: {
      badTitle: 'Synchronous (Blocking)',
      badSubtitle: 'One slow calculation freezes everyone in line',
      badSteps: [
        {
          label: 'User 1 Triggers Heavy Task',
          detail: 'Runs slow password hashing directly on the main event loop.',
          tag: 'Blocks',
        },
        {
          label: 'User 2 Arrives',
          detail: 'Server is frozen; User 2 sits waiting with a spinning wheel.',
          tag: 'Waiting',
        },
        {
          label: 'User 3 Arrives',
          detail: 'Also stuck waiting behind User 1 and User 2.',
          tag: 'Waiting',
        },
        {
          label: 'Total Lag: Multiplied',
          detail: 'Every single visitor experiences sluggish response times.',
          tag: 'Slow',
        },
      ],
      goodTitle: 'Asynchronous (Non-Blocking)',
      goodSubtitle: 'Work is delegated so new visitors enter immediately',
      goodSteps: [
        {
          label: 'User 1 Triggers Heavy Task',
          detail: 'Server hands the task to a background worker and returns to the front desk.',
          tag: 'Delegated',
        },
        {
          label: 'User 2 Arrives',
          detail: 'Server immediately responds to User 2 in less than 5 milliseconds.',
          tag: 'Instant',
        },
        {
          label: 'User 3 Arrives',
          detail: 'Server immediately handles User 3 without any delay.',
          tag: 'Instant',
        },
        {
          label: 'User 1 Background Task Finishes',
          detail: 'Worker notifies the server, which sends the completed result back to User 1.',
          tag: 'Smooth',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'CPU Work vs. Waiting Work (I/O)',
      description:
        'Most backend work is just waiting: waiting for a database to find a user, or waiting for a file to read. The computer processor (CPU) does not need to work hard while waiting.',
    },
    {
      title: 'The Event Loop',
      description:
        'Instead of waiting doing nothing, the server leaves a note with the operating system: "Tell me when the data arrives, and I will keep helping other users in the meantime."',
    },
    {
      title: 'Worker Threads',
      description:
        'For heavy math or image resizing, we hand that work to a background helper thread so the main door stays open for new visitors.',
    },
  ],
  deepDive: [
    {
      heading: 'Why Node.js and Go are Popular for Backends',
      content:
        'They are built from day one to handle thousands of waiting connections using very little computer memory.',
    },
  ],
  recommendedTools: [
    {
      name: 'Loupe: Event Loop Visualizer',
      url: 'http://latentflip.com/loupe/',
      purpose: 'Interactive visual tool that shows how tasks wait in line.',
    },
    {
      name: 'Node.js Guide on Non-Blocking I/O',
      url: 'https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking',
      purpose: 'Official guide explaining blocking vs non-blocking code in plain language.',
    },
  ],
  commonPitfalls: [
    'Using forEach with async functions (it does not wait for items to finish).',
    'Reading huge files all at once using synchronous methods.',
    'Forgetting error checks around awaited code, which can crash your server.',
  ],
  actionableExercises: [
    'Notice when you open multiple browser tabs at once: websites load simultaneously because servers use non-blocking event loops.',
  ],
}

