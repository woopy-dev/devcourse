module.exports = {
  '/users/join': {
    post: {
      summary: '회원 가입',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'shin@mail.com'
                },
                password: {
                  type: 'string',
                  example: '1111'
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: '회원가입 성공'
        }
      }
    }
  },
  '/users/login': {
    post: {
      summary: '로그인',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'shin@mail.com'
                },
                password: {
                  type: 'string',
                  example: '1111'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: '로그인 성공'
        }
      }
    }
  },
  '/users/reset': {
    post: {
      summary: '비밀번호 초기화 요청',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'shin@mail.com'
                },
                password: {
                  type: 'string',
                  example: '1111'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: '비밀번호 초기화 요청 성공',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    example: 'shin@mail.com'
                  }
                }
              }
            }
          }
        }
      }
    },
    put: {
      summary: '비밀번호 초기화',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'shin@mail.com'
                },
                password: {
                  type: 'string',
                  example: '1111'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: '비밀번호 초기화 성공'
        }
      }
    }
  }
};