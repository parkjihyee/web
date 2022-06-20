// 2022 06 20 _2

let today = new Date('2022-06-19');
today = new Date(2022, 6, 0); // 
console.log(`올해는 ${today.getFullYear()}년`);
console.log(`이번 달은 ${today.getMonth()+1}월 입니다.`); // 0~11
console.log(`오늘은 ${today.getDate()}일 입니다.`);
console.log(`오늘은 ${today.getDay()}`); // 0(일요일) ~ 6 

// 6월 달력 작성. 6월 1일의 요일(getDay), 6월의 마지막 날(getDate)
let year = 2021;
let month = 6;

makeCalendar(year, month);

function makeCalendar(y, m){
    let dayInfo = new Date(y, m, -1).getDay(); //매개값으로 들어온 월의 요일
    let lastDateInfo = new Date(y, m, 0).getDate(); //마지막날의 정보
    
    // 년, 월, 달력 정보 생성
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption> [ ${y}년 ${m}월 ] </caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>'; //colunm
    }
    str += '</tr><tr>';
    for (let i = 0; i < dayInfo; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= lastDateInfo; i++) {
        str += '<td>' + i + '</td>';
        if ((dayInfo + i) % 7 == 0) { // 7의 배수
            str += '</tr><tr>'
        }
    }
    str += '</tr></table>';
    document.write(str);
}