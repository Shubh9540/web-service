import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} />
      </div>
      
      {/* About Us Section */}
      <AboutUsSection data={sectionData.AboutUs?.variants?.WebserviceAboutUs1} hideButton={true} />

      {/* Counter Section */}
      <CounterSection data={sectionData.Counter?.variants?.WebserviceCounter1} />

      {/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.WebserviceProcess1} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.WebserviceWhyChooseUs1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
