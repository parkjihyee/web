let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27]; // 초기화
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 70;
ary[10] = 100;

console.log(typeof ary[7]);

for (let i = 0; i<ary.length; i++){
    console.log(i + '번째 ' + ary[i]);
}

ary = ['사과', '바나나', '고구마']

console.clear(); // 그동안 출력한 log 지움
for (let val of ary){
    console.log(val); 
    document.write('<li>' + val + '</li>');
}
document.write('</ul>');

ary = [
    {name:'이주연', age:25, phone: '010-1234-0115'},
    {name:'이재현', age:26, phone: '010-1234-0913'},
    {name:'김영훈', age:26, phone: '010-1234-0808'}
]
// document.write('<ul>');
// for(let person of ary){
//     document.write('<li>' + person['name'] + ', '+ person['phone'] + '</li>');
// }
// document.write('</ul>');
let str = '';
str += '<ul>'
 for(let person of ary){
    str += '<li>이름: ' + person['name'] + ', ' + '나이: ' + person['age'] + ', ' + '연락처: ' + person['phone'] + '</li>';
}
str += '</ul>';

//<table><tr><td>이주연</td><td>25</td><td>010-1234-0115</td></tr>...</table>
str += '<table border = 1>';
 for(let person of ary){
    str += '<tr>'
        str += '<td>'
            str += person['name']
        str += '<td>'
            str += person['age']
        str += '<td>'
            str += person['phone']
            str += '</tr>'
}
str += '</table>';
console.log(str);
document.write(str);

const v1 = 'hello'; // 상수. 값을 한 번 지정하고 나면 바꿀 수 없음
// v1 = 'new';

//원시타입 vs 참조타입 //원시: 두 개중에 하나를 바꾸더라도 서로 영향일 미치지 않음
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);

//참조타입
let o1 = {name:'one'}; // o1이 가리키는 name의 번지수를
let o2 = o1; // o2에도 대입
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2); //o1, o2 중에 하나만 바뀌더라도 함께 바뀜

const obj = {
    sno: '22-12345',
    sname: 'Lee'
}
obj.sno = '22-22222'; //obj 상수변수에 값을 새롭게 선언하는것이 아니고 
                      //obj가 참조하고 있는 속성의 값을 변경하는것은 가능
//obj = ''; //새로운 값을 할당-> 오류

// var vs let : 변수 선언하는 키워드
// var 변수선언 : 변수의 scope => 전역변수 / 지역변수
let var1 = 'hello';

//let은 블럭레벨(={})로 선언 가능
//var은 var a1, var a1 두 번 선언해도 오류가 안 남.

function localFnc(){
    let var2 = 'nice'; // 함수안에서 선언된것은 지역변수(local variable)
    console.log(var2);
    console.log(var1);
}
localFnc(); //함수 호출. console에 nice 출력됨

// console.log(var2); => undefined 오류 뜸
console.log(var1);

console.log(a1);
var a1 = 'hello';
var a1 = 'hello';

var num; // 이거랑 아래가 같은 의미
for ( num of ary){
    console.log(num);
}
console.log(num);