import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Academics from './components/Academics';

function App() {
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-panel, .section-title').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">
            <span className="gradient-text">A.A</span>
          </div>
          <div className="nav-links">
            <a href="#home" onClick={(e) => scrollTo('home', e)} className="nav-link">Home</a>
            <a href="#about" onClick={(e) => scrollTo('about', e)} className="nav-link">About</a>
            <a href="#skills" onClick={(e) => scrollTo('skills', e)} className="nav-link">Skills</a>
            <a href="#experience" onClick={(e) => scrollTo('experience', e)} className="nav-link">Experience</a>
            <a href="#projects" onClick={(e) => scrollTo('projects', e)} className="nav-link">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Academics />
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
        <p className="text-muted">© {new Date().getFullYear()} Amhar Arif. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
