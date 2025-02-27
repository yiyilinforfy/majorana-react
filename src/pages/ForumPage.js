import React, { useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import { get } from "@/utils/api";

function ForumPage() {
  const iframeRef = useRef(null);

  // 动态调整 iframe 高度（可选，备用方案）
  useEffect(() => {
    const adjustIframeHeight = () => {
      const windowHeight = window.innerHeight;
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0; // 获取 Footer 高度
      const iframeHeight = windowHeight - footerHeight;
      if (iframeRef.current) {
        iframeRef.current.style.height = `${iframeHeight}px`;
      }
    };

    // 初次加载时调整高度
    adjustIframeHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', adjustIframeHeight);
    
    // 清理监听器
    return () => window.removeEventListener('resize', adjustIframeHeight);
  }, []);

  return (
    <div style={styles.container}>
      <iframe
        ref={iframeRef}
        src="http://192.168.1.188:4567/recent"
        width="100%"
        frameBorder="0"
        style={styles.iframe}
      />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh", // 确保容器至少占满视口高度
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)",
    position: "relative",
    display: "flex", // 使用 Flexbox
    flexDirection: "column", // 垂直排列
  },
  iframe: {
    width: "100%",
    flex: "1 1 auto", // 让 iframe 自动填充剩余空间
    border: "none", // 替代 frameBorder="0"
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#4a90e2",
    letterSpacing: "1px",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
  },
};

export default ForumPage;