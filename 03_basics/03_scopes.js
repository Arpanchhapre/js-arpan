
// let a = 20
//                      //{}// scope
// if(true){
// let a = 10
// const b = 20
// //var c = 30
// console.log("inner : ",a)
// }

// console.log(a);
// //console.log(b);
// //console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)  // ander ka funnction bahar k function ko access kr pata h 0r a child function can access parent functiom
                               // but a parent function cant access child function
    }
  //  console.log(website);
    two()
}
//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username);
// =========================Intresting=========================

function addone(num){
    return num + 1;
}
console.log(addone(5))
addtwo(5) // ReferenceError: Cannot access 'addtwo' before initialization
//  function addtwo(num){
//     return num + 2
// }
const addtwo = function(num){
    return num +2
}

