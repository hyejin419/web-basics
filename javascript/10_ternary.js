const age = 20;
const message = age >= 18 ? "성인입니다." : "미성년자입니다.";
console.log(message); // 비교연산자 >

const score = 85;
const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(`당신의 성적은 ${grade}입니다.`);
