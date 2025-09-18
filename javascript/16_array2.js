let fruits = ["사과", "바나나", "오렌지"];
/*
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/

/*
for (let fruit of fruits) {
  console.log(fruit); //인덱스는 알 수 없다. 배열 안의 요소 하나씩 꺼내므로, 요소를 알고 싶을 때 사용
}
*/

fruits.forEach(function (fruit, index) {
  //메소드이다. 안에는 함수가 들어감. function(): 익명함수. 변수이름은 아무거나 可
  console.log(`${index}번째 과일:  ${fruit}`);
}); // 콜백함수: 자동으로 불러줌

const users = [1, "apple", "김사과", 20, "서울 서초구"];

//for문
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("-----------------------------------------------------------");

//for...of
for (let user of users) {
  console.log(user);
}

console.log("-----------------------------------------------------------");

//forEach
users.forEach(function (user, idx, arr) {
  //arr: 가지고 있는 모든 요소
  console.log(user, idx, arr);
});
// 1 0 [ 1, 'apple', '김사과', 20, '서울 서초구' ]
// apple 1 [ 1, 'apple', '김사과', 20, '서울 서초구' ]
// 김사과 2 [ 1, 'apple', '김사과', 20, '서울 서초구' ]
// 20 3 [ 1, 'apple', '김사과', 20, '서울 서초구' ]
// 서울 서초구 4 [ 1, 'apple', '김사과', 20, '서울 서초구' ]
