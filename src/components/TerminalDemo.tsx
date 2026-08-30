import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Tok = { t: string; c?: keyof typeof COLORS }

/** GitHub-dark inspired palette — reads well against the light page. */
const COLORS = {
  ann: '#D2A8FF',
  kw: '#FF7B72',
  type: '#FFA657',
  str: '#A5D6FF',
  fn: '#D2A8FF',
  cmt: '#8B949E',
} as const

const PLAIN = '#C9D1D9'

/** A typical Spring Boot REST controller, pre-tokenized for highlighting. */
const LINES: Tok[][] = [
  [{ t: '@RestController', c: 'ann' }],
  [{ t: '@RequestMapping', c: 'ann' }, { t: '(' }, { t: '"/api/bookings"', c: 'str' }, { t: ')' }],
  [{ t: 'class ', c: 'kw' }, { t: 'BookingController', c: 'type' }, { t: ' {' }],
  [],
  [{ t: '  private final ', c: 'kw' }, { t: 'BookingService', c: 'type' }, { t: ' bookings;' }],
  [],
  [{ t: '  @PostMapping', c: 'ann' }],
  [
    { t: '  ' },
    { t: 'ResponseEntity', c: 'type' },
    { t: '<' },
    { t: 'BookingDto', c: 'type' },
    { t: '> ' },
    { t: 'create', c: 'fn' },
    { t: '(' },
  ],
  [
    { t: '      ' },
    { t: '@Valid ', c: 'ann' },
    { t: '@RequestBody ', c: 'ann' },
    { t: 'BookingRequest', c: 'type' },
    { t: ' req) {' },
  ],
  [{ t: '    ' }, { t: 'var ', c: 'kw' }, { t: 'booking = bookings.' }, { t: 'create', c: 'fn' }, { t: '(req);' }],
  [{ t: '    ' }, { t: 'return ', c: 'kw' }, { t: 'ResponseEntity', c: 'type' }],
  [
    { t: '        .' },
    { t: 'created', c: 'fn' },
    { t: '(' },
    { t: 'URI', c: 'type' },
    { t: '.' },
    { t: 'create', c: 'fn' },
    { t: '(' },
    { t: '"/api/bookings/"', c: 'str' },
    { t: ' + booking.' },
    { t: 'id', c: 'fn' },
    { t: '()))' },
  ],
  [
    { t: '        .' },
    { t: 'body', c: 'fn' },
    { t: '(' },
    { t: 'BookingDto', c: 'type' },
    { t: '.' },
    { t: 'from', c: 'fn' },
    { t: '(booking));' },
  ],
  [{ t: '  }' }],
  [{ t: '}' }],
]

// Total characters, counting one for each line break.
const TOTAL = LINES.reduce((sum, line) => sum + line.reduce((s, tok) => s + tok.t.length, 0) + 1, 0)

const CHAR_MS = 14
const HOLD_MS = 3800

export function TerminalDemo() {
  const reduce = useReducedMotion()
  const [revealed, setRevealed] = useState(0)
  const [done, setDone] = useState(false)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (reduce) {
      setRevealed(TOTAL)
      setDone(true)
      return
    }

    let n = 0
    let hold: ReturnType<typeof setTimeout>
    const id = setInterval(() => {
      n += 1
      if (n >= TOTAL) {
        clearInterval(id)
        setRevealed(TOTAL)
        setDone(true)
        hold = setTimeout(() => {
          setDone(false)
          setRevealed(0)
          setRun((r) => r + 1)
        }, HOLD_MS)
        return
      }
      setRevealed(n)
    }, CHAR_MS)

    return () => {
      clearInterval(id)
      clearTimeout(hold)
    }
  }, [run, reduce])

  // Render only what has been "typed" so far.
  let left = revealed
  const rendered: JSX.Element[] = []

  for (let i = 0; i < LINES.length && left >= 0; i++) {
    const parts: JSX.Element[] = []
    let truncated = false

    for (let j = 0; j < LINES[i].length; j++) {
      const tok = LINES[i][j]
      if (left <= 0) {
        truncated = true
        break
      }
      const take = Math.min(tok.t.length, left)
      parts.push(
        <span key={j} style={{ color: tok.c ? COLORS[tok.c] : PLAIN }}>
          {tok.t.slice(0, take)}
        </span>,
      )
      left -= take
      if (take < tok.t.length) {
        truncated = true
        break
      }
    }

    const isLast = truncated || left <= 0
    rendered.push(
      <div key={i} className="min-h-[1.45em]">
        {parts}
        {isLast && !done && (
          <span className="ml-px inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-blink bg-[#C9D1D9]" />
        )}
      </div>,
    )

    if (truncated) break
    left -= 1 // newline
  }

  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
      <div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-24 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[#1F2733] bg-[#0D1117] shadow-card-hover">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-[#1F2733] bg-[#161B22] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-[#8B949E]">BookingController.java</span>
          <span className="ml-auto rounded-md bg-[#1F2733] px-2 py-0.5 font-mono text-[10px] text-[#8B949E]">
            Spring Boot
          </span>
        </div>

        {/* code */}
        <div className="h-[20.5rem] overflow-hidden px-5 py-4 sm:h-[21rem]">
          <pre className="font-mono text-[12px] leading-relaxed sm:text-[12.5px]">{rendered}</pre>
        </div>

        {/* run output */}
        <div className="border-t border-[#1F2733] bg-[#0B0F15] px-5 py-3 font-mono text-[11.5px]">
          {done ? (
            <span className="text-[#3FB950]">✓ Started BookingApplication in 1.84 s</span>
          ) : (
            <span className="text-[#8B949E]">…</span>
          )}
        </div>
      </div>
    </div>
  )
}
