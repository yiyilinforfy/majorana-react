import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion"; // 引入framer-motion
import Particles from "react-particles"; // 引入粒子组件
import { loadFull } from "tsparticles"; // 引入完整粒子加载器

function HomePage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/news?page=1&limit=6");
      const { news } = response.data;
      setNews(news);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const getValidImage = (imageUrl) =>
    imageUrl && imageUrl !== "None" && imageUrl !== "undefined" && imageUrl.trim()
      ? imageUrl
      : "/defaultNews.jpg";

  const introCards = [
    {
      title: "Quantum Computing",
      description: "Harnessing quantum mechanics to solve complex problems exponentially faster.",
      image: "/quantum-computing.jpg",
    },
    {
      title: "Majorana Fermions",
      description: "Elusive particles enabling fault-tolerant quantum computation.",
      image: "/majorana-fermions.jpg",
    },
    {
      title: "Our Mission",
      description: "Fostering innovation and community in quantum science.",
      image: "/mission.jpg",
    },
  ];

  // 粒子初始化函数
  const particlesInit = async (engine) => {
    await loadFull(engine); // 加载完整tsparticles功能
  };

  // 粒子配置
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // 透明背景，适应你的渐变
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" }, // 点击时添加粒子
        onHover: { enable: true, mode: "repulse" }, // 鼠标悬停时粒子散开
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#4a90e2" }, // 蓝色粒子，与主题匹配
      links: {
        color: "#4a90e2",
        distance: 150,
        enable: true, // 粒子间连线
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 0.5,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80, // 粒子数量
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <div style={styles.container}>
      {/* 英雄区域 */}
      <header style={styles.header}>
        {/* 粒子背景 */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <motion.div
          style={styles.headerContent}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.title}>MAJORANA.FUN</h1>
          <h2 style={styles.subtitle}>INTRODUCING MAJORANA</h2>
          <p style={styles.description}>
            Quantum Computing & Majorana Fermions: Explore cutting-edge
            concepts, learn about fault-tolerant quantum computation, and join
            our community.
          </p>
          <div style={styles.buttons}>
            <button
              style={styles.getStartedButton}
              onClick={() => (window.location.href = "/resources")}
            >
              GET STARTED
            </button>
            <button
              style={styles.exploreButton}
              onClick={() => (window.location.href = "/forum")}
            >
              EXPLORE MORE
            </button>
          </div>
        </motion.div>
      </header>

      {/* 介绍区域 */}
      <section style={styles.introSection}>
        <h2 style={styles.sectionTitle}>Discover the Future</h2>
        <div style={styles.introGrid}>
          {introCards.map((card, index) => (
            <motion.div
              key={index}
              style={styles.introCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={styles.introImage}
              />
              <div style={styles.introText}>
                <h3 style={styles.introTitle}>{card.title}</h3>
                <p style={styles.introDescription}>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 新闻区域 */}
      <section style={styles.content}>
        <div style={styles.sectionHeader}>
          <h2 style={{ ...styles.sectionTitle }}>Latest Breakthroughs</h2>
          <button
            onClick={() => (window.location.href = "/news")}
            style={styles.seeMoreButton}
          >
            See More News
          </button>
        </div>
        {loading ? (
          <div style={styles.loading}>Loading...</div>
        ) : (
          <div style={styles.newsGrid}>
            {news.map((item, index) => (
              <a
                href={item.url}
                target="_blank"
                key={item.id || index}
                rel="noopener noreferrer"
              >
                <motion.div
                  style={styles.newsCard}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={getValidImage(item.image)}
                    alt={item.title}
                    style={styles.cardImage}
                  />
                  <h3
                    style={{
                      ...styles.cardTitle,
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                    data-tip={item.title}
                  >
                    {item.title}
                  </h3>
                  <Tooltip place="top" type="dark" effect="float" />
                </motion.div>
              </a>
            ))}
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
}


// 样式
const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)", // 深色科技背景
  },
  header: {
    position: "relative",
    padding: "0",
    borderRadius: "12px",
    marginBottom: "40px",
    backgroundImage: "url(/main.jpg)", // 替换为量子相关的背景图
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  headerContent: {
    position: "relative",
    textAlign: "left",
    zIndex: 2,
    background:
      "linear-gradient(to right, rgba(30, 60, 114, 0.95), rgba(42, 82, 152, 0.4))",
    padding: "60px",
    borderRadius: "12px",
  },
  title: {
    zIndex: 2,
    fontSize: "56px",
    margin: "0",
    fontWeight: "bold",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "28px",
    margin: "15px 0 25px",
    opacity: "0.9",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    margin: "0 0 40px 0",
  },
  buttons: {
    display: "flex",
    gap: "25px",
  },
  getStartedButton: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    padding: "15px 35px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(74,144,226,0.3)",
  },
  exploreButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #4a90e2",
    padding: "15px 35px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  },
  introSection: {
    maxWidth: "1400px",
    margin: "0 auto 60px",
  },
  introGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  introCard: {
    backgroundColor: "#1b263b",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
  introImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  introText: {
    padding: "20px",
  },
  introTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 10px",
    color: "#4a90e2",
  },
  introDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#e0e0e0",
  },
  content: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  sectionTitle: {
    zIndex: 2,
    fontSize: "32px",
    fontWeight: "700",
    color: "#ffff",
    letterSpacing: "1px",
  },
  seeMoreButton: {
    backgroundColor: "transparent",
    color: "#4a90e2",
    border: "2px solid #4a90e2",
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
    padding: "20px 0",
  },
  newsCard: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "15px",
    lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    padding: "40px",
    color: "#4a90e2",
  },
};

export default HomePage;
