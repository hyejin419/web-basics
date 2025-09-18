const user = [1, "apple", "김사과", 20, "서울 서초구"];
console.log(user);

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);
console.log(user[5]); //undefined

user[7] = "여자";
console.log(user); //[ 1, 'apple', '김사과', 20, '서울 서초구', <2 empty items>, '여자' ]

user[4] = "서울 강남구"; //데이터 변경
console.log(user); //[ 1, 'apple', '김사과', 20, '서울 강남구', <2 empty items>, '여자' ]
console.log(user.length); //8

for (let i = 0; i < 8; i++) {
  console.log(user[i]);
} //1, apple, 김사과, 20, 서울 강남구, undefined, undefined, 여자

console.log("---------------------------------------------------------");

const user = [1, "apple", "김사과", 20, "서울 서초구"];
//push(): 배열의 요소를 추가
user.push("ISFJ");
console.log(user); //[ 1, 'apple', '김사과', 20, '서울 서초구', 'ISFJ' ]

//pop(): 배열의 마지막 인덱스 번호에 있는 값을 제거하고 변수에 옮김
//const user=[ 1, 'apple', '김사과', 20, '서울 서초구', 'ISFJ' ]
let temp = user.pop();
console.log(user); //[ 1, 'apple', '김사과', 20, '서울 서초구' ]
console.log(temp); //ISFJ

//shift(): 배열의 첫번째 인덱스 번호에 있는 값을 제거
temp = user.shift();
console.log(user); //[ 'apple', '김사과', 20, '서울 서초구' ]
console.log(temp); //1

//concat(): 두 배열의 요소를 합침
const profile = ["B형", "ISFJ"];
result = user.concat(profile);
console.log(result); //[ 'apple', '김사과', 20, '서울 서초구', 'B형', 'ISFJ' ]

//join(): 배열 요소 사이에 원하는 문자를 삽입: 배열 -> 문자열
result = user.join("😎");
console.log(result); //apple😎김사과😎20😎서울 서초구
console.log(typeof result); //string

//sort(): 배열의 요소를 오름차순
const arr = ["apple", "banana", "Apple", "orange", "melon"];
arr.sort();
console.log(arr); //[ 'Apple', 'apple', 'banana', 'melon', 'orange' ]

//reverse(): 배열을 역순으로 재배치
arr.reverse();
console.log(arr); //[ 'orange', 'melon', 'banana', 'apple', 'Apple' ]
