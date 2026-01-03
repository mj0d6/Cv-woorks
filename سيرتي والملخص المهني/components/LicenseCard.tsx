import React from 'react';

interface LicenseCardProps {
  title: string;
  issuer: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ title, issuer }) => {
  return (
    <div className="relative group bg-gradient-to-r from-white to-[#fafafa] border border-[#C7A969]/30 rounded-lg p-2 sm:px-3 sm:py-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full w-full break-inside-avoid overflow-hidden border-r-4 border-r-[#C7A969]">
      {/* Decorative Stamp Element */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#C7A969]/5 rounded-br-full pointer-events-none"></div>
      
      <div className="relative z-10 text-right h-full flex flex-col justify-between">
        <h4 className="text-[#22042C] font-bold text-[10px] sm:text-[12px] leading-tight mb-2">
          {title}
        </h4>
        
        <div className="mt-auto flex items-center justify-start gap-1.5">
          <p className="text-[#967d3e] text-[8px] sm:text-[9px] font-bold uppercase tracking-tighter opacity-80">
            {issuer}
          </p>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
    </div>
  );
};

export default LicenseCard;