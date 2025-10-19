"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight } from "@/lib/animations";

type AnimationType = "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationVariants = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight
};

export function ScrollReveal({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  className = ""
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

