export const sectionList = [
  { id: 'capabilities', num: '01', label: 'CAPABILITIES' },
  { id: 'performance', num: '02', label: 'PERFORMANCE' },
  { id: 'integrations', num: '03', label: 'INTEGRATIONS' },
  { id: 'technology', num: '04', label: 'TECHNOLOGY' },
  { id: 'pricing', num: '05', label: 'PRICING' },
];

export const engineSteps = [
  { label: '[4.A.1] REFINE THE QUERY', desc: 'In order to optimize the accuracy of an answer that an LLM generates, the inputs the LLM receives must be refined for comprehension.' },
  { label: '[4.A.2] RETRIEVE RELEVANT CONTENT', desc: 'The retrieval process, powered by our proprietary fin-cx-retrieval model, searches across all knowledge sources and selects the most relevant information for accurate answers.' },
  { label: '[4.A.3] PLAN THE ACTION', desc: 'The planning process, powered by our proprietary argide-cx-planner model, determines the optimal sequence of actions—API calls, page navigations, and UI interactions.' },
  { label: '[4.A.4] EXECUTE THE ACTION', desc: 'Using browser-use agents and API connectors, Argide navigates your product and executes actions on behalf of the user — just like a rep would, but instantly.' },
  { label: '[4.A.5] VALIDATE RESULTS', desc: 'In the final step, the Argide AI Engine™ verifies that the executed actions produced the correct outcome and meets safety standards.' },
  { label: '[4.A.6] ENGINE OPTIMIZATION', desc: 'To calibrate performance, the Argide AI Engine™ uses integrated tools that optimize action execution, efficiency, precision, and coverage.' },
];

export const hero = {
  titleLine1: 'The #1 AI Agent for',
  titleEmphasis: 'all',
  titleLine2: 'your customer service',
  badges: ['0 FIRST RESPONSE TIME', '#1 IN BENCHMARKS', '#1 FOR COMPLEX QUERIES', '#1 ON G2'],
  ctaPrimary: 'Start free trial',
  ctaSecondary: 'View demo',
  chatPlaceholder: 'Can Fin integrate with my help d...',
};

export const capabilities = {
  label: 'CAPABILITIES',
  heading: 'Argide resolves the most complex queries through chat',
  sectionNum: '01',
  body: 'Argide replaces your entire support team with an AI agent that actually resolves issues — not just answers questions. Connect Argide to your product and it handles even the most complex queries by navigating your UI, calling your APIs, and executing real actions on behalf of users — so every query is resolved accurately and instantly, with zero first response time.',
  cta: 'Explore all capabilities',
  features: [
    { num: 1, title: 'Train', desc: 'Train Argide to resolve even the most complex queries with your Procedures, knowledge and policies.' },
    { num: 2, title: 'Test', desc: 'Run fully simulated customer conversations from start to finish to see exactly how Argide will behave before going live.' },
    { num: 3, title: 'Deploy', desc: 'Set Argide live across your product- for instant support wherever users need help.' },
    { num: 4, title: 'Replace', desc: 'Argide handles complex multi-step workflows autonomously, giving users superpowers inside your product.' },
  ],
};

export const performance = {
  label: 'UNRIVALED PERFORMANCE',
  headingStart: 'Argide outperforms every competitor.',
  headingEmphasis: 'Every time.',
  lineChartLabel: "FIG 2.A - ARGIDE'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH",
  barChartLabel: 'FIG 2.B - ARGIDE WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE',
  barChartCaption: 'Resolution rate based on independent testing conducted by Argide customers.',
  testimonialLabel: 'FIG 2.C - FINTECH CUSTOMER',
  testimonialQuote: 'Argide is in a completely different league. It\'s now involved in 99% of conversations and ',
  testimonialHighlight: 'successfully resolves up to 65% end-to-end – even the more complex ones.',
  testimonialAuthor: 'Angelo Livanos, Vice President of Global Support at Lightspeed',
  videoCompany: 'PAASA',
  videoQuote: '"If you\'re debating whether to build your own AI solution or buy one, my advice would be to buy – and specifically, buy Argide."',
  videoTitle: 'Build vs. buy: Why Anthropic chose Argide',
  videoItems: [
    { status: 'NOW PLAYING', title: 'Build vs. buy: Why Anthropic chose Argide' },
    { status: 'PLAY NEXT', title: 'AI at enterprise scale: Why...' },
    { status: 'PLAY NEXT', title: 'How Rocket Money operationalized...' },
  ],
};

export const integrations = {
  label: 'SEAMLESS INTEGRATION',
  heading: 'Argide works with',
  headingLine2: 'any helpdesk',
  sectionNum: '03',
  body: 'Set up Argide with your existing helpdesk or as part of the Argide Customer Service Suite—with support for additional platforms and custom channels.',
  featuresLabel: 'KEY FEATURES',
  features: [
    'Set up in under an hour.',
    'Integrates into your current support channels—tickets, email, live chat, and more.',
    'Follows your existing assignment rules, automations, and reporting.',
    'Escalates to agents in your preferred inbox.',
  ],
  tabs: ['Argide for Zendesk', 'Argide for Salesforce'],
};

