// 2022 06 21 _2

let data = `[{"id":1,"first_name":"Izaak","last_name":"Archambault","email":"iarchambault0@shop-pro.jp","gender":"Male","salary":3028},
{"id":2,"first_name":"Maisie","last_name":"Gilkison","email":"mgilkison1@elpais.com","gender":"Female","salary":3355},
{"id":3,"first_name":"Myrvyn","last_name":"Swannack","email":"mswannack2@comsenz.com","gender":"Male","salary":2207},
{"id":4,"first_name":"Gualterio","last_name":"Morman","email":"gmorman3@disqus.com","gender":"Non-binary","salary":3455},
{"id":5,"first_name":"Karlen","last_name":"Kelf","email":"kkelf4@is.gd","gender":"Female","salary":1143},
{"id":6,"first_name":"Christiane","last_name":"Dewar","email":"cdewar5@geocities.jp","gender":"Female","salary":3615},
{"id":7,"first_name":"Emiline","last_name":"Muggleton","email":"emuggleton6@guardian.co.uk","gender":"Genderqueer","salary":1233},
{"id":8,"first_name":"Wainwright","last_name":"Johnigan","email":"wjohnigan7@theatlantic.com","gender":"Male","salary":4546},
{"id":9,"first_name":"Nicola","last_name":"Victory","email":"nvictory8@youtu.be","gender":"Female","salary":2385},
{"id":10,"first_name":"Adan","last_name":"McClory","email":"amcclory9@icq.com","gender":"Male","salary":4947},
{"id":11,"first_name":"Horton","last_name":"Scullion","email":"hsculliona@stumbleupon.com","gender":"Male","salary":3804},
{"id":12,"first_name":"Rex","last_name":"Simkins","email":"rsimkinsb@is.gd","gender":"Bigender","salary":4914},
{"id":13,"first_name":"Farrel","last_name":"Fansy","email":"ffansyc@pagesperso-orange.fr","gender":"Male","salary":4223},
{"id":14,"first_name":"Kylie","last_name":"Yoskowitz","email":"kyoskowitzd@fotki.com","gender":"Male","salary":4965},
{"id":15,"first_name":"Paxon","last_name":"Cluatt","email":"pcluatte@booking.com","gender":"Male","salary":1054}]`;

let ary = JSON.parse(data); // js에서 쓰는 오브젝트타입으로 변환
//console.log(ary)

// forEach - 매개값 3개
ary.forEach(elem => {
    if(elem.id % 2 == 1) {
       console.log(elem)
    }
}); 
//위 조건을 만족하는 새로운 배열을 만들고싶다
let femaleAry = ary.filter((elem) => elem.gender == 'Female'); // gender == 'Female'
console.log(femaleAry)

// 맵핑의 의미를 보기 위해서 만든 예제
let newCompany = ary.map(elem => {  // elem : A
    let newElem = {}; // newElem: A'
    newElem.nId = elem.id;
    newElem.name = elem.first_name + ',' + elem.last_name;
    newElem.salary = elem.salary * 1.5;
    newElem.isNew = elem.salary > 4000 ? false : true; // 연봉 4000이 넘으면 flase
    return newElem;
}) // A -> A'
// .forEach(elem => console.log(elem))
.filter(elem => elem.isNew) // true값만 isNew에 담겠다
console.log(newCompany)


// 새로운 회사 직원들의 급여 합 reduce 사용
let sum = 0;
let result = newCompany.reduce((accum, curr) => {
    sum += newCompany.salary
    console.log (sum)
}); 
