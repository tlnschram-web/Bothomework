import { Reveal, SplitHeading } from '../components/Shared.jsx'

const V = () => (
  <span
    role="img"
    className="inline-flex items-center justify-center align-middle ml-2 h-6 w-6 rounded-full bg-lima text-ink font-script text-sm leading-none pt-1"
    title="Vegetarian"
    aria-label="Vegetarian"
  >
    v
  </span>
)

const MENU = [
  {
    title: 'Sandwiches',
    image: '/food/basket-chicharron.jpg',
    imageAlt: 'Basket with Pan con Chicharrón',
    items: [
      {
        name: 'Pan Con Chicharrón',
        price: '10',
        hero: true,
        desc: 'Homemade bread filled with crispy pork, huancaína sauce, sweet potato, and salsa criolla.',
      },
      {
        name: 'Pan Con Pollo',
        price: '9',
        desc: 'Homemade bread with chicken, mayonnaise, iceberg lettuce, ají pollero sauce, and thin potato chips.',
      },
      {
        name: 'Pan Con Lomo',
        price: '10',
        desc: 'Homemade bread with bavette beef, stir-fried in a wok with Peruvian spices and chilies, topped with salsa criolla and anticucho sauce.',
      },
      {
        name: 'Pan con Kibbeling',
        price: '8',
        hero: true,
        desc: 'Homemade bread filled with crispy fried kibbeling, homemade ceviche sauce, and salsa criolla.',
      },
      {
        name: 'Triple',
        price: '7',
        vegetarian: true,
        desc: 'Toasted white casino bread layered with homemade guacamole, egg salad made with homemade mayonnaise, and seasoned tomatoes.',
      },
    ],
  },
  {
    title: 'Snacks',
    image: '/food/side-camote.jpg',
    imageAlt: 'Camote — crispy sweet potato fries',
    items: [
      { name: 'Fried Yuca', price: '5.50', vegetarian: true, desc: 'Crispy fried cassava batons.' },
      { name: 'Camote', price: '4.50', vegetarian: true, desc: 'Crispy sweet potato fries.' },
      {
        name: 'Tequeños',
        price: '3.50',
        vegetarian: true,
        desc: 'Peruvian-style cheese sticks made with crispy fried wonton wrappers, filled with white cheese and served with guacamole.',
      },
    ],
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="px-6 md:px-10 py-24 md:py-36 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline gap-5 mb-8">
          <span className="font-display text-2xl font-bold text-chicha">02 /</span>
          <span className="uppercase tracking-[0.25em] text-xs">The menu</span>
        </div>
        <SplitHeading
          lines={['Sangüches', '& snacks.']}
          className="font-display text-7xl md:text-[10rem] font-black tracking-tightest leading-[0.85]"
        />
        <Reveal delay={0.3}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
            Sangüches on homemade bread, snacks straight from the fryer. Made to order, every time.
          </p>
        </Reveal>

        {MENU.map((cat, ci) => (
          <div key={cat.title} className="mt-20 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 md:sticky md:top-32 self-start">
              <h3
                className="font-script text-5xl md:text-6xl text-chicha"
                style={{ textShadow: '0.05em 0.05em 0 #0b0b0b' }}
              >
                {cat.title}
              </h3>
              <Reveal delay={0.1} className="mt-8 hidden md:block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img src={cat.image} alt={cat.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7 space-y-3">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <article className="group bg-bone hover:bg-ink hover:text-bone transition-colors duration-500 rounded-2xl p-6 md:p-8 border border-ink/15 hover:border-ink">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl font-bold tracking-tightest flex items-center flex-wrap gap-x-2">
                          {item.hero && (
                            <span
                              role="img"
                              aria-label="House hero"
                              className="text-clay-deep group-hover:text-sun transition-colors text-2xl leading-none"
                            >
                              ★
                            </span>
                          )}
                          {item.name}
                          {item.vegetarian && <V />}
                        </h4>
                        <p className="mt-3 text-ink/70 group-hover:text-bone/70 leading-relaxed max-w-lg">{item.desc}</p>
                      </div>
                      <div className="font-display text-2xl md:text-3xl font-bold whitespace-nowrap">€{item.price}</div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal className="mt-16 border-t border-ink/15 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-ink/60">
          <div>
            <span className="text-clay-deep text-lg align-middle mr-2" aria-hidden="true">★</span>
            Our heroes — the two to order first.
            <span className="mx-3" aria-hidden="true">·</span>
            <span className="inline-flex items-center">
              <span
                aria-hidden="true"
                className="h-5 w-5 rounded-full bg-lima text-ink font-script text-xs inline-flex items-center justify-center mr-1.5 pt-0.5"
              >
                v
              </span>
              vegetarian
            </span>
          </div>
          <a
            href="/menu-warique.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-bone rounded-full px-6 py-3 font-medium hover:bg-chicha transition-colors self-start md:self-auto"
          >
            Download the menu (PDF) <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
        <Reveal className="mt-6 text-sm text-ink/70">
          Please inform staff of any food allergies before ordering · ingredients may change and cross-contamination is
          possible · prices in euros.
        </Reveal>
      </div>
    </section>
  )
}
