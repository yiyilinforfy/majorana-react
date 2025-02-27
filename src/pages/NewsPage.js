import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";
import NewsResult from "../components/NewsResult";
import Footer from "../components/Footer";
import "@/style/NewsPage.css"; // 假设保留外部CSS用于动画
import { get } from "../utils/api";

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
      const response = await get(
        `/api/news?page=${currentPage}&limit=${itemsPerPage}`
      );
      const { news, totalPages, totalNews } = response;
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
      const response = await get(
        `/api/news/search?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      setSearchResults(response.news);
    } catch (error) {
      console.error("Error searching news:", error);
    }
    setSearching(false);
  };

  return (
    <div>
       <div style={styles.container}>
      <div style={styles.newsContent}>
        <div style={styles.newsHeader}>
          <h1 style={styles.headerTitle}>Latest Quantum Computing News</h1>
          <p style={styles.subtitle}>
            Exploring the Frontiers of Quantum Computing
          </p>
          <button
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
          <div style={styles.searchOverlay}>
            <div style={styles.searchDialog}>
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
                        {searchResults.map((article) => (
                          <NewsResult key={article.url} article={article} />
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
          <div style={styles.loadingContainer}>
            <div style={styles.loadingSpinner}></div>
            <p style={styles.loadingText}>Loading news...</p>
          </div>
        ) : (
          <>
            <ul style={styles.newsList}>
              {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
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

              <div style={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
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
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  ...styles.pageButton,
                  ...(currentPage === totalPages ? styles.disabledButton : {}),
                }}
              >
                Next
              </button>
            </div>

            <div style={styles.paginationInfo}>
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, totalNews)} of {totalNews}{" "}
              results
            </div>
          </>
        )}
      </div>
      
    </div>
    <Footer />
    </div>
   
  );
}

const styles = {
  container: {
    color: "#333", // 深灰色文字，适合白底
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px",
    background: "#fff", // 白色背景
    position: "relative",
  },
  newsContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0px 20px",
  },
  newsHeader: {
    marginBottom: "40px",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#2a5bd7", // 蓝色标题，与Resources一致
    letterSpacing: "1px",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666", // 灰色副标题，与Resources一致
    margin: "0 0 20px 0",
  },
  searchButton: {
    backgroundColor: "#2a5bd7", // 蓝色按钮
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#1e429f", // 深蓝色悬停
      transform: "translateY(-2px)",
    },
  },
  currentPageIndicator: {
    textAlign: "center",
    fontSize: "18px",
    color: "#666",
    margin: "20px 0",
  },
  searchOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 半透明遮罩
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  searchDialog: {
    background: "#f9f9f9", // 浅灰色背景，与Resources卡片一致
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
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
    color: "#333", // 深灰色标题
    margin: 0,
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#666",
    cursor: "pointer",
    padding: "0 10px",
    "&:hover": {
      color: "#2a5bd7", // 蓝色悬停
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
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    outline: "none",
    "&:focus": {
      borderColor: "#2a5bd7",
      boxShadow: "0 0 5px rgba(42,91,215,0.3)",
    },
  },
  searchSubmitButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#1e429f",
    },
  },
  loadingContainer: {
    textAlign: "center",
    padding: "20px",
  },
  loadingSpinner: {
    width: "30px",
    height: "30px",
    border: "3px solid #2a5bd7",
    borderTop: "3px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto 10px",
  },
  loadingText: {
    fontSize: "16px",
    color: "#2a5bd7",
  },
  searchResults: {
    maxHeight: "70vh",
    overflowY: "auto",
  },
  newsList: {
    listStyle: "none",
    padding: "0 50px",
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
    color: "#2a5bd7",
    border: "2px solid #2a5bd7",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#2a5bd7",
      color: "#fff",
    },
  },
  disabledButton: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  pageNumbers: {
    display: "flex",
    gap: "10px",
  },
  pageNumber: {
    backgroundColor: "transparent",
    color: "#2a5bd7",
    border: "1px solid #2a5bd7",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "#2a5bd7",
      color: "#fff",
    },
  },
  activePageNumber: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    borderColor: "#2a5bd7",
  },
  paginationInfo: {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginTop: "10px",
  },
  noResults: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666",
    marginTop: "20px",
  },
};

// 动画样式需要在外部CSS文件中定义
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default NewsPage;