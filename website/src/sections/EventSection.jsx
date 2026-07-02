import { Reveal, SplitHeading } from '../components/Shared.jsx'
import { CountdownBoard } from '../components/Countdown.jsx'
import { EVENT, GOOGLE_CALENDAR_URL, ICS_URL } from '../event.js'

function CalendarButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={GOOGLE_CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sun text-ink rounded-full px-6 py-3.5 font-medium hover:bg-bone transition-colors"
      >
        Add to Google Calendar
      </a>
      <a
        href={ICS_URL}
        download="warique-lima-day.ics"
        className="inline-flex items-center gap-2 border border-bone/40 text-bone rounded-full px-6 py-3.5 font-medium hover:bg-bone hover:text-ink transition-colors"
      >
        Apple / Outlook (.ics)
      </a>
      <a
        href={EVENT.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-bone/40 text-bone rounded-full px-6 py-3.5 font-medium hover:bg-bone hover:text-ink transition-colors"
      >
        Get directions ↗
      </a>
    </div>
  )
}

export default function EventSection() {
  return (
    <section id="event" className="bg-ink text-bone px-6 md:px-10 py-24 md:py-36 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline gap-5 mb-8">
          <span className="font-display text-2xl font-bold text-sun">01 /</span>
          <span className="uppercase tracking-[0.25em] text-xs text-bone/70">Launch · “Lima Day”</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10">
          <div>
            <SplitHeading
              lines={['Be there on', 'opening day.']}
              className="font-display text-6xl md:text-8xl font-black tracking-tightest leading-[0.95]"
            />
            <Reveal delay={0.15}>
              <p className="mt-8 font-display text-2xl md:text-3xl tracking-tightest text-sun">
                {EVENT.dateLabel} · {EVENT.timeLabel}
              </p>
              <p className="mt-2 text-bone/70 text-lg">
                <a href={EVENT.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-bone/30 underline-offset-4 hover:text-sun transition-colors">
                  {EVENT.cityLabel} — tap for directions
                </a>
                <span className="mx-2">·</span>
                pop-up runs until the end of August
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10">
              <ol className="space-y-5">
                {EVENT.perks.map((perk, i) => (
                  <li key={i} className="flex gap-5 items-start text-lg md:text-xl leading-relaxed">
                    <span className="font-display font-black text-sun shrink-0">0{i + 1}</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-10">
            <CountdownBoard />
            <Reveal delay={0.1}>
              <CalendarButtons />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-bone/50 text-sm">
                Exact spot drops on{' '}
                <a
                  href={EVENT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline decoration-bone/30 underline-offset-4 hover:text-sun transition-colors"
                >
                  Instagram {EVENT.instagramHandle}
                </a>{' '}
                — follow along for reels, drops and pop-up dates.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
