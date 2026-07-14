import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowRight, FileText } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Hero() {
  const handleScrollTo = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 md:py-36 flex items-center bg-radial from-slate-50 to-slate-100 overflow-hidden"
    >
      {/* Decorative Grid & Shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="absolute top-20 right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-xl -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-[30rem] h-[30rem] rounded-full bg-cyan-100/30 blur-xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-xs"
            id="hero-greeting-badge"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{portfolioOwner.greeting} {portfolioOwner.firstName}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-6"
            id="hero-name-title"
          >
            {portfolioOwner.fullName}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-sans">
              {portfolioOwner.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-500 font-sans font-normal max-w-2xl mb-8 leading-relaxed"
            id="hero-description"
          >
            {portfolioOwner.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            id="hero-actions"
          >
            <button
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 shadow-md shadow-blue-500/10 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-100 text-base"
              id="hero-cta-primary"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-100 text-base"
              id="hero-cta-secondary"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5 pt-4 border-t border-gray-200/60 w-full"
            id="hero-socials"
          >
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mr-2 font-sans">
              Connect
            </span>
            <a
              href={portfolioOwner.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all focus:outline-none"
              aria-label="GitHub"
              id="hero-social-github"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioOwner.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all focus:outline-none"
              aria-label="LinkedIn"
              id="hero-social-linkedin"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={portfolioOwner.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-sky-500 hover:bg-sky-50/80 rounded-xl transition-all focus:outline-none"
              aria-label="Twitter"
              id="hero-social-twitter"
            >
              <Twitter size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <div className="lg:col-span-5 relative flex justify-center items-center" id="hero-illustration-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white/80 bg-white"
          >
            <img
               src={portfolioOwner.heroIllustration}
               alt="Developer Workspace Illustration"
               loading="eager"
               decoding="async"
               fetchPriority="high"
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover select-none"
                id="hero-illustration-img"
            />
          </motion.div>

          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-[-16px] md:left-[-32px] bg-white p-4 rounded-2xl shadow-xl shadow-slate-900/5 border border-gray-100 flex items-center gap-3 select-none"
            id="hero-floating-badge-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold font-sans">
              JS
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase leading-none mb-1 font-sans">Clean Code</p>
              <p className="text-sm text-gray-900 font-bold leading-none font-sans">ESNext</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 right-[-16px] md:right-[-32px] bg-white p-4 rounded-2xl shadow-xl shadow-slate-900/5 border border-gray-100 flex items-center gap-3 select-none"
            id="hero-floating-badge-2"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
              ⚛
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase leading-none mb-1 font-sans">UI/UX Engine</p>
              <p className="text-sm text-gray-900 font-bold leading-none font-sans">React 19</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
