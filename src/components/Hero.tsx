import { motion } from 'framer-motion'
import { useContent } from '../i18n'
import { ArrowIcon, LinkedInIcon, DownloadIcon } from './icons'
import { TerminalDemo } from './TerminalDemo'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { profile, stats, ui } = useContent()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-60 [mask-image:radial-gradient(48rem_32rem_at_30%_0%,black,transparent_75%)]" />

      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-card"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-600 text-ink-700">{profile.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-5 font-display text-4xl font-800 leading-[1.06] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.3rem]"
            >
              {profile.headline[0]}{' '}
              <span className="text-brand-700">{profile.headline[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 md:text-lg"
            >
              {profile.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href={profile.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                {ui.bookCall}
                <ArrowIcon width={16} height={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                {ui.emailMe}
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

          {/* Right — live Spring Boot terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <TerminalDemo />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="card rounded-xl p-5">
              <dt className="font-display text-3xl font-800 text-ink-900">{s.value}</dt>
              <dd className="mt-1 text-sm text-ink-500">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
