"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { Aurora } from "shaders/react";

type AuroraProps = ComponentProps<typeof Aurora>;

const ShaderInner = dynamic(
  () =>
    import("shaders/react").then((mod) => {
      function AuroraShader(props: AuroraProps) {
        return (
          <mod.Shader>
            <mod.Aurora {...props} />
          </mod.Shader>
        );
      }
      return AuroraShader;
    }),
  { ssr: false },
);

export function AuroraOverlay(props: AuroraProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen opacity-60">
      <ShaderInner {...props} />
    </div>
  );
}
