import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Neel Patel — CNC Set-Up Operator & Machinist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0c0e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(30,45,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,60,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Accent top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#f97316",
          }}
        />

        {/* Corner registration marks */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 24,
            height: 24,
            borderTop: "2px solid #f97316",
            borderLeft: "2px solid #f97316",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 24,
            height: 24,
            borderBottom: "2px solid #f97316",
            borderRight: "2px solid #f97316",
            opacity: 0.5,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Label */}
          <div
            style={{
              color: "#f97316",
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "monospace",
            }}
          >
            // CNC MACHINIST PORTFOLIO · BRAMPTON, ONTARIO
          </div>

          {/* Name */}
          <div
            style={{
              color: "#e2e8f0",
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              marginBottom: 16,
            }}
          >
            Neel Patel
          </div>

          {/* Title */}
          <div
            style={{
              color: "#94a3b8",
              fontSize: 24,
              fontFamily: "monospace",
              letterSpacing: "0.04em",
              marginBottom: 40,
            }}
          >
            CNC Set-Up Operator · CNC Machinist · Fabrication & Manufacturing
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Haas CNC Controls", "4-Axis CNC", "SolidWorks", "Precision Inspection", "GD&T"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    background: "#161b20",
                    border: "1px solid #252e38",
                    color: "#94a3b8",
                    fontSize: 13,
                    fontFamily: "monospace",
                    padding: "6px 14px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side — part number */}
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 80,
            textAlign: "right",
            color: "#546e7a",
            fontSize: 12,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div>PART NO. NP-0001</div>
          <div>TOL ±0.01 · REV A</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
