import { useState, useEffect } from "react";

type ScreenType = "mobile" | "tablet" | "desktop";

const BREAKPOINTS = {
  mobile: "(max-width: 768px)",
  tablet: "(min-width: 769px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)",
};

const useBreakpoint = (screen: ScreenType) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const query = BREAKPOINTS[screen] || screen;
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    setIsMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [screen]);

  return isMatch;
};

export default useBreakpoint;
