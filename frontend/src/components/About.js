import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, User, Award, Sparkles } from 'lucide-react';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ experience: 0, projects: 0, technologies: 0 });
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate statistics - Updated values
            setTimeout(() => {
              const stats = { experience: 3, projects: 15, technologies: 20 };
              Object.keys(stats).forEach((key) => {
                let start = 0;
                const end = stats[key];
                const increment = end / 50;
                const timer = setInterval(() => {
                  start += increment;
                  if (start >= end) {
                    setAnimatedStats(prev => ({ ...prev, [key]: end }));
                    clearInterval(timer);
                  } else {
                    setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
                  }
                }, 20);
              });
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-[#232323] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#38FF62]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#38FF62]/3 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 left-20 w-4 h-32 bg-[#38FF62]/20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-4 h-24 bg-[#38FF62]/20 transform -rotate-12 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#38FF62]"></div>
              <p className="label font-mono text-[clamp(10px,1.5vw,18px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider bg-white dark:bg-[#232323] px-4 py-2 border border-[#232323]/10 dark:border-white/10">
                Who I Am
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#38FF62]"></div>
            </div>
            
            <h2 
              className="title-big font-display text-[clamp(44px,8vw,200px)] font-normal leading-none uppercase mb-6 text-[#232323] dark:text-white"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #232323 0%, #38FF62 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {data.title}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            {/* Enhanced Description */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-[#38FF62]" size={24} />
                  <h3 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] dark:text-white leading-tight">
                    My Journey
                  </h3>
                </div>
                
                <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323]/80 dark:text-white/80 leading-relaxed mb-8">
                  {data.description}
                </p>
              </div>
              
              {/* Enhanced Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="card-title font-mono text-sm font-normal text-[#232323] dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                  <Sparkles className="text-[#38FF62]" size={16} />
                  Expertise Areas
                </h4>
                {data.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 transform transition-all duration-500 ease-out ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                  >
                    <div className="w-3 h-3 bg-[#38FF62] transform rotate-45 flex-shrink-0"></div>
                    <span className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white hover:text-[#38FF62] transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Statistics - Updated Values */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">{animatedStats.experience}+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Years Learning</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">{animatedStats.projects}+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-[#232323]/50 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">{animatedStats.technologies}+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60 dark:text-white/60">Technologies</div>
                </div>
              </div>
            </div>

            {/* Enhanced Education Card */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="group relative bg-white/70 dark:bg-[#232323]/70 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 p-8 transition-all duration-500 hover:border-[#38FF62]/30 hover:shadow-2xl hover:shadow-[#38FF62]/10 transform hover:-translate-y-2 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #38FF62 0px, #38FF62 1px, transparent 1px, transparent 20px)`
                    }}
                  />
                </div>
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#38FF62]/20 to-[#38FF62]/10 flex items-center justify-center group-hover:from-[#38FF62]/30 group-hover:to-[#38FF62]/20 transition-all duration-300">
                      <GraduationCap size={24} className="text-[#38FF62]" />
                    </div>
                    <h3 className="card-title font-mono text-sm font-normal text-[#232323] dark:text-white uppercase tracking-wider">
                      Education
                    </h3>
                  </div>
                  
                  {/* Education Details */}
                  <div className="space-y-6">
                    <h4 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] dark:text-white leading-tight group-hover:text-[#38FF62] transition-colors duration-300">
                      {data.education.degree}
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-[#232323]/50 hover:bg-[#38FF62]/5 transition-colors duration-300">
                        <GraduationCap size={18} className="text-[#38FF62] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-[#232323] dark:text-white">{data.education.institution}</div>
                          <div className="text-sm text-[#232323]/60 dark:text-white/60">University</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-[#232323]/50 hover:bg-[#38FF62]/5 transition-colors duration-300">
                        <MapPin size={18} className="text-[#38FF62] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-[#232323] dark:text-white">{data.education.location}</div>
                          <div className="text-sm text-[#232323]/60 dark:text-white/60">Location</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-[#232323]/50 hover:bg-[#38FF62]/5 transition-colors duration-300">
                        <Calendar size={18} className="text-[#38FF62] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-[#232323] dark:text-white">{data.education.year}</div>
                          <div className="text-sm text-[#232323]/60 dark:text-white/60">Graduation</div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#38FF62]/10 to-[#2AE052]/10 border-l-4 border-[#38FF62]">
                      <div className="flex items-center gap-3">
                        <Award className="text-[#38FF62]" size={20} />
                        <div>
                          <div className="font-medium text-[#232323] dark:text-white text-sm">Computer Science Engineering</div>
                          <div className="text-xs text-[#232323]/60 dark:text-white/60">Specialized in Software Development</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}>
            <div className="bg-gradient-to-r from-[#38FF62]/5 via-transparent to-[#38FF62]/5 p-8 border-t border-b border-[#38FF62]/20">
              <h3 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] dark:text-white leading-tight mb-4">
                Ready to create something amazing together?
              </h3>
              <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323]/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
                Let's collaborate on your next project and bring your ideas to life with clean, modern web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;