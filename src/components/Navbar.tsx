import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { portfolioOwner } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      setIsMobileMenuOpen(false);
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 text-gray-900 hover:text-primary transition-colors focus:outline-none"
          id="logo-link"
        >
          <div className="bg-primary text-white p-1.5 rounded-lg">
            <Code2 size={20} />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-gray-900">
            {portfolioOwner.firstName}
            <span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-sans text-sm font-medium transition-colors relative py-1.5 focus:outline-none ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                id={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Hamburger Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          id="hamburger-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white border-t border-gray-100 z-40 transition-transform duration-300 md:hidden flex flex-col justify-start px-6 py-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-sans text-lg font-semibold py-2 px-3 rounded-xl transition-all ${
                  isActive
                    ? 'text-primary bg-blue-50/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                id={`mobile-nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        
        <div className="mt-auto border-t border-gray-100 pt-8 pb-4 flex flex-col gap-2">
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Get in Touch</p>
          <a href={`mailto:${portfolioOwner.socials.email}`} className="text-gray-900 font-medium hover:text-primary transition-colors text-sm">
            {portfolioOwner.socials.email}
          </a>
          <p className="text-xs text-gray-400">{portfolioOwner.socials.location}</p>
        </div>
      </div>
    </header>
  );
}
