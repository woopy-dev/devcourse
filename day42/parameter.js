// 기본 매개변수
function foo(arg) {
  console.log(arg);
};

foo(1); // 1

// 나머지 매개변수
function foo2(arg, ...rest) {
  console.log(arg, rest);
};

foo2(1, 2, 3, 4, 5); // 1 [ 2, 3, 4, 5 ]

// arguments 객체
function foo3(arg) {
  console.log(arguments);
}

foo3(1, 2, 3, 4, 5); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }