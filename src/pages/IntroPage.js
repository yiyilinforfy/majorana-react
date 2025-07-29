import React from "react";
import { motion } from "framer-motion";

function IntroPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.mainTitle}>Understanding Quantum Computing & Majorana Fermions</h1>
          <p style={styles.subtitle}>Exploring the fascinating intersection of quantum physics and exotic particles</p>
          {/* <div style={styles.scrollIndicator}>
            <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
          </div> */}
        </motion.div>
      </div>

      <div style={styles.content}>
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={styles.sectionTitle}>What are Majorana Fermions?</h2>
          <p style={styles.text}>
            Majorana fermions are exotic particles that are their own antiparticles, first theorized by Ettore Majorana in 1937. 
            Unlike regular fermions (like electrons), Majorana fermions have the unique property of being identical to their own 
            antiparticles, making them extremely interesting for quantum computing applications.
          </p>
          <motion.div
            style={styles.resourceBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 style={styles.resourceTitle}>Key Properties:</h4>
            <ul style={styles.list}>
              <li>Self-antiparticle nature</li>
              <li>Zero charge</li>
              <li>Follows non-Abelian statistics</li>
              <li>Can exist as quasiparticles in certain materials</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 style={styles.sectionTitle}>Quantum Computing Basics</h2>
          <p style={styles.text}>
            Quantum computing leverages the principles of quantum mechanics to perform computations. Unlike classical computers 
            that use bits (0 or 1), quantum computers use quantum bits or qubits that can exist in multiple states simultaneously 
            through superposition.
          </p>
          <motion.div
            style={styles.resourceBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 style={styles.resourceTitle}>Fundamental Concepts:</h4>
            <ul style={styles.list}>
              <li>Superposition</li>
              <li>Quantum Entanglement</li>
              <li>Quantum Gates</li>
              <li>Quantum Algorithms</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>The Connection</h2>
          <p style={styles.text}>
            Majorana fermions are particularly exciting for quantum computing because they could potentially be used to build 
            topological quantum computers. These would be more stable and less prone to errors than current quantum computing 
            approaches, as they would be protected by topological properties.
          </p>
        </motion.div>

        <motion.div
          style={styles.resourceSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 style={styles.sectionTitle}>Further Reading</h2>
          <div style={styles.resourceGrid}>
            {[
              {
                href: "https://arxiv.org/abs/1711.00011",
                title: "Majorana Fermions in Topological Quantum Computation",
                desc: "Technical paper on arXiv",
              },
              {
                href: "https://www.nature.com/articles/s41586-019-1348-3",
                title: "Quantum Computing with Majorana Modes",
                desc: "Nature Journal Publication",
              },
              {
                href: "https://science.nasa.gov/quantum-computing",
                title: "NASA's Quantum Computing Guide",
                desc: "Beginner-friendly introduction",
              },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
              >
                <div style={styles.resourceCard}>
                  <h4>{resource.title}</h4>
                  <p>{resource.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/background/introBackground.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.5s ease-in-out", // Smooth background transition
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "clamp(2rem, 10vw, 4rem) clamp(1rem, 5vw, 1.5rem)", // Responsive padding
    // backgroundImage: "url('/background/introBackground.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "clamp(40vh, 50vh, 60vh)", // Responsive hero height
  },
  mainTitle: {
    fontSize: "clamp(1.8rem, 5vw, 3rem)", // Responsive font size
    fontWeight: 700,
    marginBottom: "clamp(0.5rem, 2vw, 1rem)", // Responsive margin
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2.5vw, 1.3rem)", // Responsive font size
    color: "#ffffff",
    opacity: 0.9,
    maxWidth: "clamp(500px, 80vw, 800px)", // Responsive max width
    margin: "0 auto",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "clamp(1rem, 5vh, 2.5rem)", // Responsive bottom position
    left: "50%",
    transform: "translateX(-50%)",
    animation: "bounce 2s infinite",
  },
  scrollArrow: {
    color: "#ffffff",
    fontSize: "clamp(1rem, 3vw, 1.5rem)", // Responsive arrow size
    opacity: 0.8,
  },
  content: {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 150px)", // Smooth transition to white
    padding: "clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 5vw, 1.5rem)", // Responsive padding
    transition: "background 0.5s ease-in-out", // Smooth background transition
  },
  section: {
    maxWidth: "clamp(800px, 90vw, 1000px)", // Responsive max width
    margin: "0 auto clamp(1rem, 3vw, 1.5rem)", // Responsive margin
    background: "#ffffff",
    padding: "clamp(1rem, 3vw, 1.5rem)", // Responsive padding
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", // Responsive font size
    fontWeight: 600,
    color: "#2c3e50",
    marginBottom: "clamp(0.6rem, 2vw, 0.8rem)", // Responsive margin
  },
  text: {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)", // Responsive font size
    lineHeight: 1.6,
    color: "#4a5568",
    marginBottom: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  resourceBox: {
    background: "#f5f8ff",
    padding: "clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    borderRadius: "8px",
    marginTop: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
    border: "1px solid #e0e7ff",
  },
  resourceTitle: {
    color: "#1976d2",
    marginBottom: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive margin
    fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font size
  },
  list: {
    paddingLeft: "clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    lineHeight: 1.6,
    color: "#4a5568",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
  },
  resourceSection: {
    maxWidth: "clamp(800px, 90vw, 1000px)", // Responsive max width
    margin: "clamp(1rem, 3vw, 1.5rem) auto 0", // Responsive margin
  },
  resourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))", // Responsive grid columns
    gap: "clamp(0.8rem, 2vw, 1rem)", // Responsive gap
    marginTop: "clamp(1rem, 3vw, 1.5rem)", // Responsive margin
  },
  resourceLink: {
    textDecoration: "none",
  },
  resourceCard: {
    background: "#ffffff",
    padding: "clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    borderRadius: "8px",
    color: "#1976d2",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    border: "1px solid #e0e7ff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    },
  },
};

export default IntroPage;