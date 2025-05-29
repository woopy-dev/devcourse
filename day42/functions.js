// IIFE 즉시 실행 함수
(function foo() {
  console.log('foo');
})(); // foo

// 재귀 함수
function foo2(arg) {
  if (arg === 3) return;

  console.log(arg);
  foo2(arg + 1);
};

foo2(1); // 1 2

// 중첩 함수
function foo3(arg) {
  function bar() {
    console.log(arg);
  }

  bar();
}

foo3(3); // 3

// 콜백 함수
function foo4(arg) {
  arg();
}

foo4(() => {
  console.log(4);
}); // 4