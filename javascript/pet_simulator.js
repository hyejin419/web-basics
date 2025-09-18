//부모 클래스
class Pet {
    constructor(name, type, age, energy = 50, hunger = 50) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.energy = energy;
        this.hunger = hunger;
    }

    eat() {
        this.hunger = Math.max(0, this.hunger - 30);
        this.energy = Math.min(100, this.energy + 10);
        console.log(`${this.name}이(가) eat()을 했습니다.`);
    }

    play() {
        this.hunger = Math.min(100, this.hunger + 20);
        this.energy = Math.max(0, this.energy - 20);
        this.age = Math.min(100, this.age + 0.1);
        console.log(`${this.name}이(가) play()를 했습니다.`);
    }
    sleep() {
        this.hunger = Math.max(0, this.hunger + 10);
        this.energy = Math.min(100, this.energy + 40);
        console.log(`${this.name}이(가) sleep()을 했습니다.`);
    }

    status() {
        console.log(
            `이름: ${this.name} / 종류: ${this.type} / 나이: ${this.age.toFixed(
                1
            )}살 / 에너지: ${this.energy}, 배고픔: ${this.hunger}`
        );
    }
}

//자식 클래스(pet 상속)
class Dog extends Pet {
    constructor(name, age) {
        super(name, "강아지", age); //부모(Pet)의 생성자 호출
    }

    speak() {
        console.log(`[Dog]${this.name}: 멍멍!`); //오버라이딩된 메서드
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, "고양이", age);
    }

    speak() {
        console.log(`[Cat]${this.name}: 야옹!`);
    }
}

class Hamster extends Pet {
    constructor(name, age) {
        super(name, "햄스터", age);
    }

    speak() {
        console.log(`[Hamster]${this.name}: 찍찍!`);
    }
}

//프로그램 실행 흐름
// 이름 목록
const names = ["후추", "소금", "설탕", "시럽", "조청"];

// 종류별 생성 함수
function createRandomPet() {
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 5) + 1;
    const petTypes = [Dog, Cat, Hamster];
    const PetClass = petTypes[Math.floor(Math.random() * petTypes.length)];
    return new PetClass(name, age);
}
//3마리 랜덤 생성
const petCount = 3;
const pets = [];
for (let i = 0; i < petCount; i++) {
    pets.push(createRandomPet());
}
// 하루 시뮬레이션 함수
function simulateDay(day) {
    console.log(`-----DAY ${day} -----`);
    pets.forEach((pet) => {
        pet.speak();
        const action = Math.floor(Math.random() * 3);
        switch (action) {
            case 0:
                pet.eat();
                break;
            case 1:
                pet.play();
                break;
            case 2:
                pet.sleep();
                break;
        }
        pet.status();
    });
}

// 3일 동안 시뮬레이션
const days = 3;
for (let day = 1; day <= days; day++) {
    simulateDay(day);
}
