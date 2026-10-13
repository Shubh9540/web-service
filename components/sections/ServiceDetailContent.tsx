'use client';

import React, { useState } from 'react';
import { ServiceDetailData, ServiceDetailUIData, ServiceItem } from '@/types/templates.types';
import Link from 'next/link';
import { FiArrowRight, FiPhoneCall, FiPlay, FiPlus } from 'react-icons/fi';
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

export const ServiceDetailContent = ({ data, serviceId, servicesList, ui }: { data?: ServiceDetailData; serviceId?: string; servicesList?: ServiceItem[]; ui: ServiceDetailUIData }) => {
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
            <div className="bg-surface-green rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-6">{data.sidebar.servicesList.title}</h3>
              <div className="flex flex-col gap-3">
                {servicesList?.map(service => {
                  const isActive = serviceId ? service.url.includes(serviceId) : false;
                  return (
                    <Link 
                      key={service.id} 
                      href={service.url} 
                      className={`flex items-center justify-between p-4 rounded-xl text-size-14 font-bold transition-all ${
                        isActive ? 'bg-brand text-white shadow-md' : 'bg-white text-gray-600 hover:text-brand border border-gray-100 hover:border-blue-100'
                      }`}
                    >
                      {service.title}
                      <FiArrowRight className={isActive ? 'text-white' : 'text-brand'} />
                    </Link>
                  );
                })}
              </div>
            </div>
            


            {/* Need Help CTA */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-900 group">
              <img src={ui.helpImage} alt={ui.helpImageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-size-28 font-extrabold leading-[1.2] mb-3">{ui.helpTitle1}<br/>{ui.helpTitle2}</h3>
                <p className="text-gray-200 text-size-13 mb-6 max-w-[90%] leading-relaxed">
                  {ui.helpDescription}
                </p>
                <a href={ui.helpPhoneUrl} className="bg-white text-navy font-bold text-size-14 rounded-full py-3.5 px-6 flex items-center justify-center gap-3 hover:bg-brand hover:text-white transition-all w-max shadow-xl">
                   <FiPhoneCall className="text-size-16 text-brand group-hover:text-white transition-colors" /> {ui.helpPhone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Main Content */}
          <div className="w-full lg:w-[70%]">
             


             {/* Title & Top Description */}
             <h1 className="text-size-40 md:text-size-48 font-extrabold text-navy mb-3 leading-[1.1]">{data.title1}</h1>
             <p className="text-palette-text-light text-size-15 leading-relaxed mb-6">
               {data.description}
             </p>
             
             {/* Main Image */}
             <div className="w-full aspect-[21/9] md:aspect-[16/7] rounded-3xl overflow-hidden mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-gray-100">
               <img src={data.imageMain} alt={data.title1} className="w-full h-full object-cover" />
             </div>

             {/* Content Overview */}
             <h2 className="text-3xl font-extrabold text-navy flex items-center gap-4 mb-5">
                {data.overviewTitle} <span className="w-12 h-0.5 bg-brand"></span>
             </h2>
             <div className="text-palette-text-light text-size-15 leading-relaxed mb-12 space-y-4">
               {data.overviewText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
             </div>

             {/* Key Benefits Grid */}
             <h3 className="text-size-26 font-extrabold text-navy mb-6">{ui.benefitsTitle}</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                {ui.benefits.map((feat) => (
                  <div key={feat.id} className="bg-card-soft rounded-2xl p-5 border border-gray-100 hover:border-blue-100 transition-colors shadow-sm">
                    <div className="w-16 h-16 bg-primary-surface rounded-2xl flex items-center justify-center text-brand text-3xl mb-5">
                       {renderIcon(feat.icon)}
                    </div>
                    <h4 className="text-navy font-bold text-size-15 mb-2">{feat.title}</h4>
                    <p className="text-palette-text-light text-size-12 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
             </div>

             {/* Process Section */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-16">
               <div 
                 className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-gray-100"
                 onClick={() => setIsVideoOpen(true)}
               >
                 <img src={data.overviewImage} alt={ui.processImageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-navy/20 flex items-center justify-center transition-colors group-hover:bg-navy/40">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand text-2xl pl-1 shadow-[0_0_0_6px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_0_10px_rgba(255,255,255,0.3)] transition-all">
                     <FiPlay />
                   </div>
                 </div>
               </div>
               <div>
                 <h3 className="text-size-26 font-extrabold text-navy mb-8">{data.processTitle}</h3>
                 <div className="space-y-6">
                   {data.processSteps.map((step) => (
                      <div key={step.id} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-110 transition-transform text-sm">
                          {step.number}
                        </div>
                        <div className="pt-0.5">
                          <h4 className="text-navy font-bold text-size-15 mb-1">{step.title}</h4>
                          <p className="text-palette-text-light text-size-13">{step.description}</p>
                        </div>
                      </div>
                   ))}
                 </div>
               </div>
             </div>

             {/* Why Choose Us */}
             <h3 className="text-size-26 font-extrabold text-navy mb-6">{ui.choiceTitle}</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                {ui.choiceFeatures.map((feat) => (
                  <div key={feat.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                     <div className="w-[72px] h-[72px] bg-primary-surface rounded-2xl flex items-center justify-center text-brand text-size-32 mb-6 border border-blue-50">
                       {renderIcon(feat.icon)}
                     </div>
                     <h4 className="text-navy font-bold text-size-15 mb-2">{feat.title}</h4>
                     <p className="text-palette-text-light text-size-13 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
             </div>

             {/* FAQ */}
             <h3 className="text-size-26 font-extrabold text-navy mb-6">{data.faqTitle}</h3>
             <div className="flex flex-col gap-3">
               {data.faqs.map(faq => {
                 const isOpen = openFaq === faq.id;
                 return (
                   <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                     <button onClick={() => setOpenFaq(isOpen ? null : faq.id)} className="w-full flex items-center justify-between p-5 text-left font-bold text-navy text-size-15 hover:bg-card-soft transition-colors">
                        {faq.question}
                        <FiArrowRight className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90 text-brand' : ''}`} />
                     </button>
                     {isOpen && (
                       <div className="p-5 pt-0 text-size-14 text-palette-text-light leading-relaxed bg-white">
                         {faq.answer}
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
              aria-label={ui.closeVideoLabel}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <FiPlus className="rotate-45 text-2xl" />
            </button>
            {/* Video Iframe (Study-related placeholder) */}
            <iframe 
              className="w-full h-full"
              src={ui.videoUrl}
              title={ui.videoTitle}
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
