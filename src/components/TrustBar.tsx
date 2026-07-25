import { trustedBy, techMarquee } from '../data/content'
import { Reveal } from './Reveal'

export function TrustBar() {
  const loop = [...techMarquee, ...techMarquee]

  return (
    <section className="border-y border-line bg-white py-12">
      <div className="container-content">
        {/* Companies — uniform monochrome */}
        <Reveal className="flex flex-col items-center gap-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
            Trusted to build for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((c) => (
              <div key={c.name} className="flex items-center gap-2.5" title={c.name}>
                <span
                  className="logo-mono h-7 w-8"
                  style={{
                    WebkitMaskImage: `url(${c.logo})`,
                    maskImage: `url(${c.logo})`,
                  }}
                  role="img"
                  aria-label={`${c.name} logo`}
                />
                <span className="font-display text-lg font-700 tracking-tight text-ink-700">
                  {c.name}
                </span>
                {c.note && (
                  <span className="rounded-full bg-brand-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand-700">
                    {c.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tech marquee — brand-colored logos */}
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-3 pr-3">
          {loop.map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-line bg-white px-3.5 py-2 shadow-card"
            >
              <img src={t.logo} alt="" aria-hidden className="h-5 w-5 object-contain" />
              <span className="text-sm font-500 text-ink-700">{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
