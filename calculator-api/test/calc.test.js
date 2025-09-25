const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: a + b });
});

// بدلاً من تشغيل السيرفر هنا
// app.listen(3000, () => console.log("Server running"));

module.exports = app; // <-- نصدّر app
