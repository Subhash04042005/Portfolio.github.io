import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Settings, TrendingUp } from 'lucide-react';

const Skills = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate skill bars with delay
            setTimeout(() => {
              const skills = {};
              data.categories.forEach((category) => {
                category.skills.forEach((skill) => {
                  skills[skill.name] = skill.level;
                });
              });
              setAnimatedSkills(skills);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [data.categories]);

  const categoryIcons = {
    'Frontend Technologies': Code,
    'Styling & Design': Palette,
    'Tools & Others': Settings
  };

  const SkillBar = ({ skill, index, categoryIndex }) => {
    const animatedLevel = animatedSkills[skill.name] || 0;
    
    return (
      <div 
        className={`mb-8 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}
        style={{ transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] flex items-center gap-2">
            <TrendingUp size={16} className="text-[#38FF62]" />
            {skill.name}
          </span>
          <span className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] uppercase tracking-wider bg-[#38FF62]/10 px-3 py-1">
            {skill.level}%
          </span>
        </div>
        
        <div className="relative w-full bg-[#232323]/10 h-3 overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 4px,
                #232323 4px,
                #232323 8px
              )`
            }}
          />
          
          {/* Animated Progress Bar */}
          <div 
            className="relative h-full transition-all duration-2000 ease-out overflow-hidden"
            style={{ 
              width: `${animatedLevel}%`,
              background: `linear-gradient(135deg, #38FF62 0%, #2AE052 50%, #1DC943 100%)`,
              boxShadow: '0 0 10px rgba(56, 255, 98, 0.3)'
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
          
          {/* Skill Level Indicator */}
          <div 
            className="absolute top-0 w-1 h-full bg-white shadow-lg transition-all duration-2000 ease-out"
            style={{ left: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={skillsRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#F2F2F2] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#38FF62]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#38FF62]/3 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#38FF62]"></div>
              <p className="label font-mono text-[clamp(10px,1.5vw,18px)] font-normal text-[#232323] uppercase tracking-wider bg-white px-4 py-2 border border-[#232323]/10">
                What I Know
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#38FF62]"></div>
            </div>
            
            <h2 
              className="title-big font-display text-[clamp(44px,8vw,200px)] font-normal leading-none uppercase mb-6"
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

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {data.categories.map((category, categoryIndex) => {
              const IconComponent = categoryIcons[category.name] || Code;
              
              return (
                <div 
                  key={categoryIndex} 
                  className={`group transform transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Category Header */}
                  <div className="bg-white p-6 border border-[#232323]/10 mb-8 hover:border-[#38FF62]/30 transition-all duration-300 hover:shadow-lg group-hover:transform group-hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#38FF62]/20 to-[#38FF62]/10 flex items-center justify-center group-hover:from-[#38FF62]/30 group-hover:to-[#38FF62]/20 transition-all duration-300">
                        <IconComponent size={24} className="text-[#38FF62]" />
                      </div>
                      <h3 className="card-title font-mono text-sm font-normal text-[#232323] uppercase tracking-wider">
                        {category.name}
                      </h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-[#38FF62] via-[#38FF62]/50 to-transparent"></div>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex} 
                        skill={skill} 
                        index={skillIndex}
                        categoryIndex={categoryIndex}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Skills Summary */}
          <div className={`text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}>
            <div className="bg-white/70 backdrop-blur-sm p-8 border border-[#232323]/10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Code className="text-[#38FF62] animate-pulse" size={24} />
                <h3 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] leading-tight">
                  Continuous Learning Journey
                </h3>
                <Code className="text-[#38FF62] animate-pulse" size={24} />
              </div>
              
              <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323]/80 leading-relaxed">
                Always learning and staying updated with the latest technologies and best practices in frontend development. 
                Passionate about writing clean, maintainable code that delivers exceptional user experiences.
              </p>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">5+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60">Technologies</div>
                </div>
                <div className="w-px h-8 bg-[#232323]/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">10+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60">Projects</div>
                </div>
                <div className="w-px h-8 bg-[#232323]/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#38FF62] mb-1">2+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#232323]/60">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;