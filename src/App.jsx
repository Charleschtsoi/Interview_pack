import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <a href="#about" className="skip-link">Skip to main content</a>
      <Header />
      <main>
        <Hero />
        <Competencies />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
