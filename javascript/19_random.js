/*
Math.random() 0이상 1미만의 임의의 소수를 생성하는 함수
*/
console.log(Math.random());

//0~9까지 정수 중 하나를 랜덤하게 뽑기
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//음식 자동 판매기
const menu = [`치킨`, `피자`, `햄버거`, `김밥`];
const randomIndex = Math.floor(Math.random() * menu.length); //0 ~ 3
const randomMenu = menu[randomIndex];
console.log("내일의 점심은: ", randomMenu);
