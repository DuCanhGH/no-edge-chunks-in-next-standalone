import { ImageResponse } from "@vercel/og";
import type { PageConfig } from "next";

export const config: PageConfig = {
  runtime: "experimental-edge",
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 128,
          background: "lavender",
        }}
      >
        Hello world!
      </div>
    )
  );
}
