class User {
    constructor(name) {
        this._name = name; //실제 데이터를 저장할 내부 변수
    }

    get name() {
        //get: 값을 가져올 때 호출됨(user.name)
        //메소드명(name)이 충돌될까 봐 (변수)_name으로 줌
        return this._name;
    }
    set name(newName) {
        //set: 값을 설정할 때 호출됨(user.name = "새이름")
        if (newName.length < 2) {
            console.log("이름은 두 글자 이상이어야 합니다.");
        } else {
            this._name = newName;
        }
    }
}

const user = new User("김사과"); //객체 생성
console.log(user._name);
console.log(user.name); //getter의 기능
user.name = "반"; //setter
user.name = "반하나"; //setter
console.log(user.name); //getter

//user.name은 그냥 변수처럼 보이지만 실제로는get name()이 실행된다.
//user.name = "홍길동"을 쓰면 set name("홍길동")이 실행된다.

/*
getter, setter를 사용하는 이유 
외부에서 직접 _name에 접근하지 않고 user.name처럼 접근자 방식으로 제어 가능
조건검사, 로깅, 데이터가공 등 중간 제어를 넣기 좋음
유지 보수와 코드 안전성이 높아짐
*/
