import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chinmayi B Portfolio";
export const size = {
  width: 1200,
  height: 600,
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
          padding: "64px",
          background:
            "radial-gradient(circle at left, rgba(255, 209, 102, 0.42), transparent 42%), radial-gradient(circle at right, rgba(94, 168, 255, 0.3), transparent 46%), #f9f5ef",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>Chinmayi B</div>
        <div style={{ fontSize: 30, marginTop: 16, maxWidth: 980 }}>
          AI and software portfolio
        </div>
      </div>
    ),
    size
  );
}
