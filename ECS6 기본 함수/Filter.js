// Filter 함수
// 요소를 걸러내어 배열로 true/false 반환
let arr = [3,2,1,4,6,7];

const arrResult = arr.filter((value, index, array) => (value % 2 === 0));
console.log(arrResult);