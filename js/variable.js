console.log("Hello, World!")
document.write('<h3>HELLO WORLD!</h3>')

let num = 0;
num = 'HELLO';
num = 10;
num = true;
num = null; // object : class의 인스턴스
let num1;

console.log(num);
console.log(typeof num);
console.log(num1); // undefined

num1 = 100;
//num2 = 200; // 변수의 선언 없이 사용되면 : 전역 객체(window)의 속성
let num2 = 200; 
console.log(num1+num2);

console.log(window);

// window.alert('안녕하세요') //window object가 가지고 있는 기능

// 변수 하나에 학생 이름, 학생 번호, 영어, 수학 점수 담고 싶을 때 object 사용?
let student = new Object(); // object 타입 선언
student.sno = '22-0115';
student.name = '홍길동';
student.engScore = 90;
student.mathScore = 80;

console.log(student);

let person = {
    fname: '이주연',
    age: 25,
    height: 180,
    showInfo: function(){
        return this.fname + ', ' + this.age + ', ' + this.height; //this는 person을 가리킴
    }
}
person.weight = '68'; // 추가적으로 person이라는 object에 weight 정보 추가

console.log(person.fname);
console.log(person.showInfo());

console.log(person['age']);

let field = 'height'; // field 라는 변수를 선언해서 height 값을 넣음
console.log(person[field]); // 위에서 선언한 field값 출력

// 전체 필드를 loop (전체 필드를 읽고 싶을때 반복문 사용?)
//debugger;
for(let field in person) { // person이라는 object가 갖고 있는 field라는 변수를 통해 모두 출력. for문 안에서만 값을 가짐. 위에서 height를 선언한 field가 아님
    console.log(field, '=>', person[field]);
}
console.log(field);
let x = 10 ; let y = 20

// 변수 me => 이름, 취미, 연락처, 주소 담기 / 소개: 이름, 취미, 연락처 반환해주는 속성 선언
let me = {
    name: '이재현',
    hobby: 'reading',
    phone: '010-1234-0913',
    home: '대구광역시 남구',
    introduce: function(){
        return this.name + ', ' + this.hobby + ', ' + this.phone + ', ' + this.home;
    }
}
console.log(me.introduce());