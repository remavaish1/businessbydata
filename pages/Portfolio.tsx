
import React from 'react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Case Studies</h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Anonymized examples of how we've helped leaders across industries achieve data clarity and structural discipline.
            </p>
          </div>

          <div className="space-y-24">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 group">
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex gap-2 mb-4">
                        {study.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">{study.title}</h2>
                    <p className="text-sm text-zinc-400 font-medium mb-6">{study.industry}</p>
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                        <p className="text-sm text-zinc-600 leading-relaxed italic">
                            "{study.context}"
                        </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">The Problem</h4>
                      <p className="text-zinc-600 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Our Approach</h4>
                      <p className="text-zinc-600 leading-relaxed">{study.approach}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-zinc-100">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {study.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-zinc-800">
                            <span className="w-1 h-1 rounded-full bg-zinc-900"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Final Outcomes</h4>
                      <ul className="space-y-2">
                        {study.outcomes.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                            <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Portfolio;
