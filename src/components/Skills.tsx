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

  return (
    <section id="skills">
      <div className="container animate-fade-in delay-200">
        <h2 className="section-title"><span className="gradient-text">Technical Arsenal</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
