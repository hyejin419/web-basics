//static 과 instance method의 차이

class MathTool {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    static add(a, b) {
        //정적 메서드 >> 클래스 이름으로 직접 호출
        return a + b;
    }
    subtract() {
        //인스턴스 메서드 >> 객체를 생성해야 사용 可
        return this.num1 - this.num2;
    }
}
//정적메서드 호출 방법
console.log(MathTool.add(10, 3));

//인스턴스 메서드 호출 방법
const tool = new MathTool(10, 3);
console.log(tool.subtract());

/*
장점: 정적메서드는 유틸리티 함수(단순 계산 함수),
인스턴스 메서드는 객체별 동작 처리(객체의 상태를 활용하는 연산)에 적합
*/
