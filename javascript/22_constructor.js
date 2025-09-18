//생성자 함수를 사용하여 객체 생성

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("안녕하세요, 저는 " + this.name + "입니다.");
    };
}
const p1 = new Person("이메론", 30);
//new키워드를 사용하여 Person 생성자 함수로부터 새로운 객체를 생성한다.
//p1은 이 객체를 참조한다.
//실제 객체는 힙에 생성되지만 p1은 스택에 저장된다.
console.log(p1.name);
console.log(p1.age);
p1.greet();

const p2 = new Person("배애리", 27);
//p1과 p2 는 독립적인 객체이다. 각자 자기만의 greet메서드를 갖고 있다.
//함수는 택에서 따로 저장된다. (함수는 저장하는 기능이 없다.)
//  메서드는 공유해서 사용한다.
p2.greet();

//this는 새로 만들어질 객체를 가리킨다.
