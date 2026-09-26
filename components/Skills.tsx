"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/resume";
import SectionDivider from "./SectionDivider";

const GDT_LEGEND = [
  { sym: "⌀", name: "Diameter" },
  { sym: "⌖", name: "True Position" },
  { sym: "⊙", name: "Concentricity" },
  { sym: "⏥", name: "Flatness" },
  { sym: "⟂", name: "Perpendicularity" },
  { sym: "◎", name: "Coaxiality" },
  { sym: "△", name: "Runout" },
];

function SkillCategoryPanel({
  category,
  index,
}: {
  category: (typeof skills)[0];
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="spec-card group"
      style={{ height: "100%" }}
    >
      {/* Corner bracket accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Category header */}
      <div className="spec-card-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--text-primary)",
            }}
          >
            {category.label}
          </h3>
          <span className="label-meta text-[0.65rem] px-1.5 py-0.5 bg-[var(--bg-base)] border border-[var(--border)]">
            {category.code}
          </span>
        </div>
        <div
          style={{
            marginTop: "0.4rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "var(--accent)",
              transform: "rotate(45deg)",
              display: "inline-block",
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <span className="label-meta text-[0.65rem]">
            {category.skills.length} VERIFIED CAPABILITIES
          </span>
        </div>
      </div>

      {/* Skills chip grid */}
      <div
        className="spec-card-body"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.45rem",
        }}
      >
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.05 + i * 0.02 }}
            className="skill-chip"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? skills
      : skills.filter((c) => c.id === activeFilter);

  return (
    <section
      id="skills"
      className="section-wrap"
      aria-labelledby="skills-heading"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        className="blueprint-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.35 }}
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
          style={{ marginBottom: "2.5rem" }}
        >
          <span className="label-accent" style={{ display: "block", marginBottom: "0.5rem" }}>
            // SECTION 03
          </span>
          <h2
            id="skills-heading"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Skills & Technical Capabilities
          </h2>
          <SectionDivider label="TECHNICAL SPECIFICATION · 5 CATEGORIES · 45+ SKILLS" />
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Skill categories">
          <button
            onClick={() => setActiveFilter("all")}
            role="tab"
            aria-selected={activeFilter === "all"}
            className={`font-mono text-[0.72rem] px-3.5 py-1.5 transition-all uppercase tracking-wider cursor-pointer border ${
              activeFilter === "all"
                ? "bg-[var(--accent)] text-black font-semibold border-[var(--accent)] shadow-[0_0_12px_rgba(249,115,22,0.35)]"
                : "bg-[var(--bg-panel)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-white"
            }`}
          >
            All Specs ({skills.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`font-mono text-[0.72rem] px-3.5 py-1.5 transition-all uppercase tracking-wider cursor-pointer border ${
                activeFilter === cat.id
                  ? "bg-[var(--accent)] text-black font-semibold border-[var(--accent)] shadow-[0_0_12px_rgba(249,115,22,0.35)]"
                  : "bg-[var(--bg-panel)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-white"
              }`}
            >
              {cat.label} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Bento-style grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.25rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, i) => (
              <SkillCategoryPanel key={cat.id} category={cat} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GD&T symbol decorative & educational strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: "3.5rem",
            padding: "1.25rem",
            background: "rgba(17, 21, 24, 0.6)",
            border: "1px solid var(--border)",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span className="label-accent font-semibold text-[0.7rem]">
            GD&T COMPLIANCE
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            {GDT_LEGEND.map((item) => (
              <div
                key={item.sym}
                className="flex items-center gap-1.5 font-mono text-[0.72rem] text-[var(--text-secondary)] group cursor-default"
                title={item.name}
              >
                <span className="text-[var(--accent)] font-bold text-sm group-hover:scale-125 transition-transform">
                  {item.sym}
                </span>
                <span className="text-[0.68rem] text-[var(--text-meta)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <span className="label-meta hidden md:inline ml-auto text-[0.65rem]">
            ASME Y14.5 / ISO 1101 TOLERANCE STANDARDS
          </span>
        </motion.div>
      </div>
    </section>
  );
}

