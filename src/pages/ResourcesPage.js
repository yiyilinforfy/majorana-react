import React from "react";
import Footer from "../components/Footer";

function ResourcesPage() {
  return (
    <div>
          <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Quantum Computing Educational Resources</h1>
        <p style={styles.subtitle}>
          Explore tutorials, videos, and recommended resources to dive into the world of quantum computing. Join us at Majorana.fun to unlock the future of technology!
        </p>

        {/* Universities Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Leading Universities</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>Harvard University</h3>
              <p style={styles.resourceText}>
                Quantum Optics, Quantum Communication, Quantum Materials, and Quantum Sensing.
              </p>
              <a
                href="https://quantum.harvard.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>University of Cambridge</h3>
              <p style={styles.resourceText}>
                Quantum Algorithms and Complexity, Quantum Networks, Quantum Measurement, and Quantum Cryptography.
              </p>
              <a
                href="https://www.cam.ac.uk/topics/quantum-computing"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>University of Oxford</h3>
              <p style={styles.resourceText}>
                Quantum Computing Hardware, Quantum Information Processing, Quantum Error Correction, and Quantum Cryptography.
              </p>
              <a
                href="https://www.physics.ox.ac.uk/research/theme/quantum-information-and-computation"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>Princeton University</h3>
              <p style={styles.resourceText}>
                Quantum Materials, Topological Quantum Computing, Quantum Theory, and Experimental Quantum Physics.
              </p>
              <a
                href="https://quantum.princeton.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>Massachusetts Institute of Technology</h3>
              <p style={styles.resourceText}>
                Quantum Algorithms, Quantum Error Correction, Quantum Materials, and Quantum Hardware Development.
              </p>
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
        </section>

        {/* Organizations Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Organizations and Companies</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>Microsoft Quantum Team</h3>
              <p style={styles.resourceText}>
                Topological Quantum Computing, Quantum Programming Languages, Quantum Tools Development, and Quantum Cryptography.
              </p>
              <a
                href="https://azure.microsoft.com/en-us/solutions/quantum-computing/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>Google Quantum AI</h3>
              <p style={styles.resourceText}>
                Quantum Supremacy, Quantum Simulations, Quantum Error Correction, and Quantum Machine Learning.
              </p>
              <a
                href="https://quantumai.google/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Visit Website
              </a>
            </div>
            <div style={styles.resourceCard}>
              <h3 style={styles.resourceTitle}>IBM Quantum</h3>
              <p style={styles.resourceText}>
                Quantum Hardware Development, Quantum Cloud Computing, Quantum Algorithms, and Quantum Software.
              </p>
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
        </section>

        {/* Video Tutorials Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Video Tutorials</h2>
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
              <h3 style={styles.resourceTitle}>Majorana 1 Explained</h3>
              <p style={styles.resourceText}>
                A video explaining Microsoft's path to a million qubits with Majorana-based quantum computing.
              </p>
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
              <h3 style={styles.resourceTitle}>Coding with Qiskit</h3>
              <p style={styles.resourceText}>
                YouTube series by IBM, showing how to write quantum algorithms for beginners and programmers.
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Recommended Books</h2>
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
        </section>
      </div>
    </div>
    <Footer />
  </div>

  );
}

const styles = {
  container: {
    color: "#333",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)", // 浅色渐变背景
    position: "relative",
  },
  content: {
    // maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#2a5bd7",
    letterSpacing: "1px",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(42, 91, 215, 0.2)",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "60px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 60px",
  },
  section: {
    marginBottom: "80px",
  },
  sectionHeading: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#2a5bd7",
    marginBottom: "40px",
    textAlign: "center",
    position: "relative",
    "&::after": {
      content: '""',
      display: "block",
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #2a5bd7, #00d4ff)",
      margin: "10px auto",
      borderRadius: "2px",
    },
  },
  resourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    justifyContent: "center",
  },
  resourceCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "300px",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
    },
  },
  bookCard: {
    display: "flex",
    flexDirection: "row",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
    },
  },
  resourceTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  resourceText: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#666",
    marginBottom: "20px",
    flexGrow: 1,
  },
  resourceLink: {
    color: "#fff",
    background: "linear-gradient(45deg, #2a5bd7, #00d4ff)",
    padding: "8px 16px",
    textAlign: "center",
    borderRadius: "20px",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.3s ease, transform 0.3s ease",
    fontWeight: "600",
    fontSize: "14px",
    "&:hover": {
      background: "linear-gradient(45deg, #1e429f, #00b4d8)",
      transform: "translateY(-2px)",
    },
  },
  videoFrame: {
    width: "100%",
    height: "330px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "15px",
  },
  bookImage: {
    width: "180px",
    height: "270px",
    objectFit: "cover",
    borderRadius: "8px 0 0 8px",
  },
  bookContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  resourceAuthor: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "10px",
    fontStyle: "italic",
  },
};

export default ResourcesPage;