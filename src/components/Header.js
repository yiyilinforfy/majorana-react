/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-21 19:58:55
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:15:42
 * @FilePath: \majorana-react\src\components\Header.js
 * @Description: Header component with logo on the left and optimized UI
 */
import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoWrapper}>
            <img src="/logo.jpg" alt="Majorana Logo" style={styles.logo} />
            <span style={styles.siteName}>MAJORANA.FUN</span>
          </div>
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            HOME
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/news" style={styles.link}>
            NEWS
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/forum" style={styles.link}>
            FORUM
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/resources" style={styles.link}>
            RESOURCES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: "rgb(243.9, 244.2, 244.8)", // 白色背景，与页面一致
    padding: "20px 40px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // 轻微阴影，增加层次感
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexShrink: 0,
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "30px", // 增大logo以匹配导航高度
    width: "auto",
    display: "block",
  },
  siteName: {
    color: "black", // 蓝色，与主题一致
    fontSize: "22px", // 增大字体，与导航一致
    fontWeight: "700", // 加粗，与导航一致
    marginLeft: "12px",
    textTransform: "uppercase", // 大写，与导航一致
    letterSpacing: "1px", // 增加字母间距，提升现代感
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    gap: "30px", // 减小间距，紧凑布局
  },
  navItem: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#2a5bd7", // 蓝色，与网站名称一致
    fontSize: "18px", // 增大字体，更显眼
    fontWeight: "700", // 加粗，突出导航
    padding: "8px 12px", // 增加点击区域
    borderRadius: "6px", // 轻微圆角
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "#e6f0ff", // 浅蓝色背景悬停效果
      color: "#1e429f", // 深蓝色文字
    },
  },
};

export default Header;