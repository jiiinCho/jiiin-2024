"use client";

import Image from "next/image";
import { useState } from "react";

export const Hero = () => {
  const [play, setPlay] = useState(false);

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const noMotion = !mediaQuery || mediaQuery.matches;

  return (
    <div
      className="absolute right-0 bottom-0 z-0"
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
