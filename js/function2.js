//2022 06 16 _1
// 함수 정의문
function sumAry(ary){ //매개변수(parameter) 미지의 값이 들어올예정이다
    let result = 0;
    for(let i=0; i<ary.length; i++){
        result += ary[i];
    }
    return result;
}
//const sumAry = function(ary) {...} => 함수정의문 => 함수표현식처리


let args = [1, 2, 3, 4, 5]; // 매개값 (argument)
sumAry([1, 2, 3, 4, 5]); // 실행문 호출

let arrNum = [1, 2, 3];
sumAry(arrNum);

//함수표현식
const sum = function(num1, num2) {
    if(!num1){ // undefined, null, 0, '' 은 false의 의미.
        num1 = 0; //num1에 값이 없으면? num1에 0을 넣겠다는 뜻
    }
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자
    return num1 + num2;
}
console.log(sum(10)); //함수정의문에 () 이 괄호가 있으면 함수를 실행하라는 뜻

const sum2 = sum; // 함수정의문
console.log(sum2(10, 20));

console.log(sumAry)

//함수 표현식
const sayHello = name => 'Hello ' + name; // 화살표 함수
// 메소드의 매개값으로 함수가 사용된것 (콜백함수)

console.log(sayHello('홍길동'));

let arr = ['김김김', '박박박', '진진진'];
arr.forEach((val/*, ind, ary*/) => console.log(sayHello(val))); // 실행구문이 하나뿐이면 중괄호 생략가능
// 매개값이 함수..

//실습
//1. 배열의 각 요소중에 짝수의 값만 더하도록 sumEven();
//2. 배열의 홀수번째 요소의 합 sumOdd();
arrNum = [29, 34, 12, 55, 29, 42];


console.log(sumEven(arrNum));
console.log(sumOdd(arrNum));

function sumEven(arr){
    let result = 0;
    arr.forEach(val => {if(val%2 == 0) result += val;})
    return result;
}

function sumOdd(arr){
    let result = 0;
    arr.forEach((val, idx) => {if(idx%2 == 0) result += val;})
    return result;
}