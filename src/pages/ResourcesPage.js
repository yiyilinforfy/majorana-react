import React from "react";
import Footer from "../components/Footer";

function ResourcesPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Quantum Computing Educational Resources</h1>
        <p style={styles.subtitle}>
          Explore tutorials, videos, and reading lists to dive into the world of
          quantum computing. Join us at Majorana.fun to unlock the future of
          technology!
        </p>

        {/* Tutorials Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Get-Started Websites</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <div style={styles.resourceIcon}>
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 style={styles.resourceTitle}>Qiskit Tutorials</h3>
              <p style={styles.resourceText}>
                Jupyter notebooks from IBM Qiskit, covering quantum computing
                basics, algorithms, and programming on real quantum hardware.
              </p>
              <a
                href="https://qiskit.org/documentation/tutorials.html"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Start Learning
              </a>
            </div>
            <div style={styles.resourceCard}>
              <div style={styles.resourceIcon}>
                <i className="fas fa-code"></i>
              </div>
              <h3 style={styles.resourceTitle}>Quantum Katas</h3>
              <p style={styles.resourceText}>
                Q# programming exercises by Microsoft, ideal for learning
                quantum computing and programming step-by-step.
              </p>
              <a
                href="https://github.com/Microsoft/QuantumKatas"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLink}
              >
                Start Learning
              </a>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Video Tutorials</h2>
          <div style={styles.resourceGrid}>
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
                YouTube series by IBM, showing how to write quantum algorithms
                for beginners and programmers.
              </p>
            </div>
            <div style={styles.resourceCard}>
              <iframe
                style={styles.videoFrame}
                src="https://www.youtube.com/embed/FgZ-8NFSysA"
                title="Step inside the Google Quantum AI lab"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h3 style={styles.resourceTitle}>Google Quantum AI Channel</h3>
              <p style={styles.resourceText}>
                Official YouTube channel with tutorials on programming quantum
                computers and latest breakthroughs.
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Recommended Books</h2>
          <div style={styles.resourceGrid}>
            <div style={styles.resourceCard}>
              <img
                src="/book1.jpg"
                alt="Quantum Computation and Quantum Information"
                style={styles.bookImage}
              />
              <div style={styles.resourceInfo}>
                <h3 style={styles.resourceTitle}>
                  Quantum Computation and Quantum Information
                </h3>
                <p style={styles.resourceAuthor}>
                  by Michael A. Nielsen & Isaac L. Chuang
                </p>
                <p style={styles.resourceText}>
                  The "bible" of quantum computing, ideal for readers with a
                  math background.
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
            <div style={styles.resourceCard}>
              <img
                src="/book2.jpg"
                alt="Introduction to Quantum Computing"
                style={styles.bookImage}
              />
              <div style={styles.resourceInfo}>
                <h3 style={styles.resourceTitle}>
                  Introduction to Quantum Computing
                </h3>
                <p style={styles.resourceAuthor}>
                  by Phillip Kaye, Raymond Laflamme & Michele Mosca
                </p>
                <p style={styles.resourceText}>
                  A beginner-friendly book requiring minimal quantum mechanics
                  knowledge.
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
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px", // 与HomePage一致
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)", // 与HomePage一致的深色渐变背景
    position: "relative",
  },
  content: {
    maxWidth: "1400px", // 与HomePage和NewsPage一致
    margin: "0 auto",
    padding: "0px 20px", // 增加内边距，与HomePage一致
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#4a90e2", // 蓝色标题，与HomePage一致
    letterSpacing: "1px",
    marginBottom: "20px",
    textAlign: "center", // 居中显示
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // 与HomePage标题一致
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#e0e0e0", // 较浅的白色，与HomePage描述一致
    marginBottom: "40px",
    textAlign: "center", // 居中显示
    maxWidth: "800px",
    margin: "0 auto 60px",
    opacity: 0.9,
  },
  section: {
    marginBottom: "60px",
  },
  sectionHeading: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#ffff", // 蓝色标题，与HomePage一致
    marginBottom: "30px",
    textAlign: "center", // 居中显示
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // 轻微阴影，科技感
  },
  resourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", // 调整为更宽的卡片，适合内容
    gap: "40px", // 增大间距，与HomePage一致
    justifyContent: "center", // 居中布局
  },
  resourceCard: {
    background: "#1b263b", // 深色背景，与HomePage一致
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // 增加阴影，与HomePage卡片一致
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // 添加动画，与HomePage一致
    textAlign: "center", // 卡片内容居中
    "&:hover": {
      transform: "translateY(-5px)", // 悬停上移，与HomePage卡片一致
      boxShadow: "0 12px 24px rgba(0,0,0,0.3)", // 增强阴影
    },
  },
  resourceIcon: {
    fontSize: "40px",
    color: "#4a90e2", // 蓝色图标，与HomePage高亮一致
    marginBottom: "20px",
  },
  resourceTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#fff", // 白色标题，与HomePage一致
  },
  resourceText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#e0e0e0", // 较浅的白色，与HomePage描述一致
    marginBottom: "20px",
  },
  resourceLink: {
    color: "#fff",
    backgroundColor: "#4a90e2", // 蓝色按钮，与HomePage一致
    padding: "10px 20px",
    borderRadius: "8px", // 矩形角，与HomePage按钮一致
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s ease, transform 0.3s ease", // 平滑动画
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(74,144,226,0.3)", // 按钮阴影，与HomePage一致
    "&:hover": {
      backgroundColor: "#357abd", // 深蓝色悬停，与HomePage一致
      transform: "translateY(-2px)", // 轻微上移，与HomePage按钮一致
    },
  },
  videoFrame: {
    width: "100%",
    height: "350px",
    borderRadius: "8px", // 圆角，与卡片一致
    border: "none",
  },
  bookImage: {
    width: "200px",
    objectFit: "cover",
    borderRadius: "8px 0 0 8px", // 左上圆角，与卡片一致
  },
  resourceInfo: {
    padding: "20px",
    flex: 1,
    textAlign: "left", // 书籍信息左对齐
  },
  resourceAuthor: {
    fontSize: "14px",
    color: "#e0e0e0",
    marginBottom: "15px",
    fontStyle: "italic",
  },
};

export default ResourcesPage;
