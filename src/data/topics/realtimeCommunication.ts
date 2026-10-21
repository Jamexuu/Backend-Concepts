import type { Topic } from '@/types/content'

export const realtimeCommunicationTopic: Topic = {
  id: 'realtime-websockets-and-polling',
  slug: 'websockets-short-and-long-polling',
  title: 'Real-Time Communication: WebSockets, Short Polling & Long Polling',
  tagline: 'How servers push instant updates for chat, notifications, and live feeds.',
  stage: 4,
  category: 'Real-Time Communication',
  difficulty: 'Intermediate',
  estimatedTime: '14 min read',
  prerequisites: ['HTTP request-response cycle', 'Basic asynchronous events'],
  analogy: {
    title: 'Three Ways to Wait for a Package Delivery',
    story:
      'Short Polling is walking to your front porch every 30 seconds asking: "Is the package here? No. Is the package here? No." This burns up energy and wears down your shoes. Long Polling is walking to the front door and standing there waiting. When the courier arrives, they hand you the package immediately; if 30 seconds pass with no package, you step inside for a breath and return right away. WebSockets is opening a direct walkie-talkie line with the courier: either person can talk instantly with zero setup time. And when you close your door and put your phone in your pocket, Push Notifications (like FCM) ring your bell to wake you up.',
  },
  whyItMatters:
    'Standard HTTP is one-way: clients request data, and servers reply and close the line. But modern apps need live chat, order delivery tracking, and instant alerts. If you try to build chat by sending 1 request every second, 1,000 users will send 60,000 queries per minute, crashing your server. Understanding WebSockets, polling, and push notifications lets you build real-time features without melting your database.',
  visualConcept: {
    title: 'Short Polling vs. Long Polling vs. WebSockets',
    summary:
      'Short polling floods the network with empty requests. Long polling holds one request open until data is ready. WebSockets upgrade HTTP into a permanent two-way duplex highway.',
    flowSteps: [
      {
        label: '1. HTTP Upgrade Request',
        detail: 'Client sends standard HTTP request with Upgrade: websocket header.',
        tag: 'Handshake',
      },
      {
        label: '2. 101 Switching Protocols',
        detail: 'Server accepts and switches connection from HTTP to WebSocket.',
        tag: 'Protocol Switch',
      },
      {
        label: '3. Bi-Directional Stream',
        detail: 'Persistent two-way pipe where client and server exchange data frames.',
        tag: 'Open Pipe',
      },
      {
        label: '4. Real-Time Event Push',
        detail: 'Server broadcasts new messages to online clients instantly.',
        tag: 'Instant Push',
      },
      {
        label: '5. Mobile Push via FCM',
        detail: 'When client is backgrounded, FCM delivers native device alert.',
        tag: 'Device Wakeup',
      },
    ],
    comparison: {
      badTitle: 'Short Polling Every 1 Second (Chat App)',
      badSubtitle: 'Floods server and database with 99% empty responses',
      badSteps: [
        {
          label: 'Client Sends HTTP GET',
          detail: 'Client repeatedly asks: "Any new messages for user 42?"',
          tag: '1000ms Loop',
        },
        {
          label: 'Database Runs Query',
          detail: 'Database runs query and finds zero new rows.',
          tag: 'Empty Query',
        },
        {
          label: 'Empty HTTP 200 Returned',
          detail: 'Full HTTP headers sent back across the network for empty data.',
          tag: 'High Overhead',
        },
        {
          label: '60,000 Queries Per Minute',
          detail: 'Just 1,000 idle users send 60,000 queries every minute, overwhelming the server.',
          tag: 'Database Crash',
        },
      ],
      goodTitle: 'WebSockets for Live Chat & FCM for Push',
      goodSubtitle: 'Zero empty requests; data pushes only when events occur',
      goodSteps: [
        {
          label: 'Upgrade to WebSocket',
          detail: 'Client establishes one persistent connection for the entire active session.',
          tag: 'Connected',
        },
        {
          label: 'Zero Idle Queries',
          detail: 'No database queries are executed while waiting for messages.',
          tag: 'Silent Standby',
        },
        {
          label: 'Instant Event Delivery',
          detail: 'When a friend sends a message, server pushes it down the pipe in 2 milliseconds.',
          tag: 'Instant Push',
        },
        {
          label: 'Native FCM Push When Backgrounded',
          detail: 'If user locks phone screen, FCM delivers a push notification directly to the device.',
          tag: 'FCM Push',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Short Polling (Simple but Wasteful)',
      description:
        'Client sends repeated requests on a fixed timer. Fine for slow background dashboards (checking every 5 minutes), but terrible for instant chat.',
    },
    {
      title: 'Long Polling (Hanging Requests)',
      description:
        'Client sends a request and server holds it open until there is fresh data or a timeout occurs. Much fewer wasted requests than short polling.',
    },
    {
      title: 'WebSockets (Full Duplex Highway)',
      description:
        'A single persistent TCP connection. Both sides can send data at any millisecond without HTTP header overhead. Ideal for live multiplayer games, active chat, and financial feeds.',
    },
    {
      title: 'Push Notifications via FCM (When Apps Are Closed)',
      description:
        'WebSockets only work while the tab or app is active. When a mobile user locks their phone, their operating system suspends background sockets to save battery. Firebase Cloud Messaging (FCM) connects directly to Google and Apple notification services to wake the phone and show a banner.',
    },
  ],
  deepDive: [
    {
      heading: 'Connection Heartbeats (Ping and Pong)',
      content:
        'Mobile phones often drop connections when switching from Wi-Fi to cellular data without sending a formal goodbye packet. WebSocket servers send tiny periodic ping packets. If the client does not return a pong within a few seconds, the server cleans up memory so ghost connections do not accumulate.',
    },
  ],
  recommendedTools: [
    {
      name: 'Firebase Cloud Messaging (FCM)',
      url: 'https://firebase.google.com/docs/cloud-messaging',
      purpose: 'Battle-tested cross-platform push notification service to send messages to Android, iOS, and web at zero cost.',
    },
    {
      name: 'Laravel Reverb (for Laravel)',
      url: 'https://laravel.com/docs/reverb',
      purpose: 'High-speed, first-party WebSocket server designed directly for real-time Laravel applications.',
    },
    {
      name: 'MDN WebSockets API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      purpose: 'Official browser guide explaining standard WebSocket events (onopen, onmessage, onerror, onclose).',
    },
  ],
  commonPitfalls: [
    'Running short polling every 500ms on a relational database without an index.',
    'Assuming WebSockets keep running when a mobile phone screen is locked and asleep.',
    'Forgetting to authenticate WebSocket connections during the initial HTTP handshake.',
  ],
  actionableExercises: [
    'Open developer tools on a live chat application, switch to the Network tab, filter by "WS", and watch incoming and outgoing frames stream through in real time without refreshing the page.',
  ],
}

