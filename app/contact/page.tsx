import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WebserviceTopBar1} logoData={sectionData.Header?.variants?.WebserviceHeader1} />
      <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      {/* Contact Section */}
      <ContactSection data={sectionData.contact?.variants?.WebserviceContact1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
