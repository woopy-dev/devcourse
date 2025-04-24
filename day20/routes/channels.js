const express = require('express');
const router = express.Router();
router.use(express.json());

let db = new Map();
var id = 1;

router
  .route("/")
  .get((req, res) => {
    if (db.size) {
      var { userId } = req.body;
      var channels = [];

      if (db.size && userId) {
        db.forEach((value, key) => {
          if (value.userId === userId) {
            channels.push(value);
          }
        });

        if (channels.length) {
          res.status(200).json(channels);
        } else {
          notFountChannel();
        }
      } else {
        notFountChannel();
      }
    }
  }) // 채널 전체 조회
  .post((req, res) => {
    if (req.body.channelTitle) {
      let channel = req.body
      db.set(id++, channel);

      res.status(201).json({
        message: `${db.get(id - 1).channelTitle} 채널을 응원합니다!`,
      });
    } else {
      res.status(400).json({
        message: "요청 값을 제대로 보내주세요.",
      });
    }
  }) // 채널 생성

router
  .route("/:id")
  .get((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    if (db.get(id)) {
      res.status(200).json(db.get(id));
    } else {
      notFountChannel();
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
      notFountChannel();
    }
  }) // 채널 개별 삭제

function notFountChannel() {
  res.status(404).json({
    message: "채널 정보를 찾을 수 없습니다."
  });
}

module.exports = router;