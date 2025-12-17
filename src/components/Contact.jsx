import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaBriefcase, 
  FaHandshake, 
  FaGraduationCap 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); 

  const apiKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
  const apiUrl = import.meta.env.VITE_WEB3_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Prepare the data for Web3Forms
    const object = {
      ...formData,
      access_key: apiKey
    };
    const json = JSON.stringify(object);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const res = await response.json();

      if (res.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error("Error:", res);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-8 bg-primary-dark relative overflow-hidden">
      
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
          
          {/* LEFT SIDE: Opportunities & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Open to Opportunities
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I am currently exploring new roles and creative challenges. 
                My inbox is always open for:
              </p>

              {/* Opportunities List */}
              <div className="space-y-6 mb-12">
                
                {/* Job Roles */}
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-3 rounded-lg bg-secondary-purple/20 text-soft-pink border border-secondary-purple/30 group-hover:bg-secondary-purple/40 transition-colors">
                    <FaBriefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Job Roles</h4>
                    <p className="text-gray-400 text-sm">Full-time & Contract positions</p>
                  </div>
                </div>

                {/* Collaboration */}
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-3 rounded-lg bg-accent-purple/20 text-accent-purple border border-accent-purple/30 group-hover:bg-accent-purple/40 transition-colors">
                    <FaHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Project Collaboration</h4>
                    <p className="text-gray-400 text-sm">Open Source & Tech Partnerships</p>
                  </div>
                </div>

                {/* Internships */}
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-3 rounded-lg bg-light-purple/20 text-light-purple border border-light-purple/30 group-hover:bg-light-purple/40 transition-colors">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Internships</h4>
                    <p className="text-gray-400 text-sm">Summer & Fall Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Info (Bottom) */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-soft-pink" size={18} />
                <a href="mailto:vanshikakamatkar08@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  vanshikakamatkar08@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-soft-pink" size={18} />
                <span className="text-gray-300">Nagpur, India</span>
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

              {/* Hidden input for access key is handled via state/fetch now, but can be kept as fallback if using native form submission */}
              <input type="hidden" name="access_key" value={apiKey} />

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
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-primary-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-soft-pink focus:ring-1 focus:ring-soft-pink transition-all appearance-none"
                >
                   <option value="" disabled className="bg-primary-dark text-gray-500">Select a topic</option>
                   <option value="Job Opportunity" className="bg-primary-dark">Job Opportunity</option>
                   <option value="Collaboration" className="bg-primary-dark">Project Collaboration</option>
                   <option value="Internship" className="bg-primary-dark">Internship Inquiry</option>
                   <option value="Other" className="bg-primary-dark">Other</option>
                </select>
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
                  <span className="text-green-200">Message Sent!</span>
                ) : status === 'error' ? (
                  <span className="text-red-200">Failed. Try again.</span>
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
        <div className="mt-12 pt-6 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Vanshika Kamatkar. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind & Framer Motion</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;