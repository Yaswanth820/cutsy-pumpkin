import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import StarsCanvas from './components/StarsCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className='relative z-0 bg-black w-screen h-[calc(100vh-4rem)]'>
        <Hero />
        <StarsCanvas />
      </div>
      <About />
      <Experience />
      <Works />
    </div>
  );
}

export default App;