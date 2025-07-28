import React from "react";

function ResourcesPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Quantum Computing Educational Resources</h1>
        <p style={styles.subtitle}>
          Explore tutorials, videos, and recommended resources to dive into the world of quantum computing. Join us at Majorana Lab to unlock the future of technology!
        </p>
        <div style={styles.scrollIndicator}>
          <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
        </div>
      </div>

      <div style={styles.content}>
        {/* Universities Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Leading Universities</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Harvard University</h3>
                <p style={styles.resourceText}>
                  Quantum Optics, Quantum Communication, Quantum Materials, and Quantum Sensing.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://quantum.harvard.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>University of Cambridge</h3>
                <p style={styles.resourceText}>
                  Quantum Algorithms and Complexity, Quantum Networks, Quantum Measurement, and Quantum Cryptography.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://www.cam.ac.uk/topics/quantum-computing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>University of Oxford</h3>
                <p style={styles.resourceText}>
                  Quantum Computing Hardware, Quantum Information Processing, Quantum Error Correction, and Quantum Cryptography.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://www.physics.ox.ac.uk/research/theme/quantum-information-and-computation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Princeton University</h3>
                <p style={styles.resourceText}>
                  Quantum Materials, Topological Quantum Computing, Quantum Theory, and Experimental Quantum Physics.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://quantum.princeton.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Massachusetts Institute of Technology</h3>
                <p style={styles.resourceText}>
                  Quantum Algorithms, Quantum Error Correction, Quantum Materials, and Quantum Hardware Development.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://cqe.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Organizations and Companies</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Microsoft Quantum Team</h3>
                <p style={styles.resourceText}>
                  Topological Quantum Computing, Quantum Programming Languages, Quantum Tools Development, and Quantum Cryptography.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://azure.microsoft.com/en-us/solutions/quantum-computing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Google Quantum AI</h3>
                <p style={styles.resourceText}>
                  Quantum Supremacy, Quantum Simulations, Quantum Error Correction, and Quantum Machine Learning.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://quantumai.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>IBM Quantum</h3>
                <p style={styles.resourceText}>
                  Quantum Hardware Development, Quantum Cloud Computing, Quantum Algorithms, and Quantum Software.
                </p>
              </div>
              <div style={styles.cardFooter}>
                <a
                  href="https://www.ibm.com/quantum-computing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorials Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Video Tutorials</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <iframe
                style={styles.videoFrame}
                src="https://www.youtube.com/embed/wSHmygPQukQ"
                title="Majorana 1 Explained: The Path to a Million Qubits"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Majorana 1 Explained</h3>
                <p style={styles.resourceText}>
                  A video explaining Microsoft's path to a million qubits with Majorana-based quantum computing.
                </p>
              </div>
            </div>
            <div style={styles.resourceCard}>
              <iframe
                style={styles.videoFrame}
                src="https://www.youtube.com/embed/oaAjxcIFLtM?list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi"
                title="Coding with Qiskit 1.x Series Announcement"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div style={styles.cardContent}>
                <h3 style={styles.resourceTitle}>Coding with Qiskit</h3>
                <p style={styles.resourceText}>
                  YouTube series by IBM, showing how to write quantum algorithms for beginners and programmers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recommended Books</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.bookCard}>
              <img
                src="/book1.jpg"
                alt="Quantum Computation and Quantum Information"
                style={styles.bookImage}
              />
              <div style={styles.bookContent}>
                <h3 style={styles.resourceTitle}>
                  Quantum Computation and Quantum Information
                </h3>
                <p style={styles.resourceAuthor}>
                  by Michael A. Nielsen & Isaac L. Chuang
                </p>
                <p style={styles.resourceText}>
                  The "bible" of quantum computing, ideal for readers with a math background.
                </p>
                <div style={styles.cardFooter}>
                  <a
                    href="https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div style={styles.bookCard}>
              <img
                src="/book2.jpg"
                alt="Introduction to Quantum Computing"
                style={styles.bookImage}
              />
              <div style={styles.bookContent}>
                <h3 style={styles.resourceTitle}>
                  Introduction to Quantum Computing
                </h3>
                <p style={styles.resourceAuthor}>
                  by Phillip Kaye, Raymond Laflamme & Michele Mosca
                </p>
                <p style={styles.resourceText}>
                  A beginner-friendly book requiring minimal quantum mechanics knowledge.
                </p>
                <div style={styles.cardFooter}>
                  <a
                    href="https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570004"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
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
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url("/background/resource.jpeg")',
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
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#2a5bd7',
    marginBottom: '30px',
    textAlign: 'center',
  },
  resourceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '60px',
    margin: '20px 0',
  },
  resourceCard: {
    background: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardFooter: {
    // marginTop: '20px',
  },
  resourceTitle: {
    fontSize: '1.2em',
    color: '#2a5bd7',
    marginBottom: '10px',
  },
  resourceText: {
    color: '#666666',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  resourceLink: {
    display: 'inline-block',
    padding: '8px 16px',
    background: '#2a5bd7',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#1e429f',
    },
  },
  videoFrame: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  bookCard: {
    display: 'flex',
    background: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    height: '100%',
  },
  bookImage: {
    width: '180px', // Increased from 120px
    objectFit: 'cover',
  },
  bookContent: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  resourceAuthor: {
    color: '#888888',
    fontSize: '0.9em',
    marginBottom: '10px',
  },
};

export default ResourcesPage;