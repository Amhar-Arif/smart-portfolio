import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "Python", "SQL", "C/C++", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["NestJS", "Node.js", "Express.js", ".NET Core", "React", "Angular", "TypeORM", "Mongoose", "Spring Boot"]
    },
    {
      title: "Databases & Messaging",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka"]
    },
    {
      title: "APIs & Architecture",
      skills: ["RESTful APIs", "GraphQL", "WebSockets", "Microservices", "Event-Driven", "CQRS"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span className="gradient-text">Technical Arsenal</span></h2>
        
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div variants={itemVariants} key={idx} className="glass-panel">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>
                {category.title}
              </h3>
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    }
                  }
                }}
              >
                {category.skills.map(skill => (
                  <motion.span variants={tagVariants} key={skill} className="skill-tag">{skill}</motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
