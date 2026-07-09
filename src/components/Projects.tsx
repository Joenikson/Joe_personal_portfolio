import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Monitor, Tablet, Smartphone, X, Sparkles, AlertCircle } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleOpenDemo = (project: Project) => {
    setSelectedProject(project);
    setDeviceMode('desktop');
  };

  const handleGithubClick = (e: MouseEvent, title: string) => {
    e.stopPropagation();
    setDemoNotice(`Opening repository for ${title}...`);
    setTimeout(() => {
      setDemoNotice(null);
    }, 2500);
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-cyan-50/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20" id="projects-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            Case Studies
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Featured Projects & Work
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="projects-cards-grid">
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                id={`project-card-${project.id}`}
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    id={`project-img-${project.id}`}
                  />
                  
                  {/* Hover Overlay with Quick View indicator */}
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleOpenDemo(project)}
                      className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-xl text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer focus:outline-none hover:bg-slate-50"
                    >
                      Interactive Live Demo
                    </button>
                  </div>
                </div>

                {/* Project Metadata */}
                <div className="p-8 flex-1 flex flex-col items-start text-left">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-4" id={`project-tags-${project.id}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-50 text-gray-500 font-sans text-xs font-semibold tracking-wide border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-gray-900 text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Buttons Action Group */}
                  <div className="flex items-center gap-4 w-full pt-4 border-t border-gray-100" id={`project-actions-${project.id}`}>
                    <button
                      onClick={() => handleOpenDemo(project)}
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-xs transition-all duration-300 cursor-pointer focus:outline-none"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </button>
                    
                    <a
                      href={project.githubUrl}
                      onClick={(e) => handleGithubClick(e, project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold text-xs transition-all duration-300 focus:outline-none"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Notice Overlay */}
      <AnimatePresence>
        {demoNotice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-gray-800"
            id="projects-toast-notice"
          >
            <AlertCircle size={16} className="text-blue-400" />
            <span className="text-sm font-semibold">{demoNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Demo Sandbox / Modal Simulator */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="projects-modal-backdrop">
            {/* Modal Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[85vh] md:h-[80vh] border border-gray-100 z-10"
              id="projects-modal-body"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-slate-50 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
                  </div>
                  <div className="h-4 w-[1px] bg-gray-200" />
                  <span className="text-xs font-bold font-sans text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={12} className="text-blue-500" />
                    Demo Sandbox
                  </span>
                </div>

                {/* Device Mode Selectors (Desktop only / Hide on small screens for layout safety) */}
                <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-xl gap-1">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-2 rounded-lg transition-all focus:outline-none cursor-pointer ${
                      deviceMode === 'desktop' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="Desktop View"
                  >
                    <Monitor size={16} />
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`p-2 rounded-lg transition-all focus:outline-none cursor-pointer ${
                      deviceMode === 'tablet' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="Tablet View"
                  >
                    <Tablet size={16} />
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-2 rounded-lg transition-all focus:outline-none cursor-pointer ${
                      deviceMode === 'mobile' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone size={16} />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-xl hover:bg-gray-100 focus:outline-none"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Sandbox Layout */}
              <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-4 bg-slate-900">
                
                {/* Visual Emulator Frame */}
                <div className="lg:col-span-3 flex items-center justify-center p-6 md:p-10 relative overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px]">
                  
                  {/* Simulator Device Frame Wrapper */}
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`relative bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-all ${
                      deviceMode === 'desktop' ? 'w-full aspect-video max-w-[640px]' :
                      deviceMode === 'tablet' ? 'w-[360px] h-[480px]' : 'w-[240px] h-[440px]'
                    }`}
                    id="simulator-device-frame"
                  >
                    {/* Simulated URL bar */}
                    <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                      <div className="bg-slate-950 px-3 py-1 rounded-md flex-1 text-[10px] text-gray-500 font-mono truncate select-none text-center">
                        https://demo.{selectedProject.id}.alexrivera.dev
                      </div>
                    </div>
                    
                    {/* Simulated screen content (using generated project image) */}
                    <div className="w-full h-[calc(100%-29px)] overflow-y-auto bg-slate-900">
                      <img
                        src={selectedProject.image}
                        alt="Simulated Web Screen"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover select-none"
                      />
                      
                      {/* Interaction hint overlays */}
                      <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col gap-2">
                        <span className="text-[10px] text-primary font-bold tracking-widest uppercase font-mono">Live Interactive Module</span>
                        <p className="text-xs text-gray-400 leading-normal">
                          This is a dynamic viewport render of the active {selectedProject.title} engine. Fully localized client state caching has been successfully initialized!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar Specs Panel */}
                <div className="bg-white p-6 md:p-8 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between overflow-y-auto">
                  <div className="text-left">
                    <span className="px-2.5 py-1 bg-blue-50 text-primary text-[10px] font-bold tracking-widest uppercase rounded-md mb-4 inline-block font-mono">
                      Engineering Spec
                    </span>
                    <h3 className="font-sans font-bold text-gray-900 text-lg mb-3 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                      Optimized using modular components, high accessibility standards (WCAG), and responsive rendering layers.
                    </p>

                    <h4 className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mb-3 font-sans">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-sans">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                    <a
                      href={selectedProject.githubUrl}
                      onClick={(e) => {
                        setSelectedProject(null);
                        handleGithubClick(e, selectedProject.title);
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <Github size={12} />
                      Inspect Code
                    </a>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setDemoNotice(`Redirecting to live app deployment for ${selectedProject.title}...`);
                        setTimeout(() => setDemoNotice(null), 3000);
                      }}
                      className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-gray-200 text-gray-700 hover:text-gray-900 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <ExternalLink size={12} />
                      Open Full Screen
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
