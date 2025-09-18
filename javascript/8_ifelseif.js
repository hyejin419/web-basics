/* let age = 5

if (age >= 18) {
  console.log('성인입니다.')
}else if (age >= 13) {
  console.log('청소년입니다.')
} else if (age >= 5){
 console.log("어린이입니다.") 
}
else {
  console.log('유아입니다.')
} */

let kor = 100
let eng = 76
let math = 95
let total = kor + eng + math
let avg = total / 3

console.log(`총점: ${total}`)
console.log(`평균: ${avg}`)

if (avg >= 90) {
  console.log("A")
} else if (avg >= 80) {
  console.log("B")
}else if (avg >= 70) {
  console.log("C")
}else if (avg >= 60) {
  console.log("D")
} else {
  console.log("F")
}

