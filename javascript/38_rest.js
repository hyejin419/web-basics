const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); //1
console.log(second); //2
console.log(rest); //[ 3, 4, 5 ]

//가변매개변수에 적용
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    //배열 요소를 순회
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3)); //6
console.log(sum(10, 20, 30, 40)); //100

//나머지 매개변수(Rest Parameter)를 이용해서 다양한 개수의 인자를 받을 수 있도록 만든 sum() 함수
const user = {
  name: "김사과",
  age: 20,
  city: "서울",
};
const { name, ...rest2 } = user;
console.log(name); //김사과
console.log(rest2); //{ age: 20, city: '서울' }
