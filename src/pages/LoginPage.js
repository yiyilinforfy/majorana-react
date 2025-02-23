/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-23 20:44:54
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-23 22:19:07
 * @FilePath: \majorana\majorana-react\src\pages\Login.js
 * @Description: 登录和注册页面，已适配后端 Express API，仅使用 email
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // 登录请求
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          { email, password },
          {
            headers: {
              "X-CSRF-TOKEN": csrfToken,
            },
            withCredentials: true,
          }
        );
        await login(email, password); // 更新 AuthContext
        navigate("/profile");
      } else {
        // 注册请求
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          { email, password },
          {
            headers: {
              "X-CSRF-TOKEN": csrfToken,
            },
            withCredentials: true,
          }
        );
        await register(email, password); // 更新 AuthContext
        navigate("/profile");
      }
    } catch (err) {
      setError(err.response?.data?.error || "请求失败，请稍后重试");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1a237e" }}>
        {isLogin ? "登录" : "注册"}
      </h2>
      {error && (
        <div
          style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            电子邮箱
          </label>
          <input
            type="email"
            placeholder="请输入邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>密码</label>
          <input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#1a237e",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onMouseOver={(e) => (e.target.style.background = "#283593")}
          onMouseOut={(e) => (e.target.style.background = "#1a237e")}
        >
          {isLogin ? "登录" : "注册"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
        {isLogin ? "还没有账号？" : "已有账号？"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            background: "none",
            border: "none",
            color: "#1a237e",
            cursor: "pointer",
            fontWeight: "bold",
            padding: "0 5px",
          }}
        >
          {isLogin ? "注册" : "登录"}
        </button>
      </p>
    </div>
  );
}

export default Login;
