function generateLottoNumbers() {
    //로또 번호 생성하는 함수 (6자리 로또 번호 생성)
    const numbers = new Set(); //set: 중복 자동 제거, numbers: 로또 번호를 담을 공간

    while (numbers.size < 6) {
        //중복 없이 6개의 숫자가 들어갈 때까지 반복
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
        //numbers에 num을 추가
    }

    const result = Array.from(numbers).sort((a, b) => a - b);
    return result;
}
//const result = Array.from(numbers) : set객체를 일반배열(array)로 변환
//.sort((a, b) => a - b) : 오름차순 정렬 (b-a : 내림차순)

// 실행
const lotto = generateLottoNumbers();
console.log("🎉 생성된 로또 번호:", lotto.join(" "));
