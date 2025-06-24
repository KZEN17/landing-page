"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export const useScreenSize = () => {
  const isXSmallScreen = useMediaQuery("(max-width:640px)");
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const isMediumScreen = useMediaQuery("(max-width:976px)");
  const isLargeScreen = useMediaQuery("(max-width:1200px)");
  const isXLargeScreen = useMediaQuery("(max-width:1500px)");

  return {
    isXSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isXLargeScreen,
  };
};
