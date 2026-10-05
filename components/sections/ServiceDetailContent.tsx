'use client';

import React, { useState } from 'react';
import { ServiceDetailData } from '@/types/templates.types';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiPhoneCall, FiPlay, FiPlus, FiX } from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaUsers, FaCheckCircle, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLaptopCode': return <FaLaptopCode />;
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaCheckCircle': return <FaCheckCircle />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return <FaLaptopCode />;
  }
};

export const ServiceDetailContent = ({ data, serviceId, servicesList }: { data?: ServiceDetailData, serviceId?: string, servicesList?: any[] }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(data?.faqs?.[0]?.id || null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="w-full py-16 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Side: Sidebar */}
          <div className="w-full lg:w-[30%] flex flex-col gap-8 sticky top-6">
            
            {/* All Services Menu */}
            <div className="bg-[#f8fbfb] rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#051024] mb-6">All Services</h3>
              <div className="flex flex-col gap-3">
                {servicesList?.map(service => {
                  const isActive = serviceId ? service.url.includes(serviceId) : false;
                  return (
                    <Link 
                      key={service.id} 
                      href={service.url} 
                      className={`flex items-center justify-between p-4 rounded-xl text-[14px] font-bold transition-all ${
                        isActive ? 'bg-[#0d65ff] text-white shadow-md' : 'bg-white text-gray-600 hover:text-[#0d65ff] border border-gray-100 hover:border-blue-100'
                      }`}
                    >
                      {service.title}
                      <FiArrowRight className={isActive ? 'text-white' : 'text-[#0d65ff]'} />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="bg-[#f8fbfb] rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#051024] mb-6">Opening Hours</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-100 text-[13px] font-semibold text-gray-600">
                  <FiClock className="text-[#0d65ff] shrink-0" /> Mon - Sat: 10.00 AM - 6.00 PM
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-100 text-[13px] font-semibold text-gray-600">
                  <FiClock className="text-[#0d65ff] shrink-0" /> Sunday: 10.00 AM - 4.00 PM
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-100 text-[13px] font-semibold text-gray-600">
                  <FiClock className="text-[#0d65ff] shrink-0" /> Friday: Closed
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-100 text-[13px] font-semibold text-gray-600">
                  <FiClock className="text-[#0d65ff] shrink-0" /> Emergency: 24 Hours
                </div>
              </div>
            </div>

            {/* Need Help CTA */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-900 group">
              <img src="/portfolio/ui/2.webp" alt="Need Help" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051024] via-[#051024]/60 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-[28px] font-extrabold leading-[1.2] mb-3">Need Help?<br/>Call Us</h3>
                <p className="text-gray-200 text-[13px] mb-6 max-w-[90%] leading-relaxed">
                  Get expert consultation for your project requirements.
                </p>
                <a href="tel:+100000000" className="bg-white text-[#051024] font-bold text-[14px] rounded-full py-3.5 px-6 flex items-center justify-center gap-3 hover:bg-[#0d65ff] hover:text-white transition-all w-max shadow-xl">
                   <FiPhoneCall className="text-[16px] text-[#0d65ff] group-hover:text-white transition-colors" /> +1 00000000
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Main Content */}
          <div className="w-full lg:w-[70%]">
             
             {/* Internal Breadcrumb */}
             <div className="text-[13px] text-gray-500 mb-5 flex items-center gap-2 font-medium">
               Home <FiArrowRight className="text-[10px]" /> Our Services <FiArrowRight className="text-[10px]" /> <span className="text-[#0d65ff]">{data.title1}</span>
             </div>

             {/* Title & Top Description */}
             <h1 className="text-[40px] md:text-[48px] font-extrabold text-[#051024] mb-3 leading-[1.1]">{data.title1}</h1>
             <p className="text-[#6b7280] text-[15px] leading-relaxed mb-6">
               Modern and responsive solutions that create a strong brand presence and better user experience.
             </p>
             
             {/* Main Image */}
             <div className="w-full aspect-[21/9] md:aspect-[16/7] rounded-3xl overflow-hidden mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-gray-100">
               <img src="/portfolio/app/1.webp" alt={data.title1} className="w-full h-full object-cover" />
             </div>

             {/* Content Overview */}
             <h2 className="text-3xl font-extrabold text-[#051024] flex items-center gap-4 mb-5">
                {data.title1} <span className="w-12 h-[2px] bg-[#0d65ff]"></span>
             </h2>
             <div className="text-[#6b7280] text-[15px] leading-relaxed mb-12 space-y-4">
               <p>Our {data.title1.toLowerCase()} services focus on creating modern, responsive, and user-friendly solutions that help your business stand out online. We design experiences that are visually appealing, easy to navigate, and optimized for all devices, ensuring a seamless experience for your visitors.</p>
               <p>Whether you need a corporate portal, business application, or a custom design, our team delivers solutions tailored to your goals. We combine creativity with the latest technology to build solutions that not only look great but also perform exceptionally well.</p>
             </div>

             {/* Key Benefits Grid */}
             <h3 className="text-[26px] font-extrabold text-[#051024] mb-6">Key Benefits Of Our {data.title1} Services</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                {[
                  { title: "Modern Design", desc: "Unique designs that reflect your brand identity.", icon: "FaLaptopCode" },
                  { title: "Fully Responsive", desc: "Optimized for all devices including desktop & mobile.", icon: "FaMobileAlt" },
                  { title: "User-Friendly", desc: "Easy navigation for better engagement.", icon: "FaUsers" },
                  { title: "SEO Friendly", desc: "Built with SEO best practices to improve visibility.", icon: "FaCheckCircle" }
                ].map((feat, i) => (
                  <div key={i} className="bg-[#fcfcff] rounded-2xl p-5 border border-gray-100 hover:border-blue-100 transition-colors shadow-sm">
                    <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0d65ff] text-3xl mb-5">
                       {renderIcon(feat.icon)}
                    </div>
                    <h4 className="text-[#051024] font-bold text-[15px] mb-2">{feat.title}</h4>
                    <p className="text-[#6b7280] text-[12px] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
             </div>

             {/* Process Section */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-16">
               <div 
                 className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-gray-100"
                 onClick={() => setIsVideoOpen(true)}
               >
                 <img src="/portfolio/ui/1.webp" alt="Process" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-[#051024]/20 flex items-center justify-center transition-colors group-hover:bg-[#051024]/40">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0d65ff] text-2xl pl-1 shadow-[0_0_0_6px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_0_10px_rgba(255,255,255,0.3)] transition-all">
                     <FiPlay />
                   </div>
                 </div>
               </div>
               <div>
                 <h3 className="text-[26px] font-extrabold text-[#051024] mb-8">Our {data.title1} Process</h3>
                 <div className="space-y-6">
                   {[
                     { title: "Requirement Analysis", desc: "We understand your business goals and design needs." },
                     { title: "Creative Design", desc: "Create unique and visually appealing designs." },
                     { title: "Development", desc: "Convert designs into fully functional websites." },
                     { title: "Testing & Launch", desc: "Ensure quality, performance and a smooth launch." }
                   ].map((step, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-[#0d65ff] text-white flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-110 transition-transform text-sm">
                          0{idx+1}
                        </div>
                        <div className="pt-0.5">
                          <h4 className="text-[#051024] font-bold text-[15px] mb-1">{step.title}</h4>
                          <p className="text-[#6b7280] text-[13px]">{step.desc}</p>
                        </div>
                      </div>
                   ))}
                 </div>
               </div>
             </div>

             {/* Why Choose Us */}
             <h3 className="text-[26px] font-extrabold text-[#051024] mb-6">Why Choose Our {data.title1} Services?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                {[
                  { title: "Tailored Solutions", desc: "Custom designs tailored to your business needs.", icon: "FaLightbulb" },
                  { title: "High Performance", desc: "Fast loading and optimized websites.", icon: "FaChartLine" },
                  { title: "Ongoing Support", desc: "Continuous support and maintenance.", icon: "FaShieldAlt" }
                ].map((feat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                     <div className="w-[72px] h-[72px] bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0d65ff] text-[32px] mb-6 border border-blue-50">
                       {renderIcon(feat.icon)}
                     </div>
                     <h4 className="text-[#051024] font-bold text-[15px] mb-2">{feat.title}</h4>
                     <p className="text-[#6b7280] text-[13px] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
             </div>

             {/* FAQ */}
             <h3 className="text-[26px] font-extrabold text-[#051024] mb-6">Frequently Asked Questions</h3>
             <div className="flex flex-col gap-3">
               {[
                 { id: "1", q: "How long does it take to design a website?", a: "The timeline varies based on the complexity and requirements of the project. A standard website takes about 4-6 weeks from initial consultation to final launch." },
                 { id: "2", q: "Will my website be mobile-friendly?", a: "Yes, all our websites are fully responsive and optimized to look great and perform well on all devices, including mobile phones and tablets." },
                 { id: "3", q: "Do you provide website maintenance services?", a: "Absolutely. We offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally." },
                 { id: "4", q: "Can you redesign an existing website?", a: "Yes, we can revamp your existing website with a fresh, modern design while improving user experience and SEO performance." }
               ].map(faq => {
                 const isOpen = openFaq === faq.id;
                 return (
                   <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                     <button onClick={() => setOpenFaq(isOpen ? null : faq.id)} className="w-full flex items-center justify-between p-5 text-left font-bold text-[#051024] text-[15px] hover:bg-[#fcfcff] transition-colors">
                        {faq.q}
                        <FiArrowRight className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90 text-[#0d65ff]' : ''}`} />
                     </button>
                     {isOpen && (
                       <div className="p-5 pt-0 text-[14px] text-[#6b7280] leading-relaxed bg-white">
                         {faq.a}
                       </div>
                     )}
                   </div>
                 )
               })}
             </div>

          </div>

        </div>
      </section>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <FiPlus className="rotate-45 text-2xl" />
            </button>
            {/* Video Iframe (Study-related placeholder) */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1" 
              title="Study Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
