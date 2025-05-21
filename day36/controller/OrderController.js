const conn = require('../mariadb.js');
const { StatusCodes } = require('http-status-codes');

const order = (req, res) => {
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } = req.body;

  let delivery_id = 3;
  let order_id = 2;

  let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
  // const delivery_id = "SELECT max(id) FROM delivery";
  let values = [delivery.address, delivery.receiver, delivery.contact];

  // conn.query(sql, values, (err, results) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(StatusCodes.BAD_REQUEST).end();
  //   }

  //   delivery_id = results.insertId;

  //   return res.status(StatusCodes.OK).json(results);
  // });

  // sql = `
  //   INSERT INTO orders 
  //     (book_title, total_quantity, total_price, user_id, delivery_id) 
  //   VALUES (?, ?, ?, ?, ?)
  // `;
  // values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
  // conn.query(sql, values, (err, results) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(StatusCodes.BAD_REQUEST).end();
  //   }

  //   order_id = results.insertId;

  //   return res.status(StatusCodes.OK).json(results);
  // });

  sql = `INSERT INTO orderedBook(order_id, book_id, quantity) VALUES ?`;
  values = [];

  items.forEach(item => {
    values.push([order_id, item.book_id, item.quantity]);
  });

  conn.query(sql, [values], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const getOrders = (req, res) => {
  let sql = `SELECT * FROM orders`;

  conn.query(sql, (err, result) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
  });
};

const getOrderDetail = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM orders WHERE id = ?`;
  let values = [id];

  conn.query(sql, values, (err, result) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
  });
};

module.exports = {
  order,
  getOrders,
  getOrderDetail
};