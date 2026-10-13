import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  // Find matching service data if available, or fallback to first variant
  let serviceDetailData = sectionData.ServiceDetail?.variants?.[id];
  if (!serviceDetailData) {
     const allVariants = Object.values(sectionData.ServiceDetail?.variants || {});
     serviceDetailData = allVariants[0];
  }

  if (!serviceDetailData) return null;

  const fullTitle = `${serviceDetailData.title1} ${serviceDetailData.title2}`.trim();

  const dynamicBreadcrumb = {
    ...commonData.serviceDetailBreadcrumb,
    paths: [
      ...commonData.serviceDetailBreadcrumb.paths.slice(0, -1),
      { label: fullTitle },
    ],
  };

  return (
    <main className="bg-surface-neutral min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
        <Breadcrumb data={dynamicBreadcrumb} />
      </div>
      
      {/* Service Detail Content */}
      <ServiceDetailContent data={serviceDetailData} serviceId={id} servicesList={sectionData.Services?.variants?.WebserviceServices1?.services} ui={commonData.globalUI.serviceDetail} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
