import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../components/NewsItem';
import '@/style/NewsPage.css';

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/news?page=${currentPage}&limit=${itemsPerPage}`);
        console.log('Fetched news:', response);
        const { news, totalPages, totalNews } = response.data;
        setArticles(news);
        setTotalPages(totalPages);
        setTotalNews(totalNews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };
    fetchNews();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setSearching(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/news/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data.news);
    } catch (error) {
      console.error('Error searching news:', error);
    }
    setSearching(false);
  };

  return (
    <div className="news-page">
      <div className="news-content">
        <div className="news-header">
        <h1>Latest Quantum Computing News</h1>
        <p className="subtitle">Exploring the Frontiers of Quantum Computing</p>
        <button 
          className="search-button"
          onClick={() => setShowSearchDialog(true)}
        >
          Search News
        </button>
      </div>

      {showSearchDialog && (
        <div className="search-dialog-overlay">
          <div className="search-dialog">
            <div className="search-header">
              <h2>Search News</h2>
              <button 
                className="close-button"
                onClick={() => {
                  setShowSearchDialog(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="search-input-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter keywords to search news..."
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button onClick={handleSearch}>Search</button>
            </div>

            {searching ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Searching...</p>
              </div>
            ) : (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  <>
                    <p className="pagination-info">Found {searchResults.length} results</p>
                    <ul className="news-list">
                      {searchResults.map((article) => (
                        <NewsItem key={article.url} article={article} />
                      ))}
                    </ul>
                  </>
                ) : searchQuery ? (
                  <p className="no-results">No results found</p>
                ) : null}
              </div>
            )}
          </div>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading news...</p>
        </div>
      ) : (
        <>
          <ul className="news-list">
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </ul>

          <div className="pagination">
            <button 
              className="page-button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`page-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="page-button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
          
          <div className="pagination-info">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalNews)} of {totalNews} results
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default NewsPage;