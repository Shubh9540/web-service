import React from 'react';
import { CtaData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const CtaSection = ({ data }: { data?: CtaData }) => {
  if (!data) return null;

  return (
    <section className="bg-transparent relative z-30 w-full -mb-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Container */}
        <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-r from-[#0056fb] to-[#003bb5] shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
          
          {/* Background Overlay Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Light blue semi-circles */}
            <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute -top-32 -right-10 w-[400px] h-[400px] bg-white/5 rounded-full z-0 pointer-events-none"></div>
            
            {/* Dots pattern overlay left */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 opacity-20 hidden md:block">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-white"></div>)}
              </div>
            </div>

            {/* Dots pattern overlay right */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-20 hidden md:block">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-white"></div>)}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-10 md:py-12 lg:px-24 lg:py-14 gap-6 md:gap-8 text-center md:text-left">
            
            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
                <div className="w-8 h-[1px] bg-white/70"></div>
                <span className="text-white/90 font-medium text-[10px] md:text-xs tracking-widest uppercase">
                  CONTACT US
                </span>
              </div>
              
              <h2 className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1">
                <span className="text-[#ffb800]">24/7</span> Expert Support
              </h2>
              
              <h2 className="text-[26px] leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                We're Always Here for You
              </h2>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 z-20">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ffb800] hover:bg-[#e6a600] text-[#051024] font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
              >
                Contact Us
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
