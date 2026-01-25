import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK, LINKEDIN_PROFILE_URL } from "../constants";

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      {/* Founder */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header (consistent with Services/Portfolio) */}
          <div className="w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Our Founder
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Rema Vaish
              </h1>

              <p className="mt-2 text-base md:text-lg text-zinc-500 font-semibold">
                Founder, Business by Data
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Narrative */}
            <div className="lg:col-span-7">
              <section className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                  Decision analytics &amp; data strategy —{" "}
                  <span className="text-zinc-600">Trusted numbers. Faster decisions.</span>
                </h2>

                <div className="mt-6 space-y-6">
                  <p className="text-lg text-zinc-700 leading-relaxed text-pretty">
                    <span className="font-semibold text-zinc-900">Rema Vaish</span> helps mid-market organisations turn
                    fragmented, spreadsheet-heavy data into decision-ready systems that improve revenue, margins and
                    operational stability. With <span className="font-semibold text-zinc-900">13+ years</span> across
                    banking, retail, real estate, consumer goods and F&amp;B, she specialises in moving organisations
                    from low-maturity analytics to enterprise-grade performance through{" "}
                    <span className="font-semibold text-zinc-900">
                      data strategy, BI architecture
                    </span>{" "}
                    and <span className="font-semibold text-zinc-900">structured performance management</span>.
                  </p>

                  <p className="text-lg text-zinc-700 leading-relaxed text-pretty">
                    Her work has spanned{" "}
                    <span className="font-semibold text-zinc-900">Symrise Middle East</span>,{" "}
                    <span className="font-semibold text-zinc-900">DAMAC Properties</span>,{" "}
                    <span className="font-semibold text-zinc-900">Nike</span>,{" "}
                    <span className="font-semibold text-zinc-900">Philip Morris</span>, regional banks,{" "}
                    <span className="font-semibold text-zinc-900">Accenture</span> and{" "}
                    <span className="font-semibold text-zinc-900">XL Catlin</span> — delivering Sales &amp; Operations
                    analytics, BI modernisation programmes, inventory performance improvements, forecasting models and
                    automations that have saved hundreds of manual hours. Typical outcomes include tighter working
                    capital control, fewer stockouts, faster month-end close, improved sales conversion and more
                    accurate demand forecasting.
                  </p>

                  <p className="text-lg text-zinc-700 leading-relaxed text-pretty">
                    Rema bridges executive ambitions with technical realities. She understands that for most
                    organisations, the bottleneck isn&apos;t tools — it&apos;s{" "}
                    <span className="font-semibold text-zinc-900 italic">
                      definition, logic and measurement discipline
                    </span>
                    . She engages as an executive partner: focused discovery, pragmatic roadmap, quick wins within
                    months. Her approach ensures implementation teams build correctly the first time and that analytics
                    remains trusted, adopted and used at the cadence the business runs.
                  </p>

                  <p className="text-lg text-zinc-700 leading-relaxed text-pretty">
                    She holds an <span className="font-semibold text-zinc-900">MBA</span> from{" "}
                    <span className="font-semibold text-zinc-900">SP Jain School of Global Management (Dubai)</span>,
                    completed an <span className="font-semibold text-zinc-900">IIT Bombay</span> apprenticeship, and
                    earned a <span className="font-semibold text-zinc-900">Master&apos;s in Computer Applications</span>{" "}
                    from India.
                  </p>
                </div>

                {/* Links (optional, consistent style; remove if you don't want CTA here) */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={LINKEDIN_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>

                
                
                </div>
              </section>
            </div>

         

      {/* How I Work (restyled to match Services cards) */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Engagement Style
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              How I Work
            </h2>

            <p className="mt-5 text-xl text-zinc-600 leading-relaxed w-full max-w-none text-pretty">
              Practical, business-led execution: from defining measurement logic to embedding decision cadence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10">
            {[
              {
                n: "01",
                title: "The Strategic Translation",
                body:
                  "I translate high-level business goals into specific data points and measurement logic. If you want to increase profit, I define exactly which fields, at which frequency, and via which calculation that goal will be tracked.",
              },
              {
                n: "02",
                title: "The Tactical Handover",
                body:
                  "I don't just leave you with ideas. I produce the technical requirements your engineers or partners need to build accurate reporting, minimizing risk of misinterpretation between management and tech.",
              },
              {
                n: "03",
                title: "Operational Embedding",
                body:
                  "Reports are useless if not used. I help integrate metrics into weekly/monthly decision cycles so the data drives action, not just discussion.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 text-sm font-bold text-zinc-900">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-lg text-zinc-700 leading-relaxed text-pretty">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
