const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const ensureAuthorization = (req, res) => {
  try {
    let receivedJwt = req.headers["authorization"];

    if (receivedJwt) {
      let decodedJwt = jwt.verify(receivedJwt, process.env.SECRET_KEY);
      return decodedJwt;
    } else {
      throw new ReferenceError('jwt must be provided');
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);

    return error;
  }
}

module.exports = ensureAuthorization;