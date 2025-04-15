const express = require('express');
const app = express();

app.listen(3000);

app.get("/products/:n", (req, res) => {
  res.json({
    num: req.params.n
  });
});