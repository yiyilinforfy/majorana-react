import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../components/NewsItem';

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>最新量子计算新闻</h2>
      {loading ? (
        <p>加载中...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {articles.map((article) => (
            <NewsItem key={article.url} article={article} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsPage;