/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-24 22:46:23
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:46:29
 * @FilePath: \majorana-react\src\pages\404Page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/pages/NotFoundPage.js
import React from "react";

function NotFoundPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404 - Page Not Found</h1>
        <p style={styles.subtitle}>
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <a href="/" style={styles.homeLink}>
          Return to Home
        </a>
      </div>
    </div>
  );
}

// 内联样式，保持与HomePage的UI风格一致
const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "50vh",
    padding: "40px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: "800px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#4a90e2", // 蓝色标题，与HomePage一致
    letterSpacing: "2px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "black", // 较浅的白色，与HomePage描述一致
    marginBottom: "30px",
    opacity: 0.9,
  },
  homeLink: {
    color: "#fff",
    backgroundColor: "#4a90e2", // 蓝色按钮，与HomePage一致
    padding: "12px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(74,144,226,0.3)", // 按钮阴影，与HomePage一致
    "&:hover": {
      backgroundColor: "#357abd", // 深蓝色悬停，与HomePage一致
      transform: "translateY(-2px)",
    },
  },
};

export default NotFoundPage;
