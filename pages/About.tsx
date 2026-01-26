import React from "react";

const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/businessbydata/";

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block">
                Our Founder
              </span>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                Rema Vaish
              </h1>

              {/* Updated summary content (reduced by 1 step + justified) */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed text-justify">
                  <span className="font-semibold text-zinc-900">Rema Vaish</span> helps mid-market organisations turn
                  fragmented, spreadsheet-heavy data into decision-ready systems that improve revenue, margins and
                  operational stability. With <span className="font-semibold text-zinc-900">13+ years</span> across
                  banking, retail, real estate, consumer goods and F&amp;B, she specialises in moving organisations from
                  low-maturity analytics to enterprise-grade performance through{" "}
                  <span className="font-semibold text-zinc-900">data strategy, BI architecture</span> and{" "}
                  <span className="font-semibold text-zinc-900">structured performance management</span>.
                </p>

                <p className="text-base md:text-lg text-zinc-700 leading-relaxed text-justify">
                  Her work has spanned <span className="font-semibold text-zinc-900">Symrise Middle East</span>,{" "}
                  <span className="font-semibold text-zinc-900">DAMAC Properties</span>,{" "}
                  <span className="font-semibold text-zinc-900">Nike</span>,{" "}
                  <span className="font-semibold text-zinc-900">Philip Morris</span>, regional banks,{" "}
                  <span className="font-semibold text-zinc-900">Accenture</span> and{" "}
                  <span className="font-semibold text-zinc-900">XL Catlin</span>—delivering Sales &amp; Operations
                  analytics, BI modernisation programmes, forecasting models and automations that have saved hundreds of
                  manual hours. Typical outcomes include tighter working capital control, fewer stockouts, faster
                  month-end close, improved sales conversion and more accurate demand forecasting.
                </p>

                <p className="text-base md:text-lg text-zinc-700 leading-relaxed text-justify">
                  Rema bridges executive ambitions with technical realities. She understands that for most organisations,
                  the bottleneck isn&apos;t tools—it&apos;s{" "}
                  <span className="font-semibold text-zinc-900 italic">
                    definition, logic and measurement discipline
                  </span>
                  . She engages as an executive partner: focused discovery, pragmatic roadmap, quick wins within months.
                  Her approach ensures implementation teams build correctly the first time and that analytics remains
                  trusted, adopted and used at the cadence the business runs.
                </p>

                <p className="text-base md:text-lg text-zinc-700 leading-relaxed text-justify">
                  She holds an <span className="font-semibold text-zinc-900">MBA</span> from{" "}
                  <span className="font-semibold text-zinc-900">SP Jain School of Global Management (Dubai,UAE)</span>,
                  completed an <span className="font-semibold text-zinc-900">IIT Bombay</span> apprenticeship, and earned
                  a <span className="font-semibold text-zinc-900">Master&apos;s in Computer Applications(Mumbai,India)</span>.
                </p>
              </div>

              {/* Two icon rows (kept, one step smaller + justified body) */}
              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-50 rounded-sm border border-zinc-100">
                    <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">13+ Years Experience</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed text-justify">
                      Expertise in decision support, governance, and fractional leadership across multiple industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-50 rounded-sm border border-zinc-100">
                    <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">Liaison-First Approach</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed text-justify">
                      A proven ability to act as the executive voice within technical data projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn (company page) */}
              <div className="mt-10">
                <a
                  href={LINKEDIN_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-900 font-semibold text-base inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-zinc-100 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="/rema11.JPG" alt="Rema Vaish" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-10 -left-10 p-10 bg-white shadow-xl border border-zinc-50 rounded-sm hidden md:block max-w-[320px]">
                <p className="text-zinc-900 font-medium text-base italic leading-relaxed text-justify">
                  "In God we trust. All others must bring data."
                </p>
                <p className="mt-4 text-zinc-400 text-xs font-bold uppercase tracking-widest"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work (kept; body reduced by one step + justified) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-12">How I Work</h2>
          <div className="space-y-12 text-left">
            <div className="flex gap-8 items-start">
              <div className="text-zinc-300 font-bold text-4xl mt-1">01</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">The Strategic Translation</h3>
                <p className="text-zinc-600 text-base leading-relaxed text-justify">
                  I translate high-level business goals into specific data points and measurement logic. If you want to
                  increase profit, I define exactly which fields, at which frequency, and via which calculation that
                  goal will be tracked.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-zinc-300 font-bold text-4xl mt-1">02</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">The Tactical Handover</h3>
                <p className="text-zinc-600 text-base leading-relaxed text-justify">
                  I don’t just leave you with ideas. I produce the technical requirements that your engineers or
                  third-party vendors need to build accurate reports. I minimize the risk of misinterpretation between
                  management and tech.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-zinc-300 font-bold text-4xl mt-1">03</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Operational Embedding</h3>
                <p className="text-zinc-600 text-base leading-relaxed text-justify">
                  Reports are useless if not used. I work with you to integrate these metrics into your weekly or
                  monthly decision cycles, ensuring the data actually drives action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
