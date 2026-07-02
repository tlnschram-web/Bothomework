const C = { yellow: '#ffd426', ink: '#0b0b0b' }

// generate a zigzag ring path along an arc (for the headdress + earrings)
function zigzagArc(cx, cy, rOuter, rInner, startDeg, endDeg, teeth) {
  const pts = []
  for (let i = 0; i <= teeth * 2; i++) {
    const a = ((startDeg + ((endDeg - startDeg) * i) / (teeth * 2)) * Math.PI) / 180
    const r = i % 2 === 0 ? rOuter : rInner
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy - r * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

function starRing(cx, cy, rOuter, rInner, teeth) {
  const pts = []
  for (let i = 0; i <= teeth * 2; i++) {
    const a = (i / (teeth * 2)) * Math.PI * 2
    const r = i % 2 === 0 ? rOuter : rInner
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

function Earring({ cx, cy }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={23} fill={C.yellow} stroke={C.ink} strokeWidth={7} />
      <polyline
        points={starRing(cx, cy, 19, 12, 9)}
        fill="none"
        stroke={C.ink}
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      <ellipse cx={cx} cy={cy} rx={8} ry={10} fill={C.yellow} stroke={C.ink} strokeWidth={5} />
    </g>
  )
}

export default function Logo({ className = 'h-12 w-12' }) {
  return (
    <svg viewBox="0 0 240 250" className={className} role="img" aria-label="Warique — Tumi mask logo">
      {/* earrings sit behind the face */}
      <Earring cx={44} cy={196} />
      <Earring cx={196} cy={196} />
      {/* ears */}
      <path d="M52 168 q-14 10 -6 30 q10 14 24 6 Z" fill={C.yellow} stroke={C.ink} strokeWidth={6} />
      <path d="M188 168 q14 10 6 30 q-10 14 -24 6 Z" fill={C.yellow} stroke={C.ink} strokeWidth={6} />
      {/* face */}
      <ellipse cx={120} cy={166} rx={64} ry={57} fill={C.yellow} stroke={C.ink} strokeWidth={7} />
      {/* headdress */}
      <path
        d="M14 140 A 106 106 0 0 1 226 140 L 202 152 A 84 84 0 0 0 38 152 Z"
        fill={C.yellow}
        stroke={C.ink}
        strokeWidth={7}
        strokeLinejoin="round"
      />
      <path d="M38 152 A 84 84 0 0 1 202 152 L 178 146 A 60 60 0 0 0 62 146 Z" fill={C.yellow} stroke={C.ink} strokeWidth={0} />
      {/* zigzag band inside headdress */}
      <polyline
        points={zigzagArc(120, 146, 96, 74, 14, 166, 11)}
        fill="none"
        stroke={C.ink}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {/* inner sun disc over forehead */}
      <path d="M62 146 A 58 58 0 0 1 178 146 Z" fill={C.yellow} stroke={C.ink} strokeWidth={7} strokeLinejoin="round" />
      {/* rainbow arcs on forehead */}
      <path d="M83 150 A 37 37 0 0 1 157 150" fill="none" stroke={C.ink} strokeWidth={7} strokeLinecap="round" />
      <path d="M95 152 A 25 25 0 0 1 145 152" fill="none" stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      {/* brows */}
      <path d="M64 158 q10 -12 28 -8" fill="none" stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      <path d="M176 158 q-10 -12 -28 -8" fill="none" stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      {/* eyes */}
      <circle cx={90} cy={172} r={16} fill={C.yellow} stroke={C.ink} strokeWidth={6} />
      <circle cx={90} cy={172} r={6.5} fill="none" stroke={C.ink} strokeWidth={4} />
      <circle cx={150} cy={172} r={16} fill={C.yellow} stroke={C.ink} strokeWidth={6} />
      <circle cx={150} cy={172} r={6.5} fill="none" stroke={C.ink} strokeWidth={4} />
      {/* nose */}
      <path d="M120 152 L108 196 L132 196 Z" fill={C.yellow} stroke={C.ink} strokeWidth={6} strokeLinejoin="round" />
      {/* mouth */}
      <ellipse cx={120} cy={212} rx={15} ry={6.5} fill={C.yellow} stroke={C.ink} strokeWidth={5} />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span
      className={`font-script text-chicha ${className}`}
      style={{ textShadow: '0.06em 0.06em 0 #0b0b0b' }}
    >
      Warique
    </span>
  )
}
