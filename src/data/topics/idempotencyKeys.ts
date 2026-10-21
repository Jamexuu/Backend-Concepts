import type { Topic } from '@/types/content'

export const idempotencyKeysTopic: Topic = {
  id: 'resilience-idempotency-keys',
  slug: 'idempotency-and-safe-retries',
  title: 'Idempotency: Preventing Double Charges When Wi-Fi Lags',
  tagline: 'What happens when a customer clicks "Pay $50" twice?',
  stage: 4,
  category: 'Safe Retries (Idempotency)',
  difficulty: 'Intermediate',
  estimatedTime: '14 min read',
  prerequisites: ['Basic understanding of HTTP POST requests'],
  analogy: {
    title: 'The Elevator Call Button',
    story:
      'When you walk up to an elevator and press the UP button, the light turns on. If you press the button 5 more times because you are impatient, the building does not send 5 separate elevator cabs. The button is idempotent: pressing it once or five times gives you the exact same result.',
  },
  whyItMatters:
    'On mobile phones, internet connections cut out all the time. If a user buys a ticket and their screen freezes, they will hit the pay button again. Without idempotency, they get charged twice, creating angry customers and refund fees.',
  visualConcept: {
    title: 'How Idempotency Keys Prevent Double Charges',
    summary:
      'Clients generate a unique ticket key. If the server receives the same key twice, it replays the saved confirmation without charging the card again.',
    flowSteps: [
      {
        label: '1. App Generates Key',
        detail: 'Client creates random UUID key (pay-987) before sending.',
        tag: 'Unique Key',
      },
      {
        label: '2. Check Key Cache',
        detail: 'Server checks Redis: has key pay-987 been processed?',
        tag: 'Lookup',
      },
      {
        label: '3. Charge Card Once',
        detail: 'If new, process payment and save receipt under key pay-987.',
        tag: 'Debit',
      },
      {
        label: '4. Replay Saved Receipt',
        detail: 'If key already exists, return saved receipt without charging again.',
        tag: 'Safe Replay',
      },
    ],
    comparison: {
      badTitle: 'Without Idempotency Keys',
      badSubtitle: 'Every network retry charges the card again',
      badSteps: [
        {
          label: 'User Taps Pay Button',
          detail: 'Server debits $50 from user card.',
          tag: 'Charge 1',
        },
        {
          label: 'Network Drops Response',
          detail: 'Cellular tower drops the receipt packet; phone screen freezes.',
          tag: 'Wi-Fi Lag',
        },
        {
          label: 'User Taps Pay Button Again',
          detail: 'Server receives second request and debits another $50.',
          tag: 'Charge 2',
        },
        {
          label: 'Double Charge Disaster',
          detail: 'Customer was billed $100 for a $50 item.',
          tag: 'Angry User',
        },
      ],
      goodTitle: 'With Idempotency Keys',
      goodSubtitle: 'Duplicate requests return the saved confirmation safely',
      goodSteps: [
        {
          label: 'First Tap (Key: pay-123)',
          detail: 'Card is charged $50; receipt is stored with key pay-123 in Redis.',
          tag: 'Processed',
        },
        {
          label: 'Network Drops Response',
          detail: 'Phone does not see the reply and retries with same key pay-123.',
          tag: 'Retry',
        },
        {
          label: 'Server Sees Duplicate Key',
          detail: 'Server recognizes key pay-123 and does not charge the card again.',
          tag: 'Recognized',
        },
        {
          label: 'Original Receipt Replayed',
          detail: 'Saved confirmation returned; user is billed exactly once ($50).',
          tag: 'Perfect',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'What Idempotent Means in Plain Words',
      description:
        'Doing an action once or doing it ten times produces the exact same result, without creating duplicate orders or double charges.',
    },
    {
      title: 'The Idempotency Key',
      description:
        'The phone app creates a random unique ID (like a UUID) for the checkout and sends it in the header. The server checks: "Have I already handled this exact ticket number?"',
    },
    {
      title: 'Replaying the Saved Answer',
      description:
        'If the server already finished that ticket, it does not charge the card again. It simply sends back the original receipt.',
    },
  ],
  deepDive: [
    {
      heading: 'Unique Database Columns as Free Idempotency',
      content:
        'If you put a unique constraint on a column (like `UNIQUE (user_id, item_id)`), the database itself will prevent duplicate entries automatically.',
    },
  ],
  recommendedTools: [
    {
      name: 'Stripe: Designing Robust APIs with Idempotency',
      url: 'https://docs.stripe.com/api/idempotent_requests',
      purpose: 'The famous guide on how real payment companies stop duplicate charges.',
    },
  ],
  commonPitfalls: [
    'Using the request text as the key (if two different users buy the same $10 item, their keys collide).',
    'Forgetting to set an expiration time on saved keys in Redis.',
  ],
  actionableExercises: [
    'Look at payment confirmations in Stripe or Shopify: they use request tokens to ensure refresh buttons never charge you twice.',
  ],
}

