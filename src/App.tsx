/// <reference types="react" />
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for trigger boundaries
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-blue-100 selection:text-blue-700 antialiased">
      {/* Dynamic Header */}
      <Navbar activeSection={activeSection} />
      
      {/* Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer & Back to top controls */}
      <Footer />
    </div>
  );
}
