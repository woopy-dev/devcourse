const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
router.use(express.json());

let db = new Map();
var id = 1;

router
  .route("/")
  .get((req, res) => {
    var { userId } = req.body;

    let sql = `SELECT * FROM channels where user_Id = ?`;
    if (userId) {
      conn.query(sql, [userId], (err, results) => {
        if (results.length) {
          res.status(200).json(results);
        } else {
          notFountChannel(res);
        }
      });
    } else {
      res.status(400).end();
    }
  })
  .post((req, res) => {
    let { name, userId } = req.body

    if (name && userId) {
      let sql = `INSERT INTO channels (name, user_Id) VALUES (?, ?)`;
      let values = [name, userId]
      conn.query(sql, values, (err, results) => {
        res.status(201).json(results);
      });
    } else {
      res.status(400).json({
        message: "요청 값을 제대로 보내주세요.",
      });
    }
  })

router
  .route("/:id")
  .get((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    let sql = `SELECT * FROM channels where id = ?`;
    conn.query(sql, [id], (err, results) => {
      if (results.length) {
        res.status(200).json(results);
      } else {
        notFountChannel(res);
      }
    });
  })
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
      notFountChannel(res);
    }
  }) // 채널 개별 삭제

function notFountChannel(res) {
  res.status(404).json({
    message: "채널 정보를 찾을 수 없습니다."
  });
}

module.exports = router;