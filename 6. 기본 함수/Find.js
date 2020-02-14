// Find 함수
// find뜻 그대로 찾는 함수 입니다. (동일한 값이 있을 경우 첫번째만 리턴)
let arr = [3,45,6,1,2,7,8];

const arrResult = arr.find((value, index, array) => (value === 6));
console.log(arrResult);
