const express = require('express');
const router = express.Router();

router.use(express.json());

// 좋아요 추가
router.post('/:id', (req, res) => {
  res.status(200).json({
    message: "좋아요 추가 성공"
  });
});

// 좋아요 삭제
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: "좋아요 삭제 성공"
  });
});

module.exports = router;