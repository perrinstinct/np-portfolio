import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}

/** Standard section shell: eyebrow + title + intro, consistent rhythm. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className ?? ''}`}>
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-800 leading-tight tracking-tight text-ink-900 text-balance md:text-[2.5rem]">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-ink-600 md:text-lg">{intro}</p>}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
