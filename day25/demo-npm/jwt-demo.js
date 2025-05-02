var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);
// (페이로드, 나만의 암호키) + SHA256

console.log(token);

var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded);