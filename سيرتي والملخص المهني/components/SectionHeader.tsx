import React from 'react';

interface SectionHeaderProps {
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="bg-gradient-to-r from-[#22042C] to-[#3B0E49] text-white rounded-xl px-5 py-2 font-extrabold text-sm md:text-base tracking-wide shadow-md">
        {label}
      </div>
      <div className="h-1 bg-[#C7A969] flex-1 rounded-full opacity-80"></div>
    </div>
  );
};

export default SectionHeader;