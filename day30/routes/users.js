const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.status(200).json({
    message: "회원 목록 조회 성공"
  });
});

// 회원가입
router.post('/join', (req, res) => {
  console.log("회원가입");
});

// 로그인
router.post('/login', (req, res) => {
  console.log("로그인");
});

// 비밀번호 초기화 요청
router.post('/reset', (req, res) => {
  console.log("비밀번호 초기화 요청");
});

// 비밀번호 초기화
router.put('/reset', (req, res) => {
  console.log("비밀번호 초기화");
});

module.exports = router;