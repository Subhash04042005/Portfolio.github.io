import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2]/95 backdrop-blur-sm border-b border-[#232323]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="header-logo font-mono text-xl font-normal text-[#232323] uppercase tracking-wider">
            SCV
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link font-mono text-xs font-normal text-[#232323] uppercase tracking-wider px-3 py-2 transition-opacity duration-150 hover:opacity-70 active:opacity-50"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-[#232323] hover:opacity-70 transition-opacity duration-150"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-[#232323] hover:opacity-70 transition-opacity duration-150"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#232323] hover:opacity-70 transition-opacity duration-150"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#232323]/10">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left nav-link font-mono text-xs font-normal text-[#232323] uppercase tracking-wider px-0 py-3 transition-opacity duration-150 hover:opacity-70 active:opacity-50"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;