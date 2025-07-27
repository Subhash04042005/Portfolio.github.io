import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Subhash04042005',
      label: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '',
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:subhashchandverma761@gmail.com',
      label: 'Send Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 lg:py-20 bg-[#232323] dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <button
                onClick={scrollToTop}
                className="header-logo font-mono text-2xl font-normal text-white uppercase tracking-wider hover:text-[#38FF62] transition-colors duration-150 mb-6"
              >
                Subhash Chand Verma
              </button>
              <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-white/70 leading-relaxed max-w-lg mb-4">
                Frontend Developer with 3+ years of experience creating exceptional digital experiences. 
                Always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Mail size={16} />
                <span>subhashchandverma761@gmail.com</span>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="card-title font-mono text-sm font-normal text-white uppercase tracking-wider mb-6">
                Connect
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-white/70 hover:text-[#38FF62] transition-colors duration-150"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-white/50">
                © {currentYear} Subhash Chand Verma. All rights reserved.
              </p>
              
              {/* Made with love */}
              <div className="flex items-center gap-2 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-white/50">
                <span>Made with</span>
                <Heart size={16} className="text-[#38FF62] fill-current" />
                <span>in Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-12 text-center">
            <button
              onClick={scrollToTop}
              className="btn-ghost bg-transparent border-none px-4 py-2 font-mono text-xs font-normal text-white uppercase tracking-wider cursor-pointer transition-all duration-150 hover:opacity-70 hover:underline active:opacity-50"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;