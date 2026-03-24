# Argide Website Copy Updates

Updated copy for `src/data/content.js`. Each section below maps to an export in that file.

---

## sectionList

No changes needed — section IDs and labels stay the same.

---

## hero

```js
export const hero = {
  titleLine1: 'The AI agent that',
  titleEmphasis: 'acts',
  titleLine2: 'inside your product',
  badges: ['CHAT', 'NAVIGATE', 'ACT', 'AUTOMATE'],
  ctaPrimary: 'Get started free',
  ctaSecondary: 'See it in action',
  chatPlaceholder: 'Can Argide navigate my app and take act...',
};
```

---

## capabilities

```js
export const capabilities = {
  label: 'CAPABILITIES',
  heading: 'Argide does what chatbots can\'t—it acts inside your product',
  sectionNum: '01',
  body: 'Most AI agents just answer questions. Argide connects to your APIs, navigates your UI with browser-use agents, and executes real actions on behalf of your users. From resolving support tickets to completing multi-step workflows, Argide handles it end-to-end.',
  cta: 'Explore all capabilities',
  features: [
    { num: 1, title: 'Chat', desc: 'Argide answers questions using your knowledge base, docs, and connected data sources—just like any AI agent.' },
    { num: 2, title: 'Navigate', desc: 'Argide uses browser-use agents to navigate your product\'s UI, guiding users to the right page or feature instantly.' },
    { num: 3, title: 'Act', desc: 'Argide connects to your APIs and executes real actions—updating settings, processing requests, completing workflows.' },
    { num: 4, title: 'Automate', desc: 'Chain actions into automated workflows that handle complex, multi-step tasks without human intervention.' },
  ],
};
```

---

## performance

```js
export const performance = {
  label: 'BEYOND CHATBOTS',
  headingStart: 'Chatbots answer questions.',
  headingEmphasis: 'Argide gets things done.',
  lineChartLabel: "FIG 2.A - SUPPORT TICKETS RESOLVED END-TO-END BY ARGIDE OVER TIME",
  barChartLabel: 'FIG 2.B - ARGIDE VS. TRADITIONAL CHATBOTS ON TASK COMPLETION RATE',
  barChartCaption: 'Task completion rate based on real customer deployments.',
  testimonialLabel: 'FIG 2.C - EARLY CUSTOMER',
  testimonialQuote: 'We replaced our entire support chatbot with Argide. It doesn\'t just reply to users—it ',
  testimonialHighlight: 'actually does things inside our app for them. Support volume dropped and product usage went up.',
  testimonialAuthor: '', // Update with real testimonial when available
  videoCompany: '', // Update when available
  videoQuote: '', // Update when available
  videoTitle: '', // Update when available
  videoItems: [], // Update when available
};
```

---

## integrations

```js
export const integrations = {
  label: 'SEAMLESS INTEGRATION',
  heading: 'Argide connects to',
  headingLine2: 'any product',
  sectionNum: '03',
  body: 'Plug Argide into your existing stack. Connect your APIs, data sources, and UI—and Argide handles the rest. Works alongside your current support tools or as a standalone agent.',
  featuresLabel: 'KEY FEATURES',
  features: [
    'Set up in under an hour.',
    'Connects to your APIs and data sources for real-time actions.',
    'Uses browser-use agents to navigate and interact with your UI.',
    'Escalates to human agents when needed via your existing helpdesk.',
  ],
  tabs: ['Your Product', 'Zendesk', 'Intercom', 'Salesforce'],
};
```

---

## technology

```js
export const technology = {
  label: 'HOW IT WORKS',
  heading: 'Powered by the',
  headingLine2: 'Argide Agent Engine',
  sectionNum: '04',
  body: 'The Argide Agent Engine combines conversational AI with browser-use agents and API orchestration. It doesn\'t just generate text—it understands your product, navigates your UI, and executes actions with precision.',
  cta: 'Learn more',
  diagramLabel: 'FIG 4.A - ARGIDE AGENT ENGINE',
  diagramSteps: [
    { label: '[4.A.1] UNDERSTAND THE REQUEST', desc: 'Argide interprets the user\'s intent, resolving ambiguity and determining whether the request needs information, navigation, or action.', powered: false },
    { label: '[4.A.2] RETRIEVE CONTEXT', desc: 'The engine pulls relevant context from your knowledge base, connected data sources, and the user\'s current state within your product.', powered: 'POWERED BY ARGIDE' },
    { label: '[4.A.3] PLAN THE ACTION', desc: 'Argide determines the optimal path—whether that\'s answering a question, navigating the UI, calling an API, or chaining multiple steps together.', powered: 'POWERED BY ARGIDE' },
    { label: '[4.A.4] EXECUTE', desc: 'The engine carries out the plan: navigating pages with browser-use agents, making API calls, or performing multi-step workflows on behalf of the user.', powered: false },
    { label: '[4.A.5] VALIDATE & CONFIRM', desc: 'Argide verifies that the action was completed successfully and confirms the outcome with the user before closing the loop.', powered: false },
    { label: '[4.A.6] LEARN & OPTIMIZE', desc: 'Every interaction improves the engine. Argide learns which actions resolve requests most effectively and optimizes future performance.', powered: false },
  ],
  layerLabels: [
    { label: 'UNDERSTAND THE REQUEST', side: 'left', top: '2%', height: '14%' },
    { label: 'RETRIEVE CONTEXT', side: 'right', top: '17%', height: '17%' },
    { label: 'PLAN THE ACTION', side: 'left', top: '35%', height: '14%' },
    { label: 'EXECUTE', side: 'right', top: '50%', height: '17%' },
    { label: 'VALIDATE & CONFIRM', side: 'left', top: '68%', height: '14%' },
    { label: 'LEARN & OPTIMIZE', side: 'right', top: '83%', height: '15%' },
  ],
};
```

