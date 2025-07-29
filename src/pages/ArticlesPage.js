import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import NewsResult from "../components/NewsResult";
import "@/style/NewsPage.css";
import { get } from "../utils/api";
import { motion } from "framer-motion";

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [jumpToPage, setJumpToPage] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    fetchNews();
    window.scrollTo(0, 0);
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const response = await get(
        `/api/news?page=${currentPage}&limit=${itemsPerPage}`
      );
      const { news, totalPages, totalNews } = response;
      setArticles(news);
      setTotalPages(totalPages);
      setTotalNews(totalNews);
      setLoading(false);
    } catch (error) {
      if (error.response?.status === 304) {
        console.log("✅ News not modified, using cached data.");
      } else {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setLoading(true);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    try {
      const response = await get(
        `/api/news/search?q=${encodeURIComponent(searchQuery)}`
      );
      setSearchResults(response.news);
    } catch (error) {
      console.error("Error searching news:", error);
    }
    setSearching(false);
  };

  const handleJumpToPage = () => {
    const pageNum = parseInt(jumpToPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      handlePageChange(pageNum);
      setJumpToPage("");
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        style={{
          ...styles.pageNumber,
          ...(currentPage === 1 ? styles.activePageNumber : {}),
        }}
      >
        1
      </button>
    );

    if (totalPages > 1 && currentPage > 3) {
      pages.push(
        <span key="ellipsis-start" style={{ padding: "8px 15px", color: "#666" }}>
          ...
        </span>
      );
    }

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            ...styles.pageNumber,
            ...(currentPage === i ? styles.activePageNumber : {}),
          }}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 1 && currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis-end" style={{ padding: "8px 15px", color: "#666" }}>
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          style={{
            ...styles.pageNumber,
            ...(currentPage === totalPages ? styles.activePageNumber : {}),
          }}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.mainTitle}>Latest Quantum Computing Articles</h1>
          <p style={styles.subtitle}>
            Exploring the Frontiers of Quantum Computing
          </p>
          {/* <div style={styles.scrollIndicator}>
            <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
          </div> */}
        </motion.div>
        {/* <div style={styles.gradientOverlay}></div> */}
      </div>

      <div style={styles.content}>
        <div style={styles.searchSection}>
          <motion.button
            onClick={() => setShowSearchDialog(true)}
            style={styles.searchButton}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(42, 91, 215, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Search News
          </motion.button>
        </div>

        {showSearchDialog && (
          <motion.div
            style={styles.searchOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={styles.searchDialog}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div style={styles.searchHeader}>
                <h2 style={styles.searchTitle}>Search News</h2>
                <button
                  onClick={() => {
                    setShowSearchDialog(false);
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  style={styles.closeButton}
                >
                  ×
                </button>
              </div>

              <div style={styles.searchInputContainer}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter keywords to search news..."
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  style={styles.searchInput}
                />
                <button onClick={handleSearch} style={styles.searchSubmitButton}>
                  Search
                </button>
              </div>

              {searching ? (
                <div style={styles.loadingContainer}>
                  <div style={styles.loadingSpinner}></div>
                  <p style={styles.loadingText}>Searching...</p>
                </div>
              ) : (
                <div style={styles.searchResults}>
                  {searchResults.length > 0 ? (
                    <>
                      <p style={styles.paginationInfo}>
                        Found {searchResults.length} results
                      </p>
                      <ul style={styles.newsList}>
                        {searchResults.map((article, index) => (
                          <motion.div
                            key={article.url}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <NewsResult article={article} />
                          </motion.div>
                        ))}
                      </ul>
                    </>
                  ) : searchQuery ? (
                    <p style={styles.noResults}></p>
                  ) : null}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {loading ? (
          <div style={styles.loadingContainer}>
            <div style={styles.loadingSpinner}></div>
            <p style={styles.loadingText}>Loading news...</p>
          </div>
        ) : (
          <div style={styles.newsSection}>
            <ul style={styles.newsList}>
              {articles.map((article, index) => (
                <motion.div
                  key={article.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsItem article={article} />
                </motion.div>
              ))}
            </ul>

            <div style={styles.pagination}>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{
                  ...styles.pageButton,
                  ...(currentPage === 1 ? styles.disabledButton : {}),
                }}
              >
                Previous
              </button>

              <div style={styles.pageNumbers}>{renderPageNumbers()}</div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  ...styles.pageButton,
                  ...(currentPage === totalPages ? styles.disabledButton : {}),
                }}
              >
                Next
              </button>

              <div style={styles.jumpToContainer}>
                <input
                  type="number"
                  value={jumpToPage}
                  onChange={(e) => setJumpToPage(e.target.value)}
                  placeholder="Go to..."
                  min="1"
                  max={totalPages}
                  style={styles.jumpToInput}
                  onKeyPress={(e) => e.key === "Enter" && handleJumpToPage()}
                />
                <button
                  onClick={handleJumpToPage}
                  style={styles.jumpToButton}
                >
                  Go
                </button>
              </div>
            </div>

            <div style={styles.paginationInfo}>
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, totalNews)} of {totalNews}{" "}
              results
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "60vh",
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/background/articles.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.5s ease-in-out", // Smooth background transition
  },
  header: {
    // backgroundImage: "url('/background/articles.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "clamp(40vh, 60vh, 70vh)", // Responsive hero height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    padding: "clamp(1rem, 5vw, 2rem)", // Responsive padding
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "150px",
    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
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
    opacity: 0.9,
    color: "#ffffff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "clamp(1rem, 5vh, 2.5rem)", // Responsive bottom position
    animation: "bounce 2s infinite",
  },
  scrollArrow: {
    fontSize: "clamp(1rem, 3vw, 1.5rem)", // Responsive arrow size
    color: "#fff",
  },
  content: {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 150px)", // Smooth transition to white
    padding: "clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 5vw, 1.5rem)", // Responsive padding
    transition: "background 0.5s ease-in-out", // Smooth background transition
  },
  searchSection: {
    textAlign: "center",
    marginBottom: "clamp(1.5rem, 5vw, 2rem)", // Responsive margin
  },
  searchButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem)", // Responsive padding
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
  newsSection: {
    maxWidth: "clamp(800px, 90vw, 1000px)", // Responsive container width
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "clamp(1.5rem, 5vw, 2rem)", // Responsive padding
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  newsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 3vw, 1.5rem)", // Responsive gap
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "clamp(0.8rem, 2vw, 1rem)", // Responsive gap
    marginTop: "clamp(1.5rem, 5vw, 2rem)", // Responsive margin
    flexWrap: "wrap",
  },
  pageButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem)", // Responsive padding
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
  disabledButton: {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
  pageNumber: {
    backgroundColor: "#fff",
    color: "#1976d2",
    border: "2px solid #1976d2",
    padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#fff",
    },
  },
  activePageNumber: {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
  jumpToContainer: {
    display: "flex",
    gap: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive gap
    alignItems: "center",
  },
  jumpToInput: {
    width: "clamp(50px, 10vw, 70px)", // Responsive width
    padding: "clamp(0.4rem, 1vw, 0.6rem)", // Responsive padding
    borderRadius: "8px",
    border: "2px solid #1976d2",
    textAlign: "center",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
  },
  jumpToButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
  searchOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  searchDialog: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "clamp(1rem, 3vw, 1.5rem)", // Responsive padding
    width: "90%",
    maxWidth: "clamp(800px, 90vw, 1000px)", // Responsive width
    maxHeight: "80vh",
    overflow: "auto",
    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
  },
  searchHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  searchTitle: {
    margin: 0,
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)", // Responsive font size
    fontWeight: 600,
    color: "#2c3e50",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)", // Responsive font size
    color: "#666",
    cursor: "pointer",
    padding: "5px",
    "&:hover": {
      color: "#1976d2",
    },
  },
  searchInputContainer: {
    display: "flex",
    gap: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive gap
    marginBottom: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  searchInput: {
    flex: 1,
    padding: "clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1rem)", // Responsive padding
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    border: "2px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    color: "#2c3e50",
  },
  searchSubmitButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem)", // Responsive padding
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
  loadingContainer: {
    textAlign: "center",
    padding: "clamp(1rem, 3vw, 1.5rem)", // Responsive padding
  },
  loadingSpinner: {
    width: "clamp(1.5rem, 5vw, 2rem)", // Responsive spinner size
    height: "clamp(1.5rem, 5vw, 2rem)", // Responsive spinner size
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  },
  loadingText: {
    marginTop: "clamp(0.5rem, 1.5vw, 0.8rem)", // Responsive margin
    color: "#666",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
  },
  searchResults: {
    marginTop: "clamp(0.8rem, 2vw, 1rem)", // Responsive margin
  },
  paginationInfo: {
    textAlign: "center",
    color: "#666",
    margin: "clamp(1rem, 3vw, 1.5rem) 0", // Responsive margin
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
  },
  noResults: {
    textAlign: "center",
    color: "#666",
    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", // Responsive font size
    padding: "clamp(1rem, 3vw, 1.5rem)", // Responsive padding
  },
};

export default NewsPage;