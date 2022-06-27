//2022 06 17 _2

// 객체 생성
function Student(sno, sname, age){
    this.sno = sno;
    this.sname = sname;
    this.age = age;
    this.showInfo = function(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}
let s1 = new Student('22-1111', '홍길동', 19);
let s2 = s1; // s1이 갖고있는 위치값을 s2에게도 주겠다..
s2.sno = '22-2222'
console.log(s1.showInfo());


function Table(param){ // this가 붙은것들은 속성들.....
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function(){
        this.tag += '<table border=1>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function(){
        this.tag += '<thead><tr>';
        this.fields.forEach(val => {
            this.tag += '<th>' + val + '</th>'; // 타이틀 
        });
        this.tag += '</tr></thead>'
        //return this.tag;
    }

    this.createBody = function (){
        this.tag += '<tbody><tr>'; 
        this.data.forEach((val) => {
            for(let field in val){
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr></tbody>'
        });
    }
}

let data = [{
    sname: '홍길동',
    age: 25,
    height: 182,
    weight: 65
},
{
    sname: '김김김',
    age: 26,
    height: 180,
    weight: 65
}, 
{
    sname: '박박박',
    age: 26,
    height: 184,
    weight: 67
}
]
let l1 = new Table(data);
let str = l1.createTable();
document.write(str);

// function() {this => window 객체}
// new 함수 => this: 객체(object)
// 이벤트 => this: 이벤트를 받는 대상?

// this가 
// 함수안에서 사용이 되면 전역객체(window)가 된다 ***중요***