/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-24 22:20:16
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:23:53
 * @FilePath: \majorana-react\src\components\Footer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.copyright}>
          <p style={styles.copyrightText}>
            © 2025 MAJORANA.FUN. All rights reserved.
          </p>
        </div>
        <div style={styles.links}>
          <Link to="/contact" style={styles.footerLink}>
            Contact Us
          </Link>
          {/* <a href="/privacy" style={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms" style={styles.footerLink}>
            Terms of Service
          </a> */}
        </div>
      </div>
    </footer>
  );
}

// 内联样式
const styles = {
  footer: {
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)", // 与HomePage和Header一致的渐变背景
    color: "#fff",
    padding: "20px 40px", // 与Header和HomePage的间距一致
    borderTop: "1px solid rgba(74, 144, 226, 0.2)", // 细蓝色边框，与主题匹配
    boxShadow: "0 -4px 15px rgba(0,0,0,0.3)", // 底部阴影，与Header类似
    position: "relative", // 确保页面底部固定，但不遮挡内容
    zIndex: 100, // 低于Header的1000，但高于粒子背景
  },
  footerContent: {
    maxWidth: "1400px", // 与HomePage的content宽度一致
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  copyright: {
    fontSize: "14px",
    opacity: 0.8,
  },
  copyrightText: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#4a90e2", // 蓝色高亮，与Header和HomePage一致
    },
  },
};

export default Footer;
