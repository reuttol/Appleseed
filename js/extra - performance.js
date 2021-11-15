
const myObj = {};
const myMap = new Map();
const maxCount = 1000000;

console.time("Add to object")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
    myObj.i = i;
}
console.timeEnd("Add to object") // <---- Stops the time

console.time("Add to map")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
    myMap.set(i, i);
}
console.timeEnd("Add to map") // <---- Stops the time

console.time("find in object")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
    myMap['10456'];
}
console.timeEnd("find in object") // <---- Stops the time

console.time("find in map")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
    myMap.get(10456);
}
console.timeEnd("find in map") // <---- Stops the time
