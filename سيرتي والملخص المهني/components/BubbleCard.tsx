import React from 'react';

interface BubbleCardProps {
  title: string;
  subtitle: string;
}

const BubbleCard: React.FC<BubbleCardProps> = ({ title, subtitle }) => {
  return (
    <div className="flex-none min-w-[220px] bg-white border border-[#B8944E] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <strong className="block text-[#22042C] text-sm mb-1">{title}</strong>
      <span className="block text-[#C7A969] text-xs font-medium">{subtitle}</span>
    </div>
  );
};

export default BubbleCard;