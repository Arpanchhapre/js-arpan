const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","java","cpp"]
for (const key in programming) {
   console.log(programming[key])
}