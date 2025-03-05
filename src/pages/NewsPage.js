import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import NewsResult from "../components/NewsResult";
import Footer from "../components/Footer";
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
  const [jumpToPage, setJumpToPage] = useState(""); // 新增：跳转页数输入
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
      console.error("Error fetching news:", error);
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
      setJumpToPage(""); // 清空输入框
    }
  };

  // 生成分页数字
  const renderPageNumbers = () => {
    const pages = [];

    // 始终显示第1页
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

    // 如果总页数大于1且当前页大于3，显示前面的省略号
    if (totalPages > 1 && currentPage > 3) {
      pages.push(
        <span key="ellipsis-start" style={{ padding: "8px 15px", color: "#666" }}>
          ...
        </span>
      );
    }

    // 当前页前两个和后一个
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

    // 如果总页数大于1且当前页小于totalPages-2，显示后面的省略号
    if (totalPages > 1 && currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis-end" style={{ padding: "8px 15px", color: "#666" }}>
          ...
        </span>
      );
    }

    // 始终显示最后一页（如果总页数大于1）
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

                {/* 新增：跳转输入框 */}
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
    color: "#333",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)",
  },
  newsContent: {
    // maxWidth: "1400px",
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
    color: "#2a5bd7",
    letterSpacing: "1px",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    margin: "0 0 20px 0",
  },
  searchButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontWeight: "600",
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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  searchDialog: {
    background: "#f9f9f9",
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
    color: "#333",
    margin: 0,
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#666",
    cursor: "pointer",
    padding: "0 10px",
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
  // 新增：跳转输入框样式
  jumpToContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  jumpToInput: {
    width: "60px",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    textAlign: "center",
  },
  jumpToButton: {
    backgroundColor: "#2a5bd7",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default NewsPage;