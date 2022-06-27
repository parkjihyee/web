// 2022 06 20 _5

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

let objAry = JSON.parse(data); // JSON.parse() : 문자열을 => 오브젝트로 바꿔줌
console.log(data);
console.log(objAry);
console.clear();

let over3000 = objAry.filter((val, idx) => {
    return val.salary >= 3000; // filtering 처리
}).map((val, idx) => {
    let obj = {}; // A -> B
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);

// Female의 급여 평균 
let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        cnt++;
    });
avg = sum / cnt;
console.log(`여사원의 급여평균 ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
 // salaries - objAry.map(val => val.salary);
console.log(salaries);


function getMaxValue(ary){
    //배열 요소에서 제일 큰 값을 반환하는 함수
    let max = Number.MIN_SAFE_INTEGER;
    ary.forEach(val => {
        if(max < val) {
            max = val;
        }
    })
    return max;

}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);

function sortAscend(ary = []){
    // 오름차순 정렬하는 함수
    let numAry = ary;
    let newAry = [];
    ary.forEach(val => {
        let maxVal = getMaxValue(numAry);
        newAry.push(maxVal);
        let idx = numAry.indexOf(maxVal);
        numAry.splice(idx, 1);
    });
    return numAry;
}
//result = sortAscend(salaries);
console.log(salaries);

console.clear();


// reduce 메소드.
result = [1, 2, 3, 4].reduce(function (accum, curr , curIdx, ary){  // 누적, 현재, 인덱스값, 배열
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 ${accum + curr}`);
    return curr + accum;
}, 777); // map, filter 메소드
console.log(`최종 결과: ${result}`)


result = [1, 2, 3, 4].reduce(function (accum, curr){ 
    if (curr % 2 == 0) // 짝수값만 출력하기 위해서
        accum.push(curr); // 배열 마지막에 추가  //accum을 계속 반환.
    return accum; 
}, []); // accum = [1], [1,2], [1,2,3], [1,2,3,4]

// result = [1, 2, 3, 4].map(val => val);
// result = [1, 2, 3, 4].filter(val => {
//         if (val % 2 == 0) {
//             return val;
//         }
// })
//console.log(result);
console.clear();

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, curIdx, ary) => {
    if(curIdx == 0){
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if(curIdx == ary.length-1){
        accum += '</ul>';
    }
    console.log(accum);
    return accum;
},'');
console.log(result);
document.write(result);


result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if(accum > curr)
        return accum;
    else return curr;
},Number.MIN_SAFE_INTEGER); // max 값을 반환. 문제1)

result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    sum = 0 ;
    return accum + curr;
}); //합 구하기
console.log(result);


result = [3, 2, 4, 1, 5].reduce((accum, curr, curIdx, ary) => {
    if (curIdx == ary.length -1){
        return(accum + curr) / ary.length;
    }
    return accum + curr;
}); //평균 구하기
console.log(result);

