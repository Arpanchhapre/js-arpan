const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel.push(dc);
//console.log(marvel); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel[3][1])

const allHeros = marvel.concat(dc)
//console.log(allHeros)

const allNewHeros = [...marvel,...dc]; // spread operator

console.log(allNewHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // flat => all elements in one array
console.log(real_another_array)

console.log(Array.isArray("arpan"))
console.log(Array.from("arpan"))

console.log(Array.from({name:"arpan"})) // intresting case

let score1 = 100
let score2 = 200
let score3 = 300
// Arrays.of => return the array of set of element
const arr = Array.of(score1,score2,score3) 
console.log(arr);


