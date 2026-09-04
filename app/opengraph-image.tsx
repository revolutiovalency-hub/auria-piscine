import { ImageResponse } from "next/og";
import { site } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 96,
          background: "#0F2B2D",
          color: "#FBF8F4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 72, fontWeight: 600, letterSpacing: 4 }}>AUREA</span>
          <span style={{ marginTop: 10, fontSize: 22, letterSpacing: 16, color: "#C8D6D3" }}>PISCINES</span>
        </div>
        <span style={{ marginTop: 48, maxWidth: 820, fontSize: 30, color: "#E4DFD6" }}>{site.description}</span>
      </div>
    ),
    size,
  );
}
