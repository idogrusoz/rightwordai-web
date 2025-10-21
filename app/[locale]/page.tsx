"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCard } from '@/components/StatCard';
import { CompetitiveGapChart } from '@/components/CompetitiveGapChart';
import { ROICalculator } from '@/components/ROICalculator';
import { BackToTop } from '@/components/BackToTop';
import { ContactForm } from '@/components/ContactForm';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useLocale } from '@/lib/locale-context';
import { LanguageSelector } from '@/components/LanguageSelector';
import { formatFooterCrafted } from '@/lib/i18n';

export default function LocalizedHomePage() {
  const scrollProgress = useScrollProgress();
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress / 100 }} />
      <Header />
      <BackToTop />
      <main className="flex-1 pb-24">
        <Hero />
        <CompetitiveRealitySection />
        <ValueSection />
        <CostOfDelaySection />
        <ServicesSection />
        <ProcessSection />
        <GainsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { dict } = useLocale();
  const h = dict.hero;
  return (
    <section className="section-container relative mt-4 overflow-hidden rounded-[2.5rem] border border-slate-200/70 px-8 py-14 shadow-elevated animated-gradient">
      {/* Animated blobs */}
      <motion.div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-brand-soft/80 blur-blob" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-light/20 blur-blob" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div className="flex flex-col gap-10" variants={staggerItem}>
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            <span className="eyebrow text-urgency-red">{h.eyebrow}</span>
          </motion.div>
          <motion.h1 variants={staggerItem} className="max-w-2xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">{h.headline}</motion.h1>
          <motion.p variants={staggerItem} className="max-w-2xl text-lg text-slate-700 sm:text-xl font-medium">{h.subheadline}</motion.p>
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
            <Button href="#contact">{h.primaryCta}</Button>
            <Button href="#cost-of-delay" variant="secondary">{h.secondaryCta}</Button>
          </motion.div>
          <motion.div variants={staggerItem} className="grid gap-4 pt-8 sm:grid-cols-2">
            {h.promises.map((line: string, index: number) => (
              <motion.div key={line} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + index * 0.1 }} className="flex items-start gap-3 rounded-2xl border border-urgency-amber/30 bg-white/90 p-5 text-sm text-slate-700 hover-lift">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-urgency-amber" aria-hidden />
                <span className="font-medium">{line}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={staggerItem} className="relative">
          <div className="pointer-events-none absolute -top-12 left-10 h-32 w-32 rounded-full bg-urgency-amber/20 blur-blob animate-float" />
          <div className="relative mx-auto max-w-[420px] rounded-[1.75rem] border border-slate-200 bg-white/95 p-8 shadow-glow-intense backdrop-blur-sm urgency-indicator">
            <span className="eyebrow text-urgency-red">{h.criticalEyebrow}</span>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">{h.criticalHeadline}</h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">{h.criticalSub}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {h.focusAreas.map((item: string, index: number) => (
                <motion.li key={item} className="flex items-center gap-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + index * 0.1 }}>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-brand-base to-brand-light text-xs font-bold text-white shadow-glow">{index + 1}</span>
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

function CompetitiveRealitySection() {
  const { dict } = useLocale();
  const c = dict.competitive;
  const stats = (dict as any).competitiveStats || [];
  return (
    <section id="competitive-reality" className="section-container mt-28">
      <ScrollReveal animation="fadeInUp">
        <div className="text-center mb-16">
          <span className="eyebrow text-urgency-red">{c.eyebrow}</span>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">{c.title}</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">{c.description}</p>
        </div>
      </ScrollReveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {stats.map((stat: any, index: number) => (
          <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} context={stat.context} emphasis={stat.emphasis as 'urgency' | 'success' | 'warning'} delay={index * 0.1} />
        ))}
      </div>
      <ScrollReveal animation="scaleIn" delay={0.4}>
        <div className="max-w-4xl mx-auto"><CompetitiveGapChart /></div>
      </ScrollReveal>
    </section>
  );
}

function ValueSection() {
  const { dict } = useLocale();
  const v = dict.value;
  const props = (dict as any).valuePropositions || [];
  return (
    <section id="approach" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal><SectionHeading eyebrow={v.eyebrow} title={v.title} description={v.description} /></ScrollReveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {props.map((value: any, index: number) => (
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
          <p className="text-2xl font-bold text-slate-900">{v.quote}</p>
          <p className="mt-4 text-sm text-slate-600 font-medium">{v.quoteSub}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function CostOfDelaySection() {
  const { dict } = useLocale();
  const cost = dict.cost;
  return (
    <section id="cost-of-delay" className="section-container mt-28">
      <ScrollReveal animation="fadeInUp">
        <div className="text-center mb-16">
          <span className="eyebrow text-urgency-amber">{cost.eyebrow}</span>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">{cost.title}</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">{cost.description}</p>
        </div>
      </ScrollReveal>
      <ROICalculator />
    </section>
  );
}

function ServicesSection() {
  const { dict } = useLocale();
  const s = dict.services;
  const packages = (dict as any).servicesPackages || [];
  const popularIndex = 1;
  return (
    <section id="services" className="section-container mt-28" aria-labelledby="offerings">
      <div className="flex flex-col gap-12">
        <ScrollReveal><SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} /></ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((service: any, index: number) => (
            <ScrollReveal key={service.name} animation="fadeInUp" delay={index * 0.15}>
              <article className="relative flex h-full flex-col gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm hover-lift">
                {index === popularIndex && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-urgency-amber to-urgency-amber-light px-4 py-1.5 text-xs font-bold text-white shadow-amber-glow">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                      </span>
                      {s.mostPopular}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  <span>{service.duration}</span>
                  <span className="text-brand-base">{s.engagementLabel}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950">{service.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.outcomes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] block h-2 w-2 rounded-full bg-brand-base flex-shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6"><Button href="#contact" variant="ghost" className="px-0 font-bold">{s.startSprint}</Button></div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { dict } = useLocale();
  const p = dict.process;
  const steps = (dict as any).processSteps || [];
  return (
    <section id="process" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal><SectionHeading eyebrow={p.eyebrow} title={p.title} description={p.description} /></ScrollReveal>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          {steps.map((step: any, index: number) => (
            <ScrollReveal key={step.title} animation="slideInLeft" delay={index * 0.1}>
              <div className="group relative rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm hover-lift">
                {index < steps.length - 1 && (<div className="absolute left-8 top-full h-4 w-0.5 bg-gradient-to-b from-brand-base to-transparent" />)}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-base transition-colors">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="slideInRight" delay={0.3}>
          <div className="relative mx-auto max-w-lg rounded-[2rem] border-2 border-brand-base/20 bg-gradient-to-br from-brand-soft/50 to-white p-10 shadow-glow">
            <div className="mb-6 inline-flex rounded-full bg-brand-base/10 px-4 py-2"><span className="text-sm font-bold text-brand-base">{p.whyDifferent}</span></div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">{p.blurb1}</p>
            <p className="text-sm text-slate-700 leading-relaxed">{p.blurb2}</p>
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex-1 h-px bg-gradient-to-r from-brand-base to-transparent" />
              <span>{p.speedTag}</span>
              <div className="flex-1 h-px bg-gradient-to-l from-brand-base to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GainsSection() {
  const { dict } = useLocale();
  const g = dict.gains;
  const items = (dict as any).gainsItems || [];
  return (
    <section id="outcomes" className="section-container mt-28 flex flex-col gap-12">
      <ScrollReveal><SectionHeading eyebrow={g.eyebrow} title={g.title} description={g.description} /></ScrollReveal>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item: string, index: number) => (
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

// Urgency section removed per request

function ContactSection() {
  const { dict } = useLocale();
  const c = dict.contact;
  return (
    <section id="contact" className="section-container mt-28">
      <ScrollReveal animation="scaleIn">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-brand-base/30 bg-gradient-to-br from-white via-brand-soft/30 to-white p-12 lg:p-16 shadow-glow-intense">
          <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-60" />
          <div className="relative z-10">
            <SectionHeading eyebrow={c.eyebrow} title={c.headline} description={c.subheadline} alignment="center" />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {c.methods.map((method: any) => {
                const isExternal = method.href.startsWith('http');
                const lower = method.label.toLowerCase();
                const isPrimary = ['slot','book','créneau','plek'].some(k=> lower.includes(k));
                return (
                  <motion.div key={method.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button href={method.href} variant={isPrimary ? 'primary' : 'secondary'} className="min-w-[16rem] text-base py-4" target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>{method.label}</Button>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200"><div className="text-3xl font-bold text-brand-base">{c.badges.duration}</div><p className="mt-2 text-sm text-slate-600 font-medium">{c.strategySession}</p></div>
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200"><div className="text-3xl font-bold text-success-base">{c.badges.cost}</div><p className="mt-2 text-sm text-slate-600 font-medium">{c.zeroCost}</p></div>
              <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200"><div className="text-3xl font-bold text-urgency-amber">{c.badges.timeline}</div><p className="mt-2 text-sm text-slate-600 font-medium">{c.getRoadmap}</p></div>
            </div>
            <p className="mt-10 text-center text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.pitch}</p>
            <div className="mt-16">
              <div className="text-center mb-8"><h3 className="text-2xl font-bold text-slate-900">{c.orMessage}</h3><p className="mt-2 text-sm text-slate-600">{c.respondTime}</p></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  const { dict } = useLocale();
  return (
    <footer className="section-container mt-24 flex flex-col gap-6 border-t border-slate-200 py-10 text-sm text-slate-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-800">{dict.footer.siteName}</p>
        <div className="flex gap-4 items-center">
          <LanguageSelector />
          <Link href="https://www.linkedin.com/company/rightword-ai" target="_blank" rel="noopener noreferrer" className="hover:text-brand-base">{dict.footer.links.linkedin}</Link>
            <Link href="mailto:info@rightword.ai" className="hover:text-brand-base">{dict.footer.links.email}</Link>
            <Link href="https://www.rightword.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-base">{dict.footer.links.privacy}</Link>
        </div>
      </div>
      <p>{formatFooterCrafted(dict)}</p>
    </footer>
  );
}
