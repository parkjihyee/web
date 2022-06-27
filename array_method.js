// 2022 06 21 _3

// some: 조건을 만족하는 요소가 하나라도 있으면 true / 없으면 false
// every: 조건을 다 만족하면 true리턴
// find: 찾기
// indexOf: 배열요소 => 인덱스 값 반환
// sort(); : 정렬 / 문자에는 쓸 수 없음. 배열에만 사용 가능
// split(구분자) : 문자열 -> 배열
// join(구분자) : 배열 -> 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8);

let str = `A demonstration of what can be accomplished through CSS-based design. Select any style sheet from the list to load it into this page.`
let strAry = str.split(' '); // 공백을 기준으로 문장을 나누고 / 반환타입이 배열로 만들어짐
idx = strAry.indexOf(`CSS`);
let names = ['박은지', '윤정은', '박지혜', '김나희']
idx = names.indexOf('김나희');

let result = names.find(function(elem, idx, ary){
    return elem == "김나희"
});
console.log(result);


// 배열안에 있는게 어떤 값인지 모를때?
result = [6, 4, 3, 21, 14].find(elem => {
    //return elem % 7 == 0;
    return elem > 100;
});
console.log(result);


result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    console.log(elem, idx, ary);
    return elem > 20; // 만족하는 요소가 하나라도 있으면 true
});
console.log(result);

console.clear();
let tempAry = [];
for(let i=0; i<15; i++){
    let temp = parseInt(Math.random() *10) + 1 ; // Math.random: 0 <= x < 1 / 1~10까지 임의의 수 만들기
    console.log(temp);
    tempAry.push(temp);
}
// 1. tempAry 배열의 값이 다 짝수인지 확인
result = tempAry.every((elem, idx, ary) => {
    return elem % 2 == 0;
});
console.log('ex1: ' + result);

// 2. tempAry 배열의 값 중에 3의 배수 존재 확인
result = tempAry.some(elem => {
    return elem % 3 == 0;
});
console.log('ex2: ' + result);

// 다시 하기! 3. 5보다 큰 값이 있으면 그 값을 반환
result = tempAry.find(elem => {
    return tempAry.filter((elem) => elem >5 );
});
console.log('ex3: ' + result);


// sort
console.clear();
result = [6, 4, 3, 21, 14].sort(function (a,b){
    return b - a; // - 오름차순, + 내림차순

    // if(a < b){
    //     return -1; // 오름차순 정렬
    // } else {
    //     return 1; // 
    // }
});
//console.log(result);

let objAry = [{ // object 타입이라 기준이 없어서 콜백함수에 기준을 작성..?
    name: "홍길동",
    age: 18
} , {
    name: "이주연",
    age: 25
} , {
    name: "박세민",
    age: 19
}];
console.clear();
console.log("홍" < "박"); // 가나다순
result = objAry.sort(function (a, b){
    // if(a.name < b.name){
    //     return -1;
    // }else{
    //     return 1;
    // }
    return a.name < b.name ? -10 : 10; // 위의 식을 간단하게 표현
});
//console.log(result);

// join 
// result = ['홍길동', '백민규', '김상우'].join('-'); 
names = '권소정,김하은,유선희,김가윤'; // -> '권소정, 김가윤, 김하은, 유선희'
result = names.split(',');
result = result.sort();
result = result.join('/');
console.log(result);


result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    //console.log(elem, idx, ary);
    return elem % 2 == 0;
});
//console.log(result);


// t가 몇 번 들어있는지
strAry = 'Littering'.split(''); 
strAry.forEach((elem) => {
    let cnt = 0;
    cnt += elem == 't' ? 1 : 0;
//  console.log(cnt);
});

cnt = strAry.reduce((accum, curr)=> {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
// console.log('cnt: ' + cnt);

// lastIndexof(); 뒤에서부터 