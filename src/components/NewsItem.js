import React from "react";

function NewsItem({ article }) {
  return (
    <li style={{ marginBottom: "20px" }}>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#43a047" }}
      >
        {article.title}
      </a>
      <p>{article.summary || article.description || "无摘要"}</p>
    </li>
  );
}

export default NewsItem;
