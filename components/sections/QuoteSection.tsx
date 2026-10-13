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
    <section className="relative w-full overflow-hidden bg-section-light py-16 lg:py-12">
      <div className="relative z-10 mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">

          {/* =========================
              LEFT COLUMN
          ========================== */}
          <div className="flex flex-col lg:col-span-5">

            {/* Subtitle */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-bright" />

              <span className="text-size-12 font-bold uppercase tracking-[0.18em] text-blue-bright">
                {data.subtitle?.replace('//', '').trim()}
              </span>

              <span className="h-px w-8 bg-blue-bright" />
            </div>

            {/* Title */}
            <h2 className="mb-6 text-4xl font-extrabold leading-[1.15] text-navy md:text-5xl">
              {data.title1}
              <br />
              <span className="text-brand">
                {data.title2}
              </span>
            </h2>

            {/* Description */}
            <p className="mb-10 text-size-15 leading-relaxed text-muted">
              {data.description}
            </p>

            {/* Features */}
            <div className="mb-12 flex flex-col gap-6">
              {data.features?.map((f) => (
                <div
                  key={f.id}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-border-soft bg-white text-size-18 text-brand">
                    {renderIcon(f.icon)}
                  </div>

                  <div className="flex flex-col pt-0.5">
                    <span className="mb-1 text-size-15 font-bold text-navy">
                      {f.title}
                    </span>

                    <span className="max-w-[250px] text-size-13 leading-relaxed text-muted">
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
                alt={data.imageAlt}
                className="h-full w-full object-cover"
              />

              {/* Floating Box */}
              {data.floatingBox && (
                <div className="absolute bottom-6 right-6 flex items-center gap-4 rounded-2xl bg-brand p-5 shadow-xl">
                  <div className="text-size-32 text-white">
                    {renderIcon(data.floatingBox.icon)}
                  </div>

                  <div className="flex flex-col text-white">
                    <span className="text-size-13 font-medium opacity-90">
                      {data.floatingBox.text1}
                    </span>

                    <span className="text-size-14 font-bold">
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
          <div className="relative w-full rounded-3xl border border-border-soft bg-white p-6 shadow-[0_20px_50px_rgba(13,101,255,0.06)] md:p-10 lg:col-span-7">

            {/* Form Heading */}
            <h3 className="mb-2 text-size-28 font-extrabold text-navy">
              {data.form.title}{' '}
              <span className="text-brand">
                {data.form.titleHighlight}
              </span>
            </h3>

            <p className="mb-8 max-w-[450px] text-size-14 leading-relaxed text-muted">
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
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaUser />
                  </span>

                  <input
                    type="text"
                    placeholder={data.form.namePlaceholder}
                    className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    placeholder={data.form.emailPlaceholder}
                    className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaPhoneAlt />
                  </span>

                  <input
                    type="tel"
                    placeholder={data.form.phonePlaceholder}
                    className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaBriefcase />
                  </span>

                  <select className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 text-muted transition-colors focus:border-brand focus:outline-none">
                    <option value="">
                      {data.form.servicePlaceholder}
                    </option>
                    {data.form.serviceOptions.map((option) => (
                      <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                  <FaBuilding />
                </span>

                <input
                  type="text"
                  placeholder={data.form.companyPlaceholder}
                  className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                />
              </div>

              {/* Project Details */}
              <div className="relative">
                <span className="absolute left-4 top-6 text-icon-muted">
                  <FaRegCommentDots />
                </span>

                <textarea
                  placeholder={data.form.projectPlaceholder}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border-soft bg-white py-4 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                />
              </div>

              {/* =========================
                  BUDGET
              ========================== */}
              <div className="pt-2">
                <label className="mb-3 block text-size-13 font-bold text-navy">
                  {data.form.budgetLabel}
                </label>

                <div className="flex flex-wrap gap-3">
                  {data.form.budgets?.map((b, i) => {
                    const isSelected = selectedBudget === i;
                    return (
                      <button
                      key={b}
                        type="button"
                        onClick={() => setSelectedBudget(isSelected ? null : i)}
                        className={`rounded-md border px-4 py-2 text-size-12 font-medium transition-colors ${isSelected
                          ? 'border-brand bg-surface-blue text-brand'
                          : 'border-border-soft text-muted hover:border-brand hover:text-brand'
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
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaRegCalendarAlt />
                  </span>

                  <select className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 text-muted transition-colors focus:border-brand focus:outline-none">
                    <option value="">
                      {data.form.timelinePlaceholder}
                    </option>
                    {data.form.timelineOptions.map((option) => (
                      <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted">
                    <FaMapMarkerAlt />
                  </span>

                  <input
                    type="text"
                    placeholder={data.form.locationPlaceholder}
                    className="w-full rounded-lg border border-border-soft bg-white py-3.5 pl-11 pr-4 text-size-14 transition-colors focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 h-4 w-4 rounded border-border-soft text-brand focus:ring-brand"
                />

                <span className="text-size-13 leading-relaxed text-muted">
                  {data.form.consentLabel}
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-4 text-size-15 font-bold text-white transition-colors hover:bg-brand-hover"
              >
                {data.form.buttonText}

                <FaArrowRight className="text-size-12" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
