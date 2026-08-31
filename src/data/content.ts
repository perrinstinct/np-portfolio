export type Lang = 'en' | 'fr'

export type Company = { name: string; logo: string; note?: string }
export type Tech = { name: string; logo: string }
export type ExpertiseGroup = {
  key: string
  icon: 'backend' | 'ai' | 'cloud' | 'data' | 'observability' | 'frontend'
  title: string
  blurb: string
  items: readonly string[]
  accent?: boolean
}
export type Experience = {
  company: string
  logo: string
  role: string
  period: string
  current?: boolean
  summary: string
  points: readonly string[]
  tags: readonly string[]
}
export type Project = { name: string; tagline: string; description: string; tags: readonly string[] }

// ── Language-invariant data ────────────────────────────────────────────────
const links = {
  email: 'contact@nicolasperrin.dev',
  linkedin: 'https://www.linkedin.com/in/nicolas-perrin-b6ab99171/',
  cv: '/Nicolas-Perrin-CV.pdf',
  photo: '/nicolas.jpg', // optimized from public/nicolas.png (sips, 1000px q82)
}

const companyLogos = {
  airfrance: '/logos/companies/airfrance.svg',
  accenture: '/logos/companies/accenture.svg',
  virbac: '/logos/companies/virbac.svg',
}

export const techMarquee: Tech[] = [
  { name: 'Java', logo: '/logos/tech/java.svg' },
  { name: 'Spring Boot', logo: '/logos/tech/spring.svg' },
  { name: 'PostgreSQL', logo: '/logos/tech/postgresql.svg' },
  { name: 'Kafka', logo: '/logos/tech/kafka.svg' },
  { name: 'Azure', logo: '/logos/tech/azure.svg' },
  { name: 'Kubernetes', logo: '/logos/tech/kubernetes.svg' },
  { name: 'Docker', logo: '/logos/tech/docker.svg' },
  { name: 'Terraform', logo: '/logos/tech/terraform.svg' },
  { name: 'GitHub Actions', logo: '/logos/tech/githubactions.svg' },
  { name: 'MongoDB', logo: '/logos/tech/mongodb.svg' },
  { name: 'Elasticsearch', logo: '/logos/tech/elasticsearch.svg' },
  { name: 'Spark', logo: '/logos/tech/spark.svg' },
  { name: 'Angular', logo: '/logos/tech/angular.svg' },
]

