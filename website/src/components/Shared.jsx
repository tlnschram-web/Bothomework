import { useEffect, useRef, useState } from 'react'

export function useRevealed() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, revealed]
}

/** Big display heading revealed line by line. */
export function SplitHeading({ lines, as: Tag = 'h2', className = '', stagger = 0.09, delay = 0 }) {
  const [ref, revealed] = useRevealed()
  return (
    <Tag ref={ref} className={`${className} ${revealed ? 'is-revealed' : ''}`}>
      {lines.map((line, i) => (
        <span className="reveal-line" key={i}>
          <span style={{ transitionDelay: `${delay + i * stagger}s` }}>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

/** Fade-up-on-scroll wrapper. */
export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, revealed] = useRevealed()
  return (
    <div
      ref={ref}
      className={`fade-up ${revealed ? 'is-revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

/** Infinite horizontal marquee. Children rendered twice for a seamless loop. */
export function Marquee({ children, className = '', duration = 28 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ '--marquee-duration': `${duration}s` }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

/** Numbered section eyebrow: `01 /  LABEL` */
export function Eyebrow({ n, label, color = 'text-chicha' }) {
  return (
    <div className="flex items-baseline gap-5 mb-8">
      <span className={`font-display text-2xl font-bold ${color}`}>{n} /</span>
      <span className="uppercase tracking-[0.25em] text-xs">{label}</span>
    </div>
  )
}
