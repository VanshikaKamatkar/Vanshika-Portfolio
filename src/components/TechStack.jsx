import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiExpress, SiPostman, SiMysql } from 'react-icons/si';

const TechStack = () => {
  // Skill Data with specific brand colors
  const skills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { id: 4, name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { id: 5, name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { id: 6, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { id: 7, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { id: 8, name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" }, 
    { id: 9, name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { id: 10, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },        
    { id: 11, name: "Postman", icon: <SiPostman />, color: "#FF6C37" },    
    { id: 12, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ];

  return (
    <section id="tech" className="py-20 bg-primary-dark relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-widest uppercase text-sm">
            My Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 flex items-center justify-center gap-3">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-soft-pink">
              Tech Stack
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon */}
              <div 
                className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Label */}
              <h3 className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;