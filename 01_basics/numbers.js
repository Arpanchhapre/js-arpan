const score = 400
console.log(score) // 400
const balance  = new Number(100);
console.log(balance) // [Number : 100]  as  a Object

console.log(balance.toString().length)

console.log(balance.toFixed(2)); // presion value till two decimal like 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)) // intresting but complex 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

// ++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4));

// console.log(Math.round(4.3))
// console.log(Math.round(4.6))

// console.log(Math.ceil(4.2))
// console.log(Math.ceil(4.6))

// console.log(Math.floor(4.9))
// console.log(Math.floor(4.1))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min)