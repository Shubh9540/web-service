'use client';
import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight, FaDesktop, FaCode } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaDesktop': return <FaDesktop />;
    case 'FaCode': return <FaCode />;
    default: return <FaDesktop />;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Watermark Text */}
      <div className="absolute right-0 top-0 h-full select-none pointer-events-none hidden lg:flex flex-col justify-center items-end z-0">
        <span
          className="text-[80px] xl:text-[80px] font-bold leading-none tracking-widest uppercase"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            WebkitTextStroke: '2px #f0f4f8',
            color: 'transparent',
            marginRight: '-10px'
          }}
        >
          About
        </span>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 xl:px-0 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Images */}
        <div className="w-full lg:w-[45%] xl:w-[48%] relative mt-10 lg:mt-0">

          {/* Decorative Dots Pattern (Top Right) */}
          <div className="absolute -top-12 -right-6 lg:-right-12 z-0 opacity-40">
            <div className="grid grid-cols-4 gap-3">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#a3b8d7] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Decorative Blue Rectangle */}
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-4 h-24 bg-[#0056fb] z-0 hidden lg:block"></div>

          {/* Main Image Container */}
          <div className="relative w-[95%] rounded-[30px] overflow-hidden shadow-2xl z-10 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3.2]">
            <img
              src={data.imageMain}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Overlapping Image */}
          {data.imageSmall2 && (
            <div className="absolute -bottom-10 right-0 w-[55%] rounded-2xl overflow-hidden border-[8px] border-white shadow-2xl z-20 aspect-[4/3.5]">
              <img
                src={data.imageSmall2}
                alt="Work"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] xl:w-[52%] flex flex-col mt-10 lg:mt-0 relative z-10">

          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#0056fb] font-bold text-lg">//</span>
            <span className="text-[#6b7280] font-semibold text-sm">
              {data.subtitle.replace('//', '').trim()}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[44px] font-extrabold leading-[1.1] sm:leading-[1.05] mb-6 tracking-tight">
            <span className="text-[#051024]">{data.title1}</span> <br className="hidden sm:block" />
            <span className="text-[#0056fb]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-[#6b7280] leading-relaxed text-[14px] sm:text-[15px] xl:text-base mb-10 max-w-[95%]">
            {data.description}
          </p>

          {/* Features Grid */}
          {data.features && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-10">
              {data.features.map((feat) => (
                <div key={feat.id} className="flex flex-col border border-gray-200 rounded-2xl p-6 sm:border-transparent sm:p-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f0f7ff] border border-[#e5f0ff] flex items-center justify-center text-[#0056fb] text-3xl sm:text-4xl mb-4 sm:mb-5">
                    {renderIcon(feat.icon)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#051024] mb-2 sm:mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          {!hideButton && data.button && (
            <div>
              <Link
                href={data.button.url}
                className="inline-flex items-center gap-2 bg-[#0056fb] hover:bg-[#0048d4] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgb(0,86,251,0.3)] hover:shadow-[0_12px_25px_rgb(0,86,251,0.4)] hover:-translate-y-1"
              >
                {data.button.text.replace('->', '').trim()}
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
