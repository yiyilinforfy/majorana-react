import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { get, post } from "@/utils/api";
import {
  Button,
  Dialog,
  DialogContent,
  Box,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy"; // AI 图标
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // 用于跳转图标

function HomePage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await get("/api/news?page=1&limit=6");
      let { news } = response;
      news = news.slice(0, 6);
      setNews(news);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handleReadMore = () => {
    window.open(article.url, "_blank", "noopener,noreferrer"); // 跳转到原文章
    // setOpenDialog(false); // 可选：跳转后关闭对话框
  };

  const getValidImage = (imageUrl) =>
    imageUrl && imageUrl !== "None" && imageUrl !== "undefined" && imageUrl.trim()
      ? imageUrl
      : "/defaultNews.jpg";
  
  // 添加图片加载失败的处理函数
  const handleImageError = (e) => {
    e.target.src = "/defaultNews.jpg"; // 加载失败时使用默认图片
  };

  const handleSummarize = async (url) => {
    setSelectedUrl(url);
    setOpenDialog(true);
    setSummaryLoading(true);
    setSummary("");

    try {
      const response = await post("/api/news/summarize", {
        url,
      });
      setSummary(response.summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Unable to generate summary. Please try again later.");
    } finally {
      setSummaryLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSummary("");
  };

  const introCards = [
    {
      title: "Quantum Computing",
      description: "Harnessing quantum mechanics to solve complex problems exponentially faster.",
      image: "/quantum-computing.jpeg",
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

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#2a5bd7" },
      links: {
        color: "#2a5bd7",
        distance: 150,
        enable: true,
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
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <div>
      <div style={styles.container}>
        {/* 英雄区域 */}
        <header style={styles.header}>
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
              Quantum Computing & Majorana Fermions: Explore cutting-edge concepts, learn about fault-tolerant quantum computation, and join our community.
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
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              >
                <img src={card.image} alt={card.title} style={styles.introImage} />
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
            <h2 style={styles.sectionTitle}>Latest Breakthroughs</h2>
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
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    style={styles.newsCard}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={getValidImage(item.image)}
                      alt={item.title}
                      style={styles.cardImage}
                      onError={handleImageError} // 添加错误处理
                    />
                    <div style={styles.cardContent}> {/* 添加内容容器 */}
                      <h3 style={styles.cardTitle} data-tip={item.title}>
                        {item.title}
                      </h3>
                      <Button
                        size="small"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSummarize(item.url);
                        }}
                        sx={{
                          position: "absolute",
                          bottom: "10px",
                          right: "10px",
                          color: "#1a73e8",
                          textTransform: "none",
                          fontSize: "12px",
                          padding: "4px 10px",
                          "&:hover": {
                            backgroundColor: "rgba(26, 115, 232, 0.1)",
                          },
                        }}
                      >
                        <SmartToyIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
                        AI Summarize
                      </Button>
                    </div>
                    <Tooltip place="top" type="dark" effect="float" />
                  </motion.div>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* AI Summarize 对话框 */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)",
            color: "#fff",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(74, 144, 226, 0.3)",
          },
        }}
      >
        <Box sx={{ position: "relative", padding: "20px" }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{ position: "absolute", top: "10px", right: "10px", color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1a73e8, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            AI Generated Summary
          </Typography>
          <DialogContent sx={{ padding: 0 }}>
            {summaryLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                <CircularProgress sx={{ color: "#00d4ff" }} />
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  backdropFilter: "blur(5px)",
                }}
              >
                {summary}
              </Typography>
            )}
          </DialogContent>
          {!summaryLoading && (
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <Button
                variant="outlined"
                onClick={handleReadMore}
                sx={{
                  color: "#00d4ff",
                  borderColor: "#00d4ff",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 212, 255, 0.1)",
                    borderColor: "#1a73e8",
                  },
                }}
              >
                <OpenInNewIcon sx={{ fontSize: "18px", marginRight: "5px" }} />
                Interested? Read the full article
              </Button>
            </Box>
          )}
        </Box>
      </Dialog>

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
    background: "#fff",
    position: "relative",
  },
  header: {
    position: "relative",
    padding: "0",
    borderRadius: "12px",
    marginBottom: "60px",
    backgroundImage: "url(/main.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
  headerContent: {
    position: "relative",
    textAlign: "left",
    zIndex: 2,
    background: "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))",
    padding: "60px",
    borderRadius: "12px",
  },
  title: {
    zIndex: 2,
    fontSize: "56px",
    margin: "0",
    fontWeight: "bold",
    color: "#2a5bd7",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "28px",
    margin: "15px 0 25px",
    color: "#666",
    opacity: "0.9",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    margin: "0 0 40px 0",
    color: "#333",
  },
  buttons: {
    display: "flex",
    gap: "25px",
  },
  getStartedButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "15px 35px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontWeight: "600",
  },
  exploreButton: {
    backgroundColor: "transparent",
    color: "#2a5bd7",
    border: "2px solid #2a5bd7",
    padding: "15px 35px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: "600",
  },
  introSection: {
    // maxWidth: "1400px",
    margin: "0 auto 60px",
  },
  introGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  introCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
    color: "#2a5bd7",
  },
  introDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#666",
  },
  content: {
    // maxWidth: "1400px",
    margin: "0 auto",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#2a5bd7",
    letterSpacing: "1px",
  },
  seeMoreButton: {
    backgroundColor: "transparent",
    color: "#2a5bd7",
    border: "2px solid #2a5bd7",
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: "600",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
    gap: "70px",
    padding: "20px 0",
  },
  newsCard: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    position: "relative",
    display: "flex", // 添加 flex 布局
    flexDirection: "column", // 垂直排列
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block", // 确保图片始终显示为块级元素
  },
  cardContent: { // 新增内容容器样式
    padding: "15px",
    position: "relative",
    flex: 1, // 允许内容区域扩展
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // 确保标题和按钮分隔开
    minHeight: "120px", // 设置最小高度
  },
  cardTitle: {
    fontSize: "19px",
    fontWeight: "bold",
    margin: "0 0 10px 0", // 修改 margin，确保与按钮有间距
    lineHeight: "1.4",
    color: "#333",
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
    color: "#2a5bd7",
  },
};

export default HomePage;