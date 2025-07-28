import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { get, post } from "@/utils/api";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  CircularProgress,
  Typography,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { CalendarClock, Building } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

function HomePage() {
  const [news, setNews] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tweetsLoading, setTweetsLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  useEffect(() => {
    fetchNews();
    fetchTweets();
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

  const fetchTweets = async () => {
    try {
      const response = await get("/api/tweet/get");
      let tweets = response?.rss?.channel?.item || [];
      setTweets(tweets.slice(0, 4));
      setTweetsLoading(false);
    } catch (error) {
      console.error("Error fetching tweets:", error);
      setTweetsLoading(false);
    }
  };

  const handleReadMore = () => {
    window.open(selectedUrl, "_blank", "noopener,noreferrer");
  };

  const getValidImage = (imageUrl) =>
    imageUrl && imageUrl !== "None" && imageUrl !== "undefined" && imageUrl.trim()
      ? imageUrl
      : "/defaultNews.jpg";

  const handleImageError = (e) => {
    e.target.src = "/defaultNews.jpg";
  };

  const handleSummarize = async (item) => {
    setSelectedUrl(item.url);
    setOpenDialog(true);
    setSummaryLoading(true);
    setSummary("");

    try {
      const response = await post("/api/news/summarize", {
        id: item.paperId,
        authors: item.authors || [],
        title: item.title,
        publishedAt: item.publishedAt,
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
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#3498db", "#2ecc71", "#9b59b6", "#f1c40f"] },
      links: {
        color: "#3498db",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.5 },
      shape: { type: ["circle", "triangle"] },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-['Orbitron']">
      <header style={styles.header} className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 pointer-events-none"
        />
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4 sm:mb-6"
            animate={{
              textShadow: ["0 0 20px #3498db", "0 0 40px #3498db", "0 0 20px #3498db"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Majorana Lab
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-2xl text-blue-500 font-medium mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Exploring the Quantum Frontier
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Pioneering quantum computing research through Majorana fermions and fault-tolerant quantum computation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="contained"
              onClick={() => (window.location.href = "/resources")}
              sx={{
                background: "linear-gradient(45deg, #2196f3, #00bcd4)",
                color: "#ffffff",
                padding: { xs: "0.5rem 1.5rem", sm: "0.75rem 2rem" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: "700",
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 5px 15px rgba(33, 150, 243, 0.4)",
                "&:hover": {
                  background: "linear-gradient(45deg, #00bcd4, #2196f3)",
                  boxShadow: "0 8px 25px rgba(33, 150, 243, 0.6)",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              onClick={() => (window.open("https://forum.zebi.ai/category/5/majorana-quantum-computing") )}
              sx={{
                border: "2px solid #2196f3",
                color: "#2196f3",
                padding: { xs: "0.5rem 1.5rem", sm: "0.75rem 2rem" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: "700",
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": {
                  background: "rgba(33, 150, 243, 0.1)",
                  borderColor: "#00bcd4",
                  color: "#00bcd4",
                },
              }}
            >
              Explore More
            </Button>
          </motion.div>
        </motion.div>
      </header>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 10, background: "#ffffff" }}>
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <Typography
          variant="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-12 sm:mb-16 md:mb-24 lg:mb-32"
        >
          Discover the Future
        </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
            {introCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(52, 152, 219, 0.3)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </motion.div>
                <div className="p-4 sm:p-6">
                  <Typography
                    variant="h5"
                    className="text-lg sm:text-xl text-blue-700 font-semibold mb-3"
                  >
                    {card.title}
                  </Typography>
                  <Typography className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto mb-8 sm:mb-12">
            <Typography
              variant="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Latest News
            </Typography>
            <Button
              variant="outlined"
              onClick={() => (window.location.href = "/news")}
              className="mt-4 sm:mt-0 text-blue-600 border-blue-600 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-blue-50 hover:border-cyan-500 hover:text-cyan-500 transition-all"
            >
              See More
            </Button>
          </div>
          {tweetsLoading ? (
            <div className="flex justify-center py-8">
              <CircularProgress sx={{ color: "#3498db" }} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
              {tweets.slice(0, 6).map((tweet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-blue-100/10 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <div className="flex items-center text-blue-600 font-medium">
                        <Building size={16} className="mr-2" />
                        <a
                          href={tweet.source?.$.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-cyan-500"
                        >
                          {tweet.source?._}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs mt-2 sm:mt-0">
                        <CalendarClock size={14} className="mr-1" />
                        {formatDistanceToNow(new Date(tweet.pubDate), { addSuffix: true })}
                      </div>
                    </div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{tweet.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {tweet.description.replace(/<[^>]+>/g, '')}
                    </p>
                    <div className="border-t border-blue-100/10 pt-4">
                      <a
                        href={tweet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-medium hover:text-cyan-500"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto mb-8 sm:mb-12">
            <Typography
              variant="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Research
            </Typography>
            <Button
              variant="outlined"
              onClick={() => (window.location.href = "/articles")}
              className="mt-4 sm:mt-0 text-blue-600 border-blue-600 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-blue-50 hover:border-cyan-500 hover:text-cyan-500 transition-all"
            >
              See More
            </Button>
          </div>
          {loading ? (
            <div className="flex justify-center py-8">
              <CircularProgress sx={{ color: "#3498db" }} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatePresence>
                {news.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(52, 152, 219, 0.2)" }}
                  >
                    <motion.img
                      src={getValidImage(item.image)}
                      alt={item.title}
                      className="w-full h-40 sm:h-48 object-cover"
                      onError={handleImageError}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="p-4 sm:p-6">
                      <Typography
                        variant="h6"
                        className="text-blue-700 text-sm sm:text-base font-medium line-clamp-2 mb-4"
                        data-tip={item.title}
                      >
                        {item.title}
                      </Typography>
                      <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <Button
                          variant="text"
                          onClick={() => handleSummarize(item)}
                          startIcon={<SmartToyIcon />}
                          className="text-blue-600 font-semibold hover:text-cyan-500 hover:bg-blue-50 text-xs sm:text-sm"
                        >
                          AI Summary
                        </Button>
                        <Button
                          variant="text"
                          onClick={() => window.open(item.url, "_blank")}
                          endIcon={<OpenInNewIcon />}
                          className="text-gray-500 font-semibold hover:text-blue-600 hover:bg-blue-50 text-xs sm:text-sm"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                    <Tooltip place="top" type="dark" effect="float" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "#ffffff",
            color: "#37474f",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(33, 150, 243, 0.2)",
            maxWidth: { xs: "90%", sm: "80%", md: "600px" },
            margin: { xs: 2, sm: 4 },
          },
        }}
      >
        <div className="relative p-4 sm:p-6">
          <IconButton
            onClick={handleCloseDialog}
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-600"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="text-center font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4 sm:mb-6 text-lg sm:text-xl"
          >
            AI Generated Summary
          </Typography>
          <DialogContent className="p-0">
            {summaryLoading ? (
              <div className="flex justify-center py-6">
                <CircularProgress sx={{ color: "#3498db" }} />
              </div>
            ) : (
              <Typography className="bg-gray-50 p-4 sm:p-6 rounded-xl text-gray-700 text-sm sm:text-base leading-relaxed">
                {summary}
              </Typography>
            )}
          </DialogContent>
          {!summaryLoading && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <Button
                variant="outlined"
                onClick={handleReadMore}
                startIcon={<OpenInNewIcon />}
                className="text-blue-600 border-blue-600 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold hover:bg-blue-50 hover:border-cyan-500 hover:text-cyan-500"
              >
                Read Full Article
              </Button>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '120px 20px 80px',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url("/main.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
  }
}

export default HomePage;