const express = require('express');
const app = express();

app.listen(3000);

app.get('/test', (req, res) => {
  res.send('test');
});

app.get("/test/1", (req, res) => {
  res.send("One!!");
});