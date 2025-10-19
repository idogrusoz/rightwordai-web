"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { useInView } from "@/hooks/useInView";
import { scaleIn } from "@/lib/animations";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  context?: string;
  emphasis?: "urgency" | "success" | "warning";
  delay?: number;
}

const emphasisStyles = {
  urgency: {
    gradient: "from-urgency-red to-urgency-amber",
    glow: "shadow-amber-glow",
    border: "border-urgency-amber/30"
  },
  success: {
    gradient: "from-success-base to-success-light",
    glow: "shadow-glow",
    border: "border-success-base/30"
  },
  warning: {
    gradient: "from-urgency-amber to-urgency-amber-light",
    glow: "shadow-amber-glow",
    border: "border-urgency-amber/30"
  }
};

export function StatCard({ 
  value, 
  suffix = "", 
  label, 
  context,
  emphasis = "success",
  delay = 0
}: StatCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const styles = emphasisStyles[emphasis];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleIn}
      transition={{ delay }}
      className={`relative overflow-hidden rounded-[1.75rem] border ${styles.border} bg-white p-8 ${styles.glow} transition-all hover:scale-105`}
    >
      {/* Gradient overlay */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5`} />
      
      <div className="relative">
        <div className={`mb-2 text-5xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}>
          <CountUp end={value} suffix={suffix} />
        </div>
        <p className="text-base font-semibold text-slate-900">{label}</p>
        {context && (
          <p className="mt-3 text-sm text-slate-600 italic">{context}</p>
        )}
      </div>
    </motion.div>
  );
}

