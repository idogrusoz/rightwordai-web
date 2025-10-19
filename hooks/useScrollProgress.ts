"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScroll = documentHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
}

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollY, { passive: true });
    updateScrollY(); // Initial value

    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  return scrollY;
}

