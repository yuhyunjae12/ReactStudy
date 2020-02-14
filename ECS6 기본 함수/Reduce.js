// Reduce함수
// 인자값으로 preValue (누적값), value, index, array 를 가집니다.

let arr = [3,54,6,21,4];
const sum = arr.reduce((pre, val) => pre + val);
console.log(sum);

// 이전의 map 을 reduce로 변경 해보기

let arr1 = ['a','b','c','d'];

const arr1Result = arr1.reduce((pre, value, index) => {
    pre.push(index);
    return pre
}, []);

console.log(arr1Result);

// 이전의 Filter 를 reduce로 변경 해보기

let arr2 = [3,2,1,4,6,7];

const arr2Result = arr2.reduce((pre, value, index) => {
    if(value % 2 === 0){
        pre.push(value);
    }
    return pre;
}, []);

console.log(arr2Result);

// 이전의 Find 를 reduce로 변경 해보기
let arr3 = [3,45,6,1,2,7,8];

const arr3Result = arr3.reduce((pre, value, index) => {
    if(typeof pre == 'undefined' && value === 6){
        pre = value;
    }
    return pre;
}, undefined);
console.log(arr3Result);
