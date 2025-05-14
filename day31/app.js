const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.listen(process.env.PORT);

const userRouter = require('./routes/users.js');
const bookRouter = require('./routes/books.js');
const likeRouter = require('./routes/likes.js');
const cartRouter = require('./routes/carts.js');
const orderRouter = require('./routes/orders.js');

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/likes', likeRouter);
app.use('/carts', cartRouter);
app.use('/orders', orderRouter);