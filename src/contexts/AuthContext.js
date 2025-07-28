/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-23 20:46:13
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-23 22:30:26
 * @FilePath: \majorana\majorana-react\src\contexts\AuthContext.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    setCurrentUser({ email }); // 简化为只存储 email，实际可根据需要扩展
  };

  const register = async (email, password) => {
    setCurrentUser({ email });
  };

  const logout = () => {
    setCurrentUser(null); // 清除当前用户状态
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
