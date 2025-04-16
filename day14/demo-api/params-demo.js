const express = require('express');
const app = express();

app.listen(3000);

app.get("/products/:n", (req, res) => {
  let number = parseInt(req.params.n) - 10;
  console.log(number);

  res.json({
    num: number
  });
});

app.get("/watch", (req, res) => {
  // const q = req.query;
  // console.log(q);
  // console.log(q.v);
  // console.log(q.t);

  const {v, t} = req.query;
  console.log(v);
  console.log(t);

  res.json({
    video: v,
    timeline: t
  });
});