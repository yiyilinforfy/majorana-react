import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 检查当前路由是否激活
  const isActive = (path) => location.pathname === path;

  // 移动端外部链接点击处理
  const handleExternalClick = (event, url) => {
    event.preventDefault();
    console.log(`Opening external URL: ${url}`);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setIsMobileMenuOpen(false), 100);
  };

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,212,255,0.1)] border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="/"
              className="flex items-center z-1000"
            >
              <img src="/logo.jpg" alt="Majorana Logo" className="h-9 w-auto" />
              <span
                className="ml-3 text-2xl font-extrabold uppercase tracking-wider font-['Orbitron']"
                style={{
                  background: "linear-gradient(45deg, #00d4ff, #7b2cbf)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 10px rgba(0, 212, 255, 0.4)",
                }}
              >
                Majorana Lab
              </span>
            </a>

                      {/* PC 端导航 */}
            <ul className="hidden md:flex ml-10 space-x-6 items-center">
              {/* Learn 菜单 */}
              <li className="relative group">
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200">
                  Learn
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300">
                    ▼
                  </span>
                </span>
                <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 hidden group-hover:block">
                  <a
                    href="/intro"
                    className={`block w-full z-1000 text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                      isActive("/intro") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                    }`}
                  >
                    What is Majorana?
                  </a>
                  <a
                    href="/resources"
                    className={`block w-full z-1000 text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                      isActive("/resources") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                    }`}
                  >
                    Get-Started Resources
                  </a>
                </div>
              </li>
              {/* Community 菜单 */}
              <li className="relative group">
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200">
                  Community
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300">
                    ▼
                  </span>
                </span>
                <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 hidden group-hover:block">
                  <button
                  type="button"
                    onClick={(e) =>
                      handleExternalClick(
                        e,
                        "https://forum.zebi.ai/category/5/majorana-quantum-computing"
                      )
                    }
                    className="block z-1000 w-full text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Majorana Lab Forum
                    <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                  </button>
                  <button
                  type="button"
                    onClick={(e) => handleExternalClick(e, "https://x.com/halotss")}
                    className="block w-full z-1000 text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Our Twitter
                    <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                  </button>
                </div>
              </li>
              {/* News 菜单 */}
              <li className="relative group">
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200">
                  News
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300">
                    ▼
                  </span>
                </span>
                <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 hidden group-hover:block">
                  <a
                    href="/news"
                    className={`block w-full z-1000 text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                      isActive("/news") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                    }`}
                  >
                    Latest News
                  </a>
                  <a
                    href="/articles"
                    className={`block w-full z-1000 text-left px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                      isActive("/articles") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                    }`}
                  >
                    Research Articles
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* 汉堡菜单按钮（移动端） */}
          <div className="md:hidden">
            <button
            type="button"
              onClick={toggleMobileMenu}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none z-1000"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>


          {/* Twitter 图标（PC 端） */}
          <button
          type="button"
            onClick={(e) => handleExternalClick(e, "https://x.com/halotss")}
            className="hidden md:flex items-center ml-5 z-1000"
            title="Follow us on X (Twitter)"
          >
            <i className="fa-brands fa-x-twitter text-indigo-200 text-2xl hover:text-cyan-300 hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* 移动端导航 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 py-4">
              <li>
                <a
                  type="button"
                  href="/intro"
                  className={`block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200 ${
                    isActive("/intro") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                  }`}
                >
                  What is Majorana?
                </a>
                <a
                  href="/resources"
                  className={`block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200 ${
                    isActive("/resources") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                  }`}
                >
                  Get-Started Resources
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className={`block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200 ${
                    isActive("/news") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                  }`}
                >
                  Latest News
                </a>
                <a
                  href="/articles"
                  className={`block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200 ${
                    isActive("/articles") ? "bg-cyan-500/25 text-cyan-300 font-bold" : ""
                  }`}
                >
                  Research Articles
                </a>
              </li>
              <li>
                <button
                type="button"
                  onClick={(e) =>
                    handleExternalClick(
                      e,
                      "https://forum.zebi.ai/category/5/majorana-quantum-computing"
                    )
                  }
                  className="block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200"
                >
                  Majorana Lab Forum
                  <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                </button>
                <button
                type="button"
                  onClick={(e) => handleExternalClick(e, "https://x.com/halotss")}
                  className="block w-full z-1000 text-left px-4 py-2 text-white text-lg font-semibold hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors duration-200"
                >
                  Our Twitter
                  <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;