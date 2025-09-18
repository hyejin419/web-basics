function deepCopy(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  } // 원시값(값 자체를 저장하고, 참조하지 않는 데이터 타입)은 그대로 반환

  //배열인 경우
  if (Array.isArray(value)) {
    const result = []; //배열일 경우 새로운 배열로 복사할 공간 생성
    for (let i = 0; i < value.length; i++) {
      result[i] = deepCopy(value[i]); //재귀함수
    }
    return result;
  }

  //객체인 경우
  const result = {}; //본사본이 될 빈 객체 생성
  for (let key in value) {
    result[key] = deepCopy(value[key]);
  }
  return result;
}
const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};

const copy = deepCopy(original);
copy.name = "김사과";
copy.scores[0] = 70;
copy.address.city = "부산";

console.log(original.name); //오렌지
console.log(original.scores[0]); //90
console.log(original.address.city); //서울
