import React from 'react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS, CASE_STUDIES, PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
              <span className="block text-zinc-900">Make Data</span>
              <span className="block whitespace-nowrap text-[#2FB2A2]">Usable.</span>
              <span className="block text-zinc-900">Make Better</span>
              <span className="block whitespace-nowrap text-[#2FB2A2]">Decisions.</span>
            </h1>

            <p className="mt-8 text-2xl text-zinc-500 leading-relaxed font-light">
              We help organizations understand, structure, and use data effectively.
              Get clear direction and measurement logic without building complex systems or hiring massive teams.
            </p>

            <div className="mt-10">
              <Link
                to={DISCOVERY_CALL_LINK.replace('#', '')}
                className="inline-flex items-center bg-zinc-900 text-white px-8 py-4 text-base font-medium rounded-sm hover:bg-zinc-800 transition-all"
              >
                {PRIMARY_CTA_TEXT}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">Our Distinction</p>
          <p className="text-lg text-zinc-700 font-medium italic">
            "We define decision clarity.We don’t build pipelines.We bridge business goals and technical execution.”
          </p>
        </div>
      </section>

      {/* What We Do Section (Centered like Our Distinction) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What We Do</h2>
            <p className="mt-4 text-zinc-500 leading-relaxed">
              We work with leadership teams to ensure data drives clear, confident decisions – not just reporting.
            </p>

            <div className="mt-6">
              <Link
                to="/services"
                className="inline-block text-sm font-semibold text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Decision Clarity & KPI Design", icon: "📊" },
              { title: "Business Data Definition", icon: "📝" },
              { title: "Analytics Strategy & Decision Discipline", icon: "⚖️" },
              { title: "Fractional Data Leadership", icon: "👔" }
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-8 border border-zinc-100 hover:border-zinc-300 transition-all rounded-sm bg-white group"
              >
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed"></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
<section className="py-24 bg-zinc-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Centered Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl font-bold tracking-tight">
        How We Work
      </h2>
      <p className="mt-4 text-zinc-400 leading-relaxed">
        A structured approach to turning data into an asset.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
      {PROCESS_STEPS.map((step) => (
        <div key={step.number} className="relative text-center md:text-left">
          <div className="text-5xl font-black text-white mb-6">
            {step.number}
          </div>
          <h3 className="text-xl font-semibold mb-4">
            {step.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* What You Get Section (Centered) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-8">What You Get</h2>
            <p className="text-zinc-500 mb-12 leading-relaxed">
              Our engagement results in concrete, professional documentation that empowers your teams to implement with precision.
            </p>

            <div className="max-w-3xl mx-auto text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "KPI Catalogue", "Metric Definitions", "Key Data Field IDs",
                  "Reporting Requirements", "Governance Model", "Decision Review Cadence",
                  "Implementation Handover"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-zinc-900 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-12">Proven Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="text-left bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border border-zinc-100"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{study.industry}</span>
                <h3 className="text-lg font-semibold text-zinc-900 mt-2 mb-4">{study.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-3 mb-6">{study.context}</p>
                <Link to={`/portfolio`} className="text-sm font-medium text-zinc-900 hover:text-zinc-600">
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/portfolio"
              className="text-sm font-semibold border border-zinc-900 px-6 py-3 hover:bg-zinc-900 hover:text-white transition-all"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-zinc-900 text-white py-16 rounded-sm shadow-2xl">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to simplify your data direction?</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Book a call to discuss how we can bring clarity to your decision-making.
          </p>
          <Link
            to={DISCOVERY_CALL_LINK.replace('#', '')}
            className="bg-white text-zinc-900 px-10 py-4 text-base font-semibold rounded-sm hover:bg-zinc-100 transition-all"
          >
            {PRIMARY_CTA_TEXT}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
