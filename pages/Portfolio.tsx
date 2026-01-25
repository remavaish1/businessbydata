import React from "react";
import { CASE_STUDIES } from "../constants";

const Portfolio: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header (consistent with Services) */}
          <div className="w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Case Studies
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Case Studies
              </h1>
            </div>

            <p className="mt-5 text-xl md:text-2xl text-zinc-600 leading-relaxed w-full max-w-none text-pretty">
              Anonymized examples of how we&apos;ve helped leaders across industries achieve data clarity and structural
              discipline.
            </p>
          </div>

          {/* Case Studies */}
          <div className="mt-14 space-y-10">
            {CASE_STUDIES.map((study, index) => {
              const num = String(index + 1).padStart(2, "0");

              return (
                <section
                  key={study.id}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8 shadow-sm"
                >
                  {/* Top row: number + title + industry + tags */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 text-sm font-bold text-zinc-900">
                        {num}
                      </span>

                      <div className="min-w-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                          {study.title}
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-zinc-500 font-semibold">
                          {study.industry}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Context quote (full width, consistent style) */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        Context
                      </p>
                      <p className="mt-3 text-lg text-zinc-700 leading-relaxed text-pretty">
                        “{study.context}”
                      </p>
                    </div>
                  </div>

                  {/* Main content grid */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Problem */}
                    <div className="lg:col-span-6 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        The problem
                      </p>
                      <p className="mt-4 text-lg text-zinc-700 leading-relaxed text-pretty">
                        {study.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="lg:col-span-6 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        Our approach
                      </p>
                      <p className="mt-4 text-lg text-zinc-700 leading-relaxed text-pretty">
                        {study.approach}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables + Outcomes */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Deliverables */}
                    <div className="lg:col-span-7 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        Key deliverables
                      </p>

                      <ul className="mt-5 space-y-3">
                        {study.deliverables.map((item, i) => (
                          <li key={i} className="flex gap-3 text-lg text-zinc-800 leading-relaxed">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                            <span className="text-pretty">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="lg:col-span-5 rounded-2xl bg-white border border-zinc-200 p-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        Final outcomes
                      </p>

                      <ul className="mt-5 space-y-3">
                        {study.outcomes.map((item, i) => (
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
                            <span className="text-pretty">{item}</span>
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

export default Portfolio;
