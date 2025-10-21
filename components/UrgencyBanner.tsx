"use client";

import { motion } from "framer-motion";
import { urgencyIndicators } from "@/lib/stats";
import { useLocale } from '@/lib/locale-context';

export function UrgencyBanner() {
  const { dict } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="relative overflow-hidden rounded-full border border-urgency-amber/30 bg-gradient-to-r from-urgency-amber/10 via-urgency-amber-light/10 to-urgency-amber/10 px-6 py-3 shadow-amber-glow"
    >
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
           style={{ backgroundSize: "1000px 100%" }} />
      
      <div className="relative flex items-center justify-center gap-3 text-sm">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-urgency-amber opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-urgency-amber"></span>
        </span>
        <span className="font-semibold text-slate-900">
          {dict.urgencyBanner.only} {urgencyIndicators.slotsAvailable} {dict.urgencyBanner.consultationSlots}
        </span>
        <span className="hidden sm:inline text-slate-600">
          {dict.urgencyBanner.nextOpening} {urgencyIndicators.nextAvailability}
        </span>
      </div>
    </motion.div>
  );
}
