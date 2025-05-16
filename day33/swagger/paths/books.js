const { request } = require("express");

module.exports = {
  '/books': {
    get: {
      summary: '전체 도서 조회',
      tags: ['Books'],
      responses: {
        200: {
          description: '전체 도서 조회 성공',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      example: 1
                    },
                    title: {
                      type: 'string',
                      example: '어린왕자들'
                    },
                    img: {
                      type: 'integer',
                      example: 7
                    },
                    category_id: {
                      type: 'integer',
                      example: 0
                    },
                    form: {
                      type: 'string',
                      example: '종이책'
                    },
                    isbn: {
                      type: 'string',
                      example: '0'
                    },
                    summary: {
                      type: 'string',
                      example: '어리다..'
                    },
                    detail: {
                      type: 'string',
                      example: '많이 어리다..'
                    },
                    author: {
                      type: 'string',
                      example: '김어림'
                    },
                    pages: {
                      type: 'integer',
                      example: 100
                    },
                    contents: {
                      type: 'string',
                      format: 'longtext',
                      example: '목차입니다.'
                    },
                    price: {
                      type: 'integer',
                      example: 20000
                    },
                    pub_date: {
                      type: 'string',
                      format: 'date',
                      example: '2019-01-01'
                    }
                  },
                }
              }
            }
          }
        }
      }
    }
  },
  '/books/:id': {
    get: {
      summary: '상세 도서 조회',
      tags: ['Books'],
      responses: {
        200: {
          description: '상세 도서 조회 성공',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    example: 1
                  },
                  title: {
                    type: 'string',
                    example: '어린왕자들'
                  },
                  img: {
                    type: 'integer',
                    example: 7
                  },
                  category_id: {
                    type: 'integer',
                    example: 0
                  },
                  form: {
                    type: 'string',
                    example: '종이책'
                  },
                  isbn: {
                    type: 'string',
                    example: '0'
                  },
                  summary: {
                    type: 'string',
                    example: '어리다..'
                  },
                  detail: {
                    type: 'string',
                    example: '많이 어리다..'
                  },
                  author: {
                    type: 'string',
                    example: '김어림'
                  },
                  pages: {
                    type: 'integer',
                    example: 100
                  },
                  contents: {
                    type: 'string',
                    format: 'longtext',
                    example: '목차입니다.'
                  },
                  price: {
                    type: 'integer',
                    example: 20000
                  },
                  pub_date: {
                    type: 'string',
                    format: 'date',
                    example: '2019-01-01'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};