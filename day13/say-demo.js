const express = require('express');
const app = express();

app.listen(3000);

app.get("/hello", (req, res) => {
  res.send({
    say: "안녕하세요!",
  });
});

app.get("/bye", (req, res) => {
  res.send("안녕히 가세요!");
});

app.get("/nicetomeetyou", (req, res) => {
  res.send("만나서 반갑습니다!");
});