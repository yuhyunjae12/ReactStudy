let numberList =[1,2,3,4,5];
let numberResult = [];

for(let i =0 ; i < numberList.length; i++){
    numberResult.push(numberList[i]);
}

console.log('nomarl : ' + numberResult);

numberList.forEach(function (no){
    numberResult.push(no);
})

console.log('forEach ver1 : ' + numberResult);

number.forEach((no) => {
    numberResult.push(no);
})

console.log('forEach ver2 : ' + numberResult);