---

## engineSteps

```js
export const engineSteps = [
  { label: '[4.A.1] UNDERSTAND THE REQUEST', desc: 'Argide interprets the user\'s intent, resolving ambiguity and determining whether the request needs information, navigation, or action.' },
  { label: '[4.A.2] RETRIEVE CONTEXT', desc: 'The engine pulls relevant context from your knowledge base, connected data sources, and the user\'s current state within your product.' },
  { label: '[4.A.3] PLAN THE ACTION', desc: 'Argide determines the optimal path—whether that\'s answering a question, navigating the UI, calling an API, or chaining multiple steps together.' },
  { label: '[4.A.4] EXECUTE', desc: 'The engine carries out the plan: navigating pages with browser-use agents, making API calls, or performing multi-step workflows on behalf of the user.' },
  { label: '[4.A.5] VALIDATE & CONFIRM', desc: 'Argide verifies that the action was completed successfully and confirms the outcome with the user before closing the loop.' },
  { label: '[4.A.6] LEARN & OPTIMIZE', desc: 'Every interaction improves the engine. Argide learns which actions resolve requests most effectively and optimizes future performance.' },
];
```

---

## pricing

```js
export const pricing = {
  heading: 'Let your users control your app',
  headingEmphasis: 'through',
  headingLine2: 'chat',
  cards: [
    {
  title: 'Free',
      desc: 'Get started with Argide\'s AI agent. Connect your product and let users chat, navigate, and act—all from one interface.',
      features: 'Unlimited conversations''Knowledge base integration',,
      cta: 'Get started free', 
    },
    {
      title: 'Enterprise',
      desc: 'For teams that need advanced workflows, custom integrations, and dedicated support.',
      features: ['Everything in Free', 
      'Unlimited conversations', 'API & data source connections', 'Browser-use navigation', 'Knowledge base integration', ],
       'Advanced automation workflows', 'SOC2, GDPR compliance', 'Dedicated support & onboarding'],
      cta: 'Contact sales',
    },
  ],
};
```

---

## bottomCta

```js
export const bottomCta = {
  line1: 'Give your users an AI agent',
  line2: 'that actually does things',
  ctaPrimary: 'Get started free',
  ctaSecondary: 'See it in action',
};
```

---

## customerAgent

```js
export const customerAgent = {
  label: 'THE VISION',
  heading: 'From support to',
  headingLine2: 'product copilot',
  body: 'Argide starts as your AI support agent—but it doesn\'t stop there. As it learns your product, it becomes a copilot that drives usage, onboards users, and automates workflows across the entire customer journey.',
  link: 'Learn more',
};
```

---

## footer

```js
export const footer = {
  columns: [
    {
      title: 'PRODUCT',
      links: ['Home', 'Overview', 'Chat', 'Navigate', 'Act', 'Automate', 'Integrations', 'Pricing'],
    },
    {
      title: 'TECHNOLOGY',
      links: ['Agent Engine', 'Browser Use', 'API Orchestration'],
    },
    {
      title: 'SOLUTIONS',
      links: ['SaaS Products', 'Fintech', 'E-commerce', 'Enterprise', 'Developer Tools'],
    },
    {
      title: 'RESOURCES',
      links: ['Documentation', 'Blog', 'Changelog', 'Help Center', 'Security'],
    },
  ],
  actionColumn: {
    title: 'GET STARTED',
    links: ['See it in action', 'Free trial', 'Contact sales', 'Sign in'],
    companyTitle: 'COMPANY',
    companyLinks: ['Careers', 'About'],
  },
  bottomLeft: 'Argide',
  bottomLinks: ['Terms', 'Privacy', 'Security'],
};
```

---

## Key messaging principles

1. **Argide acts, not just chats.** Every section should reinforce that Argide goes beyond answering questions—it navigates UI and executes real actions.
2. **Three capabilities: Chat, Navigate, Act.** These are the pillars. Chat is table stakes. Navigate and Act are the differentiators.
3. **Wedge is support, future is usage.** Start with the support replacement story, but hint at the bigger vision (product copilot, driving usage, onboarding).
4. **Show, don't tell.** The demo/video CTA should showcase Argide doing something inside a real product, not just chatting.
