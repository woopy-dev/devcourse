const express = require('express');
const router = express.Router();

router.use(express.json());

// 장바구니 담기
router.post('/:id', (req, res) => {
  res.status(200).json({
    message: "장바구니 담기 성공"
  });
});

// 장바구니 목록 조회
router.get('/', (req, res) => {
  res.status(200).json({
    message: "장바구니 목록 조회 성공"
  });
});

// 장바구니 삭제
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: "장바구니 삭제 성공"
  });
});

// 장바구니에서 선택한 주문 예상 상품 목록 조회
// router.get('/:id', (req, res) => {
//   res.status(200).json({
//     message: "장바구니에서 선택한 주문 예상 상품 목록 조회 성공"
//   });
// });

module.exports = router;