// 2022 06 16 _4
// 객체 == 인스턴스(클래스의 구조를 따라 실체를 만든 것)
const student = {
    sno:'22-0123',
    sname: '홍길동',
    mathScore: 80,
    engScore: 90,
    age: 20,
    showInfo: function() {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

const student2 = {
    sno:'22-0123',
    sname: '이주연',
    mathScore: 85,
    engScore: 95,
    age: 25,
    showInfo: function() {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}


class Student {
    constructor(sno, sname, age){   // 생성자
        this.sno = sno;
        this.sname = sname;
        this.age = age;
    }
    //메소드
    setmathScore(mathScore){
        this.mathScore = mathScore;
    }
    setengScore(engScore){
        this.engScore = engScore;
    }
    showInfo(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

const student3 = new Student('22-0111', '이재현', 26);
student3.setmathScore(88);
student3.setengScore(100);

console.log(student2.showInfo());
console.log(student3.showInfo());