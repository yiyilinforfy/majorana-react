function IntroPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Understanding Quantum Computing & Majorana Fermions</h1>
        <p style={styles.subtitle}>Exploring the fascinating intersection of quantum physics and exotic particles</p>
        <div style={styles.scrollIndicator}>
          <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What are Majorana Fermions?</h2>
          <p style={styles.text}>
            Majorana fermions are exotic particles that are their own antiparticles, first theorized by Ettore Majorana in 1937. 
            Unlike regular fermions (like electrons), Majorana fermions have the unique property of being identical to their own 
            antiparticles, making them extremely interesting for quantum computing applications.
          </p>
          <div style={styles.resourceBox}>
            <h4 style={styles.resourceTitle}>Key Properties:</h4>
            <ul style={styles.list}>
              <li>Self-antiparticle nature</li>
              <li>Zero charge</li>
              <li>Follows non-Abelian statistics</li>
              <li>Can exist as quasiparticles in certain materials</li>
            </ul>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Quantum Computing Basics</h2>
          <p style={styles.text}>
            Quantum computing leverages the principles of quantum mechanics to perform computations. Unlike classical computers 
            that use bits (0 or 1), quantum computers use quantum bits or qubits that can exist in multiple states simultaneously 
            through superposition.
          </p>
          <div style={styles.resourceBox}>
            <h4 style={styles.resourceTitle}>Fundamental Concepts:</h4>
            <ul style={styles.list}>
              <li>Superposition</li>
              <li>Quantum Entanglement</li>
              <li>Quantum Gates</li>
              <li>Quantum Algorithms</li>
            </ul>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>The Connection</h2>
          <p style={styles.text}>
            Majorana fermions are particularly exciting for quantum computing because they could potentially be used to build 
            topological quantum computers. These would be more stable and less prone to errors than current quantum computing 
            approaches, as they would be protected by topological properties.
          </p>
        </div>

        <div style={styles.resourceSection}>
          <h2 style={styles.sectionTitle}>Further Reading</h2>
          <div style={styles.resourceGrid}>
            <a href="https://arxiv.org/abs/1711.00011" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
              <div style={styles.resourceCard}>
                <h4>Majorana Fermions in Topological Quantum Computation</h4>
                <p>Technical paper on arXiv</p>
              </div>
            </a>
            <a href="https://www.nature.com/articles/s41586-019-1348-3" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
              <div style={styles.resourceCard}>
                <h4>Quantum Computing with Majorana Modes</h4>
                <p>Nature Journal Publication</p>
              </div>
            </a>
            <a href="https://science.nasa.gov/quantum-computing" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
              <div style={styles.resourceCard}>
                <h4>NASA&lsquo;s Quantum Computing Guide</h4>
                <p>Beginner-friendly introduction</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: 'center',
    padding: '120px 20px 80px',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url("/background/introBackground.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
  },
  mainTitle: {
    fontSize: '3.2em',
    color: '#ffffff',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '1.4em',
    color: '#e0e7ff',
    maxWidth: '800px',
    margin: '0 auto',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'bounce 2s infinite',
  },
  scrollArrow: {
    color: '#ffffff',
    fontSize: '24px',
    opacity: '0.8',
  },
  content: {
    background: 'linear-gradient(180deg, #1a1f2e 0%, #ffffff 300px)',
    padding: '60px 20px',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto 50px',
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#2a5bd7',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '20px',
  },
  resourceBox: {
    background: '#f5f8ff',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    border: '1px solid #e0e7ff',
  },
  resourceTitle: {
    color: '#2a5bd7',
    marginBottom: '10px',
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.6',
    color: '#333333',
  },
  resourceSection: {
    maxWidth: '1200px',
    margin: '60px auto 0',
  },
  resourceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  resourceLink: {
    textDecoration: 'none',
  },
  resourceCard: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    color: '#67C23A',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '1px solid #e0e7ff',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    }
  },
};

export default IntroPage;