const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

let db = new Map();
var id = 1;

// 로그인
app.post('/login', (req, res) => {
})

// 회원가입
app.post('/join', (req, res) => {
  db.set(id++, req.body);

  if (req.body == {}) {
    res.status(400).json({
      message: "입력 값을 다시 확인해주세요."
    });
  } else {
    res.status(201).json({
      message: `${db.get(id - 1).userId}님 환영합니다!`
    });
  }
})

app
  .route('/users/:id')
  .get((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    const user = db.get(id);
    if (user == undefined) {
      res.status(404).json({
        message: "회원 정보가 없습니다."
      });
    } else {
      res.status(200).json({
        userId: user.userId,
        name: user.name
      });
    }
  })
  .delete((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    const user = db.get(id);
    if (user == undefined) {
      res.status(404).json({
        message: "회원 정보가 없습니다."
      });
    } else {
      db.delete(id);
      res.status(200).json({
        message: `${user.name}님 다음에 또 뵙겠습니다.`
      });
    }
  })