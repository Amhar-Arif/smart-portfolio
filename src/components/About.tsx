import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span className="gradient-text">About Me</span></h2>
        
        <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I am a passionate Associate Software Engineer and Full-Stack Developer with a specialization in backend engineering and cloud-native microservices. I thrive on building scalable, fault-tolerant applications using modern technologies such as <strong>AWS, NestJS, Node.js, React, and Angular</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            My engineering journey is defined by solving complex problems—whether it's designing event-driven and real-time systems using <strong>Kafka and WebSockets</strong>, eliminating database bottlenecks, or significantly reducing deployment times by decomposing monoliths into nimble microservices.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Beyond code, I value resilience, discipline, and teamwork. Serving as the University Boxing Captain has shaped my leadership approach, translating directly to how I mentor interns and collaborate cross-functionally to deliver robust software solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
