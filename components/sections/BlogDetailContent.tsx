import React from 'react';
import { BlogItem, BlogsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

export const BlogDetailContent = ({ blog, recentBlogs, detailUI, sidebarCta }: { blog: BlogItem; recentBlogs: BlogItem[]; detailUI: BlogsData['detailUI']; sidebarCta?: BlogsData['sidebarCta'] }) => {
  return (
    <section className="w-full py-10 md:py-8 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-12">

        {/* Left Side: Main Content */}
        <div className="w-full lg:w-2/3">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-size-10 font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            {blog.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-semibold mb-8">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[var(--color-primary)]" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-[var(--color-primary)]" />
              {detailUI.authorLabel}
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[var(--color-primary)]" />
              {detailUI.readTimeLabel}
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-10">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-500 text-sm md:text-base leading-relaxed">
            <p className="mb-8">
              {blog.description}
            </p>
            <p className="mb-8">
              {blog.content?.intro}
            </p>

            {blog.content?.sections?.map((section) => (
              <React.Fragment key={section.heading}>
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 mt-8">{section.heading}</h3>
                <p className="mb-4">
                  {section.text}
                </p>
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">

          {/* Recent Blogs */}
          <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 md:p-8 border border-gray-200">
            <h4 className="text-xl font-bold text-navy mb-6">{detailUI.recentBlogsTitle}</h4>
            <div className="flex flex-col gap-5">
              {recentBlogs.map(rb => (
                <Link key={rb.id} href={rb.url} className="flex items-center gap-4 group">
                  <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <img src={rb.image} alt={rb.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h5 className="text-navy font-bold text-xs md:text-sm leading-tight mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      {rb.title}
                    </h5>
                    <div className="flex items-center gap-1.5 text-size-10 text-gray-400 font-semibold uppercase tracking-wider">
                      <FaCalendarAlt className="text-[var(--color-primary)]" />
                      {rb.date}
                    </div>
                  </div>
                  <div className="shrink-0 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors pl-2">
                    <FaArrowRight className="text-sm" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {sidebarCta && (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-primary p-6 md:p-8 text-white shadow-lg">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10" />
              <div className="relative z-10">
                <h4 className="mb-4 text-2xl font-extrabold leading-tight">
                  {sidebarCta.title1}<br />{sidebarCta.title2}
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-white/85">
                  {sidebarCta.description}
                </p>
                <Link
                  href={sidebarCta.buttonUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {sidebarCta.buttonText}
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
