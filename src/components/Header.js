import { color } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoWrapper}>
            <img src="/logo.jpg" alt="Majorana Logo" style={styles.logo} />
            <span style={styles.siteName}>Majorana Lab</span>
          </div>
        </Link>

        <ul style={styles.navList}>
          <li 
            style={styles.navItem} 
            onMouseEnter={() => handleMouseEnter('learn')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={styles.link}>
              Learn
              <span style={styles.dropdownArrow}>▼</span>
            </span>
            {activeDropdown === 'learn' && (
              <div style={styles.dropdown}>
                <Link to="/intro" style={styles.dropdownItem}>
                 What is Majorana?
                </Link>
                <Link to="/resources" style={styles.dropdownItem}>
                 Get-Started Resources
                </Link>   
              </div>
            )}
          </li>

          <li 
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter('community')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={styles.link}>
              Community
              <span style={styles.dropdownArrow}>▼</span>
            </span>
            {activeDropdown === 'community' && (
              <div style={styles.dropdown}>
                <Link to="/forum" style={styles.dropdownItem}>Majorana Lab Forum</Link>
                <a href="https://x.com/halotss" target="_blank" rel="noopener noreferrer" style={styles.dropdownItem}>
                  Our Twitter
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{marginLeft: '4px', fontSize: '0.8em'}}></i>
                </a>
              </div>
            )}
          </li>

          <li 
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter('news')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={styles.link}>
              News
              <span style={styles.dropdownArrow}>▼</span>
            </span>
            {activeDropdown === 'news' && (
              <div style={styles.dropdown}>
                <Link to="/articles" style={styles.dropdownItem}>All Articles</Link>
                {/* <Link to="/today-on-x" style={styles.dropdownItem}>Today on X</Link> */}
              </div>
            )}
          </li>
        </ul>
      </div>
      
   

      <a 
        href="https://x.com/halotss" 
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.twitterLink}
        title="Follow us on X (Twitter)"
      >
        <i className="fa-brands fa-x-twitter" style={styles.twitterIcon}></i>
      </a>
    </nav>
  );
}

const styles = {
  nav: {
    background: "rgb(243.9, 244.2, 244.8)",
    padding: "20px 40px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
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
    height: "30px",
    width: "auto",
    display: "block",
  },
  siteName: {
    color: "black",
    fontSize: "22px",
    fontWeight: "700",
    marginLeft: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    marginLeft: '40px',
    padding: 0,
    gap: "10px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  link: {
    textDecoration: "none",
    color: "#2a5bd7",
    fontSize: "18px",
    fontWeight: "700",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  dropdownArrow: {
    fontSize: "10px",
    marginLeft: "5px",
    color: "#2a5bd7",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    background: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "8px 0",
    minWidth: "200px",
    zIndex: 1001,
  },
  dropdownItem: {
    display: "block",
    padding: "10px 16px",
    color: "black",
    textDecoration: "none",
    fontSize: "13px",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#f5f8ff",
    },
  },
  twitterLink: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
  twitterIcon: {
    fontSize: "24px",
    color: "black",
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
};

export default Header;