/** 
 upload_jquery.js
 * Ajax => XMLHttpRequest, fetch, jQuery.ajax()
*/

$(document).ready(function() {
	// 페이지에 list 출력
	$.ajax({
		url: 'member',
		method: 'get',
		data: 'cmd=list',
		success: showList,
		error: function(err) {
			console.log(err);
		}
	});
	
	// 추가버튼 클릭
	$('form[name="memberFrm"]').on('submit', memberAddCallBack);
	
});

function memberAddCallBack(e){ // 이벤트..
	e.preventDefault();
	console.log(e.target);
	let fData = new FormData(e.target);	
	for(let d of fData.entries()){
		console.log(d);
	}
	//ajax => 데이터 등록(서블릿으로), 화면에도 추가(결과값 받아와서 ~하면 성공)
	$.ajax({
		url:'memberUpload',
		method:'post',
		data: fData,
		contentType: false,
		processData: false,
		dataType: 'json', // 결과값을 json형식으로 변경
		success: function(result){
			// 화면에 나타내기
			console.log(result);
			let tbody = $('#show > table > tbody');
			tbody.append(makeTr(result));
		},
		error: function(err){
			console.log(err);
		}
	});
}

// 위의 success 코드가 너무 길어서 따로 뺌 
function showList(result) {
	let tbody = $('#show > table > tbody');
	$(result).each(function(idx, elem) {
		tbody.append(makeTr(elem));
	});
}

function makeTr(elem) {
	let btn = $('<button />').text('삭제');
	btn.on('click', removeCallBack); // 이벤트 등록
	
	// null, '', 0, undefinde => false;
	let imgSrc = elem.memebImage ? '<img width="50px" src="images/' + elem.memebImage + '">' : ''; 	
	return $('<tr />')
			.attr('id', elem.membNo)
			.append($('<td />').text(elem.membNo),
			 $('<td />').text(elem.membName),
			 $('<td />').text(elem.membPhone),
			 $('<td />').text(elem.membAddr),
			 $('<td />').text(elem.membBirth),
			 $('<td />').html(imgSrc),
			 $('<td />').append(btn))
}

function removeCallBack(e){
	//비동기 호출
	let membNo = $(e.target).parent().parent().attr('id');
	$.ajax({
		url: 'member',
		method: 'post',
		data: 'cmd=remove&delNo=' + membNo, // 디비에서 삭제
		success: function(result) { // 성공시	
			if (result.retCode == 'Success') {
				$('#' + membNo).remove(); // 화면에서 삭제
			} else {
				alert('처리 중 에러 발생');
			}
		},
			error: function(err) {
				console.log(err);
			}
		})
	}; 
