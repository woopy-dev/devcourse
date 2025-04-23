const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

let db = new Map();
var id = 1;

app
  .route("/channels")
  .get((req, res) => {
    if (db.size) {
      var channels = [];

      db.forEach((value, key) => {
        channels.push(value);
      });

      res.status(200).json(channels);
    } else {
      res.status(404).json({
        message: "조회할 채널이 없습니다.",
      });
    }
  }) // 채널 전체 조회
  .post((req, res) => {
    if (req.body.channelTitle) {
      db.set(id++, req.body);

      res.status(201).json({
        message: `${db.get(id - 1).channelTitle} 채널을 응원합니다!`,
      });
    } else {
      res.status(400).json({
        message: "요청 값을 제대로 보내주세요.",
      });
    }
  }) // 채널 생성

app
  .route("/channels/:id")
  .get((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    if (db.get(id)) {
      res.status(200).json(db.get(id));
    } else {
      res.status(404).json({
        message: "채널 정보를 찾을 수 없습니다."
      });
    }
  }) // 채널 개별 조회
  .put((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    var channel = db.get(id);
    var oldTitle = channel.channelTitle;

    if (channel) {
      var newTitle = req.body.channelTitle;
      channel.channelTitle = newTitle;
      db.set(id, channel);

      res.status(200).json({
        message: `${oldTitle} 채널을 ${newTitle} 채널로 수정했습니다.`
      });
    }
  }) // 채널 개별 수정
  .delete((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    var channel = db.get(id);
    if (channel) {
      db.delete(id);
      res.status(200).json({
        message: `${channel.channelTitle} 채널을 삭제했습니다.`
      });
    } else {
      res.status(404).json({
        message: "채널 정보를 찾을 수 없습니다."
      });
    }
  }) // 채널 개별 삭제