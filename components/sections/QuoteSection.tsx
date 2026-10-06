'use client';

import React, { useState } from 'react';
import { QuoteData } from '@/types/templates.types';
import {
  FaRegCommentDots,
  FaRegFileAlt,
  FaShieldAlt,
  FaHeadset,
  FaChartBar,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaBuilding,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegCommentDots':
      return <FaRegCommentDots />;

    case 'FaRegFileAlt':
      return <FaRegFileAlt />;

    case 'FaShieldAlt':
      return <FaShieldAlt />;

    case 'FaHeadset':
      return <FaHeadset />;

    case 'FaChartBar':
      return <FaChartBar />;

    default:
      return <FaRegCommentDots />;
  }
};

export const QuoteSection = ({ data }: { data?: QuoteData }) => {
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);

  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#f8fbff] py-16 lg:py-12">
      <div className="relative z-10 mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">

          {/* =========================
              LEFT COLUMN
          ========================== */}
          <div className="flex flex-col lg:col-span-5">

            {/* Subtitle */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0f67ff]" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f67ff]">
                {data.subtitle?.replace('//', '').trim()}
              </span>

              <span className="h-px w-8 bg-[#0f67ff]" />
            </div>

            {/* Title */}
            <h2 className="mb-6 text-4xl font-extrabold leading-[1.15] text-[#051024] md:text-5xl">
              {data.title1}
              <br />
              <span className="text-[#0d65ff]">
                {data.title2}
              </span>
            </h2>

            {/* Description */}
            <p className="mb-10 text-[15px] leading-relaxed text-[#657187]">
              {data.description}
            </p>

            {/* Features */}
            <div className="mb-12 flex flex-col gap-6">
              {data.features?.map((f) => (
                <div
                  key={f.id}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#e4edfa] bg-white text-[18px] text-[#0d65ff]">
                    {renderIcon(f.icon)}
                  </div>

                  <div className="flex flex-col pt-0.5">
                    <span className="mb-1 text-[15px] font-bold text-[#051024]">
                      {f.title}
                    </span>

                    <span className="max-w-[250px] text-[13px] leading-relaxed text-[#657187]">
                      {f.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-[30px] rounded-bl-[10px] rounded-tl-[120px] shadow-lg">
              <img
                src={data.image}
                alt="Team"
                className="h-full w-full object-cover"
              />

              {/* Floating Box */}
              {data.floatingBox && (
                <div className="absolute bottom-6 right-6 flex items-center gap-4 rounded-[16px] bg-[#0d65ff] p-5 shadow-xl">
                  <div className="text-[32px] text-white">
                    {renderIcon(data.floatingBox.icon)}
                  </div>

                  <div className="flex flex-col text-white">
                    <span className="text-[13px] font-medium opacity-90">
                      {data.floatingBox.text1}
                    </span>

                    <span className="text-[14px] font-bold">
                      {data.floatingBox.text2}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* =========================
              RIGHT COLUMN
          ========================== */}
          <div className="relative w-full rounded-[24px] border border-[#e4edfa] bg-white p-6 shadow-[0_20px_50px_rgba(13,101,255,0.06)] md:p-10 lg:col-span-7">

            {/* Form Heading */}
            <h3 className="mb-2 text-[28px] font-extrabold text-[#051024]">
              {data.form.title}{' '}
              <span className="text-[#0d65ff]">
                {data.form.titleHighlight}
              </span>
            </h3>

            <p className="mb-8 max-w-[450px] text-[14px] leading-relaxed text-[#657187]">
              {data.form.description}
            </p>

            {/* =========================
                FORM
            ========================== */}
            <form className="space-y-5">

              {/* Name + Email + Phone + Service */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Name */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaUser />
                  </span>

                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaPhoneAlt />
                  </span>

                  <input
                    type="tel"
                    placeholder="Your Phone Number *"
                    className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaBriefcase />
                  </span>

                  <select className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] text-[#657187] transition-colors focus:border-[#0d65ff] focus:outline-none">
                    <option value="">
                      Select Service *
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO Optimization</option>
                  </select>
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                  <FaBuilding />
                </span>

                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                />
              </div>

              {/* Project Details */}
              <div className="relative">
                <span className="absolute left-4 top-6 text-[#a0abbd]">
                  <FaRegCommentDots />
                </span>

                <textarea
                  placeholder={`Project Details *
Tell us about your project requirements...`}
                  rows={4}
                  className="w-full resize-none rounded-[8px] border border-[#e4edfa] bg-white py-4 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                />
              </div>

              {/* =========================
                  BUDGET
              ========================== */}
              <div className="pt-2">
                <label className="mb-3 block text-[13px] font-bold text-[#051024]">
                  Preferred Budget (Optional)
                </label>

                <div className="flex flex-wrap gap-3">
                  {data.form.budgets?.map((b, i) => {
                    const isSelected = selectedBudget === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedBudget(isSelected ? null : i)}
                        className={`rounded-[6px] border px-4 py-2 text-[12px] font-medium transition-colors ${isSelected
                          ? 'border-[#0d65ff] bg-[#edf5ff] text-[#0d65ff]'
                          : 'border-[#e4edfa] text-[#657187] hover:border-[#0d65ff] hover:text-[#0d65ff]'
                          }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline + Location */}
              <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">

                {/* Timeline */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaRegCalendarAlt />
                  </span>

                  <select className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] text-[#657187] transition-colors focus:border-[#0d65ff] focus:outline-none">
                    <option value="">
                      Expected Timeline (Optional)
                    </option>
                    <option value="less-than-1-month">Less than 1 month</option>
                    <option value="1-3-months">1 to 3 months</option>
                    <option value="3-6-months">3 to 6 months</option>
                    <option value="more-than-6-months">More than 6 months</option>
                  </select>
                </div>

                {/* Location */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0abbd]">
                    <FaMapMarkerAlt />
                  </span>

                  <input
                    type="text"
                    placeholder="Your Location (Optional)"
                    className="w-full rounded-[8px] border border-[#e4edfa] bg-white py-3.5 pl-11 pr-4 text-[14px] transition-colors focus:border-[#0d65ff] focus:outline-none"
                  />
                </div>
              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-[2px] h-4 w-4 rounded border-[#e4edfa] text-[#0d65ff] focus:ring-[#0d65ff]"
                />

                <span className="text-[13px] leading-relaxed text-[#657187]">
                  I agree to be contacted by your team regarding this enquiry.
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#0d65ff] py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#0b56db]"
              >
                {data.form.buttonText}

                <FaArrowRight className="text-[12px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};