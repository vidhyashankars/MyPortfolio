import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeAnimation from './components/WelcomeAnimation';
import EasterEggs from './components/EasterEggs';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <WelcomeAnimation />
      <EasterEggs />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;