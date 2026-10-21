import type { Topic } from '@/types/content'

export const httpLifecycleTopic: Topic = {
  id: 'prerequisites-http-lifecycle',
  slug: 'http-lifecycle-under-the-hood',
  title: 'What Happens When You Send a Web Request?',
  tagline: 'From typing a web address to receiving data back on your screen.',
  stage: 0,
  category: 'Network Basics',
  difficulty: 'Prerequisite',
  estimatedTime: '10 min read',
  prerequisites: ['Basic computer skills', 'Knowing the difference between client and server'],
  analogy: {
    title: 'Sending a Letter Through the Mail',
    story:
      'Imagine sending a letter to a friend. DNS is like a phonebook that finds their home address from their name. TCP is calling them first to make sure they are home. TLS is putting your letter inside a locked metal box so mail carriers cannot read it. The HTTP request is the actual letter inside.',
  },
  whyItMatters:
    'Many tutorials make web requests look like magic. But when a website is slow, or when connections drop, you need to understand how computers talk to each other to fix the problem.',
  visualConcept: {
    title: 'The Journey of a Web Request',
    summary:
      'Every web request moves through a sequence of steps before reaching your backend code. Setting timeouts prevents your server from waiting forever when another computer fails to respond.',
    comparison: {
      badTitle: 'Without a Timeout',
      badSubtitle: 'Your server waits indefinitely if the network drops',
      badSteps: [
        {
          label: 'Client Sends Request',
          detail: 'User clicks a button to fetch data from an external server.',
          tag: 'Start',
        },
        {
          label: 'Connection Stalls',
          detail: 'The other server crashes or a network router silently drops the packet.',
          tag: 'Hangs',
        },
        {
          label: 'Worker Stays Frozen',
          detail: 'Your server keeps memory allocated waiting for a reply that never arrives.',
          tag: 'Leak',
        },
        {
          label: 'System Runs Out of Memory',
          detail: 'New incoming visitors are blocked because all workers are stuck waiting.',
          tag: 'Failure',
        },
      ],
      goodTitle: 'With a Safe Timeout',
      goodSubtitle: 'Your server gives up cleanly after a set time',
      goodSteps: [
        {
          label: 'Client Sends Request',
          detail: 'User initiates request with an active 4-second cancellation timer.',
          tag: 'Start',
        },
        {
          label: 'Connection Stalls',
          detail: 'The external server fails to respond within the expected window.',
          tag: 'Waiting',
        },
        {
          label: 'Timer Automatically Cancels Call',
          detail: 'At 4.0 seconds, the signal aborts the request cleanly.',
          tag: 'Protected',
        },
        {
          label: 'Worker Freed Immediately',
          detail: 'Your server returns a friendly error message and stays ready for new users.',
          tag: 'Success',
        },
      ],
    },
    flowSteps: [
      {
        label: '1. DNS Lookup',
        detail: 'Translates domain name into computer IP address.',
        tag: 'Find Address',
      },
      {
        label: '2. TCP Handshake',
        detail: 'Both computers say hello and confirm open line.',
        tag: 'Connect',
      },
      {
        label: '3. TLS Security',
        detail: 'Agrees on secret encryption keys for HTTPS.',
        tag: 'Encrypt',
      },
      {
        label: '4. HTTP Response',
        detail: 'Server reads request headers and returns status 200.',
        tag: 'Deliver',
      },
    ],
  },
  coreConcepts: [
    {
      title: 'Looking Up the Address (DNS)',
      description:
        'Computers do not understand names like google.com. DNS looks up the real number address (IP address) of the computer hosting the website.',
    },
    {
      title: 'Shaking Hands (TCP & TLS)',
      description:
        'Before sending information, the two computers say hello and confirm both sides are ready. If using HTTPS, they exchange secret keys so nobody in the middle can spy on the data.',
    },
    {
      title: 'Streams of Plain Text',
      description:
        'A web request is just text sent over a wire. It has headers (like an envelope label) and a body (the actual content or message).',
    },
  ],
  deepDive: [
    {
      heading: 'Reusing Connections (Keep-Alive)',
      content:
        'Saying hello and exchanging security keys takes time. Reusing the same open line for multiple requests makes your app much faster.',
    },
  ],
  recommendedTools: [
    {
      name: 'MDN Web Docs: An Overview of HTTP',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
      purpose: 'Clear, beginner-friendly guide to how web requests work.',
    },
    {
      name: 'HTTP Status Dogs',
      url: 'https://httpstatusdogs.com/',
      purpose: 'Fun, visual way to understand status codes like 200, 404, and 500.',
    },
  ],
  commonPitfalls: [
    'Assuming internet connections never drop or lag.',
    'Forgetting to add timeouts when calling other websites.',
    'Loading giant files completely into memory instead of reading them piece by piece.',
  ],
  actionableExercises: [
    'Open your terminal and type `curl -i https://httpbin.org/get`. Look at the text response. That is raw HTTP in action.',
  ],
}

