import { expertise } from '../data/content'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { DomainIcon } from './DomainIcon'

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title="A backend core, with an AI edge."
      intro="Depth where it matters — production Java & Spring Boot — plus a genuine, hands-on command of the AI engineering the market is asking for."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((g, i) => (
          <Reveal as="article" key={g.key} delay={i * 0.06}>
            <div
              className={`card card-hover h-full rounded-2xl p-6 ${
                g.accent ? 'border-brand-200 bg-brand-50/60' : ''
              }`}
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  g.accent ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                }`}
              >
                <DomainIcon name={g.icon} />
              </span>

              <h3 className="mt-4 font-display text-lg font-700 text-ink-900">{g.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{g.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className={`tag ${g.accent ? 'border-brand-200 bg-white text-brand-800' : ''}`}
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
