const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');
dotenv.config();

const userPaths = require('./paths/users');
const bookPaths = require('./paths/books');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '도서 쇼핑몰 API',
      version: '1.0.0',
      description: '도서 쇼핑몰 API 문서',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      },
    ],
    paths: {
      ...userPaths,
      ...bookPaths,
    },
  },
  apis: [],
};

const specs = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs)
}; 