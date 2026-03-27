const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Kết nối tới MongoDB đang chạy trong Docker
mongoose.connect('mongodb://127.0.0.1:27017/hust_test')
  .then(() => console.log('✅ Đã thông tới MongoDB trong Linux!'))
  .catch(err => console.error('❌ Lỗi kết nối:', err));

app.get('/api/test', (req, res) => {
  res.json({ message: "Chào Sơn! API này đang chạy từ Ubuntu, gọi từ Windows!", studentID: "20235212" });
});

app.listen(3000, () => console.log('🚀 Server đang đợi ở cổng 3000...'));