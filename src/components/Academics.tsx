import { motion } from 'framer-motion';

const Academics = () => {
  return (
    <section id="academics">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span className="gradient-text">Academics & Leadership</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>🎓 Education</h3>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>BSc (Hons) in Software Engineering</h4>
              <p style={{ color: 'var(--accent-purple)' }}>University of Kelaniya (2022 – Feb 2026)</p>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Relevant Coursework: Data Science, Web App Development, Distributed Systems</p>
            </div>

            <div>
              <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>G.C.E. Advanced Level – Physical Science</h4>
              <p style={{ color: 'var(--accent-purple)' }}>Kekunagolla National School (2018 – 2020)</p>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Combined Mathematics (A), Chemistry (B), Physics (B)</p>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>🏆 Leadership & Certifications</h3>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Captain – University Boxing Team</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Co-founded and captained the team. 2nd Runner-Up at Sri Lanka Novices Boxing Championship (2024, 2025).</p>
            </div>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Frontend Developer (React) – HackerRank</li>
              <li style={{ marginBottom: '0.5rem' }}>SQL (Advanced) – HackerRank</li>
              <li style={{ marginBottom: '0.5rem' }}>Supervised Machine Learning – Deeplearnng.ai</li>
              <li style={{ marginBottom: '0.5rem' }}>Python for Data Science, AI & Dev – IBM</li>
              <li>Programming with JavaScript – Meta</li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Academics;