// Tech/skill item labels are shared (mostly product names)
const expertiseItems = {
  backend: ['Java 17–25', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST API design', 'JUnit / Mockito'],
  cloud: ['Azure (AKS, APIM)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  data: ['PostgreSQL', 'Kafka', 'Spark', 'MongoDB', 'Snowflake'],
  observability: ['Dynatrace', 'ELK Stack'],
  frontend: ['Angular', 'Reactive forms', 'Tailwind CSS'],
  ai: ['Spring AI', 'MCP Server & Registry', 'Azure OpenAI', 'RAG & recommendation'],
}

const expTags = {
  airfrance: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Azure AKS', 'Angular'],
  accenture: ['Spring Boot', 'Kafka', 'Spark', 'Kubernetes', 'MongoDB'],
  virbac: ['Snowflake', 'Python', 'Talend', 'Power BI', 'SQL'],
}

const projectTags = ['Java', 'Spring', 'Kafka', 'Event-driven']

// ── Per-language strings ────────────────────────────────────────────────────
const T = {
  en: {
    nav: [
      { href: '#about', label: 'About' },
      { href: '#expertise', label: 'Expertise' },
      { href: '#experience', label: 'Experience' },
      { href: '#work', label: 'Work' },
      { href: '#contact', label: 'Contact' },
    ],
    ui: {
      downloadCV: 'Download CV',
      workTogether: 'Let’s work together',
      trustedBy: 'Trusted to build for',
      current: 'Current',
    },
    profile: {
      role: 'Senior Backend Engineer',
      stack: 'Java · Spring Boot · Cloud-native',
      headline: ['I build Java backends', 'that hold up in production.'],
      subhead:
        'Senior software engineer, 5+ years designing and shipping Java / Spring Boot systems — today for Air France / KLM. REST APIs, clean architecture, PostgreSQL and cloud-native delivery on Azure.',
      location: 'Working with clients worldwide · Remote first / remote friendly',
      availability: 'Available for freelance',
    },
    stats: [
      { value: '5+', label: 'Years in production Java / Spring Boot' },
      { value: '3', label: 'Industries — aviation, consulting, data' },
      { value: 'Java 25', label: 'Spring Boot 4 · on the latest' },
    ],
    about: {
      eyebrow: 'Positioning',
      title: 'Clean architecture, shipped to production.',
      paragraphs: [
        'Five years building the systems companies actually run on: REST APIs, business services and clean, scalable architecture in Java & Spring Boot — with PostgreSQL, Spring Security and testing as defaults, not afterthoughts.',
        'I own features end to end, from the service layer through CI/CD to production support. And when a project needs an AI layer on top, I’ve shipped that too — a Spring AI / MCP server and a recommendation engine on Azure OpenAI.',
      ],
      highlights: [
        'REST API design & clean architecture',
        'Testing, CI/CD & production support',
        'Cloud-native on Azure (AKS, API Management)',
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: 'Java & Spring Boot, end to end.',
      intro:
        'Deep where it counts — production Java and Spring Boot — with the cloud, data and delivery skills that surround it.',
      groups: {
        backend: { title: 'Backend & APIs', blurb: 'The core: robust Spring Boot services that scale and stay maintainable.' },
        cloud: { title: 'Cloud & DevOps', blurb: 'Cloud-native delivery, container to production.' },
        data: { title: 'Data & Messaging', blurb: 'Event-driven pipelines and reliable persistence.' },
        observability: { title: 'Observability', blurb: 'Root-cause fast, ship fixes under SLA.' },
        frontend: { title: 'Frontend', blurb: 'Owning the UI when a feature needs it.' },
        ai: { title: 'AI Integration', blurb: 'When a project needs an LLM layer, engineered properly.' },
      },
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Five years shipping real systems.',
      intro: 'Aviation, consulting and data — always close to production, always owning the outcome.',
      items: {
        airfrance: {
          role: 'Software Engineer — Full-Stack, Backend-focused',
          period: 'Sept 2024 — Present',
          summary: 'Internal API integration platform used across engineering groups company-wide.',
          points: [
            'Backend on Java 25 / Spring Boot 4 — REST APIs, business services, PostgreSQL, Spring Security and CI/CD, with clean, scalable architecture.',
            'Migrated a monolith to a full Azure-native stack — containerized on AKS, secrets in Key Vault.',
            'API governance in Azure API Management; production support with Dynatrace & ELK under SLA.',
          ],
        },
        accenture: {
          role: 'Software Engineer',
          period: 'Sept 2023 — Sept 2024',
          summary: 'Backend services and real-time data products for a major travel-sector client.',
          points: [
            'Java / Spring Boot services, containerized with Docker / Kubernetes.',
            'Real-time pipelines with Kafka & Spark; scaled MongoDB for traveler-behavior analysis.',
          ],
        },
        virbac: {
          role: 'Data Engineer',
          period: 'Sept 2020 — Sept 2023',
          summary: 'ETL, data-platform administration and analytics for an international group.',
          points: [
            'ETL pipelines with Talend, Python & PowerShell (Infor M3 ERP, BigCommerce).',
            'Team’s Snowflake specialist — administration, security, complex SQL; Power BI dashboards.',
          ],
        },
      },
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Side projects where I explore what’s next.',
      intro: 'Beyond client work, I prototype the architectures I believe in.',
      project: {
        name: 'Agentic Trading',
        tagline: 'Event-driven decision-support · Java / Spring / Kafka',
        description:
          'A personal R&D project: a phase-gated, event-driven system built on Java, Spring and Kafka, where automated signals are surfaced with their rationale — and a human stays in control of every decision.',
      },
      eduTitle: 'Education & languages',
      education: [
        { school: 'Polytech Sophia-Antipolis', detail: 'Diplôme d’Ingénieur (M.Eng.) — AI & Data specialization', period: '2020 — 2023' },
        { school: 'ISEN Toulon', detail: 'Classe Préparatoire — Maths, Physics, Algorithms', period: '2017 — 2020' },
      ],
      languages: ['French (native)', 'English (fluent)', 'Spanish (professional)'],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Got a Java / Spring Boot mission?',
      sub: 'Freelance & contract, anywhere in the world. Tell me what you’re building.',
      emailCta: 'Send me an email',
      downloadCV: 'Download CV',
      mailSubject: 'Freelance mission — let’s talk',
    },
    footer: { built: 'Built with React, Vite & Tailwind.' },
  },

  fr: {
    nav: [
      { href: '#about', label: 'À propos' },
      { href: '#expertise', label: 'Expertise' },
      { href: '#experience', label: 'Expérience' },
      { href: '#work', label: 'Projets' },
      { href: '#contact', label: 'Contact' },
    ],
    ui: {
      downloadCV: 'Télécharger le CV',
      workTogether: 'Travaillons ensemble',
      trustedBy: 'Ils m’ont fait confiance',
      current: 'Actuel',
    },
    profile: {
      role: 'Ingénieur Backend Senior',
      stack: 'Java · Spring Boot · Cloud-native',
      headline: ['Je construis des backends Java', 'qui tiennent en production.'],
      subhead:
        'Ingénieur logiciel senior, 5+ ans à concevoir et livrer des systèmes Java / Spring Boot — aujourd’hui pour Air France / KLM. API REST, architecture propre, PostgreSQL et livraison cloud-native sur Azure.',
      location: 'Missions partout dans le monde · Remote first / remote friendly',
      availability: 'Disponible en freelance',
    },
    stats: [
      { value: '5+', label: 'Ans de Java / Spring Boot en production' },
      { value: '3', label: 'Secteurs — aviation, conseil, data' },
      { value: 'Java 25', label: 'Spring Boot 4 · toujours à jour' },
    ],
    about: {
      eyebrow: 'Positionnement',
      title: 'Une architecture propre, livrée en production.',
      paragraphs: [
        'Cinq ans à construire les systèmes sur lesquels les entreprises tournent vraiment : API REST, services métier et architecture propre et scalable en Java & Spring Boot — avec PostgreSQL, Spring Security et les tests comme réflexes, pas comme options.',
        'Je prends les fonctionnalités de bout en bout, du service au CI/CD jusqu’au support en production. Et quand un projet a besoin d’une couche IA, je l’ai fait aussi : un serveur Spring AI / MCP et un moteur de recommandation sur Azure OpenAI.',
      ],
      highlights: [
        'Conception d’API REST & architecture propre',
        'Tests, CI/CD & support en production',
        'Cloud-native sur Azure (AKS, API Management)',
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: 'Java & Spring Boot, de bout en bout.',
      intro:
        'De la profondeur là où ça compte — Java et Spring Boot en production — avec les compétences cloud, data et delivery qui vont autour.',
      groups: {
        backend: { title: 'Backend & APIs', blurb: 'Le cœur : des services Spring Boot robustes, scalables et maintenables.' },
        cloud: { title: 'Cloud & DevOps', blurb: 'Livraison cloud-native, du conteneur à la production.' },
        data: { title: 'Data & Messaging', blurb: 'Pipelines event-driven et persistance fiable.' },
        observability: { title: 'Observabilité', blurb: 'Diagnostic rapide, correctifs livrés sous SLA.' },
        frontend: { title: 'Frontend', blurb: 'Prendre en main l’UI quand une fonctionnalité l’exige.' },
        ai: { title: 'Intégration IA', blurb: 'Quand un projet a besoin d’une couche LLM, faite proprement.' },
      },
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Cinq ans à livrer de vrais systèmes.',
      intro: 'Aviation, conseil et data — toujours proche de la production, toujours responsable du résultat.',
      items: {
        airfrance: {
          role: 'Ingénieur Logiciel — Full-Stack, orienté Backend',
          period: 'Sept. 2024 — Aujourd’hui',
          summary: 'Plateforme interne d’intégration d’API utilisée par les équipes d’ingénierie de tout le groupe.',
          points: [
            'Backend en Java 25 / Spring Boot 4 — API REST, services métier, PostgreSQL, Spring Security et CI/CD, avec une architecture propre et scalable.',
            'Migration d’un monolithe vers une stack 100 % Azure — conteneurisé sur AKS, secrets dans Key Vault.',
            'Gouvernance d’API sur Azure API Management ; support production avec Dynatrace & ELK sous SLA.',
          ],
        },
        accenture: {
          role: 'Ingénieur Logiciel',
          period: 'Sept. 2023 — Sept. 2024',
          summary: 'Services backend et produits data temps réel pour un grand client du secteur voyage.',
          points: [
            'Services Java / Spring Boot, conteneurisés avec Docker / Kubernetes.',
            'Pipelines temps réel avec Kafka & Spark ; mise à l’échelle de MongoDB pour l’analyse comportementale.',
          ],
        },
        virbac: {
          role: 'Data Engineer',
          period: 'Sept. 2020 — Sept. 2023',
          summary: 'ETL, administration de plateforme data et analytics pour un groupe international.',
          points: [
            'Pipelines ETL avec Talend, Python & PowerShell (ERP Infor M3, BigCommerce).',
            'Référent Snowflake de l’équipe — administration, sécurité, SQL complexe ; tableaux de bord Power BI.',
          ],
        },
      },
    },
    work: {
      eyebrow: 'Projets sélectionnés',
      title: 'Des projets perso où j’explore la suite.',
      intro: 'Au-delà des missions, je prototype les architectures auxquelles je crois.',
      project: {
        name: 'Agentic Trading',
        tagline: 'Aide à la décision event-driven · Java / Spring / Kafka',
        description:
          'Un projet perso de R&D : un système event-driven par paliers, bâti sur Java, Spring et Kafka, où des signaux automatisés sont présentés avec leur justification — l’humain gardant le contrôle de chaque décision.',
      },
      eduTitle: 'Formation & langues',
      education: [
        { school: 'Polytech Sophia-Antipolis', detail: 'Diplôme d’Ingénieur — spécialisation IA & Data', period: '2020 — 2023' },
        { school: 'ISEN Toulon', detail: 'Classe Préparatoire — Maths, Physique, Algorithmique', period: '2017 — 2020' },
      ],
      languages: ['Français (natif)', 'Anglais (courant)', 'Espagnol (professionnel)'],
    },
    contact: {
      eyebrow: 'Discutons',
      title: 'Une mission Java / Spring Boot ?',
      sub: 'Freelance & prestation, partout dans le monde. Dites-moi ce que vous construisez.',
      emailCta: 'M’envoyer un email',
      downloadCV: 'Télécharger le CV',
      mailSubject: 'Mission freelance — discutons',
    },
    footer: { built: 'Réalisé avec React, Vite & Tailwind.' },
  },
} as const

// ── Assembled content for the active language ──────────────────────────────
export function getContent(lang: Lang) {
  const t = T[lang]

  const profile = {
    name: 'Nicolas Perrin',
    ...links,
    role: t.profile.role,
    stack: t.profile.stack,
    headline: t.profile.headline as unknown as string[],
    subhead: t.profile.subhead,
    location: t.profile.location,
    availability: t.profile.availability,
  }

  const trustedBy: Company[] = [
    { name: 'Air France', logo: companyLogos.airfrance, note: t.ui.current },
    { name: 'Accenture', logo: companyLogos.accenture },
    { name: 'Virbac', logo: companyLogos.virbac },
  ]

  // Backend leads and is accented; AI integration stays last — a plus, not the pitch.
  const expertise: ExpertiseGroup[] = [
    { key: 'backend', icon: 'backend', ...t.expertise.groups.backend, items: expertiseItems.backend, accent: true },
    { key: 'cloud', icon: 'cloud', ...t.expertise.groups.cloud, items: expertiseItems.cloud },
    { key: 'data', icon: 'data', ...t.expertise.groups.data, items: expertiseItems.data },
    { key: 'observability', icon: 'observability', ...t.expertise.groups.observability, items: expertiseItems.observability },
    { key: 'frontend', icon: 'frontend', ...t.expertise.groups.frontend, items: expertiseItems.frontend },
    { key: 'ai', icon: 'ai', ...t.expertise.groups.ai, items: expertiseItems.ai },
  ]

  const ex = t.experience.items
  const experiences: Experience[] = [
    { company: 'Air France', logo: companyLogos.airfrance, current: true, tags: expTags.airfrance, ...ex.airfrance },
    { company: 'Accenture', logo: companyLogos.accenture, tags: expTags.accenture, ...ex.accenture },
    { company: 'Virbac', logo: companyLogos.virbac, tags: expTags.virbac, ...ex.virbac },
  ]

  const projects: Project[] = [{ ...t.work.project, tags: projectTags }]

  return {
    nav: t.nav,
    ui: t.ui,
    profile,
    stats: t.stats,
    trustedBy,
    techMarquee,
    about: t.about,
    expertise: { meta: t.expertise, groups: expertise },
    experience: { meta: t.experience, items: experiences },
    work: {
      meta: t.work,
      projects,
      education: t.work.education,
      languages: t.work.languages,
      eduTitle: t.work.eduTitle,
    },
    contact: t.contact,
    footer: t.footer,
  }
}

export type Content = ReturnType<typeof getContent>
