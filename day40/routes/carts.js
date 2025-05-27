const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeCartItem } = require('../controller/CartController.js');

router.use(express.json());

router.post('/', addToCart);
router.get('/', getCartItems);
router.delete('/:id', removeCartItem);
// 장바구니에서 선택한 주문 예상 상품 목록 조회
// router.get('/:id', (req, res) => {
//   res.status(200).json({
//     message: "장바구니에서 선택한 주문 예상 상품 목록 조회 성공"
//   });
// });

module.exports = router;