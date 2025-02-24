import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";
import Footer from "../components/Footer";
import "@/style/NewsPage.css";

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
  const itemsPerPage = 10;

  useEffect(() => {
    fetchNews();
    window.scrollTo(0, 0); // 每次页面变化时滚动到顶部
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/news?page=${currentPage}&limit=${itemsPerPage}`
      );
      const { news, totalPages, totalNews } = response.data;
      setArticles(news);
      setTotalPages(totalPages);
      setTotalNews(totalNews);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setSearching(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/news/search?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      setSearchResults(response.data.news);
    } catch (error) {
      console.error("Error searching news:", error);
    }
    setSearching(false);
  };

  return (
    <div style={styles.container}>
      <div className="news-content">
        <div className="news-header" style={styles.newsHeader}>
          <h1 style={styles.headerTitle}>Latest Quantum Computing News</h1>
          <p style={styles.subtitle}>
            Exploring the Frontiers of Quantum Computing
          </p>
          <button
            className="search-button"
            onClick={() => setShowSearchDialog(true)}
            style={styles.searchButton}
          >
            Search News
          </button>
        </div>

        {/* Current Page Indicator */}
        <div style={styles.currentPageIndicator}>
          - Page {currentPage} of {totalPages} -
        </div>

        {showSearchDialog && (
          <div className="search-dialog-overlay" style={styles.searchOverlay}>
            <div className="search-dialog" style={styles.searchDialog}>
              <div className="search-header" style={styles.searchHeader}>
                <h2 style={styles.searchTitle}>Search News</h2>
                <button
                  className="close-button"
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

              <div
                className="search-input-container"
                style={styles.searchInputContainer}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter keywords to search news..."
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  style={styles.searchInput}
                />
                <button
                  onClick={handleSearch}
                  style={styles.searchSubmitButton}
                >
                  Search
                </button>
              </div>

              {searching ? (
                <div
                  className="loading-container"
                  style={styles.loadingContainer}
                >
                  <div
                    className="loading-spinner"
                    style={styles.loadingSpinner}
                  ></div>
                  <p style={styles.loadingText}>Searching...</p>
                </div>
              ) : (
                <div className="search-results" style={styles.searchResults}>
                  {searchResults.length > 0 ? (
                    <>
                      <p style={styles.paginationInfo}>
                        Found {searchResults.length} results
                      </p>
                      <ul className="news-list" style={styles.newsList}>
                        {searchResults.map((article) => (
                          <NewsItem key={article.url} article={article} />
                        ))}
                      </ul>
                    </>
                  ) : searchQuery ? (
                    <p style={styles.noResults}>No results found</p>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        )}

        {loading ? (
          <div className="loading-container" style={styles.loadingContainer}>
            <div
              className="loading-spinner"
              style={styles.loadingSpinner}
            ></div>
            <p style={styles.loadingText}>Loading news...</p>
          </div>
        ) : (
          <>
            <ul className="news-list" style={styles.newsList}>
              {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
              ))}
            </ul>

            <div className="pagination" style={styles.pagination}>
              <button
                className="page-button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={styles.pageButton}
              >
                Previous
              </button>

              <div className="page-numbers" style={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`page-number ${
                        currentPage === page ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                      style={{
                        ...styles.pageNumber,
                        ...(currentPage === page
                          ? styles.activePageNumber
                          : {}),
                      }}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                className="page-button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={styles.pageButton}
              >
                Next
              </button>
            </div>

            <div className="pagination-info" style={styles.paginationInfo}>
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, totalNews)} of {totalNews}{" "}
              results
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

// 内联样式，参照HomePage的UI风格
const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)", // 与HomePage一致的深色渐变背景
    position: "relative",
  },
  newsContent: {
    maxWidth: "1400px", // 与HomePage的content宽度一致
    margin: "0 auto",
  },
  newsHeader: {
    marginBottom: "40px",
    textAlign: "center", // 标题居中显示
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#4a90e2", // 蓝色标题，与HomePage一致
    letterSpacing: "1px",
    margin: "0 0 10px 0",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // 与HomePage标题一致
  },
  subtitle: {
    fontSize: "18px",
    color: "#e0e0e0", // 较浅的白色，与HomePage描述一致
    margin: "0 0 20px 0",
    opacity: 0.9,
  },
  searchButton: {
    backgroundColor: "#4a90e2", // 蓝色按钮，与HomePage一致
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(74,144,226,0.3)", // 按钮阴影，与HomePage一致
    "&:hover": {
      backgroundColor: "#357abd", // 深蓝色悬停，与HomePage按钮一致
      transform: "translateY(-2px)",
    },
  },
  currentPageIndicator: {
    textAlign: "center",
    fontSize: "18px",
    color: "#e0e0e0",
    margin: "20px 0",
  },
  searchOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 半透明遮罩，与科技感一致
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  searchDialog: {
    background: "#1b263b", // 深色背景，与HomePage一致
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    width: "85%",
    padding: "20px",
    position: "relative",
  },
  searchHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffff",
    margin: 0,
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
    padding: "0 10px",
    "&:hover": {
      color: "#4a90e2",
    },
  },
  searchInputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  searchInput: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #4a90e2",
    backgroundColor: "#0d1b2a",
    color: "#fff",
    outline: "none",
    "&:focus": {
      borderColor: "#357abd",
      boxShadow: "0 0 5px rgba(74,144,226,0.5)",
    },
  },
  searchSubmitButton: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#357abd",
    },
  },
  loadingContainer: {
    textAlign: "center",
    padding: "20px",
  },
  loadingSpinner: {
    width: "30px",
    height: "30px",
    border: "3px solid #4a90e2",
    borderTop: "3px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto 10px",
  },
  loadingText: {
    fontSize: "16px",
    color: "#4a90e2",
  },
  searchResults: {
    maxHeight: "70vh",
    overflowY: "auto",
  },
  newsList: {
    listStyle: "none",
    padding: '0 50px',
    // width: "100%", // 占用全宽
    marginBottom: "30px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  pageButton: {
    backgroundColor: "transparent",
    color: "#4a90e2",
    border: "2px solid #4a90e2",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#4a90e2",
      color: "#fff",
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  pageNumbers: {
    display: "flex",
    gap: "10px",
  },
  pageNumber: {
    backgroundColor: "transparent",
    color: "#4a90e2",
    border: "1px solid #4a90e2",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#4a90e2",
      color: "#fff",
    },
  },
  activePageNumber: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    borderColor: "#4a90e2",
  },
  paginationInfo: {
    textAlign: "center",
    fontSize: "14px",
    color: "#e0e0e0",
    marginTop: "10px",
  },
  noResults: {
    textAlign: "center",
    fontSize: "16px",
    color: "#e0e0e0",
    marginTop: "20px",
  },
};

// 动画样式（内联CSS无法直接写动画，需要在CSS文件中定义）
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default NewsPage;
