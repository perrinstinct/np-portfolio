import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-white/[0.03] font-display text-xs font-700 text-accent-400">
            NP
          </span>
          <span className="text-sm text-slate-400">
            {profile.name} — {profile.role}
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href={profile.cv} download className="transition-colors hover:text-white">
            CV
          </a>
        </div>
      </div>
      <p className="container-content mt-6 text-center font-mono text-[11px] text-slate-600">
        Built with React, Vite & Tailwind — designed &amp; coded from scratch.
      </p>
    </footer>
  )
}
