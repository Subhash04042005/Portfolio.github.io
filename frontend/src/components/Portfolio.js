import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from './ui/toaster';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Simulate API call with mock data
    setPortfolioData(mockData);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Update document class
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2] dark:bg-[#232323]">
        <div className="text-[#232323] dark:text-white font-mono text-sm uppercase tracking-wider">
          Loading Portfolio...
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#F2F2F2] dark:bg-[#232323] transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[#F2F2F2] dark:bg-[#232323] opacity-10 pointer-events-none z-[-1]"
           style={{
             backgroundImage: `
               linear-gradient(to right, #232323 1px, transparent 1px),
               linear-gradient(to bottom, #232323 1px, transparent 1px)
             `,
             backgroundSize: '47.6px 47.6px'
           }} />
      
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;