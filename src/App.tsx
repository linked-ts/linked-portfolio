import React from 'react'
import './App.css'
import Header from './component/Header/Header';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import SkillsSection from './component/Skills/SkillsSection';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <SkillsSection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;