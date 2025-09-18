//setTimeout(콜백함수, 지연시간)
console.log("물 끓이기 시작!");

setTimeout(function () {
  console.log("면 넣기!");
}, 3000); // 3초 후에 실행

console.log("계란 준비하기!");

console.log("-------------------------------------");

function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback();
}

function sayBye() {
  //다른 함수에 의해 불려지므로 callback함수이다.
  console.log("잘가~");
}
greet("김사과", sayBye);

console.log("-------------------------------------");

//map(): 배열의 모든 요소에 콜백함수를 적용하고, 그 결과로 새 배열을 반환한다.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

console.log("-------------------------------------");

function doSomething(callback) {
  //callback에 함수를 넣어라
  console.log("작업시작!");
  callback();
}
//화살표함수로 표현하면
doSomething(() => {
  console.log("작업완료!");
});

console.log("-------------------------------------");

const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  //action: 계산을 수행할 함수(콜백함수)
  if (num1 < 0 || num2 < 0) return; //음수면 종료

  const result = action(num1, num2); //전달받은 함수 실행
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));
