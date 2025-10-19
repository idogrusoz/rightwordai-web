"use client";

import { motion } from "framer-motion";
import { fomoMessages } from "@/lib/stats";

export function FOMOTicker() {
  // Duplicate messages for seamless loop
  const messages = [...fomoMessages, ...fomoMessages];

  return (
    <div className="relative overflow-hidden bg-slate-900 py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -50 * fomoMessages.length + "%"]
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/90">{message}</span>
            <span className="h-1 w-1 rounded-full bg-urgency-amber" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

