import { useContent } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function About() {
  const { about } = useContent()

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-600 md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="card card-hover flex items-start gap-3 rounded-xl px-4 py-3.5">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-sm font-500 text-ink-700">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
