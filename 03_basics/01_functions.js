// function addTwoNo(number1 , number2){  // parameters(number1,number 2)
//     console.log(number1+number2)
// }
function addTwoNo(number1 , number2){  
  let results = number1 + number2
  return results
}


addTwoNo(3,null) // arguments(3,null)

const result = addTwoNo(3,5)
//console.log("Result:",result)

function loginUserMsg(username = "sam"){ 
    if(username === undefined){ // if(!username)
      console.log("please enter a username")
      return
    }
    return `${username} just logged in`
}

//console.log(loginUserMsg("arpan"))

console.log(loginUserMsg("arpan"))