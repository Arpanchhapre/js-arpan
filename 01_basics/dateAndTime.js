//Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let myCreatedDate = new Date(2023,0,23) // in JavaScript months are starts from 0.
//let myCreatedDate = new Date(2023,0,23,5,3);
//let myCreatedDate = new Date("2023-01-14") // in dd-mm-yy month starts from 01.
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // miliseconds value
// console.log(myCreatedDate.getTime()) // converting to milisecond value for comparing dates

console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate)

console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

console.log(`${newDate.getDay()} and time is ${newDate.getTime()}`) // String interpollution 

console.log(newDate.toLocaleString('default' , {
    weekday : "long",
   
}) )


