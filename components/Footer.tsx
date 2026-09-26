import { personal } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600,
              color: "var(--text-primary)",
              fontSize: "0.9rem",
            }}
          >
            {personal.name}
          </p>
          <p className="label-meta" style={{ marginTop: "0.2rem" }}>
            {personal.locationDisplay}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href={`mailto:${personal.email}`}
            className="nav-link"
            aria-label="Send email to Neel Patel"
          >
            {personal.email}
          </a>
          <a
            href={personal.resumePdf}
            download
            className="btn-outline"
            style={{ padding: "0.35rem 0.875rem", fontSize: "0.68rem" }}
            aria-label="Download resume PDF"
          >
            ↓ Resume
          </a>
        </div>

        <p className="label-meta">
          © {year} {personal.name}
        </p>
      </div>
    </footer>
  );
}
