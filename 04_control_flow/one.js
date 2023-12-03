let balance = 200
if(balance == 200) console.log("yes");

const userLogin = true;
const debitCard = true
const loggedInFromGoggle = true
const loggedInFromEmail = true

if(userLogin&&debitCard){
    console.log("allow to buy course");
}
if(loggedInFromEmail||loggedInFromGoggle){
    console.log("user Logged In");
}
