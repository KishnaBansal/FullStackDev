const numbers = [1,2,3,4,5];

const newNum = numbers.reduce((accumulator,currentV) => accumulator + currentV,0);
console.log(numbers);
console.log(newNum);