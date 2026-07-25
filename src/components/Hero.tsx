import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import { ArrowIcon, LinkedInIcon, DownloadIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-[0.5] [mask-image:radial-gradient(60rem_40rem_at_50%_0%,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-wide text-slate-300">{profile.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-4xl font-800 leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{profile.headline[0]}</span>{' '}
              <span className="bg-gradient-to-br from-accent-400 to-accent-600 bg-clip-text text-transparent">
                {profile.headline[1]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            >
              {profile.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Let’s work together
                <ArrowIcon width={16} height={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                <LinkedInIcon width={16} height={16} />
                LinkedIn
              </a>
              <a href={profile.cv} download className="btn-ghost">
                <DownloadIcon width={16} height={16} />
                CV
              </a>
            </motion.div>
          </div>

          {/* Right — profile signal card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="card rounded-3xl p-1.5">
              <div className="rounded-[1.35rem] border border-line bg-ink-900/60 p-6">
                {/* window dots */}
                <div className="mb-5 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-auto font-mono text-[11px] text-slate-500">profile.json</span>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-slate-300">
{`{
  `}<span className="text-accent-400">"role"</span>{`: `}<span className="text-emerald-300">"Senior Backend Engineer"</span>{`,
  `}<span className="text-accent-400">"stack"</span>{`: [`}<span className="text-emerald-300">"Java"</span>{`, `}<span className="text-emerald-300">"Spring Boot"</span>{`],
  `}<span className="text-accent-400">"focus"</span>{`: `}<span className="text-emerald-300">"AI in production"</span>{`,
  `}<span className="text-accent-400">"current"</span>{`: `}<span className="text-emerald-300">"Air France / KLM"</span>{`,
  `}<span className="text-accent-400">"status"</span>{`: `}<span className="text-emerald-300">"available"</span>{`
}`}
                </pre>
              </div>
            </div>

            {/* floating accent glow */}
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 h-24 rounded-full bg-accent-500/20 blur-3xl" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/60 p-6">
              <dt className="font-display text-3xl font-800 text-white">{s.value}</dt>
              <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
