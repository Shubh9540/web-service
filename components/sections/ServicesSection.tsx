'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCode, FaCloud, FaShieldAlt, FaCog, FaServer, FaUsers, FaChartBar, FaMobileAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCode': return <FaCode />;
    case 'FaCloud': return <FaCloud />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaCog': return <FaCog />;
    case 'FaServer': return <FaServer />;
    case 'FaUsers': return <FaUsers />;
    case 'FaChartBar': return <FaChartBar />;
    case 'FaMobileAlt': return <FaMobileAlt />;
    default: return <FaCode />;
  }
};

export const ServicesSection = ({ data, hideButton = false, isSlider = false }: { data?: ServicesData, hideButton?: boolean, isSlider?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else if (window.innerWidth < 1280) setCardsToShow(3);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data) return null;

  const nextSlide = () => {
    if (currentIndex >= data.services.length - cardsToShow) {
      setCurrentIndex(0); // Infinite loop to start
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.services.length - cardsToShow); // Infinite loop to end
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white rounded-3xl border border-[#e5f0ff] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 xl:p-7 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
      <div className="w-14 h-14 rounded-xl bg-[#f0f7ff] border border-[#e5f0ff] flex items-center justify-center text-[#0056fb] text-2xl mb-5">
        {renderIcon(service.icon)}
      </div>
      <Link href={service.url} className="group/text flex flex-col flex-grow cursor-pointer">
        <h3 className="text-xl font-bold text-[#051024] group-hover/text:text-[#0056fb] transition-colors mb-3">
          {service.title}
        </h3>
        <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 flex-grow">
          {service.description}
        </p>
      </Link>
      <Link href={service.url} className="inline-flex items-center justify-center gap-2 border border-[#0056fb] rounded-full px-5 py-2 text-[#0056fb] font-semibold text-sm hover:bg-[#0056fb] hover:text-white transition-colors w-max mt-auto">
        Read More
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );

  return (
    <section className={`w-full py-12 relative overflow-hidden ${isSlider ? 'bg-[#f8fbff]' : 'bg-white'}`}>
      {isSlider && (
        <div className="absolute top-0 right-0 w-full h-[300px] overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[400px] -right-[100px] w-[800px] h-[800px] bg-[#f0f5ff] rounded-full" />
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

        {/* Header Section */}
        <div className={`flex flex-col ${isSlider ? 'lg:flex-row lg:items-end lg:justify-between' : 'items-center text-center'} mb-12`}>
          <div className="max-w-[800px]">
            <div className={`flex items-center gap-4 mb-4 ${!isSlider && 'justify-center'}`}>
              <div className="w-8 h-[2px] bg-[#0056fb]" />
              <h4 className="text-[#0056fb] font-semibold text-sm tracking-widest uppercase">
                {data.subtitle}
              </h4>
              <div className="w-8 h-[2px] bg-[#0056fb]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-[#051024]">
              {data.title1}{' '}
              <span className="text-[#0056fb] block sm:inline">{data.title2}</span>
            </h2>
            {data.description && (
              <p className="text-[#6b7280] mt-4 max-w-2xl text-[15px] leading-relaxed">
                {data.description}
              </p>
            )}
          </div>

          {/* Slider Controls */}
          {isSlider && (
            <div className="flex gap-4 mt-8 lg:mt-0">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-[#e5f0ff] flex items-center justify-center text-[#0056fb] hover:bg-[#0056fb] hover:text-white transition-all"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,55,255,0.2)] bg-[#0056fb] text-white hover:bg-[#0048d4] transition-all"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        {isSlider ? (
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {data.services.map((service) => (
                <div
                  key={service.id}
                  className="w-full shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
