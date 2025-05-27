const conn = require('../mariadb.js');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const jwt = require('jsonwebtoken');

const allBooks = (req, res) => {
  let allBooksRes = {};
  let { category_id, news, limit, currentPage } = req.query;

  let offset = limit * (currentPage - 1);

  let sql = "SELECT SQL_CALC_FOUND_ROWS *, (SELECT COUNT(*) FROM likes WHERE books.id = liked_book_id) AS likes FROM books";
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
      // return res.status(StatusCodes.BAD_REQUEST).end();
    }

    console.log(results);
    if (results.length) {
      results.map((result) => {
        result.pubDate = result.pub_date;
        delete result.pub_date;
      });
      allBooksRes.books = results;
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });

  sql = "SELECT FOUND_ROWS()";
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    let pagination = {};
    pagination.currentPage = parseInt(currentPage);
    pagination.totalCount = results[0]["FOUND_ROWS()"];

    allBooksRes.pagination = pagination;

    return res.status(StatusCodes.OK).json(allBooksRes);
  });
};

const bookDetail = (req, res) => {
  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다."
    });
  } else if (authorization instanceof ReferenceError) {
    const book_id = req.params.id;

    let sql = `
      SELECT *, 
        (SELECT COUNT(*) FROM likes WHERE liked_book_id = books.id) AS likes 
      FROM books 
      LEFT JOIN category ON books.category_id = category.category_id 
      WHERE books.id=?
    `;
    let values = [book_id];

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
  } else {
    const book_id = req.params.id;

    let sql = `
      SELECT *, 
        (SELECT COUNT(*) FROM likes WHERE liked_book_id = books.id) AS likes, 
        (SELECT EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?)) 
      AS liked 
      FROM books 
      LEFT JOIN category ON books.category_id = category.category_id 
      WHERE books.id=?
    `;
    let values = [authorization.id, book_id, book_id];

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
  }
};

module.exports = {
  allBooks,
  bookDetail
};
