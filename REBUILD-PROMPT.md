# Prompt: rebuild the Warique website from zero

Build a complete, production-ready website for **Warique** — a Peruvian sangüche (sandwich) pop-up from three brothers in Rotterdam. Bold editorial design: oversized serif display type, kinetic reveal animations, scrolling marquees, parallax food photography. Four pages. Everything below is the exact spec — match copy verbatim.

## Tech stack
- Vite + React 18, `react-router-dom` (BrowserRouter; routes must work on hard refresh — include SPA fallback config for hosting), `framer-motion` for animations, Tailwind CSS.
- Output must be a static site deployable to Netlify (`_redirects` file: `/*  /index.html  200`) and Apache (`.htaccess` with SPA rewrite + force-HTTPS).
- `<title>Warique · Rotterdam × Lima</title>` · meta description: `Warique — Authentic Peruvian sandwiches with a Rotterdam touch. Rotterdam × Lima.` · favicon: `/logo.png`.

## Design system
- Colors (Tailwind custom): `ink #0b0b0b` (near-black), `bone #f4efe6` (warm cream — page background), `chicha #e91e63` (hot pink — primary accent), `sun #ffd426` (yellow), `lima #27c46b` (green), `clay #f05a14` (orange).
- Fonts (Google Fonts): **Fraunces** (display; weights 400/500/700/900, optical sizing) for all headings — class `font-display`; **Inter** (400–700) for body; **Caveat** (500/700) for small handwritten accents.
- Typography style: huge display headings (up to `text-[12rem]`/`18vw`), `font-black`, tight letter-spacing (≈ -0.04em, "tracking-tightest"), line-height 0.85–0.95, multi-line headings reveal line-by-line (each line wrapped in overflow-hidden span, translateY 110%→0, duration ~0.95s, ease `[.22,1,.36,1]`, stagger ~0.08–0.12s, triggered once on scroll into view).
- Components: pill buttons (`rounded-full px-7 py-4 bg-ink text-bone hover:bg-chicha`); cards `rounded-2xl/3xl`; sections numbered with eyebrow rows: colored `font-display` number (`01 /`) + uppercase tracked label; infinite horizontal marquee strips; images in rounded containers with subtle scroll parallax (translateY + scale ~1.1); fade-up-on-scroll for paragraphs (opacity 0, y 24 → visible, 0.85s); page transitions (fade + y 12, 0.6s).
- Max content width 1600px, generous padding (`px-6 md:px-10`, sections `py-24`–`py-44`).

## Images (provided as files — use these exact paths)
`/logo.png` (round badge logo), `/coffee-1.jpg`, `/coffee-2.jpg`, `/coffee-3.jpg`, `/food/hero-chicharron.jpg`, `/food/closeup-chicharron.jpg`, `/food/basket-chicharron.jpg`, `/food/triple-top.jpg`, `/food/triple-side.jpg`, `/food/chicharron-camote.jpg`, `/food/side-camote.jpg`, `/food/side-yuca.jpg`, `/food/lucas-chef.jpg`, `/favicon.svg`, `/icons.svg`.
External (hotlinked from Unsplash): Mateo portrait `https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=80`, Tiago portrait `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1400&q=80`, Drinks photo `https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80`.

## Header (all pages)
Fixed, transparent → solid bone with border after 40px scroll. Left: round logo image (h-12, ring) + wordmark `Warique` (Fraunces bold). Center/right nav: `Home /` · `Menu /menu` · `The Brothers /team` · `Contact /contact` (active link underlined via animated scale-x bar). Right: pill button `@warique.eu` → `https://instagram.com/warique.eu` (new tab). Mobile: hamburger toggling a full menu.

## Page 1 — Home `/`
1. **Hero** (min-h 92vh, content bottom-aligned): full-bleed background `/food/hero-chicharron.jpg` with parallax + dark gradient. Eyebrow: line + `ROTTERDAM × LIMA · 2026` (uppercase, tracked). H1: `Warique` (one line, 18vw/12rem). Sub-headline (Fraunces, 3 revealed lines): `Authentic Peruvian sandwiches —` / `sliced, grilled, and served the way` / `they do it in Lima.` Buttons: pill `See the menu →` → /menu; text link `MEET THE BROTHERS` (uppercase, tracked) → /team.
2. **Yellow marquee** (bg-sun, ink text, Fraunces black ~text-7xl): `CHICHARRÓN ★ POLLO ★ BUTIFARRA ★ KIBILING ★ TRIPLE ★ …` looping.
3. **Intro section** — eyebrow `01 /`; big heading (3 lines): `A taste of Lima,` / `in the middle` / `of Rotterdam.` Then 3 numbered columns (01/02/03, top border + chili doodle accent):
   - `Straight from Lima` — `Real recipes — chicharrón, sarsa criolla, ají amarillo. No fusion shortcuts, no compromises.`
   - `Made to order` — `Slow-cooked, fried fresh, and built the moment you order. Never sitting under a lamp.`
   - `House cremas` — `Six house-made cremas — ají amarillo, rocoto, mayo casera and more. Add them to any sangüche.`
