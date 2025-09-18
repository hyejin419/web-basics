let matrix = [
  [1, 2, 3], // 0번째 행
  [4, 5, 6], // 1번째 행
  [7, 8, 9], // 2번째 행
];
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

console.log("---------------------------------");

//이차원 배열 반복
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}
/*matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6
matrix[2][0] = 7
matrix[2][1] = 8
matrix[2][2] = 9*/

console.log("---------------------------------");

let menuBoard = [
  ["🍔 불고기버거", "🍟 감자튀김", "🥤 콜라"],
  ["🍔 치즈버거", "🌭 핫도그", "🍹 사이다"],
  ["🍔 새우버거", "🍗 치킨너겟", "🍵 녹차"],
];

// 메뉴판 출력
for (let row = 0; row < menuBoard.length; row++) {
  let line = ""; //각 행의 메뉴들을 저장하기 위해 매번 새로 비워준다
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t"; //탭문자
  } //line이라는 문자열에 menuBoard[row][col] 값을 하나씩 이어 붙이기.
  console.log(line);
}
