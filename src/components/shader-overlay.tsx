"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const ShaderClient = dynamic(
  () =>
    import("shaders/react").then((mod) => {
      function Inner({ children }: { children: ReactNode }) {
        return <mod.Shader>{children}</mod.Shader>;
      }
      return Inner;
    }),
  { ssr: false },
);

import { Aurora, LensFlare } from "shaders/react";
export { Aurora, LensFlare };

/**
 * Generic wrapper — renders children inside a client-only <Shader>,
 * positioned as an absolute overlay with mix-blend-screen.
 */
export function ShaderOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen opacity-80">
      <ShaderClient>{children}</ShaderClient>
    </div>
  );
}

export function DefaultAurora({ seed }: { seed: number }) {
  return (
    <Aurora blendMode="linearDodge" colorA="#d9d9d9" colorB="#ffdfc2" colorC="#5d67c2" colorSpace="oklab" curtainCount={3} height={48} intensity={53} opacity={0.71} rayDensity={73} seed={seed} speed={6.7} waviness={0} />
  );
}

export function DefaultLensFlare() {
  return <LensFlare ghostChroma={0.64} ghostIntensity={0.79} haloChroma={0.57} haloIntensity={0.36} intensity={0.2} />;
}