4. **02 / The signature** — two-column, left sticky: heading `Start` / `with the` / `chicharrón.`; paragraph: `Pork belly slow-cooked for hours, fried crisp in its own fat, then piled on artisan bread with fried sweet potato and sarsa criolla. If it's your first time, this is the one to order.` Right: parallax images `/food/closeup-chicharron.jpg` (alt `Pan con Chicharrón sandwich`) and `/food/basket-chicharron.jpg`.
5. **03 / How we cook** — left: heading `Fried fresh.` / `Made to order.`; paragraph: `Pork belly that takes hours. Cod fried the moment you order. Bread fresh that morning. Nothing sits, nothing gets reheated — everything on your sangüche is built right when you ask for it.` Right: 4 stacked ink cards (★ in sun, hover → chicha):
   - `Pork belly · slow-cooked` — `Hours in its own fat until it falls apart, then crisped to order.`
   - `Kibiling cod · fried fresh` — `Dutch cod in a light batter, fried the moment you order — crisp, never greasy.`
   - `Sarsa criolla · daily` — `Red onion, lime, coriander, ají — cut every morning, never the day before.`
   - `Cremas · made in-house` — `Ají amarillo, rocoto, ají parrillero, criolla, mayo casera. Dress your sangüche the way it's eaten in Lima.`
6. **Quote section** (over parallax food imagery, dark overlay): giant heading `"The sandwich that takes you` / `to Lima — without leaving` / `Rotterdam."`
7. **Black marquee**: `ROTTERDAM × LIMA ●` repeating (bone text on ink).
8. **CTA strip** (top border): `Come eat with us.` + pill `See the menu →`.

## Page 2 — Menu `/menu`
Eyebrow `02 / The Menu` (number in chicha). H1 (3 lines, up to 16rem): `Sangüches,` / `sides` / `& cremas.` Intro: `Five sangüches on crusty artisan bread, sides straight from the fryer, and house cremas to finish. Made to order, every time.`
Ink marquee: `HOUSE CREMAS ● GRAB & GO ● MADE TO ORDER ●`.
Then one section per category — left sticky column with `0n / 03`, category title, intro, parallax category image; right column of item cards (bone bg, hover inverts to ink; ★ in sun marks "hero" items; layout: name (Fraunces bold) + italic Peruvian subtitle + description + price right):

**Sandwiches** (image `/food/basket-chicharron.jpg`) — intro `Five sangüches on crusty artisan bread, made fresh to order.`
- ★ `Pan con Chicharrón` · *Crispy Pork* · €12.50 — `Slow-cooked pork belly, fried sweet potato, sarsa criolla.`
- `Pan con Pollo` · *Shredded Chicken* · €12.50 — `Shredded chicken, celery mayo, papitas al hilo, lettuce.`
- `Butifarra` · *Country Ham* · €11.50 — `Artisan country ham, lettuce, sarsa criolla, mustard.`
- ★ `Pan con Kibiling` · *Crispy Cod · Rotterdam × Lima* · €11.50 — `Crispy Dutch-style cod, ají amarillo tártara, fresh slaw.`
- `Triple` · *Lima Classic* · €10.50 — `Boiled egg, avocado and tomato, triple-layered.`

**Sides & Cremas** (image `/food/side-camote.jpg`) — intro `Crispy on the side — and a row of house cremas to dress it all up.`
- `Camote Frito` · *Sweet Potato Fries* · €5.00 — `Crispy sweet potato, salt and lime.`
- `Yuca Frita` · *Fried Cassava* · €5.00 — `Golden cassava, ají amarillo dip.`
- `Cremas` · *Las Cremas* · €1 — `Ají amarillo, rocoto (mild), ají parrillero, tártara, salsa criolla, mayo casera. Each extra crema +€0.50.`

**Drinks** (Unsplash drinks image) — intro `House-made, cold and hot.`
- `Chicha Morada` · *Purple Corn* · €3.80 — `Homemade · purple corn, pineapple, cinnamon, clove.`
- `Specialty Coffee` · *Café Especial* · €3.80 — `Peruvian single-origin beans, brewed in-house.`

Footer note row: `★ Our heroes — the two to order first. · Cremas — ají, rocoto, mayo casera & more.` and right: `PRICES IN EUROS · SUBJECT TO SEASONAL CHANGE`.

