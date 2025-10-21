"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCard } from "@/components/StatCard";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { CompetitiveGapChart } from "@/components/CompetitiveGapChart";
import { ROICalculator } from "@/components/ROICalculator";
import { CountUp } from "@/components/CountUp";
import { FOMOTicker } from "@/components/FOMOTicker";
import { BackToTop } from "@/components/BackToTop";
import { ContactForm } from "@/components/ContactForm";
import {
  heroContent,
  valuePropositions,
  servicePackages,
  processSteps,
  potentialGains,
  contactContent,
  footerLinks
} from "@/lib/content";
import { competitiveStats, urgencyIndicators } from "@/lib/stats";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HomePage() {
  const scrollProgress = useScrollProgress();

  return (
    <div id="top" className="flex min-h-screen flex-col">
      {/* Scroll progress bar */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />
      
      <Header />
      <FOMOTicker />
      <BackToTop />
      <main className="flex-1 pb-24">
        <Hero />
        <CompetitiveRealitySection />
        <ValueSection />
        <CostOfDelaySection />
        <ServicesSection />
        <ProcessSection />
        <GainsSection />
        <UrgencySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="section-container relative mt-24 overflow-hidden rounded-[2.5rem] border border-slate-200/70 px-8 py-24 shadow-elevated animated-gradient">
      {/* Animated blobs with parallax */}
      <motion.div 
        className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-brand-soft/80 blur-blob"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-light/20 blur-blob"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Urgency banner */}
      <div className="mb-12 flex justify-center">
        <UrgencyBanner />
      </div>

      <motion.div 
        className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-10" variants={staggerItem}>
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            <span className="eyebrow text-urgency-red">
              {heroContent.eyebrow}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={staggerItem}
            className="max-w-2xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            {heroContent.headline}
          </motion.h1>
          
          <motion.p 
            variants={staggerItem}
            className="max-w-2xl text-lg text-slate-700 sm:text-xl font-medium"
          >
            {heroContent.subheadline}
          </motion.p>
          
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
          
          <motion.div variants={staggerItem} className="grid gap-4 pt-8 sm:grid-cols-2">
            {heroContent.promises.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3 rounded-2xl border border-urgency-amber/30 bg-white/90 p-5 text-sm text-slate-700 hover-lift"
              >
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-urgency-amber" aria-hidden />
                <span className="font-medium">{line}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={staggerItem}
          className="relative"
        >
          <div className="pointer-events-none absolute -top-12 left-10 h-32 w-32 rounded-full bg-urgency-amber/20 blur-blob animate-float" />
          <div className="relative mx-auto max-w-[420px] rounded-[1.75rem] border border-slate-200 bg-white/95 p-8 shadow-glow-intense backdrop-blur-sm urgency-indicator">
            <span className="eyebrow text-urgency-red">Critical capabilities</span>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">What you need to compete</h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              The automation capabilities your competitors are already leveraging. How many are you missing?
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {heroContent.focusAreas.map((item, index) => (
                <motion.li 
                  key={item} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-brand-base to-brand-light text-xs font-bold text-white shadow-glow">
                    {index + 1}
                  </span>
                  <span className="font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// New section: Competitive Reality Check
function CompetitiveRealitySection() {
  return (
    <section id="competitive-reality" className="section-container mt-28">
      <ScrollReveal animation="fadeInUp">
        <div className="text-center mb-16">
          <span className="eyebrow text-urgency-red">Wake-up call</span>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            The competitive gap is real—and widening
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            While you're evaluating, your competitors are executing. Here's what the data shows.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {competitiveStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            context={stat.context}
            emphasis={stat.emphasis as "urgency" | "success" | "warning"}
            delay={index * 0.1}
          />
        ))}
      </div>

      <ScrollReveal animation="scaleIn" delay={0.4}>
        <div className="max-w-4xl mx-auto">
          <CompetitiveGapChart />
        </div>
      </ScrollReveal>
    </section>
  );
}

function ValueSection() {
  return (
    <section id="approach" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal>
        <SectionHeading
          eyebrow="No more excuses"
          title="Speed, not perfection, wins the AI race"
          description="Your competitors aren't smarter—they're faster. While you perfect your plan, they're shipping, learning, and compounding advantages."
        />
      </ScrollReveal>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {valuePropositions.map((value, index) => (
          <ScrollReveal key={value.title} animation="fadeInUp" delay={index * 0.1}>
            <article className="h-full rounded-[1.75rem] border border-slate-200 bg-white/70 p-6 shadow-sm hover-lift">
              <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{value.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal animation="scaleIn" delay={0.5}>
        <div className="relative rounded-[2.5rem] border-2 border-urgency-amber/30 bg-gradient-to-br from-urgency-amber/5 to-urgency-red/5 p-10 text-center shadow-amber-glow">
          <p className="text-2xl font-bold text-slate-900">
            "The best time to start was last quarter. The second best time is now."
          </p>
          <p className="mt-4 text-sm text-slate-600 font-medium">
            Every week of delay is another week your competitors pull ahead
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

// New section: Cost of Delay
function CostOfDelaySection() {
  return (
    <section id="cost-of-delay" className="section-container mt-28">
      <ScrollReveal animation="fadeInUp">
        <div className="text-center mb-16">
          <span className="eyebrow text-urgency-amber">Calculate your blind spot</span>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            What is waiting really costing you?
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Manual processes aren't just slow—they're expensive. See your actual cost of delay.
          </p>
        </div>
      </ScrollReveal>

      <ROICalculator />
    </section>
  );
}

function ServicesSection() {
  const popularIndex = 1; // Middle option is most popular

  return (
    <section id="services" className="section-container mt-28" aria-labelledby="offerings">
      <div className="flex flex-col gap-12">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Get moving fast"
            title="From zero to AI advantage in weeks, not months"
            description="Choose your speed. Every engagement is designed to ship working AI systems that deliver measurable ROI—fast."
          />
        </ScrollReveal>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((service, index) => (
            <ScrollReveal key={service.name} animation="fadeInUp" delay={index * 0.15}>
              <article className="relative flex h-full flex-col gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm hover-lift">
                {index === popularIndex && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-urgency-amber to-urgency-amber-light px-4 py-1.5 text-xs font-bold text-white shadow-amber-glow">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                      </span>
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  <span>{service.duration}</span>
                  <span className="text-brand-base">Engagement</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950">{service.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] block h-2 w-2 rounded-full bg-brand-base flex-shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button href="#contact" variant="ghost" className="px-0 font-bold">
                    Start this sprint →
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Battle-tested approach"
          title="From workshop to working system in record time"
          description="No endless discovery phases. No analysis paralysis. Just fast, focused execution that compounds value from day one."
        />
      </ScrollReveal>
      
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} animation="slideInLeft" delay={index * 0.1}>
              <div className="group relative rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm hover-lift">
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-full h-4 w-0.5 bg-gradient-to-b from-brand-base to-transparent" />
                )}
                
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-base transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="slideInRight" delay={0.3}>
          <div className="relative mx-auto max-w-lg rounded-[2rem] border-2 border-brand-base/20 bg-gradient-to-br from-brand-soft/50 to-white p-10 shadow-glow">
            <div className="mb-6 inline-flex rounded-full bg-brand-base/10 px-4 py-2">
              <span className="text-sm font-bold text-brand-base">Why we're different</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Most consultants talk. We ship. Production-ready AI systems with measurable KPIs in weeks, not quarters.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Every phase keeps momentum tangible. Your team sees progress weekly. Your leadership sees ROI monthly.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex-1 h-px bg-gradient-to-r from-brand-base to-transparent" />
              <span>Speed compounds advantage</span>
              <div className="flex-1 h-px bg-gradient-to-l from-brand-base to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GainsSection() {
  return (
    <section id="outcomes" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Tangible outcomes"
          title="What AI advantage actually looks like"
          description="Not vague promises. Real, measurable improvements that compound quarter over quarter."
        />
      </ScrollReveal>
      
      <div className="grid gap-4 md:grid-cols-2">
        {potentialGains.map((item, index) => (
          <ScrollReveal key={item} animation="scaleIn" delay={index * 0.08}>
            <div className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm text-slate-700 hover-lift">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-success-base flex-shrink-0 animate-pulse-slow" aria-hidden />
              <span className="font-medium">{item}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// New section: Time-Sensitive Urgency
function UrgencySection() {
  return (
    <section className="section-container mt-28">
      <ScrollReveal animation="scaleIn">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-urgency-red/30 bg-gradient-to-br from-urgency-red/10 via-urgency-amber/10 to-urgency-red/5 p-12 lg:p-16 text-center shadow-amber-glow">
          {/* Animated background elements */}
          <motion.div
            className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-urgency-amber/20 blur-blob"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <span className="eyebrow text-urgency-red">Limited availability</span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Every quarter you wait, the gap widens
            </h2>
            <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
              We've helped <CountUp end={urgencyIndicators.companiesHelpedThisMonth} className="font-bold text-urgency-amber" /> companies this month 
              gain AI advantage. Only <span className="font-bold text-urgency-red">{urgencyIndicators.slotsAvailable} strategy slots</span> remain this quarter.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-urgency-red">
                  <CountUp end={urgencyIndicators.slotsAvailable} suffix={`/${urgencyIndicators.totalSlots}`} />
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-600">Slots remaining</p>
              </div>
              
              <div className="hidden sm:block h-16 w-px bg-slate-300" />
              
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900">{urgencyIndicators.nextAvailability}</div>
                <p className="mt-2 text-sm font-semibold text-slate-600">Next availability</p>
              </div>
            </div>

            <div className="mt-12">
              <Button href="#contact" className="text-lg px-8 py-4">
                Claim your strategy call now
              </Button>
              <p className="mt-4 text-sm text-slate-600">
                {urgencyIndicators.consultationDuration} call · No obligations · See your AI roadmap
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-container mt-28">
      <ScrollReveal animation="scaleIn">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-brand-base/30 bg-gradient-to-br from-white via-brand-soft/30 to-white p-12 lg:p-16 shadow-glow-intense">
          {/* Animated gradient mesh */}
          <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-60" />
          
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Stop waiting. Start winning."
              title={contactContent.headline}
              description={contactContent.subheadline}
              alignment="center"
            />
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {contactContent.contactMethods.map((method) => {
                const isExternal = method.href.startsWith("http");
                const isPrimary = method.label.toLowerCase().includes("slot") || method.label.toLowerCase().includes("book");
                return (
                  <motion.div
                    key={method.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      href={method.href}
                      variant={isPrimary ? "primary" : "secondary"}
                      className="min-w-[16rem] text-base py-4"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {method.label}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200">
                <div className="text-3xl font-bold text-brand-base">45 min</div>
                <p className="mt-2 text-sm text-slate-600 font-medium">Strategy session</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200">
                <div className="text-3xl font-bold text-success-base">No cost</div>
                <p className="mt-2 text-sm text-slate-600 font-medium">Zero obligations</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200">
                <div className="text-3xl font-bold text-urgency-amber">This week</div>
                <p className="mt-2 text-sm text-slate-600 font-medium">Get your roadmap</p>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              In 45 minutes, we'll map your highest-leverage automation opportunities and show you 
              exactly how fast you can move. <span className="font-bold text-slate-900">Your competitors aren't hesitating. Why are you?</span>
            </p>

            {/* Contact Form */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Or send us a message</h3>
                <p className="mt-2 text-sm text-slate-600">We'll respond within 24 hours</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-container mt-24 flex flex-col gap-6 border-t border-slate-200 py-10 text-sm text-slate-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-800">Rightword.AI</p>
        <div className="flex gap-4">
          {footerLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="hover:text-brand-base"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <p>© {new Date().getFullYear()} Rightword.AI. Crafted to help operators lead the AI era.</p>
    </footer>
  );
}
