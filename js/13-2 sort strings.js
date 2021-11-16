//* a.
const foods = ["falafel", "sabich", "hummus", "pizza with extra", "pineapple"];

console.log(foods.slice().sort());
console.log(foods.slice().reverse());

//* b.
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "Hummus",
    "pizza with extra pineapple",
    ];

console.log(foodsWithUpperCase.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
console.log(foodsWithUpperCase.slice().sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())));
 //* c.

 const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(words.slice().sort((a,b) => a.length - b.length));