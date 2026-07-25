import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { MailIcon, LinkedInIcon, DownloadIcon, ArrowIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-ink-800/80 to-ink-900/60 p-8 text-center md:p-16">
            <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[36rem] max-w-full rounded-full bg-accent-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 grid-noise opacity-40 [mask-image:radial-gradient(30rem_20rem_at_50%_0%,black,transparent)]" />

            <div className="relative">
              <p className="eyebrow justify-center">Let’s talk</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-800 leading-tight tracking-tight text-white text-balance md:text-5xl">
                Got a backend or AI mission?{' '}
                <span className="bg-gradient-to-br from-accent-400 to-accent-600 bg-clip-text text-transparent">
                  Let’s build it right.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
                Freelance & contract missions, remote-friendly. Tell me what you’re building — I’ll tell you
                how I’d ship it.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Freelance%20mission%20—%20let’s%20talk`}
                  className="btn-primary"
                >
                  <MailIcon width={16} height={16} />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                  <LinkedInIcon width={16} height={16} />
                  LinkedIn
                </a>
                <a href={profile.cv} download className="btn-ghost">
                  <DownloadIcon width={16} height={16} />
                  Download CV
                </a>
              </div>

              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-slate-500">
                <ArrowIcon width={14} height={14} className="text-accent-400" />
                {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
