import React, { useState, useEffect } from 'react';
import axios from 'axios';
function HomePage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/news?page=1&limit=6');
      const { news, totalPages, totalNews } = response.data;
      setNews(news);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  // 辅助函数：检查图片路径是否有效
  const getValidImage = (imageUrl) => {
    if (!imageUrl || imageUrl === 'None' || imageUrl === 'undefined' || imageUrl.trim() === '') {
      return '/defaultNews.jpg'; // 默认图片路径
    }
    return imageUrl;
  };

  return (
    <div style={styles.container}>
      {/* 英雄区域（顶部主图+标题） */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>MAJORANA.FUN</h1>
          <h2 style={styles.subtitle}>INTRODUCING MAJORANA</h2>
          <p style={styles.description}>
            Quantum Computing & Majorana Fermions: Explore cutting-edge concepts, learn about fault-tolerant quantum computation, and join our community to shape the future of technology.
          </p>
          <div style={styles.buttons}>
            <button style={styles.getStartedButton}>GET STARTED</button>
            <button style={styles.exploreButton}>EXPLORE MORE</button>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <section style={styles.content}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Latest Breakthroughs in Quantum Computing</h2>
          <button 
            onClick={() => window.location.href = '/news'} 
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
              <div 
                key={item.id || index} 
                style={styles.newsCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={getValidImage(item.image) || '/defaultNews.jpg'}
                  alt={item.title}
                  style={styles.cardImage}
                />
                <h3 style={styles.cardTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// 内联样式
const styles = {
  container: {
    color: '#fff', 
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: '100vh',
    padding: '40px',
  },
  nav: {
    backgroundColor: '#000',
    padding: '10px 0',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0',
    padding: '0',
  },
  navItem: {
    margin: '0 15px',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#fff',
    textTransform: 'uppercase',
  },
  header: {
    position: 'relative',
    padding: '0',
    borderRadius: '12px',
    marginBottom: '20px',
    backgroundImage: 'url(/main.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  headerContent: {
    position: 'relative',
    // maxWidth: '800px',
    textAlign: 'left',
    zIndex: 2,
    background: 'linear-gradient(to right, rgba(30, 60, 114, 0.95) 0%, rgba(42, 82, 152, 0.8) 50%, rgba(42, 82, 152, 0.4) 100%)',
    padding: '60px',
    borderRadius: '12px',
    backdropFilter: 'blur(0.5px)',
  },
  title: {
    fontSize: '56px',
    margin: '0',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '28px',
    margin: '15px 0 25px',
    opacity: '0.9',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.8',
    margin: '0 0 40px 0',
  },
  buttons: {
    display: 'flex',
    gap: '25px',
  },
  getStartedButton: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    border: 'none',
    padding: '15px 35px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(74,144,226,0.3)',
    '&:hover': {
      backgroundColor: '#357abd',
      transform: 'translateY(-2px)',
    }
  },
  exploreButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #4a90e2',
    padding: '15px 35px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: 'rgba(74,144,226,0.1)',
    }
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#4a90e2',
    letterSpacing: '1px',
  },
  seeMoreButton: {
    backgroundColor: 'transparent',
    color: '#4a90e2',
    border: '2px solid #4a90e2',
    padding: '10px 25px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#4a90e2',
      color: '#fff',
    }
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '50px',
    padding: '20px 0',
  },
  newsCard: {
    background: 'linear-gradient(135deg, #2a5298, #4a90e2)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px 12px 0 0',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '15px',
    color: '#fff',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  loading: {
    textAlign: 'center',
    fontSize: '20px',
    padding: '40px',
    color: '#4a90e2',
  }
};

export default HomePage;