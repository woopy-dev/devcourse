const conn = require('../mariadb.js');
const { StatusCodes } = require('http-status-codes');

const allBooks = (req, res) => {
  let sql = `SELECT * FROM books`;
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const bookDetail = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM books WHERE id = ?`;
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

const booksByCategory = (req, res) => {
  let { category_id } = req.params;

  let sql = `SELECT * FROM books WHERE category_id = ?`;
  let values = [category_id];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.length) {
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });
};

module.exports = {
  allBooks,
  bookDetail,
  booksByCategory
};
