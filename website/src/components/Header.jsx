import { useEffect, useState } from 'react'
import Logo, { Wordmark } from './Logo.jsx'
import { EVENT } from '../event.js'

const NAV = [
  ['#event', 'Opening Day'],
  ['#menu', 'Menu'],
  ['#brothers', 'The Brothers'],
  ['#visit', 'Contact'],
]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? 'bg-bone/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Warique — back to top">
          <Logo className="h-14 w-14 transition-transform group-hover:rotate-6" />
          <Wordmark className="text-3xl leading-none pt-2" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium uppercase tracking-widest hover:text-chicha transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={EVENT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-ink text-bone px-5 py-2.5 text-sm font-medium hover:bg-chicha transition-colors"
          >
            {EVENT.instagramHandle}
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-7 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-7 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-bone px-6 py-6 flex flex-col gap-5">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold tracking-tightest"
            >
              {label}
            </a>
          ))}
          <a href={EVENT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-chicha font-medium">
            {EVENT.instagramHandle}
          </a>
        </nav>
      )}
    </header>
  )
}
