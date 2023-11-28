const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
console.log(this); 

// function chai(){
//     let username = "hitesh" // this is not working as it is that work in objects
//     console.log(this);
// }

// chai()

const chai =  ()=> {
    let username = "hotesh"
    console.log(this)
}
//chai()


// const addtwo = (num1 , num2) => {
// return num1+num2
// }

//const addtwo = (num1,num2) => (num1+num2) // if you use curly braces ({}) then u will have to 
                                            // write return keyword otherwise not
                                            //called implicit return


const addtwo = (num1,num2) => ({username:"arpan"})                                            
console.log(addtwo(2,9)); // output : { username: 'arpan' }


const myArray = [1,2,3,4,5]
//myArray.forEach(())





