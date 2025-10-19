import { Variants } from "framer-motion";

// Reusable animation variants for consistency across components

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Hover effects
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const hoverGlow = {
  rest: { 
    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)" 
  },
  hover: { 
    boxShadow: "0 25px 50px -12px rgba(29, 78, 216, 0.6), 0 0 30px -10px rgba(29, 78, 216, 0.4)",
    transition: { duration: 0.3 }
  }
};

// Parallax configurations
export const parallaxConfig = {
  hero: {
    initial: { y: 0 },
    speed: -50 // pixels to move on scroll
  },
  slow: {
    initial: { y: 0 },
    speed: -30
  },
  fast: {
    initial: { y: 0 },
    speed: -80
  }
};

// Viewport configuration for intersection observer
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px"
};

export const viewportConfigLazy = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -50px 0px"
};

