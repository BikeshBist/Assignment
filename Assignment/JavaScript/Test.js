// Write the following 3 functions in javascript:

const isEven= function(x){
    return x % 2 === 0;
}
const multiplyByTwo= function(x){
    return x*2;
}
const aggregateFunction= function(x,y){
    return x-y;
}

let numbers = [2, 3, 8, 9, 12, 10, 44, 45, 67, 33, 13, 1];
console.log("Input :" + numbers);

// These functions should be passed into filter, map and reduce functions respectively.
let evenNumbers = numbers.filter(isEven);
let result = numbers.map(multiplyByTwo);
let sum = numbers.reduce(aggregateFunction);

console.log("Output :");
console.log("Even numbers are:" + evenNumbers);
console.log("Numbers multiplied by two are:" + result);
console.log("The sum is:" + sum);