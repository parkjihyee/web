// 2022 06 20 _1
// string_literal

let str = 'Hello'; // "Hello"
str = `Hello`; // 문자열 표현 방식

let person = {
    name: 'hong',
    age: 20,
    showInfo: function(){
        // return '이름은 ' + 'this.name' + ', 나이는 ' + this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}
console.log(person.showInfo());

console.log(`나의 이름은 ${person.name}`);

console.log(`${person.age >= 20 ? '성인' : '청소년'}`);

let strings = 'This\nis\na\nwater';
strings = `This
is
a
phone`;
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = '950101-1324567'; // replace의 역할: 하이픈을 없앤 상태로 만들어줌
jm = 9801151234567;

function checkGender(num = ''){
    let jnum = num.replace('-', '');
    jnum = num.substr(-7,1);
    console.log(jnum);

    switch(jnum){
        case '1':
        case '3':
            return '남자';
        case '2':
        case '4':
            return '여자';
    }
    //return '여자' || '남자';
}
let result = checkGender(jm);