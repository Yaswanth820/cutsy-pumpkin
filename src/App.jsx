import './App.css';
import Nav from './components/Nav';
import StarsCanvas from './components/StarsCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className='relative z-0 bg-black w-screen h-screen'>
        <Hero />
        <StarsCanvas />
      </div>
      <About />
      <Experience />
      <Works />
      <div className='relative z-0 bg-black px-4 py-8'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
}

export default App;