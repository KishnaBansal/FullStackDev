//with one parameter
const square = num => num * num;
console.log(square(4));

//multiple parameters
const add = (a,b) => a+b;
console.log(add(10,4));

//no parameters
const greet = () => "Hello World!";
console.log(greet());


const multiply = (a,b) => {
    const product = a * b;
    return product;
}
console.log(multiply(10,4));