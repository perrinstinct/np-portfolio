import { useContent } from '../i18n'
import { Reveal } from './Reveal'
import { MailIcon, LinkedInIcon, DownloadIcon, ArrowIcon } from './icons'

export function Contact() {
  const { contact, profile } = useContent()

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-700 p-8 text-center text-white md:p-16">
            <div className="pointer-events-none absolute inset-0 grid-dots opacity-20 [mask-image:radial-gradient(30rem_20rem_at_50%_0%,black,transparent)]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-brand-400/30 blur-[90px]" />

            <div className="relative">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-200">
                {contact.eyebrow}
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-800 leading-tight tracking-tight text-balance md:text-[2.75rem]">
                {contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 md:text-lg">{contact.sub}</p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(contact.mailSubject)}`}
                  className="btn bg-white text-brand-700 shadow-btn hover:bg-brand-50"
                >
                  <MailIcon width={16} height={16} />
                  {contact.emailCta}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border border-white/25 bg-white/10 text-white hover:bg-white/20"
                >
                  <LinkedInIcon width={16} height={16} />
                  LinkedIn
                </a>
                <a
                  href={profile.cv}
                  download
                  className="btn border border-white/25 bg-white/10 text-white hover:bg-white/20"
                >
                  <DownloadIcon width={16} height={16} />
                  {contact.downloadCV}
                </a>
              </div>

              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-brand-200">
                <ArrowIcon width={14} height={14} />
                {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
