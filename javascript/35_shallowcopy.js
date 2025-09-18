/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = Object.assign({}, obj1); //복사

obj2.name = "오렌지";
console.log(obj1.name);
console.log(obj2.name);

//객체 안에 객체나 배열 > 참조가 됨
//객체 안 1단계 > 그대로 복사 됨
*/

/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = { ...obj1 }; //1단계 복사(얕은 복사)
obj2.age = 25;
console.log(obj1.age); //20
console.log(obj2.age); //25
*/

const obj1 = {
  name: "김사과",
  address: { city: "서울" },
};
const obj2 = { ...obj1 };
obj2.address.city = "부산";
//얕은 복사 후 address는 객체이기 때문에 obj1과 obj2가 같은 주소를 공유
//객체: {} 안에 키(key)와 값(value) 쌍으로 이루어진 구조
//address는 문자열이나 숫자같은 단순값이 아니라, 또 다른 객체를 값으로 가지고 있는 중첩된 객체 구조이다.
console.log(obj1.address.city); //부산>> 참조가 됨
console.log(obj2.address.city); //부산
