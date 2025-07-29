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
import ArticlesPage from "./pages/ArticlesPage";
import ForumPage from "./pages/ForumPage";
import ResourcesPage from "./pages/ResourcesPage";
import IntroPage from "./pages/IntroPage";
import NotFoundPage from "./pages/NotFoundPage"; // 导入NotFoundPage
import Footer from "./components/Footer";
import QueryPage from "./pages/QueryPage";
import TweetPage from "./pages/TweetPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/news" element={<TweetPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;