import React from "react";
import { motion } from "framer-motion";

function ResourcesPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.mainTitle}>Quantum Computing Educational Resources</h1>
          <p style={styles.subtitle}>
            Explore tutorials, videos, and recommended resources to dive into the world of quantum computing. Join us at Majorana Lab to unlock the future of technology!
          </p>
          {/* <div style={styles.scrollIndicator}>
            <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
          </div> */}
        </motion.div>
      </div>

      <div style={styles.content}>
        {/* Universities Section */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={styles.sectionTitle}>Leading Universities</h2>
          <div style={styles.resourceGrid}>
            {[
              {
                title: "Harvard University",
                text: "Quantum Optics, Quantum Communication, Quantum Materials, and Quantum Sensing.",
                href: "https://quantum.harvard.edu/",
              },
              {
                title: "University of Cambridge",
                text: "Quantum Algorithms and Complexity, Quantum Networks, Quantum Measurement, and Quantum Cryptography.",
                href: "https://www.cam.ac.uk/topics/quantum-computing",
              },
              {
                title: "University of Oxford",
                text: "Quantum Computing Hardware, Quantum Information Processing, Quantum Error Correction, and Quantum Cryptography.",
                href: "https://www.physics.ox.ac.uk/research/theme/quantum-information-and-computation",
              },
              {
                title: "Princeton University",
                text: "Quantum Materials, Topological Quantum Computing, Quantum Theory, and Experimental Quantum Physics.",
                href: "https://quantum.princeton.edu/",
              },
              {
                title: "Massachusetts Institute of Technology",
                text: "Quantum Algorithms, Quantum Error Correction, Quantum Materials, and Quantum Hardware Development.",
                href: "https://cqe.mit.edu/",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                style={styles.resourceCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}
              >
                <div style={styles.cardContent}>
                  <h3 style={styles.resourceTitle}>{resource.title}</h3>
                  <p style={styles.resourceText}>{resource.text}</p>
                </div>
                <div style={styles.cardFooter}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizations Section */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 style={styles.sectionTitle}>Organizations and Companies</h2>
          <div style={styles.resourceGrid}>
            {[
              {
                title: "Microsoft Quantum Team",
                text: "Topological Quantum Computing, Quantum Programming Languages, Quantum Tools Development, and Quantum Cryptography.",
                href: "https://azure.microsoft.com/en-us/solutions/quantum-computing/",
              },
              {
                title: "Google Quantum AI",
                text: "Quantum Supremacy, Quantum Simulations, Quantum Error Correction, and Quantum Machine Learning.",
                href: "https://quantumai.google/",
              },
              {
                title: "IBM Quantum",
                text: "Quantum Hardware Development, Quantum Cloud Computing, Quantum Algorithms, and Quantum Software.",
                href: "https://www.ibm.com/quantum-computing/",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                style={styles.resourceCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}
              >
                <div style={styles.cardContent}>
                  <h3 style={styles.resourceTitle}>{resource.title}</h3>
                  <p style={styles.resourceText}>{resource.text}</p>
                </div>
                <div style={styles.cardFooter}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Tutorials Section */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 style={styles.sectionTitle}>Video Tutorials</h2>
          <div style={styles.resourceGrid}>
            {[
              {
                src: "https://www.youtube.com/embed/wSHmygPQukQ",
                title: "Majorana 1 Explained",
                text: "A video explaining Microsoft's path to a million qubits with Majorana-based quantum computing.",
              },
              {
                src: "https://www.youtube.com/embed/oaAjxcIFLtM?list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi",
                title: "Coding with Qiskit",
                text: "YouTube series by IBM, showing how to write quantum algorithms for beginners and programmers.",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                style={styles.resourceCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}
              >
                <iframe
                  style={styles.videoFrame}
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div style={styles.cardContent}>
                  <h3 style={styles.resourceTitle}>{video.title}</h3>
                  <p style={styles.resourceText}>{video.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Books Section */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2 style={styles.sectionTitle}>Recommended Books</h2>
          <div style={styles.resourceGrid}>
            {[
              {
                imgSrc: "/book1.jpg",
                title: "Quantum Computation and Quantum Information",
                author: "by Michael A. Nielsen & Isaac L. Chuang",
                text: 'The "bible" of quantum computing, ideal for readers with a math background.',
                href: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE#overview",
              },
              {
                imgSrc: "/book2.jpg",
                title: "Introduction to Quantum Computing",
                author: "by Phillip Kaye, Raymond Laflamme & Michele Mosca",
                text: "A beginner-friendly book requiring minimal quantum mechanics knowledge.",
                href: "https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570004",
              },
            ].map((book, index) => (
              <motion.div
                key={index}
                style={styles.bookCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}
              >
                <img
                  src={book.imgSrc}
                  alt={book.title}
                  style={styles.bookImage}
                />
                <div style={styles.bookContent}>
                  <h3 style={styles.resourceTitle}>{book.title}</h3>
                  <p style={styles.resourceAuthor}>{book.author}</p>
                  <p style={styles.resourceText}>{book.text}</p>
                  <div style={styles.cardFooter}>
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.resourceLink}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
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
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/background/resource.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.5s ease-in-out", // Smooth background transition
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "clamp(2rem, 10vw, 4rem) clamp(1rem, 5vw, 1.5rem)", // Responsive padding
    // backgroundImage: "linear-gradient(rgba(25, 118, 210, 0.8), rgba(25, 118, 210, 0.9)), url('/background/resource.jpeg')",
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
    textAlign: "center",
  },
  resourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))", // Responsive grid columns
    gap: "clamp(0.8rem, 2vw, 1rem)", // Responsive gap
    margin: "clamp(0.8rem, 2vw, 1rem) 0", // Responsive margin
  },
  resourceCard: {
    background: "#ffffff",
    borderRadius: "8px",
    padding: "clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    },
  },
  cardContent: {
    flex: "1 0 auto",
  },
  cardFooter: {
    marginTop: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  resourceTitle: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font size
    color: "#1976d2",
    marginBottom: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive margin
  },
  resourceText: {
    color: "#4a5568",
    lineHeight: 1.6,
    marginBottom: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
  },
  resourceLink: {
    display: "inline-flex",
    alignItems: "center",
    padding: "clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem)", // Responsive padding
    background: "#1976d2",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    fontWeight: 500,
    transition: "background-color 0.2s ease",
    "&:hover": {
      background: "#1565c0",
    },
  },
  videoFrame: {
    width: "100%",
    height: "clamp(150px, 40vw, 300px)", // Responsive height
    borderRadius: "8px",
    marginBottom: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  bookCard: {
    background: "#ffffff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    },
  },
  bookImage: {
    width: "clamp(50%, 60vw, 60%)", // Responsive width
    height: "clamp(200px, 50vw, 400px)", // Responsive height
    margin: "0 auto",
    borderRadius: "8px",
  },
  bookContent: {
    padding: "clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  resourceAuthor: {
    color: "#4a5568",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    marginBottom: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive margin
  },
};

export default ResourcesPage;