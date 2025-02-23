/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-21 20:06:28
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-21 20:06:41
 * @FilePath: \majorana-react\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
