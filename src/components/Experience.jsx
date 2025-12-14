import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-primary-dark flex justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animates only once when scrolled into view
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors group"
      >
        
        {/* Decorative Glow behind the card */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-purple/20 to-soft-pink/20 rounded-3xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Label Badge */}
        <div className="absolute -top-4 left-6 md:left-10 px-6 py-2 bg-secondary-purple text-sm font-bold text-white rounded-full uppercase tracking-wider shadow-xl border border-white/20">
          Experience
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-6">
          
          {/* Icon Box */}
          <div className="hidden md:flex flex-shrink-0 p-4 bg-gradient-to-br from-light-purple to-soft-pink rounded-2xl text-primary-dark shadow-lg">
            <HiBriefcase size={32} />
          </div>
          
          <div className="space-y-6 w-full">
            {/* Header: Role & Company */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold text-white">Web Development Intern</h3>
                <p className="text-xl text-soft-pink font-medium mt-1">Vistaar Ecosys Pvt. Ltd.</p>
              </div>
              <span className="inline-block md:text-right text-sm text-gray-400 font-mono border border-white/10 px-4 py-2 rounded-lg bg-primary-dark/50">
                Aug 2025 – Nov 2025
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-accent-purple text-base md:text-lg">
              <li className="pl-2">
                Contributed to <span className="text-white font-semibold">Zipexams</span>, a full-stack online exam platform.
              </li>
              <li className="pl-2">
                Designed Community Module (frontend + backend) for Q&A.
              </li>
              <li className="pl-2">
                Integrated <span className="text-white font-semibold">AI auto-answer</span> generator for forums.
              </li>
              <li className="pl-2">
                Agile workflow using Git, Postman & Version Control.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;