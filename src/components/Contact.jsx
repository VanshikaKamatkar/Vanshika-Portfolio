import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // SIMULATE SENDING (Replace this with EmailJS or Formspree later)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000); // Reset after 3 seconds
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-primary-dark relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-secondary-purple/20 rounded-full blur-[128px]" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-soft-pink/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-widest uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-soft-pink">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {/* Email Item */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-secondary-purple/20 transition-colors text-soft-pink">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Email Me</h4>
                  <a href="mailto:your.email@example.com" className="text-xl text-white font-semibold group-hover:text-soft-pink transition-colors">
                    vanshikakamatkar08@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-soft-pink">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Location</h4>
                  <p className="text-xl text-white font-semibold">
                    Nagpur, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-soft-pink focus:ring-1 focus:ring-soft-pink transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-soft-pink focus:ring-1 focus:ring-soft-pink transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-primary-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-soft-pink focus:ring-1 focus:ring-soft-pink transition-all"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-soft-pink focus:ring-1 focus:ring-soft-pink transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-secondary-purple to-accent-purple text-white font-bold text-lg shadow-lg hover:shadow-soft-pink/20 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message <FaPaperPlane size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vanshika Kamatkar. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind & Framer Motion</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;