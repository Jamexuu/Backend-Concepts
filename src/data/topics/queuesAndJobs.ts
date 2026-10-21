import type { Topic } from '@/types/content'

export const queuesAndJobsTopic: Topic = {
  id: 'resilience-queues-and-background-jobs',
  slug: 'queues-and-background-jobs',
  title: 'Background Jobs & Queues: Offloading Slow Work',
  tagline: 'Why sending emails or resizing images inside a route slows everything down.',
  stage: 4,
  category: 'Background Workers & Queues',
  difficulty: 'Intermediate',
  estimatedTime: '14 min read',
  prerequisites: ['Basic asynchronous code'],
  analogy: {
    title: 'The Coffee Shop Ticket Line',
    story:
      'When you order an espresso, the cashier does not stop the line, walk into the kitchen, brew the drink, and make 20 people wait behind you. The cashier takes your money, gives you a ticket number, and hands the slip to the barista (the background worker). The line keeps moving smoothly.',
  },
  whyItMatters:
    'If your sign-up route generates a PDF, talks to 3 external APIs, and sends a welcome email before replying, the user waits 8 seconds. If the email company has an outage, the whole user sign-up crashes.',
  visualConcept: {
    title: 'The Producer-Queue-Consumer Pipeline',
    summary:
      'Web servers should reply in milliseconds. Hand slow tasks over to background queues so external outages never crash your user sign-ups.',
    flowSteps: [
      {
        label: '1. User Submits Form',
        detail: 'New account details submitted to web route.',
        tag: 'Web Request',
      },
      {
        label: '2. Save to Database',
        detail: 'User record saved to database in 5ms.',
        tag: 'Database',
      },
      {
        label: '3. Drop Ticket into Queue',
        detail: 'Lightweight job added to Redis message queue in 2ms.',
        tag: 'Enqueue',
      },
      {
        label: '4. Instant Confirmation',
        detail: 'User receives HTTP 201 Created immediately.',
        tag: 'Instant Reply',
      },
      {
        label: '5. Background Worker Runs',
        detail: 'Separate worker picks up ticket and sends email at its own pace.',
        tag: 'Worker Process',
      },
    ],
    comparison: {
      badTitle: 'Synchronous Processing in Web Route',
      badSubtitle: 'Doing everything before sending a reply',
      badSteps: [
        {
          label: 'User Submits Form',
          detail: 'Starts sign-up process.',
          tag: 'Start',
        },
        {
          label: 'Slow Image Resize',
          detail: 'Server freezes for 2.5 seconds resizing avatar.',
          tag: 'Slow',
        },
        {
          label: 'Call External Email Provider',
          detail: 'Email provider lags for 4.0 seconds.',
          tag: 'Lags',
        },
        {
          label: 'Email Fails',
          detail: 'Entire request crashes with 500 error after 6.5s of waiting.',
          tag: 'Crashed',
        },
      ],
      goodTitle: 'Async Queue Processing',
      goodSubtitle: 'Fast reply, guaranteed background execution',
      goodSteps: [
        {
          label: 'User Submits Form',
          detail: 'Starts sign-up process.',
          tag: 'Start',
        },
        {
          label: 'Enqueue Background Job',
          detail: 'Job ticket dropped into Redis queue in 3 milliseconds.',
          tag: '3ms',
        },
        {
          label: 'Instant Success Response',
          detail: 'User sees confirmation screen immediately.',
          tag: 'Instant',
        },
        {
          label: 'Worker Retries if Needed',
          detail: 'If email service is down, worker automatically retries in 10 seconds.',
          tag: 'Resilient',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Producer vs. Consumer',
      description:
        'Your web server (Producer) puts a job card into a list in less than 5 milliseconds and tells the user: "Got it!" A separate helper process (Consumer) picks up cards one by one in the background.',
    },
    {
      title: 'Automatic Retries with Backoff',
      description:
        'If an external email service is down, the background worker waits 2 seconds and tries again, then waits 5 seconds, giving the service time to recover.',
    },
  ],
  deepDive: [
    {
      heading: 'Why You Do Not Need Kafka for Normal Web Apps',
      content:
        'Tools like Apache Kafka are meant for giant companies processing millions of events per second. For normal web apps, a simple Redis queue (like BullMQ in Node or Celery in Python) is much easier to manage.',
    },
  ],
  recommendedTools: [
    {
      name: 'BullMQ Documentation',
      url: 'https://docs.bullmq.io/',
      purpose: 'Easy, robust background job queue for Node.js powered by Redis.',
    },
  ],
  commonPitfalls: [
    'Putting huge image files into the queue payload instead of saving the image to disk and just passing the file path.',
    'Writing background tasks that send duplicate emails if they get retried.',
  ],
  actionableExercises: [
    'Notice how video websites like YouTube work: when you upload a video, it confirms instantly and processes the video in the background.',
  ],
}

