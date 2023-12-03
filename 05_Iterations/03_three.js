// for of

// ["", "",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const value of arr) {
     console.log(value);
}

const greetings = "hello world!"
for(const greet of greetings){
    if(greet == " "){
        continue
    }
    console.log("each character is "+greet)
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA','United States of America')
map.set('Fr','France')

console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    game1 : 'nfs',
    game2 : 'Spiderman'
}

for(const [key,value] of myObject) // myObject is not iteratable 
{
    console.log(key , value)
}