export const technology = {
  label: 'SUPERIOR TECHNOLOGY',
  heading: 'Powered by the',
  headingLine2: 'Argide AI Engine™',
  sectionNum: '04',
  body: 'The Argide AI Engine™ is a patented AI architecture engineered for complex customer service queries and in-app action execution. Every layer is optimized for understanding user intent, navigating your product, and completing tasks—so users get zero first response time on every request.',
  cta: 'Learn more',
  diagramLabel: 'FIG 4.A - ARGIDE AI ENGINE™',
  diagramSteps: [
    { label: '[4.A.1] REFINE THE QUERY', desc: 'In order to optimize the accuracy of an answer that an LLM generates, the inputs the LLM receives must be refined for comprehension.', powered: false },
    { label: '[4.A.2] RETRIEVE RELEVANT CONTENT', desc: 'The retrieval process, powered by our proprietary fin-cx-retrieval model, searches across all knowledge sources and selects the most relevant information for accurate answers.', powered: 'POWERED BY ARGIDE-CX' },
    { label: '[4.A.3] PLAN THE ACTION', desc: 'The planning process, powered by our proprietary argide-cx-planner model, determines the optimal sequence of actions—API calls, page navigations, and UI interactions.', powered: 'POWERED BY ARGIDE-CX' },
    { label: '[4.A.4] EXECUTE THE ACTION', desc: 'Using browser-use agents and API connectors, Argide navigates your product and executes actions on behalf of the user — just like a rep would, but instantly.', powered: false },
    { label: '[4.A.5] VALIDATE RESULTS', desc: 'In the final step, the Argide AI Engine™ verifies that the executed actions produced the correct outcome and meets safety standards.', powered: false },
    { label: '[4.A.6] ENGINE OPTIMIZATION', desc: 'To calibrate performance, the Argide AI Engine™ uses integrated tools that optimize action execution, efficiency, precision, and coverage.', powered: false },
  ],
  layerLabels: [
    { label: 'REFINE THE QUERY', side: 'left', top: '2%', height: '14%' },
    { label: 'RETRIEVE RELEVANT CONTENT', side: 'right', top: '17%', height: '17%' },
    { label: 'PLAN THE ACTION', side: 'left', top: '35%', height: '14%' },
    { label: 'EXECUTE THE ACTION', side: 'right', top: '50%', height: '17%' },
    { label: 'VALIDATE RESULTS', side: 'left', top: '68%', height: '14%' },
    { label: 'ENGINE OPTIMIZATION', side: 'right', top: '83%', height: '15%' },
  ],
};

export const pricing = {
  heading: 'Get the #1 AI Agent for',
  headingEmphasis: 'all',
  headingLine2: 'your customer service',
  cards: [
    {
      title: 'Free',
      desc: 'Get started with Argide\'s AI agent. Connect your product and let users chat and navigate all from one interface.',
      features: ['Unlimited conversations', 'Knowledge base integration'],
      cta: 'Contact sales',
    },
    {
      title: 'Enterprise',
      desc: 'For teams that need advanced workflows, custom integrations, and dedicated support.',
      features: ['Everything in Free', 'Unlimited conversations', 'API & data source connections', 'Browser-use navigation', 'Knowledge base integration', 'Advanced automation workflows', 'SOC2, GDPR compliance', 'Dedicated support & onboarding'],
      cta: 'Contact sales',
    },
  ],
};

export const bottomCta = {
  line1: 'Get started with the',
  line2: '#1 AI Agent today',
  ctaPrimary: 'Start free trial',
  ctaSecondary: 'View demo',
};

export const customerAgent = {
  label: 'CUSTOMER AGENT',
  heading: 'Our vision—one Agent for the',
  headingLine2: 'entire customer experience',
  body: 'Imagine a single Customer Agent across the whole customer journey. A future that opens the door to a previously-unimaginable level of customer experience.',
  link: 'Learn more',
};

export const footer = {
  columns: [
    {
      title: 'PRODUCT',
      links: ['Home', 'Argide Overview', 'Channels', 'Trust and Reliability', 'Integrations', 'Voice', 'Procedures', 'Insights', 'Train', 'Testing', 'Documentation ↗', 'API Connections', 'Browser-Use Agents', 'Customer Agent', 'Pricing'],
    },
    {
      title: 'AI TECHNOLOGY',
      links: ['AI Engine', 'Models', 'AI Research ↗'],
    },
    {
      title: 'SOLUTIONS',
      links: ['Financial Services', 'Retail and ecommerce', 'Technology', 'Enterprise', 'Gaming'],
    },
    {
      title: 'RESOURCES',
      links: ['Customers', 'Pioneer ↗', 'Building frontier AI products ↗', 'Webinars ↗', 'Argide 3', 'Built For You ↗', 'Product Updates', 'Help Center', 'Safety and Security ↗', 'Professional Services', 'Ideas Blog ↗', 'AI Agent Blueprint', 'Learn Blog', '2026 Transformation Report ↗', 'Customer Service Glossary'],
    },
  ],
  actionColumn: {
    title: 'ARGIDE IN ACTION',
    links: ['View demo', 'Free trial', 'Contact sales', 'Sign in'],
    companyTitle: 'COMPANY',
    companyLinks: ['Careers ↗'],
  },
  bottomLeft: 'Argide',
  bottomLinks: ['Terms', 'Privacy', 'Security'],
};
