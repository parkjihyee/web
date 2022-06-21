// 2022 06 21 _1

// 배열관련 반복되는 메소드
// forEach: void, map: [배열] A -> A`, filter: [배열] A -> B, reduce: 문자열, Number, [배열], {}

let ary = [3, 5, 8, 9, 12]; // 배열 객체: new Array(); 
// let ary = [];

ary.push(5); 
ary.unshift(7); // 배열 맨 앞에 새로운 요소 추가
// 결과: 7, 3, 5, 8, 9, 12, 5

//ary.shift(); // 배열 맨 앞에서부터 제거
//ary.pop(); // 배열 맨 뒤에서부터 제거
ary.splice(3, 1); // 인덱스3번째 요소부터 한 개를 제거. 대체값 안 넣어주면 삭제됨(3, 1, '10')

//ary.forEach(elem => console.log(elem)); // 콜백함수..
//위랑 같은 의미
// ary.forEach(firstCallBack);
// function firstCallBack(elem){
//     console.log(elem);
// }

let newAry = [];
// 1. forEach
let result = ary.forEach(firstCallBack);

function firstCallBack(elem){

    newAry.push(elem);
}
//console.log(newAry);

// 2. map
result = ary.map(elem => elem *2); // A -> A'(A*2)

console.log(newAry);
console.log(result);

// 3. filter A -> a
//result = ary.filter((elem, ind, arry) => elem % 2 == 0); // 화살표 뒤 부분의 조건을 만족하는것만 출력하겠다!
result = ary.filter((elem, ind, arry) => ind > 3);
console.log(result);


// 4. reduce A -> 문자열, Number, [], {}
// accum은 초기값으로 정한 값인 0
result = ary.reduce((accum, curr, currIdx, arry) => { // accum: curr의 요소에 따라 누적값..
    console.log(accum, curr, currIdx);
    return accum + curr; // return에 따라 다음 순번의 초기값으로 쓰겠다
}, 0); // 초기값을 문자로 설정하겠다 = '', 숫자로 설정하겠다 = 0

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []); // 2. map과 같은 기능

// index가 3보다 큰 값들을 *2 해서 새로운 배열에 담겠다
result = ary.reduce((accum, curr, currIdx) => {
    if(currIdx > 3) {
        accum.push(curr * 2);
    }
    return accum;
}, []); // filter, map  
console.log(result);

// reduce는 map, filter 기능을 다 할 수 있ㄷㅏ..
