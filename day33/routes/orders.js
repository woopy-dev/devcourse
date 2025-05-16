const express = require('express');
const router = express.Router();

router.use(express.json());

// 주문 하기
router.post('/', (req, res) => {
  res.status(200).json({
    message: "주문 하기 성공"
  });
});

// 주문 목록 조회
router.get('/', (req, res) => {
  res.status(200).json({
    message: "주문 목록 조회 성공"
  });
});

// 주문 상세 조회
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: "주문 상세 조회 성공"
  });
});

module.exports = router;