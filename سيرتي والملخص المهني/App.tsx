import React, { useState, useEffect } from 'react';
import SectionHeader from './components/SectionHeader';
import ExperienceItem from './components/ExperienceItem';
import SkillCard from './components/SkillCard';
import LicenseCard from './components/LicenseCard';
import CourseCard from './components/CourseCard';
import CoverLetter from './components/CoverLetter';
import Header from './components/Header';
import { cvData } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const data = cvData[lang];
  const profileImageUrl = "https://l.top4top.io/p_3640zcx0m1.jpg";

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center w-full transition-colors duration-500">
      
      {/* Professional Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm no-print">
        <div className="max-w-[210mm] mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={profileImageUrl} className="w-9 h-9 rounded-xl object-cover border-2 border-[#C7A969]/30 shadow-sm" alt="Profile Thumbnail" />
            <div className="flex flex-col">
              <span className="text-[#22042C] font-black text-[12px] leading-tight tracking-tight">{data.name}</span>
              <span className="text-[#C7A969] text-[10px] font-bold uppercase tracking-widest">{data.jobTitle}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleLang}
              aria-label="Toggle Language"
              className="bg-white text-[#22042C] px-3 sm:px-4 py-2 rounded-xl font-bold text-[11px] shadow-sm hover:shadow-md border border-gray-100 flex items-center justify-center gap-2 transition-all active:scale-95 group"
            >
              <span className="group-hover:rotate-12 transition-transform">🌐</span>
              <span className="hidden sm:inline">{lang === 'ar' ? 'Switch to English' : 'تحويل للعربية'}</span>
              <span className="sm:hidden">{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            
            <button 
              onClick={handlePrint}
              aria-label="Save as PDF"
              className="bg-gradient-to-r from-[#22042C] to-[#3B0E49] text-white px-4 sm:px-5 py-2 rounded-xl font-bold text-[11px] shadow-lg shadow-purple-900/10 hover:shadow-xl hover:translate-y-[-1px] flex items-center justify-center gap-2 transition-all active:scale-95 border border-white/10"
            >
              <span className="text-sm">📥</span>
              <span className="hidden sm:inline">{lang === 'ar' ? 'تحميل السيرة الذاتية PDF' : 'Download CV (PDF)'}</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacing for sticky nav */}
      <div className="h-16 sm:h-20 no-print"></div>

      {/* A4 Paper Simulation Canvas */}
      <main 
        id="cv-paper" 
        className={`w-full max-w-[210mm] mx-auto bg-white shadow-2xl px-6 py-10 sm:px-12 md:px-16 md:py-16 box-border relative my-6 sm:my-10 transition-all rounded-sm sm:rounded-none overflow-hidden ${lang === 'en' ? 'font-poppins' : ''}`}
      >
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22042C] via-[#C7A969] to-[#22042C]"></div>

        {/* Dynamic Professional Header */}
        <Header data={data} />

        {/* Cover Letter - Strategic Introduction */}
        <section className="mb-12 break-inside-avoid">
          <SectionHeader label={data.labels.coverLetter} />
          <CoverLetter content={data.coverLetter} name={data.name} />
        </section>

        {/* Professional Summary */}
        <section className="mb-10 break-inside-avoid">
          <SectionHeader label={data.labels.summary} />
          <div className="bg-white border border-gray-50 rounded-2xl p-6 shadow-sm text-justify text-[#2d3748] leading-[1.8] text-[14px] border-r-[6px] border-r-[#22042C] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#22042C]/[0.02] rounded-bl-full"></div>
            {data.summary}
          </div>
        </section>

        {/* Career Roadmap */}
        <section className="mb-10 break-inside-avoid">
          <SectionHeader label={data.labels.careerObjective} />
          <div className="bg-white border border-gray-50 rounded-2xl p-6 shadow-sm text-justify text-[#2d3748] leading-[1.8] text-[14px] border-r-[6px] border-r-[#C7A969] relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C7A969]/[0.02] rounded-tr-full"></div>
            {data.careerObjective}
          </div>
        </section>

        {/* Academic Foundation */}
        <section className="mb-10 break-inside-avoid">
            <SectionHeader label={data.labels.education} />
            <div className="bg-gradient-to-l from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm font-bold text-[#22042C] text-base leading-relaxed border-r-[6px] border-r-[#22042C] flex items-center gap-4">
                <span className="text-2xl">🎓</span>
                {data.education}
            </div>
        </section>

        {/* Professional Experience - Core Content */}
        <section className="mb-12">
          <SectionHeader label={data.labels.experience} />
          <div className="flex flex-col gap-8">
            {data.experience.map((job, idx) => (
              <div key={idx} className="break-inside-avoid">
                <ExperienceItem 
                  title={job.title}
                  subtitle={job.subtitle}
                  company={job.company}
                  period={job.period}
                  description={job.description}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Core Specialized Expertise */}
        <section className="mb-12">
          <SectionHeader label={data.labels.specializedSkills} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.specializedSkills.map((skill, idx) => (
              <div key={idx} className="break-inside-avoid h-full">
                <SkillCard 
                  title={skill.title}
                  items={skill.items}
                  isList={true}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Honors, Awards & Records */}
        <section className="mb-12">
          <SectionHeader label={data.labels.awards} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.awards.map((award, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all break-inside-avoid flex flex-col gap-3 border-r-[6px] border-r-[#C7A969] relative group">
                <div className="absolute top-2 left-2 text-xl opacity-10 group-hover:opacity-100 transition-opacity">🏆</div>
                <h3 className="font-black text-[#22042C] text-[15px] leading-tight">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-[12px] leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Certifications & Continuous Learning */}
        <section className="mb-12">
          <SectionHeader label={data.labels.certificates} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="break-inside-avoid h-full">
                <LicenseCard 
                  title={cert.title}
                  issuer={cert.issuer}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Banking Courses */}
        <section className="mb-12">
          <SectionHeader label={data.labels.courses} />
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
            {data.courses.map((course, idx) => (
              <CourseCard 
                key={idx}
                title={course.title}
                subtitle={course.subtitle}
                issuer={course.issuer}
              />
            ))}
          </div>
        </section>

        {/* Soft Skills & Languages - Final Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-100 break-inside-avoid">
          
          {/* Personal Skills Column */}
          <div className="md:col-span-2">
             <h3 className="text-[#22042C] font-black text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#C7A969]/10 rounded-lg flex items-center justify-center text-sm">💡</span>
                {data.labels.personalSkills}
             </h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               {data.personalSkills.map((ps, idx) => (
                 <div key={idx} className="bg-white border border-gray-50 rounded-xl p-3 shadow-sm hover:border-[#C7A969]/30 transition-all flex flex-col gap-1">
                    <span className="font-bold text-[#22042C] text-[11px] leading-tight">{ps.title}</span>
                    <span className="text-[9px] text-gray-500 leading-snug">{ps.description}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* Languages & Final Sign-off */}
          <div className="flex flex-col gap-8">
             <div>
                <h3 className="text-[#22042C] font-black text-lg mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#C7A969]/10 rounded-lg flex items-center justify-center text-sm">🌍</span>
                  {data.labels.languages}
                </h3>
                <div className="space-y-3">
                  {data.languages.map((langItem, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                      <span className="font-bold text-[#22042C] text-sm">{langItem.name}</span>
                      <span className="text-[#C7A969] text-xs font-bold px-2 py-0.5 bg-white rounded-lg shadow-sm">{langItem.level}</span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="mt-auto pt-6 text-center md:text-right opacity-40">
                <div className="text-[10px] font-bold text-[#22042C] uppercase tracking-widest mb-1">Electronic Portfolio v2.0</div>
                <div className="text-[9px] text-gray-400">© {new Date().getFullYear()} Majed Al-Sufyani. Verified Digital Document.</div>
             </div>
          </div>
        </div>
      </main>

      {/* Style overrides for the horizontal scroll on courses */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;