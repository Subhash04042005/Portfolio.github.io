import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Sparkles, Code, Palette, MapPin, Calendar, Star, Zap } from 'lucide-react';

const Hero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

// const handleResumeDownload = () => {
//   // Create a temporary link element
//   const link = document.createElement('a');
//   link.href = '/Subhash_Chand_Verma_Resume.pdf'; // Path to your resume in public folder
//   link.download = 'Subhash_Chand_Verma_Resume.pdf'; // Name for downloaded file
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };
const handleResumeDownload = () => {
  // Replace with your actual Google Drive share link
  const resumeUrl = 'https://drive.google.com/file/d/1-u1UNa92JJiScJ0-DY2phDUCD9sAr6qb/view?usp=drive_link';
  window.open(resumeUrl, '_blank');
};
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#38FF62]/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#38FF62]/10 transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-[#232323]/30 dark:border-white/30 transform -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#38FF62]/15 transform rotate-45 animate-bounce"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-60 left-40 w-8 h-8 bg-[#38FF62]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-40 w-6 h-6 bg-[#38FF62]/30 transform rotate-45 animate-bounce"></div>
        
        {/* Dynamic Cursor Trail */}
        <div 
          className="absolute w-4 h-4 bg-[#38FF62]/30 rounded-full pointer-events-none transition-all duration-300 ease-out hidden lg:block"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'scale(0.8)',
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-[#38FF62]/60 rounded-full pointer-events-none transition-all duration-150 ease-out hidden lg:block"
          style={{
            left: mousePosition.x - 4,
            top: mousePosition.y - 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Enhanced Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Profile Photo & Info (5 columns) */}
          <div className={`lg:col-span-5 order-1 lg:order-1 flex flex-col items-center lg:items-start transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}>
            
            {/* Enhanced Profile Photo Container */}
            <div className="relative mb-6 lg:mb-8 group">
              {/* Animated Border Ring with Enhanced Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#38FF62] via-[#2AE052] to-[#1DC943] p-1 rounded-full animate-spin-slow">
                <div className="bg-[#F2F2F2] dark:bg-[#232323] rounded-full w-full h-full"></div>
              </div>
              
              {/* Secondary glow effect */}
              <div className="absolute inset-0 bg-[#38FF62]/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Profile Photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#38FF62]/20 to-[#2AE052]/20 flex items-center justify-center border-4 border-white dark:border-[#232323] shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10">
                {/* Actual Profile Photo */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_dev-showcase-180/artifacts/107mxw99_profile%20dp.jpg"
                  alt="Subhash Chand Verma - Frontend Developer"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
                
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38FF62]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-end justify-center pb-8">
                  <div className="text-white font-mono text-sm uppercase tracking-wider text-center bg-[#232323]/80 px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <Code size={16} />
                      <span>Frontend Dev</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Status Badge */}
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-[#38FF62] text-[#232323] px-3 py-2 lg:px-4 lg:py-2 font-mono text-xs uppercase tracking-wider border-4 border-white dark:border-[#232323] shadow-lg z-20 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#232323] rounded-full animate-ping"></div>
                  <span className="hidden sm:inline">Available</span>
                  <span className="sm:hidden">●</span>
                </div>
              </div>

              {/* Professional badges - Updated to 3+ Years */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-[#232323] text-[#38FF62] px-3 py-2 font-mono text-xs uppercase tracking-wider border-2 border-[#38FF62] shadow-lg z-20 transform rotate-6">
                <div className="flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  <span className="hidden sm:inline">3+ Years</span>
                  <span className="sm:hidden">3Y</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 w-full max-w-sm lg:max-w-md">
              <div className="bg-white/80 dark:bg-[#232323]/80 backdrop-blur-sm p-3 lg:p-4 border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/50 hover:shadow-lg hover:shadow-[#38FF62]/20 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#38FF62]/10 rounded-full flex items-center justify-center group-hover:bg-[#38FF62]/20 transition-colors duration-300">
                    <MapPin className="text-[#38FF62] group-hover:animate-bounce flex-shrink-0" size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Location</div>
                    <div className="font-medium text-[#232323] dark:text-white text-sm truncate">Rajasthan, India</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-[#232323]/80 backdrop-blur-sm p-3 lg:p-4 border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/50 hover:shadow-lg hover:shadow-[#38FF62]/20 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#38FF62]/10 rounded-full flex items-center justify-center group-hover:bg-[#38FF62]/20 transition-colors duration-300">
                    <Calendar className="text-[#38FF62] group-hover:animate-bounce flex-shrink-0" size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Experience</div>
                    <div className="font-medium text-[#232323] dark:text-white text-sm truncate">3+ Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content (7 columns) */}
          <div className={`lg:col-span-7 order-2 lg:order-2 text-center lg:text-left transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}>
            
            {/* Fixed Animated Title with Better Sizing */}
            <div className="mb-4 lg:mb-6">
              {data.name.split(' ').map((word, index) => (
                <div key={index} className="block overflow-hidden">
                  <h1 
                    className={`hero-title font-display text-[clamp(28px,6vw,65px)] lg:text-[clamp(45px,7vw,100px)] xl:text-[clamp(55px,8vw,120px)] font-normal text-[#232323] dark:text-white leading-[0.9] uppercase tracking-tight transform transition-all duration-1000 ease-out ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                    style={{ 
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                      transitionDelay: `${600 + (index * 200)}ms`,
                      textShadow: '0 0 40px rgba(56, 255, 98, 0.1)'
                    }}
                  >
                    {word}
                  </h1>
                </div>
              ))}
            </div>

            {/* Enhanced Subtitle */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3 mb-4">
                <div className="w-8 h-8 bg-[#38FF62]/10 rounded-full flex items-center justify-center">
                  <Code className="text-[#38FF62] animate-pulse flex-shrink-0" size={16} />
                </div>
                <p 
                  className={`text-big font-sans text-[clamp(18px,3vw,32px)] lg:text-[clamp(24px,4vw,40px)] font-normal text-[#232323] dark:text-white leading-tight transform transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    transitionDelay: '800ms',
                    background: 'linear-gradient(135deg, #232323 0%, #38FF62 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {data.title}
                </p>
                <div className="w-8 h-8 bg-[#38FF62]/10 rounded-full flex items-center justify-center">
                  <Palette className="text-[#38FF62] animate-pulse flex-shrink-0" size={16} />
                </div>
              </div>
              
              <p className={`text-body font-sans text-[clamp(14px,1.6vw,16px)] lg:text-[clamp(15px,1.8vw,18px)] font-normal text-[#232323]/80 dark:text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}>
                {data.description}
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-12 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1200ms' }}>
              <button
                onClick={handleResumeDownload}
                className="group relative bg-[#38FF62] border-none px-8 py-4 font-mono text-sm font-normal text-[#232323] uppercase tracking-wider cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center gap-3 overflow-hidden hover:shadow-xl hover:shadow-[#38FF62]/30 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#38FF62] to-[#2AE052] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Download size={18} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume </span>
                
                <Zap size={16} className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={scrollToAbout}
                className="group relative bg-transparent border-2 border-[#232323] dark:border-white px-8 py-4 font-mono text-sm font-normal text-[#232323] dark:text-white uppercase tracking-wider cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center gap-3 overflow-hidden hover:bg-[#232323] dark:hover:bg-white hover:text-white dark:hover:text-[#232323] hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="group-hover:animate-pulse">Explore Work</span>
                <ArrowDown size={18} className="animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Enhanced Social Proof / Stats - Updated Stats */}
            <div className={`grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1400ms' }}>
              <div className="text-center lg:text-left p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/5 dark:border-white/5 hover:border-[#38FF62]/30 transition-all duration-300">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38FF62] mb-2">15+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Projects</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/5 dark:border-white/5 hover:border-[#38FF62]/30 transition-all duration-300">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38FF62] mb-2">8+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Technologies</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/5 dark:border-white/5 hover:border-[#38FF62]/30 transition-all duration-300">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38FF62] mb-2">3+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Years</div>
              </div>
            </div>

            {/* Additional Info Banner */}
            <div className={`mt-8 lg:mt-12 p-4 bg-gradient-to-r from-[#38FF62]/10 via-transparent to-[#38FF62]/10 border-l-4 border-l-[#38FF62] transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1600ms' }}>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Sparkles className="text-[#38FF62] animate-pulse" size={20} />
                <p className="text-sm font-mono text-[#232323] dark:text-white uppercase tracking-wider">
                  Open to New Opportunities • Remote Friendly • Fast Learner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out hidden lg:flex ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '1800ms' }}>
          <div className="flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#38FF62] to-transparent animate-pulse"></div>
            <button
              onClick={scrollToAbout}
              className="group text-[#232323]/60 dark:text-white/60 hover:text-[#38FF62] transition-colors duration-300 flex flex-col items-center gap-2 p-2"
              aria-label="Scroll to about section"
            >
              <span className="text-xs font-mono uppercase tracking-wider opacity-70">Scroll to Explore</span>
              <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Grid Background with Animation */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #232323 1px, transparent 1px),
            linear-gradient(to bottom, #232323 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s ease-in-out infinite alternate'
        }}
      />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(10px, 10px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;