import { experiences } from '../data/content'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Five years shipping real systems."
      intro="Aviation, consulting and data — always close to production, always owning the outcome."
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-line md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal as="article" key={exp.company} delay={i * 0.08} className="md:pl-10">
              <span
                className={`absolute left-0 mt-2 hidden h-3.5 w-3.5 rounded-full border-2 border-white md:block ${
                  exp.current ? 'bg-brand-600 ring-4 ring-brand-100' : 'bg-ink-300'
                }`}
              />

              <div className="card card-hover rounded-2xl p-6 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="logo-mono h-6 w-7 !bg-ink-700"
                      style={{ WebkitMaskImage: `url(${exp.logo})`, maskImage: `url(${exp.logo})` }}
                      role="img"
                      aria-label={`${exp.company} logo`}
                    />
                    <h3 className="font-display text-xl font-700 text-ink-900">{exp.company}</h3>
                  </div>
                  <span className="font-mono text-xs text-ink-400">{exp.period}</span>
                </div>
                <p className="mt-2 text-sm font-600 text-brand-700">{exp.role}</p>
                <p className="mt-3 text-sm text-ink-600">{exp.summary}</p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-500" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
