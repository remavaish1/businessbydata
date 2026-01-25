import React from "react";
import { SERVICE_PILLARS } from "../constants";

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Decision & Data Advisory
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Decision & Data Advisory
            </h1>

            <p className="mt-5 text-xl md:text-2xl text-zinc-600 leading-relaxed">
              We help leaders define what to measure, validate where the numbers come from, and build decision-ready
              models, dashboards, and operating rhythms. Strategy first, practical execution always.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-lg text-zinc-700 leading-relaxed">
                Designed to reduce noise, improve trust in reporting, and make performance reviews more decisive.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-14 space-y-10">
            {SERVICE_PILLARS.map((service, index) => {
              const num = String(index + 1).padStart(2, "0");

              return (
                <section
                  key={service.id}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8 shadow-sm"
                >
                  {/* Title */}
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 text-sm font-bold text-zinc-900">
                      {num}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Who it's for */}
                  <div className="mt-6 w-full">
                    <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                      Who it&apos;s for
                    </p>
                    <p className="mt-2 w-full max-w-none text-lg text-zinc-700 leading-relaxed text-pretty">
                      {service.whoItIsFor}
                    </p>
                  </div>

                  {/* Content grid */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Deliverables */}
                    <div className="lg:col-span-7 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        What we deliver
                      </p>

                      <ul className="mt-5 space-y-3">
                        {service.whatWeDeliver.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-lg text-zinc-800 leading-relaxed"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="lg:col-span-5 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        Outcomes
                      </p>

                      <ul className="mt-5 space-y-3">
                        {service.outcomes.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-lg font-semibold text-zinc-900 leading-relaxed"
                          >
                            <svg
                              className="mt-1.5 w-5 h-5 text-emerald-600 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
