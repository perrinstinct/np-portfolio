import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getContent, type Content, type Lang } from './data/content'

const STORAGE_KEY = 'np-lang'

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'fr') return saved
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

type LangCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  content: Content
}

const LanguageContext = createContext<LangCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.title =
      lang === 'fr'
        ? 'Nicolas Perrin — Ingénieur Backend Senior · Java / Spring Boot'
        : 'Nicolas Perrin — Senior Backend Engineer · Java / Spring Boot'
  }, [lang])

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'fr' : 'en')),
      content: getContent(lang),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

/** Convenience: the assembled content for the active language. */
export function useContent(): Content {
  return useLang().content
}
