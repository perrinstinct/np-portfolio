export const profile = {
  name: 'Nicolas Perrin',
  role: 'Senior Backend Engineer',
  stack: 'Java · Spring Boot · AI Engineering',
  photo: '/nicolas.jpg',
  // Hero headline — the differentiating narrative
  headline: ['I build the backend systems that', 'put AI into production.'],
  subhead:
    'Senior software engineer, 5+ years on Java / Spring Boot — today for Air France / KLM. I bring the engineering rigor that turns AI from a demo into a production-grade service.',
  location: 'France · Remote-friendly',
  email: 'nicolas.perrin83110@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas-perrin',
  cv: '/Nicolas-Perrin-CV.pdf',
  availability: 'Available for freelance',
}

export const stats = [
  { value: '5+', label: 'Years in production Java / Spring Boot' },
  { value: '3', label: 'Industries — aviation, consulting, data' },
  { value: 'Java 25', label: 'Spring Boot 4 · on the latest' },
]

export type Company = {
  name: string
  logo: string
  note?: string
}

export const trustedBy: Company[] = [
  { name: 'Air France', logo: '/logos/companies/airfrance.svg', note: 'Current' },
  { name: 'Accenture', logo: '/logos/companies/accenture.svg' },
  { name: 'Virbac', logo: '/logos/companies/virbac.svg' },
]

export type Tech = { name: string; logo: string }

export const techMarquee: Tech[] = [
  { name: 'Java', logo: '/logos/tech/java.svg' },
  { name: 'Spring Boot', logo: '/logos/tech/spring.svg' },
  { name: 'Azure', logo: '/logos/tech/azure.svg' },
  { name: 'Kafka', logo: '/logos/tech/kafka.svg' },
  { name: 'PostgreSQL', logo: '/logos/tech/postgresql.svg' },
  { name: 'Kubernetes', logo: '/logos/tech/kubernetes.svg' },
  { name: 'Docker', logo: '/logos/tech/docker.svg' },
  { name: 'Terraform', logo: '/logos/tech/terraform.svg' },
  { name: 'GitHub Actions', logo: '/logos/tech/githubactions.svg' },
  { name: 'Angular', logo: '/logos/tech/angular.svg' },
  { name: 'MongoDB', logo: '/logos/tech/mongodb.svg' },
  { name: 'Elasticsearch', logo: '/logos/tech/elasticsearch.svg' },
  { name: 'Spark', logo: '/logos/tech/spark.svg' },
]

export const about = {
  eyebrow: 'Positioning',
  title: 'The engineer behind the AI — not just the prompt.',
  paragraphs: [
    'Most of my career is backend: REST APIs, business services and clean, scalable architecture on Java & Spring Boot. That foundation is exactly what AI products need — reliable services, sound data, observability and CI/CD around the model.',
    'I’ve shipped an MCP Server (Spring AI + MCP Registry) and a recommendation engine on Azure OpenAI. I speak both languages: production-grade backend, and applied agentic AI.',
  ],
  highlights: [
    'End-to-end feature ownership — service to UI',
    'Clean architecture, testing & CI/CD by default',
    'Cloud-native on Azure (AKS, API Management)',
  ],
}

export type ExpertiseGroup = {
  key: string
  icon: 'backend' | 'ai' | 'cloud' | 'data' | 'observability' | 'frontend'
  title: string
  blurb: string
  items: string[]
  accent?: boolean
}

export const expertise: ExpertiseGroup[] = [
  {
    key: 'backend',
    icon: 'backend',
    title: 'Backend & APIs',
    blurb: 'Robust services that scale and stay maintainable.',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST API design', 'JUnit / Mockito'],
  },
  {
    key: 'ai',
    icon: 'ai',
    title: 'AI Engineering',
    blurb: 'Agentic & LLM systems, engineered like real software.',
    items: ['Spring AI', 'MCP Server & Registry', 'Azure OpenAI', 'RAG & recommendation'],
    accent: true,
  },
  {
    key: 'cloud',
    icon: 'cloud',
    title: 'Cloud & DevOps',
    blurb: 'Cloud-native delivery, container to production.',
    items: ['Azure (AKS, APIM)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    key: 'data',
    icon: 'data',
    title: 'Data & Messaging',
    blurb: 'Event-driven pipelines and reliable persistence.',
    items: ['PostgreSQL', 'Kafka', 'Spark', 'MongoDB', 'Snowflake'],
  },
  {
    key: 'observability',
    icon: 'observability',
    title: 'Observability',
    blurb: 'Root-cause fast, ship fixes under SLA.',
    items: ['Dynatrace', 'ELK Stack'],
  },
  {
    key: 'frontend',
    icon: 'frontend',
    title: 'Frontend',
    blurb: 'Owning the UI when a feature needs it.',
    items: ['Angular', 'Reactive forms', 'Tailwind CSS'],
  },
]

export type Experience = {
  company: string
  logo: string
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
    logo: '/logos/companies/airfrance.svg',
    role: 'Software Engineer — Full-Stack, Backend-focused',
    period: 'Sept 2024 — Present',
    current: true,
    summary: 'Internal API integration platform used across engineering groups company-wide.',
    points: [
      'Backend on Java 25 / Spring Boot 4 — REST APIs, PostgreSQL, Spring Security, CI/CD; clean, scalable architecture.',
      'Migrated a monolith to a full Azure-native stack — containerized on AKS, secrets in Key Vault.',
      'Built an MCP Server (Spring AI + MCP Registry) exposing Tools, Resources & Prompts for asset discovery.',
    ],
    tags: ['Java 25', 'Spring Boot 4', 'Azure AKS', 'Spring AI / MCP', 'Angular'],
  },
  {
    company: 'Accenture',
    logo: '/logos/companies/accenture.svg',
    role: 'Software Engineer',
    period: 'Sept 2023 — Sept 2024',
    summary: 'Backend services and real-time data products for a major travel-sector client.',
    points: [
      'Java / Spring Boot services, containerized with Docker / Kubernetes.',
      'Real-time pipelines with Kafka & Spark; recommendation engine on Azure OpenAI.',
    ],
    tags: ['Spring Boot', 'Kafka', 'Spark', 'Azure OpenAI', 'Kubernetes'],
  },
  {
    company: 'Virbac',
    logo: '/logos/companies/virbac.svg',
    role: 'Data Engineer',
    period: 'Sept 2020 — Sept 2023',
    summary: 'ETL, data-platform administration and analytics for an international group.',
    points: [
      'ETL pipelines with Talend, Python & PowerShell (Infor M3 ERP, BigCommerce).',
      'Team’s Snowflake specialist — administration, security, complex SQL; Power BI dashboards.',
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
      'A personal R&D project: a phase-gated, event-driven system (Java / Spring / Kafka) where AI agents surface signals and rationale — while a human stays in control of every decision.',
    tags: ['Java', 'Spring', 'Kafka', 'Agentic AI'],
  },
]

export const education = [
  {
    school: 'Polytech Sophia-Antipolis',
    detail: 'Diplôme d’Ingénieur (M.Eng.) — AI & Data specialization',
    period: '2020 — 2023',
  },
  {
    school: 'ISEN Toulon',
    detail: 'Classe Préparatoire — Maths, Physics, Algorithms',
    period: '2017 — 2020',
  },
]

export const languages = ['French (native)', 'English (fluent)', 'Spanish (professional)']
