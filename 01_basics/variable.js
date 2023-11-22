const accountID = 14443;
let acocontEmail = "chhaprearpan@gmail.com";
var accontPassword = "12345";
accountCity = "jaipur";
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//accountID = 2; // not allowed
acocontEmail = "arpan1656.com";
accontPassword = "12121";
accountCity = "Benglore";
console.log(accountID);
console.log(acocontEmail);
console.log(accontPassword);

console.table([accountID,acocontEmail,accontPassword,accountCity,accountState])