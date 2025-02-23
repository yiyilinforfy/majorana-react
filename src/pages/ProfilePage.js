/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-23 20:45:15
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-23 20:45:23
 * @FilePath: \majorana\majorana-react\src\pages\ProfilePage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { currentUser, updatePassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await updatePassword(newPassword);
      setSuccess("密码修改成功！");
      setNewPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>个人主页</h2>
      <div style={{ marginBottom: "20px" }}>
        <p>邮箱: {currentUser.email}</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>修改密码</h3>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        {success && (
          <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>
        )}

        <form onSubmit={handlePasswordChange}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="新密码"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#1a237e",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            更新密码
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
