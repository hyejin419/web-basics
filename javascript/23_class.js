class Person {
    //Person이라는 이름의 클래스 정의
    constructor(name, age) {
        //constructor: 객체가 생성될 때 자동으로 실행되는 초기화 함수. new Person이 객체 올릴 때 자동으로 실행됨.
        // 넘겨받은 매개변수 값을 this. ~ 에 넘겨줌
        this.name = name;
        this.age = age;
    }
    greet() {
        //클래스 내부에 정의된 메서드(모든 인스턴스가 공유)
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
}
const p1 = new Person("김사과", 20); //new Person(...)을 호출하면 constructor()가 실행되어 객체가 생성된다.
p1.greet();
const p2 = new Person("배애리", 27);
p2.greet(); //p1, p2는 각각의 인스턴스로, 공통된 greet() 메서드를 프로토타입으로부터 상속받아 공유한다.
