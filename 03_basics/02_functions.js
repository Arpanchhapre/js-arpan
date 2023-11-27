function calculateCartPrice(val1,val2,...num1) { // rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));