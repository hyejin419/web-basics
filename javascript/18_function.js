sayHello();
function sayHello() {
  console.log("안녕하세요");
} //호이스팅 사례

/* const sayHello = function () {
  console.log("안녕하세요");
}; */

//1.  매개변수가 없는 함수
function showMessage() {
  console.log("환영합니다!!");
}
showMessage();

//2. 매개변수가 있는 함수
function greet(name) {
  console.log("안녕하세요, " + name + "님!");
}

greet("김사과"); //안녕하세요, 김사과님!
greet(); //안녕하세요, undefined님!
greet(true); //안녕하세요, true님!

function subtract(num1, num2) {
  result = num1 - num2;
  console.log(`뺄셈 결과: ${result}`);
}

subtract(10, 5); //뺄셈 결과: 5
subtract("십", "오"); //뺄셈 결과: NaN

//3. 리턴이 있는 함수
function add(a, b) {
  //2. a=10, b=3으로 전달
  return a + b; //3. 함수 내부에서 10+3=13이 계산되고,
}
let result = add(10, 3); // 1. add(10, 3)실행
console.log(result); // 4. 결과가 result 변수에 저장

//4.기본값이 있는 함수: 인자를 전달하지 않아 자동으로 설정되는 기본값
// function 함수이름(매개변수 = 기본값) { 실행할 코드 }
function greet2(name = "게스트") {
  console.log("안녕하세요, " + name + "님!");
}
greet2(); //안녕하세요, 게스트님! (인자없이 호출)
greet2("김사과"); //안녕하세요, 김사과님! (인자 전달)

//5. 가변 매개변수 함수(: 매개변수가 몇 개인지 몰라도 받을 수 있다.)
function sum(...numbers) {
  //...numbers :(=Rest 파라미터 문법) 함수에 전달된 인자들을 배열 형태로 numbers에 담는다.
  /* 예제
  function sum(...numbers) {
    console.log(numbers);
    }
    sum(1, 2, 3); 
    // [1, 2, 3]
  */
  let total = 0;
  for (let num of numbers) {
    //numbers 배열의 각 요소를 num에 하나씩 꺼내서 반복
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(70, 85, 100, 90, 20, 45));

//6. 즉시 실행 함수
(function () {
  console.log("이 함수는 즉시 실행됩니다!");
})(); //(): 실행해줘!

//7.함수 안에 함수 (중첩함수)
function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  inner();
}
outer();

//8.함수에서 함수 반환=return (고차함수) : 함수가 다른 함수를 리턴할 수 있다.
/*
    function (name) {
    console.log(messge + "," + name + "님!");
  };
}
*/
function createGreeting(messge) {
  return function (name) {
    console.log(messge + "," + name + "님!");
  };
}

const hello = createGreeting("안녕하세요");

/* const hello = function (name) {
      console.log("안녕하세요" + "," + name + "님!");
    };
*/
hello("김사과");
//createGreeting("안녕하세요")를 호출하면,
//message 안에 "안녕하세요"가 저장된다.
//그 안에서 익명함수를 리턴한다.
//이 함수는 name을 받아서 인사 메시지를 출력한다.

const bye = createGreeting("잘 가요");
bye("박포도"); // 출력: 잘 가요,박포도님!

const morning = createGreeting("좋은 아침입니다");
morning("이자몽"); // 출력: 좋은 아침입니다,이자몽님!
