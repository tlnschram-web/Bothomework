import { useState } from 'react'
import { Reveal, SplitHeading } from '../components/Shared.jsx'
import Logo from '../components/Logo.jsx'

const BROTHERS = [
  {
    name: 'Lucas',
    role: 'At the grill',
    panel: 'bg-chicha text-bone',
    image: '/food/lucas-chef.jpg',
    text: 'Working the parrilla, building your sangüche. Head chef — every recipe on the menu is his. Ask him what’s good today; he’ll point you right.',
  },
  {
    name: 'Mateo',
    role: 'Taking the order',
    panel: 'bg-sun text-ink',
    image: null, // waiting on a real photo — branded panel renders instead
    text: 'On the till and watching the queue. Built businesses in Peru and Rotterdam. Tell him if it’s your first time — he’ll talk you through the menu.',
  },
  {
    name: 'Tiago',
    role: 'Drinks & flow',
    panel: 'bg-lima text-ink',
    image: null, // waiting on a real photo — branded panel renders instead
    text: 'Pouring Chicha Morada, brewing coffee, floating wherever the line is longest. The friendly chaos-killer.',
  },
]

function BrotherImage({ brother }) {
  const [failed, setFailed] = useState(false)
  if (!brother.image || failed) {
    return (
      <div className={`aspect-[4/3] ${brother.panel} flex flex-col items-center justify-center gap-2`}>
        <Logo className="h-20 w-20" />
        <span className="font-display text-6xl font-black tracking-tightest">{brother.name[0]}</span>
      </div>
    )
  }
  return (
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={brother.image}
        alt={`${brother.name} — ${brother.role}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  )
}

export default function Brothers() {
  return (
    <section id="brothers" className="px-6 md:px-10 py-24 md:py-36 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline gap-5 mb-8">
          <span className="font-display text-2xl font-bold text-lima-deep">03 /</span>
          <span className="uppercase tracking-[0.25em] text-xs">The Brothers</span>
        </div>
        <SplitHeading
          lines={['Money. Food. Flow.']}
          className="font-display text-5xl md:text-8xl font-black tracking-tightest leading-[0.95]"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
            Three brothers, three jobs. One cooks, one runs the front, one keeps everything flowing. Together we bring
            Lima to your lunch break.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {BROTHERS.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <article className="rounded-3xl overflow-hidden border border-ink/10">
                <BrotherImage brother={b} />
                <div className={`${b.panel} p-7`}>
                  <h3 className="font-display text-3xl font-black tracking-tightest">{b.name}</h3>
                  <p className="uppercase tracking-[0.2em] text-xs mt-1 opacity-70">{b.role}</p>
                  <p className="mt-4 leading-relaxed text-[15px]">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
