//Array
const myArr = [0,1,2,3,4,5] // element can be any type like string number and boolean , null  anything
// array in javascript can be resized any time
//console.log(myArr)

const myheros =["shaktiman" , "chhotaBheem"]
// in array we also have prototype function

myArr.push(6)
myArr.push(7) // add alement in array at last
//console.log(myArr)

myArr.pop()
//console.log(myArr) // remove an element from the last of the array

myArr.unshift(7) // add element in the first of array
//console.log(myArr)

myArr.shift() // remove element from a first of array
//console.log(myArr)

//console.log(myArr.includes(5))
//console.log(myArr.indexOf(2))

//const newArr = myArr.join() // convert all values in string

 
//console.log(myArr)
//console.log(newArr)

//slice , splice
console.log(myArr)
 console.log("A", myArr); 

 const myn1 = myArr.slice(1,3) // 

 console.log(myn1)
 console.log("B " , myArr)

 const myn2 = myArr.splice(1,3)
console.log("c ",myArr)

 console.log(myn2);
 console.log(myArr)

 // the main difference between slice and splice is that 
 // 1 . slice does not include second argument and does not manipulate the original Array
 // 2 . splice inclides second argument and manipulate the original Array as well.

 