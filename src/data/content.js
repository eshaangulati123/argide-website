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
  { label: '[4.A.3] RERANK FOR PRECISION', desc: 'The reranking process, powered by our proprietary fin-cx-reranker model, scores retrieved content for relevance and accuracy, then selects the optimal pieces for the LLM to use.' },
  { label: '[4.A.4] GENERATE A RESPONSE', desc: 'Using a bespoke generative process, it creates answers with the highest resolution potential. Custom Guidance controls tone and behavior, ensuring responses align with your brand.' },
  { label: '[4.A.5] VALIDATE ACCURACY', desc: 'In the final step, the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.' },
  { label: '[4.A.6] ENGINE OPTIMIZATION', desc: 'To calibrate performance, the Fin AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.' },
];

export const hero = {
  titleLine1: 'The #1 AI Agent for',
  titleEmphasis: 'all',
  titleLine2: 'your customer service',
  badges: ['#1 IN BAKE-OFFS', '#1 IN BENCHMARKS', '#1 FOR COMPLEX QUERIES', '#1 ON G2'],
  ctaPrimary: 'Start free trial',
  ctaSecondary: 'View demo',
  chatPlaceholder: 'Can Fin integrate with my help d...',
};

export const capabilities = {
  label: 'CAPABILITIES',
  heading: 'Fin resolves the most complex queries on every channel',
  sectionNum: '01',
  body: 'Fin handles even the most complex queries through a continuous improvement loop called the Fin Flywheel. Train Fin on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, then analyze and improve with AI-powered Insights—so every query is resolved accurately and consistently.',
  cta: 'Explore all capabilities',
  features: [
    { num: 1, title: 'Train', desc: 'Train Fin to resolve even the most complex queries with your Procedures, knowledge and policies.' },
    { num: 2, title: 'Test', desc: 'Run fully simulated customer conversations from start to finish to see exactly how Fin will behave before going live.' },
    { num: 3, title: 'Deploy', desc: 'Set Fin live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out.' },
    { num: 4, title: 'Analyze', desc: 'Use AI-powered Insights to analyze and improve Fin\'s performance and deliver better customer experiences.' },
  ],
};

export const performance = {
  label: 'UNRIVALED PERFORMANCE',
  headingStart: 'Fin outperforms every competitor.',
  headingEmphasis: 'Every time.',
  lineChartLabel: "FIG 2.A - FIN'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH",
  barChartLabel: 'FIG 2.B - FIN WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE',
  barChartCaption: 'Resolution rate based on independent testing conducted by Fin customers.',
  testimonialLabel: 'FIG 2.C - FINTECH CUSTOMER',
  testimonialQuote: 'Fin is in a completely different league. It\'s now involved in 99% of conversations and ',
  testimonialHighlight: 'successfully resolves up to 65% end-to-end – even the more complex ones.',
  testimonialAuthor: 'Angelo Livanos, Vice President of Global Support at Lightspeed',
  videoCompany: 'ANTHROP\\C',
  videoQuote: '"If you\'re debating whether to build your own AI solution or buy one, my advice would be to buy – and specifically, buy Fin."',
  videoTitle: 'Build vs. buy: Why Anthropic chose Fin',
  videoItems: [
    { status: 'NOW PLAYING', title: 'Build vs. buy: Why Anthropic chose Fin' },
    { status: 'PLAY NEXT', title: 'AI at enterprise scale: Why...' },
    { status: 'PLAY NEXT', title: 'How Rocket Money operationalized...' },
  ],
};

export const integrations = {
  label: 'SEAMLESS INTEGRATION',
  heading: 'Fin works with',
  headingLine2: 'any helpdesk',
  sectionNum: '03',
  body: 'Set up Fin with your existing helpdesk or as part of the Intercom Customer Service Suite—with support for additional platforms and custom channels.',
  featuresLabel: 'KEY FEATURES',
  features: [
    'Set up in under an hour.',
    'Integrates into your current support channels—tickets, email, live chat, and more.',
    'Follows your existing assignment rules, automations, and reporting.',
    'Escalates to agents in your preferred inbox.',
  ],
  tabs: ['Intercom Suite', 'Fin for Zendesk', 'Fin for Salesforce'],
};

