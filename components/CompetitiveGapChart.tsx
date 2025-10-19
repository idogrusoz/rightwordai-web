"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { industryLeaderBehaviors } from "@/lib/stats";

export function CompetitiveGapChart() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900">Leaders vs. Laggards</h3>
        <p className="mt-2 text-slate-600">Industry behavior comparison</p>
      </div>

      <div className="space-y-4">
        {industryLeaderBehaviors.map((item, index) => (
          <div key={item.behavior} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-900">{item.behavior}</span>
              <span className="text-xs font-bold text-urgency-amber">{item.gap} gap</span>
            </div>
            
            <div className="relative h-12 rounded-lg bg-slate-100 overflow-hidden">
              {/* Leaders bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.leaders}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                className="absolute left-0 top-0 h-6 bg-gradient-to-r from-brand-base to-brand-light rounded-lg flex items-center justify-end pr-3"
              >
                <span className="text-xs font-bold text-white">{item.leaders}%</span>
              </motion.div>
              
              {/* Laggards bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.laggards}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                className="absolute left-0 bottom-0 h-6 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg flex items-center justify-end pr-3"
              >
                <span className="text-xs font-bold text-white">{item.laggards}%</span>
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-base" />
                Industry Leaders
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Laggards
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-urgency-amber/30 bg-urgency-amber/5 p-6 text-center">
        <p className="text-sm font-semibold text-slate-900">
          Which side of the gap is your company on?
        </p>
        <p className="mt-2 text-xs text-slate-600">
          The divide widens every quarter. Leaders accelerate while laggards fall further behind.
        </p>
      </div>
    </div>
  );
}

