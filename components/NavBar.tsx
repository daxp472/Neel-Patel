"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { personal } from "@/data/resume";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Precision Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--accent)",
          zIndex: 100,
          boxShadow: "0 0 8px rgba(249,115,22,0.8)",
        }}
        aria-hidden="true"
      />

      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled
            ? "rgba(10, 12, 14, 0.94)"
            : "rgba(10, 12, 14, 0.6)",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid rgba(37, 46, 56, 0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo / Name */}
          <a
            href="#top"
            aria-label="Back to top"
            style={{ textDecoration: "none" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {personal.name}
                </span>
                <span className="status-dot-active" style={{ width: "5px", height: "5px" }} />
              </div>
              <span className="label-meta text-[0.62rem]">CNC SET-UP OPERATOR & MACHINIST</span>
            </div>
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={personal.resumePdf}
              download
              className="btn-outline"
              style={{ padding: "0.45rem 1rem", fontSize: "0.72rem" }}
              aria-label="Download Neel Patel's resume PDF"
            >
              ↓ Resume (PDF)
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--border)",
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(10, 12, 14, 0.98)",
              borderTop: "1px solid var(--border)",
              padding: "1.25rem 1.5rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "0.95rem" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.resumePdf}
              download
              className="btn-outline"
              style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              aria-label="Download resume PDF"
            >
              ↓ Download Resume (PDF)
            </a>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
        `}</style>
      </nav>
    </>
  );
}

