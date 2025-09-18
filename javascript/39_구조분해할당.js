const obj = { name: "김사과", age: 20 };
const { name, age } = obj; //name 과 age로 분해
console.log(name); //김사과
console.log(age); //20

console.log("-----------------------------------");

function display({ name, age, address, job }) {
    //매개변수를 중괄호 안에 둠
    console.log(name, age, address, job);
}

const apple = {
    name: "김사과",
    age: 20,
    address: { si: "서울시", gu: "서초구", dong: "양재동" },
};
console.log(apple);
/*  name: '김사과',
age: 20,
address: { si: '서울시', gu: '서초구', dong: '양재동' }*/

const new_apple = { ...apple, job: "프로그래머" };
console.log(new_apple);
/*name: '김사과',
age: 20,
address: { si: '서울시', gu: '서초구', dong: '양재동' },
job: '프로그래머'*/

display(new_apple);
/*김사과 20 { si: '서울시', gu: '서초구', dong: '양재동' } 프로그래머 */

console.log("-------------------중요-------------------");

const component = {
    name: "Button",
    styles: {
        size: 20,
        color: "black",
    },
};
function changeColor({ styles: { color } }) {
    console.log(color);
}
changeColor(component); // "black"
//함수의 매개변수에서 중첩구조분해를 통해 한 번에 color만 추출.
// style.color에 접근하는 것과 같은 효과이지만 더 간결하게 사용.
