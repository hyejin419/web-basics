//프로토타입(자바스크립트의 원형) 기반 상속 개념을 활용하는 방식
//Object.create()를 사용하여 객체를 생성하고, 다른 객체를 프로토타입으로 상속받는 구조

const proto = {
    greet: function () {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    },
};

const person = Object.create(proto);
//Object.create(proto)는 새로운 객체를 만들고,
//그 객체의 [[Prototype]] (숨겨진 링크)를 proto로 설정한다.
//따라서, person은 proto의 속성과 메서드를 상속받는다.
person.name = "안가도";
person.age = 32;

person.greet();
// ✓greet()는 person 객체 자체에는 없지만, 프로토타입 체인을 통해 proto.greet를 찾고 실행한다.
// ✓this.name은 호출 주체인 person의 name 속성을 참조하므로 "안가도" 가 출력된다.

// 정리
// ✓Object.create(proto) : 객체 생성 시 프로토타입을 명시적으로 설정
// ✓proto : 상속의 대상이 되는 객체
// ✓greet() : 상속된 메서드로서 호출 가능
// ✓this.name : 호출한 객체(person)의 name을 가리킴
