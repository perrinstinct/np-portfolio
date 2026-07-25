import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { DownloadIcon } from './icons'

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white/[0.03] font-display text-sm font-700 text-accent-400 transition-colors group-hover:border-accent-500/50">
            NP
          </span>
          <span className="hidden font-display text-sm font-600 tracking-tight text-slate-100 sm:block">
            Nicolas Perrin
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href={profile.cv} download className="btn-ghost !py-2 !px-4 text-xs">
          <DownloadIcon width={15} height={15} />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </nav>
    </header>
  )
}
