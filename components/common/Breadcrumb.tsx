import React from 'react';
import Link from 'next/link';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative pt-32 pb-20 md:pt-40 md:pb-28 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.webp'}')` }}
    >
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-[15px] font-semibold tracking-wide">
          {data.paths?.map((path: any, index: number) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="text-white hover:text-[#00cfff] transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white">{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="text-white mx-1 font-bold">{'>'}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
