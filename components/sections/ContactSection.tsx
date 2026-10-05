'use client';

import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa';

export const ContactSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Shapes for the entire section or form area */}
      <div className="pointer-events-none absolute left-0 top-[60%] h-[600px] w-[600px] -translate-x-1/2 translate-y-[-50%] rounded-full bg-[#edf5ff] opacity-60 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-[80%] h-[600px] w-[600px] translate-x-1/3 translate-y-[-50%] rounded-full bg-[#edf5ff] opacity-60 blur-[100px]" />

      {/* Dot Grid Top Right */}
      <div className="pointer-events-none absolute right-10 top-20 grid grid-cols-6 gap-[10px] opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#0d65ff]" />
        ))}
      </div>

      {/* Dot Grid Bottom Left */}
      <div className="pointer-events-none absolute left-10 bottom-40 grid grid-cols-6 gap-[10px] opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#0d65ff]" />
        ))}
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start mb-24">

          {/* Left: Contact Details */}
          <div className="flex flex-col lg:col-span-4">
            {/* Subtitle */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0f67ff]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f67ff]">
                NEED ANY HELP?
              </span>
              <span className="h-px w-8 bg-[#0f67ff]" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#051024] leading-[1.15] mb-6">
              Get in touch <br /><span className="text-[#0d65ff]">with us</span>
            </h2>

            <p className="text-[#657187] text-[15px] mb-10 leading-relaxed max-w-[450px]">
              We are always here to help you. Share your requirements and our team will get back to you as soon as possible.
            </p>

            {/* Contact Info List */}
            <div className="flex flex-col gap-8">
              {/* Phone */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#edf5ff] flex items-center justify-center text-[#0d65ff] text-[18px] transition-all duration-300 group-hover:bg-[#0d65ff] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[15px] font-bold text-[#051024] mb-1">Have any question?</span>
                  <span className="text-[14px] text-[#657187] transition-colors group-hover:text-[#0d65ff]">{data.contactInfo.phone}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#edf5ff] flex items-center justify-center text-[#0d65ff] text-[18px] transition-all duration-300 group-hover:bg-[#0d65ff] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[15px] font-bold text-[#051024] mb-1">Write email</span>
                  <span className="text-[14px] text-[#657187] transition-colors group-hover:text-[#0d65ff]">{data.contactInfo.email}</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#edf5ff] flex items-center justify-center text-[#0d65ff] text-[18px] transition-all duration-300 group-hover:bg-[#0d65ff] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[15px] font-bold text-[#051024] mb-1">Visit anytime</span>
                  <span className="text-[14px] text-[#657187] leading-relaxed max-w-[200px] transition-colors group-hover:text-[#0d65ff]">{data.contactInfo.address}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Map & Image Block */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row h-[500px] w-full rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(13,101,255,0.1)] border border-[#e4edfa]">
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative overflow-hidden group">
              <img src={data.image || "/banner/ban1.jpg"} alt="Office Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0d65ff]/10 mix-blend-multiply"></div>
            </div>
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-gray-100 relative">
              <iframe
                src={data.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section: Contact Form */}
        <div className="w-full max-w-[950px] mx-auto bg-white/70 backdrop-blur-xl rounded-[24px] shadow-[0_20px_60px_rgba(13,101,255,0.06)] border border-[#e4edfa] p-8 md:p-12 relative z-20">

          <div className="text-center mb-10">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0f67ff]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f67ff]">
                CONTACT WITH US NOW
              </span>
              <span className="h-px w-8 bg-[#0f67ff]" />
            </div>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#051024]">
              Feel Free to Write Our <br /><span className="text-[#0d65ff]">Technology Experts</span>
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white border border-[#e4edfa] rounded-[12px] text-[14px] text-[#051024] placeholder:text-[#657187] focus:outline-none focus:border-[#0d65ff] focus:ring-4 focus:ring-[#0d65ff]/10 transition-all" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-white border border-[#e4edfa] rounded-[12px] text-[14px] text-[#051024] placeholder:text-[#657187] focus:outline-none focus:border-[#0d65ff] focus:ring-4 focus:ring-[#0d65ff]/10 transition-all" />
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-white border border-[#e4edfa] rounded-[12px] text-[14px] text-[#051024] placeholder:text-[#657187] focus:outline-none focus:border-[#0d65ff] focus:ring-4 focus:ring-[#0d65ff]/10 transition-all" />
              <input type="tel" placeholder="Your Phone Number" className="w-full px-6 py-4 bg-white border border-[#e4edfa] rounded-[12px] text-[14px] text-[#051024] placeholder:text-[#657187] focus:outline-none focus:border-[#0d65ff] focus:ring-4 focus:ring-[#0d65ff]/10 transition-all" />
            </div>
            <textarea placeholder="Your Message" rows={6} className="w-full px-6 py-4 bg-white border border-[#e4edfa] rounded-[12px] text-[14px] text-[#051024] placeholder:text-[#657187] focus:outline-none focus:border-[#0d65ff] focus:ring-4 focus:ring-[#0d65ff]/10 transition-all resize-none"></textarea>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button type="submit" className="flex items-center justify-center gap-2 bg-[#0d65ff] hover:bg-[#0b56db] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(13,101,255,0.3)] text-white font-bold py-4 px-10 rounded-[12px] transition-all duration-300 text-[15px] min-w-[200px]">
                Send Message <FaArrowRight className="text-[12px]" />
              </button>
              <button type="reset" className="flex items-center justify-center bg-[#edf5ff] hover:bg-[#dce9fa] hover:-translate-y-1 text-[#0d65ff] font-bold py-4 px-10 rounded-[12px] transition-all duration-300 text-[15px] min-w-[140px]">
                Reset
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};
