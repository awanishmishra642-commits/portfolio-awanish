import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090a0c",
          borderRadius: 7,
          color: "#f4f4f0",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        AM
      </div>
    ),
    { ...size }
  );
}
