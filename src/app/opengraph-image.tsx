import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

export const alt = "Stavya Srinath — Robotics Engineer & Student Leader";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f0f14 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "white",
          position: "relative",
          padding: "60px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "150px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            right: "200px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "0 0 24px",
            textAlign: "center",
          }}
        >
          STAVYA SRINATH
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#a855f7",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ROBOTICS ENGINEER
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#22d3ee",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ELECTRICAL SYSTEMS
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#f472b6",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            STEM EDUCATION
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {siteUrl.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}