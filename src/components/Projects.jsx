import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Task Evaluator",
      description: "An AI-driven code review and bug-fixing application that analyzes programming tasks and provides structured feedback and corrected solutions in real time.",
      image: "/smart-task-evaluator.png",
      tech: ["React.js", "Tailwind", "Node.js", "Express", "MongoDB", "Groq API"],
      github: "https://github.com/VanshikaKamatkar/smart-task-evaluator",
      live: "https://smart-task-evaluator-chi.vercel.app/"
    },
    {
      id: 2,
      title: "Meet Bridge",
      description: "A full-featured video conferencing solution with secure P2P architecture, enabling encrypted one-on-one and group video calls, real-time text chat, and seamless screen sharing",
      image: "/meet-bridge.png",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "WebRTC"],
      github: "https://github.com/VanshikaKamatkar/MeetBridge",
      live: "https://meetbridgefrontend.onrender.com/"
    },
    {
      id: 3,
      title: "Faculty's Live Locator",
      description: "A real-time faculty tracking platform featuring an interactive SVG-based campus map for intuitive location visualization. Enables students and administrators to instantly locate faculty members across campus buildings with live position updates.",
      image: "/faculty-live-locator.png",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Leaflet.js", "Socket.IO"],
      github: "https://github.com/VanshikaKamatkar/FacultiesLiveLoactor",
      live: "https://faculties-live-loactor.vercel.app/"
    },
    {
      id: 4,
      title: "Wanderlust",
      description: "A full-stack travel destination platform featuring secure user authentication and comprehensive review management system. Users can discover destinations, share experiences through CRUD-enabled reviews, and upload travel photos via cloud-based storage for seamless image handling.",
      image: "/wanderlust.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Express-sessions"],
      github: "https://github.com/VanshikaKamatkar/Wanderlust",
      live: "https://wanderlust-wudz.onrender.com/listings"
    },
    {
      id: 5,
      title: "Where in the World",
      description: "A country info web app with REST API integration for real-time search, filtering by region/name, and a light/dark mode toggle.",
      image: "/where-in-the-world.png",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      github: "https://github.com/VanshikaKamatkar/WhereInTheWorld",
      live: "https://678fe2db4b1a0656c584974f--euphonious-pony-843283.netlify.app/"
    },
    {
      id: 6,
      title: "Weather App",
      description: "API-driven weather application delivering real-time forecasts and meteorological data.",
      image: "/weather-app.png",
      tech: ["React.js", "OpenWeather API"],
      github: "https://github.com/VanshikaKamatkar/WeatherApp",
      live: "https://webappforweather.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary-dark relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-purple/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-purple font-medium tracking-widest uppercase text-sm">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-soft-pink">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on, ranging from AI driven web applications to full-stack projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;