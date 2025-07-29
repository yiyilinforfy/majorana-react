import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { get } from '../utils/api';
import { CalendarClock, Newspaper, Building } from 'lucide-react';
import { Pagination } from '@mui/material';
import { motion } from 'framer-motion';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await get('/api/tweet/get');
      const allItems = res?.rss?.channel?.item || [];
      setNews(allItems);
      setTotalPages(Math.ceil(allItems.length / itemsPerPage));
    } catch (err) {
      console.error('Failed to fetch news:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return news.slice(startIndex, endIndex);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div style={styles.root}>
      <div style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>Quantum Computing News</h1>
          <p style={styles.heroSubtitle}>Latest quantum computing updates from around the world</p>
        </motion.div>
      </div>

      <div style={styles.content}>
        <div style={styles.container}>
          {loading ? (
            <div style={styles.loading}>
              <div style={styles.spinner}></div>
              <span style={{ marginLeft: 8 }}>Loading news...</span>
            </div>
          ) : (
            <>
              <div style={styles.newsGrid}>
                {getCurrentPageItems().map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div style={styles.card}>
                      <div style={styles.cardContent}>
                        <div style={styles.newsHeader}>
                          <div style={styles.sourceInfo}>
                            <Building size={18} style={{ marginRight: 8, color: '#1976d2' }} />
                            <a
                              href={item.source?.$.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.source}
                            >
                              {item.source?._}
                            </a>
                          </div>
                          <div style={styles.timeInfo}>
                            <CalendarClock size={16} style={{ marginRight: 4 }} />
                            {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true })}
                          </div>
                        </div>
                        
                        <h2 style={styles.newsTitle}>{item.title}</h2>
                        <p style={styles.newsText}>
                          {item.description.replace(/<[^>]+>/g, '')}
                        </p>
                        
                        <div style={styles.cardFooter}>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.readMoreButton}
                          >
                            <Newspaper size={16} style={{ marginRight: 8 }} />
                            Read Full News
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div style={styles.paginationContainer}>
                <div style={styles.paginationInfo}>
                  Page {page} of {totalPages}
                </div>
                <Pagination 
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

const styles = {
  root: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url("/background/newsBackground.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    transition: 'background-image 0.5s ease-in-out', // Smooth background transition
  },
  hero: {
    height: 'clamp(40vh, 60vh, 70vh)', // Responsive hero height
    background: 'linear-gradient( url("/background/quantum-x.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    padding: 'clamp(1rem, 5vw, 2rem)', // Responsive padding
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    marginTop: 'clamp(1rem, 5vh, 2rem)', // Responsive top margin
  },
  heroTitle: {
    fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Responsive font size
    fontWeight: 700,
    marginBottom: 'clamp(0.5rem, 2vw, 1rem)', // Responsive margin
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', // Responsive font size
    opacity: 0.9,
  },
  content: {
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 150px)', // Smooth transition to white
    minHeight: '60vh',
    padding: 'clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 5vw, 1.5rem)', // Responsive padding
    transition: 'background 0.5s ease-in-out', // Smooth background transition
  },
  container: {
    maxWidth: 'clamp(800px, 90vw, 1000px)', // Responsive container width
    margin: '0 auto',
  },
  newsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 3vw, 1.5rem)', // Responsive gap
    marginBottom: 'clamp(1.5rem, 5vw, 2rem)', // Responsive margin
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
    },
  },
  cardContent: {
    padding: 'clamp(1rem, 3vw, 1.5rem)', // Responsive padding
  },
  newsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 'clamp(0.8rem, 2vw, 1rem)', // Responsive margin
    flexWrap: 'wrap', // Allow wrapping on small screens
    gap: '0.5rem',
  },
  sourceInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#1976d2',
    fontWeight: 500,
    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', // Responsive font size
  },
  source: {
    fontSize: 'inherit', // Inherit from sourceInfo
  },
  timeInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', // Responsive font size
  },
  newsTitle: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', // Responsive font size
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: 'clamp(0.6rem, 2vw, 0.8rem)', // Responsive margin
    lineHeight: 1.4,
  },
  newsText: {
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', // Responsive font size
    lineHeight: 1.6,
    color: '#4a5568',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
  },
  cardFooter: {
    marginTop: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
    display: 'flex',
    justifyContent: 'flex-end',
  },
  readMoreButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: 'clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem)', // Responsive padding
    backgroundColor: '#1976d2',
    color: '#ffffff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', // Responsive font size
    fontWeight: 500,
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'clamp(0.8rem, 2vw, 1rem)', // Responsive gap
    padding: 'clamp(1.5rem, 5vw, 2rem) 0', // Responsive padding
  },
  paginationInfo: {
    color: '#666',
    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', // Responsive font size
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'clamp(200px, 50vh, 300px)', // Responsive height
  },
  spinner: {
    width: 'clamp(1.5rem, 5vw, 2rem)', // Responsive spinner size
    height: 'clamp(1.5rem, 5vw, 2rem)', // Responsive spinner size
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #1976d2',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};