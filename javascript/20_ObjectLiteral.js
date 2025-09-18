//객체리터럴을 이용해 객체를 생성하고, 그 객체의 프라퍼티와 메서드(함수)를 호출하는 구조 보여주기

const person = {
  name: "김사과", //문자열 프라퍼티
  age: 20, //숫자열 프라퍼티
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name} 입니다.`);
  },
};

console.log(person.name);
console.log(person.age);
person.greet();

/*
객체리터럴: 변수에 직접 객체를 만들어 저장하는 형태 (직접저장)
person : 객체,  중괄호 안에 명사. 동사로 프라퍼티를 저장할 수 있다
name, age : 프라퍼티(데이터값)
greet : 메서드. person객체의 기능을 나타낸다.
this.name : 해당 객체의 name값을 참조한다.
*/

//프라퍼티: 객체에 속한 데이터(값)으로 키(key)와 값(value)으로 구성된다.
//메서드: 객체에 소속된 함수(기능)
