// 2022 06 20 _3

let arr = []; // new Array();
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1];

console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// 확장 for
for(let val of arr){
    console.log(val);
}

// forEach
arr.forEach((val, idx)=> {
    console.log(`${idx} => ${val}`); // 배열의 값 undefined이면 반복에서 제외
});

// arr.push('Apple'); //추가
// arr.unshift('Banana'); //추가
// arr.pop(); // 제일 마지막을 삭제
// arr.shift(); // 첫번째 삭제
console.clear();
arr.splice(0, 1); // 매개값을 뭘 쓰느냐에 따라 추가, 수정, 삭제 기능

arr.forEach((val, idx) =>{
    console.log(`${idx} => ${val}`); // 배열의 값 undefined이면 반복에서 제외
})