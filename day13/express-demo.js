const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('Hello World');
});

let nodejsBook = {
  title: "Node.js를 공부해보자",
  price: 20000,
  description: "이 책 좋음 왜? 김송아가 지음",
}

app.get("/products/1", (req, res) => {
  res.json(nodejsBook);
  // res.send(20000);
});