let count = 1;
/*
while (count <= 5) {
  console.log(count); //무한루프 (컨트롤 + c로 멈춤)
}
*/
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
} //1 2 3 4 5

let dan = 5;
let i = 1;
while (i <= 9) {
  console.log(`${dan} * ${i} = ${dan * i}`);
  i++;
} //5 * 1 = 5, ... , 5 * 9 = 45

let dan = 2;
while (dan < 10) {
  let i = 1;
  while (i < 10) {
    console.log(`${dan}*${i}=${dan * i}`);
    i++;
  }
  console.log(" ");
  dan++;
}
