'use client';

import React from 'react';
import { PricingData } from '@/types/templates.types';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaPaperPlane, FaCrown, FaGem, FaUsers } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  const icons: Record<string, React.ElementType> = {
    FaPaperPlane,
    FaCrown,
    FaGem,
  };
  const IconComponent = icons[iconName] || FaPaperPlane;
  return <IconComponent />;
};

export const PricingSection = ({ data }: { data?: PricingData }) => {
  if (!data?.plans?.length) return null;

  return (
    <section className="relative w-full bg-section-blue pt-16 pb-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-surface-blue blur-[80px]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 md:px-6">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          {data.subtitle && (
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-bright" />
              <span className="text-size-12 font-bold uppercase tracking-[0.18em] text-blue-bright">
                {data.subtitle.replace('//', '').trim()}
              </span>
              <span className="h-px w-8 bg-blue-bright" />
            </div>
          )}
          <h2 className="text-size-32 font-extrabold leading-tight text-heading md:text-size-42">
            {data.title1} <span className="text-brand">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-size-15 leading-relaxed text-muted">
            {data.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.plans.map((plan) => (
            <div
              key={plan.id}
              className="group relative overflow-hidden rounded-3xl border border-border-soft bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-brand hover:shadow-[0_20px_40px_rgba(13,101,255,0.25)]"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-[-30px] top-6 rotate-[45deg] bg-brand px-10 py-1.5 text-size-11 font-bold text-white shadow-md transition-colors duration-300 group-hover:bg-orange">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="mb-6 inline-flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-surface-blue text-size-24 text-brand transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                  {renderIcon(plan.icon)}
                </div>

                <h3 className="mb-2 text-size-22 font-extrabold text-heading transition-colors duration-300 group-hover:text-white">
                  {plan.name}
                </h3>
                <p className="mb-6 text-size-13 leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
                  {plan.description}
                </p>

                <div className="mb-6 border-b border-border-soft pb-6 transition-colors duration-300 group-hover:border-white/20">
                  <span className="text-size-44 font-extrabold text-heading transition-colors duration-300 group-hover:text-white">
                    {data.currencySymbol}{plan.price}
                  </span>
                  <span className="ml-1 text-size-13 font-bold text-muted transition-colors duration-300 group-hover:text-white/80">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-[3px] shrink-0 text-brand transition-colors duration-300 group-hover:text-white" />
                      <span className="text-size-14 font-medium text-heading-soft transition-colors duration-300 group-hover:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer Text */}
                <div className="mb-6 flex items-center justify-center gap-2 border-t border-border-soft pt-6 transition-colors duration-300 group-hover:border-white/20">
                  <FaUsers className="text-brand transition-colors duration-300 group-hover:text-white" />
                  <span className="text-size-12 font-medium text-muted transition-colors duration-300 group-hover:text-white/80">
                    {plan.footerText}
                  </span>
                </div>

                <Link
                  href={plan.buttonUrl}
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand bg-transparent py-3.5 text-size-14 font-bold text-brand transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-brand"
                >
                  {plan.buttonText.replace('->', '').trim()}
                  <FaArrowRight className="text-size-12" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
