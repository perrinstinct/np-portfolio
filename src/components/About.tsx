import { useState } from 'react'
import { useContent } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'

function Portrait() {
  const { profile } = useContent()
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-xs lg:mx-0">
      <div className="pointer-events-none absolute -left-5 -top-5 h-28 w-28 rounded-2xl bg-brand-100" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-card-hover">
        <div className="aspect-[4/5] w-full">
          {!failed ? (
            <img
              src={profile.photo}
              alt={`${profile.name} — ${profile.role}`}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-50 to-brand-100">
              <span className="font-display text-5xl font-800 text-brand-300">NP</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center lg:text-left">
        <p className="font-display text-base font-700 text-ink-900">{profile.name}</p>
        <p className="mt-0.5 text-sm text-ink-500">{profile.role}</p>
      </div>
    </div>
  )
}

export function About() {
  const { about } = useContent()

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <Portrait />
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-600 md:text-lg">
              {p}
            </p>
          ))}

          <ul className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-1">
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
