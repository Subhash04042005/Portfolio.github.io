import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Zap, Sparkles } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const { toast } = useToast();
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - in real implementation, this would send to backend
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  // Updated contact info with new phone and email
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subhashchandverma761@gmail.com',
      href: 'mailto:subhashchandverma761@gmail.com',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8708110637',
      href: 'tel:+918708110637',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rajasthan, India',
      href: null,
      color: 'from-purple-500/20 to-purple-600/20'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#F2F2F2] dark:from-[#232323] dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38FF62]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38FF62]/3 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric Decorations */}
        <div className="absolute top-40 right-20 w-2 h-40 bg-[#38FF62]/20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-2 h-32 bg-[#38FF62]/20 transform -rotate-12 animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-60 left-40 w-4 h-4 bg-[#38FF62]/30 transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 right-40 w-3 h-3 bg-[#38FF62]/40 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#38FF62]"></div>
              <div className="flex items-center gap-2 bg-white dark:bg-[#232323] px-4 py-2 border border-[#232323]/10 dark:border-white/10">
                <MessageCircle className="text-[#38FF62]" size={16} />
                <p className="label font-mono text-[clamp(10px,1.5vw,18px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider">
                  Get In Touch
                </p>
              </div>
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
              Contact
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Enhanced Contact Information */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-[#38FF62] animate-pulse" size={24} />
                  <h3 className="text-big font-sans text-[clamp(32px,6vw,84px)] font-normal text-[#232323] dark:text-white leading-tight">
                    Let's work together
                  </h3>
                </div>
                <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323]/70 dark:text-white/70 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out.
                </p>
                
                <div className="bg-gradient-to-r from-[#38FF62]/10 to-transparent p-6 border-l-4 border-[#38FF62]">
                  <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white leading-relaxed">
                    <strong>Response Time:</strong> Usually within 24 hours
                  </p>
                </div>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`group transform transition-all duration-500 ease-out ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                  >
                    <div className="flex items-center gap-6 p-6 bg-white/70 dark:bg-[#232323]/70 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 hover:border-[#38FF62]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={24} className="text-[#38FF62]" />
                      </div>
                      <div className="flex-1">
                        <p className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Zap size={12} className="text-[#38FF62]" />
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white hover:text-[#38FF62] transition-colors duration-300 flex items-center gap-2 group/link break-all"
                          >
                            {info.value}
                            <Send size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          </a>
                        ) : (
                          <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#38FF62]/10 to-[#2AE052]/10 border border-[#38FF62]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#38FF62] rounded-full animate-pulse"></div>
                  <span className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white">
                    Currently available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="relative bg-white/70 dark:bg-[#232323]/70 backdrop-blur-sm border border-[#232323]/10 dark:border-white/10 p-8 hover:shadow-2xl hover:shadow-[#38FF62]/10 transition-all duration-300 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #38FF62 0px, #38FF62 1px, transparent 1px, transparent 30px)`
                    }}
                  />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] dark:text-white leading-tight mb-2 flex items-center justify-center gap-2">
                      <MessageCircle className="text-[#38FF62]" size={20} />
                      Send a Message
                    </h3>
                    <div className="w-16 h-px bg-[#38FF62] mx-auto"></div>
                  </div>

                  {/* Enhanced Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider block mb-3 flex items-center gap-2">
                        <Sparkles size={12} className="text-[#38FF62]" />
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-white dark:bg-[#232323] border-2 p-4 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white focus:outline-none transition-all duration-300 ${
                          focusedField === 'name' ? 'border-[#38FF62] shadow-lg shadow-[#38FF62]/20' : 'border-[#232323]/20 dark:border-white/20 hover:border-[#38FF62]/50'
                        }`}
                        placeholder="Your name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] transform scale-x-100 transition-transform duration-300"></div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider block mb-3 flex items-center gap-2">
                        <Mail size={12} className="text-[#38FF62]" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-white dark:bg-[#232323] border-2 p-4 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white focus:outline-none transition-all duration-300 ${
                          focusedField === 'email' ? 'border-[#38FF62] shadow-lg shadow-[#38FF62]/20' : 'border-[#232323]/20 dark:border-white/20 hover:border-[#38FF62]/50'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] transform scale-x-100 transition-transform duration-300"></div>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider block mb-3 flex items-center gap-2">
                      <Zap size={12} className="text-[#38FF62]" />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#232323] border-2 p-4 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white focus:outline-none transition-all duration-300 ${
                        focusedField === 'subject' ? 'border-[#38FF62] shadow-lg shadow-[#38FF62]/20' : 'border-[#232323]/20 dark:border-white/20 hover:border-[#38FF62]/50'
                      }`}
                      placeholder="Project inquiry"
                    />
                    {focusedField === 'subject' && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] transform scale-x-100 transition-transform duration-300"></div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] dark:text-white uppercase tracking-wider block mb-3 flex items-center gap-2">
                      <MessageCircle size={12} className="text-[#38FF62]" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="6"
                      className={`w-full bg-white dark:bg-[#232323] border-2 p-4 text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323] dark:text-white focus:outline-none transition-all duration-300 resize-vertical ${
                        focusedField === 'message' ? 'border-[#38FF62] shadow-lg shadow-[#38FF62]/20' : 'border-[#232323]/20 dark:border-white/20 hover:border-[#38FF62]/50'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] transform scale-x-100 transition-transform duration-300"></div>
                    )}
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-[#38FF62] border-none px-8 py-4 font-mono text-sm font-normal text-[#232323] uppercase tracking-wider cursor-pointer transition-all duration-300 min-h-[56px] flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#38FF62]/25 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#38FF62] to-[#2AE052] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#232323]/20 border-t-[#232323] rounded-full animate-spin relative z-10" />
                        <span className="relative z-10">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="relative z-10 group-hover:animate-pulse transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="relative z-10">Send Message</span>
                        <Sparkles size={16} className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;