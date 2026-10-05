'use client';

import React, { useState } from 'react';
import { PortfolioData } from '@/types/templates.types';
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

import Link from 'next/link';

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

export const PortfolioSection = ({
  data,
}: {
  data?: PortfolioData;
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!data?.categories?.length) return null;

  const currentCategory = data.categories[activeTab];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (!currentCategory.sliderImages?.length) return;

    setCurrentSlide((prev) =>
      prev === currentCategory.sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!currentCategory.sliderImages?.length) return;

    setCurrentSlide((prev) =>
      prev === 0 ? currentCategory.sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8ff] pt-12 pb-28 lg:pt-16 lg:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#edf5ff] blur-[80px]" />

      <div className="pointer-events-none absolute right-[-60px] top-[20px] grid grid-cols-6 gap-[10px] opacity-50">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="h-[4px] w-[4px] rounded-full bg-[#b7d3ff]"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 md:px-6">

        {/* Heading */}
        {(data.subtitle || data.title1 || data.title2) && (
          <div className="mb-10 text-center">
            {data.subtitle && (
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#0f67ff]" />

                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f67ff]">
                  {data.subtitle}
                </span>

                <span className="h-px w-8 bg-[#0f67ff]" />
              </div>
            )}

            <h2 className="text-[32px] font-extrabold leading-tight text-[#07142c] md:text-[42px]">
              {data.title1}{' '}
              <span className="text-[#0d65ff]">{data.title2}</span>
            </h2>
          </div>
        )}

        {/* =========================
            TABS
        ========================== */}
        <div className="relative z-20 mb-[-18px] flex gap-3 overflow-x-auto px-4 pb-6 pt-4 -mt-4 md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {data.categories.map((cat, index) => {
            const isActive = index === activeTab;

            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(index)}
                className={`
                  relative shrink-0
                  min-w-[150px] sm:min-w-[170px]
                  rounded-[14px]
                  border
                  px-4 sm:px-5
                  pb-4
                  pt-9
                  transition-all
                  duration-300
                  ${isActive
                    ? 'border-[#0d65ff] bg-[#0d65ff] text-white shadow-[0_12px_30px_rgba(13,101,255,0.20)]'
                    : 'border-[#dde7f5] bg-white text-[#101b32] shadow-[0_5px_20px_rgba(25,60,110,0.05)]'
                  }
                `}
              >
                {/* icon floating circle */}
                <div
                  className={`
                    absolute
                    left-1/2
                    top-0
                    flex
                    h-[58px]
                    w-[58px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-[25px]
                    shadow-[0_4px_16px_rgba(40,100,180,0.12)]
                    ${isActive
                      ? 'border-white bg-white text-[#0d65ff]'
                      : 'border-[#e2ebf7] bg-white text-[#0d65ff]'
                    }
                  `}
                >
                  {renderIcon(cat.icon)}
                </div>

                <span className="block whitespace-nowrap text-[14px] font-bold">
                  {cat.label}
                </span>

                {isActive && (
                  <span className="absolute bottom-[-8px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#0d65ff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* =========================
            MAIN PORTFOLIO BOX
        ========================== */}
        <div className="relative overflow-hidden rounded-[28px] border border-[#e4edfa] bg-white px-4 pb-4 pt-12 shadow-[0_12px_35px_rgba(28,72,135,0.08)] md:px-6 md:pb-6 md:pt-12 lg:px-8">

          {/* subtle dots left */}
          <div className="pointer-events-none absolute left-[-8px] top-[90px] grid grid-cols-3 gap-[10px] opacity-60">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="h-[4px] w-[4px] rounded-full bg-[#a5caff]"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[40%_60%]">

            {/* =========================
                LEFT SLIDER
            ========================== */}
            <div className="relative overflow-hidden rounded-[20px] h-full">
              <div className="h-full w-full">
                <img
                  key={`${activeTab}-${currentSlide}`}
                  src={
                    currentCategory.sliderImages?.[currentSlide] ||
                    currentCategory.sliderImages?.[0]
                  }
                  alt={currentCategory.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* arrows */}
              {currentCategory.sliderImages?.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0d65ff] shadow-lg transition hover:bg-[#0d65ff] hover:text-white"
                  >
                    <FaChevronLeft className="text-[14px]" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0d65ff] shadow-lg transition hover:bg-[#0d65ff] hover:text-white"
                  >
                    <FaChevronRight className="text-[14px]" />
                  </button>

                </>
              )}
            </div>

            {/* =========================
                RIGHT CONTENT
            ========================== */}
            <div className="relative min-h-[370px] overflow-hidden rounded-[20px] bg-white px-6 py-6 md:px-8 lg:min-h-0 lg:py-7">

              {/* text area */}
              <div className="relative z-10 max-w-[58%] max-lg:max-w-full">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[15px] font-extrabold text-[#0d65ff]">
                    //
                  </span>

                  <span className="text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#0d65ff]">
                    {currentCategory.subtitle?.replace('//', '').trim()}
                  </span>
                </div>

                <h3 className="mb-3 text-[28px] font-extrabold leading-[1.05] text-[#07142c] md:text-[34px]">
                  {currentCategory.title}
                </h3>

                <p className="mb-5 max-w-[500px] text-[13px] leading-[1.65] text-[#657187]">
                  {currentCategory.description}
                </p>

                {/* features */}
                <div className="mb-6 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                  {currentCategory.features?.map((feat) => (
                    <div key={feat.id} className="flex items-start gap-3">

                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#edf5ff] text-[18px] text-[#0d65ff]">
                        {renderIcon(feat.icon)}
                      </div>

                      <div className="pt-[2px]">
                        <h4 className="text-[13px] font-extrabold leading-[1.25] text-[#111c33]">
                          {feat.title}
                        </h4>

                        {feat.description && (
                          <p className="mt-1 text-[11px] leading-[1.45] text-[#788396]">
                            {feat.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentCategory.button.url}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-[9px]
                    bg-[#0d65ff]
                    px-6
                    py-3
                    text-[13px]
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(13,101,255,0.20)]
                    transition
                    hover:bg-[#0756dc]
                  "
                >
                  {currentCategory.button.text.replace('->', '').trim()}
                  <FaArrowRight className="text-[12px]" />
                </Link>
              </div>

              {/* right fixed PNG */}
              {currentCategory.fixedImage && (
                <div className="pointer-events-none absolute bottom-[-6px] right-[-10px] hidden h-full w-[43%] items-center justify-end lg:flex">
                  <img
                    src={currentCategory.fixedImage}
                    alt=""
                    className="max-h-[92%] w-full object-contain object-right drop-shadow-[0_16px_18px_rgba(20,40,80,0.12)]"
                  />
                </div>
              )}

              {/* circular dotted decoration */}
              <div className="pointer-events-none absolute right-[5%] top-[8%] hidden h-[260px] w-[260px] rounded-full border border-dashed border-[#cfe0ff] lg:block" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};