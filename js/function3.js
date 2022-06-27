//2022 06 16 _2

function sumNumber(){
    console.log(arguments); //함수가 호출되면 arguments 객체를 가지고 처리한다?
    let result = 0;
    for (let i = 0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

sumNumber(1, 2, 3, 4, 5);
//sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

// 나머지 파라미터
function sumParam(...args){ // 갯수가 가변적으로 처리되도록 하겠다. / args: 변수 이름
    let result = 0;
    args.forEach((val) => {
        result += val;
    }); // callback함수
    return result;
}
console.log(sumParam(1, 2, 3, 4, 5, 6));

// 커링함수
// 이 함수를
function orderSet(burger, beverage){ 
    console.log('버거: ' + burger + ', 음료: '+ beverage);
}
orderSet('치즈버거', '콜라');

// 커링함수로 변환하면
function orderSet_curring(burger){
    return function(beverage){
        console.log('버거: ' + burger + ', 음료: ' + beverage);
    }
}
let beverageFnc = orderSet_curring('새우버거');
beverageFnc('사이다');
beverageFnc('환타');
//console.log(orderSet_curring('새우버거')('제로콜라'));

//펼침 연산자
let args = [1, 3, 5];
function fnc(...args){

}

let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2]; //두 배열 요소를 합쳐서 새로운 배열
console.log(args.concat(another));


let obj1 = {name: 'Lee', age: 25, weight: 63}
let newObj = {name: 'Kim', age: 26, height: 183};
let obj3 = {sno: '12345'}
//let obj2 = {...newObj, ...obj1} // new Object / obj1이 newObj를 머지함..?
let obj2 = {...newObj, ...obj1, ...obj3} // new Object
console.log(obj1, obj2);


let comObj = {
    sno: '22-010101',
    sname: 'Lee',
    score: 80,
    hobby: ['reading', 'running'],
    pet: [{cname:'야옹이', age: 2}, {dname:'멍멍이', age: 3}]
}

comObj.sname;
comObj.hobby[0]; 
comObj.pet[0].age;
comObj.pet[1].dname;

console.log(comObj.pet[1].dname);

//05-(1)
function restparams(...args){
    console.log(args);
}
restparams(1,2,3,4);

//05-(2)
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//05-(3,4)
function sum(a, b, ...args){
    let result = 0;
    if(a != undefined){result = a;} else {return 0;}
    if(b != undefined){result += b;}
    result += args.length > 0 ? args.reduce((subsum, arg)=>subsum+arg) : 0 ;
    return result;
    }
console.log(sum(1,2,3,4));
console.log(sum(1, 2));
console.log(sum(1));


var a = 1;
var b = 5;

function outerFunc(){
    function innerFunc(){
        a = b;
    }
    console.log(a); // 1
    a = 3;
    b = 4;
    innerFunc();
    console.log(a); // 4
    var b = 2;
    console.log(b); // 2
}
outerFunc();
console.log(b); //5