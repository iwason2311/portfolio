import { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import WhatIDo from './components/WhatIDo';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Coursework from './components/Coursework';
import Values from './components/Values';
import Contact from './components/Contact';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'now', 'education', 'experience', 'projects', 'skills', 'coursework', 'values', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'story', label: 'My Story' },
    { id: 'now', label: 'What I Do' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'coursework', label: 'Coursework' },
    { id: 'values', label: 'Values' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1F2E] transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-[#F7F7F5]/95 dark:bg-[#242936]/95 backdrop-blur-sm shadow-sm z-50 border-b border-[#D3A96F]/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] hover:text-[#D3A96F] transition-colors"
            >
              Ishaan Wason
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[#D3A96F]'
                      : 'text-[#0E1A2B] dark:text-[#E8E9ED] hover:text-[#D3A96F]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg text-[#0E1A2B] dark:text-[#E8E9ED] hover:bg-[#D3A96F]/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[#0E1A2B] dark:text-[#E8E9ED] hover:bg-[#D3A96F]/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                className="text-[#0E1A2B] dark:text-[#E8E9ED]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-[#F7F7F5] dark:bg-[#242936] border-t border-[#D3A96F]/20 transition-colors duration-300">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[#D3A96F] bg-[#D3A96F]/10'
                      : 'text-[#0E1A2B] dark:text-[#E8E9ED] hover:text-[#D3A96F] hover:bg-[#D3A96F]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <MyStory />
        <WhatIDo />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Coursework />
        <Values />
        <Contact />
      </main>

      <footer className="bg-[#F7F7F5] dark:bg-[#242936] border-t-2 border-[#D3A96F]/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#A8ADB7] dark:text-[#B0B3BA] text-sm">
              © 2025 Ishaan Wason. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:contact@iwason.com"
                className="text-[#A8ADB7] dark:text-[#B0B3BA] hover:text-[#D3A96F] transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/iwason"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8ADB7] dark:text-[#B0B3BA] hover:text-[#D3A96F] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
