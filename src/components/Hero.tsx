const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="animate-fade-in">
          <h2 className="gradient-text font-medium" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Hello, I'm
          </h2>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Amhar Arif
          </h1>
          <h3 className="text-muted" style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Associate Software Engineer
          </h3>
          
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Passionate Full-Stack Developer specializing in backend engineering, cloud-native microservices, and event-driven architectures.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/Amhar-Arif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/amhar-arif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>LinkedIn</span>
            </a>
            <a href="mailto:amhar.arif1@gmail.com" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>Email</span>
            </a>
            <a href="https://medium.com/@amhararif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>Medium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
