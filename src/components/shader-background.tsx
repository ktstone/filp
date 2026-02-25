"use client";

import { Shader, Dither, LinearGradient, SineWave } from "shaders/react";

export function ShaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Shader>
        <LinearGradient
          angle={180}
          colorA="#ef4850"
          colorB="#5ec4b6"
          colorSpace="oklab"
        />
        <Dither
          id="idmgijmh7s6y9u9f0ao"
          opacity={0}
          pixelSize={5}
          threshold={0.24}
          visible={false}
        >
          <SineWave
            amplitude={0.32}
            angle={309}
            frequency={1.1}
            softness={0.79}
            thickness={0.81}
          />
        </Dither>
        <LinearGradient
          colorA="#ef4850"
          colorB="#5ec4b6"
          maskSource="idmgijmh7s6y9u9f0ao"
        />
      </Shader>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
