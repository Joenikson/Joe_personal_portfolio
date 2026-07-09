import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react';
import { timelineData } from '../data';

// Helper to return the correct icon for each timeline category
const getTimelineIcon = (type: string) => {
  switch (type) {
    case 'education':
      return <GraduationCap className="w-5 h-5" />;
    case 'internship':
      return <Briefcase className="w-5 h-5" />;
    case 'certification':
      return <Award className="w-5 h-5" />;
    case 'achievement':
      return <Sparkles className="w-5 h-5" />;
    default:
      return <Award className="w-5 h-5" />;
  }
};

const getTimelineIconStyles = (type: string) => {
  switch (type) {
    case 'education':
      return 'bg-blue-100 text-blue-600 border-blue-200';
    case 'internship':
      return 'bg-amber-100 text-amber-600 border-amber-200';
    case 'certification':
      return 'bg-purple-100 text-purple-600 border-purple-200';
    case 'achievement':
      return 'bg-emerald-100 text-emerald-600 border-emerald-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-blue-50/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20" id="experience-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            My Journey
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Education & Experience Timeline
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4 mx-auto" />
        </div>

        {/* Vertical Timeline Track Container */}
        <div className="relative max-w-4xl mx-auto" id="timeline-container">
          
          {/* Central Vertical Axis Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gray-200 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                  id={`timeline-row-${item.id}`}
                >
                  
                  {/* Axis Node Icon */}
                  <div 
                    className={`absolute left-4 md:left-1/2 top-1.5 w-9 h-9 rounded-full border-2 flex items-center justify-center -translate-x-1/2 z-10 transition-colors shadow-sm ${getTimelineIconStyles(item.type)}`}
                    id={`timeline-node-${item.id}`}
                  >
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Content Card Wrapper */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-xs hover:shadow-lg transition-all duration-300 relative ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}
                    id={`timeline-card-${item.id}`}
                  >
                    {/* Floating year label */}
                    <span className="inline-block px-3 py-1 bg-slate-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-500 font-mono mb-4">
                      {item.year}
                    </span>

                    {/* Milestone Titles */}
                    <h3 className="font-sans font-bold text-gray-900 text-lg md:text-xl mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-primary font-sans font-semibold text-sm mb-4">
                      {item.subtitle}
                    </p>

                    {/* Body text */}
                    <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Category Label Indicator */}
                    <span className="absolute bottom-6 right-6 text-[10px] font-extrabold uppercase tracking-widest text-gray-300 select-none font-mono">
                      {item.type}
                    </span>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
