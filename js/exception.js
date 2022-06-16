//2022 06 16 _3
let fname = document.getElementById('selectFile'); //id가 selectFile인 

let data = '';
try {

    const reader = new FileReader();
    reader.addEventListener('load', function () { //reader라는 객체가 생성되고나면 이벤트를 등록하겠다
        data = reader.result;
        console.log('파일 내용: ' + data);
    })

    reader.addEventListener('error', function () { //에러가 발생한다면 아래 구문을 던지겠다
        throw '파일 읽기 에러';
    })
    fname.addEventListener('change', function () { // fname의 요소들이 바뀌게되면 내용을 읽겠다
        reader.readAsText(fname.files[0], 'utf-8')
    })

} catch (err) {
    console.log(err.message);
    console.log('정상진행.');
}