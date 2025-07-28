import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,212,255,0.1)] border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          <div className="flex justify-between"> 
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Majorana Logo"
                  className="h-9 w-auto"
                />
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
              </Link>
            </div>

             {/* Desktop Navigation */}
            <ul className="hidden md:flex ml-10 space-x-6 items-center">
              {/* Learn Menu */}
              <li
                className="relative group"
                onMouseEnter={() => handleDropdownToggle('learn')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300">
                  Learn
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300 transition-transform duration-300">
                    ▼
                  </span>
                </span>
                {activeDropdown === 'learn' && (
                  <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 animate-fadeIn">
                    <Link
                      to="/intro"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/intro') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                    >
                      What is Majorana?
                    </Link>
                    <Link
                      to="/resources"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/resources') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                    >
                      Get-Started Resources
                    </Link>
                  </div>
                )}
              </li>

              {/* Community Menu */}
              <li
                className="relative group"
                onMouseEnter={() => handleDropdownToggle('community')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300">
                  Community
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300 transition-transform duration-300">
                    ▼
                  </span>
                </span>
                {activeDropdown === 'community' && (
                  <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 animate-fadeIn">
                    <a
                      href="https://forum.zebi.ai/category/5/majorana-quantum-computing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                    >
                      Majorana Lab Forum
                      <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                    </a>
                    <a
                      href="https://x.com/halotss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                    >
                      Our Twitter
                      <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                    </a>
                  </div>
                )}
              </li>

              {/* News Menu */}
              <li
                className="relative group"
                onMouseEnter={() => handleDropdownToggle('news')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-white text-lg font-semibold flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300">
                  News
                  <span className="ml-1.5 text-xs text-indigo-200 group-hover:text-cyan-300 transition-transform duration-300">
                    ▼
                  </span>
                </span>
                {activeDropdown === 'news' && (
                  <div className="absolute top-full left-0 bg-gray-800/95 shadow-[0_6px_20px_rgba(0,212,255,0.2)] rounded-lg py-2 min-w-[220px] border border-cyan-500/20 animate-fadeIn">
                    <Link
                      to="/news"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/news') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                    >
                      Latest News
                    </Link>
                    <Link
                      to="/articles"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/articles') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                    >
                      Research Articles
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>


          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none"
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
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>


       

          {/* Twitter Icon for Desktop */}
          <a
            href="https://x.com/halotss"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center ml-5"
            title="Follow us on X (Twitter)"
          >
            <i className="fa-brands fa-x-twitter text-indigo-200 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <ul className="flex flex-col space-y-2 py-4">
              {/* Learn Menu */}
              <li>
                <button
                  onClick={() => handleDropdownToggle('learn')}
                  className="w-full text-white text-lg font-semibold flex items-center justify-between px-4 py-2 hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300"
                >
                  Learn
                  <span className={`text-xs text-indigo-200 transition-transform duration-300 ${activeDropdown === 'learn' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === 'learn' && (
                  <div className="pl-4">
                    <Link
                      to="/intro"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/intro') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      What is Majorana?
                    </Link>
                    <Link
                      to="/resources"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/resources') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Get-Started Resources
                    </Link>
                  </div>
                )}
              </li>

              {/* Community Menu */}
              <li>
                <button
                  onClick={() => handleDropdownToggle('community')}
                  className="w-full text-white text-lg font-semibold flex items-center justify-between px-4 py-2 hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300"
                >
                  Community
                  <span className={`text-xs text-indigo-200 transition-transform duration-300 ${activeDropdown === 'community' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === 'community' && (
                  <div className="pl-4">
                    <a
                      href="https://forum.zebi.ai/category/5/majorana-quantum-computing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      Majorana Lab Forum
                      <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                    </a>
                    <a
                      href="https://x.com/halotss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      Our Twitter
                      <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" />
                    </a>
                  </div>
                )}
              </li>

              {/* News Menu */}
              <li>
                <button
                  onClick={() => handleDropdownToggle('news')}
                  className="w-full text-white text-lg font-semibold flex items-center justify-between px-4 py-2 hover:bg-cyan-500/15 hover:text-cyan-300 transition-all duration-300"
                >
                  News
                  <span className={`text-xs text-indigo-200 transition-transform duration-300 ${activeDropdown === 'news' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === 'news' && (
                  <div className="pl-4">
                    <Link
                      to="/news"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/news') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Latest News
                    </Link>
                    <Link
                      to="/articles"
                      className={`block px-5 py-3 text-white text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200 ${
                        isActive('/articles') ? 'bg-cyan-500/25 text-cyan-300 font-bold' : ''
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Research Articles
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;