export const technology = {
  label: 'SUPERIOR TECHNOLOGY',
  heading: 'Powered by the',
  headingLine2: 'Fin AI Engine™',
  sectionNum: '04',
  body: 'The Fin AI Engine™ is a patented AI architecture specifically engineered for complex customer service queries. Every layer is optimized for accuracy, speed, and reliability—so Fin can resolve more conversations, more effectively than competing AI Agents.',
  cta: 'Learn more',
  diagramLabel: 'FIG 4.A - FIN AI ENGINE™',
  diagramSteps: [
    { label: '[4.A.1] REFINE THE QUERY', desc: 'In order to optimize the accuracy of an answer that an LLM generates, the inputs the LLM receives must be refined for comprehension.', powered: false },
    { label: '[4.A.2] RETRIEVE RELEVANT CONTENT', desc: 'The retrieval process, powered by our proprietary fin-cx-retrieval model, searches across all knowledge sources and selects the most relevant information for accurate answers.', powered: 'POWERED BY FIN-CX' },
    { label: '[4.A.3] RERANK FOR PRECISION', desc: 'The reranking process, powered by our proprietary fin-cx-reranker model, scores retrieved content for relevance and accuracy, then selects the optimal pieces for the LLM to use.', powered: 'POWERED BY FIN-CX' },
    { label: '[4.A.4] GENERATE A RESPONSE', desc: 'Using a bespoke generative process, it creates answers with the highest resolution potential. Custom Guidance controls tone and behavior, ensuring responses align with your brand.', powered: false },
    { label: '[4.A.5] VALIDATE ACCURACY', desc: 'In the final step, the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.', powered: false },
    { label: '[4.A.6] ENGINE OPTIMIZATION', desc: 'To calibrate performance, the Fin AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.', powered: false },
  ],
  layerLabels: [
    { label: 'REFINE THE QUERY', side: 'left', top: '2%', height: '14%' },
    { label: 'RETRIEVE RELEVANT CONTENT', side: 'right', top: '17%', height: '17%' },
    { label: 'RERANK FOR PRECISION', side: 'left', top: '35%', height: '14%' },
    { label: 'GENERATE A RESPONSE', side: 'right', top: '50%', height: '17%' },
    { label: 'VALIDATE ACCURACY', side: 'left', top: '68%', height: '14%' },
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
      desc: 'Fin AI Agent works seamlessly with any helpdesk, including Zendesk, Salesforce, HubSpot, and more.',
      features: ['Unlimited responses', 'Forward Deployed Engineer', 'Custom platform integrations', 'SOC2, GDPR, ISO 27001', 'SSO/SAML & dedicated infrastructure'],
      cta: 'Contact sales',
    },
    {
      title: 'Enterprise',
      desc: 'Combine Fin AI Agent with Intercom\'s Helpdesk to get the full Intercom Customer Service Suite.',
      features: ['Unlimited responses', 'Forward Deployed Engineer', 'Custom platform integrations', 'SOC2, GDPR, ISO 27001', 'SSO/SAML & dedicated infrastructure'],
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
      links: ['Home', 'Fin Overview', 'Channels', 'Trust and Reliability', 'Integrations', 'Voice', 'Procedures', 'Insights', 'Train', 'Testing', 'Intercom Suite ↗', 'Fin for Zendesk', 'Fin for Salesforce', 'Customer Agent', 'Pricing'],
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
      links: ['Customers', 'Pioneer ↗', 'Building frontier AI products ↗', 'Webinars ↗', 'Fin 3', 'Built For You ↗', 'Product Updates', 'Help Center', 'Safety and Security ↗', 'Professional Services', 'Ideas Blog ↗', 'AI Agent Blueprint', 'Learn Blog', '2026 Transformation Report ↗', 'Customer Service Glossary'],
    },
  ],
  actionColumn: {
    title: 'FIN IN ACTION',
    links: ['View demo', 'Free trial', 'Contact sales', 'Sign in'],
    companyTitle: 'COMPANY',
    companyLinks: ['Careers ↗'],
  },
  bottomLeft: 'An Intercom Product',
  bottomLinks: ['Terms', 'Privacy', 'Security'],
};
