export const profile = {
  name: 'Nicolas Perrin',
  role: 'Senior Backend Engineer',
  stack: 'Java · Spring Boot · AI Engineering',
  // Hero headline — the differentiating narrative
  headline: ['I build the backend systems that', 'put AI into production.'],
  subhead:
    'Senior software engineer with 5+ years shipping scalable Java / Spring Boot platforms — today designing API integration systems for Air France / KLM. I bring the engineering rigor that turns AI from a demo into a production-grade service.',
  location: 'France · Remote-friendly',
  email: 'nicolas.perrin83110@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas-perrin',
  cv: '/Nicolas-Perrin-CV.pdf',
  availability: 'Available for freelance & contract missions',
}

export const stats = [
  { value: '5+', label: 'Years in production Java / Spring Boot' },
  { value: '3', label: 'Industries — aviation, consulting, data' },
  { value: 'Java 25', label: 'Spring Boot 4 · shipping on the latest' },
]

export const trustedBy = [
  { name: 'Air France', note: 'Current' },
  { name: 'Accenture' },
  { name: 'Virbac' },
]

export const techMarquee = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'Spring Data JPA',
  'Spring AI',
  'PostgreSQL',
  'Kafka',
  'Azure',
  'AKS',
  'Kubernetes',
  'Docker',
  'Terraform',
  'GitHub Actions',
  'Angular',
  'MongoDB',
  'Snowflake',
  'ELK',
  'Dynatrace',
]

export const about = {
  eyebrow: 'Positioning',
  title: 'The engineer behind the AI, not just the prompt.',
  paragraphs: [
    'Most of my career has been backend: designing REST APIs, business services and clean, scalable architectures on Java & Spring Boot. That foundation is exactly what today’s AI products are missing — reliable services, sound data models, observability and CI/CD around the model.',
    'I’ve built an MCP Server (Spring AI + MCP Registry) exposing Tools, Resources and Prompts for internal asset discovery, and a recommendation engine on Azure OpenAI. I speak both languages: production-grade backend and applied, agentic AI.',
  ],
  highlights: [
    'End-to-end feature ownership — from service to UI',
    'Clean architecture, testing & CI/CD by default',
    'Cloud-native on Azure (AKS, Key Vault, API Management)',
  ],
}

export type ExpertiseGroup = {
  key: string
  title: string
  blurb: string
  items: string[]
  accent?: boolean
}

export const expertise: ExpertiseGroup[] = [
  {
    key: 'backend',
    title: 'Backend & APIs',
    blurb: 'The core: robust services that scale and stay maintainable.',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST API design', 'JUnit / Mockito'],
  },
  {
    key: 'ai',
    title: 'AI Engineering',
    blurb: 'Agentic & LLM systems, engineered like real software.',
    items: ['Spring AI', 'MCP Server & Registry', 'Azure OpenAI', 'RAG & recommendation', 'Tools · Resources · Prompts'],
    accent: true,
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    blurb: 'Cloud-native delivery, from container to production.',
    items: ['Azure (AKS, APIM)', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions · CI/CD'],
  },
  {
    key: 'data',
    title: 'Data & Messaging',
    blurb: 'Event-driven pipelines and reliable persistence.',
    items: ['PostgreSQL', 'Kafka', 'Spark', 'MongoDB', 'Snowflake', 'SQL'],
  },
  {
    key: 'observability',
    title: 'Observability',
    blurb: 'Root-cause fast, ship fixes under SLA.',
    items: ['Dynatrace', 'ELK (Elasticsearch, Logstash, Kibana)'],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    blurb: 'Comfortable owning the UI when a feature needs it.',
    items: ['Angular', 'Reactive forms', 'Tailwind CSS', 'State management'],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  summary: string
  points: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Air France',
    role: 'Software Engineer — Full-Stack, Backend-focused',
    period: 'Sept 2024 — Present',
    current: true,
    summary:
      'Building an internal API integration platform used across engineering groups company-wide.',
    points: [
      'Backend on Java 25 / Spring Boot 4 — REST APIs, business services, PostgreSQL persistence, Spring Security, testing and CI/CD, with a focus on clean architecture and scalability.',
      'Migrated a monolithic Spring Boot app to a full Azure-native stack — containerized on AKS, secrets in Key Vault.',
      'API governance: designed integrations in Azure API Management with architects to expose enterprise services.',
      'Built an MCP Server (Spring AI + MCP Registry) exposing Tools, Resources and Prompts for internal asset discovery.',
      'Frontend features in Angular 21 (Material + Tailwind); production support with Dynatrace & ELK under SLA.',
    ],
    tags: ['Java 25', 'Spring Boot 4', 'Azure AKS', 'Spring AI / MCP', 'Angular'],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'Sept 2023 — Sept 2024',
    summary: 'Backend services and real-time data products for a major travel-sector client.',
    points: [
      'Backend in Java & Spring Boot, containerized with Docker / Kubernetes.',
      'Real-time data pipelines with Kafka and Spark for traveler-behavior analysis and personalized offers.',
      'Scaled NoSQL (MongoDB); built a recommendation engine using Azure OpenAI.',
      'Contributed to an internal Metaverse project (Angular + BabylonJS); CI/CD on Azure DevOps.',
    ],
    tags: ['Spring Boot', 'Kafka', 'Spark', 'Azure OpenAI', 'Kubernetes'],
  },
  {
    company: 'Virbac',
    role: 'Data Engineer',
    period: 'Sept 2020 — Sept 2023',
    summary: 'ETL, data platform administration and analytics for an international group.',
    points: [
      'Designed and optimized ETL pipelines with Talend, Python and PowerShell (Infor M3 ERP, BigCommerce).',
      'Became the team’s Snowflake specialist — administration, security best practices, complex SQL transformations.',
      'Delivered reporting and interactive dashboards with Power BI and Azure; automated workflows via REST APIs.',
    ],
    tags: ['Snowflake', 'Python', 'Talend', 'Power BI', 'SQL'],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Agentic Trading',
    tagline: 'Human-in-the-loop trading decision-support',
    description:
      'A personal R&D project: a phase-gated, event-driven system (Java / Spring / Kafka) where AI agents surface trading signals and rationale, but a human stays in control of every decision. A concrete take on how agentic AI belongs in high-stakes workflows.',
    tags: ['Java', 'Spring', 'Kafka', 'Agentic AI', 'Event-driven'],
  },
]

export const education = [
  {
    school: 'Polytech Sophia-Antipolis',
    detail: 'Diplôme d’Ingénieur (equiv. Master of Engineering) — AI & Data specialization',
    period: '2020 — 2023',
  },
  {
    school: 'ISEN Toulon',
    detail: 'Classe Préparatoire — Mathematics, Physics, Algorithms',
    period: '2017 — 2020',
  },
]

export const languages = ['French (native)', 'English (fluent)', 'Spanish (professional)']
