import type { Topic } from '@/types/content'

export const authFundamentalsTopic: Topic = {
  id: 'security-auth-fundamentals',
  slug: 'authentication-vs-authorization',
  title: 'Authentication vs. Authorization: Passwords, Sessions & Tokens',
  tagline: 'Who are you (AuthN) vs. What are you allowed to do (AuthZ)?',
  stage: 3,
  category: 'Login & Passwords (Auth)',
  difficulty: 'Intermediate',
  estimatedTime: '15 min read',
  prerequisites: ['Basic understanding of HTTP cookies and headers'],
  analogy: {
    title: 'The Passport and the Concert Wristband',
    story:
      'Authentication is showing your Passport at the airport counter: it proves who you are. Authorization is the VIP wristband you get at a music festival: it determines whether you can walk backstage or if you have to stay in general admission.',
  },
  whyItMatters:
    'Messing up logins can expose your entire customer list. Storing passwords improperly or putting secret tokens in the wrong browser storage lets attackers steal accounts with ease.',
  visualConcept: {
    title: 'The Two-Gate Security Checkpoint',
    summary:
      'Authentication verifies your identity at Gate 1. Authorization checks your permissions at Gate 2.',
    flowSteps: [
      {
        label: '1. User Submits Password',
        detail: 'Sent over encrypted HTTPS connection to the login endpoint.',
        tag: 'Credentials',
      },
      {
        label: '2. Argon2 Hash Verification',
        detail: 'Server runs the password through slow hashing and checks database.',
        tag: 'AuthN Check',
      },
      {
        label: '3. HttpOnly Session Cookie Set',
        detail: 'Session ID saved in a secure cookie that JavaScript cannot steal.',
        tag: 'Session Created',
      },
      {
        label: '4. Permission Verification',
        detail: 'Server verifies user role (admin vs member) before allowing actions.',
        tag: 'AuthZ Check',
      },
    ],
    comparison: {
      badTitle: 'Insecure Token Storage in LocalStorage',
      badSubtitle: 'Tokens accessible to client-side scripts',
      badSteps: [
        {
          label: 'Token Stored in LocalStorage',
          detail: 'App stores access token in browser window.localStorage.',
          tag: 'Exposed',
        },
        {
          label: 'Malicious Script Runs (XSS)',
          detail: 'Any infected dependency or third-party script reads localStorage.',
          tag: 'Stolen',
        },
        {
          label: 'Attacker Impersonates User',
          detail: 'Attacker takes token and uses it from their own computer.',
          tag: 'Account Lost',
        },
      ],
      goodTitle: 'Protected HttpOnly Cookie',
      goodSubtitle: 'Browser automatically manages the cookie safely',
      goodSteps: [
        {
          label: 'Session Set with HttpOnly Flag',
          detail: 'Server tells browser: "Do not let any JavaScript touch this cookie."',
          tag: 'Shielded',
        },
        {
          label: 'Browser Sends Cookie Automatically',
          detail: 'On every web request, browser attaches the cookie securely.',
          tag: 'Automated',
        },
        {
          label: 'Scripts Cannot Steal Token',
          detail: 'Even if malicious JavaScript runs, it cannot access the cookie.',
          tag: 'Protected',
        },
      ],
    },
  },
  coreConcepts: [
    {
      title: 'Authentication (AuthN)',
      description:
        'Checking credentials to confirm identity (for example, email and password, magic link, or two-factor code).',
    },
    {
      title: 'Authorization (AuthZ)',
      description:
        'Checking permissions after someone is logged in: "Is this user allowed to delete this post or edit settings?"',
    },
    {
      title: 'Safe Password Hashing',
      description:
        'Never save plain text passwords. We run them through slow, one-way math algorithms (like Argon2 or bcrypt) that cannot be reversed, even if a hacker steals the database.',
    },
    {
      title: 'Sessions vs. Tokens (JWT)',
      description:
        'Sessions keep a small ID in a secure browser cookie and look up user details on the server. Tokens carry signed data inside the token itself.',
    },
  ],
  deepDive: [
    {
      heading: 'Why Sessions are Often Simpler than JWTs',
      content:
        'If you need to log out a user immediately (for example, if their phone is stolen), sessions make it as easy as deleting one row in your database. With stateless JWTs, invalidating a token early requires extra blacklist systems.',
    },
  ],
  recommendedTools: [
    {
      name: 'Laravel Sanctum (for Laravel)',
      url: 'https://laravel.com/docs/sanctum',
      purpose: 'Lightweight token and SPA cookie authentication system built directly into Laravel.',
    },
    {
      name: 'Supabase Auth',
      url: 'https://supabase.com/docs/guides/auth',
      purpose: 'Complete authentication system with built-in user management, social logins, and PostgreSQL security.',
    },
    {
      name: 'Firebase Authentication',
      url: 'https://firebase.google.com/docs/auth',
      purpose: 'Easy drop-in multi-platform authentication supporting email, phone SMS, Google, and OAuth logins.',
    },
    {
      name: 'OWASP Authentication Cheat Sheet',
      url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
      purpose: 'Clear checklist for safe login systems, session timeouts, and password storage.',
    },
  ],
  commonPitfalls: [
    'Saving plain text passwords or using old MD5 hashes.',
    'Putting sensitive passwords or API keys inside JWT tokens (JWTs can be decoded by anyone).',
    'Forgetting the HttpOnly flag on cookies.',
  ],
  actionableExercises: [
    'Check your browser cookies in developer tools on popular websites. Notice that session cookies have HttpOnly checked.',
  ],
}

