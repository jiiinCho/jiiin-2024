"use client";

import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="absolute right-0 bottom-0 z-0"
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
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

export default Hero;
