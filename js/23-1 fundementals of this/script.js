//* 1.
// the log statement is in the global scope -> will print global scope = window
console.log(this);

//* 2.
// a. log will be: Hello undefined. the greet() is called from the global scope where
// this dosen't have a name key.
const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
    // b1. greet: function(){
    //    console.log(`Hello ${this.name}`);
    //},

};
// b2. this.name = myObj.name;
// myObj.greet();

//* 3. 

const myFuncDec = function () {
    console.log(this);
};

myFuncDec();

//* 4.
// prints the global this because arrow function does not have a this binding it inherits from parent->
// in this case the parent is the global scope, the window. lexical scopingu.
const myFuncArrow = () => {
    console.log(this);
};

myFuncArrow();

//* 5.

// a. d is in the global scope (which is window) and the event listener inherits the parent 
// (d) this.
const d = document.querySelector(".element");
d.addEventListener('click', () => {
    console.log(this);
});

// b. we can fix it by puting it in a function declarion. d will get the this of the func function.
d.addEventListener('click', func);
function func(){
    console.log(this);
}