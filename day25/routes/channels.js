const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param, validationResult } = require('express-validator');

router.use(express.json());

function validate(req, res, next) {
  const err = validationResult(req);
  if (err.isEmpty()) {
    return next();
  } else {
    return res.status(400).json(err.array());
  }
}

router
  .route("/")
  .get(
    [body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'), validate],
    (req, res) => {
      var { userId } = req.body;

      let sql = `SELECT * FROM channels where user_Id = ?`;
      conn.query(sql, [userId], (err, results) => {
        if (err) return res.status(400).end();

        if (results.length) {
          return res.status(200).json(results);
        } else {
          notFoundChannel(res);
        }
      });
    })
  .post(
    [body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'),
    body('name').notEmpty().isString().withMessage('문자 입력 필요'), validate],
    (req, res) => {
      const { name, userId } = req.body
      let sql = `INSERT INTO channels (name, user_Id) VALUES (?, ?)`;
      let values = [name, userId]
      conn.query(sql, values, (err, results) => {
        if (err) return res.status(400).end();
        return res.status(201).json(results);
      });
    })

router
  .route("/:id")
  .get(
    [param('id').notEmpty().withMessage('채널 id 입력 필요'), validate],
    (req, res) => {
      let { id } = req.params;
      id = parseInt(id);

      let sql = `SELECT * FROM channels where id = ?`;
      conn.query(sql, [id], (err, results) => {
        if (err) res.status(400).end();

        if (results.length) {
          return res.status(200).json(results);
        } else {
          notFoundChannel(res);
        }
      });
    })
  .put(
    [param('id').notEmpty().withMessage('채널 id 입력 필요'),
    body('name').notEmpty().isString().withMessage('문자 입력 필요'), validate],
    (req, res) => {
      let { id } = req.params;
      id = parseInt(id);
      let { name } = req.body;

      let sql = `UPDATE channels SET name = ? WHERE id = ?`;
      let values = [name, id];
      conn.query(sql, values, (err, results) => {
        if (err) return res.status(400).end();

        if (results.affectedRows == 0) {
          return res.status(400).end();
        } else {
          return res.status(200).json(results);
        }
      });
    })
  .delete(
    [param('id').notEmpty().withMessage('채널 id 입력 필요'), validate],
    (req, res) => {
      let { id } = req.params;
      id = parseInt(id);

      let sql = `DELETE FROM channels WHERE id = ?`;
      conn.query(sql, [id], (err, results) => {
        if (err) return res.status(400).end();

        if (results.affectedRows == 0) {
          return res.status(400).end();
        } else {
          return res.status(200).json(results);
        }
      });
    })

function notFoundChannel(res) {
  return res.status(404).json({
    message: "채널 정보를 찾을 수 없습니다."
  });
}

module.exports = router;