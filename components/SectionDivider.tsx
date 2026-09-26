// Dimension-line style SVG divider — replaces plain <hr>
export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginTop: "1rem",
      }}
    >
      {/* Left arrowhead */}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polygon points="10,5 0,0 0,10" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
      </svg>

      {/* Left line */}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to left, var(--border-light), transparent)",
        }}
      />

      {/* Center label */}
      {label && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            color: "var(--text-meta)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            padding: "0.15rem 0.5rem",
            border: "1px solid var(--border)",
          }}
        >
          {label}
        </span>
      )}

      {/* Right line */}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to right, var(--border-light), transparent)",
        }}
      />

      {/* Right arrowhead */}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polygon points="0,5 10,0 10,10" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}
