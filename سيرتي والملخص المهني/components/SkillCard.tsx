import React from 'react';

interface SkillCardProps {
  title: string;
  items?: string[];
  description?: string;
  isList?: boolean;
}

const getIcon = (title: string) => {
  const mapping: Record<string, string> = {
    // Specialized AR
    "الامتثال وKYC": "🛡️",
    "الإجراءات المصرفية القضائية": "⚖️",
    "تحصيل ومعالجة الديون": "💰",
    "تشغيل العمليات": "⚙️",
    "التقارير والتحليلات": "📊",
    "الأنظمة والمنصات": "💻",
    "التواصل والتفاوض": "🤝",
    "الحوكمة وإدارة المخاطر": "🏛️",
    // Specialized EN
    "Compliance & KYC": "🛡️",
    "Judicial Banking Procedures": "⚖️",
    "Debt Collection & Processing": "💰",
    "Operations Management": "⚙️",
    "Reporting & Analytics": "📊",
    "Systems & Platforms": "💻",
    "Communication & Negotiation": "🤝",
    "Governance & Risk": "🏛️",
    // Personal AR
    "الانضباط والدقة": "🎯",
    "العمل تحت الضغط": "⚡",
    "التواصل الفعّال": "💬",
    "التفاوض والإقناع": "🗣️",
    "اتخاذ القرار": "🧠",
    "السرية والموثوقية": "🔒",
    "العمل الجماعي": "👥",
    "المرونة والتكيف": "🔄",
    "التطوير المستمر": "📈",
    "القيادة والمسؤولية": "🎖️",
    // Personal EN
    "Discipline & Precision": "🎯",
    "Working Under Pressure": "⚡",
    "Effective Communication": "💬",
    "Negotiation": "🗣️",
    "Decision Making": "🧠",
    "Confidentiality": "🔒",
    "Teamwork": "👥",
    "Adaptability": "🔄",
    "Continuous Development": "📈",
    "Leadership": "🎖️"
  };
  return mapping[title] || "✨";
};

const SkillCard: React.FC<SkillCardProps> = ({ title, items, description, isList = true }) => {
  const icon = getIcon(title);

  return (
    <div className={`bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-t-2 border-[#22042C] group h-full ${isList ? 'min-h-[110px] p-2.5' : 'min-h-[75px] p-1.5'}`}>
      <div>
        <div className={`flex items-center gap-1.5 mb-1 ${isList ? 'flex-col sm:items-start' : 'flex-row items-center'}`}>
          <span className={`${isList ? 'text-sm' : 'text-xs'} group-hover:scale-110 transition-transform duration-300 shrink-0`}>{icon}</span>
          <h3 className={`font-bold text-[#22042C] leading-tight group-hover:text-[#3B0E49] ${isList ? 'text-[10px] sm:text-[11px] text-center sm:text-right' : 'text-[9px]'}`}>
            {title}
          </h3>
        </div>
        
        {isList && items ? (
          <ul className="space-y-0.5 mb-1">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1 text-[8px] sm:text-[9px] leading-tight text-[#555]">
                <span className="mt-1 text-[#C7A969] text-[6px] shrink-0">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#7a6b8e] text-[8px] leading-snug text-start opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
            {description}
          </p>
        )}
      </div>

      <div className="mt-auto pt-1 border-t border-gray-50 flex items-center justify-between">
        <div className="text-[#C7A969] text-[6px] font-bold uppercase tracking-tighter opacity-60">
          {isList ? "Core" : "Soft"}
        </div>
        <div className="w-1 h-1 rounded-full bg-gray-100 group-hover:bg-[#C7A969] transition-colors"></div>
      </div>
    </div>
  );
};

export default SkillCard;