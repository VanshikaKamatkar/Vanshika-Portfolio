import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      <About />

      {/* Experience Section*/}
      <Experience />

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* Contact (Form & Footer) */}
      <Contact />
    </div>
  );
}

export default App;