export const mockData = {
  hero: {
    name: "Subhash Chand Verma",
    title: "Frontend Developer",
    description: "Crafting modern, responsive web experiences with clean code and innovative design. Passionate about creating user-centric applications that make a difference.",
    location: "Rajasthan, India"
  },
  
  about: {
    title: "About Me",
    description: "I'm a dedicated Frontend Developer with a Diploma in Computer Science Engineering from NIMS University, Jaipur. My journey in web development is driven by a passion for creating intuitive, accessible, and visually appealing user interfaces.",
    education: {
      degree: "Diploma in Computer Science Engineering",
      institution: "NIMS University",
      location: "Jaipur, Rajasthan",
      year: "2022-2025"
    },
    highlights: [
      "Frontend Development Specialist",
      "Responsive Design Expert",
      "Modern JavaScript Frameworks",
      "UI/UX Implementation",
      "Performance Optimization"
    ]
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Technologies",
        skills: [
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "React.js", level: 80 },
        ]
      },
      {
        name: "Styling & Design",
        skills: [
          { name: "Tailwind CSS", level: 90 },
          { name: "Bootstrap", level: 80 },
          { name: "CSS Grid", level: 90 },
          { name: "Flexbox", level: 95 }
        ]
      },
      {
        name: "Tools & Others",
        skills: [
          { name: "Git/GitHub", level: 85 },
          { name: "npm/Yarn", level: 80 },
          { name: "VS Code", level: 95 },
          { name: "Figma", level: 75 }
        ]
      }
    ]
  },

  projects: [
      {
      id: 1,
      title: "Netflix Clone",
      description: "A responsive Netflix clone built with modern web technologies, featuring an intuitive UI for browsing movies and TV shows with smooth animations and mobile-first design.",
      technologies: ["HTML5", "CSS3", "JavaScript",],
      image: "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg",
      github: "https://github.com/Subhash04042005/netflix-clone.github.io.git",
      live: "https://subhash04042005.github.io/netflix-clone.github.io/",
      featured: false
    },
   
    {
      id: 2,
      title: "Weather Forecast App",
      description: "A responsive weather application providing detailed forecasts, location-based weather data, and interactive maps with beautiful UI.",
      technologies: ["JavaScript", "OpenWeather API", "CSS3", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      github: "https://github.com/Subhash04042005",
      live: "https://github.com/Subhash04042005",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management platform with drag-and-drop functionality, team collaboration, and progress tracking.",
      technologies: ["React", "Context API", "CSS Modules", "Local Storage"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      github: "https://github.com/Subhash04042005",
      live: "https://github.com/Subhash04042005",
      featured: false
    },
     {
      id: 4,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management features.",
      technologies: ["React", "Chart.js", "Tailwind CSS", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com/Subhash04042005",
      live: "https://github.com/Subhash04042005",
      featured: true
    },
  
    {
      id: 5,
      title: "Portfolio Template",
      description: "A clean, minimal portfolio template for developers and designers with dark mode support and smooth animations.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      github: "https://github.com/Subhash04042005",
      live: "https://github.com/Subhash04042005",
      featured: false
    },
    {
      id: 6,
      title: "News Aggregator",
      description: "A news aggregation platform that curates articles from multiple sources with category filtering and search functionality.",
      technologies: ["React", "News API", "SASS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      github: "https://github.com/Subhash04042005",
      live: "https://github.com/Subhash04042005",
      featured: false
    }
  ]
};