// 2022 06 20 _6

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

let gender = prompt('Male of Female을 입력');
console.log(gender);

let objAry = JSON.parse(data); // parse 처리: 문자열 => 오브젝트로 
console.log(objAry);

// 표 형태로 출력 <table><tr><td>a?</td></tr><tr><td>a?</td></tr> ... </table>
let result = objAry.reduce(function (accum, curr, curIdx){
    if( curIdx == 0 ) {
        accum += '<table border=1>' 
    }
    if( curr.gender == 'Male') { // 사용자가 입력한 값과 동일한 성별   
    accum += '<tr>';
    for (const field in curr) { // 오브젝트의 속성의 갯수만큼 생성
      accum += `<td>${curr[field]}</td>`;
    }
    accum += '</tr>'
    }
    if (curIdx == objAry.length -1){
        accum += '</table>';
    }
    return accum;
}, '');
document.write(result);