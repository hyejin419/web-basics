let num = 10;
num++;
console.log(num); //11
++num;
console.log(num); //12
let result = 0;
result = ++num; //전치증감연산자
console.log(result); //13
result = num++; //후치증감연산자 //result에 먼저 13저장되고 1이 더해져서 내려온다.
// 하지만 num이 14가 되기 전에 저장되었으므로
// (console에는 13이 먼저 저장되므로) 결과는 13이 나온다.
console.log(result); //13
console.log(num); //14
//////////////////////////////////////////

let a = 23;
let b = 14;
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
//^: XOR 같으면0, 다르면 1
console.log(~a);
//(맨 앞에 있는)부호비트 - 0: 양수 1: 음수
//2의 보수: ~X = -X -1
console.log(a << 1);
console.log(a >> 1);
