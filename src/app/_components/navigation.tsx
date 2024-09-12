"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import NavigationLink from "./navigation-link";

function Navigation() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [play, setPlay] = useState(false);

  const onPlay = () => {
    play ? setPlay(false) : setPlay(true);
    play ? audioRef.current?.pause() : audioRef.current?.play();
  };

  return (
    <nav className="z-10 fixed inset-x-8">
      <ul className="flex w-full relative pt-6 text-sm 2xl:text-lg">
        {/* <div className="absolute inset-0 z-[-1] bg-secondary opacity-80"></div> */}
        <NavigationLink label="Jiiin" href="/" pathname={pathname} />
        <li className="py-1 lg:flex hidden grow min-w-[25%] font-light text-tertiary border-t border-t-tertiary tracking-tight md:tracking-tighter leading-tight">
          Frontend developer &middot; UX / UI designer
          <button onClick={onPlay} className="px-2 cursor-pointer ml-1">
            {!play ? "♪" : "✕"}
          </button>
          <audio ref={audioRef}>
            <source src="/assets/audio/background.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </li>
        <NavigationLink label="About" href="/about" pathname={pathname} />
      </ul>
    </nav>
  );
}

export default Navigation;
