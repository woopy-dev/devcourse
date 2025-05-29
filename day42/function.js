// JS함수는 함수의 실제 매개변수가 될 수 있다.
function foo(arg) {
  arg();
};

function bar() {
  console.log('bar');
};

foo(bar); // bar

// 함수의 반환값이 될 수 있다.
function foo2(arg) {
  return arg;
};

function bar2() {
  console.log('bar2');
};

foo2(bar2)(); // bar2

// 할당명령문의 대상이 될 수 있다.
// 동일 비교의 대상이 될 수 있다.
const foo3 = function (arg) {
  console.log(arg);
  return arg;
};

foo3(1); // 1