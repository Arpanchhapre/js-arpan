// #primitive datatype => 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 


// # Refference (Non-primitive)
//Arrays , Objects , 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail = null;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8236413874908134n;

console.log(bigNumber);

const heros = ["shaktiman ", "naagraj","doga"]
console.log(heros);

let myObj = {
    name : "arpan",
    age : 22,
}
console.log(myObj);

const myFunction = function(){
    console.log("hello Arpan");
}

console.log(myFunction)

console.log(typeof myFunction)  //Function Object
console.log(typeof Symbol)
console.log(typeof null)

