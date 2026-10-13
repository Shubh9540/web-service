import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative pt-32 pb-20 md:pt-40 md:pb-28 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${data.bgImage}')` }}
    >
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-size-15 font-semibold tracking-wide">
          {data.paths.map((path, index) => (
            <React.Fragment key={`${path.label}-${path.url ?? 'current'}`}>
              {path.url ? (
                <Link href={path.url} className="text-white hover:text-cyan transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white">{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="text-white mx-1 font-bold">{data.separator}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
