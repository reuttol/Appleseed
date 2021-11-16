const arr = [1, 2, 3, 4, 56, 98, 124, 0, -5];

//* 1. max
const max = arr.reduce((acc, cur) => acc > cur ? acc : cur);

//* 2. sum of even numbers
const evenSum = arr.reduce((acc, cur) => cur%2 ? acc + cur : acc);

//* 3. average 
const avg = arr.reduce((acc, cur) => acc + cur/arr.length, 0);

console.log(max);
console.log(evenSum);
console.log(avg);

