// map 함수 ( 리액트에서 리스트 표기할때 많이사용 )
// 인자값으로 value, index, array 를 가집니다.
let arr = ['a','b','c','d'];

const arrResult = arr.map((value, index, array) => index)
console.log(arrResult);