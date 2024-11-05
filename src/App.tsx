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
      <div id='home'>
        <Header />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;