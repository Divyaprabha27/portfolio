import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Experience from './components/Experience/experience';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default App;