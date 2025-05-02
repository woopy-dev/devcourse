const express = require("express");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.listen(process.env.PORT);

const userRouter = require('./routes/users.js');
const channelRouter = require('./routes/channels.js');

app.use("/", userRouter);
app.use("/channels", channelRouter);