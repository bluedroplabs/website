import { useEffect, useState } from "react";

export const useResponsiveLimit = (baseLimit: number) => {
  const [effectiveLimit, setEffectiveLimit] = useState<number>(baseLimit);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLimitForViewport = () => {
      const width = window.innerWidth;
      const isMdViewport = width >= 768 && width < 1024;

      setEffectiveLimit(isMdViewport ? 11 : baseLimit);
    };

    updateLimitForViewport();
    window.addEventListener("resize", updateLimitForViewport);

    return () => {
      window.removeEventListener("resize", updateLimitForViewport);
    };
  }, [baseLimit]);

  return effectiveLimit;
};
