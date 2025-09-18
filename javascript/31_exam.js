class Account {
    // static 필드: 모든 계좌에서 공유됨
    static accountCount = 0; //자바스크립트 시작하자마자 메모리에 올라간다.

    // private 필드: 외부에서 접근 불가
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
        Account.accountCount++; // 생성될 때마다 1 증가
    }

    // getter: 값을 가져올 때 호출
    get balance() {
        return this.#balance;
    }

    // setter: 잔액을 직접 설정할 수 없도록 차단
    set balance(value) {
        console.log("직접 잔액을 설정할 수 없습니다.");
    }

    // 입금
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; //더해서 저장
            console.log(`${this.owner}님, ${amount}원 입금되었습니다.`);
        }
    }

    // 출금
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${this.owner}님, ${amount}원 출금되었습니다.`);
        } else {
            console.log("잔액이 부족합니다.");
        }
    }

    // static 메서드: 클래스 자체에서 호출
    static getAccountCount() {
        return `총 계좌 수: ${Account.accountCount}`;
    }
}

//객체생성.계좌만들기
const a1 = new Account("김사과");
a1.deposit(1000);
console.log(a1.balance); // getter → 1000

a1.balance = 5000; // setter 차단 메시지
console.log(a1.balance); // 여전히 1000

a1.withdraw(300); // 300 출금됨

const a2 = new Account("반하나");
a2.deposit(2000);
console.log(a2.balance);

// static 메서드는 클래스명으로 호출
console.log(Account.getAccountCount()); // 출력: 총 계좌 수: 2
