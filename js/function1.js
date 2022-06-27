
function sum(n1, n2){
    return n1 + n2;
}
console.log(sum(10,20));
console.log(sum('10', '20')); // +

function minus(v1, v2){
    return v1 - v2;
}
console.log(minus('20','10')); // 문자열로 값을 줬는데도 10이 출력됨

function sumAry(ary){

}
let numAry = [20, 27, 33, 19, 44];
let result = sumAry(numAry);

result = 0;
numAry.forEach(function(val, idx, ary) {
    //console.log(a, b, c); 
    //result += val; // result = result+val => resutl+val의 결과를 다시 result에 넣음
    if(val % 2 == 1)
    result += val;
}); // 메소드의 매개값으로 함수를 받음 : 콜백함수
//console.log('배열의 합: ' + result);

console.log('홀수 배열의 합: ' + result);