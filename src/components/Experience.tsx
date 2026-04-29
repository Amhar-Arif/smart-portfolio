import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Fortude, Borella, Sri Lanka",
      period: "Apr 2025 – Mar 2026",
      achievements: [
        "Implemented an event-driven logging pipeline using Apache Kafka and MongoDB to offload synchronous PostgreSQL writes.",
        "Developed complex Mongoose aggregation pipelines optimizing query performance.",
        "Contributed to an 80% reduction in deployment time by decomposition into microservices.",
        "Executed version upgrades (NestJS v8 to v10, Node.js 20).",
        "Mentored engineering interns and supported talent acquisition at IIT Career Fair."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Fortude, Borella, Sri Lanka",
      period: "Oct 2024 – Mar 2025",
      achievements: [
        "Standardized application logging reducing AWS log ingestion costs by 30%.",
        "Built a high-throughput IoT data ingestion pipeline using Kafka and Redis.",
        "Developed a cloud-ready microservice system using NestJS and Angular (GraphQL Federation).",
        "Worked with OAuth 2.0, JWT authentication, and Kubernetes via Minikube."
      ]
    }
  ];

  return (
    <section id="experience">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span className="gradient-text">Experience</span></h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item glass-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{exp.role}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 500 }}>{exp.company}</span>
                <span className="text-muted">{exp.period}</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                {exp.achievements.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
