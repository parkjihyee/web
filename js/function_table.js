//2022 06 17 _1

//테이블 생성
function createTable(aryData) { 
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHead(fields); // <thead><tr><th>....</th></tr></thead>
    tag += head;

    let body = createBody(aryData); // <tbody><tr><td> 값 </td>...</tr></tbody>
    tag += body;

    tag += '</table>';
    //<table>...</table>
    return tag;
}

//헤더부분 생성 함수
function createHead(hhh){ // 괄호에 들어가는 값을 토대로 헤드 생성..
    let tag = '<thead><tr>'
    hhh.forEach(element => {
        tag += '<th>'  +element + '</th>';
    });
    tag += '</tr></thead>'
    return tag;
}

//바디 부분 생성 함수 *** 이해 못 했음!!
function createBody(bbb){ //[{sname:?, age:?, height:?, weight:?}, {}, {}]
    let tag = '<tr>';
    bbb.forEach(values => {
        for(let field in values){
            tag += '<td>' + values[field] + '</td>';
        }
    tag += '</tr>'
    });
    return tag;
}

// let tag = '<tbody>';
// bbb.forEach(element => {
//     tag += '<tr>';
//     for(let field in element) {
//         tag += '<td>' + element[field] + '</td>'; // 오브젝트의 갯수만큼 반복문을 돌게함 fot in
//     }
//     tag += '</tr>'
// })
// tag += '</tbody>';
// return tag;

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


let str = createTable(data);
console.log(str)
document.write(str);