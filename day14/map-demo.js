const express = require('express');
const app = express();

app.listen(3000);

app.get("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  if (db.get(id) === undefined) {
    res.json({
      message: "없는 상품입니다."
    });
  } else {
    res.json({
      id: id,
      productName: db.get(id)
    });
  }
});

let db = new Map();
db.set(1, "NoteBook");
db.set(2, "Cup");
db.set(3, "Chair");

// console.log(db); // Map { 1 => 'NoteBook', 2 => 'Cup', 3 => 'Chair' }
// console.log(db.get(1)); // NoteBook
// console.log(db.get(2)); // Cup
// console.log(db.get(3)); // Chair