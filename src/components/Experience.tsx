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
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-line md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal as="article" key={exp.company} delay={i * 0.08} className="md:pl-10">
              {/* node */}
              <span
                className={`absolute left-0 mt-2 hidden h-3.5 w-3.5 rounded-full border-2 md:block ${
                  exp.current
                    ? 'border-accent-400 bg-accent-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]'
                    : 'border-slate-600 bg-ink-800'
                }`}
              />

              <div className="card rounded-2xl p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-700 text-white">{exp.company}</h3>
                  <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-400">{exp.role}</p>
                <p className="mt-3 text-sm text-slate-300">{exp.summary}</p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-500/70" />
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
