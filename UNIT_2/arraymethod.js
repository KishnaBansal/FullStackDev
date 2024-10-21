//Initialize
let num = [1,2,3];
console.log(num);

//push()
num.push(4);
console.log(num);

//pop()
num.pop();
console.log(num);

//shift()
num.shift();
console.log(num);

//unshift()
num.unshift(4)
console.log(num);

//splice()
num.splice(1,1,5,6);
console.log(num);

//slice()
let slicednum = num.slice(1,3);
console.log(slicednum);

//concat()
let num2 = [10,11];
let allNum = num.concat(num2);
console.log(allNum);

//foreach()
console.log("forEach() output: ");
allNum.forEach(function(x) {
    console.log(x);
});

//find()
let findNum = allNum.find(function(num){
    return num == 4;
});
console.log(findNum);

//sort()
allNum.sort();
console.log(allNum);

allNum.reverse();
console.log(allNum);