const conn = require('../mariadb.js');
const { StatusCodes } = require('http-status-codes');

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;

  let offset = limit * (currentPage - 1);

  let sql = "SELECT * FROM books";
  let values = [];

  if (category_id && news) {
    // 카테고리별 최신 도서 조회
    sql += ` WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 10 YEAR) AND NOW()`;
    values.push(category_id);
  } else if (category_id) {
    // 카테고리별 도서 조회
    sql += ` WHERE category_id = ?`;
    values.push(category_id);
  } else if (news) {
    // 최신 도서 조회
    sql += ` WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 10 YEAR) AND NOW()`;
  }

  sql += " LIMIT ? OFFSET ?";
  values.push(parseInt(limit), offset);

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const bookDetail = (req, res) => {
  const { id } = req.params;

  let sql = `
    SELECT * FROM books 
    LEFT JOIN category 
    ON books.category_id = category.id
    WHERE books.id=?
  `;
  let values = [id];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results[0]) {
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });
};

module.exports = {
  allBooks,
  bookDetail
};
