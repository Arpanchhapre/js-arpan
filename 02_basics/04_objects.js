const tinderUser = new Object()
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "sammy@gmail.com",
    fullname : {
        userfullname : {
            firstname : "arpan",
            lastname: "chhapre"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4) // join two objects
console.log(obj3)

const obj5 = {...obj1,...obj2,...obj4}
console.log(obj5)

const user = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    }
]

console.log(user[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // fetch all the keys of objects

console.log(Object.values(tinderUser)) // fetch all the values of objects

console.log(Object.entries(tinderUser)) // fetch all the entrins as arrays inside array from objets

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


