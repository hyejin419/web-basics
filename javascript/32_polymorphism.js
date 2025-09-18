//다형성: 같은 이름의 메서드가 상황에 따라 다르게 동작하는 것
class Animal {
    speak() {
        console.log("동물이 소리를 냅니다.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("야옹~");
    }
}

class Dog extends Animal {
    speak() {
        console.log("멍멍!");
    }
}

const animals = [new Cat(), new Dog()]; //객체자체가 인덱스 0, 1번이 된다.

for (let a of animals) {
    a.speak();
}

/*
for (let 변수 of 배열) ; 배열의 각 요소에 대해 실행할 코드
- for : 반복문 시작
- (let a of animals) : animals 배열에서 요소를 하나씩 꺼내 변수 a에 담는다.
- a.speak() : 꺼낸 객체 a의 메서드 speak()를 실행.

동작 순서
1. animal[0] > new Cat() > a=Cat 인스턴스 > a.speak() > "야옹~"
2. animal[1] > new Dog() > a=Dog 인스턴스 > a.speak() > "멍멍!"

for...of 와 for...in 차이점
for...of : 배열의 값을 반복 ex) for(let value of arr)
for...in : 객체나 배열의 인덱스(키)를 반복 ex) for(let key in obj)
for...of는 배열을 반복할 때 가장 많이 쓰이며, 객체를 순회하려면 for...in이나 Object.keys()를 사용한다.
*/
