'use client';

import React, { useState } from 'react';
import { BlogsData } from '@/types/templates.types';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const BlogsSection = ({ data, isPage = false }: { data?: BlogsData, isPage?: boolean }) => {
  const [visibleCount, setVisibleCount] = useState(isPage ? 6 : 3);

  if (!data || !data.blogs) return null;

  const visibleBlogs = data.blogs.slice(0, visibleCount);
  const hasMore = visibleCount < data.blogs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="bg-white py-10 md:py-8">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              {data.subtitle}
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-4">
              {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              {data.description}
            </p>
          </div>

          {!isPage && (
            <Link
              href={data.button.url}
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:opacity-90 text-white font-bold py-3.5 px-8 rounded-xl transition-opacity shrink-0"
            >
              {data.button.text}
              <FaArrowRight />
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group"
            >
              {/* Image Area */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white text-[var(--color-primary)] px-3 py-1.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-2">
                  <FaCalendarAlt />
                  {blog.date}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h4 className="text-[var(--color-primary)] text-xs font-bold uppercase mb-3 tracking-wide">
                  {blog.category}
                </h4>
                <Link href={blog.url} className="group-hover:text-[var(--color-primary)] transition-colors">
                  <h3 className="text-xl font-bold text-[#051024] leading-tight mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.description}
                </p>
                <Link
                  href={blog.url}
                  className="text-[var(--color-primary)] font-bold text-sm flex items-center gap-2 mt-auto hover:opacity-80 transition-opacity"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {isPage && hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold py-3.5 px-8 rounded-xl transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
