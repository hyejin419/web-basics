class Product {
    name = "상품명 없음";
    price = 0;
    static productName = "컴퓨터";
    static productPrice = 1000000;

    showInfo() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
    static showStaticInfo() {
        console.log(
            `${this.productName}의 가격은 ${this.productPrice}원 입니다.`
        );
    }
}
const p = new Product();
p.showInfo(); //인스턴스 메서드 호출
//p.showStaticInfo(); //인스턴스에서 static 메서드 호출 불가
Product.showStaticInfo(); //클래스에서 static 메서드 호출

/*
showInfo():	인스턴스 메서드. 객체 p를 통해 호출 가능
showStaticInfo():	클래스 메서드(static). Product 클래스 자체에서 호출해야 함
this:	인스턴스 메서드에서는 인스턴스를 가리키고, static 메서드에서는 클래스를 가리킴
*/
