{
    /* <table border="1">
        <tr>
            <td>2</td>
            <td>*</td>
            <td>1</td>
            <td>=</td>
            <td>2</td>
        </tr>
    </table> */
}

let str = '<table border=1>';
let num = 2;
for (let i = 1; i <= 9; i++) {
    str += '<tr><td>' + num + '</td><td>*</td><td>' + i + '</td><td>' + (num * i) + '</td><tr>'
}
str += '</table>';
document.write(str);

//달력만들기
let month = 6;
showCalendar(month);

function showCalendar(month) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = '<table border=1><caption>' + month + '월 달력' + '<tr>';
    for (let day of days) {
        str += '<th>' + day + '</th>'; //colunm
    }
    str += '</tr><tr>';
    let vtd = getFirstDay(month); // 4
    for (let i = 1; i < vtd; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= getLastDate(month); i++) {
        str += '<td>' + i + '</td>';
        if ((vtd - 1 + i) % 7 == 0) { // 7의 배수
            str += '</tr><tr>'
        }
    }
    str += '</tr></table>';
    document.write(str);
}

    //console.log(getFirstDay(6));

    // 실습
    function getLastDate(mon) {
        // 매개값으로 월 정보를 주면 
        // 1,3,5,7,8,10,12 => 31
        // 4,6,9,11 => 30
        // 2 => 28
        switch (mon) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 30;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return 28;

        }
    }



    function getFirstDay(mon) { // 월 정보를 넣으면 1일의 위치를 리턴?
        switch (mon) {
            case 1:
                return 7;
            case 2:
            case 3:
                return 3;
            case 5:
                return 1;
            case 6:
                return 4;
            case 7:
                return 6;
            default:
                0;
        }
    }