
// upload.js

// html을 다 읽고 난 다음에 함수 안을 실행하시오 
// body까지 다 읽고난 다음에 script 실행하시오 라는 의미
document.addEventListener('DOMContentLoaded', function() {
	let tbl = document.querySelector('#show table');
	let capt = document.createElement('caption');
	capt.innerHTML = '회원리스트';
	tbl.append(capt);

	// 리스트 출력 (해보기)
	let ajax = new XMLHttpRequest();
	ajax.open('get', 'member?cmd=list');
	ajax.send();
	ajax.onload = function() {
		let data = JSON.parse(this.responseText)

		let tbody = document.querySelector('#show tbody');
		data.forEach(member => {
			tbody.append(makeTr(member));
		})
	}

	// form 기본 기능 대신해서 ajax로 처리 (XMLHttpRequest나 fetch 사용)
	document.forms.memberFrm.addEventListener("submit", function(e) {
		e.preventDefault();	// 기본 기능 차단
		let formData = new FormData(e.target); // e.target = form
		for (let ent of formData.entries()) {
			console.log(ent);
		};

		// get: url, post: 추가정보지정
		fetch('memberUpload', {
			method: 'post',
			body: formData
		})
			.then(function(result) {
				return result.json();
			})
			.then(function(result) {
				console.log(result);
			})
			.catch(function(err) {
				console.error(err);
			})
	})

});


let fields = ['membNo', 'membName', 'membPhone', 'membAddr', 'membBirth', 'memebImage'];

// 회원정보 => tr 생성
function makeTr(member) {
	console.log(member)
	let tr = document.createElement('tr');
	tr.setAttribute('id', member.membNo); // tr의 attribute중에 id를 활용
	tr.addEventListener('click', showDetail);
	fields.forEach(field => {
		let td = document.createElement('td');
		// null, 0, undefined, '' => false 이외 true;
		td.innerHTML = member[field] ? (field == 'memebImage' ? '<img width="60px" src="images/' + member[field] + '">' : member[field]) : '';
		// 참이면 ? 뒤의 값을 innerHTML에, 거짓이면 (괄호 안)실행

		tr.append(td);

	})

	// 삭제버튼 생성
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', rowDelete, false); // 디폴트값은 왜false? 하위요소부터 상위요소로.. true이면 상위요소부터 하위요소로 찾아가기 때문? / bubble, capture
	let td = document.createElement('td'); // 표 테두리안에 넣게하기위해
	td.append(btn);
	tr.append(td);

	// 체크박스 생성 input type='checkbox'
	let cbox = document.createElement("input");
	cbox.setAttribute('type', "checkbox");
	td = document.createElement('td');
	td.append(cbox);
	tr.append(td);

	return tr;
}
function rowDelete() {
	let delId = this.parentElement.parentElement.getAttribute('id');
	let formData = new FormData();
	formData.append("cmd", "delete");
	formData.append("delId", delId);

	fetch('memberUpload', {
		method: 'post',
		headers: { 
			'Content-type': 'application/x-www-form-urlencoded' },
		body: `cmd=delete&delId=${delId}`
	})
		.then(function(result){
			return result.json();
		})
		.then(function(result){
			console.log(result);
			// 화면에서도 지워지도록 기능 추가.
			if(result.retCode == 'Success'){
				document.getElementById(delId).remove();
			}
			console.log(result);
		})	
		.catch(function(err){
			console.error(err);
		})
}

//tr을 클릭 => form 요소 보여주기(children 사용해서)
function showDetail() {
	//선택한 tr의 자식요소를 form에 보여주기 
	//console.log(this.children[0].innerHTML); //tr의 첫 번째 요소의 innerHTML(tag 안의 값)을 가져옴
	console.log(this.children[4].innerHTML); //this는 tr태그
	document.getElementById('memberNo').value = (this.children[0].innerHTML);
	document.getElementById('memberName').value = (this.children[1].innerHTML);
	document.getElementById('phone').value = this.children[2].innerHTML;
	document.getElementById('address').value = this.children[3].innerHTML;
	document.getElementById('birth').value = this.children[4].innerHTML.substring(0, 10);

}

