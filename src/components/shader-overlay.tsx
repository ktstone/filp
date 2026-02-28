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

export { Aurora, LensFlare } from "shaders/react";

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
