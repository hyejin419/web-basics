const fruits = ["사과", "바나나"];
const newFruits = [...fruits, "포도"];
console.log(newFruits); //[ '사과', '바나나', '포도' ]

//arr2는 arr의 복사본 (같은 값이지만 서로 다른 배열)
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // 새 배열 생성
console.log(arr2); //[ 1, 2, 3 ]

const c = [1, 2];
const d = [3, 4];
const result = [...c, ...d];
console.log(result); // [ 1, 2, 3, 4 ]

function add(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log(add(...nums)); //6
console.log(add(nums[0], nums[1], nums[2])); //6

const person = { name: "김사과", age: 20 };
const copy = { ...person };
console.log(copy); //{ name: '김사과', age: 20 }

const a = { name: "김사과" };
const b = { age: 20 };
const merged = { ...a, ...b };
console.log(merged); //{ name: '김사과', age: 20 }
