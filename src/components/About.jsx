import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-dark relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-purple/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <span className="text-accent-purple font-medium tracking-widest uppercase text-sm">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-soft-pink">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I’m a final year <span className="text-white font-semibold">Computer Science Engineering student</span> with hands-on experience in building full-stack web applications and real-time systems. I enjoy working at the intersection of <span className="text-soft-pink">frontend interactivity and backend logic</span>.
            </p>
            
            <p>
              With practical exposure to <span className="text-accent-purple">React, Node.js, REST APIs</span>, and databases like MongoDB and MySQL, I build systems that work as beautifully as they look. Through internships and hackathons, I’ve worked on <span className="text-white">AI-driven tools</span>, live video communication platforms, and interactive campus solutions.
            </p>

            <p>
              I’m particularly interested in developing scalable, user-centric products and continuously improving my problem-solving skills through data structures, system fundamentals, and <span className="text-soft-pink">open-source contributions</span>.
            </p>

            {/* Stats / Decor */}
            <div className="pt-6 flex gap-8 border-t border-white/10 mt-6">
              <div>
                <h4 className="text-3xl font-bold text-white">05+</h4>
                <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">01</h4>
                <p className="text-sm text-gray-400 mt-1">Internship</p>
              </div>
            </div>
          </motion.div>


          {/* RIGHT SIDE: Focus Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-secondary-purple/20 text-soft-pink rounded-lg text-xl">
                <FaCode />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Full Stack Development</h3>
                <p className="text-sm text-gray-400">
                  Building seamless web experiences using React, Node.js, and modern databases.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-secondary-purple/20 text-light-purple rounded-lg text-xl">
                <FaLaptopCode />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Real-Time Systems & AI</h3>
                <p className="text-sm text-gray-400">
                  Developing live video platforms and integrating AI-driven tools into web apps.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-secondary-purple/20 text-accent-purple rounded-lg text-xl">
                <FaRocket />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Scalability & Performance</h3>
                <p className="text-sm text-gray-400">
                  Focusing on Data Structures and System Fundamentals to build efficient products.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;