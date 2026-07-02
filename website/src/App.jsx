import { useEffect } from 'react'
import Header from './components/Header.jsx'
import { Marquee } from './components/Shared.jsx'
import Hero from './sections/Hero.jsx'
import EventSection from './sections/EventSection.jsx'
import MenuSection from './sections/MenuSection.jsx'
import Brothers from './sections/Brothers.jsx'
import Visit from './sections/Visit.jsx'
import Footer from './sections/Footer.jsx'

const SANDWICH_WORDS = ['CHICHARRÓN', 'POLLO', 'LOMO', 'KIBBELING', 'TRIPLE']
const SNACK_WORDS = ['TEQUEÑOS', 'FRIED YUCA', 'CAMOTE', 'CHICHA MORADA']

function WordStrip({ words, symbol = '★', symbolClass = 'text-ink' }) {
  return (
    <>
      {words.map((w) => (
        <span key={w} className="font-display text-5xl md:text-7xl font-black tracking-tightest px-6 flex items-center whitespace-nowrap">
          {w}
          <span className={`ml-12 ${symbolClass}`} aria-hidden="true">
            {symbol}
          </span>
        </span>
      ))}
    </>
  )
}

/** Old multi-page URLs (/menu, /team, /contact) land on the matching section. */
const LEGACY_ROUTES = { '/menu': '#menu', '/team': '#brothers', '/contact': '#visit', '/event': '#event' }

export default function App() {
  useEffect(() => {
    const anchor = LEGACY_ROUTES[window.location.pathname.replace(/\/$/, '')]
    if (anchor) {
      history.replaceState(null, '', `/${anchor}`)
      document.querySelector(anchor)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <a
        href="#event"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:top-2 focus:left-2 focus:bg-sun focus:text-ink focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to opening day info
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee className="bg-sun text-ink py-5 border-y border-ink" duration={26}>
          <WordStrip words={SANDWICH_WORDS} />
        </Marquee>
        <EventSection />
        <MenuSection />
        <Marquee className="bg-ink text-bone py-5" duration={30}>
          <WordStrip words={SNACK_WORDS} symbol="●" symbolClass="text-sun" />
        </Marquee>
        <Brothers />
        <Visit />
        <Marquee className="bg-chicha text-bone py-4" duration={22}>
          <span className="font-display text-3xl md:text-4xl font-black tracking-tightest px-6 whitespace-nowrap">
            ROTTERDAM × LIMA <span className="text-sun mx-6">●</span> OPENING 5 JULY <span className="text-sun mx-6">●</span>
          </span>
        </Marquee>
      </main>
      <Footer />
    </>
  )
}
