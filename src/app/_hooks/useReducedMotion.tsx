import { useState, useEffect } from "react";

export const useReducedMotion = (): boolean => {
  const [noMotion, setNoMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setNoMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setNoMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return noMotion;
};
