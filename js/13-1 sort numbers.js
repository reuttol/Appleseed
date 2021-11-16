const numbers = [1, -5, 666, 2, 400, 11];

const desc = numbers.slice().sort((a,b) => b-a);
const asc = numbers.slice().sort((a,b) => a-b);

console.log(`Original Array: ${numbers}`);
console.log(`Descending oreder: ${desc}`);
console.log(`Ascending oreder: ${asc}`);