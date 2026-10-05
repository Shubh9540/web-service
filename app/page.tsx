import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.WebserviceHero1} />
      </div>
      <ServicesSection data={sectionData.Services?.variants?.WebserviceServices1} isSlider={true} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.WebserviceAboutUs1} />
      <PortfolioSection data={sectionData.Portfolio?.variants?.WebservicePortfolio1} />
      <CounterSection data={sectionData.Counter?.variants?.WebserviceCounter1} />
      <ProcessSection data={sectionData.Process?.variants?.WebserviceProcess1} />
      <TechnologiesSection data={sectionData.Technologies?.variants?.WebserviceTechnologies1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.WebserviceTestimonials1} />
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
