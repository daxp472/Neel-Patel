// SVG fallback for mobile — shows a technical drawing of the CNC part
export default function HeroCNC3DFallback() {
  return (
    <div
      aria-label="Technical drawing of a CNC machined hexagonal part"
      role="img"
      style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "min(260px, 80vw)", height: "min(260px, 80vw)" }}
      >
        {/* Blueprint grid background */}
        <defs>
          <pattern id="grid-small" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1e2d3d" strokeWidth="0.5"/>
          </pattern>
          <pattern id="grid-large" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#grid-small)"/>
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1e2d3d" strokeWidth="1"/>
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </radialGradient>
        </defs>

        <rect width="320" height="320" fill="url(#grid-large)"/>
        <rect width="320" height="320" fill="url(#glow)"/>

        {/* Center circle / bore indicator */}
        <circle cx="160" cy="160" r="120" stroke="#2a3540" strokeWidth="1" fill="none" strokeDasharray="4 4"/>

        {/* Hexagonal profile (top view) */}
        <polygon
          points="160,48 249,100 249,204 160,256 71,204 71,100"
          stroke="#94a3b8"
          strokeWidth="1.5"
          fill="#111518"
        />

        {/* Inner hex detail ring */}
        <polygon
          points="160,70 234,112 234,196 160,238 86,196 86,112"
          stroke="#2e3d4d"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />

        {/* Center bore */}
        <circle cx="160" cy="160" r="34" stroke="#f97316" strokeWidth="1.5" fill="#080c10"/>
        <circle cx="160" cy="160" r="2.5" fill="#f97316"/>

        {/* Machining groove rings */}
        <circle cx="160" cy="160" r="56" stroke="#2e3d4d" strokeWidth="1" fill="none"/>
        <circle cx="160" cy="160" r="76" stroke="#2e3d4d" strokeWidth="1" fill="none"/>
        <circle cx="160" cy="160" r="96" stroke="#2e3d4d" strokeWidth="0.8" fill="none"/>

        {/* Orange accent chamfer ring highlight */}
        <polygon
          points="160,48 249,100 249,204 160,256 71,204 71,100"
          stroke="#f97316"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.5"
        />

        {/* Dimension lines */}
        {/* Horizontal dimension */}
        <line x1="71" y1="280" x2="249" y2="280" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="71" y1="275" x2="71" y2="285" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="249" y1="275" x2="249" y2="285" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <text x="160" y="296" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#f97316" fillOpacity="0.7">⌀ 178.00</text>

        {/* Vertical dimension */}
        <line x1="40" y1="100" x2="40" y2="220" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="35" y1="100" x2="45" y2="100" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="35" y1="220" x2="45" y2="220" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.6"/>
        <text x="28" y="164" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#f97316" fillOpacity="0.7" transform="rotate(-90 28 164)">120.00</text>

        {/* Cross center marks */}
        <line x1="150" y1="160" x2="170" y2="160" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="160" y1="150" x2="160" y2="170" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.5"/>

        {/* Corner registration marks */}
        <g stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.3">
          <line x1="10" y1="10" x2="20" y2="10"/>
          <line x1="10" y1="10" x2="10" y2="20"/>
          <line x1="310" y1="10" x2="300" y2="10"/>
          <line x1="310" y1="10" x2="310" y2="20"/>
          <line x1="10" y1="310" x2="20" y2="310"/>
          <line x1="10" y1="310" x2="10" y2="300"/>
          <line x1="310" y1="310" x2="300" y2="310"/>
          <line x1="310" y1="310" x2="310" y2="300"/>
        </g>

        {/* Label */}
        <text x="160" y="16" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#546e7a" letterSpacing="2">CNC PART NO. NP-0001</text>
        <text x="160" y="308" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#546e7a" letterSpacing="1.5">TOLERANCE ±0.01 · MATERIAL: STEEL</text>
      </svg>
    </div>
  );
}
