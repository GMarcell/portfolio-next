import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Grand Marcell | Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  /* ── Read the profile SVG and encode as a data URI ───────── */
  const svgPath = join(process.cwd(), "public/images/profile.svg");
  const svgContent = readFileSync(svgPath, "utf-8");
  const svgBase64 = Buffer.from(svgContent).toString("base64");
  const profileSrc = `data:image/svg+xml;base64,${svgBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          background: "#f8f4ed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* ── Left: Profile picture ──────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            borderRadius: 999,
            overflow: "hidden",
            border: "4px solid #b8862b",
            marginRight: 64,
            flexShrink: 0,
          }}
        >
          <img
            src={profileSrc}
            alt=""
            width={200}
            height={200}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* ── Right: Name + Role ──────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Accent bar */}
          <div
            style={{
              width: 80,
              height: 4,
              background: "#b8862b",
              marginBottom: 32,
              borderRadius: 2,
            }}
          />
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#1a1a2e",
              marginBottom: 12,
            }}
          >
            Grand
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#b8862b",
              marginBottom: 28,
            }}
          >
            Marcell
          </div>
          {/* Role */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#6b6152",
              letterSpacing: "0.02em",
            }}
          >
            Fullstack Developer · Next.js & React
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
