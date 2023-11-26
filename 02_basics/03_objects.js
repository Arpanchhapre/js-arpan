//singleton => when we declare objects as literals then it will never become singleton but when we declare object with constructor
// it will become singleton
//Object.create   => as a constructor

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "arpan",
    "full name" : "arpan Chhapre",
    [mySym] : "myKey1",
    age : 22,
    location : "banglore",
    email : "arpan@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.age);
console.log(JsUser["email"]) // square notation
console.log(JsUser["full name"])

console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])


JsUser.email = "chhaprearpan@gmail.com";
console.log(JsUser)
//Object.freeze(JsUser) // for Object Freezing

JsUser.greeting = function(){
    console.log("hello js user")
}

console.log(JsUser.greeting())

JsUser.g