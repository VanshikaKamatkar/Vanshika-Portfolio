import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vanshika-kamatkar-17556a28a/' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/VanshikaKamatkar' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[65%] max-w-5xl transition-all duration-300`}>
      
      {/* UPDATED BACKGROUNDS:
         - 'backdrop-blur-md': Keeps the glassy blur effect.
         - Scrolled ? 'bg-primary-dark/30' : 'bg-transparent'
      */}
      <div className={`
        flex items-center justify-between px-6 py-3 md:py-4 rounded-full 
        backdrop-blur-md transition-colors duration-300
        ${scrolled ? 'bg-primary-dark/30 shadow-lg' : 'bg-transparent'}
      `}>
        
        {/* Left Side: Navigation Links */}
        <div className="flex-1 flex items-center justify-center md:justify-start gap-6 md:gap-8">
          
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink(item.id)}
              className="relative cursor-pointer group"
            >
              <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${activeLink === item.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                {item.text}
              </span>
              
              {/* Glowing Underline */}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-soft-pink shadow-[0_0_8px_rgba(224,177,203,0.8)] transition-all duration-300 ease-out
                ${activeLink === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </Link>
          ))}

          {/* "Connect With Me" Dropdown */}
          <div 
            className="relative hidden md:block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm md:text-base font-medium text-gray-300 hover:text-white transition-colors">
              Connect With Me <FiChevronDown />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-4 w-48 bg-primary-dark/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden flex flex-col p-2 animate-fade-in border border-white/5">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {social.icon} {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Resume Button */}
        <div>
          <a
            href="/Vanshika Kamatkar Resume (24).pdf"             
            download="Vanshika_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary-purple to-accent-purple text-white font-semibold text-sm shadow-lg hover:shadow-soft-pink/20 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;