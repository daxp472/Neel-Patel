"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { education, personal } from "@/data/resume";
import SectionDivider from "./SectionDivider";

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="spec-card group"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] opacity-50 group-hover:opacity-100 transition-opacity" />

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
              <span>{item.institution}</span>
              <span className="text-[0.6rem] px-1.5 py-0.2 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.25)] text-[var(--accent)]">
                ACCREDITED
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
              }}
            >
              {item.credential}
            </h3>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                marginTop: "0.25rem",
              }}
            >
              {item.location}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-meta)",
                letterSpacing: "0.06em",
              }}
            >
              {item.dateRange}
            </div>
            <div
              style={{
                marginTop: "0.4rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.2rem 0.55rem",
                border: `1px solid ${item.status === "in-progress" ? "var(--accent)" : "var(--border-light)"}`,
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color:
                  item.status === "in-progress"
                    ? "var(--accent)"
                    : "var(--text-meta)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background:
                  item.status === "in-progress"
                    ? "rgba(249,115,22,0.08)"
                    : "transparent",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background:
                    item.status === "in-progress"
                      ? "var(--accent)"
                      : "var(--text-meta)",
                  animation:
                    item.status === "in-progress" ? "pulse 1.5s infinite" : "none",
                }}
              />
              {item.status === "in-progress" ? "In Progress" : "Completed"}
            </div>
          </div>
        </div>
      </div>

      <div className="spec-card-body">
        <div className="label-meta" style={{ marginBottom: "0.6rem" }}>
          CORE CURRICULUM & SKILLS
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
          {item.subjects.map((subject) => (
            <span key={subject} className="skill-chip">
              {subject}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationContact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="education"
      className="section-wrap"
      aria-labelledby="education-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      <div
        className="blueprint-dots"
        style={{ position: "absolute", inset: 0, opacity: 0.25 }}
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
        {/* Education heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="label-accent" style={{ display: "block", marginBottom: "0.5rem" }}>
            // SECTION 04
          </span>
          <h2
            id="education-heading"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Education & Qualifications
          </h2>
          <SectionDivider label="CREDENTIALS · 2 INSTITUTIONS" />
        </motion.div>

        {/* Education cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
        >
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Contact section */}
        <div
          id="contact"
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "4rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <span className="label-accent" style={{ display: "block", marginBottom: "0.5rem" }}>
              // GET IN TOUCH
            </span>
            <h2
              id="contact-heading"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Direct Contact & Inquiries
            </h2>
            <SectionDivider label="COMMUNICATION CHANNELS · DIRECT ACCESS" />
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Email Card with Copy button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="spec-card group relative"
              style={{ padding: "1.5rem" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="label-accent">EMAIL CHANNEL</span>
                <button
                  onClick={() => copyToClipboard(personal.email, "email")}
                  className="font-mono text-[0.65rem] px-2 py-0.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-white cursor-pointer transition-colors"
                >
                  {copiedField === "email" ? "COPIED ✓" : "COPY"}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="font-mono text-[0.92rem] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block break-all"
                aria-label={`Email Neel Patel at ${personal.email}`}
              >
                {personal.email}
              </a>
              <div className="text-[0.7rem] text-[var(--text-meta)] font-mono mt-2">
                Fastest response for job inquiries
              </div>
            </motion.div>

            {/* Phone Card with Copy button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="spec-card group relative"
              style={{ padding: "1.5rem" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="label-accent">PHONE / DIRECT LINE</span>
                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="font-mono text-[0.65rem] px-2 py-0.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-white cursor-pointer transition-colors"
                >
                  {copiedField === "phone" ? "COPIED ✓" : "COPY"}
                </button>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\D/g, "")}`}
                className="font-mono text-[0.95rem] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block"
                aria-label={`Call Neel Patel at ${personal.phone}`}
              >
                {personal.phone}
              </a>
              <div className="text-[0.7rem] text-[var(--text-meta)] font-mono mt-2">
                Available during standard business hours
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="spec-card relative"
              style={{ padding: "1.5rem" }}
            >
              <div className="label-accent mb-2">LOCATION BASE</div>
              <div className="font-mono text-[0.95rem] text-[var(--text-primary)]">
                {personal.location}
              </div>
              <div className="text-[0.7rem] text-[var(--text-meta)] font-mono mt-2">
                Greater Toronto Area (GTA) & On-Site Availability
              </div>
            </motion.div>
          </div>

          {/* Download CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={personal.resumePdf}
              download
              className="btn-primary"
              aria-label="Download Neel Patel's full resume as PDF"
            >
              ↓ Download Full Resume (PDF)
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-outline"
              aria-label="Send email to Neel Patel"
            >
              ✉ Send Direct Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

