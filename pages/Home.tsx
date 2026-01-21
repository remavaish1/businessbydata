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


     

     
     
    </div>
  );
};

export default Home;
