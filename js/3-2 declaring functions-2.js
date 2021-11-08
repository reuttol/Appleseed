/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
//* First function
//! Original
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
//! Explicit
const welcome = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome; 
}
//! Implicit
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

//* Second function
//! Original
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
//! Explicit
const power = a =>{
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
//! Implicit
const power = a => Math.pow(a, 2);

// From function expressions to IIFE functions.
//* First function
//! Original
const squareRoot = a => Math.sqrt(a);
//! IIFE
(function(a){
    return Math.sqrt(a);
})();
//! With arrow function
//need to put values inside the bracets!
((a) => Math.sqrt(a))();

//* Second functiom
//! Original
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
//! IIFE
(function(a,b){
    return Math.random() * (a - b) + b;
})();

//! With arrow function
((a,b) => {
    return Math.random() * (a - b) + b; 
})();