import Logo from '../components/Logo.jsx'
import { EVENT } from '../event.js'

const NAV = [
  ['#top', 'Home'],
  ['#event', 'Opening Day'],
  ['#menu', 'Menu'],
  ['#brothers', 'The Brothers'],
  ['#visit', 'Contact'],
]

export default function Footer() {
  return (
    <footer className="bg-black text-bone">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-16">
        <img
          src="/wordmark-banner.png"
          alt="Warique — Sandwich Bar"
          loading="lazy"
          className="w-full max-w-3xl mx-auto"
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo className="h-14 w-14" />
            <span className="font-display text-2xl font-bold tracking-tightest">Warique</span>
          </div>
          <p className="text-bone/70 max-w-xs leading-relaxed">
            The sandwich that takes you to Lima — without leaving Rotterdam.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-bone/50 mb-4">Navigate</div>
          <ul className="space-y-2">
            {NAV.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-sun transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-bone/50 mb-4">Contact</div>
          <ul className="space-y-2">
            <li>
              <a href={EVENT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors">
                {EVENT.instagramHandle}
              </a>
            </li>
            <li>
              <a href={EVENT.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors">
                Rotterdam, NL
              </a>
            </li>
            <li>
              <a href={`mailto:${EVENT.email}`} className="hover:text-sun transition-colors">
                {EVENT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/15">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-bone/50">
          <span>© {new Date().getFullYear()} Warique</span>
          <span>Mateo · Lucas · Tiago</span>
        </div>
      </div>
    </footer>
  )
}
