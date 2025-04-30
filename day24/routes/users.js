const express = require('express');
const router = express.Router();
const conn = require('../mariadb');

router.use(express.json());

// 로그인
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  let sql = `SELECT * FROM users where email = ?`;
  conn.query(sql, [email], (err, results) => {
    var loginUser = results[0];

    if (loginUser && loginUser.password == password) {
      res.status(200).json({
        message: `${loginUser.name}님 로그인 되었습니다!`
      });
    } else {
      res.status(404).json({
        message: "이메일 또는 비밀번호가 틀렸습니다."
      });
    }
  });
})

// 회원가입
router.post('/join', (req, res) => {
  if (req.body == {}) {
    res.status(400).json({
      message: "입력 값을 다시 확인해주세요."
    });
  } else {
    const { email, name, password, contact } = req.body;

    let sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`;
    conn.query(sql, [email, name, password, contact], (err, results) => {
      res.status(201).json(results);
    });
  }
})

router
  .route('/users')
  .get((req, res) => {
    let { email } = req.body;

    let sql = `SELECT * FROM users where email = ?`;
    conn.query(sql, [email], (err, results) => {
      if (results.length) {
        res.status(200).json(results);
      } else {
        res.status(404).json({
          message: "회원 정보가 없습니다."
        });
      }
    });
  })
  .delete((req, res) => {
    let { email } = req.body;

    let sql = `DELETE FROM users where email = ?`;
    conn.query(sql, [email], (err, results) => {
      res.status(200).json(results);
    });
  })

module.exports = router;