//Object생성자함수를 이용하여 객체를 만드는 방식

const person = new Object();
//new Object(): 새로운 빈 객체를 생성
//이 객체는 힙 메모리에 저장되며, person이라는 이름으로 참조된다.
person.name = "반하나";
//객체에 name 이라는 속성을 추가하고 값으로 "반하나"를 저장.
person.age = 25;
//age라는 새로운 속성을 추가하고 값으로 25저장.
person.greet = function () {
    console.log(`안녕하세요, 저는 ${this.name} 입니다.`);
};
//greet라는 메서드를 객체에 추가.
//this.name 은 이 메서드가 속한 객체(person)의 name속성 값을 참조한다.
person.greet();
