/* var vs let vs cont */
function compareVariable() {
  let num1 = 10;
  const num2 = 30;

  num2 = 20; // 먼저 들어간 값을 빼고 이 값을 넣는거
  alert('num2 : ' + num2);
}

/* ID 란에 입력된 값을 팝업창에 띄우기 */
function popId() {
  if(!document.getElementById('txt_id').value) {
    // = document.getElementById('txt_id').value ==  ""
    alert('아이디를 입력해주세요.');
  } else {
    alert(document.getElementById('txt_id').value);
  }
}

/* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
function myFunction() {
  alert('1');
  alert('2');
  alert('3');
}