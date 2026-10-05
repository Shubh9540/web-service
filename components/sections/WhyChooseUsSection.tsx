'use client';
import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FaUsers, FaLightbulb, FaMedal, FaHeadset, FaChartLine, FaCheckCircle, FaChartBar } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaMedal': return <FaMedal />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaCheckCircle': return <FaCheckCircle />;
    default: return <FaMedal />;
  }
};

export const WhyChooseUsSection = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col xl:flex-row items-stretch gap-10 xl:gap-12">
        
        {/* Left Side: Image Area */}
        <div className="w-full xl:w-[38%] relative flex flex-col justify-center">
          
          {/* Blue Background Shape */}
          <div className="absolute -top-4 -left-4 w-[70%] h-[85%] bg-[#0d65ff] rounded-tl-[40px] rounded-br-[40px] z-0"></div>
          
          {/* Dotted Pattern (Top Right) */}
          <div className="absolute -top-6 -right-2 z-0 opacity-40">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#0d65ff] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10 w-[92%] rounded-tr-[80px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-[80px] overflow-hidden shadow-xl aspect-[4/3.5] bg-gray-100 ml-4">
            <img 
              src={data.imageMain || '/portfolio/app/1.webp'} 
              alt="Why Choose Us" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Blue Outline */}
          <div className="absolute -bottom-6 right-0 w-24 h-24 border-[3px] border-[#0d65ff] rounded-tr-[30px] rounded-bl-[30px] z-0"></div>

          {/* Floating Badge (Bottom Left) */}
          <div className="absolute -bottom-3 -left-2 bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] p-3 pr-5 flex items-center gap-3 z-20">
            <div>
              <h4 className="text-2xl font-extrabold text-[#0d65ff]">{data.badgeTitle || '100+'}</h4>
              <p className="text-[11px] font-semibold text-[#051024] mt-0.5 whitespace-nowrap">{data.badgeText || 'Projects Delivered'}</p>
            </div>
            <div className="w-8 h-8 bg-[#eef5ff] rounded flex items-center justify-center text-[#0d65ff] text-base">
              <FaChartBar />
            </div>
          </div>
          
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full xl:w-[62%] flex flex-col justify-center">
          
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0d65ff]"></div>
            <span className="text-[#0d65ff] font-semibold text-[13px] tracking-wide">
              {data.subtitle}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#051024] leading-[1.15] mb-4">
            {data.title1} <span className="text-[#0d65ff]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-[#6b7280] text-[14px] leading-relaxed mb-8 max-w-[95%]">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {data.features?.map(feat => (
              <div 
                key={feat.id} 
                className="bg-[#fcfcff] rounded-xl p-4 flex items-start gap-3 transition-all duration-300 hover:shadow-md hover:bg-white border border-gray-100"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#eef5ff] flex items-center justify-center text-[#0d65ff] shrink-0 text-lg shadow-sm">
                  {renderIcon(feat.icon)}
                </div>
                
                {/* Text */}
                <div className="flex-1 mt-0">
                  <h4 className="text-[#051024] font-bold text-[14px] mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-[#6b7280] text-[12px] leading-[1.4]">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
