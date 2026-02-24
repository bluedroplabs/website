import { useEffect, useRef } from "react";

export const useTypewriter = (
  containerRef: React.RefObject<HTMLElement | null>,
  options?: {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
  },
) => {
  const {
    typingSpeed = 100,
    deletingSpeed = 100,
    pauseTime = 1000,
  } = options || {};

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initTimeout = setTimeout(() => {
      const typewriterElements =
        containerRef.current?.querySelectorAll<HTMLElement>(".typewriter");

      if (!typewriterElements || typewriterElements.length === 0) return;

      const texts: string[] = [];
      typewriterElements.forEach((el) => {
        texts.push(el.textContent || "");
        el.textContent = "";
        el.style.display = "none";
        el.style.visibility = "hidden";
      });

      let currentElement = typewriterElements[0];
      currentElement.style.display = "inline";
      currentElement.style.visibility = "visible";

      const typing = (index: number) => {
        const text = texts[index];
        let textIndex = 0;

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          if (textIndex <= text.length) {
            if (currentElement) {
              const textToShow = text.substring(0, textIndex);
              currentElement.textContent = textToShow;
              if (textToShow === "") {
                currentElement.style.borderRight = "none";
                currentElement.style.backgroundColor = "transparent";
                currentElement.style.paddingRight = "0";
              } else {
                currentElement.style.borderRight = "";
                currentElement.style.backgroundColor = "";
                currentElement.style.paddingRight = "";
              }
            }
            textIndex++;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setTimeout(() => {
              deleting(index);
            }, pauseTime);
          }
        }, typingSpeed);
      };

      const deleting = (index: number) => {
        const text = texts[index];
        let textIndex = text.length;

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          if (textIndex >= 0) {
            if (currentElement) {
              const textToShow = text.substring(0, textIndex);
              currentElement.textContent = textToShow;
              if (textToShow === "") {
                currentElement.style.borderRight = "none";
                currentElement.style.backgroundColor = "transparent";
                currentElement.style.paddingRight = "0";
              } else {
                currentElement.style.borderRight = "";
                currentElement.style.backgroundColor = "";
                currentElement.style.paddingRight = "";
              }
            }
            textIndex--;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            const nextIndex = (index + 1) % texts.length;
            const nextElement = typewriterElements[nextIndex];

            if (currentElement) {
              currentElement.style.display = "none";
              currentElement.style.visibility = "hidden";
              currentElement.style.borderRight = "";
              currentElement.style.backgroundColor = "transparent";
              currentElement.style.paddingRight = "0";
            }
            currentElement = nextElement;
            currentElement.style.display = "inline";
            currentElement.style.visibility = "visible";
            currentElement.style.backgroundColor = "transparent";
            currentElement.style.paddingRight = "0";

            setTimeout(() => {
              typing(nextIndex);
            }, 300);
          }
        }, deletingSpeed);
      };

      typing(0);
    }, 50);

    return () => {
      clearTimeout(initTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [containerRef, typingSpeed, deletingSpeed, pauseTime]);
};
