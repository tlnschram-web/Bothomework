import { SplitHeading } from '../components/Shared.jsx'
import { CountdownInline } from '../components/Countdown.jsx'
import Logo from '../components/Logo.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[94vh] flex flex-col justify-end px-6 md:px-10 pb-12 md:pb-16 overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <img
          src="/food/hero-chicharron.jpg"
          alt="Pan con Chicharrón — Warique's signature sandwich"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/85 to-bone/10" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-ink" />
          <span className="uppercase tracking-[0.25em] text-xs">Rotterdam × Lima · Summer 2026</span>
        </div>

        <div className="flex items-end gap-6">
          <SplitHeading
            as="h1"
            lines={['Warique']}
            className="font-display font-black tracking-tightest leading-[0.92] text-[19vw] md:text-[15vw] lg:text-[12rem]"
          />
          <Logo className="hidden md:block h-40 lg:h-56 w-auto mb-6 -rotate-3" />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-8 items-end">
          <SplitHeading
            as="p"
            lines={['Authentic Peruvian sandwiches —', 'sliced, grilled, and served the way', 'they do it in Lima.']}
            delay={0.4}
            stagger={0.07}
            className="md:col-span-2 font-display text-2xl md:text-4xl leading-tight tracking-tightest max-w-2xl"
          />
          <div className="flex flex-col items-start gap-3">
            <CountdownInline />
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 bg-ink text-bone rounded-full px-7 py-4 font-medium hover:bg-chicha transition-colors"
            >
              See the menu
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
