import { useEffect, useState } from 'react'
import { getPhase, getRemaining } from '../event.js'

export function useEventClock() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return { phase: getPhase(now), remaining: getRemaining(now) }
}

const pad = (n) => String(n).padStart(2, '0')

/** Big countdown digits (event section). */
export function CountdownBoard({ className = '' }) {
  const { phase, remaining } = useEventClock()

  if (phase === 'open') {
    return (
      <div className={className}>
        <p className="font-display text-3xl md:text-5xl font-black tracking-tightest">
          We&rsquo;re open! <span className="text-sun">★</span>
        </p>
        <p className="mt-3 text-bone/70">The pop-up is running until the end of August. Come say hola.</p>
      </div>
    )
  }
  if (phase === 'wrapped') {
    return (
      <div className={className}>
        <p className="font-display text-3xl md:text-5xl font-black tracking-tightest">That&rsquo;s a wrap.</p>
        <p className="mt-3 text-bone/70">The summer season is over — follow Instagram for what&rsquo;s next.</p>
      </div>
    )
  }

  const units = [
    ['Days', remaining.days],
    ['Hours', pad(remaining.hours)],
    ['Min', pad(remaining.minutes)],
    ['Sec', pad(remaining.seconds)],
  ]
  return (
    <div className={className}>
      {phase === 'today' && (
        <p className="font-display text-2xl md:text-3xl font-black tracking-tightest text-sun mb-6">
          It&rsquo;s today! Doors open at 12:00 —
        </p>
      )}
      <div className="grid grid-cols-4 gap-3 md:gap-6" role="timer" aria-live="off" aria-label="Countdown to opening day">
        {units.map(([label, value]) => (
          <div key={label} className="bg-bone/10 rounded-2xl px-3 py-5 md:px-6 md:py-8 text-center">
            <div className="font-display text-4xl md:text-7xl font-black tracking-tightest tabular-nums">{value}</div>
            <div className="mt-2 uppercase tracking-[0.25em] text-[10px] md:text-xs text-bone/60">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Compact one-line countdown (hero). */
export function CountdownInline({ className = '' }) {
  const { phase, remaining } = useEventClock()
  let text
  if (phase === 'before') {
    text = `Opening in ${remaining.days}d ${pad(remaining.hours)}h ${pad(remaining.minutes)}m ${pad(remaining.seconds)}s`
  } else if (phase === 'today') {
    text = 'Opening day — today!'
  } else if (phase === 'open') {
    text = 'We’re open — until the end of August'
  } else {
    text = 'Season wrapped — see you next time'
  }
  return (
    <a
      href="#event"
      className={`inline-flex items-center gap-3 rounded-full bg-chicha text-bone px-5 py-2.5 text-sm font-medium hover:bg-ink transition-colors ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sun"></span>
      </span>
      <span className="tabular-nums">{text}</span>
      <span aria-hidden="true">→</span>
    </a>
  )
}
