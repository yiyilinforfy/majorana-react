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
            {article.abstract || 'No Content'}
          </p>
          
          <div className="meta">
            {article.authors?.length > 0 && (
              <span className="author">
                <i className="fas fa-user" style={{ color: "#1a73e8", marginRight: "5px" }}></i>
                {article.authors
                  .slice(0, 5)
                  .map((a) => a)
                  .join(", ")}
                {article.authors.length > 5 && " et al."}
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