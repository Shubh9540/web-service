import React from 'react';
import { GalleryData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data || !data.images) return null;

  return (
    <section className="w-full bg-[#f8fbff] py-16 lg:py-20">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0056fb] mb-4">
            <span className="w-8 md:w-12 h-[2px] bg-[#0056fb]"></span>
            {data.subtitle}
            <span className="w-8 md:w-12 h-[2px] bg-[#0056fb]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#051024] mb-4">
            {data.title1} <span className="text-[#0056fb]">{data.title2}</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.images.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full aspect-[4/3]"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#0056fb] hover:bg-[#0048d4] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View More Gallery
            <FaArrowRight className="text-xs font-normal" />
          </Link>
        </div>

      </div>
    </section>
  );
};
