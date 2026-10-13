import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PortfolioPageContent } from '@/components/sections/PortfolioPageContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function PortfolioPage() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-surface-neutral min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <Breadcrumb data={commonData.portfolioBreadcrumb} />
      </div>
      
      {/* Portfolio Content Without Tabs */}
      <PortfolioPageContent data={sectionData.Portfolio?.variants?.WebservicePortfolio1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
