"use client";

import { motion } from "framer-motion";
import { experience, type ExperienceItem } from "@/data/resume";
import SectionDivider from "./SectionDivider";

// Tag badges extracted directly from verified resume experience
const ROLE_TAGS: Record<string, string[]> = {
  metacut: ["Trumpf TLF 4000", "Baykal APHS 31160", "SolidWorks & AutoCAD", "GD&T First-Off", "Sheet Metal"],
  corrtech: ["4-Axis CNC Milling", "Haas Controls", "Precision Tooling", "Micrometers & Calipers", "Setup & PM"],
  pandavas: ["CNC / VMC Supervision", "Process Optimization", "Quality Assurance", "Tooling & Fixtures"],
};

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const tags = ROLE_TAGS[item.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      style={{ position: "relative", paddingLeft: "2.5rem" }}
    >
      {/* Timeline diamond node with animated pulse ring */}
      <div
        style={{
          position: "absolute",
          left: "-5px",
          top: "1.75rem",
          width: "10px",
          height: "10px",
          background: "var(--accent)",
          transform: "rotate(45deg)",
          zIndex: 2,
          boxShadow: "0 0 10px rgba(249,115,22,0.6)",
        }}
        aria-hidden="true"
      />

      {/* Spec-plate card */}
      <div className="spec-card group">
        {/* Top corner accent */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Header block — machine data plate style */}
        <div className="spec-card-header">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <div>
              <div className="label-accent flex items-center gap-2" style={{ marginBottom: "0.25rem" }}>
                <span>{item.company}</span>
                {item.location && (
                  <span style={{ color: "var(--text-meta)" }}>
                    · {item.location}
                  </span>
                )}
                <span className="text-[0.6rem] px-1.5 py-0.2 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.25)] text-[var(--accent)]">
                  VERIFIED EXP.
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "var(--text-primary)",
                }}
              >
                {item.role}
              </h3>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                padding: "0.2rem 0.6rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
              }}
            >
              {item.dateRange}
            </div>
          </div>

          {/* Quick Equipment / Tech Badges */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-[var(--border)]">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.65rem] px-2 py-0.5 bg-[var(--bg-base)] border border-[var(--border-light)] text-[var(--text-secondary)] group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bullets */}
        <div className="spec-card-body">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {item.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    marginTop: "0.18rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  ▸
                </span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-wrap"
      aria-labelledby="experience-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Blueprint grid overlay */}
      <div
        className="blueprint-dots"
        style={{ position: "absolute", inset: 0, opacity: 0.3 }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="label-accent" style={{ display: "block", marginBottom: "0.5rem" }}>
            // SECTION 02
          </span>
          <h2
            id="experience-heading"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Professional Experience
          </h2>
          <SectionDivider label="WORK HISTORY · 3 POSITIONS" />
        </motion.div>

        {/* Timeline */}
        <div className="timeline-track">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {experience.map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

