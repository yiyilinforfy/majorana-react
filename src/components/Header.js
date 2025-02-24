/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-21 19:58:55
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:15:42
 * @FilePath: \majorana-react\src\components\Header.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li className="navItem">
          <Link to="/news" className="link">
            NEWS
          </Link>
        </li>
        <li className="navItem">
          <Link to="/forum" className="link">
            FORUM
          </Link>
        </li>
        <li className="navItem">
          <Link to="/resources" className="link">
            RESOURCES
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="link">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
