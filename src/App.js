/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-21 19:45:17
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:48:58
 * @FilePath: \majorana-react\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ForumPage from "./pages/ForumPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ResourcesPage from "./pages/ResourcesPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import NotFoundPage from "./pages/NotFoundPage"; // 导入NotFoundPage
import { AuthProvider } from "./contexts/AuthContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            {/* <Route path="/topic/:tid" element={<TopicDetailPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
