const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.json({ result: a + b });
});

app.get("/sub", (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.json({ result: a - b });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Calculator API running on port ${port}`));
}
module.exports = app;
