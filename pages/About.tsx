
import React from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">Our Founder</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8">Rema Vaish</h1>
              <div className="prose prose-zinc prose-lg">
                <p className="text-zinc-500 leading-relaxed mb-6 font-light">
                  With over 12 years of specialized experience in data strategy, analytics, and governance, Rema Vaish founded Business By Data with a single mission: to provide the clarity leaders need to make confident decisions.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-6 font-light">
                  Rema has spent her career bridging the gap between executive ambitions and technical realities. She understands that for most organizations, the bottleneck isn't a lack of tools, but a lack of definition, logic, and measurement discipline.
                </p>
                <p className="text-zinc-500 leading-relaxed font-light">
                  Business By Data was built to serve as an executive partner that translates complex business goals into structured data frameworks, ensuring that implementation teams build correctly the first time.
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-50 rounded-sm">
                    <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">12+ Years Experience</h4>
                    <p className="text-sm text-zinc-500">Expertise in decision support, governance, and fractional leadership across multiple industries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-50 rounded-sm">
                    <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">Liaison-First Approach</h4>
                    <p className="text-sm text-zinc-500">A proven ability to act as the executive voice within technical data projects.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-8">
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 font-medium text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-zinc-100 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="/rema11.JPG" 
                  alt="Rema Vaish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 p-10 bg-white shadow-xl border border-zinc-50 rounded-sm hidden md:block max-w-[280px]">
                <p className="text-zinc-900 font-medium text-lg italic">
                    "Strategy without measurement logic is just a wish list."
                </p>
                <p className="mt-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">— Rema Vaish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-12">How I Work</h2>
            <div className="space-y-12 text-left">
                <div className="flex gap-8 items-start">
                    <div className="text-zinc-300 font-bold text-4xl mt-1">01</div>
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-2">The Strategic Translation</h3>
                        <p className="text-zinc-500 leading-relaxed font-light">I translate high-level business goals into specific data points and measurement logic. If you want to increase profit, I define exactly which fields, at which frequency, and via which calculation that goal will be tracked.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-start">
                    <div className="text-zinc-300 font-bold text-4xl mt-1">02</div>
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-2">The Tactical Handover</h3>
                        <p className="text-zinc-500 leading-relaxed font-light">I don't just leave you with ideas. I produce the technical requirements that your engineers or third-party vendors need to build accurate reports. I minimize the risk of "misinterpretation" between management and tech.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-start">
                    <div className="text-zinc-300 font-bold text-4xl mt-1">03</div>
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-2">Operational Embedding</h3>
                        <p className="text-zinc-500 leading-relaxed font-light">Reports are useless if not used. I work with you to integrate these metrics into your weekly or monthly decision cycles, ensuring the data actually drives action.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
