"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { personal, heroSummary } from "@/data/resume";
import HeroCNC3DFallback from "./HeroCNC3DFallback";

const HeroCNC3D = lazy(() => import("./HeroCNC3D"));

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// Precision Count-Up Component
function CountStat({
  target,
  suffix = "",
  label,
  sublabel,
}: {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-3 bg-[var(--bg-panel)] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)] transition-colors">
      <div className="label-meta text-[0.62rem] mb-1">{sublabel}</div>
      <div className="font-mono text-xl md:text-2xl font-bold text-[var(--accent)] flex items-baseline gap-0.5">
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-[0.75rem] text-[var(--text-secondary)] font-mono mt-0.5">{label}</div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [coords, setCoords] = useState({ x: 124.500, y: -48.250, z: 12.000, feed: 1200 });
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseX(x);
    setMouseY(y);

    // Dynamic DRO readout calculation
    const calcX = (150 + x * 75).toFixed(3);
    const calcY = (-50 + y * 50).toFixed(3);
    const calcFeed = Math.round(1000 + Math.abs(x * y) * 800);
    setCoords({
      x: parseFloat(calcX),
      y: parseFloat(calcY),
      z: parseFloat((12.000 + (x + y) * 2).toFixed(3)),
      feed: calcFeed,
    });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      aria-label="Hero — Neel Patel, CNC Set-Up Operator and Machinist"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "72px",
        paddingBottom: "3rem",
      }}
    >
      {/* Blueprint grid background */}
      <div
        className="blueprint-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.45 }}
        aria-hidden="true"
      />

      {/* Radial orange ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          transform: "translateY(-50%)",
          width: "650px",
          height: "650px",
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Registration crosshairs */}
      <div className="reg-mark reg-mark-tl" aria-hidden="true" />
      <div className="reg-mark reg-mark-tr" aria-hidden="true" />
      <div className="reg-mark reg-mark-bl" aria-hidden="true" />
      <div className="reg-mark reg-mark-br" aria-hidden="true" />

      {/* Main Content Grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
          gap: isMobile ? "2.5rem" : "3.5rem",
          alignItems: "center",
        }}
      >
        {/* Left Column — Bio & Specs */}
        <div>
          {/* Top Status Strip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <div className="status-indicator">
              <span className="status-dot-active" />
              <span>STATUS: AVAILABLE FOR ROLES</span>
            </div>
            <span className="label-meta">// {personal.locationDisplay}</span>
            <span className="label-accent hidden sm:inline">// REF: NP-001</span>
          </motion.div>

          {/* Name H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              letterSpacing: "-0.025em",
              marginBottom: "0.75rem",
            }}
          >
            {personal.name}
          </motion.h1>

          {/* Role Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {personal.title.split(" | ").map((part, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.72rem, 1.4vw, 0.84rem)",
                  color: i === 0 ? "var(--accent)" : "var(--text-secondary)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.6rem",
                  background: i === 0 ? "rgba(249,115,22,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === 0 ? "rgba(249,115,22,0.3)" : "var(--border)"}`,
                }}
              >
                {part}
              </span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.02rem",
              lineHeight: 1.7,
              maxWidth: "540px",
              marginBottom: "2rem",
            }}
          >
            {heroSummary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
          >
            <a href="#experience" className="btn-primary" aria-label="View work experience">
              View My Work ↓
            </a>
            <a
              href={personal.resumePdf}
              download
              className="btn-outline"
              aria-label="Download Neel Patel's resume as PDF"
            >
              ↓ Download Resume (PDF)
            </a>
          </motion.div>

          {/* Stat Specs Row with Count-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              maxWidth: "540px",
            }}
          >
            <CountStat target={4} suffix="+ Yrs" label="CNC Machining" sublabel="FIELD EXP." />
            <CountStat target={4} suffix="-Axis" label="Milling & Turning" sublabel="OPERATION" />
            <CountStat target={100} suffix="%" label="Blueprint & GD&T" sublabel="PRECISION" />
          </motion.div>
        </div>

        {/* Right Column — 3D Machined Component with DRO HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Machine Part Frame Container */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "300px" : "440px",
              position: "relative",
              background: "rgba(17, 21, 24, 0.4)",
              border: "1px solid var(--border)",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            {/* Top Frame Info */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "14px",
                right: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              <span className="label-meta" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>
                PART: NP-HEX-01 · 4-AXIS INDEX
              </span>
              <span className="label-meta" style={{ fontSize: "0.62rem" }}>
                G54 WCS ACTIVE
              </span>
            </div>

            {/* Corner Bracket Accents */}
            {[
              { top: "6px", left: "6px", border: "2px 0 0 2px" },
              { top: "6px", right: "6px", border: "2px 2px 0 0" },
              { bottom: "6px", left: "6px", border: "0 0 2px 2px" },
              { bottom: "6px", right: "6px", border: "0 2px 2px 0" },
            ].map((corner, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: corner.top,
                  bottom: corner.bottom,
                  left: corner.left,
                  right: corner.right,
                  width: "12px",
                  height: "12px",
                  borderColor: "var(--accent)",
                  borderStyle: "solid",
                  borderWidth: corner.border,
                  zIndex: 10,
                  pointerEvents: "none",
                  opacity: 0.8,
                }}
                aria-hidden="true"
              />
            ))}

            {/* 3D Canvas / SVG Fallback */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "transparent",
              }}
            >
              {isMobile ? (
                <HeroCNC3DFallback />
              ) : (
                <Suspense fallback={<HeroCNC3DFallback />}>
                  <HeroCNC3D mouseX={mouseX} mouseY={mouseY} />
                </Suspense>
              )}
            </div>

            {/* Bottom Spec Metadata inside Frame */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "14px",
                right: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              <span className="label-meta" style={{ fontSize: "0.62rem" }}>
                TOLERANCE: ±0.01mm
              </span>
              <span className="label-meta" style={{ fontSize: "0.62rem" }}>
                HAAS / MITSUBISHI ISO G-CODE
              </span>
            </div>
          </div>

          {/* Live CNC Digital Readout (DRO) Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="cnc-dro-hud"
            style={{
              marginTop: "0.75rem",
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="label-meta text-[0.62rem]">X:</span>{" "}
              <span className="dro-axis-val">{coords.x >= 0 ? `+${coords.x.toFixed(3)}` : coords.x.toFixed(3)}</span>
            </div>
            <div>
              <span className="label-meta text-[0.62rem]">Y:</span>{" "}
              <span className="dro-axis-val">{coords.y >= 0 ? `+${coords.y.toFixed(3)}` : coords.y.toFixed(3)}</span>
            </div>
            <div>
              <span className="label-meta text-[0.62rem]">Z:</span>{" "}
              <span className="dro-axis-val">{coords.z >= 0 ? `+${coords.z.toFixed(3)}` : coords.z.toFixed(3)}</span>
            </div>
            <div>
              <span className="label-meta text-[0.62rem]">FEED:</span>{" "}
              <span className="dro-axis-val">{coords.feed} mm/m</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          position: "absolute",
          bottom: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <span className="label-meta" style={{ fontSize: "0.6rem" }}>
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: "2px",
            height: "22px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

