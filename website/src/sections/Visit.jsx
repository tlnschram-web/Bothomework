import { Reveal, SplitHeading } from '../components/Shared.jsx'
import { EVENT } from '../event.js'

const BLOCKS = [
  {
    label: 'Daily updates',
    note: 'Reels, drops, pop-up dates.',
    href: EVENT.instagramUrl,
    external: true,
    lines: ['@warique', '.eu'],
  },
  {
    label: 'Email',
    note: 'Catering, events, anything else.',
    href: `mailto:${EVENT.email}`,
    lines: ['hello@', 'warike.eu'],
  },
  {
    label: 'Where',
    note: 'Open from 5 July until the end of August — tap for directions.',
    href: EVENT.mapsUrl,
    external: true,
    lines: ['Rotterdam,', 'NL'],
  },
]

export default function Visit() {
  return (
    <section id="visit" className="px-6 md:px-10 py-24 md:py-36 bg-bone scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline gap-5 mb-8">
          <span className="font-display text-2xl font-bold text-clay">04 /</span>
          <span className="uppercase tracking-[0.25em] text-xs">Get in touch</span>
        </div>
        <SplitHeading
          lines={['Say hola.']}
          className="font-display text-7xl md:text-[10rem] font-black tracking-tightest leading-[0.85]"
        />
        <Reveal delay={0.3}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
            Catering for your office, an event you&rsquo;d like the cargo bike at, or just to tell us which sangüche you
            want first — we read everything.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <div className="text-xs uppercase tracking-widest text-ink/40 mb-3">{b.label}</div>
              <a
                href={b.href}
                {...(b.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-display text-4xl md:text-5xl font-black tracking-tightest leading-tight hover:text-chicha transition-colors block"
              >
                {b.lines.map((l, j) => (
                  <span key={j} className="block">
                    {l}
                  </span>
                ))}
              </a>
              <p className="mt-3 text-ink/60 text-sm max-w-[26ch]">{b.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
