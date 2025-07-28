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
    background: '#f8f9fa',
  },
  hero: {
    height: '40vh',
    background: "linear-gradient(rgba(25, 118, 210, 0.8), rgba(25, 118, 210, 0.9)), url('/background/quantum-x.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '3.5em',
    fontWeight: 700,
    marginBottom: '0.5em',
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  heroSubtitle: {
    fontSize: '1.3em',
    opacity: 0.9,
  },
  content: {
    background: 'linear-gradient(180deg, #1976d2 0%, #ffffff 250px)',
    minHeight: '60vh',
    padding: '40px 20px',
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto',
  },
  newsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginBottom: '40px',
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
    padding: '25px',
  },
  newsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  sourceInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#1976d2',
    fontWeight: 500,
  },
  source: {
    fontSize: '0.95em',
  },
  timeInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: '0.9em',
  },
  newsTitle: {
    fontSize: '1.4em',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '12px',
    lineHeight: 1.4,
  },
  newsText: {
    fontSize: '1.05em',
    lineHeight: 1.6,
    color: '#4a5568',
    marginBottom: '20px',
  },
  cardFooter: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  readMoreButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#ffffff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '0.95em',
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
    gap: '15px',
    padding: '30px 0',
  },
  paginationInfo: {
    color: '#666',
    fontSize: '0.95em',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
  },
  spinner: {
    width: '35px',
    height: '35px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #1976d2',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};
