const name = "arpan"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repocount is ${repoCount}`) 

const gameName = new String("arpan-chhapre");
console.log(gameName[0])

console.log(gameName.__proto__)


console.log(gameName.length)

console.log(gameName.toUpperCase()) // does not change original variable because of stack memory
console.log(gameName)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(4);
console.log(newString)

const anotherString = gameName.slice(-13,-4)

console.log(anotherString)

const newStringOne = "  arpan   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://arpan.com/arpan%20chhapre"

console.log(url.replace('%20','-'))

console.log(url.includes('arpan'))
console.log(url.includes('swati'))

console.log(gameName.split('-'))
const arr = gameName.split('-')
console.log(arr[0])
console.log(arr.length)