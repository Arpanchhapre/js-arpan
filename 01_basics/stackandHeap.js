let userOne = {
    email : "arpan@GMAIL.COM",
    upi : "user@YBL",
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);