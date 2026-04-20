import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chinmayi B Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at top left, rgba(255, 139, 106, 0.35), transparent 45%), radial-gradient(circle at bottom right, rgba(94, 168, 255, 0.35), transparent 45%), #f9f5ef",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>Chinmayi B</div>
        <div style={{ fontSize: 34, marginTop: 24, maxWidth: 980 }}>
          AI-driven systems and scalable software for real-world impact.
        </div>
      </div>
    ),
    size
  );
}
