import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  LayoutGrid, 
  GitBranch, 
  Github, 
  Smartphone 
} from 'lucide-react';
import { skillsData } from '../data';

// Helper to resolve icon name to actual component
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileHtml':
      return <Code2 className="w-6 h-6 text-orange-500" />;
    case 'Palette':
      return <Palette className="w-6 h-6 text-blue-500" />;
    case 'FileCode':
      return <FileCode className="w-6 h-6 text-amber-500" />;
    case 'Atom':
      return <Atom className="w-6 h-6 text-cyan-500 animate-spin-slow" />;
    case 'Grid3X3':
      return <LayoutGrid className="w-6 h-6 text-indigo-500" />;
    case 'GitBranch':
      return <GitBranch className="w-6 h-6 text-rose-500" />;
    case 'Github':
      return <Github className="w-6 h-6 text-slate-800" />;
    case 'MonitorPhone':
      return <Smartphone className="w-6 h-6 text-emerald-500" />;
    default:
      return <Code2 className="w-6 h-6 text-primary" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-50/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20" id="skills-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            My Toolbox
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Expertise & Technical Stack
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="skills-cards-grid">
          {skillsData.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: "0 12px 30px -10px rgba(15, 23, 42, 0.08)" }}
                className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left hover:border-blue-100 transition-colors cursor-default relative group"
                id={`skill-card-${skill.name.toLowerCase()}`}
              >
                {/* Decorative hover gradient corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50/20 to-cyan-50/20 rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50 border border-gray-100 group-hover:border-blue-100 flex items-center justify-center mb-6 transition-colors">
                  {getSkillIcon(skill.iconName)}
                </div>

                {/* Skill Details */}
                <h3 className="font-sans font-bold text-gray-900 text-lg mb-3">
                  {skill.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
