import React, { useState, useEffect } from "react"; // 添加 useState, useEffect
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [csrfToken, setCsrfToken] = useState(""); // 添加 CSRF token 状态

  // 获取 CSRF Token
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        await axios.get("http://localhost:3000/api/auth/session", {
          withCredentials: true,
        });
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("XSRF-TOKEN="))
          ?.split("=")[1];
        setCsrfToken(token || "");
      } catch (err) {
        console.error("获取 CSRF token 失败:", err);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleLogout = async () => {
    try {
      // 调用后端登出接口，携带 CSRF token
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          headers: {
            "X-CSRF-TOKEN": csrfToken, // 添加 CSRF token
          },
          withCredentials: true,
        }
      );
      logout(); // 更新 AuthContext 状态
      navigate("/login"); // 登出后跳转到登录页
    } catch (err) {
      console.error("登出失败:", err);
      alert("登出失败，请稍后重试");
    }
  };

  return (
    <nav style={{ background: "#1a237e", padding: "15px" }}>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            首页
          </Link>
        </li>
        <li>
          <Link to="/news" style={{ color: "white", textDecoration: "none" }}>
            新闻
          </Link>
        </li>
        <li>
          <Link to="/forum" style={{ color: "white", textDecoration: "none" }}>
            论坛
          </Link>
        </li>
        <li>
          <Link
            to="/resources"
            style={{ color: "white", textDecoration: "none" }}
          >
            资源
          </Link>
        </li>
        <li style={{ marginLeft: "auto" }}>
          {currentUser ? (
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Link
                to="/profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                {currentUser.email}
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseOut={(e) => (e.target.style.background = "transparent")}
              >
                退出
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              登录/注册
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
