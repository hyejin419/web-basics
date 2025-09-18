class Animal {
  constructor(name) {
    this.name = name;
  }
}
const animal = new Animal("호랑이");
console.log(animal.name);
//호랑이
console.log("----------------------------------");

class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  showInfo() {
    console.log(`${this.name}는 ${this.color} 강아지입니다.`);
  }
}
const dog = new Dog("웅이", "흰색");
dog.showInfo();
//웅이는 흰색 강아지 입니다.

//super()는 반드시 this보다 먼저 호출되어야 한다.
//showInfo() 메서드를 통해 정보를 출력한다.
