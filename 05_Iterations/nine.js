const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, cyrrval) {
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc , currval) => acc + currval,0 )
console.log(myTotal)

const shoppingCart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "python",
        price : 3999

    },
    {
        itemname : "data Science",
        price : 5999

    }
]

const cartTotal = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(cartTotal);
