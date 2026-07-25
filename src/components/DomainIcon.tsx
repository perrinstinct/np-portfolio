import type { ExpertiseGroup } from '../data/content'

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Speaking line-icon per expertise domain. */
export function DomainIcon({ name }: { name: ExpertiseGroup['icon'] }) {
  switch (name) {
    case 'backend': // stacked servers
      return (
        <svg {...base}>
          <rect x="3" y="4" width="18" height="7" rx="2" />
          <rect x="3" y="13" width="18" height="7" rx="2" />
          <path d="M7 7.5h.01M7 16.5h.01" />
        </svg>
      )
    case 'ai': // spark / intelligence
      return (
        <svg {...base}>
          <path d="M12 3l1.6 4.9L18.5 9.5 13.6 11l-1.6 4.9L10.4 11 5.5 9.5l4.9-1.6L12 3Z" />
          <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
        </svg>
      )
    case 'cloud': // cloud
      return (
        <svg {...base}>
          <path d="M7 18a4 4 0 0 1 .5-7.97A5.5 5.5 0 0 1 18 10.5a3.5 3.5 0 0 1-.5 7H7Z" />
        </svg>
      )
    case 'data': // database / stream
      return (
        <svg {...base}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
          <path d="M5 5.5v6c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-6" />
          <path d="M5 11.5v6c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-6" />
        </svg>
      )
    case 'observability': // pulse / activity
      return (
        <svg {...base}>
          <path d="M3 12h4l2.5-7 4 14L16 12h5" />
        </svg>
      )
    case 'frontend': // browser window
      return (
        <svg {...base}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8.5h18M7 6.2h.01M9.5 6.2h.01" />
        </svg>
      )
  }
}
