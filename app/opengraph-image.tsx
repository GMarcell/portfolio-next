import { ImageResponse } from "next/og";

export const alt = "Grand Marcell | Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f8f4ed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "#b8862b",
            marginBottom: 40,
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
            marginBottom: 16,
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
            marginBottom: 32,
          }}
        >
          Marcell
        </div>
        {/* Role */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#6b6152",
            letterSpacing: "0.02em",
          }}
        >
          Frontend Developer · Next.js & React
        </div>
      </div>
    ),
    { ...size }
  );
}
