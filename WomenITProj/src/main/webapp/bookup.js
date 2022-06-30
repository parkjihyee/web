/**
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
	let tbl = document.querySelector('#show table');
	let capt = document.createElement('caption');

	// 리스트 출력
	let ajax = new XMLHttpRequest();
	ajax.open('get', 'book?cmd=list');
	ajax.send();
	ajax.onload = function() {
		let data = JSON.parse(this.responseText)

		let tbody = document.querySelector('#show tbody');
		data.forEach(book => {
			tbody.append(makeTr(book));
		})
	}

	document.forms.bookFrm.addEventListener("submit", function(e) {
		e.preventDefault();
		let formData = new FormData(e.target); // e.target = form
		for (let ent of formData.entries()) {
			console.log(ent);
		};

		fetch('book', {
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


let fields = ['book_code', 'book_name', 'book_auth', 'book_pres', 'book_amt'];

// 회원정보 => tr 생성
function makeTr(book) {
	console.log(book)
	let tr = document.createElement('tr');
	tr.setAttribute('id', book.book_code);
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = book[field]
		tr.append(td);

	})

	// 삭제버튼 생성
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', rowDelete, false);
	let td = document.createElement('td');
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
	let delCode = this.parentElement.parentElement.getAttribute('id');
	console.log(delCode)
	let formData = new FormData();
	formData.append("cmd", "delete");
	formData.append("delCode", delCode);
	fetch('book', {
		method: 'post',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		body: `cmd=delete&delCode=${delCode}`
	})
		.then(function(result) {
			return result.json();
		})
		.then(function(result) {
			console.log(result);
			if (result.retCode == 'Success') {
				document.getElementById(delCode).remove();
			}
			console.log(result);
		})
		.catch(function(err) {
			console.error(err);
		})
}
