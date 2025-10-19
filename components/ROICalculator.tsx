"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface ROIMetrics {
  teamSize: number;
  avgHourlyCost: number;
  hoursSpentOnManualWork: number;
}

export function ROICalculator() {
  const [metrics, setMetrics] = useState<ROIMetrics>({
    teamSize: 10,
    avgHourlyCost: 50,
    hoursSpentOnManualWork: 10
  });

  const calculations = {
    weeklyWaste: metrics.teamSize * metrics.hoursSpentOnManualWork * metrics.avgHourlyCost,
    monthlyWaste: metrics.teamSize * metrics.hoursSpentOnManualWork * metrics.avgHourlyCost * 4,
    yearlyWaste: metrics.teamSize * metrics.hoursSpentOnManualWork * metrics.avgHourlyCost * 52,
    aiSavings: (metrics.teamSize * metrics.hoursSpentOnManualWork * metrics.avgHourlyCost * 52) * 0.75, // 75% efficiency gain
    paybackMonths: 2 // Typical payback period
  };

  const handleSliderChange = (field: keyof ROIMetrics, value: number) => {
    setMetrics(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollReveal animation="scaleIn">
      <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white via-white to-brand-soft/30 p-8 lg:p-12 shadow-elevated">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-900">Calculate Your Cost of Waiting</h3>
          <p className="mt-3 text-slate-600">
            See what manual processes are really costing you—and what AI could save
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Controls */}
          <div className="space-y-8">
            <div>
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Team Size</span>
                <span className="text-2xl font-bold text-brand-base">{metrics.teamSize}</span>
              </label>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={metrics.teamSize}
                onChange={(e) => handleSliderChange("teamSize", parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-base"
              />
            </div>

            <div>
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Avg. Hourly Cost</span>
                <span className="text-2xl font-bold text-brand-base">${metrics.avgHourlyCost}</span>
              </label>
              <input
                type="range"
                min="30"
                max="150"
                step="10"
                value={metrics.avgHourlyCost}
                onChange={(e) => handleSliderChange("avgHourlyCost", parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-base"
              />
            </div>

            <div>
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Hours/Week on Manual Work</span>
                <span className="text-2xl font-bold text-brand-base">{metrics.hoursSpentOnManualWork}</span>
              </label>
              <input
                type="range"
                min="5"
                max="40"
                step="5"
                value={metrics.hoursSpentOnManualWork}
                onChange={(e) => handleSliderChange("hoursSpentOnManualWork", parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-base"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <motion.div
              key={calculations.yearlyWaste}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="rounded-2xl border border-urgency-red/30 bg-gradient-to-br from-urgency-red/5 to-urgency-amber/5 p-6 shadow-amber-glow"
            >
              <p className="text-sm font-semibold text-slate-600">Annual Cost of Manual Work</p>
              <p className="mt-2 text-4xl font-bold text-urgency-red">
                ${calculations.yearlyWaste.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                ${calculations.monthlyWaste.toLocaleString()}/month · ${calculations.weeklyWaste.toLocaleString()}/week
              </p>
            </motion.div>

            <motion.div
              key={calculations.aiSavings}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="rounded-2xl border border-success-base/30 bg-gradient-to-br from-success-base/5 to-success-light/5 p-6"
            >
              <p className="text-sm font-semibold text-slate-600">Potential Annual Savings with AI</p>
              <p className="mt-2 text-4xl font-bold text-success-base">
                ${calculations.aiSavings.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Based on 75% efficiency improvement
              </p>
            </motion.div>

            <div className="rounded-2xl border border-brand-base/20 bg-brand-soft/30 p-6">
              <p className="text-sm font-semibold text-slate-900">Typical Payback Period</p>
              <p className="mt-2 text-3xl font-bold text-brand-base">
                {calculations.paybackMonths} months
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Average time to positive ROI with Rightword.AI
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-slate-900">
            Every month you wait costs <span className="text-urgency-red">${calculations.monthlyWaste.toLocaleString()}</span> in lost productivity
          </p>
          <p className="mt-2 text-xs text-slate-600">
            When will you stop letting competitors eat your market share?
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

