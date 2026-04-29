import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span className="gradient-text">Featured Projects</span></h2>
        
        <div className="project-grid">
          <motion.div
            className="glass-panel"
            style={{ position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Wealthy</h3>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>Personal Finance Management System</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Feb 2026 – Present (Ongoing)</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="glass-panel" style={{ padding: '0.5rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>GitHub</motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="glass-panel" style={{ padding: '0.5rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>Live</motion.a>
              </div>
            </div>
            
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              A cloud-native platform helping users track income, expenses, and investments. Designed with a microservices architecture to support scalability and high-volume concurrent users with real-time insights.
            </p>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Expense tracking, asset & liability management, financial predictions.</li>
              <li style={{ marginBottom: '0.5rem' }}>High performance target handling caching via Redis (under 3s response times).</li>
              <li>Secure authentication using AWS Cognito with JWT-based authorization.</li>
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["NestJS", "Angular/React", "GraphQL", "AWS Lambda", "AWS RDS", "Redis", "Cognito"].map(tech => (
                <span key={tech} className="skill-tag" style={{ border: '1px solid rgba(139, 92, 246, 0.3)', color: '#a78bfa', background: 'rgba(139, 92, 246, 0.1)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
