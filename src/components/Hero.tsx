import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import { ArrowIcon, LinkedInIcon, DownloadIcon } from './icons'

const ease = [0.22, 1, 0.36, 1] as const

function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
      {/* accent shapes behind */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-3xl bg-brand-100" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-card-hover">
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
              <span className="font-display text-6xl font-800 text-brand-300">NP</span>
            </div>
          )}
        </div>
      </div>

      {/* floating role card */}
      <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-line bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-600 text-ink-700">{profile.availability}</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-60 [mask-image:radial-gradient(48rem_32rem_at_30%_0%,black,transparent_75%)]" />

      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span className="text-xs font-600 tracking-wide text-brand-700">{profile.stack}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-5 font-display text-4xl font-800 leading-[1.06] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.4rem]"
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

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <Portrait />
          </motion.div>
        </div>

        {/* Stats */}
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
