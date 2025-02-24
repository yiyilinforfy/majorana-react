import React from 'react';

function ResourcesPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Quantum Computing Educational Resources</h1>
        <p style={styles.subtitle}>
          Explore tutorials, videos, and reading lists to dive into the world of quantum computing. Join us at Majorana.fun to unlock the future of technology!
        </p>

        {/* Tutorials Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Get—Started Websites</h2>
          <div style={styles.tutorialGrid}>
            <div style={styles.tutorialCard}>
              <div style={styles.tutorialIcon}>
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 style={styles.tutorialTitle}>Qiskit Tutorials</h3>
              <p style={styles.tutorialText}>
                Jupyter notebooks from IBM Qiskit, covering quantum computing basics, algorithms, and programming on real quantum hardware.
              </p>
              <a
                href="https://qiskit.org/documentation/tutorials.html"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.tutorialLink}
              >
                Start Learning
              </a>
            </div>
            <div style={styles.tutorialCard}>
              <div style={styles.tutorialIcon}>
                <i className="fas fa-code"></i>
              </div>
              <h3 style={styles.tutorialTitle}>Quantum Katas</h3>
              <p style={styles.tutorialText}>
                Q# programming exercises by Microsoft, ideal for learning quantum computing and programming step-by-step.
              </p>
              <a
                href="https://github.com/Microsoft/QuantumKatas"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.tutorialLink}
              >
                Start Learning
              </a>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Video Tutorials</h2>
          <div style={styles.videoGrid}>
            <div style={styles.videoCard}>
              <iframe style={styles.videoFrame}  src="https://www.youtube.com/embed/oaAjxcIFLtM?list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi" title="Coding with Qiskit 1.x Series Announcement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h3 style={styles.videoTitle}>Coding with Qiskit</h3>
              <p style={styles.videoText}>
                YouTube series by IBM, showing how to write quantum algorithms for beginners and programmers.
              </p>
            </div>
            <div style={styles.videoCard}>
            <iframe style={styles.videoFrame} src="https://www.youtube.com/embed/FgZ-8NFSysA" title="Step inside the Google Quantum AI lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h3 style={styles.videoTitle}>Google Quantum AI Channel</h3>
              <p style={styles.videoText}>
                Official YouTube channel with tutorials on programming quantum computers and latest breakthroughs.
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Recommended Books</h2>
          <div style={styles.bookGrid}>
            <div style={styles.bookCard}>
              <img 
                src="/book1.jpg" 
                alt="Quantum Computation and Quantum Information"
                style={styles.bookImage}
              />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>Quantum Computation and Quantum Information</h3>
                <p style={styles.bookAuthor}>by Michael A. Nielsen & Isaac L. Chuang</p>
                <p style={styles.bookText}>
                  The "bible" of quantum computing, ideal for readers with a math background.
                </p>
                <a
                  href="https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE#overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.bookLink}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div style={styles.bookCard}>
              <img 
                src="/book2.jpg" 
                alt="Introduction to Quantum Computing"
                style={styles.bookImage}
              />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>Introduction to Quantum Computing</h3>
                <p style={styles.bookAuthor}>by Phillip Kaye, Raymond Laflamme & Michele Mosca</p>
                <p style={styles.bookText}>
                  A beginner-friendly book requiring minimal quantum mechanics knowledge.
                </p>
                <a
                  href="https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570004"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.bookLink}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    color: '#333333',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: '100vh',
    padding: '20px',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '40px',
    color: '#666666',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px',
  },
  section: {
    marginBottom: '60px',
  },
  sectionHeading: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#2c3e50',
    textAlign: 'center',
  },
  
  // Tutorial styles
  tutorialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  tutorialCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    textAlign: 'center',
  },
  tutorialIcon: {
    fontSize: '40px',
    color: '#3498db',
    marginBottom: '20px',
  },
  tutorialTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  tutorialText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#666666',
    marginBottom: '20px',
  },
  tutorialLink: {
    color: '#ffffff',
    backgroundColor: '#3498db',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },

  // Video styles
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
  },
  videoCard: {
    background: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  videoFrame: {
    width: '100%',
    height: '350px',
  },
  videoTitle: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '20px',
    color: '#2c3e50',
  },
  videoText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#666666',
    margin: '0 20px 20px',
  },

  // Book styles
  bookGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '30px',
  },
  bookCard: {
    display: 'flex',
    background: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  bookImage: {
    width: '200px',
    objectFit: 'cover',
  },
  bookInfo: {
    padding: '20px',
    flex: 1,
  },
  bookTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  bookAuthor: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  bookText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#666666',
    marginBottom: '20px',
  },
  bookLink: {
    color: '#ffffff',
    backgroundColor: '#27ae60',
    padding: '8px 16px',
    borderRadius: '20px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
};

export default ResourcesPage;