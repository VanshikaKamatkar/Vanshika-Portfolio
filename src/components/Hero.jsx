import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-24 pb-12 overflow-hidden bg-primary-dark relative"
    >
      
      {/* Optional: Subtle Background Gradient Blob for depth */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-soft-pink/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-accent-purple font-medium tracking-wide text-lg">
            Hi, I'm
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Vanshika <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-soft-pink">Kamatkar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Developer
          </h2>
          
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences. 
            Passionate about transforming ideas into code and creating intuitive user interfaces.
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
            <Link
              to="projects"
              smooth={true}
              offset={-100}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-secondary-purple to-accent-purple text-white font-bold shadow-lg hover:shadow-soft-pink/20 hover:scale-105 transition-all cursor-pointer"
            >
              View My Work
            </Link>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://github.com/VanshikaKamatkar" className="text-2xl text-gray-400 hover:text-soft-pink transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/vanshika-kamatkar-17556a28a/" className="text-2xl text-gray-400 hover:text-soft-pink transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end relative"
        >
          {/* Decorative Circle Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple to-soft-pink rounded-full blur-2xl opacity-20 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
            {/* REPLACE THIS SRC WITH YOUR ACTUAL IMAGE PATH 
               Example: src="/profile.jpg" if image is in public folder
            */}
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;