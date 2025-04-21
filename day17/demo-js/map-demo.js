const arr = [1, 2, 3, 4, 5];

const foreachArr = arr.forEach((a, b, c) => {
  return a * 2;
});
console.log(arr);

const mapArr = arr.map((a, b, c) => {
  return a * 2;
});
console.log(arr);

console.log(`foreach로 return하면 ${foreachArr}`);
console.log(`map으로 return하면 ${mapArr}`);