import React from 'react';
import { Link } from 'react-router-dom'; // 移除 useState, useEffect, useAuth, axios, useNavigate，因为不需要登录逻辑

function Header() {
  return (
    <nav style={styles.nav}>
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
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// 内联样式
const styles = {
  nav: {
    backgroundColor: '#000', // 黑色背景，与 UI 图一致
    padding: '10px 0', // 上下 10px，左右 0
    position: 'sticky',
    top: '0',
    zIndex: '1000', // 确保导航固定在顶部
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end', // 右对齐，与 UI 图匹配
    margin: '0',
    padding: '0 20px', // 左右间距 20px
    alignItems: 'center',
  },
  navItem: {
    margin: '0 15px', // 导航项间距
    fontSize: '14px', // 文字大小
    cursor: 'pointer',
  },
  link: {
    color: '#fff', // 白色文字
    textDecoration: 'none', // 无下划线
    textTransform: 'uppercase', // 大写，与 UI 图一致
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // 现代无衬线字体
    transition: 'color 0.3s', // 悬停动画
  },
  linkHover: { // 悬停效果
    color: '#4a90e2', // 蓝色高亮，与 UI 图按钮颜色一致
  },
};

export default Header;