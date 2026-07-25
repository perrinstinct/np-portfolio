import { projects, education, languages } from '../data/content'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { ArrowUpRight } from './icons'

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Side projects where I explore what’s next."
      intro="Beyond client work, I prototype the ideas I believe in — including where agentic AI actually belongs."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 0.08}>
            <div className="card group relative h-full overflow-hidden rounded-2xl p-6 md:p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-700 text-white">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-400">{p.tagline}</p>
                </div>
                <span className="grid h-9 w-9 flex-none place-items-center rounded-lg border border-line text-slate-500 transition-colors group-hover:border-accent-500/40 group-hover:text-accent-400">
                  <ArrowUpRight width={16} height={16} />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Education + languages compact card */}
        <Reveal as="article" delay={0.12}>
          <div className="card h-full rounded-2xl p-6 md:p-7">
            <h3 className="font-display text-xl font-700 text-white">Education & languages</h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.school} className="border-l border-line pl-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-600 text-slate-200">{e.school}</p>
                    <span className="font-mono text-[11px] text-slate-500">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-400">{e.detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="tag">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
