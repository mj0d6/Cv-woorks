import React from 'react';

interface CoverLetterProps {
  content: string;
  name: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ content, name }) => {
  // فصل المحتوى إلى فقرات بناءً على \n\n
  const paragraphs = content.split('\n\n');
  const signatureUrl = "https://j.top4top.io/p_36420qn9x1.jpg";

  // وظيفة لتحويل علامات ** إلى خط عريض
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/gs);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-extrabold text-[#22042C]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm relative overflow-hidden mb-10">
      {/* Decorative Stamp Background */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <div className="w-32 h-32 border-4 border-[#C7A969] rounded-full flex items-center justify-center rotate-12">
           <span className="text-[#C7A969] font-black text-xl uppercase">Confidential</span>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {paragraphs.map((p, idx) => {
          if (idx === 0) {
            // Greeting line
            return (
              <h2 key={idx} className="text-lg md:text-2xl font-bold text-[#22042C] mb-6 italic">
                {renderFormattedText(p)}
              </h2>
            );
          }
          
          const isLast = idx === paragraphs.length - 1;
          
          if (isLast) {
            // Closing line with actual signature image
            return (
              <div key={idx} className="mt-8 md:mt-12">
                <p className="text-[#22042C] font-bold mb-2 whitespace-pre-line">
                  {renderFormattedText(p)}
                </p>
                <div className="flex flex-col items-start">
                   {/* Actual Signature Image with transparency-like blend */}
                   <div className="relative w-48 sm:w-64 h-24 sm:h-28 -mt-2 mb-1 flex items-center">
                     <img 
                        src={signatureUrl} 
                        alt="Signature" 
                        className="max-w-full max-h-full object-contain mix-blend-multiply transition-all duration-300"
                        style={{ 
                          // Contrast helps turn the gray-ish background to pure white (which disappears in multiply)
                          filter: 'contrast(1.6) brightness(1.1) saturate(1.3)',
                          WebkitPrintColorAdjust: 'exact'
                        }}
                     />
                     <div className="absolute bottom-6 left-0 right-0 h-px bg-gradient-to-r from-[#C7A969]/40 to-transparent"></div>
                   </div>
                   
                   <div className="flex flex-col -mt-2">
                     <span className="font-bold text-[#22042C] text-sm">{name}</span>
                     <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-1">Digital Signature Authority</span>
                   </div>
                </div>
              </div>
            );
          }

          // Body paragraphs - using whitespace-pre-line to respect manual breaks
          return (
            <p key={idx} className="text-gray-700 text-[13px] md:text-base leading-relaxed mb-4 md:mb-6 whitespace-pre-line text-start">
              {renderFormattedText(p)}
            </p>
          );
        })}
      </div>

      {/* Side Color bar */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C7A969] to-[#22042C]"></div>
    </div>
  );
};

export default CoverLetter;