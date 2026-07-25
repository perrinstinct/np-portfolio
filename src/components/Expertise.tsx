import { expertise } from '../data/content'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { SparkIcon } from './icons'

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title="A backend core, with an AI edge."
      intro="Depth where it matters — production Java & Spring Boot — and a genuine, hands-on command of the AI engineering the market is asking for."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((g, i) => (
          <Reveal as="article" key={g.key} delay={i * 0.06}>
            <div
              className={`card group h-full rounded-2xl p-6 ${
                g.accent ? 'border-accent-500/30 bg-accent-500/[0.04]' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-700 text-white">{g.title}</h3>
                {g.accent && (
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-500/15 text-accent-400">
                    <SparkIcon width={16} height={16} />
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className={`tag ${g.accent ? 'border-accent-500/25 text-accent-300' : ''}`}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
