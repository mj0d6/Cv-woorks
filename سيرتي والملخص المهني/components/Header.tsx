import React from 'react';
import { CVData } from '../types';

interface HeaderProps {
  data: CVData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const profileImageUrl = "https://l.top4top.io/p_3640zcx0m1.jpg";
  
  const licenseList = [
    "International Certificate in IT Skills Foundation",
    "Retail Banking Foundations",
    "Cybersecurity Essentials",
    "Professional Collector Program",
    "Collection Skills",
    "Introduction to Securities and Investment (CME-1)"
  ];

  return (
    <header className="relative mb-12 border-b-2 border-gray-50 pb-10">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#C7A969]/5 to-transparent pointer-events-none -z-10 rounded-3xl"></div>

      <div className="flex flex-col md:flex-row gap-8 items-start text-right">
        
        {/* Profile Image with Golden Border */}
        <div className="relative shrink-0">
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#C7A969] to-[#22042C] rounded-[2.5rem] opacity-20 blur-xl"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
            <img src={profileImageUrl} alt={data.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#22042C] to-[#3B0E49] text-white p-2.5 rounded-2xl shadow-lg border-2 border-white">
             <span className="text-sm">⭐</span>
          </div>
        </div>

        {/* Name and Professional Titles */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#22042C] mb-2 tracking-tight">
            {data.name}
          </h1>
          <div className="text-[#C7A969] font-bold text-xl md:text-2xl mb-5 opacity-90 tracking-wide">
            {data.jobTitle}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8 justify-start">
            {data.secondaryTitles.map((t, i) => (
              <span key={i} className="bg-white text-gray-600 text-[10px] md:text-xs px-4 py-1.5 rounded-full border border-gray-100 shadow-sm font-medium hover:border-[#C7A969]/30 transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* Elegant Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[12px] md:text-sm text-gray-700 font-medium">
            <a href={`tel:${data.contact.phone}`} className="flex items-center gap-3 justify-start group hover:text-[#22042C] transition-all">
              <span className="w-9 h-9 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#22042C] group-hover:text-[#C7A969] transition-all">📞</span>
              <span dir="ltr" className="font-bold">{data.contact.phone}</span>
            </a>
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 justify-start group hover:text-[#22042C] transition-all">
              <span className="w-9 h-9 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#22042C] group-hover:text-[#C7A969] transition-all">✉️</span>
              <span className="font-poppins">{data.contact.email}</span>
            </a>
            <a href={`https://linkedin.com/${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-start group hover:text-[#22042C] transition-all">
              <span className="w-9 h-9 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#22042C] group-hover:text-[#C7A969] transition-all">🔗</span>
              <span className="font-poppins">{data.contact.linkedin.replace('in/', '')}</span>
            </a>
            <div className="flex items-center gap-3 justify-start group">
              <span className="w-9 h-9 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#22042C] group-hover:text-[#C7A969] transition-all">📍</span>
              <span>{data.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Strategic Certification Badges */}
      <div className="mt-10 flex flex-wrap gap-2.5 justify-start">
        {licenseList.map((lic, idx) => (
          <span key={idx} className="text-[10px] text-[#967d3e] bg-white px-3 py-1.5 rounded-xl border border-[#C7A969]/20 font-bold shadow-sm hover:bg-[#C7A969]/5 transition-colors flex items-center gap-1.5">
            <span className="text-[12px]">📜</span> {lic}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;