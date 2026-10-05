'use client';
import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FiMessageSquare, FiCalendar, FiTool, FiCheckCircle, FiFileText, FiMonitor, FiClipboard } from 'react-icons/fi';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiMessageSquare': return <FiMessageSquare />;
    case 'FiCalendar': return <FiCalendar />;
    case 'FiTool': return <FiTool />;
    case 'FiCheckCircle': return <FiCheckCircle />;
    case 'FiFileText': return <FiFileText />;
    case 'FiMonitor': return <FiMonitor />;
    case 'FiClipboard': return <FiClipboard />;
    case 'FaRocket': return <FaRocket />;
    default: return <FiCheckCircle />;
  }
};

export const ProcessSection = ({ data }: { data?: ProcessData }) => {
  if (!data) return null; return (

    <section className="relative w-full overflow-hidden bg-[#f4f8ff] py-16 lg:py-12">
      <div className="pointer-events-none absolute top-[-50px] right-[-50px] w-[500px] h-[500px] bg-[#eef4ff] rounded-full z-0 opacity-80 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#eef4ff] rounded-full z-0 opacity-80 blur-3xl"></div>

      {/* Subtle Dotted Grids */}
      <div className="pointer-events-none absolute left-4 md:left-10 top-10 grid grid-cols-5 gap-3 opacity-30 z-0">
        {[...Array(25)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#a5caff]"></div>)}
      </div>
      <div className="pointer-events-none absolute right-4 md:right-10 bottom-10 grid grid-cols-6 gap-3 opacity-30 z-0">
        {[...Array(30)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#a5caff]"></div>)}
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-20 text-center max-w-[750px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[#0d65ff]" />
            <h4 className="text-[#0d65ff] font-bold text-sm tracking-[0.15em] uppercase">
              {data.subtitle || "OUR PROCESS"}
            </h4>
            <div className="w-8 h-[2px] bg-[#0d65ff]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-5 tracking-tight">
            {data.title1} <span className="text-[#0d65ff]">{data.title2}</span>
          </h2>
          <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-relaxed mx-auto max-w-[600px]">
            {data.description || "We follow a simple, transparent and result-driven process to turn your ideas into powerful digital solutions."}
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-4 xl:gap-x-6 relative mt-16`}>

          {data.steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center group h-full">

              {/* Card Container */}
              <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(13,101,255,0.06)] w-full pt-16 pb-10 px-5 text-center relative z-10 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(13,101,255,0.12)] flex-grow flex flex-col">

                {/* Number Badge & Icon Container */}
                <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">

                    {/* Icon Circle */}
                    <div className="w-[84px] h-[84px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-2 relative">
                      {/* Inner Light Blue Circle */}
                      <div className="w-full h-full rounded-full flex items-center justify-center text-[#0d65ff] text-[40px] bg-[#f0f6ff] transition-transform duration-300 group-hover:scale-110">
                        {renderIcon(step.icon)}
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-1 -left-2 w-8 h-8 rounded-full bg-[#0d65ff] flex items-center justify-center text-white text-[12px] font-bold shadow-md z-30">
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#051024] mb-3 mt-2 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-[13px] leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Bottom Blue Dash */}
                <div className="w-6 h-[2px] bg-[#0d65ff] mx-auto mt-6" />
              </div>

              {/* Connecting Arrow */}
              {index < data.steps.length - 1 && (
                <div className="hidden lg:flex absolute top-0 -right-3 xl:-right-5 w-7 h-7 rounded-full bg-[#0d65ff] items-center justify-center text-white text-[12px] shadow-md z-30 transform -translate-y-1/2" style={{ top: '0px' }}>
                  <FaArrowRight />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
