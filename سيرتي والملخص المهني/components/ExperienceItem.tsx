import React from 'react';

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  description: string[];
  licenses?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, subtitle, company, period, description }) => {
  return (
    <article className="relative bg-white border border-[#eadfd0] rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden shadow-sm hover:shadow-xl hover:bg-[#fdfcfb] hover:-translate-y-1 hover:border-[#C7A969]/40 transition-all duration-300 break-inside-avoid cursor-default group">
      {/* Decorative left border */}
      <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-gradient-to-b from-[#C7A969] to-[#f1e7cf] group-hover:from-[#22042C] group-hover:to-[#C7A969] transition-all duration-500"></div>
      
      <div className="pr-3 sm:pr-4">
        <h3 className="text-[#22042C] font-extrabold text-base md:text-lg mb-1 group-hover:text-[#3B0E49] transition-colors">
          {title}
        </h3>
        <div className="font-poppins text-[#7a6b8e] text-[11px] md:text-sm mb-2">{subtitle}</div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
          <div className="text-[#004630] font-bold text-[12px] md:text-sm bg-green-50/50 px-2 py-0.5 rounded border border-green-100/50 group-hover:bg-white transition-colors w-fit">
            {company}
          </div>
          <div className="hidden sm:block text-gray-200">|</div>
          <div className="text-gray-500 text-[10px] md:text-xs italic">{period}</div>
        </div>
        
        <div className="space-y-3">
          {description.map((para, index) => (
            <p key={index} className="text-gray-700 text-[12.5px] leading-relaxed text-justify group-hover:text-gray-900 transition-colors">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Subtle corner highlight on hover */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#C7A969]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </article>
  );
};

export default ExperienceItem;