import React, { useEffect, useRef, useState } from 'react';
import { get } from "@/utils/api";

function ForumPage() {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // 添加加载状态

  // 动态调整 iframe 高度
  useEffect(() => {
    const adjustIframeHeight = () => {
      const windowHeight = window.innerHeight;
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
      const iframeHeight = windowHeight - footerHeight;
      if (iframeRef.current) {
        iframeRef.current.style.height = `${iframeHeight}px`;
      }
    };

    adjustIframeHeight();
    window.addEventListener('resize', adjustIframeHeight);

    // Cleanup
    return () => window.removeEventListener('resize', adjustIframeHeight);
  }, []);

  // 处理 iframe 加载完成事件
  const handleIframeLoad = () => {
    setIsLoading(false); // iframe 加载完成后隐藏 Loading
  };

  return (
    <div style={styles.container}>
      {/* Loading 动画 */}
      {isLoading && (
        <div style={styles.loadingOverlay}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading Forum Data...</p>
        </div>
      )}

      {/* iframe */}
      <iframe
        ref={iframeRef}
        src="https://forum.majorana.fun/recent"
        width="100%"
        frameBorder="0"
        style={{ ...styles.iframe, visibility: isLoading ? 'hidden' : 'visible' }} // 加载时隐藏 iframe
        onLoad={handleIframeLoad} // 监听加载完成事件
      />
    </div>
  );
}

const styles = {
  container: {
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    // background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  iframe: {
    width: "100%",
    flex: "1 1 auto",
    border: "none",
  },
  // Loading 样式
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(13, 27, 42, 0.9)", // 半透明背景
    zIndex: 10, // 确保覆盖 iframe
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #4a90e2",
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite", // 旋转动画
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#4a90e2",
    // textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
  },
};

// 添加 CSS 关键帧动画
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default ForumPage;