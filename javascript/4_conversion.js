console.log(10+20 )
console.log(10+'20' ) //문자
console.log('3'*'5' ) //숫자(자동형변환됨)
console.log(1-'일') //숫자가 아님을 의미하는 특별한 값

const num1 = '10'
const num2 = '3.5'
const num3 = 5
console.log(`현재 num1의 타입: ${typeof num1}`)
//console.log('현재 num1의 타입: ', + typeof( num1))
console.log(`Number(num1)의 타입: ${typeof(Number(num1))}`)
console.log(`현재 num3의 타입: ${typeof num3}`)
console.log(`String(num3)의 타입: ${typeof String(num3)}`)
console.log(`boolean(num1)의 타입: ${typeof Boolean(num1)}, ${Boolean(num1)}`)
console.log(`object(num1)의 타입: ${typeof Object(num1)}, ${Object(num1)}`)
console.log(`parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${parseInt(num2)}`)//정수로 변환
console.log(`parseFloat(num1)의 타입: ${typeof parseFloat(num1)}, ${parseFloat(num1)}`)//실수로 변환
