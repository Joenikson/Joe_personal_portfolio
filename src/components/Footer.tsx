import { useState, useEffect, MouseEvent } from 'react';
import { Github, Linkedin, ArrowUp, Code2 } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 text-gray-400 py-16 md:py-20 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center gap-10">
        
        {/* Top Segment */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-800">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
            id="footer-logo-link"
          >
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <Code2 size={18} />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white">
              {portfolioOwner.firstName}
              <span className="text-primary">.</span>
            </span>
          </a>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8" id="footer-nav">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              About
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Experience
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Services
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none font-sans">
              Contact
            </a>
          </nav>

          {/* Socials Connection */}
          <div className="flex items-center gap-4" id="footer-socials">
            <a
              href={portfolioOwner.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all focus:outline-none"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioOwner.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all focus:outline-none"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

        </div>

        {/* Bottom Segment */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p className="text-gray-500">
            © {currentYear} {portfolioOwner.fullName}. All rights reserved.
          </p>
          <p className="text-gray-500">
            Premium Interactive Architecture • Engineered in California
          </p>
        </div>

      </div>

      {/* Elegant Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 p-3.5 bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all z-40 cursor-pointer focus:outline-none border border-blue-600/50 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
        id="back-to-top-btn"
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  );
}
