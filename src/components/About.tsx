import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, FileDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { portfolioOwner } from '../data';

export default function About() {
  const [downloadState, setDownloadState] = useState<'idle' | 'success'>('idle');

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = portfolioOwner.resumeUrl;
  link.download = "joe-Nikson-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setDownloadState("success");

  setTimeout(() => {
    setDownloadState("idle");
  }, 3000);
};

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20" id="about-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            Biography
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            About Me
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 flex justify-center" id="about-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-slate-50 group"
            >
              {/* Image element with required referrerPolicy */}
              <img
                src={portfolioOwner.avatar}
                alt={portfolioOwner.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                id="about-profile-img"
              />
              
              {/* Elegant floating tag */}
              <div 
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg"
                id="about-experience-tag"
              >
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans">Experience</p>
                <p className="text-sm text-gray-900 font-extrabold font-sans">1+ Years Frontend </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-7 flex flex-col items-start" id="about-details">
            <h3 className="font-sans font-bold text-2xl text-gray-900 mb-6 leading-tight">
              Engineering interfaces that blend visual quality with technical precision.
            </h3>
            
            <p className="text-gray-500 font-sans leading-relaxed text-base mb-8">
              {portfolioOwner.shortIntro}
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10" id="about-cards-grid">
              
              {/* Career Objective Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-start text-left hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary mb-4">
                  <Award size={20} />
                </div>
                <h4 className="font-sans font-bold text-gray-900 text-base mb-2">Career Objective</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">{portfolioOwner.objective}</p>
              </div>

              {/* Education Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-start text-left hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary mb-4">
                  <GraduationCap size={20} />
                </div>
                <h4 className="font-sans font-bold text-gray-900 text-base mb-2">Education</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">{portfolioOwner.education}</p>
                <p className="text-primary text-xs font-semibold mt-2 font-sans">GPA: 3.9 / 4.0</p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full" id="about-actions">
              <a
               href={portfolioOwner.resumeUrl}
                download="joe-Nikson-Resume.pdf"
                 className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all duration-300 shadow-md cursor-pointer focus:outline-none text-sm"
              >
              <FileDown size={16} />
                Download Resume
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 text-sm focus:outline-none"
                id="about-contact-link"
              >
                Let's Collaborate
              </a>
            </div>

            {/* Interactive Notice */}
            {downloadState === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium rounded-xl flex items-center gap-2 w-full max-w-sm"
                id="about-download-toast"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Success: Simulated curriculum_vitae.pdf download has completed!</span>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
