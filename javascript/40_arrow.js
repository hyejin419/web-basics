// 일반 함수
function add(a, b) {
  return a + b; // 함수를 빠져나감
}

// 화살표 함수 (무조건 린턴형이다.)
const add2 = (a, b) => a + b;

// 매개변수가 1개일 땐 괄호 생략 가능
const square = (x) => x * x;

// 코드 블록이 있을 경우 return을 명시해야 함 (블록으로 여러 줄 작성할 때)
const add3 = (a, b) => {
  return a + b;
};

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(function () {
      console.log("안녕! 나는 " + this.name); //가장 가까운 객체(setTImeout)의 name을 가리킨다.
    }, 1000); //1초 후 첫번째 파라미터 실행
  },
};
obj.sayHello(); //안녕! 나는 undefined

//화살표 함수로 고치면:
const obj2 = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {
      console.log("안녕! 나는 " + this.name);
    }, 1000);
  },
};
obj2.sayHello();
