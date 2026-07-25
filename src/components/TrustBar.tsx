import { trustedBy, techMarquee } from '../data/content'
import { Reveal } from './Reveal'

export function TrustBar() {
  const loop = [...techMarquee, ...techMarquee]

  return (
    <section className="border-y border-line bg-ink-950/40 py-10">
      <div className="container-content">
        <Reveal className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Trusted to build for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustedBy.map((c) => (
              <div key={c.name} className="flex items-baseline gap-2">
                <span className="font-display text-lg font-700 tracking-tight text-slate-200">
                  {c.name}
                </span>
                {c.note && (
                  <span className="rounded-full bg-accent-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-400">
                    {c.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {loop.map((t, i) => (
            <span key={`${t}-${i}`} className="tag whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
