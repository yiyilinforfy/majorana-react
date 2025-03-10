import React, { useState, useEffect } from "react";
import axios from "axios";
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
import SmartToyIcon from "@mui/icons-material/SmartToy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
    window.open(article.url, "_blank", "noopener,noreferrer");
  };

  const getValidImage = (imageUrl) =>
    imageUrl && imageUrl !== "None" && imageUrl !== "undefined" && imageUrl.trim()
      ? imageUrl
      : "/defaultNews.jpg";
  
  const handleImageError = (e) => {
    e.target.src = "/defaultNews.jpg";
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
              zIndex: 1
            }}
          />
          <motion.div
            style={styles.headerContent}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 style={styles.title}>Majorana Lab</h1>
            <h2 style={styles.subtitle}>Exploring the Quantum Frontier</h2>
            <p style={styles.description}>
              Pioneering quantum computing research through Majorana fermions and fault-tolerant quantum computation.
            </p>
            <div style={styles.buttons}>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/resources")}
                sx={styles.primaryButton}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                onClick={() => (window.location.href = "/forum")}
                sx={styles.secondaryButton}
              >
                Explore More
              </Button>
            </div>
          </motion.div>
        </header>

        <section style={styles.introSection}>
          <Typography variant="h2" sx={styles.sectionTitle}>
            Discover the Future
          </Typography>
          <div style={styles.introGrid}>
            {introCards.map((card, index) => (
              <motion.div
                key={index}
                style={styles.introCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              >
                <img src={card.image} alt={card.title} style={styles.introImage} />
                <div style={styles.introText}>
                  <Typography variant="h3" sx={styles.introTitle}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" sx={styles.introDescription}>
                    {card.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={styles.newsSection}>
          <div style={styles.sectionHeader}>
            <Typography variant="h2" sx={styles.sectionTitle}>
              Latest Breakthroughs
            </Typography>
            <Button
              variant="outlined"
              onClick={() => (window.location.href = "/news")}
              sx={styles.seeMoreButton}
            >
              See More News
            </Button>
          </div>
          {loading ? (
            <Box sx={styles.loading}>
              <CircularProgress />
            </Box>
          ) : (
            <div style={styles.newsGrid}>
              {news.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  style={styles.newsCard}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={getValidImage(item.image)}
                    alt={item.title}
                    style={styles.cardImage}
                    onError={handleImageError}
                  />
                  <div style={styles.cardContent}>
                    <Typography variant="h6" sx={styles.cardTitle} data-tip={item.title}>
                      {item.title}
                    </Typography>
                    <Box sx={styles.cardActions}>
                      <Button
                        variant="text"
                        onClick={() => handleSummarize(item.url)}
                        startIcon={<SmartToyIcon />}
                        sx={styles.aiButton}
                      >
                        AI Summary
                      </Button>
                      <Button
                        variant="text"
                        onClick={() => window.open(item.url, "_blank")}
                        endIcon={<OpenInNewIcon />}
                        sx={styles.readButton}
                      >
                        Read More
                      </Button>
                    </Box>
                  </div>
                  <Tooltip place="top" type="dark" effect="float" />
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: styles.dialogPaper
        }}
      >
        <Box sx={styles.dialogContent}>
          <IconButton
            onClick={handleCloseDialog}
            sx={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={styles.dialogTitle}>
            AI Generated Summary
          </Typography>
          <DialogContent sx={{ padding: 0 }}>
            {summaryLoading ? (
              <Box sx={styles.summaryLoading}>
                <CircularProgress sx={{ color: "#00d4ff" }} />
              </Box>
            ) : (
              <Typography variant="body1" sx={styles.summaryText}>
                {summary}
              </Typography>
            )}
          </DialogContent>
          {!summaryLoading && (
            <Box sx={styles.dialogActions}>
              <Button
                variant="outlined"
                onClick={handleReadMore}
                sx={styles.readMoreButton}
                startIcon={<OpenInNewIcon />}
              >
                Read Full Article
              </Button>
            </Box>
          )}
        </Box>
      </Dialog>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0a192f 0%, #112240 100%)",
    color: "#e6f1ff",
    padding: "0",
  },
  header: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(17,34,64,0.95) 100%)",
  },
  headerContent: {
    maxWidth: "1200px",
    padding: "0 2rem",
    textAlign: "center",
    zIndex: 2,
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: "700",
    background: "linear-gradient(45deg, #64ffda, #00b4d8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "2rem",
    color: "#8892b0",
    marginBottom: "2rem",
  },
  description: {
    fontSize: "1.25rem",
    color: "#8892b0",
    maxWidth: "800px",
    margin: "0 auto 3rem",
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },
  primaryButton: {
    background: "linear-gradient(45deg, #64ffda, #00b4d8)",
    color: "#0a192f",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "4px",
    textTransform: "none",
    "&:hover": {
      background: "linear-gradient(45deg, #00b4d8, #64ffda)",
    },
  },
  secondaryButton: {
    border: "2px solid #64ffda",
    color: "#64ffda",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "4px",
    textTransform: "none",
    "&:hover": {
      background: "rgba(100, 255, 218, 0.1)",
    },
  },
  introSection: {
    padding: "6rem 2rem",
    background: "#112240",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#e6f1ff",
    textAlign: "center",
    marginBottom: "3rem",
  },
  introGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  introCard: {
    background: "rgba(17, 34, 64, 0.7)",
    borderRadius: "8px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(100, 255, 218, 0.1)",
  },
  introImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  introText: {
    padding: "1.5rem",
  },
  introTitle: {
    fontSize: "1.5rem",
    color: "#64ffda",
    marginBottom: "1rem",
  },
  introDescription: {
    color: "#8892b0",
    lineHeight: 1.6,
  },
  newsSection: {
    padding: "6rem 2rem",
    background: "#0a192f",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto 3rem",
  },
  seeMoreButton: {
    color: "#64ffda",
    borderColor: "#64ffda",
    "&:hover": {
      borderColor: "#64ffda",
      background: "rgba(100, 255, 218, 0.1)",
    },
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  newsCard: {
    background: "rgba(17, 34, 64, 0.7)",
    borderRadius: "8px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(100, 255, 218, 0.1)",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "1.5rem",
  },
  cardTitle: {
    color: "#e6f1ff",
    fontSize: "1.1rem",
    marginBottom: "1rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  aiButton: {
    color: "#64ffda",
    "&:hover": {
      background: "rgba(100, 255, 218, 0.1)",
    },
  },
  readButton: {
    color: "#8892b0",
    "&:hover": {
      color: "#64ffda",
      background: "rgba(100, 255, 218, 0.1)",
    },
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    padding: "3rem",
  },
  dialogPaper: {
    background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
    color: "#e6f1ff",
    borderRadius: "12px",
    border: "1px solid rgba(100, 255, 218, 0.2)",
  },
  dialogContent: {
    position: "relative",
    padding: "2rem",
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    color: "#8892b0",
    "&:hover": {
      color: "#64ffda",
    },
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #64ffda, #00b4d8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.5rem",
  },
  summaryLoading: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  },
  summaryText: {
    background: "rgba(17, 34, 64, 0.7)",
    padding: "1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#8892b0",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
  },
  readMoreButton: {
    color: "#64ffda",
    borderColor: "#64ffda",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      borderColor: "#64ffda",
      background: "rgba(100, 255, 218, 0.1)",
    },
  },
};

export default HomePage;