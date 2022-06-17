//2022 06 17 _3

let str = 'Hello'; // 문자열
let str1 = new String('Hello'); // 문자열 객체

console.log(str == str1); // 값만 비교
console.log(str === str1); // 타입 & 값 비교

console.log(str === str1.valueOf()); // 문자열을 원시타입으로 변경?


let num = new Number(123); // number => object?
let num1 = 123; // 기본데이터타입 : number;

// console.log((123).valueOf()); // 객체를 기본 데이터타입으로 변환해줌
console.log(num.valueOf() === num1);

// 원시 타입: string, number, boolean, undefined, 
// 객체 타입: 함수, object({name:?, age:?}), 배열, null

console.log("Hello".trim());
console.log("This is the only story".slice(10, 15)) // 15번째는 포함 x

const strr1 = 'This is the only one story';
console.log(strr1.substring(8,11));
console.log(strr1.substring(11,8));

console.log(strr1.substring(11,-8)); // = .substring(0,11)
console.log(strr1.substring(10,4)); 



// index of()

// search()
// only, story
let ary = [];
let only = {};
let reg = /good/; // new RegExp();
let regStr = "GOOD MORNING, GOOD AFTERNOON, good evening, and good night";
//console.log(regStr.replace('good', 'bad'));
//console.log(regStr.replace(/good\s/gi, 'bad'));
//console.log(regStr.toLowerCase().replace('good', 'bad'));
//console.log(regStr.replace(/good/i, 'bad'));
console.log(regStr.replace(/good/gi, 'bad'));


// substr() 첫번째 파라메터: 인덱스, 두번째: 가져 올 문자열 길이
console.log(strr1.substr(8,11));

// toString()
const numm1 = 123;
const numm2 = 123.45;
const bool = true;
const sstr = '문자열타입';
const arr = [1,2,'a','b',3];
const obj = {key: 'data', value: 15};

console.log(numm1.toString());
console.log(numm2.toString());
console.log(bool.toString());
console.log(sstr.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());

console.log(regStr.includes('even'));

let strarr = ['good', '', 'morning', '!'];
console.log(''.concat(...strarr));

var str2 = '     how are you     to    day   everyone.   ';
//console.log(str2.trim());
//console.log(str2.replace(/\s/g, ''));
console.log(str2.replace(/\s+/g, ' '));

