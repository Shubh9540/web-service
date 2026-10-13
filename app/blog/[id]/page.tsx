import React from 'react';
import { WebserviceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WebserviceTemplateData = rawData;
  const sectionData = templateData?.categories?.Webservice?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const blogsData = sectionData.Blogs?.variants?.WebserviceBlogs1;
  if (!blogsData) return null;

  const allBlogs = blogsData.blogs;
  const currentBlog = allBlogs.find(b => b.url.endsWith(`/${id}`));

  if (!currentBlog) {
    notFound();
  }

  // Get 5 recent blogs, excluding the current one
  const recentBlogs = allBlogs.filter(b => b.id !== currentBlog.id).slice(0, 5);

  const breadcrumbData = {
    ...commonData.blogDetailBreadcrumb,
    title: currentBlog.title,
    paths: [
      ...commonData.blogDetailBreadcrumb.paths.slice(0, -1),
      commonData.blogDetailBreadcrumb.paths.at(-1)!,
    ],
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WebserviceTopBar1} logoData={sectionData.Header?.variants?.WebserviceHeader1} />
      <Header data={sectionData.Header?.variants?.WebserviceHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailContent blog={currentBlog} recentBlogs={recentBlogs} detailUI={blogsData.detailUI} sidebarCta={blogsData.sidebarCta} />

      <CtaSection data={sectionData.Cta?.variants?.WebserviceCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
