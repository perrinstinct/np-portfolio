import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { DownloadIcon } from './icons'

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div
      className="inline-flex items-center rounded-lg border border-line bg-white p-0.5 text-xs font-600"
      role="group"
      aria-label="Language"
    >
      {(['en', 'fr'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            lang === l ? 'bg-brand-700 text-white' : 'text-ink-500 hover:text-ink-800'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const { content } = useLang()
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
        scrolled ? 'border-b border-line bg-canvas/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-700 font-display text-sm font-700 text-white">
            NP
          </span>
          <span className="hidden font-display text-sm font-700 tracking-tight text-ink-900 sm:block">
            Nicolas Perrin
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {content.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-500 text-ink-600 transition-colors hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <LangToggle />
          <a href={content.profile.cv} download className="btn-ghost !py-2 !px-4 text-xs">
            <DownloadIcon width={15} height={15} />
            <span className="hidden lg:inline">{content.ui.downloadCV}</span>
            <span className="lg:hidden">CV</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
