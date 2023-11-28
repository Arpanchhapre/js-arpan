// Immediately Invoked Function Expression (IIFE)
// dont want poolution from global scope
// for invoke database code

(function chai(){ // named IIFE
    console.log("DB Connected");
})(); // in IIFE we have to put a semicolon at the end of function for next fuction to be execute

( (name) =>{ // Unnamed IIFE
    console.log(`DB Connected Two ${name}`)
})('hitesh')