## Page 3 — The Brothers `/team`
Eyebrow `03 / The Brothers` (number in lima). H1: `Money.` / `Food.` / `Flow.` Intro: `Three brothers, three jobs. One cooks, one runs the front, one keeps everything flowing. Together we bring Lima to your lunch break.`
Marquee: `MATEO ★ LUCAS ★ TIAGO ★ …`
Three large profile cards (photo + colored panel with big initial, name, role, one-liner, bio, highlight chips):
1. **Mateo** (panel bg-sun) — `M` — role `Operations & Finance` — one-liner `The money. The numbers. The room.` — bio: `Founded and ran two businesses in Peru — a clothing brand and a beer brewery — and now runs two more here in Rotterdam. On a busy day he is on the till, owns the queue, and keeps the whole thing moving.` — highlights: `Built businesses in Peru` · `Runs the counter & the queue` · `Two businesses in Rotterdam` — photo: Mateo Unsplash URL.
2. **Lucas** (panel bg-chicha) — `L` — role `Head Chef & Menu` — one-liner `The food. The grill. The final say.` — bio: `Sous Chef at O'Anatolian (Fenix Factory, Rotterdam). Leads a busy kitchen day in, day out — service, prep, the line. He owns the menu: every recipe, every plate that leaves the pass.` — highlights: `Sous Chef · O'Anatolian` · `Leads a busy kitchen` · `Owns every recipe` — photo `/food/lucas-chef.jpg`.
3. **Tiago** (panel bg-lima) — `T` — role `Workflow & Front-of-House` — one-liner `The flow. The drinks. The bottleneck-killer.` — bio: `The utility player — helps on every front. Runs a cargo-bike food + drink operation in Rotterdam (service flow, stock, POS) and has prior kitchen experience. On a Warique day: cremas stocked, Chicha Morada cold, coffee hot, floating wherever the line is longest. Studying at THUAS.` — highlights: `Cargo-bike food + drink op · Rotterdam` · `Prior kitchen experience` · `THUAS · International Business` — photo: Tiago Unsplash URL.
**04 / When you visit** — heading `Who you'll meet` / `at the counter.` — 3 mini cards:
- `Lucas` · `At the grill` — `Working the parrilla, building your sangüche. Ask him what's good today — he'll point you right.`
- `Mateo` · `Taking the order` — `On the till and watching the queue. Tell him if it's your first time — he'll talk you through the menu.`
- `Tiago` · `Drinks & cremas` — `Pouring Chicha Morada, brewing coffee, keeping the cremas topped up. The friendly chaos-killer.`
**05 / What we cook** — photo gallery strip (parallax, alt `Warique sangüche`: triple-top, chicharron-camote, side-yuca, triple-side, coffee shots) + CTA `Come eat with us.` + `See the menu →`.

## Page 4 — Contact `/contact`
Eyebrow `04 / Get in touch` (number in clay). H1: `Say hola.` Intro: `Catering for your office, an event you'd like the cargo bike at, or just to tell us which sangüche you want first — we read everything.`
Left sticky column, three blocks (small uppercase label + giant Fraunces link + small note):
- `DAILY UPDATES` → `@warique` / `.eu` (two lines) linking `https://instagram.com/warique.eu` — note `Reels, drops, pop-up dates.`
- `EMAIL` → `hello@` / `warike.eu` linking `mailto:hello@warike.eu` — note `Catering, events, anything else.`
- `WHERE` → `Rotterdam, NL` linking `https://maps.app.goo.gl/XnipLsPD8tfHefqc6?g_st=ic` (new tab) — note `Open from 5 July until the end of August — tap for directions.`
Right: **form card** (bg-ink, bone text, rounded-3xl): label `WRITE TO US`, heading `We reply to every single one.` Fields (underline style, sun focus): `Your name` (placeholder `Mateo`), `Email` (placeholder `you@example.com`), chip selector `I'm reaching out about`: `Catering` (default) / `A private event` / `Cargo-bike booking` / `Just saying hi` (selected = bg-sun), `Message` textarea (placeholder `Tell us what's on your mind…`). Submit pill (bg-sun → hover chicha) `Send message →`. On submit open `mailto:hello@warike.eu?subject=[<topic>] from <name>&body=Hi Warique,%0D%0A%0D%0A<message>%0D%0A%0D%0A— <name>&cc=<their email>`. Note below: `Opens your mail client. We don't store anything on this site.`
Below: **pink panel** (bg-chicha, bone text, rounded-[2.5rem]): label `LAUNCH · "LIMA DAY"`, heading `Be there on` / `opening day.`, numbered list: `01 First 50 chicharrón sandwiches at an opening price.` `02 Grill running all afternoon.` `03 Chicha Morada on the house with any sandwich.` `04 Peruvian music. Cameras out. Lima energy.`

## Footer (all pages — bg-ink, bone text)
Brand column: round logo + `Warique` + tagline `The sandwich that takes you to Lima — without leaving Rotterdam.` · `NAVIGATE` column: Home / Menu / The Brothers / Contact. · `CONTACT` column: `@warique.eu` (Instagram link) / `Rotterdam, NL` (maps link) / `hello@warike.eu` (mailto). Bottom bar: `© {current year} Warique` and `Mateo · Lucas · Tiago`.

## Acceptance checklist
- All four routes render and survive hard refresh on the deployed host.
- All copy matches this spec exactly (including accents: sangüche, ají, Chicharrón).
- Headings animate line-by-line on first scroll into view; marquees loop seamlessly; images parallax subtly.
- Lighthouse: no console errors; images lazy-loaded below the fold; fingerprinted assets cached immutable, `index.html` no-cache.
