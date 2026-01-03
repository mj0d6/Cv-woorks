import React from 'react';

interface CourseCardProps {
  title: string;
  subtitle: string;
  issuer: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, subtitle, issuer }) => {
  return (
    <div className="flex-none min-w-[280px] max-w-[340px] bg-white border-[1.5px] border-[#B8944E] rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all">
      <div className="font-extrabold text-[#22042C] text-sm mb-2 leading-tight">{title}</div>
      <div className="font-poppins text-[#6d6d6d] text-xs mb-3">{subtitle}</div>
      <div className="inline-block text-[11px] text-[#C7A969] border border-dashed border-[#C7A969] rounded-full px-3 py-1 font-medium">
        {issuer}
      </div>
    </div>
  );
};

export default CourseCard;