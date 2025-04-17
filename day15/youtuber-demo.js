const express = require('express');
const app = express();

app.listen(3000);

let youtuber1 = {
  channelTitle: "십오야",
  sub: "393만명",
  videoNum: "993개"
}

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  videoNum: "6.6천개"
}

let youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  videoNum: "726개"
}

let db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);

app.get("/youtuber/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber === undefined) {
    res.json({
      message: "유튜버 정보를 찾을 수 없습니다."
    });
  } else {
    res.json(youtuber);
  }
});