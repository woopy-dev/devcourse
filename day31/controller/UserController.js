const conn = require('../mariadb.js');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const join = (req, res) => {
  const { email, password } = req.body;

  // 비밀번호 암호화
  const salt = crypto.randomBytes(10).toString('base64');
  const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

  // 회원가입시 암호화 된 비밀번호와 salt값을 같이 저장
  let sql = `INSERT INTO users (email, password, salt)VALUES (?, ?, ?)`;
  let values = [email, hashPassword, salt];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  let sql = `SELECT * FROM users WHERE email = ?`;
  let values = [email];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const loginUser = results[0];

    // salt값 가져와서 비밀번호 암호화
    const hashPassword = crypto.pbkdf2Sync(password, loginUser.salt, 10000, 10, 'sha512').toString('base64');

    // 로그인시 사용자가 입력한 비밀번호를 암호화해서 DB의 저장된 salt값과 비교
    if (loginUser && loginUser.password == hashPassword) {
      const token = jwt.sign(
        { email: loginUser.email },
        process.env.SECRET_KEY,
        { expiresIn: '10m', issuer: "woo" }
      );

      // 토큰 쿠키에 담기
      res.cookie("token", token, { httpOnly: true });
      console.log(token);

      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

const passwordResetReq = (req, res) => {
  const { email } = req.body;

  let sql = `SELECT * FROM users WHERE email = ?`;
  let values = [email];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const user = results[0];
    if (user) {
      return res.status(StatusCodes.OK).json({ email });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

const passwordReset = (req, res) => {
  const { email, password } = req.body;

  const salt = crypto.randomBytes(10).toString('base64');
  const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

  let sql = `UPDATE users SET password = ?, salt = ? WHERE email = ?`;
  let values = [hashPassword, salt, email];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.affectedRows == 0) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    } else {
      return res.status(StatusCodes.OK).json(results);
    }
  });
};

module.exports = { join, login, passwordResetReq, passwordReset };