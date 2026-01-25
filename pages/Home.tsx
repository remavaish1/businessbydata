import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
     <section className="bg-white pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* LEFT: Hero Text */}
      <div className="lg:col-span-7 max-w-3xl">
        
        {/* Service descriptor */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Decision Analytics &amp; Data Strategy Advisory
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
          <span className="block text-zinc-900">Make Data</span>
          <span className="block whitespace-nowrap text-[#2FB2A2]">Usable.</span>
          <span className="block text-zinc-900">Make Better</span>
          <span className="block whitespace-nowrap text-[#2FB2A2]">Decisions.</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-zinc-500 leading-relaxed font-light">
          We help organizations understand, structure, and use data effectively.
          Get clear direction and measurement logic without building complex systems
          or hiring massive teams.
        </p>
      </div>

      {/* RIGHT: Image (desktop only) */}
      <div className="hidden lg:block lg:col-span-5">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-100 shadow-lg">
          <img
            src="/home_pic.png"
            alt="Decision clarity"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </div>

    </div>
  </div>
</section>


  
<section className="py-16 bg-zinc-900">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-4">
      Our Distinction
    </p>
    <p className="text-lg md:text-xl text-zinc-200 font-medium italic leading-relaxed">
      “We define decision clarity. We don’t build pipelines. We bridge business goals and technical execution.”
    </p>
  </div>
</section>



    </div>
  );
};

export default Home;
