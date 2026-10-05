import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqPage() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[#f8f9fc] min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <Breadcrumb data={{
          title: "FAQ",
          bgImage: commonData.aboutBreadcrumb?.bgImage, // Using about breadcrumb bg
          paths: [
            { label: "Home", url: "/" },
            { label: "FAQ" }
          ]
        }} />
      </div>
      
      {/* FAQ Content */}
      <FaqSection data={sectionData.Faq?.variants?.WebserviceFaq1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
