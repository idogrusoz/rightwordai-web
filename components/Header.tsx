"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./Logo";
import { useLocale } from '@/lib/locale-context';

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict } = useLocale();
  const navItems = [
    { label: dict.nav.reality, href: '#competitive-reality' },
    { label: dict.nav.services, href: '#services' },
    { label: dict.nav.roi, href: '#cost-of-delay' },
    { label: dict.nav.contact, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className={`section-container mt-6 flex items-center justify-between rounded-full border border-slate-200/60 bg-white/60 px-5 py-3 backdrop-blur-md transition-all ${isScrolled ? 'shadow-elevated' : ''}`}>
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-base">{item.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="#contact" className="rounded-full bg-brand-base px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-dark">{dict.header.cta}</Link>
        </div>
        <button type="button" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <MenuIcon className="h-6 w-6 text-slate-600" />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
            <motion.div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed right-0 top-0 z-50 h-full w-80 bg-white px-6 py-8 shadow-elevated">
              <div className="flex items-center justify-between">
                <Logo />
                <button type="button" className="rounded-full border border-slate-200 p-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <CloseIcon className="h-5 w-5 text-slate-600" />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-6 text-lg font-semibold text-slate-700">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
                <Link href="#contact" className="rounded-full bg-brand-base px-5 py-2 text-center text-sm uppercase tracking-wide text-white" onClick={() => setMobileOpen(false)}>{dict.header.cta}</Link>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
