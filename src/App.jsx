import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted text-sm bg-secondary/30">
        <p>© {new Date().getFullYear()} Sumit Tripathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
