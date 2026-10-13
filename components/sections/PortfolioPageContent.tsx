'use client';

import React from 'react';
import { PortfolioCategory, PortfolioData } from '@/types/templates.types';
import Link from 'next/link';
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaChartBar,
  FaPencilRuler,
  FaMobileAlt,
  FaWordpress,
  FaCube,
  FaChartPie,
  FaDatabase,
  FaChartLine,
  FaServer,
  FaLaptopCode,
  FaPalette,
  FaUsers,
  FaMobile,
  FaLayerGroup,
  FaPenNib,
  FaShieldAlt,
  FaCode,
  FaPlug,
  FaTachometerAlt,
  FaCubes,
  FaVideo,
  FaVrCardboard,
  FaDraftingCompass,
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  const icons: Record<string, React.ElementType> = {
    FaChartBar,
    FaPencilRuler,
    FaMobileAlt,
    FaWordpress,
    FaCube,
    FaChartPie,
    FaDatabase,
    FaChartLine,
    FaServer,
    FaLaptopCode,
    FaPalette,
    FaUsers,
    FaMobile,
    FaLayerGroup,
    FaPenNib,
    FaShieldAlt,
    FaCode,
    FaPlug,
    FaTachometerAlt,
    FaCubes,
    FaVideo,
    FaVrCardboard,
    FaDraftingCompass,
  };
  const IconComponent = icons[iconName] || FaChartBar;
  return <IconComponent />;
};

const PortfolioItem = ({ cat, isEven, previousSlideLabel, nextSlideLabel }: { cat: PortfolioCategory; isEven: boolean; previousSlideLabel: string; nextSlideLabel: string }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const images = cat.sliderImages;

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_12px_35px_rgba(28,72,135,0.08)] md:p-6">
      <div className={`grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-2 items-center`}>
        
        {/* Image Block with Slider */}
        <div className={`relative w-full h-[350px] lg:h-[450px] rounded-[20px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          {images.map((imgSrc, idx) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`${cat.title} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={previousSlideLabel}
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg hover:bg-brand hover:text-white transition-colors"
              >
                <FaChevronLeft className="text-size-14" />
              </button>
              <button
                onClick={nextSlide}
                aria-label={nextSlideLabel}
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg hover:bg-brand hover:text-white transition-colors"
              >
                <FaChevronRight className="text-size-14" />
              </button>
              
              {/* Slider dots */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {images.map((image, idx) => (
                  <button
                    key={image}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 w-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-brand' : 'bg-white/60 hover:bg-white'}`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Block */}
        <div className={`relative py-4 lg:py-8 px-4 lg:px-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-size-11 font-extrabold uppercase tracking-[0.04em] text-brand">
              {cat.subtitle}
            </span>
          </div>

          <h3 className="mb-4 text-size-26 font-extrabold leading-[1.1] text-heading md:text-size-32">
            {cat.title}
          </h3>

          <p className="mb-6 text-size-14 leading-relaxed text-muted">
            {cat.description}
          </p>

          {/* Features */}
          <div className="mb-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {cat.features.map((feat) => (
              <div key={feat.id} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-size-20 lg:text-size-24 text-brand">
                  {renderIcon(feat.icon)}
                </div>
                <div>
                  <h4 className="text-size-12 lg:text-size-13 font-extrabold text-heading-soft leading-tight">
                    {feat.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export const PortfolioPageContent = ({ data }: { data?: PortfolioData }) => {
  if (!data?.categories?.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-section-blue pt-16 pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-surface-blue blur-[80px]" />
      <div className="pointer-events-none absolute right-[-60px] top-5 grid grid-cols-6 gap-2.5 opacity-50">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-dot-blue" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 md:px-6">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          {data.subtitle && (
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-bright" />
              <span className="text-size-12 font-bold uppercase tracking-[0.18em] text-blue-bright">
                {data.subtitle}
              </span>
              <span className="h-px w-8 bg-blue-bright" />
            </div>
          )}
          <h2 className="text-size-32 font-extrabold leading-tight text-heading md:text-size-42">
            {data.title1} <span className="text-brand">{data.title2}</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-12">
          {data.categories.map((cat, index) => (
            <PortfolioItem key={cat.id} cat={cat} isEven={index % 2 === 0} previousSlideLabel={data.previousSlideLabel} nextSlideLabel={data.nextSlideLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};
