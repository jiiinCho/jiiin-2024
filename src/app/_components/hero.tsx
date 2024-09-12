"use client";

import Image from "next/image";
import { useState } from "react";
import { useReducedMotion } from "../_hooks/useReducedMotion";

export const Hero = () => {
  const [play, setPlay] = useState(false);
  const noMotion = useReducedMotion();

  return (
    <div
      className="fixed right-0 bottom-0 "
      onMouseEnter={() => !noMotion && setPlay(true)}
      onMouseLeave={() => !noMotion && setPlay(false)}
    >
      <Image
        src={
          play ? "/assets/hero/background.gif" : "/assets/hero/background.png"
        }
        alt="Hero image"
        className={"object-cover"}
        width={832}
        height={832}
        unoptimized
      />
    </div>
  );
};
