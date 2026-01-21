import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-white pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
              <span className="block text-zinc-900">Make Data</span>
              <span className="block whitespace-nowrap text-[#2FB2A2]">Usable.</span>
              <span className="block text-zinc-900">Make Better</span>
              <span className="block whitespace-nowrap text-[#2FB2A2]">Decisions.</span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-zinc-500 leading-relaxed font-light">
              We help organizations understand, structure, and use data effectively. Get clear direction and
              measurement logic without building complex systems or hiring massive teams.
            </p>
    
          </div>
        </div>
      </section>

  
{/* Distinction Section */}
<section className="py-16 md:py-20 mb-20 bg-zinc-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-4">
      Our Distinction
    </p>
    <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium italic leading-relaxed max-w-4xl mx-auto">
      “We define decision clarity. We don’t build pipelines. We bridge business goals and technical execution.”
    </p>
  </div>
</section>


    </div>
  );
};

export default Home;
