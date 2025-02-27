import React, { useState } from 'react';
import '@/style/NewsResult.css';

function NewsResult({ article }) {
  const [imageError, setImageError] = useState(false);

  return (
    <li className="news-item">
      <div className="news-card">
        <div className="image-container">
          <img 
            src={imageError ? '/defaultNews.jpg' : article.image || '/defaultNews.jpg'} 
            alt={article.title}
            onError={() => setImageError(true)}
          />
        </div>
        <div className="content">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="title"
          >
            {article.title}
          </a>
          
          <p className="description">
            {article.summary || article.description || '无摘要'}
          </p>
          
          <div className="meta">
            {article.author && (
              <span className="author">
                <i className="fas fa-user"></i> {article.author}
              </span>
            )}
            {article.publishedAt && (
              <span className="date">
                <i className="far fa-clock"></i>
                {new Date(article.publishedAt).toLocaleDateString('zh-CN')}
              </span>
            )}
            {article.category && article.category.length > 0 && (
              <span className="categories">
                <i className="fas fa-tags"></i>
                {article.category.join(', ')}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default NewsResult;