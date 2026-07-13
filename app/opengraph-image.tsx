import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/hero-awanish.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#090a0c",
          color: "#f4f4f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 60px",
            flex: 1.2,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#88adff", fontWeight: 700, marginBottom: 22 }}>
            AWANISH MISHRA
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 600, lineHeight: 1.08, letterSpacing: -2 }}>
            Designing thoughtful technology for the real world.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#aab1bc", marginTop: 28 }}>
            Full-stack &amp; IoT Engineer · Gwalior, India
          </div>
        </div>
        <div style={{ display: "flex", flex: 0.85, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={520}
            height={630}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
