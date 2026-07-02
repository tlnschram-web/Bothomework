/**
 * Lima Day — opening day event data.
 * Doors: Sunday 5 July 2026, 12:00–18:00 Europe/Amsterdam (CEST, UTC+2).
 * Season: pop-up runs until the end of August 2026.
 */
export const EVENT = {
  name: 'Warique — Lima Day (Opening Day)',
  dateLabel: 'Sunday 5 July 2026',
  timeLabel: 'doors 12:00–18:00',
  cityLabel: 'Rotterdam, NL',
  openingUtcMs: Date.UTC(2026, 6, 5, 10, 0, 0), // 12:00 CEST
  endOfDayUtcMs: Date.UTC(2026, 6, 5, 16, 0, 0), // 18:00 CEST
  seasonEndUtcMs: Date.UTC(2026, 7, 31, 21, 59, 59), // Aug 31, 23:59 CEST
  amsterdamOpeningDate: '2026-07-05',
  mapsUrl: 'https://maps.app.goo.gl/XnipLsPD8tfHefqc6?g_st=ic',
  instagramUrl: 'https://instagram.com/warique.eu',
  instagramHandle: '@warique.eu',
  email: 'hello@warike.eu',
  perks: [
    'First 50 chicharrón sandwiches at an opening price.',
    'Grill running all afternoon.',
    'Chicha Morada on the house with any sandwich.',
    'Peruvian music. Cameras out. Lima energy.',
  ],
}

const gcal = new URLSearchParams({
  action: 'TEMPLATE',
  text: EVENT.name,
  dates: '20260705T100000Z/20260705T160000Z',
  location: 'Rotterdam, Netherlands',
  details:
    'Opening day of Warique, the Peruvian sangüche pop-up. First 50 chicharrón sandwiches at an opening price · grill running all afternoon · Chicha Morada on the house with any sandwich · Peruvian music. https://warike.eu',
})
export const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/render?${gcal.toString()}`
export const ICS_URL = '/lima-day.ics'

const amsDay = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' })

/**
 * Event phase for a given instant:
 *  'before'    — countdown is running
 *  'today'     — it's 5 July in Amsterdam, doors not open yet
 *  'doorsOpen' — Lima Day is happening right now (12:00–18:00)
 *  'open'      — season running (rest of 5 July evening → 31 Aug)
 *  'wrapped'   — season over
 */
export function getPhase(nowMs = Date.now()) {
  if (amsDay.format(new Date(nowMs)) === EVENT.amsterdamOpeningDate) {
    if (nowMs >= EVENT.endOfDayUtcMs) return 'open'
    if (nowMs >= EVENT.openingUtcMs) return 'doorsOpen'
    return 'today'
  }
  if (nowMs < EVENT.openingUtcMs) return 'before'
  if (nowMs <= EVENT.seasonEndUtcMs) return 'open'
  return 'wrapped'
}

/** Time remaining until doors open, split into units (all zeros once open). */
export function getRemaining(nowMs = Date.now()) {
  const total = Math.max(0, EVENT.openingUtcMs - nowMs)
  return {
    total,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total % 86_400_000) / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1_000),
  }
}
