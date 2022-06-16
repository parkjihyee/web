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
    return val.length == 3;
}); // 함수를 매개값으로 받는다
console.log(searchname);

// p.100 예제
class Estimate {
    //생성자 constructor
    constructor(param) {
        this.unit = param; //unit이라는 속성에 param을 담겠습니다?
    }
    // 견적가
    getEstimate(unitType, width, height) {
        let priceInfo = this.unit.find( item => item.type == unitType); // {type:'wood', price: 100}
        return priceInfo.price * width * height;
    }
    // 새로운 요소 추가
    addUnit(unit){
        this.unit.push(unit);
    }
}

let unitInfo = [{type: "wood", price: 100}, {type: "iron", price: 300}, {type: "plastic", price: 200}];
const estimator = new Estimate(unitInfo);
estimator.addUnit({type:'glass', price:500}) // 새로운 단위 추가

let amt = estimator.getEstimate('glass', 20, 30);
console.log(amt);


//object 타입으로 가능
let obj = {
    // unit: unitInfo,
    // getEstimate: function() {},
    // addUnit: function() {}
};
//위 방법으로 하거나 아래 방법으로 하거나.

obj.unit = unitInfo;
obj.getEstimate = function(unitType, width, height){
    let priceInfo = this.unit.find( item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit = function(unit){
    this.unit.push(unit);
}
let result = obj. getEstimate('wood', 20, 20);
console.log(result);