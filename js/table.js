// 2022 06 16 _5

let data = [{
        sname: 'Lee',
        age: 25,
        height: 180,
        weight: 65
    },
    {
        sname: 'Kim',
        age: 26,
        height: 184,
        weight: 67
    }
]

class Table {
    // 생성자 
    constructor(ary) {
        this.aryData = ary; //[{}, {}]
    }

    // 메소드
    createTable() {
        this.tag = '<table border=1><tr>'; //속성 선언?
        // 헤더 정보 <thead>...</thead>
        for (let field in this.aryData[0]) { // {sname:'Lee', age: 25}
            this.tag += '<th>' + field + '</th>';
        };
        this.tag += '</tr>';

        // 바디 정보 <tbody>...</tbody>
        this.aryData.forEach((val, idx) => {
            //console.log(val);
            this.tag += '<tr>'
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>'
        });

        this.tag += '</table>';

        return this.tag;
    }
}

let table = new Table(data);
let str = table.createTable(); // => 표 형식으로 data를 출력
console.log(str);
document.write(str);

console.log('HongKildong'.length); //11
let names = ['Hong', 'Hwang', 'Kim', 'Park'];
names.push('Choi');

let searchname = names.find(function (val) {
    //return val == 'Hwang'; // 리턴값이 true면 그 값을? 반환
    return val.length == 5;
}); // 함수를 매개값으로 받는다
console.log(searchname);

