class Animal {
    speak() {
        console.log("동물이 소리를 냅니다.");
    }
}
class Dog extends Animal {
    //Animal 기능을 Dog가 상속받음
    eat() {
        console.log("강아지가 먹습니다.");
    }
    speak() {
        console.log("강아지가 소리를 냅니다.");
    }
}
const animal = new Animal();
animal.speak();
//Animal클래스에서 인스턴스를 만들었기 때문에 Animal의 speak()가 호출된다.
//eat()는 사용X (자식 클래스의 전용 메서드이므로.)
const dog = new Dog();
dog.speak();
dog.eat();
//Dog클래스에서 인스턴스를 만들었기 때문에 speak()는 오버라이딩된 버전이 호출된다.

/*
동물이 소리를 냅니다.
강아지가 소리를 냅니다.
강아지가 먹습니다.
*/
