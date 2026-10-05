import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[#f8f9fc] min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <Breadcrumb data={{
          title: "Our Packages",
          bgImage: commonData.aboutBreadcrumb?.bgImage, // Using about breadcrumb bg
          paths: [
            { label: "Home", url: "/" },
            { label: "Our Packages" }
          ]
        }} />
      </div>
      
      {/* Pricing Content */}
      <PricingSection data={sectionData.Pricing?.variants?.WebservicePricing1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
