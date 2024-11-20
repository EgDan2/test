// 引入必要模組
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 提供靜態資源（例如 HTML、CSS、JS）
app.use(express.static(path.join(__dirname, 'public')));

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});