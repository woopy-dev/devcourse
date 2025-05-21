const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const addLike = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;

  const sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
  const values = [user_id, id];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.affectedRows === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "좋아요 추가 실패" });
    }

    return res.status(StatusCodes.CREATED).json({ message: "좋아요 추가 성공" });
  });
};

const removeLike = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;

  const sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
  const values = [user_id, id];

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
};

module.exports = {
  addLike,
  removeLike,
};