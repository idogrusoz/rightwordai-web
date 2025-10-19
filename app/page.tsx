import Link from "next/link";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import {
  heroContent,
  valuePropositions,
  servicePackages,
  processSteps,
  potentialGains,
  contactContent,
  footerLinks
} from "@/lib/content";

export default function HomePage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-24">
        <Hero />
        <ValueSection />
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
  return (
    <section className="section-container relative mt-24 overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-white to-brand-soft/60 px-8 py-24 shadow-elevated">
      <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-brand-soft/80 blur-blob" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-light/20 blur-blob" />
      <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 text-sm text-brand-base">
            <span className="rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-base shadow-inner">
              AI-first execution partner
            </span>
            <span className="text-slate-500">Design, build, and scale intelligent ops</span>
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {heroContent.headline}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">{heroContent.subheadline}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-2">
            {heroContent.promises.map((line) => (
              <div
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-600"
              >
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-base" aria-hidden />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -top-12 left-10 h-32 w-32 rounded-full bg-brand-base/20 blur-blob" />
          <div className="relative mx-auto max-w-[420px] rounded-[1.75rem] border border-slate-200 bg-white/85 p-8 shadow-glow backdrop-blur-sm">
            <span className="eyebrow text-brand-base">Focus areas</span>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Where we plug in quickly</h2>
            <p className="mt-2 text-sm text-slate-500">
              A shortlist of the environments where Rightword.AI brings immediate clarity and momentum.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {heroContent.focusAreas.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand-base">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section id="approach" className="section-container mt-28 flex flex-col gap-12">
      <SectionHeading
        eyebrow="Why Rightword.AI"
        title="A modern AI partner that moves at operator speed."
        description="We combine workflow ethnography with production engineering—unlocking AI that your teams adopt, your leadership can trust, and your roadmap can scale."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="grid gap-6 md:grid-cols-2">
          {valuePropositions.map((value) => (
            <article
              key={value.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
        <div className="relative flex items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white/80 p-10 shadow-lg">
          <div className="space-y-4 text-sm text-slate-500">
            <p className="text-base font-semibold text-slate-900">What clients tap us for</p>
            <p>
              Starting from discovery interviews through to adoption enablement, we stay embedded with your team to ensure
              every automation lands with empathy and rigor.
            </p>
            <p>
              Expect pragmatic design workshops, production-ready implementations, and enablement artefacts your operators
              will actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-container mt-28" aria-labelledby="offerings">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="How we engage"
          title="Strategic containers that focus on momentum and measurable readiness."
          description="Pick the runway that matches your stage. Every option blends discovery, build, and adoption enablement so pilots turn into compounding capability."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                <span>{service.duration}</span>
                <span className="text-brand-base">Engagement</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{service.name}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] block h-2 w-2 rounded-full bg-brand-base" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Button href="#contact" variant="ghost" className="px-0">
                  Request this sprint →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-container mt-28 flex flex-col gap-12">
      <SectionHeading
        eyebrow="Working model"
        title="A transparent delivery rhythm from first workshop to scale."
        description="Every phase is designed for executive clarity and operator delight—so adoption sticks and value compounds."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="grid gap-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="relative mx-auto max-w-lg rounded-[1.75rem] border border-slate-200 bg-white/80 p-10 shadow-lg">
          <p className="text-sm text-slate-500">
            Workshops surface constraints, prototypes prove usability, and iterative releases keep momentum tangible. Every
            stage includes clear documentation so your team can continue building with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

function GainsSection() {
  return (
    <section id="outcomes" className="section-container mt-28 flex flex-col gap-12">
      <SectionHeading
        eyebrow="Possible wins"
        title="Outcomes you can expect when we partner together."
        description="These are the themes we target on every engagement—grounded in process clarity and measurable improvement."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {potentialGains.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-base" aria-hidden />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-container mt-28">
      <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white via-white to-brand-soft/60 p-12 text-slate-700 shadow-elevated">
        <SectionHeading
          eyebrow="Let&apos;s build"
          title={contactContent.headline}
          description={contactContent.subheadline}
          alignment="center"
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center text-lg font-semibold text-slate-900 sm:flex-row">
          {contactContent.contactMethods.map((method) => {
            const isExternal = method.href.startsWith("http");
            return (
              <Button
                key={method.label}
                href={method.href}
                variant="secondary"
                className="min-w-[12rem]"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {method.label}
              </Button>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Need stakeholder alignment first? We can co-create a modernization brief to guide your next planning cycle.
        </p>
      </div>
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
