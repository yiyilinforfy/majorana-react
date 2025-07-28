import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import NewsResult from "../components/NewsResult";
import "@/style/NewsPage.css";
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
      // 如果是 304，可能需要自己处理（某些请求库不会自动识别）
      if (error.response?.status === 304) {
        console.log("✅ News not modified, using cached data.");
        // 可以保留旧数据不更新 UI
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
    <div>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Latest Quantum Computing Articles</h1>
        <p style={styles.subtitle}>
          Exploring the Frontiers of Quantum Computing
        </p>
        <div style={styles.scrollIndicator}>
          <i className="fas fa-chevron-down" style={styles.scrollArrow}></i>
        </div>
        <div style={styles.gradientOverlay}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.searchSection}>
          <button
            onClick={() => setShowSearchDialog(true)}
            style={styles.searchButton}
          >
            Search News
          </button>
        </div>
{/* 
        <div style={styles.currentPageIndicator}>
          Page {currentPage} of {totalPages}
        </div> */}

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
          <div style={styles.newsSection}>
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
  header: {
    backgroundImage: "url('/background/articles.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh", // 减小高度
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    position: "relative",
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
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  subtitle: {
    fontSize: "24px",
    marginBottom: "0px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "40px",
    animation: "bounce 2s infinite",
  },
  scrollArrow: {
    fontSize: "24px",
    color: "#fff",
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px 20px",
  },
  searchSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  searchButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform 0.2s",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  currentPageIndicator: {
    textAlign: "center",
    fontSize: "20px",
    color: "#333",
    margin: "20px 0",
    fontWeight: "500",
  },
  newsSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  newsList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  pageButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  pageNumber: {
    backgroundColor: "#fff",
    color: "#2a5bd7",
    border: "2px solid #2a5bd7",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  activePageNumber: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
  },
  jumpToContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  jumpToInput: {
    width: "70px",
    padding: "8px",
    borderRadius: "20px",
    border: "2px solid #2a5bd7",
    textAlign: "center",
    fontSize: "14px",
  },
  jumpToButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
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
    borderRadius: "20px",
    padding: "30px",
    width: "90%",
    maxWidth: "1200px",
    maxHeight: "80vh",
    overflow: "auto",
  },
  searchHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchTitle: {
    margin: 0,
    fontSize: "24px",
    color: "#333",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#666",
    cursor: "pointer",
    padding: "5px",
  },
  searchInputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  searchInput: {
    flex: 1,
    padding: "12px 20px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "25px",
    outline: "none",
  },
  searchSubmitButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
  },
  loadingContainer: {
    textAlign: "center",
    padding: "20px",
  },
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #2a5bd7",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  },
  loadingText: {
    marginTop: "10px",
    color: "#666",
    fontSize: "16px",
  },
  searchResults: {
    marginTop: "20px",
  },
  paginationInfo: {
    textAlign: "center",
    color: "#666",
    margin: "20px 0",
  },
  noResults: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
    padding: "20px",
  },
};

export default NewsPage;