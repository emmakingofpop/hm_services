"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}