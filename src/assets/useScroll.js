import { useEffect, useState, useRef } from "react";

export const useScroll = () => {
  const elementRef = useRef();

  const [atTop, setAtTop] = useState(true);

  const handlePosY = () => {
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const posY = rect.top + window.scrollY;

    if (element) setAtTop(posY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosY);
    return () => {
      window.removeEventListener("scroll", handlePosY);
    };
  }, []);

  return [elementRef, atTop];
};
