import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="gradient-text font-medium" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Hello, I'm
          </motion.h2>
          <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Amhar Arif
          </motion.h1>
          <motion.h3 variants={itemVariants} className="text-muted" style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Associate Software Engineer
          </motion.h3>
          
          <motion.p variants={itemVariants} style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Passionate Full-Stack Developer specializing in backend engineering, cloud-native microservices, and event-driven architectures.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem' }}>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/Amhar-Arif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>GitHub</span>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/amhar-arif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>LinkedIn</span>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="mailto:amhar.arif1@gmail.com" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>Email</span>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://medium.com/@amhararif" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}>
              <span style={{ fontWeight: 'bold' }}>Medium</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
