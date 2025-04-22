const express = require('express');
const app = express();
app.listen(3000)

const fruits = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'strawberry' },
  { id: 4, name: 'blueberry' },
];

app.get('/fruits', (req, res) => {
  res.json(fruits);
})

app.get('/fruits/:id', (req, res) => {
  let { id } = req.params;
  var fundFruit = fruits.find(f => f.id === parseInt(id));

  if (fundFruit) {
    res.json(fundFruit);
  } else {
    return res.status(404).send('찾으시는 id의 과일이 없습니다.');
  }
})