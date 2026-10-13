'use client';

import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open second item like screenshot

  if (!data?.faqs?.length) return null;

  return (
    <section className="relative w-full bg-section-blue pt-16 pb-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-60px] top-10 h-[300px] w-[300px] rounded-full bg-surface-blue blur-[100px]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 md:px-6">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="relative pt-6">
            {data.subtitle && (
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-bright" />
                <span className="text-size-12 font-bold uppercase tracking-[0.18em] text-blue-bright">
                  {data.subtitle}
                </span>
              </div>
            )}
            
            <h2 className="mb-6 text-size-36 font-extrabold leading-[1.15] text-heading md:text-size-46 whitespace-pre-line">
              {data.title1}{'\n'}<span className="text-brand">{data.title2}</span>
            </h2>
            
            <p className="mb-10 text-size-15 leading-relaxed text-muted">
              {data.description}
            </p>
            
            {/* Illustration */}
            <div className="relative w-full max-w-[500px]">
              <img 
                src="/portfolio/data analysis/1.webp" 
                alt={data.imageAlt}
                className="w-full h-auto object-contain rounded-2xl shadow-sm"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={faq.id} 
                  className={`flex flex-col overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(20,60,120,0.04)] transition-all duration-300 ${isOpen ? 'border border-brand' : 'border border-border-soft'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex items-center justify-between px-6 py-5 text-left transition-colors duration-300 ${
                      isOpen ? 'bg-brand text-white' : 'bg-white text-heading-soft hover:bg-hover-white'
                    }`}
                  >
                    <span className="text-size-15 font-bold leading-tight pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex shrink-0 transition-transform duration-300 ${isOpen ? 'text-white rotate-180' : 'text-brand'}`}>
                      <FaChevronDown className="text-size-12" />
                    </span>
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden bg-white">
                      <div className="px-6 py-5 text-size-14 leading-relaxed text-muted border-t border-border-faint">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
