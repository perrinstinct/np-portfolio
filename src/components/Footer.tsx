import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-700 font-display text-xs font-700 text-white">
            NP
          </span>
          <span className="text-sm text-ink-600">
            {profile.name} — {profile.role}
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-ink-500">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-brand-700">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-700">
            LinkedIn
          </a>
          <a href={profile.cv} download className="transition-colors hover:text-brand-700">
            CV
          </a>
        </div>
      </div>
      <p className="container-content mt-6 text-center font-mono text-[11px] text-ink-400">
        Built with React, Vite &amp; Tailwind.
      </p>
    </footer>
  )
}
