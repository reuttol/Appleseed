const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Pizza", "Hamburgers"];

function compareArrays(arr1, arr2){
    const shared = [];
    
    for(let i=0; i<arr1.length; i++)
        for(let j=0; j<arr2.length; j++)
            if(arr1[i] === arr2[j])
                shared.push(arr1[i]);
    
    return shared.length === 0 ? false : shared;
}

console.log(compareArrays(food, food1));
console.log(compareArrays(food, food2));