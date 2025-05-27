const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const jwt = require('jsonwebtoken');

const addLike = async (req, res) => {
  const book_id = req.params.id;

  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다."
    });
  } else {
    const sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
    const values = [authorization.id, book_id];

    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      if (results.affectedRows === 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "좋아요 추가 실패" });
      }

      return res.status(StatusCodes.OK).json({ message: "좋아요 추가 성공" });
    });
  }
};

const removeLike = async (req, res) => {
  const book_id = req.params.id;

  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다."
    });
  } else {
    const sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
    const values = [authorization.id, book_id];

    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      if (results.affectedRows === 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "좋아요 삭제 실패" });
      }

      return res.status(StatusCodes.OK).json({ message: "좋아요 삭제 성공" });
    });
  }
};

module.exports = {
  addLike,
  removeLike,
};