// ✅ Update 2: Services.tsx (minimal change — the map stays the same)
// Only tweak the heading/subheading to match your broader offering.

import React from "react";
import { Link } from "react-router-dom";
import { SERVICE_PILLARS, PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from "../constants";

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
              Decision & Data Advisory
            </h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              We help leaders define what to measure, validate where the numbers come from,
              and build decision-ready models, dashboards, and operating rhythms.
              Strategy first, practical execution always.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICE_PILLARS.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 ${
                  index !== SERVICE_PILLARS.length - 1 ? "border-b border-zinc-100" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold block mb-2">
                      Who It&apos;s For
                    </span>
                    <p className="text-zinc-600 text-sm leading-relaxed">{service.whoItIsFor}</p>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold block mb-4">
                    What We Deliver
                  </span>
                  <ul className="space-y-3">
                    {service.whatWeDeliver.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold block mb-4">
                    Outcomes
                  </span>
                  <ul className="space-y-3">
                    {service.outcomes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-900">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

     
        </div>
      </section>
    </div>
  );
};

export default Services;
